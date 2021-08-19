function ownKeys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(r), !0).forEach(function(t) {
          _defineProperty(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ownKeys(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function _defineProperty(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = r),
    e
  );
}
!(function() {
  var e, t, r, n, o, a, c, i, s;
  window.WHJR_ANALYTICS =
    ((e = {
      sdk_name_web: "analytics.js",
      sdk_version_web: "0.0.0",
      apiKeys: { datadog: "pubc17bd74315fb994d9d46aa891a26dc88" }
    }),
    (t = { frontend_origin: window.location.origin }),
    (r = {}),
    (n = function(e) {
      for (
        var t = e + "=",
          r = decodeURIComponent(document.cookie).split(";"),
          n = 0;
        n < r.length;
        n++
      ) {
        for (var o = r[n]; " " == o.charAt(0); ) o = o.substring(1);
        if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
      }
      return "";
    }),
    (o = function() {
      var e = {};
      try {
        var t = n("URLParams");
        e = JSON.parse(t);
        var r = n("whjrReferrer");
        r && (e.referrer = r);
      } catch (e) {}
      return e;
    }),
    (a = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (t = _objectSpread(
        _objectSpread(_objectSpread(_objectSpread({}, r), t), e),
        o()
      ));
    }),
    (c = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (r = _objectSpread(_objectSpread({}, r), e));
    }),
    (i = function() {
      var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = e.course,
        i = e.env,
        s = e.sdk_version_web,
        d = e.product_version,
        u = e.sdk_name_web,
        p = a.type,
        l = a.target,
        v = {};
      if (l === window || l === document) {
        if (!(n = { error: "ERROR" }[p])) return;
        if ("error" === p) {
          a.lineno, a.colno;
          var _ = a.error,
            w = void 0 === _ ? {} : _;
          a.message,
            (v = _objectSpread(
              _objectSpread(_objectSpread({}, r), t),
              {},
              {
                error_captured: "uncaught",
                event_type: w.name,
                error_message: w.message,
                sdk_version_web: s,
                sdk_name_web: u,
                course: c,
                product_version: d,
                env: i
              },
              o()
            ));
        }
      } else {
        var b = !!l && l.closest("[data-whjr-analytics-name]"),
          g =
            !(!b || !b.getAttribute) &&
            b.getAttribute("data-whjr-analytics-props");
        if (g || g.length) g = JSON.parse(g);
        else {
          if (!n) return;
          g = a;
        }
        var f = g;
        (n = n || b.getAttribute("data-whjr-analytics-name")),
          (v = _objectSpread(
            _objectSpread(_objectSpread(_objectSpread({}, r), t), f),
            {},
            {
              eventType: f.eventType || p,
              sdk_version_web: s,
              sdk_name_web: u,
              course: c,
              product_version: d,
              env: i
            },
            o()
          ));
      }
      try {
        window.analytics && analytics.track(n, v);
      } catch (e) {}
    }),
    (s = function(n) {
      if (
        (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n)
      ) {
        var a = n || window.location.pathname.replace(/\//g, "_").toUpperCase(),
          c = e.course,
          i = e.env,
          s = e.sdk_version_web,
          d = e.product_version,
          u = e.sdk_name_web,
          p = _objectSpread(
            _objectSpread(_objectSpread({}, r), t),
            {},
            {
              sdk_version_web: s,
              sdk_name_web: u,
              course: c,
              product_version: d,
              env: i
            },
            o()
          );
        try {
          window.analytics && analytics.page(a, p);
        } catch (e) {}
      } else console.warn("No page found");
    }),
    (function() {
      var t = document.getElementsByTagName("script"),
        r = t[t.length - 1],
        n = r.getAttribute("data-env"),
        o = r.getAttribute("data-segment"),
        a = r.getAttribute("data-course"),
        c = r.getAttribute("data-pageNameMap");
      console.log("env is for analytics ".concat(n));
      for (
        var d = window.WHJR_ANALYTICS_OBJ || {},
          u = Object.keys(d),
          p = Object.values(d),
          l = 0;
        l < u.length;
        l++
      )
        e[u[l]] = p[l];
      (e.env = n),
        (e.segment = o),
        (e.course = a),
        (e.pageNameMap = JSON.parse(c)),
        (function() {
          e.course, e.env, e.apiKeys, e.product_version;
          var t = e.segment;
          !(function() {
            var e = (window.analytics = window.analytics || []);
            if (!e.initialize)
              if (e.invoked)
                window.console &&
                  console.error &&
                  console.error("Segment snippet included twice.");
              else {
                (e.invoked = !0),
                  (e.methods = [
                    "trackSubmit",
                    "trackClick",
                    "trackLink",
                    "trackForm",
                    "pageview",
                    "identify",
                    "reset",
                    "group",
                    "track",
                    "ready",
                    "alias",
                    "debug",
                    "page",
                    "once",
                    "off",
                    "on",
                    "addSourceMiddleware",
                    "addIntegrationMiddleware",
                    "setAnonymousId",
                    "addDestinationMiddleware"
                  ]),
                  (e.factory = function(t) {
                    return function() {
                      var r = Array.prototype.slice.call(arguments);
                      return r.unshift(t), e.push(r), e;
                    };
                  });
                for (var r = 0; r < e.methods.length; r++) {
                  var n = e.methods[r];
                  e[n] = e.factory(n);
                }
                (e.load = function(t, r) {
                  var n = document.createElement("script");
                  (n.type = "text/javascript"),
                    (n.async = !0),
                    (n.src =
                      "https://cdn.segment.com/analytics.js/v1/" +
                      t +
                      "/analytics.min.js");
                  var o = document.getElementsByTagName("script")[0];
                  o.parentNode.insertBefore(n, o), (e._loadOptions = r);
                }),
                  (e.SNIPPET_VERSION = "4.13.1"),
                  e.load(t),
                  e.page();
              }
          })();
        })(),
        (function() {
          for (
            var e = [
                "error",
                "click",
                "change",
                "blur",
                "focus",
                "whjrClickAnalytics"
              ],
              t = 0;
            e.length > t;
            t++
          )
            window.addEventListener
              ? window.addEventListener(e[t], i)
              : window.attachEvent &&
                window.attachEvent("on" + e[t], function() {
                  i();
                });
        })(),
        s(
          (function(t) {
            var r = e.pageNameMap,
              n = void 0 === r ? {} : r;
            if (n)
              for (var o = 0, a = Object.keys(n); o < a.length; o++) {
                var c = a[o];
                if (t.includes(c)) return n[c];
              }
            return "";
          })(window.location.pathname)
        );
    })(),
    {
      unSetUserProps: function() {
        return (r = {});
      },
      setUserProps: c,
      unSetEventProps: function() {
        return (t = {});
      },
      setEventProps: a,
      trackUser: function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = e.course,
          a = _objectSpread(_objectSpread({}, r), {}, { course: o }, n);
        try {
          window.analytics && t && analytics.identify(t, a);
        } catch (e) {}
      },
      trackEvent: i,
      trackPageView: s,
      getSegmentAnonymousId: function() {
        try {
          return window.analytics ? analytics.user().anonymousId() : "";
        } catch (e) {
          return "";
        }
      },
      getAmplitudeSessionId: function() {
        try {
          return window.amplitude ? window.amplitude.getSessionId() : 0;
        } catch (e) {
          return 0;
        }
      },
      trackAPI: function() {
        var n,
          a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = e.course,
          s = e.env,
          d = e.sdk_version_web,
          u = e.product_version,
          p = e.sdk_name_web,
          l = c;
        if (a) {
          n = _objectSpread(
            _objectSpread(_objectSpread(_objectSpread({}, r), t), l),
            {},
            {
              sdk_version_web: d,
              sdk_name_web: p,
              course: i,
              product_version: u,
              env: s
            },
            o()
          );
          try {
            window.analytics && analytics.track(a, n);
          } catch (e) {}
        }
      },
      trackError: function() {
        var n,
          a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          c =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = e.course,
          s = e.env,
          d = e.sdk_version_web,
          u = e.product_version,
          p = e.sdk_name_web,
          l = c;
        if (a) {
          n = _objectSpread(
            _objectSpread(_objectSpread(_objectSpread({}, r), t), l),
            {},
            {
              sdk_version_web: d,
              sdk_name_web: p,
              course: i,
              product_version: u,
              env: s
            },
            o()
          );
          try {
            window.analytics && analytics.track(a, n),
              c.dataDogLog &&
                console.error(
                  "trackError try catch datadog error => ",
                  c.dataDogLog
                );
          } catch (e) {}
        }
      },
      initialize: function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        resetUserProps(), resetEventProps(), a(e), c(t);
      }
    });
})();




























