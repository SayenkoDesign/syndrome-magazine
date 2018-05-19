"use strict";

/*! 
* jQuery Double Tap To Go - v1.0.0 - 2015-04-20
* http://github.com/zenopopovici/DoubleTapToGo
* Copyright (c) 2015 Graffino
*/
!function ($, window, document, undefined) {
  $.fn.doubleTapToGo = function (action) {
    return "ontouchstart" in window || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i) ? (this.each("unbind" === action ? function () {
      $(this).off(), $(document).off("click touchstart MSPointerDown", handleTouch);
    } : function () {
      function handleTouch(e) {
        for (var resetItem = !0, parents = $(e.target).parents(), i = 0; i < parents.length; i++) {
          parents[i] == curItem[0] && (resetItem = !1);
        }resetItem && (curItem = !1);
      }var curItem = !1;$(this).on("click", function (e) {
        var item = $(this);item[0] != curItem[0] && (e.preventDefault(), curItem = item);
      }), $(document).on("click touchstart MSPointerDown", handleTouch);
    }), this) : !1;
  };
}(jQuery, window, document);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Infinite Scroll PACKAGED v3.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2017 Metafizzy
 */

!function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";
  function i(i, r, l) {
    function a(t, e, n) {
      var o,
          r = "$()." + i + '("' + e + '")';return t.each(function (t, a) {
        var h = l.data(a, i);if (!h) return void s(i + " not initialized. Cannot call methods, i.e. " + r);var c = h[e];if (!c || "_" == e.charAt(0)) return void s(r + " is not a valid method");var u = c.apply(h, n);o = void 0 === o ? u : o;
      }), void 0 !== o ? o : t;
    }function h(t, e) {
      t.each(function (t, n) {
        var o = l.data(n, i);o ? (o.option(e), o._init()) : (o = new r(n, e), l.data(n, i, o));
      });
    }l = l || e || t.jQuery, l && (r.prototype.option || (r.prototype.option = function (t) {
      l.isPlainObject(t) && (this.options = l.extend(!0, this.options, t));
    }), l.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);return a(this, t, e);
      }return h(this, t), this;
    }, n(l));
  }function n(t) {
    !t || t && t.bridget || (t.bridget = i);
  }var o = Array.prototype.slice,
      r = t.console,
      s = "undefined" == typeof r ? function () {} : function (t) {
    r.error(t);
  };return n(e || t.jQuery), i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : undefined, function () {
  function t() {}var e = t.prototype;return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          n = i[t] = i[t] || [];return n.indexOf(e) == -1 && n.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
          n = i[t] = i[t] || {};return n[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];if (i && i.length) {
      var n = i.indexOf(e);return n != -1 && i.splice(n, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];if (i && i.length) {
      var n = 0,
          o = i[n];e = e || [];for (var r = this._onceEvents && this._onceEvents[t]; o;) {
        var s = r && r[o];s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n];
      }return this;
    }
  }, e.allOff = e.removeAllListeners = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";
  var t = function () {
    var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
          o = n + "MatchesSelector";if (t[o]) return o;
    }
  }();return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var i = {};i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  }, i.makeArray = function (t) {
    var e = [];if (Array.isArray(t)) e = t;else if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);return e;
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);i != -1 && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, i.filterFindElements = function (t, n) {
    t = i.makeArray(t);var o = [];return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);e(t, n) && o.push(t);for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) {
          o.push(i[r]);
        }
      }
    }), o;
  }, i.debounceMethod = function (t, e, i) {
    var n = t.prototype[e],
        o = e + "Timeout";t.prototype[e] = function () {
      var t = this[o];t && clearTimeout(t);var e = arguments,
          r = this;this[o] = setTimeout(function () {
        n.apply(r, e), delete r[o];
      }, i || 100);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };var n = t.console;return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var r = i.toDashed(o),
          s = "data-" + r,
          l = document.querySelectorAll("[" + s + "]"),
          a = document.querySelectorAll(".js-" + r),
          h = i.makeArray(l).concat(i.makeArray(a)),
          c = s + "-options",
          u = t.jQuery;h.forEach(function (t) {
        var i,
            r = t.getAttribute(s) || t.getAttribute(c);try {
          i = r && JSON.parse(r);
        } catch (l) {
          return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + l));
        }var a = new e(t, i);u && u.data(t, o, a);
      });
    });
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("infinite-scroll/js/core", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils"], function (i, n) {
    return e(t, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("fizzy-ui-utils")) : t.InfiniteScroll = e(t, t.EvEmitter, t.fizzyUIUtils);
}(window, function (t, e, i) {
  function n(t, e) {
    var s = i.getQueryElement(t);if (!s) return void console.error("Bad element for InfiniteScroll: " + (s || t));if (t = s, t.infiniteScrollGUID) {
      var l = r[t.infiniteScrollGUID];return l.option(e), l;
    }this.element = t, this.options = i.extend({}, n.defaults), this.option(e), o && (this.$element = o(this.element)), this.create();
  }var o = t.jQuery,
      r = {};n.defaults = {}, n.create = {}, n.destroy = {};var s = n.prototype;i.extend(s, e.prototype);var l = 0;s.create = function () {
    var t = this.guid = ++l;if (this.element.infiniteScrollGUID = t, r[t] = this, this.pageIndex = 1, this.loadCount = 0, this.updateGetPath(), !this.getPath) return void console.error("Disabling InfiniteScroll");this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit();for (var e in n.create) {
      n.create[e].call(this);
    }
  }, s.option = function (t) {
    i.extend(this.options, t);
  }, s.callOnInit = function () {
    var t = this.options.onInit;t && t.call(this, this);
  }, s.dispatchEvent = function (t, e, i) {
    this.log(t, i);var n = e ? [e].concat(i) : i;if (this.emitEvent(t, n), o && this.$element) {
      t += ".infiniteScroll";var r = t;if (e) {
        var s = o.Event(e);s.type = t, r = s;
      }this.$element.trigger(r, i);
    }
  };var a = { initialized: function initialized(t) {
      return "on " + t;
    }, request: function request(t) {
      return "URL: " + t;
    }, load: function load(t, e) {
      return (t.title || "") + ". URL: " + e;
    }, error: function error(t, e) {
      return t + ". URL: " + e;
    }, append: function append(t, e, i) {
      return i.length + " items. URL: " + e;
    }, last: function last(t, e) {
      return "URL: " + e;
    }, history: function history(t, e) {
      return "URL: " + e;
    }, pageIndex: function pageIndex(t, e) {
      return "current page determined to be: " + t + " from " + e;
    } };s.log = function (t, e) {
    if (this.options.debug) {
      var i = "[InfiniteScroll] " + t,
          n = a[t];n && (i += ". " + n.apply(this, e)), console.log(i);
    }
  }, s.updateMeasurements = function () {
    this.windowHeight = t.innerHeight;var e = this.element.getBoundingClientRect();this.top = e.top + t.pageYOffset;
  }, s.updateScroller = function () {
    var e = this.options.elementScroll;if (!e) return void (this.scroller = t);if (this.scroller = e === !0 ? this.element : i.getQueryElement(e), !this.scroller) throw "Unable to find elementScroll: " + e;
  }, s.updateGetPath = function () {
    var t = this.options.path;if (!t) return void console.error("InfiniteScroll path option required. Set as: " + t);var e = typeof t === "undefined" ? "undefined" : _typeof(t);if ("function" == e) return void (this.getPath = t);var i = "string" == e && t.match("{{#}}");return i ? void this.updateGetPathTemplate(t) : void this.updateGetPathSelector(t);
  }, s.updateGetPathTemplate = function (t) {
    this.getPath = function () {
      var e = this.pageIndex + 1;return t.replace("{{#}}", e);
    }.bind(this);var e = t.replace("{{#}}", "(\\d\\d?\\d?)"),
        i = new RegExp(e),
        n = location.href.match(i);n && (this.pageIndex = parseInt(n[1], 10), this.log("pageIndex", this.pageIndex, "template string"));
  };var h = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];return s.updateGetPathSelector = function (t) {
    var e = document.querySelector(t);if (!e) return void console.error("Bad InfiniteScroll path option. Next link not found: " + t);for (var i, n, o = e.getAttribute("href"), r = 0; o && r < h.length; r++) {
      n = h[r];var s = o.match(n);if (s) {
        i = s.slice(1);break;
      }
    }return i ? (this.isPathSelector = !0, this.getPath = function () {
      var t = this.pageIndex + 1;return i[0] + t + i[2];
    }.bind(this), this.pageIndex = parseInt(i[1], 10) - 1, void this.log("pageIndex", [this.pageIndex, "next link"])) : void console.error("InfiniteScroll unable to parse next link href: " + o);
  }, s.updateGetAbsolutePath = function () {
    var t = this.getPath(),
        e = t.match(/^http/) || t.match(/^\//);if (e) return void (this.getAbsolutePath = this.getPath);var i = location.pathname,
        n = i.substring(0, i.lastIndexOf("/"));this.getAbsolutePath = function () {
      return n + "/" + this.getPath();
    };
  }, n.create.hideNav = function () {
    var t = i.getQueryElement(this.options.hideNav);t && (t.style.display = "none", this.nav = t);
  }, n.destroy.hideNav = function () {
    this.nav && (this.nav.style.display = "");
  }, s.destroy = function () {
    this.allOff();for (var t in n.destroy) {
      n.destroy[t].call(this);
    }delete this.element.infiniteScrollGUID, delete r[this.guid];
  }, n.throttle = function (t, e) {
    e = e || 200;var i, n;return function () {
      var o = +new Date(),
          r = arguments,
          s = function () {
        i = o, t.apply(this, r);
      }.bind(this);i && o < i + e ? (clearTimeout(n), n = setTimeout(s, e)) : s();
    };
  }, n.data = function (t) {
    t = i.getQueryElement(t);var e = t && t.infiniteScrollGUID;return e && r[e];
  }, n.setJQuery = function (t) {
    o = t;
  }, i.htmlInit(n, "infinite-scroll"), o && o.bridget && o.bridget("infiniteScroll", n), n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("infinite-scroll/js/page-load", ["./core"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core")) : e(t, t.InfiniteScroll);
}(window, function (t, e) {
  function i(t) {
    for (var e = document.createDocumentFragment(), i = 0; t && i < t.length; i++) {
      e.appendChild(t[i]);
    }return e;
  }function n(t) {
    for (var e = t.querySelectorAll("script"), i = 0; i < e.length; i++) {
      var n = e[i],
          r = document.createElement("script");o(n, r), n.parentNode.replaceChild(r, n);
    }
  }function o(t, e) {
    for (var i = t.attributes, n = 0; n < i.length; n++) {
      var o = i[n];e.setAttribute(o.name, o.value);
    }
  }function r(t, e, i, n) {
    var o = new XMLHttpRequest();o.open("GET", t), o.responseType = e || "", o.onload = function () {
      if (200 == o.status) i(o.response);else {
        var t = new Error(o.statusText);n(t);
      }
    }, o.onerror = function () {
      var e = new Error("Network error requesting " + t);n(e);
    }, o.send();
  }var s = e.prototype;return e.defaults.loadOnScroll = !0, e.defaults.checkLastPage = !0, e.defaults.responseType = "document", e.create.pageLoad = function () {
    this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("append", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer);
  }, s.onScrollThresholdLoad = function () {
    this.options.loadOnScroll && this.loadNextPage();
  }, s.loadNextPage = function () {
    if (!this.isLoading && this.canLoad) {
      var t = this.getAbsolutePath();this.isLoading = !0;var e = function (e) {
        this.onPageLoad(e, t);
      }.bind(this),
          i = function (e) {
        this.onPageError(e, t);
      }.bind(this);r(t, this.options.responseType, e, i), this.dispatchEvent("request", null, [t]);
    }
  }, s.onPageLoad = function (t, e) {
    return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [t, e]), this.appendNextPage(t, e), t;
  }, s.appendNextPage = function (t, e) {
    var n = this.options.append,
        o = "document" == this.options.responseType;if (o && n) {
      var r = t.querySelectorAll(n),
          s = i(r),
          l = function () {
        this.appendItems(r, s), this.isLoading = !1, this.dispatchEvent("append", null, [t, e, r]);
      }.bind(this);this.options.outlayer ? this.appendOutlayerItems(s, l) : l();
    }
  }, s.appendItems = function (t, e) {
    t && t.length && (e = e || i(t), n(e), this.element.appendChild(e));
  }, s.appendOutlayerItems = function (i, n) {
    var o = e.imagesLoaded || t.imagesLoaded;return o ? void o(i, n) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"), void (this.isLoading = !1));
  }, s.onAppendOutlayer = function (t, e, i) {
    this.options.outlayer.appended(i);
  }, s.checkLastPage = function (t, e) {
    var i = this.options.checkLastPage;if (i) {
      var n = this.options.path;if ("function" == typeof n) {
        var o = this.getPath();if (!o) return void this.lastPageReached(t, e);
      }var r;if ("string" == typeof i ? r = i : this.isPathSelector && (r = n), r && t.querySelector) {
        var s = t.querySelector(r);s || this.lastPageReached(t, e);
      }
    }
  }, s.lastPageReached = function (t, e) {
    this.canLoad = !1, this.dispatchEvent("last", null, [t, e]);
  }, s.onPageError = function (t, e) {
    return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [t, e]), t;
  }, e.create.prefill = function () {
    if (this.options.prefill) {
      var t = this.options.append;if (!t) return void console.error("append option required for prefill. Set as :" + t);this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill();
    }
  }, s.prefill = function () {
    var t = this.getPrefillDistance();this.isPrefilling = t >= 0, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill();
  }, s.getPrefillDistance = function () {
    return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight;
  }, s.stopPrefill = function () {
    console.log("stopping prefill"), this.off("append", this.prefill);
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("infinite-scroll/js/scroll-watch", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
    return e(t, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = e.prototype;return e.defaults.scrollThreshold = 400, e.create.scrollWatch = function () {
    this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);var t = this.options.scrollThreshold,
        e = t || 0 === t;e && this.enableScrollWatch();
  }, e.destroy.scrollWatch = function () {
    this.disableScrollWatch();
  }, n.enableScrollWatch = function () {
    this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0));
  }, n.disableScrollWatch = function () {
    this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching);
  }, n.bindScrollWatchEvents = function (e) {
    var i = e ? "addEventListener" : "removeEventListener";this.scroller[i]("scroll", this.pageScrollHandler), t[i]("resize", this.resizeHandler);
  }, n.onPageScroll = e.throttle(function () {
    var t = this.getBottomDistance();t <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold");
  }), n.getBottomDistance = function () {
    return this.options.elementScroll ? this.getElementBottomDistance() : this.getWindowBottomDistance();
  }, n.getWindowBottomDistance = function () {
    var e = this.top + this.element.clientHeight,
        i = t.pageYOffset + this.windowHeight;return e - i;
  }, n.getElementBottomDistance = function () {
    var t = this.scroller.scrollHeight,
        e = this.scroller.scrollTop + this.scroller.clientHeight;return t - e;
  }, n.onResize = function () {
    this.updateMeasurements();
  }, i.debounceMethod(e, "onResize", 150), e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("infinite-scroll/js/history", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
    return e(t, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  var n = e.prototype;e.defaults.history = "replace";var o = document.createElement("a");return e.create.history = function () {
    if (this.options.history) {
      o.href = this.getAbsolutePath();var t = o.origin || o.protocol + "//" + o.host,
          e = t == location.origin;return e ? void (this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad()) : void console.error("[InfiniteScroll] cannot set history with different origin: " + o.origin + " on " + location.origin + " . History behavior disabled.");
    }
  }, n.createHistoryAppend = function () {
    this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{ top: 0, path: location.href, title: document.title }], this.scrollPageIndex = 0, this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0);
  }, n.bindHistoryAppendEvents = function (e) {
    var i = e ? "addEventListener" : "removeEventListener";this.scroller[i]("scroll", this.scrollHistoryHandler), t[i]("unload", this.unloadHandler);
  }, n.createHistoryPageLoad = function () {
    this.on("load", this.onPageLoadHistory);
  }, e.destroy.history = n.destroyHistory = function () {
    var t = this.options.history && this.options.append;t && this.bindHistoryAppendEvents(!1);
  }, n.onAppendHistory = function (t, e, i) {
    var n = i[0],
        r = this.getElementScrollY(n);o.href = e, this.scrollPages.push({ top: r, path: o.href, title: t.title });
  }, n.getElementScrollY = function (t) {
    return this.options.elementScroll ? this.getElementElementScrollY(t) : this.getElementWindowScrollY(t);
  }, n.getElementWindowScrollY = function (e) {
    var i = e.getBoundingClientRect();return i.top + t.pageYOffset;
  }, n.getElementElementScrollY = function (t) {
    return t.offsetTop - this.top;
  }, n.onScrollHistory = function () {
    for (var t, e, i = this.getScrollViewY(), n = 0; n < this.scrollPages.length; n++) {
      var o = this.scrollPages[n];if (o.top >= i) break;t = n, e = o;
    }t != this.scrollPageIndex && (this.scrollPageIndex = t, this.setHistory(e.title, e.path));
  }, i.debounceMethod(e, "onScrollHistory", 150), n.getScrollViewY = function () {
    return this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : t.pageYOffset + this.windowHeight / 2;
  }, n.setHistory = function (t, e) {
    var i = this.options.history,
        n = i && history[i + "State"];n && (history[i + "State"](null, t, e), this.options.historyTitle && (document.title = t), this.dispatchEvent("history", null, [t, e]));
  }, n.onUnload = function () {
    var e = this.scrollPageIndex;if (0 !== e) {
      var i = this.scrollPages[e],
          n = t.pageYOffset - i.top + this.top;this.destroyHistory(), scrollTo(0, n);
    }
  }, n.onPageLoadHistory = function (t, e) {
    this.setHistory(t.title, e);
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("infinite-scroll/js/button", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
    return e(t, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  function n(t, e) {
    this.element = t, this.infScroll = e, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), e.on("request", this.disable.bind(this)), e.on("load", this.enable.bind(this)), e.on("error", this.hide.bind(this)), e.on("last", this.hide.bind(this));
  }return e.create.button = function () {
    var t = i.getQueryElement(this.options.button);if (t) return void (this.button = new n(t, this));
  }, e.destroy.button = function () {
    this.button && this.button.destroy();
  }, n.prototype.onClick = function (t) {
    t.preventDefault(), this.infScroll.loadNextPage();
  }, n.prototype.enable = function () {
    this.element.removeAttribute("disabled");
  }, n.prototype.disable = function () {
    this.element.disabled = "disabled";
  }, n.prototype.hide = function () {
    this.element.style.display = "none";
  }, n.prototype.destroy = function () {
    this.element.removeEventListener(this.clickHandler);
  }, e.Button = n, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("infinite-scroll/js/status", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
    return e(t, i, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("./core"), require("fizzy-ui-utils")) : e(t, t.InfiniteScroll, t.fizzyUIUtils);
}(window, function (t, e, i) {
  function n(t) {
    r(t, "none");
  }function o(t) {
    r(t, "block");
  }function r(t, e) {
    t && (t.style.display = e);
  }var s = e.prototype;return e.create.status = function () {
    var t = i.getQueryElement(this.options.status);if (t) {
      this.statusElement = t, this.statusEventElements = { request: t.querySelector(".infinite-scroll-request"), error: t.querySelector(".infinite-scroll-error"), last: t.querySelector(".infinite-scroll-last") }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus);var e = this.options.append ? "append" : "load";this.on(e, this.hideAllStatus);
    }
  }, s.showRequestStatus = function () {
    this.showStatus("request");
  }, s.showErrorStatus = function () {
    this.showStatus("error");
  }, s.showLastStatus = function () {
    this.showStatus("last");
  }, s.showStatus = function (t) {
    o(this.statusElement), this.hideStatusEventElements();var e = this.statusEventElements[t];o(e);
  }, s.hideAllStatus = function () {
    n(this.statusElement), this.hideStatusEventElements();
  }, s.hideStatusEventElements = function () {
    for (var t in this.statusEventElements) {
      var e = this.statusEventElements[t];n(e);
    }
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["infinite-scroll/js/core", "infinite-scroll/js/page-load", "infinite-scroll/js/scroll-watch", "infinite-scroll/js/history", "infinite-scroll/js/button", "infinite-scroll/js/status"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = e(require("./core"), require("./page-load"), require("./scroll-watch"), require("./history"), require("./button"), require("./status")));
}(window, function (t) {
  return t;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter);
}("undefined" != typeof window ? window : undefined, function (t, e) {
  function i(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }return t;
  }function n(t) {
    var e = [];if (Array.isArray(t)) e = t;else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);return e;
  }function o(t, e, r) {
    return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), l && (this.jqDeferred = new l.Deferred()), void setTimeout(function () {
      this.check();
    }.bind(this))) : new o(t, e, r);
  }function r(t) {
    this.img = t;
  }function s(t, e) {
    this.url = t, this.element = e, this.img = new Image();
  }var l = t.jQuery,
      a = t.console;o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, o.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);var e = t.nodeType;if (e && h[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];this.addImage(o);
      }if ("string" == typeof this.options.background) {
        var r = t.querySelectorAll(this.options.background);for (n = 0; n < r.length; n++) {
          var s = r[n];this.addElementBackgroundImages(s);
        }
      }
    }
  };var h = { 1: !0, 9: !0, 11: !0 };return o.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
      var o = n && n[2];o && this.addBackground(o, t), n = i.exec(e.backgroundImage);
    }
  }, o.prototype.addImage = function (t) {
    var e = new r(t);this.images.push(e);
  }, o.prototype.addBackground = function (t, e) {
    var i = new s(t, e);this.images.push(i);
  }, o.prototype.check = function () {
    function t(t, i, n) {
      setTimeout(function () {
        e.progress(t, i, n);
      });
    }var e = this;return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
      e.once("progress", t), e.check();
    }) : void this.complete();
  }, o.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e);
  }, o.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[e](this);
    }
  }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
    var t = this.getIsImageComplete();return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth;
  }, r.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);
  }, r.prototype.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;var t = this.getIsImageComplete();t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, s.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
  }, o.makeJQueryPlugin = function (e) {
    e = e || t.jQuery, e && (l = e, l.fn.imagesLoaded = function (t, e) {
      var i = new o(this, t, e);return i.jqDeferred.promise(l(this));
    });
  }, o.makeJQueryPlugin(), o;
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 *	jQuery dotdotdot 1.8.3
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */

(function ($, undef) {
    'use strict';

    if ($.fn.dotdotdot) {
        return;
    }

    $.fn.dotdotdot = function (o) {
        if (this.length === 0) {
            $.fn.dotdotdot.debug('No element found for "' + this.selector + '".');
            return this;
        }
        if (this.length > 1) {
            return this.each(function () {
                $(this).dotdotdot(o);
            });
        }

        var $dot = this;
        var orgContent = $dot.contents();

        if ($dot.data('dotdotdot')) {
            $dot.trigger('destroy.dot');
        }

        $dot.data('dotdotdot-style', $dot.attr('style') || '');
        $dot.css('word-wrap', 'break-word');
        if ($dot.css('white-space') === 'nowrap') {
            $dot.css('white-space', 'normal');
        }

        $dot.bind_events = function () {
            $dot.bind('update.dot', function (e, c) {
                $dot.removeClass("is-truncated");
                e.preventDefault();
                e.stopPropagation();

                switch (_typeof(opts.height)) {
                    case 'number':
                        opts.maxHeight = opts.height;
                        break;

                    case 'function':
                        opts.maxHeight = opts.height.call($dot[0]);
                        break;

                    default:
                        opts.maxHeight = getTrueInnerHeight($dot);
                        break;
                }

                opts.maxHeight += opts.tolerance;

                if (typeof c != 'undefined') {
                    if (typeof c == 'string' || 'nodeType' in c && c.nodeType === 1) {
                        c = $('<div />').append(c).contents();
                    }
                    if (c instanceof $) {
                        orgContent = c;
                    }
                }

                $inr = $dot.wrapInner('<div class="dotdotdot" />').children();
                $inr.contents().detach().end().append(orgContent.clone(true)).find('br').replaceWith('  <br />  ').end().css({
                    'height': 'auto',
                    'width': 'auto',
                    'border': 'none',
                    'padding': 0,
                    'margin': 0
                });

                var after = false,
                    trunc = false;

                if (conf.afterElement) {
                    after = conf.afterElement.clone(true);
                    after.show();
                    conf.afterElement.detach();
                }

                if (test($inr, opts)) {
                    if (opts.wrap == 'children') {
                        trunc = children($inr, opts, after);
                    } else {
                        trunc = ellipsis($inr, $dot, $inr, opts, after);
                    }
                }
                $inr.replaceWith($inr.contents());
                $inr = null;

                if ($.isFunction(opts.callback)) {
                    opts.callback.call($dot[0], trunc, orgContent);
                }

                conf.isTruncated = trunc;
                return trunc;
            }).bind('isTruncated.dot', function (e, fn) {
                e.preventDefault();
                e.stopPropagation();

                if (typeof fn == 'function') {
                    fn.call($dot[0], conf.isTruncated);
                }
                return conf.isTruncated;
            }).bind('originalContent.dot', function (e, fn) {
                e.preventDefault();
                e.stopPropagation();

                if (typeof fn == 'function') {
                    fn.call($dot[0], orgContent);
                }
                return orgContent;
            }).bind('destroy.dot', function (e) {
                e.preventDefault();
                e.stopPropagation();

                $dot.unwatch().unbind_events().contents().detach().end().append(orgContent).attr('style', $dot.data('dotdotdot-style') || '').removeClass('is-truncated').data('dotdotdot', false);
            });
            return $dot;
        }; //	/bind_events

        $dot.unbind_events = function () {
            $dot.unbind('.dot');
            return $dot;
        }; //	/unbind_events

        $dot.watch = function () {
            $dot.unwatch();
            if (opts.watch == 'window') {
                var $window = $(window),
                    _wWidth = $window.width(),
                    _wHeight = $window.height();

                $window.bind('resize.dot' + conf.dotId, function () {
                    if (_wWidth != $window.width() || _wHeight != $window.height() || !opts.windowResizeFix) {
                        _wWidth = $window.width();
                        _wHeight = $window.height();

                        if (watchInt) {
                            clearInterval(watchInt);
                        }
                        watchInt = setTimeout(function () {
                            $dot.trigger('update.dot');
                        }, 100);
                    }
                });
            } else {
                watchOrg = getSizes($dot);
                watchInt = setInterval(function () {
                    if ($dot.is(':visible')) {
                        var watchNew = getSizes($dot);
                        if (watchOrg.width != watchNew.width || watchOrg.height != watchNew.height) {
                            $dot.trigger('update.dot');
                            watchOrg = watchNew;
                        }
                    }
                }, 500);
            }
            return $dot;
        };
        $dot.unwatch = function () {
            $(window).unbind('resize.dot' + conf.dotId);
            if (watchInt) {
                clearInterval(watchInt);
            }
            return $dot;
        };

        var opts = $.extend(true, {}, $.fn.dotdotdot.defaults, o),
            conf = {},
            watchOrg = {},
            watchInt = null,
            $inr = null;

        if (!(opts.lastCharacter.remove instanceof Array)) {
            opts.lastCharacter.remove = $.fn.dotdotdot.defaultArrays.lastCharacter.remove;
        }
        if (!(opts.lastCharacter.noEllipsis instanceof Array)) {
            opts.lastCharacter.noEllipsis = $.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis;
        }

        conf.afterElement = getElement(opts.after, $dot);
        conf.isTruncated = false;
        conf.dotId = dotId++;

        $dot.data('dotdotdot', true).bind_events().trigger('update.dot');

        if (opts.watch) {
            $dot.watch();
        }

        return $dot;
    };

    //	public
    $.fn.dotdotdot.defaults = {
        'ellipsis': '... ',
        'wrap': 'word',
        'fallbackToLetter': true,
        'lastCharacter': {},
        'tolerance': 0,
        'callback': null,
        'after': null,
        'height': null,
        'watch': false,
        'windowResizeFix': true,
        'maxLength': null
    };
    $.fn.dotdotdot.defaultArrays = {
        'lastCharacter': {
            'remove': [' ', '\u3000', ',', ';', '.', '!', '?'],
            'noEllipsis': []
        }
    };
    $.fn.dotdotdot.debug = function (msg) {};

    //	private
    var dotId = 1;

    function children($elem, o, after) {
        var $elements = $elem.children(),
            isTruncated = false;

        $elem.empty();

        for (var a = 0, l = $elements.length; a < l; a++) {
            var $e = $elements.eq(a);
            $elem.append($e);
            if (after) {
                $elem.append(after);
            }
            if (test($elem, o)) {
                $e.remove();
                isTruncated = true;
                break;
            } else {
                if (after) {
                    after.detach();
                }
            }
        }
        return isTruncated;
    }

    function ellipsis($elem, $d, $i, o, after) {
        var isTruncated = false;

        //	Don't put the ellipsis directly inside these elements
        var notx = 'a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style';

        //	Don't remove these elements even if they are after the ellipsis
        var noty = 'script, .dotdotdot-keep';

        $elem.contents().detach().each(function () {

            var e = this,
                $e = $(e);

            if (typeof e == 'undefined') {
                return true;
            } else if ($e.is(noty)) {
                $elem.append($e);
            } else if (isTruncated) {
                return true;
            } else {
                $elem.append($e);
                if (after && !$e.is(o.after) && !$e.find(o.after).length) {
                    $elem[$elem.is(notx) ? 'after' : 'append'](after);
                }
                if (test($i, o)) {
                    if (e.nodeType == 3) // node is TEXT
                        {
                            isTruncated = ellipsisElement($e, $d, $i, o, after);
                        } else {
                        isTruncated = ellipsis($e, $d, $i, o, after);
                    }
                }

                if (!isTruncated) {
                    if (after) {
                        after.detach();
                    }
                }
            }
        });
        $d.addClass("is-truncated");
        return isTruncated;
    }

    function ellipsisElement($e, $d, $i, o, after) {
        var e = $e[0];

        if (!e) {
            return false;
        }

        var txt = getTextContent(e),
            space = txt.indexOf(' ') !== -1 ? ' ' : '\u3000',
            separator = o.wrap == 'letter' ? '' : space,
            textArr = txt.split(separator),
            position = -1,
            midPos = -1,
            startPos = 0,
            endPos = textArr.length - 1;

        //	Only one word
        if (o.fallbackToLetter && startPos === 0 && endPos === 0) {
            separator = '';
            textArr = txt.split(separator);
            endPos = textArr.length - 1;
        }

        if (o.maxLength) {
            txt = addEllipsis(txt.trim().substr(0, o.maxLength), o);
            setTextContent(e, txt);
        } else {

            while (startPos <= endPos && !(startPos === 0 && endPos === 0)) {
                var m = Math.floor((startPos + endPos) / 2);
                if (m == midPos) {
                    break;
                }
                midPos = m;

                setTextContent(e, textArr.slice(0, midPos + 1).join(separator) + o.ellipsis);

                $i.children().each(function () {
                    $(this).toggle().toggle();
                });

                if (!test($i, o)) {
                    position = midPos;
                    startPos = midPos;
                } else {
                    endPos = midPos;

                    //	Fallback to letter
                    if (o.fallbackToLetter && startPos === 0 && endPos === 0) {
                        separator = '';
                        textArr = textArr[0].split(separator);
                        position = -1;
                        midPos = -1;
                        startPos = 0;
                        endPos = textArr.length - 1;
                    }
                }
            }

            if (position != -1 && !(textArr.length === 1 && textArr[0].length === 0)) {
                txt = addEllipsis(textArr.slice(0, position + 1).join(separator), o);
                setTextContent(e, txt);
            } else {
                var $w = $e.parent();
                $e.detach();

                var afterLength = after && after.closest($w).length ? after.length : 0;

                if ($w.contents().length > afterLength) {
                    e = findLastTextNode($w.contents().eq(-1 - afterLength), $d);
                } else {
                    e = findLastTextNode($w, $d, true);
                    if (!afterLength) {
                        $w.detach();
                    }
                }
                if (e) {
                    txt = addEllipsis(getTextContent(e), o);
                    setTextContent(e, txt);
                    if (afterLength && after) {
                        var $parent = after.parent();

                        $(e).parent().append(after);

                        if (!$.trim($parent.html())) {
                            $parent.remove();
                        }
                    }
                }
            }
        }

        return true;
    }

    function test($i, o) {
        return $i.innerHeight() > o.maxHeight || o.maxLength && $i.text().trim().length > o.maxLength;
    }

    function addEllipsis(txt, o) {
        while ($.inArray(txt.slice(-1), o.lastCharacter.remove) > -1) {
            txt = txt.slice(0, -1);
        }
        if ($.inArray(txt.slice(-1), o.lastCharacter.noEllipsis) < 0) {
            txt += o.ellipsis;
        }
        return txt;
    }

    function getSizes($d) {
        return {
            'width': $d.innerWidth(),
            'height': $d.innerHeight()
        };
    }

    function setTextContent(e, content) {
        if (e.innerText) {
            e.innerText = content;
        } else if (e.nodeValue) {
            e.nodeValue = content;
        } else if (e.textContent) {
            e.textContent = content;
        }
    }

    function getTextContent(e) {
        if (e.innerText) {
            return e.innerText;
        } else if (e.nodeValue) {
            return e.nodeValue;
        } else if (e.textContent) {
            return e.textContent;
        } else {
            return "";
        }
    }

    function getPrevNode(n) {
        do {
            n = n.previousSibling;
        } while (n && n.nodeType !== 1 && n.nodeType !== 3);

        return n;
    }

    function findLastTextNode($el, $top, excludeCurrent) {
        var e = $el && $el[0],
            p;
        if (e) {
            if (!excludeCurrent) {
                if (e.nodeType === 3) {
                    return e;
                }
                if ($.trim($el.text())) {
                    return findLastTextNode($el.contents().last(), $top);
                }
            }
            p = getPrevNode(e);
            while (!p) {
                $el = $el.parent();
                if ($el.is($top) || !$el.length) {
                    return false;
                }
                p = getPrevNode($el[0]);
            }
            if (p) {
                return findLastTextNode($(p), $top);
            }
        }
        return false;
    }

    function getElement(e, $i) {
        if (!e) {
            return false;
        }
        if (typeof e === 'string') {
            e = $(e, $i);
            return e.length ? e : false;
        }
        return !e.jquery ? false : e;
    }

    function getTrueInnerHeight($el) {
        var h = $el.innerHeight(),
            a = ['paddingTop', 'paddingBottom'];

        for (var z = 0, l = a.length; z < l; z++) {
            var m = parseInt($el.css(a[z]), 10);
            if (isNaN(m)) {
                m = 0;
            }
            h -= m;
        }
        return h;
    }

    //	override jQuery.html
    var _orgHtml = $.fn.html;
    $.fn.html = function (str) {
        if (str != undef && !$.isFunction(str) && this.data('dotdotdot')) {
            return this.trigger('update', [str]);
        }
        return _orgHtml.apply(this, arguments);
    };

    //	override jQuery.text
    var _orgText = $.fn.text;
    $.fn.text = function (str) {
        if (str != undef && !$.isFunction(str) && this.data('dotdotdot')) {
            str = $('<div />').text(str).html();
            return this.trigger('update', [str]);
        }
        return _orgText.apply(this, arguments);
    };
})(jQuery);

/*

## Automatic parsing for CSS classes
Contributed by [Ramil Valitov](https://github.com/rvalitov)

### The idea
You can add one or several CSS classes to HTML elements to automatically invoke "jQuery.dotdotdot functionality" and some extra features. It allows to use jQuery.dotdotdot only by adding appropriate CSS classes without JS programming.

### Available classes and their description
* dot-ellipsis - automatically invoke jQuery.dotdotdot to this element. This class must be included if you plan to use other classes below.
* dot-resize-update - automatically update if window resize event occurs. It's equivalent to option `watch:'window'`.
* dot-timer-update - automatically update at regular intervals using setInterval. It's equivalent to option `watch:true`.
* dot-load-update - automatically update after the window has beem completely rendered. Can be useful if your content is generated dynamically using using JS and, hence, jQuery.dotdotdot can't correctly detect the height of the element before it's rendered completely.
* dot-height-XXX - available height of content area in pixels, where XXX is a number, e.g. can be `dot-height-35` if you want to set maximum height for 35 pixels. It's equivalent to option `height:'XXX'`.

### Usage examples
*Adding jQuery.dotdotdot to element*

	<div class="dot-ellipsis">
	<p>Lorem Ipsum is simply dummy text.</p>
	</div>

*Adding jQuery.dotdotdot to element with update on window resize*

	<div class="dot-ellipsis dot-resize-update">
	<p>Lorem Ipsum is simply dummy text.</p>
	</div>

*Adding jQuery.dotdotdot to element with predefined height of 50px*

	<div class="dot-ellipsis dot-height-50">
	<p>Lorem Ipsum is simply dummy text.</p>
	</div>

*/

jQuery(document).ready(function ($) {
    //We only invoke jQuery.dotdotdot on elements that have dot-ellipsis class
    $(".dot-ellipsis").each(function () {
        //Checking if update on window resize required
        var watch_window = $(this).hasClass("dot-resize-update");

        //Checking if update on timer required
        var watch_timer = $(this).hasClass("dot-timer-update");

        //Checking if height set
        var height = 0;
        var classList = $(this).attr('class').split(/\s+/);
        $.each(classList, function (index, item) {
            var matchResult = item.match(/^dot-height-(\d+)$/);
            if (matchResult !== null) height = Number(matchResult[1]);
        });

        //Invoking jQuery.dotdotdot
        var x = {};
        if (watch_timer) x.watch = true;
        if (watch_window) x.watch = 'window';
        if (height > 0) x.height = height;
        $(this).dotdotdot(x);
    });
});

//Updating elements (if any) on window.load event
jQuery(window).on('load', function () {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot");
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery Smooth Scroll - v2.1.2 - 2017-01-19
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */

!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? require("jquery") : jQuery);
}(function (a) {
  var b = "2.1.2",
      c = {},
      d = { exclude: [], excludeWithin: [], offset: 0, direction: "top", delegateSelector: null, scrollElement: null, scrollTarget: null, beforeScroll: function beforeScroll() {}, afterScroll: function afterScroll() {}, easing: "swing", speed: 400, autoCoefficient: 2, preventDefault: !0 },
      e = function e(b) {
    var c = [],
        d = !1,
        e = b.dir && "left" === b.dir ? "scrollLeft" : "scrollTop";return this.each(function () {
      var b = a(this);if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (b[e]() > 0 ? c.push(this) : (b[e](1), d = b[e]() > 0, d && c.push(this), b[e](0))) : (c.push(document.scrollingElement), !1);
    }), c.length || this.each(function () {
      this === document.documentElement && "smooth" === a(this).css("scrollBehavior") && (c = [this]), c.length || "BODY" !== this.nodeName || (c = [this]);
    }), "first" === b.el && c.length > 1 && (c = [c[0]]), c;
  },
      f = /^([\-\+]=)(\d+)/;a.fn.extend({ scrollable: function scrollable(a) {
      var b = e.call(this, { dir: a });return this.pushStack(b);
    }, firstScrollable: function firstScrollable(a) {
      var b = e.call(this, { el: "first", dir: a });return this.pushStack(b);
    }, smoothScroll: function smoothScroll(b, c) {
      if (b = b || {}, "options" === b) return c ? this.each(function () {
        var b = a(this),
            d = a.extend(b.data("ssOpts") || {}, c);a(this).data("ssOpts", d);
      }) : this.first().data("ssOpts");var d = a.extend({}, a.fn.smoothScroll.defaults, b),
          e = function e(b) {
        var c = function c(a) {
          return a.replace(/(:|\.|\/)/g, "\\$1");
        },
            e = this,
            f = a(this),
            g = a.extend({}, d, f.data("ssOpts") || {}),
            h = d.exclude,
            i = g.excludeWithin,
            j = 0,
            k = 0,
            l = !0,
            m = {},
            n = a.smoothScroll.filterPath(location.pathname),
            o = a.smoothScroll.filterPath(e.pathname),
            p = location.hostname === e.hostname || !e.hostname,
            q = g.scrollTarget || o === n,
            r = c(e.hash);if (r && !a(r).length && (l = !1), g.scrollTarget || p && q && r) {
          for (; l && j < h.length;) {
            f.is(c(h[j++])) && (l = !1);
          }for (; l && k < i.length;) {
            f.closest(i[k++]).length && (l = !1);
          }
        } else l = !1;l && (g.preventDefault && b.preventDefault(), a.extend(m, g, { scrollTarget: g.scrollTarget || r, link: e }), a.smoothScroll(m));
      };return null !== b.delegateSelector ? this.off("click.smoothscroll", b.delegateSelector).on("click.smoothscroll", b.delegateSelector, e) : this.off("click.smoothscroll").on("click.smoothscroll", e), this;
    } });var g = function g(a) {
    var b = { relative: "" },
        c = "string" == typeof a && f.exec(a);return "number" == typeof a ? b.px = a : c && (b.relative = c[1], b.px = parseFloat(c[2]) || 0), b;
  };a.smoothScroll = function (b, d) {
    if ("options" === b && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d))) return a.extend(c, d);var e,
        f,
        h,
        i,
        j = g(b),
        k = {},
        l = 0,
        m = "offset",
        n = "scrollTop",
        o = {},
        p = {};j.px ? e = a.extend({ link: null }, a.fn.smoothScroll.defaults, c) : (e = a.extend({ link: null }, a.fn.smoothScroll.defaults, b || {}, c), e.scrollElement && (m = "position", "static" === e.scrollElement.css("position") && e.scrollElement.css("position", "relative")), d && (j = g(d))), n = "left" === e.direction ? "scrollLeft" : n, e.scrollElement ? (f = e.scrollElement, j.px || /^(?:HTML|BODY)$/.test(f[0].nodeName) || (l = f[n]())) : f = a("html, body").firstScrollable(e.direction), e.beforeScroll.call(f, e), k = j.px ? j : { relative: "", px: a(e.scrollTarget)[m]() && a(e.scrollTarget)[m]()[e.direction] || 0 }, o[n] = k.relative + (k.px + l + e.offset), h = e.speed, "auto" === h && (i = Math.abs(o[n] - f[n]()), h = i / e.autoCoefficient), p = { duration: h, easing: e.easing, complete: function complete() {
        e.afterScroll.call(e.link, e);
      } }, e.step && (p.step = e.step), f.length ? f.stop().animate(o, p) : e.afterScroll.call(e.link, e);
  }, a.smoothScroll.version = b, a.smoothScroll.filterPath = function (a) {
    return a = a || "", a.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
  }, a.fn.smoothScroll.defaults = d;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-dataset-flexbox-flexboxlegacy-touchevents-setclasses !*/
!function (e, t, n) {
  function r(e, t) {
    return (typeof e === "undefined" ? "undefined" : _typeof(e)) === t;
  }function o() {
    var e, t, n, o, s, i, a;for (var l in x) {
      if (x.hasOwnProperty(l)) {
        if (e = [], t = x[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }for (o = r(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) {
          i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"));
        }
      }
    }
  }function s(e) {
    var t = S.className,
        n = Modernizr._config.classPrefix || "";if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");t = t.replace(r, "$1" + n + "js$2");
    }Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? S.className.baseVal = t : S.className = t);
  }function i() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }function a(e, t) {
    return !!~("" + e).indexOf(t);
  }function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }function u(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }function f(e, t, n) {
    var o;for (var s in e) {
      if (e[s] in t) return n === !1 ? e[s] : (o = t[e[s]], r(o, "function") ? u(o, n || t) : o);
    }return !1;
  }function c(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function d(t, n, r) {
    var o;if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);var s = e.console;if (null !== o) r && (o = o.getPropertyValue(r));else if (s) {
        var i = s.error ? "error" : "log";s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];return o;
  }function p() {
    var e = t.body;return e || (e = i(w ? "svg" : "body"), e.fake = !0), e;
  }function m(e, n, r, o) {
    var s,
        a,
        l,
        u,
        f = "modernizr",
        c = i("div"),
        d = p();if (parseInt(r, 10)) for (; r--;) {
      l = i("div"), l.id = o ? o[r] : f + (r + 1), c.appendChild(l);
    }return s = i("style"), s.type = "text/css", s.id = "s" + f, (d.fake ? d : c).appendChild(s), d.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)), c.id = f, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = S.style.overflow, S.style.overflow = "hidden", S.appendChild(d)), a = n(c, e), d.fake ? (d.parentNode.removeChild(d), S.style.overflow = u, S.offsetHeight) : c.parentNode.removeChild(c), !!a;
  }function v(t, r) {
    var o = t.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(c(t[o]), r)) return !0;
      }return !1;
    }if ("CSSSupportsRule" in e) {
      for (var s = []; o--;) {
        s.push("(" + c(t[o]) + ":" + r + ")");
      }return s = s.join(" or "), m("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == d(e, null, "position");
      });
    }return n;
  }function h(e, t, o, s) {
    function u() {
      c && (delete j.style, delete j.modElem);
    }if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
      var f = v(e, o);if (!r(f, "undefined")) return f;
    }for (var c, d, p, m, h, y = ["modernizr", "tspan", "samp"]; !j.style && y.length;) {
      c = !0, j.modElem = i(y.shift()), j.style = j.modElem.style;
    }for (p = e.length, d = 0; p > d; d++) {
      if (m = e[d], h = j.style[m], a(m, "-") && (m = l(m)), j.style[m] !== n) {
        if (s || r(o, "undefined")) return u(), "pfx" == t ? m : !0;try {
          j.style[m] = o;
        } catch (g) {}if (j.style[m] != h) return u(), "pfx" == t ? m : !0;
      }
    }return u(), !1;
  }function y(e, t, n, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + z.join(i + " ") + i).split(" ");return r(t, "string") || r(t, "undefined") ? h(a, t, o, s) : (a = (e + " " + P.join(i + " ") + i).split(" "), f(a, t, n));
  }function g(e, t, r) {
    return y(e, n, n, t, r);
  }var C = [],
      x = [],
      b = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function on(e, t) {
      var n = this;setTimeout(function () {
        t(n[e]);
      }, 0);
    }, addTest: function addTest(e, t, n) {
      x.push({ name: e, fn: t, options: n });
    }, addAsyncTest: function addAsyncTest(e) {
      x.push({ name: null, fn: e });
    } },
      Modernizr = function Modernizr() {};Modernizr.prototype = b, Modernizr = new Modernizr();var S = t.documentElement,
      w = "svg" === S.nodeName.toLowerCase();Modernizr.addTest("dataset", function () {
    var e = i("div");return e.setAttribute("data-a-b", "c"), !(!e.dataset || "c" !== e.dataset.aB);
  });var _ = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];b._prefixes = _;var T = "Moz O ms Webkit",
      z = b._config.usePrefixes ? T.split(" ") : [];b._cssomPrefixes = z;var P = b._config.usePrefixes ? T.toLowerCase().split(" ") : [];b._domPrefixes = P;var E = { elem: i("modernizr") };Modernizr._q.push(function () {
    delete E.elem;
  });var j = { style: E.elem.style };Modernizr._q.unshift(function () {
    delete j.style;
  });var N = b.testStyles = m;Modernizr.addTest("touchevents", function () {
    var n;if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
      var r = ["@media (", _.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");N(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }return n;
  }), b.testAllProps = y, b.testAllProps = g, Modernizr.addTest("flexbox", g("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", g("boxDirection", "reverse", !0)), o(), s(C), delete b.addTest, delete b.addAsyncTest;for (var k = 0; k < Modernizr._q.length; k++) {
    Modernizr._q[k]();
  }e.Modernizr = Modernizr;
}(window, document);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                verticalOffset = verticalHeight * _.options.slidesToShow * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
        }
        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {
                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {

                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});
'use strict';

(function (document, window, $) {

	'use strict';

	// Open external links in new window (exclue scv image maps, email, tel and foobox)

	$('a').not('svg a, [href*="mailto:"], [href*="tel:"], [class*="foobox"]').each(function () {
		var isInternalLink = new RegExp('/' + window.location.host + '/');
		if (!isInternalLink.test(this.href)) {
			$(this).attr('target', '_blank');
		}
	});
})(document, window, jQuery);
'use strict';

(function (document, window, $) {

    'use strict';

    // Load Foundation

    $(document).foundation();

    // Touch events for main menu
    $('.nav-primary li:has(ul)').doubleTapToGo();

    if (Foundation.MediaQuery.is('small only')) {
        $('.modal-menu .search-form .search-field').attr('placeholder', 'Search');
    }

    $(window).on('changed.zf.mediaquery', function (event, newSize, oldSize) {

        var placeholder_text;
        placeholder_text = 'small' === newSize ? 'Search' : 'Search Articles';
        $('.modal-menu .search-form .search-field').attr('placeholder', placeholder_text);
    });

    $(window).load(function () {

        var $el = $('.slick-videos');
        $el.on('init', function () {
            $el.each(function (index) {});
        });

        $el.slick({
            dots: false,
            //centerMode: true,
            slidesToShow: 3,
            arrows: true,
            nextArrow: '<div class="arrow-right"><span>Next</span></div>',
            prevArrow: '<div class="arrow-left"><span>Previous</span></div>',
            responsive: [{
                breakpoint: 980,
                settings: {
                    //centerMode: true,
                    slidesToShow: 2
                }
            }, {
                breakpoint: 640,
                settings: {
                    //centerMode: true,
                    slidesToShow: 1
                }
            }]
        });

        var $el2 = $('.slick-posts');
        $el2.on('init', function () {
            $el2.each(function (index) {});
        });

        $el2.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            //new Foundation.Equalizer($(".slick-posts")).applyHeight();
        });

        $el2.slick({
            dots: false,
            //centerMode: true,
            slidesToShow: 3,
            arrows: true,
            adaptiveHeight: true,
            nextArrow: '<div class="arrow-right"><span>Next</span></div>',
            prevArrow: '<div class="arrow-left"><span>Previous</span></div>',
            responsive: [{
                breakpoint: 639,
                settings: {
                    //centerMode: true,
                    slidesToShow: 1
                }
            }]
        });

        // Smash Balloon custom carousel
        var $el3 = $('.post-cards .cards');
        $el3.on('init', function () {
            $el3.each(function (index) {});
        });

        /*
        $el3.on('beforeChange', function(event, slick, currentSlide, nextSlide){
          new Foundation.Equalizer($(".slick-posts")).applyHeight();
        });
        */

        $el3.slick({
            dots: false,
            //centerMode: true,
            slidesToShow: 3,
            arrows: true,
            nextArrow: '<div class="arrow-right"><span>Next</span></div>',
            prevArrow: '<div class="arrow-left"><span>Previous</span></div>',
            responsive: [{
                breakpoint: 639,
                settings: {
                    //centerMode: true,
                    slidesToShow: 1
                }
            }]
        });
    });

    // Smash baloon add span to load more button    

    $('.sbi_load_btn').html('<span>' + $('.sbi_load_btn').html() + '</span>');
    $('.sbi_load_btn').addClass('btn-primary');
})(document, window, jQuery);
'use strict';

var infScroll = new InfiniteScroll('#main', {
  // defaults listed

  path: 'nav.posts-navigation .nav-previous a',
  // REQUIRED. Determines the URL for the next page
  // Set to selector string to use the href of the next page's link
  // path: '.pagination__next'
  // Or set with {{#}} in place of the page number in the url
  // path: '/blog/page/{{#}}'
  // or set with function
  // path: function() {
  //   return return '/articles/P' + ( ( this.loadCount + 1 ) * 10 );
  // }

  append: '#main article.post',
  // REQUIRED for appending content
  // Appends selected elements from loaded page to the container

  checkLastPage: true,
  // Checks if page has path selector element
  // Set to string if path is not set as selector string:
  //   checkLastPage: '.pagination__next'

  prefill: false,
  // Loads and appends pages on intialization until scroll requirement is met.

  responseType: 'document',
  // Sets the type of response returned by the page request.
  // Set to 'text' to return flat text for loading JSON.

  outlayer: false,
  // Integrates Masonry, Isotope or Packery
  // Appended items will be added to the layout

  scrollThreshold: 400,
  // Sets the distance between the viewport to scroll area
  // for scrollThreshold event to be triggered.

  elementScroll: false,
  // Sets scroller to an element for overflow element scrolling

  loadOnScroll: true,
  // Loads next page when scroll crosses over scrollThreshold

  history: 'push',
  // Changes the browser history and URL.
  // Set to 'push' to use history.pushState()
  //    to create new history entries for each page change.

  historyTitle: true,
  // Updates the window title. Requires history enabled.

  hideNav: 'nav.posts-navigation',
  // Hides navigation element

  status: undefined,
  // Displays status elements indicating state of page loading:
  // .infinite-scroll-request, .infinite-scroll-load, .infinite-scroll-error
  // status: '.page-load-status'

  button: undefined,
  // Enables a button to load pages on click
  // button: '.load-next-button'

  onInit: undefined,
  // called on initialization
  // useful for binding events on init
  // onInit: function() {
  //   this.on( 'append', function() {...})
  // }

  debug: false
  // Logs events and state changes to the console.
});
'use strict';

(function (document, window, $) {

	'use strict';

	// Replace all SVG images with inline SVG (use as needed so you can set hover fills)

	$('img.svg').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
})(document, window, jQuery);
'use strict';

(function (document, window, $) {

	'use strict';

	// Responsive video embeds

	var $all_oembed_videos = $("iframe[src*='youtube'], iframe[src*='vimeo']");

	$all_oembed_videos.each(function () {

		var _this = $(this);

		if (_this.parent('.embed-container').length === 0) {
			_this.wrap('<div class="embed-container"></div>');
		}

		_this.removeAttr('height').removeAttr('width');
	});
})(document, window, jQuery);
/*

jQuery( window ).load( function() {
	var windowHeight	= jQuery( window ).height();
	var sidebarHeight	= jQuery( '.site-content' ).height();

	
	function stickySidebar() {
		if ( ! jQuery( '.home .site-content' ).length ) {
			return;
		}
        
        console.log('activated');

		var tallestSidebar = -1;
		jQuery( '#secondary' ).each( function() {
			tallestSidebar = tallestSidebar > jQuery( this ).outerHeight() ? tallestSidebar : jQuery( this ).outerHeight();
		});
        
        console.log(tallestSidebar);

		var topDistance           = jQuery( document ).scrollTop();
		var sidebarWidth          = jQuery( '#secondary' ).outerWidth();
		var	contentWidth          = jQuery( '.site-content > .row' ).outerWidth();
		var	primaryWidth          = jQuery( '#primary' ).outerWidth();
		var	gutter                = contentWidth - primaryWidth - sidebarWidth;
		var	sidebarOffset         = primaryWidth + gutter;
        var	headerOffset          = jQuery( '.site-header' ).outerHeight() + 30;
		var primaryPosition       = jQuery( '#primary' ).offset();
  		

		// If we're in desktop orientation and the order review column is taller than the customer details column and smaller than the window height
		if ( ( jQuery( window ).width() > 768 ) ) {
            
                console.log('sticky sidebar');

				if ( topDistance  > ( primaryPosition.top - headerOffset ) ) {
					jQuery( '#secondary' ).addClass( 'sidebar-fixed' );
					if ( jQuery( '#secondary' ).css( 'direction' ) === 'rtl' ) {
						jQuery( '#secondary' ).css({
							//'margin-right':		sidebarOffset,
							'width':			sidebarWidth,
                            'top':              headerOffset
						});
					} else {
						jQuery( '#secondary' ).css({
							//'margin-left':		sidebarOffset,
							'width':			sidebarWidth,
                            'top':              headerOffset
						});
					}
				} else {
					jQuery( '#secondary' ).removeAttr( 'style' ).removeClass( 'sidebar-fixed' );
				}
		}
	}

	// Do sticky on scroll
	jQuery( window ).scroll( function() {
		stickySidebar();
	});

	// Do sticky on window resize
	jQuery( window ).resize( function() {
		stickySidebar();
	});
});

*/
"use strict";
//# sourceMappingURL=project.js.map
