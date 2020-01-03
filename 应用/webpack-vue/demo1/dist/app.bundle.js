! function (e) {
    var n = window.webpackHotUpdate;
    window.webpackHotUpdate = function (e, r) {
        ! function (e, n) {
            if (!g[e] || !O[e]) return;
            for (var r in O[e] = !1, n) Object.prototype.hasOwnProperty.call(n, r) && (y[r] = n[r]);
            0 == --b && 0 === m && E()
        }(e, r), n && n(e, r)
    };
    var r, t = !0,
        o = "1f77d379f8a060062450",
        c = 1e4,
        i = {},
        d = [],
        a = [];

    function s(e) {
        var n = H[e];
        if (!n) return P;
        var t = function (t) {
                return n.hot.active ? (H[t] ? -1 === H[t].parents.indexOf(e) && H[t].parents.push(e) : (d = [e], r = t), -1 === n.children.indexOf(t) && n.children.push(t)) : (console.warn("[HMR] unexpected require(" + t + ") from disposed module " + e), d = []), P(t)
            },
            o = function (e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return P[e]
                    },
                    set: function (n) {
                        P[e] = n
                    }
                }
            };
        for (var c in P) Object.prototype.hasOwnProperty.call(P, c) && "e" !== c && "t" !== c && Object.defineProperty(t, c, o(c));
        return t.e = function (e) {
            return "ready" === p && f("prepare"), m++, P.e(e).then(n, (function (e) {
                throw n(), e
            }));

            function n() {
                m--, "prepare" === p && (w[e] || D(e), 0 === m && 0 === b && E())
            }
        }, t.t = function (e, n) {
            return 1 & n && (e = t(e)), P.t(e, -2 & n)
        }, t
    }

    function l(e) {
        var n = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: r !== e,
            active: !0,
            accept: function (e, r) {
                if (void 0 === e) n._selfAccepted = !0;
                else if ("function" == typeof e) n._selfAccepted = e;
                else if ("object" == typeof e)
                    for (var t = 0; t < e.length; t++) n._acceptedDependencies[e[t]] = r || function () {};
                else n._acceptedDependencies[e] = r || function () {}
            },
            decline: function (e) {
                if (void 0 === e) n._selfDeclined = !0;
                else if ("object" == typeof e)
                    for (var r = 0; r < e.length; r++) n._declinedDependencies[e[r]] = !0;
                else n._declinedDependencies[e] = !0
            },
            dispose: function (e) {
                n._disposeHandlers.push(e)
            },
            addDisposeHandler: function (e) {
                n._disposeHandlers.push(e)
            },
            removeDisposeHandler: function (e) {
                var r = n._disposeHandlers.indexOf(e);
                r >= 0 && n._disposeHandlers.splice(r, 1)
            },
            check: j,
            apply: x,
            status: function (e) {
                if (!e) return p;
                u.push(e)
            },
            addStatusHandler: function (e) {
                u.push(e)
            },
            removeStatusHandler: function (e) {
                var n = u.indexOf(e);
                n >= 0 && u.splice(n, 1)
            },
            data: i[e]
        };
        return r = void 0, n
    }
    var u = [],
        p = "idle";

    function f(e) {
        p = e;
        for (var n = 0; n < u.length; n++) u[n].call(null, e)
    }
    var h, y, v, b = 0,
        m = 0,
        w = {},
        O = {},
        g = {};

    function _(e) {
        return +e + "" === e ? +e : e
    }

    function j(e) {
        if ("idle" !== p) throw new Error("check() is only allowed in idle status");
        return t = e, f("check"), (n = c, n = n || 1e4, new Promise((function (e, r) {
            if ("undefined" == typeof XMLHttpRequest) return r(new Error("No browser support"));
            try {
                var t = new XMLHttpRequest,
                    c = P.p + "" + o + ".hot-update.json";
                t.open("GET", c, !0), t.timeout = n, t.send(null)
            } catch (e) {
                return r(e)
            }
            t.onreadystatechange = function () {
                if (4 === t.readyState)
                    if (0 === t.status) r(new Error("Manifest request to " + c + " timed out."));
                    else if (404 === t.status) e();
                else if (200 !== t.status && 304 !== t.status) r(new Error("Manifest request to " + c + " failed."));
                else {
                    try {
                        var n = JSON.parse(t.responseText)
                    } catch (e) {
                        return void r(e)
                    }
                    e(n)
                }
            }
        }))).then((function (e) {
            if (!e) return f("idle"), null;
            O = {}, w = {}, g = e.c, v = e.h, f("prepare");
            var n = new Promise((function (e, n) {
                h = {
                    resolve: e,
                    reject: n
                }
            }));
            y = {};
            return D(0), "prepare" === p && 0 === m && 0 === b && E(), n
        }));
        var n
    }

    function D(e) {
        g[e] ? (O[e] = !0, b++, function (e) {
            var n = document.createElement("script");
            n.charset = "utf-8", n.src = P.p + "" + e + "." + o + ".hot-update.js", document.head.appendChild(n)
        }(e)) : w[e] = !0
    }

    function E() {
        f("ready");
        var e = h;
        if (h = null, e)
            if (t) Promise.resolve().then((function () {
                return x(t)
            })).then((function (n) {
                e.resolve(n)
            }), (function (n) {
                e.reject(n)
            }));
            else {
                var n = [];
                for (var r in y) Object.prototype.hasOwnProperty.call(y, r) && n.push(_(r));
                e.resolve(n)
            }
    }

    function x(n) {
        if ("ready" !== p) throw new Error("apply() is only allowed in ready status");
        var r, t, c, a, s;

        function l(e) {
            for (var n = [e], r = {}, t = n.map((function (e) {
                    return {
                        chain: [e],
                        id: e
                    }
                })); t.length > 0;) {
                var o = t.pop(),
                    c = o.id,
                    i = o.chain;
                if ((a = H[c]) && !a.hot._selfAccepted) {
                    if (a.hot._selfDeclined) return {
                        type: "self-declined",
                        chain: i,
                        moduleId: c
                    };
                    if (a.hot._main) return {
                        type: "unaccepted",
                        chain: i,
                        moduleId: c
                    };
                    for (var d = 0; d < a.parents.length; d++) {
                        var s = a.parents[d],
                            l = H[s];
                        if (l) {
                            if (l.hot._declinedDependencies[c]) return {
                                type: "declined",
                                chain: i.concat([s]),
                                moduleId: c,
                                parentId: s
                            }; - 1 === n.indexOf(s) && (l.hot._acceptedDependencies[c] ? (r[s] || (r[s] = []), u(r[s], [c])) : (delete r[s], n.push(s), t.push({
                                chain: i.concat([s]),
                                id: s
                            })))
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: e,
                outdatedModules: n,
                outdatedDependencies: r
            }
        }

        function u(e, n) {
            for (var r = 0; r < n.length; r++) {
                var t = n[r]; - 1 === e.indexOf(t) && e.push(t)
            }
        }
        n = n || {};
        var h = {},
            b = [],
            m = {},
            w = function () {
                console.warn("[HMR] unexpected require(" + j.moduleId + ") to disposed module")
            };
        for (var O in y)
            if (Object.prototype.hasOwnProperty.call(y, O)) {
                var j;
                s = _(O);
                var D = !1,
                    E = !1,
                    x = !1,
                    I = "";
                switch ((j = y[O] ? l(s) : {
                    type: "disposed",
                    moduleId: O
                }).chain && (I = "\nUpdate propagation: " + j.chain.join(" -> ")), j.type) {
                    case "self-declined":
                        n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (D = new Error("Aborted because of self decline: " + j.moduleId + I));
                        break;
                    case "declined":
                        n.onDeclined && n.onDeclined(j), n.ignoreDeclined || (D = new Error("Aborted because of declined dependency: " + j.moduleId + " in " + j.parentId + I));
                        break;
                    case "unaccepted":
                        n.onUnaccepted && n.onUnaccepted(j), n.ignoreUnaccepted || (D = new Error("Aborted because " + s + " is not accepted" + I));
                        break;
                    case "accepted":
                        n.onAccepted && n.onAccepted(j), E = !0;
                        break;
                    case "disposed":
                        n.onDisposed && n.onDisposed(j), x = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + j.type)
                }
                if (D) return f("abort"), Promise.reject(D);
                if (E)
                    for (s in m[s] = y[s], u(b, j.outdatedModules), j.outdatedDependencies) Object.prototype.hasOwnProperty.call(j.outdatedDependencies, s) && (h[s] || (h[s] = []), u(h[s], j.outdatedDependencies[s]));
                x && (u(b, [j.moduleId]), m[s] = w)
            } var k, M = [];
        for (t = 0; t < b.length; t++) s = b[t], H[s] && H[s].hot._selfAccepted && m[s] !== w && M.push({
            module: s,
            errorHandler: H[s].hot._selfAccepted
        });
        f("dispose"), Object.keys(g).forEach((function (e) {
            !1 === g[e] && function (e) {
                delete installedChunks[e]
            }(e)
        }));
        for (var A, S, q = b.slice(); q.length > 0;)
            if (s = q.pop(), a = H[s]) {
                var U = {},
                    T = a.hot._disposeHandlers;
                for (c = 0; c < T.length; c++)(r = T[c])(U);
                for (i[s] = U, a.hot.active = !1, delete H[s], delete h[s], c = 0; c < a.children.length; c++) {
                    var R = H[a.children[c]];
                    R && ((k = R.parents.indexOf(s)) >= 0 && R.parents.splice(k, 1))
                }
            } for (s in h)
            if (Object.prototype.hasOwnProperty.call(h, s) && (a = H[s]))
                for (S = h[s], c = 0; c < S.length; c++) A = S[c], (k = a.children.indexOf(A)) >= 0 && a.children.splice(k, 1);
        for (s in f("apply"), o = v, m) Object.prototype.hasOwnProperty.call(m, s) && (e[s] = m[s]);
        var C = null;
        for (s in h)
            if (Object.prototype.hasOwnProperty.call(h, s) && (a = H[s])) {
                S = h[s];
                var L = [];
                for (t = 0; t < S.length; t++)
                    if (A = S[t], r = a.hot._acceptedDependencies[A]) {
                        if (-1 !== L.indexOf(r)) continue;
                        L.push(r)
                    } for (t = 0; t < L.length; t++) {
                    r = L[t];
                    try {
                        r(S)
                    } catch (e) {
                        n.onErrored && n.onErrored({
                            type: "accept-errored",
                            moduleId: s,
                            dependencyId: S[t],
                            error: e
                        }), n.ignoreErrored || C || (C = e)
                    }
                }
            } for (t = 0; t < M.length; t++) {
            var N = M[t];
            s = N.module, d = [s];
            try {
                P(s)
            } catch (e) {
                if ("function" == typeof N.errorHandler) try {
                    N.errorHandler(e)
                } catch (r) {
                    n.onErrored && n.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: s,
                        error: r,
                        originalError: e
                    }), n.ignoreErrored || C || (C = r), C || (C = e)
                } else n.onErrored && n.onErrored({
                    type: "self-accept-errored",
                    moduleId: s,
                    error: e
                }), n.ignoreErrored || C || (C = e)
            }
        }
        return C ? (f("fail"), Promise.reject(C)) : (f("idle"), new Promise((function (e) {
            e(b)
        })))
    }
    var H = {};

    function P(n) {
        if (H[n]) return H[n].exports;
        var r = H[n] = {
            i: n,
            l: !1,
            exports: {},
            hot: l(n),
            parents: (a = d, d = [], a),
            children: []
        };
        return e[n].call(r.exports, r, r.exports, s(n)), r.l = !0, r.exports
    }
    P.m = e, P.c = H, P.d = function (e, n, r) {
        P.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, P.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, P.t = function (e, n) {
        if (1 & n && (e = P(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (P.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var t in e) P.d(r, t, function (n) {
                return e[n]
            }.bind(null, t));
        return r
    }, P.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return P.d(n, "a", n), n
    }, P.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, P.p = "", P.h = function () {
        return o
    }, s("./src/index.js")(P.s = "./src/index.js")
}({
    "./src/index.js": function (e, n, r) {
        "use strict";
        var t, o;
        r.r(n), document.body.appendChild(((o = document.createElement("pre")).innerHTML = ["Hello webpack!", "5 cubed is equal to " + (t = 5, console.log("aaassssssaaa"), t * t * t)].join("\n\n"), o))
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLmpzIl0sIm5hbWVzIjpbInBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrIiwid2luZG93IiwiY2h1bmtJZCIsIm1vcmVNb2R1bGVzIiwiaG90QXZhaWxhYmxlRmlsZXNNYXAiLCJob3RSZXF1ZXN0ZWRGaWxlc01hcCIsIm1vZHVsZUlkIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaG90VXBkYXRlIiwiaG90V2FpdGluZ0ZpbGVzIiwiaG90Q2h1bmtzTG9hZGluZyIsImhvdFVwZGF0ZURvd25sb2FkZWQiLCJob3RBZGRVcGRhdGVDaHVuayIsImhvdEN1cnJlbnRDaGlsZE1vZHVsZSIsImhvdEFwcGx5T25VcGRhdGUiLCJob3RDdXJyZW50SGFzaCIsImhvdFJlcXVlc3RUaW1lb3V0IiwiaG90Q3VycmVudE1vZHVsZURhdGEiLCJob3RDdXJyZW50UGFyZW50cyIsImhvdEN1cnJlbnRQYXJlbnRzVGVtcCIsImhvdENyZWF0ZVJlcXVpcmUiLCJtZSIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZm4iLCJyZXF1ZXN0IiwiaG90IiwiYWN0aXZlIiwicGFyZW50cyIsImluZGV4T2YiLCJwdXNoIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwid2FybiIsIk9iamVjdEZhY3RvcnkiLCJuYW1lIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJlIiwiaG90U3RhdHVzIiwiaG90U2V0U3RhdHVzIiwidGhlbiIsImZpbmlzaENodW5rTG9hZGluZyIsImVyciIsImhvdFdhaXRpbmdGaWxlc01hcCIsImhvdEVuc3VyZVVwZGF0ZUNodW5rIiwidCIsIm1vZGUiLCJob3RDcmVhdGVNb2R1bGUiLCJfYWNjZXB0ZWREZXBlbmRlbmNpZXMiLCJfZGVjbGluZWREZXBlbmRlbmNpZXMiLCJfc2VsZkFjY2VwdGVkIiwiX3NlbGZEZWNsaW5lZCIsIl9kaXNwb3NlSGFuZGxlcnMiLCJfbWFpbiIsImFjY2VwdCIsImRlcCIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwiaSIsImxlbmd0aCIsImRlY2xpbmUiLCJkaXNwb3NlIiwiYWRkRGlzcG9zZUhhbmRsZXIiLCJyZW1vdmVEaXNwb3NlSGFuZGxlciIsImlkeCIsInNwbGljZSIsImNoZWNrIiwiaG90Q2hlY2siLCJhcHBseSIsImhvdEFwcGx5Iiwic3RhdHVzIiwibCIsImhvdFN0YXR1c0hhbmRsZXJzIiwiYWRkU3RhdHVzSGFuZGxlciIsInJlbW92ZVN0YXR1c0hhbmRsZXIiLCJkYXRhIiwibmV3U3RhdHVzIiwiaG90RGVmZXJyZWQiLCJob3RVcGRhdGVOZXdIYXNoIiwidG9Nb2R1bGVJZCIsImlkIiwiRXJyb3IiLCJyZXF1ZXN0VGltZW91dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiWE1MSHR0cFJlcXVlc3QiLCJyZXF1ZXN0UGF0aCIsInAiLCJvcGVuIiwidGltZW91dCIsInNlbmQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwidXBkYXRlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiYyIsImgiLCJwcm9taXNlIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2hhcnNldCIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImhvdERvd25sb2FkVXBkYXRlQ2h1bmsiLCJkZWZlcnJlZCIsInJlc3VsdCIsIm91dGRhdGVkTW9kdWxlcyIsIm9wdGlvbnMiLCJjYiIsImoiLCJtb2R1bGUiLCJnZXRBZmZlY3RlZFN0dWZmIiwidXBkYXRlTW9kdWxlSWQiLCJvdXRkYXRlZERlcGVuZGVuY2llcyIsInF1ZXVlIiwibWFwIiwiY2hhaW4iLCJxdWV1ZUl0ZW0iLCJwb3AiLCJ0eXBlIiwicGFyZW50SWQiLCJwYXJlbnQiLCJjb25jYXQiLCJhZGRBbGxUb1NldCIsImEiLCJiIiwiaXRlbSIsImFwcGxpZWRVcGRhdGUiLCJ3YXJuVW5leHBlY3RlZFJlcXVpcmUiLCJhYm9ydEVycm9yIiwiZG9BcHBseSIsImRvRGlzcG9zZSIsImNoYWluSW5mbyIsImpvaW4iLCJvbkRlY2xpbmVkIiwiaWdub3JlRGVjbGluZWQiLCJvblVuYWNjZXB0ZWQiLCJpZ25vcmVVbmFjY2VwdGVkIiwib25BY2NlcHRlZCIsIm9uRGlzcG9zZWQiLCJvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMiLCJlcnJvckhhbmRsZXIiLCJrZXlzIiwiZm9yRWFjaCIsImluc3RhbGxlZENodW5rcyIsImhvdERpc3Bvc2VDaHVuayIsImRlcGVuZGVuY3kiLCJtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyIsInNsaWNlIiwiZGlzcG9zZUhhbmRsZXJzIiwiY2hpbGQiLCJtb2R1bGVzIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJvbkVycm9yZWQiLCJkZXBlbmRlbmN5SWQiLCJpZ25vcmVFcnJvcmVkIiwiZXJyMiIsIm9yaWdpbmFsRXJyb3IiLCJleHBvcnRzIiwibSIsImQiLCJnZXR0ZXIiLCJvIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInMiLCJ4IiwiZWxlbWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJsb2ciXSwibWFwcGluZ3MiOiJhQUdFLElBQUlBLEVBQTBCQyxPQUF5QixpQkFDdkRBLE9BQXlCLGlCQUN6QixTQUFrQ0MsRUFBU0MsSUFnUjNDLFNBQTJCRCxFQUFTQyxHQUNuQyxJQUFLQyxFQUFxQkYsS0FBYUcsRUFBcUJILEdBQzNELE9BRUQsSUFBSyxJQUFJSSxLQURURCxFQUFxQkgsSUFBVyxFQUNYQyxFQUNoQkksT0FBT0MsVUFBVUMsZUFBZUMsS0FBS1AsRUFBYUcsS0FDckRLLEVBQVVMLEdBQVlILEVBQVlHLElBR1Ys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QUFPRixHQUlSM0osRUFBb0IrSixFQUFJLFNBQVM5RCxHQUNoQyxJQUFJb0QsRUFBU3BELEdBQVVBLEVBQU95RCxXQUM3QixXQUF3QixPQUFPekQsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQWpHLEVBQW9Cb0osRUFBRUMsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUnJKLEVBQW9Cc0osRUFBSSxTQUFTVSxFQUFRQyxHQUFZLE9BQU9wTCxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLZ0wsRUFBUUMsSUFHekdqSyxFQUFvQnNFLEVBQUksR0FHeEJ0RSxFQUFvQmlGLEVBQUksV0FBYSxPQUFPekYsR0FJckNLLEVBQWlCLGlCQUFqQkEsQ0FBbUNHLEVBQW9Ca0ssRUFBSSxrQixnRENodkJsRSxJQ25DcUJDLEVEcUNoQkMsRSxPQVdMaEYsU0FBU2lGLEtBQUs1RSxjQVhUMkUsRUFBVWhGLFNBQVNDLGNBQWMsUUFHN0JpRixVQUFZLENBQ2xCLGlCQUNBLHdCQzFDa0JILEVEMENZLEVDekMvQjFKLFFBQVE4SixJQUFJLGdCQUNMSixFQUFJQSxFQUFJQSxJRHlDZDNDLEtBQUssUUFFQzRDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCIxZjc3ZDM3OWY4YTA2MDA2MjQ1MFwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvaW5kZXguanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbi8vIGltcG9ydCAnbHZiby9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgSWNvbiBmcm9tICdsdmJvL2ljb24uanBnJztcclxuLy8gaW1wb3J0IERhdGExIGZyb20gJ2x2Ym8vZGF0YS54bWwnO1xyXG4vLyBpbXBvcnQgRGF0YTIgZnJvbSAnbHZiby9kYXRhLmpzb24nXHJcbi8vIGltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xyXG4vLyBpbXBvcnQgcHJpbnRNZTIgZnJvbSAnLi9wcmludDIuanMnO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgICAgY3ViZVxyXG4vLyB9IGZyb20gJy4vbWF0aC5qcyc7XHJcblxyXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbi8vICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gW1xyXG4vLyAgICAgICAgICdIZWxsbyB3ZWJwYWNrIScsXHJcbi8vICAgICAgICAgJzUgY3ViZWQgaXMgZXF1YWwgdG8gJyArIGN1YmUoNSlcclxuLy8gICAgIF0uam9pbignXFxuXFxuJyk7XHJcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XHJcbi8vICAgICB2YXIgbXlJY29uID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICBteUljb24uc3JjID0gSWNvbjtcclxuLy8gICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKERhdGExKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKERhdGEyKTtcclxuLy8gICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuLy8gICAgIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XHJcbi8vICAgICBidG4ub25jbGljayA9IHByaW50TWU7XHJcbi8vICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcbi8vICAgICB2YXIgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4vLyAgICAgYnRuMi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlITIyMjInO1xyXG4vLyAgICAgYnRuMi5vbmNsaWNrID0gcHJpbnRNZTI7XHJcbi8vICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bjIpO1xyXG5cclxuLy8gICAgIHJldHVybiBlbGVtZW50O1xyXG4vLyB9XHJcblxyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuXHJcbiBpbXBvcnQgeyBjdWJlIH0gZnJvbSAnLi9tYXRoLmpzJztcclxuXHJcbiAgZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG5cclxuICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuXHJcblxyXG4gICBlbGVtZW50LmlubmVySFRNTCA9IFtcclxuICAgICAnSGVsbG8gd2VicGFjayEnLFxyXG4gICAgICc1IGN1YmVkIGlzIGVxdWFsIHRvICcgKyBjdWJlKDUpXHJcbiAgIF0uam9pbignXFxuXFxuJyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XHJcbiAgY29uc29sZS5sb2coJ2FhYWFhYScpXHJcbiAgICByZXR1cm4geCAqIHg7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjdWJlKHgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhYWFzc3Nzc3NhYWEnKVxyXG4gICAgcmV0dXJuIHggKiB4ICogeDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==