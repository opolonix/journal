(self.webpackChunkeljur_build_frontend = self.webpackChunkeljur_build_frontend || []).push([
	[5508], {
		7096: function(t, e, n) {
			'use strict';
			n.d(e, {
				'S1': function() {
					return vr
				}
			});
			var r = n(74996),
				o = n(88084),
				i = n(14450);

			function a(t) {
				return function(t) {
					if (Array.isArray(t)) return c(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return c(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
				}(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function c(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function u(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
			}

			function s(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var f = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
				l = function() {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						u(this, t), this._options = e, t.prototype.__init.call(this)
					}
					var e, n, c;
					return e = t, n = [{
						key: '__init',
						value: function() {
							this.name = t.id
						}
					}, {
						key: 'setupOnce',
						value: function(e, n) {
							var c = function(e) {
								var c = n();
								if (c) {
									var u = c.getIntegration(t);
									if (u) {
										var s = c.getClient(),
											l = s ? s.getOptions() : {},
											y = function() {
												var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
													e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
												return {
													allowUrls: [].concat(a(t.allowUrls || []), a(e.allowUrls || [])),
													denyUrls: [].concat(a(t.denyUrls || []), a(e.denyUrls || [])),
													ignoreErrors: [].concat(a(t.ignoreErrors || []), a(e.ignoreErrors || []), f),
													ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
												}
											}(u._options, l);
										return function(t, e) {
											return e.ignoreInternal && function(t) {
												try {
													return 'SentryError' === t.exception.values[0].type
												} catch (t) {}
												return !1
											}(t) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Event dropped due to being internal Sentry Error.\nEvent: '.concat((0, o.jH)(t))), !0) : function(t, e) {
												return !(!e || !e.length) && function(t) {
													if (t.message) return [t.message];
													if (t.exception) try {
														var e = t.exception.values && t.exception.values[0] || {},
															n = e.type,
															i = void 0 === n ? '' : n,
															a = e.value,
															c = void 0 === a ? '' : a;
														return [''.concat(c), ''.concat(i, ': ').concat(c)]
													} catch (e) {
														return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Cannot extract message for event '.concat((0, o.jH)(t))), []
													}
													return []
												}(t).some((function(t) {
													return e.some((function(e) {
														return (0, i.zC)(t, e)
													}))
												}))
											}(t, e.ignoreErrors) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Event dropped due to being matched by `ignoreErrors` option.\nEvent: '.concat((0, o.jH)(t))), !0) : function(t, e) {
												if (!e || !e.length) return !1;
												var n = p(t);
												return !!n && e.some((function(t) {
													return (0, i.zC)(n, t)
												}))
											}(t, e.denyUrls) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Event dropped due to being matched by `denyUrls` option.\nEvent: '.concat((0, o.jH)(t), '.\nUrl: ').concat(p(t))), !0) : ! function(t, e) {
												if (!e || !e.length) return !0;
												var n = p(t);
												return !n || e.some((function(t) {
													return (0, i.zC)(n, t)
												}))
											}(t, e.allowUrls) && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Event dropped due to not being matched by `allowUrls` option.\nEvent: '.concat((0, o.jH)(t), '.\nUrl: ').concat(p(t))), !0)
										}(e, y) ? null : e
									}
								}
								return e
							};
							c.id = this.name, e(c)
						}
					}], c = [{
						key: '__initStatic',
						value: function() {
							this.id = 'InboundFilters'
						}
					}], n && s(e.prototype, n), c && s(e, c), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), t
				}();

			function p(t) {
				try {
					var e;
					try {
						e = t.exception.values[0].stacktrace.frames
					} catch (t) {}
					return e ? function() {
						for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = t.length - 1; e >= 0; e--) {
							var n = t[e];
							if (n && '<anonymous>' !== n.filename && '[native code]' !== n.filename) return n.filename || null
						}
						return null
					}(e) : null
				} catch (e) {
					return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Cannot extract url for event '.concat((0, o.jH)(t))), null
				}
			}
			l.__initStatic();
			var y, d = n(38912);

			function v(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var h = function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), t.prototype.__init.call(this)
				}
				var e, n, r;
				return e = t, n = [{
					key: '__init',
					value: function() {
						this.name = t.id
					}
				}, {
					key: 'setupOnce',
					value: function() {
						y = Function.prototype.toString, Function.prototype.toString = function() {
							for (var t = (0, d.HK)(this) || this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
							return y.apply(t, n)
						}
					}
				}], r = [{
					key: '__initStatic',
					value: function() {
						this.id = 'FunctionToString'
					}
				}], n && v(e.prototype, n), r && v(e, r), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();
			h.__initStatic();
			var _ = n(65185),
				b = n(53683);

			function g(t) {
				return function(t) {
					if (Array.isArray(t)) return m(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return m(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(t, e)
				}(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function m(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var O = [];

			function w(t) {
				return t.reduce((function(t, e) {
					return t.every((function(t) {
						return e.name !== t.name
					})) && t.push(e), t
				}), [])
			}

			function E(t) {
				var e = t.defaultIntegrations && g(t.defaultIntegrations) || [],
					n = t.integrations,
					r = g(w(e));
				Array.isArray(n) ? r = [].concat(g(r.filter((function(t) {
					return n.every((function(e) {
						return e.name !== t.name
					}))
				}))), g(w(n))) : 'function' == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
				var o, i = r.map((function(t) {
						return t.name
					})),
					a = 'Debug'; - 1 !== i.indexOf(a) && (o = r).push.apply(o, g(r.splice(i.indexOf(a), 1)));
				return r
			}

			function S(t, e) {
				!0 === e.debug && ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? r.kg.enable() : console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.'));
				var n = (0, b.Gd)(),
					o = n.getScope();
				o && o.update(e.initialScope);
				var i = new t(e);
				n.bindClient(i)
			}
			var j = n(94647),
				k = n(77761);

			function P() {
				if (!('fetch' in (0, j.R)())) return !1;
				try {
					return new Headers, new Request('http://www.example.com'), new Response, !0
				} catch (t) {
					return !1
				}
			}

			function D(t) {
				return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
			}
			var x = n(44459);

			function T(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function R(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? T(Object(n), !0).forEach((function(e) {
						A(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function A(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function N(t, e) {
				var n = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
				if (!n) {
					if (Array.isArray(t) || (n = function(t, e) {
							if (!t) return;
							if ('string' == typeof t) return U(t, e);
							var n = Object.prototype.toString.call(t).slice(8, -1);
							'Object' === n && t.constructor && (n = t.constructor.name);
							if ('Map' === n || 'Set' === n) return Array.from(t);
							if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(t, e)
						}(t)) || e && t && 'number' == typeof t.length) {
						n && (t = n);
						var r = 0,
							o = function() {};
						return {
							s: o,
							n: function() {
								return r >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[r++]
								}
							},
							e: function(t) {
								throw t
							},
							f: o
						}
					}
					throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}
				var i, a = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(t)
					},
					n: function() {
						var t = n.next();
						return a = t.done, t
					},
					e: function(t) {
						c = !0, i = t
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function U(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var I, C = (0, j.R)(),
				G = {},
				B = {};

			function Y(t) {
				if (!B[t]) switch (B[t] = !0, t) {
					case 'console':
						! function() {
							if (!('console' in C)) return;
							r.RU.forEach((function(t) {
								t in C.console && (0, d.hl)(C.console, t, (function(e) {
									return function() {
										for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
										M('console', {
											args: r,
											level: t
										}), e && e.apply(C.console, r)
									}
								}))
							}))
						}();
						break;
					case 'dom':
						! function() {
							if (!('document' in C)) return;
							var t = M.bind(null, 'dom'),
								e = J(t, !0);
							C.document.addEventListener('click', e, !1), C.document.addEventListener('keypress', e, !1), ['EventTarget', 'Node'].forEach((function(e) {
								var n = C[e] && C[e].prototype;
								n && n.hasOwnProperty && n.hasOwnProperty('addEventListener') && ((0, d.hl)(n, 'addEventListener', (function(e) {
									return function(n, r, o) {
										if ('click' === n || 'keypress' == n) try {
											var i = this,
												a = i.__sentry_instrumentation_handlers__ = i.__sentry_instrumentation_handlers__ || {},
												c = a[n] = a[n] || {
													refCount: 0
												};
											if (!c.handler) {
												var u = J(t);
												c.handler = u, e.call(this, n, u, o)
											}
											c.refCount += 1
										} catch (t) {}
										return e.call(this, n, r, o)
									}
								})), (0, d.hl)(n, 'removeEventListener', (function(t) {
									return function(e, n, r) {
										if ('click' === e || 'keypress' == e) try {
											var o = this,
												i = o.__sentry_instrumentation_handlers__ || {},
												a = i[e];
											a && (a.refCount -= 1, a.refCount <= 0 && (t.call(this, e, a.handler, r), a.handler = void 0, delete i[e]), 0 === Object.keys(i).length && delete o.__sentry_instrumentation_handlers__)
										} catch (t) {}
										return t.call(this, e, n, r)
									}
								})))
							}))
						}();
						break;
					case 'xhr':
						! function() {
							if (!('XMLHttpRequest' in C)) return;
							var t = XMLHttpRequest.prototype;
							(0, d.hl)(t, 'open', (function(t) {
								return function() {
									for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
									var o = this,
										i = n[1],
										a = o.__sentry_xhr__ = {
											method: (0, x.HD)(n[0]) ? n[0].toUpperCase() : n[0],
											url: n[1]
										};
									(0, x.HD)(i) && 'POST' === a.method && i.match(/sentry_key/) && (o.__sentry_own_request__ = !0);
									var c = function() {
										if (4 === o.readyState) {
											try {
												a.status_code = o.status
											} catch (t) {}
											M('xhr', {
												args: n,
												endTimestamp: Date.now(),
												startTimestamp: Date.now(),
												xhr: o
											})
										}
									};
									return 'onreadystatechange' in o && 'function' == typeof o.onreadystatechange ? (0, d.hl)(o, 'onreadystatechange', (function(t) {
										return function() {
											c();
											for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
											return t.apply(o, n)
										}
									})) : o.addEventListener('readystatechange', c), t.apply(o, n)
								}
							})), (0, d.hl)(t, 'send', (function(t) {
								return function() {
									for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
									return this.__sentry_xhr__ && void 0 !== n[0] && (this.__sentry_xhr__.body = n[0]), M('xhr', {
										args: n,
										startTimestamp: Date.now(),
										xhr: this
									}), t.apply(this, n)
								}
							}))
						}();
						break;
					case 'fetch':
						! function() {
							if (! function() {
									if (!P()) return !1;
									var t = (0, j.R)();
									if (D(t.fetch)) return !0;
									var e = !1,
										n = t.document;
									if (n && 'function' == typeof n.createElement) try {
										var o = n.createElement('iframe');
										o.hidden = !0, n.head.appendChild(o), o.contentWindow && o.contentWindow.fetch && (e = D(o.contentWindow.fetch)), n.head.removeChild(o)
									} catch (t) {
										('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', t)
									}
									return e
								}()) return;
							(0, d.hl)(C, 'fetch', (function(t) {
								return function() {
									for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
									var o = {
										args: n,
										fetchData: {
											method: L(n),
											url: q(n)
										},
										startTimestamp: Date.now()
									};
									return M('fetch', R({}, o)), t.apply(C, n).then((function(t) {
										return M('fetch', R(R({}, o), {}, {
											endTimestamp: Date.now(),
											response: t
										})), t
									}), (function(t) {
										throw M('fetch', R(R({}, o), {}, {
											endTimestamp: Date.now(),
											error: t
										})), t
									}))
								}
							}))
						}();
						break;
					case 'history':
						! function() {
							if (! function() {
									var t = (0, j.R)(),
										e = t.chrome,
										n = e && e.app && e.app.runtime,
										r = 'history' in t && !!t.history.pushState && !!t.history.replaceState;
									return !n && r
								}()) return;
							var t = C.onpopstate;

							function e(t) {
								return function() {
									for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
									var o = n.length > 2 ? n[2] : void 0;
									if (o) {
										var i = I,
											a = String(o);
										I = a, M('history', {
											from: i,
											to: a
										})
									}
									return t.apply(this, n)
								}
							}
							C.onpopstate = function() {
								var e = C.location.href,
									n = I;
								if (I = e, M('history', {
										from: n,
										to: e
									}), t) try {
									for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
									return t.apply(this, o)
								} catch (t) {}
							}, (0, d.hl)(C.history, 'pushState', e), (0, d.hl)(C.history, 'replaceState', e)
						}();
						break;
					case 'error':
						K = C.onerror, C.onerror = function(t, e, n, r, o) {
							return M('error', {
								column: r,
								error: o,
								line: n,
								msg: t,
								url: e
							}), !!K && K.apply(this, arguments)
						};
						break;
					case 'unhandledrejection':
						z = C.onunhandledrejection, C.onunhandledrejection = function(t) {
							return M('unhandledrejection', t), !z || z.apply(this, arguments)
						};
						break;
					default:
						return void(('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('unknown instrumentation type:', t))
				}
			}

			function $(t, e) {
				G[t] = G[t] || [], G[t].push(e), Y(t)
			}

			function M(t, e) {
				if (t && G[t]) {
					var n, o = N(G[t] || []);
					try {
						for (o.s(); !(n = o.n()).done;) {
							var i = n.value;
							try {
								i(e)
							} catch (e) {
								('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Error while triggering instrumentation handler.\nType: '.concat(t, '\nName: ').concat((0, k.$P)(i), '\nError:'), e)
							}
						}
					} catch (t) {
						o.e(t)
					} finally {
						o.f()
					}
				}
			}

			function L() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return 'Request' in C && (0, x.V9)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : 'GET'
			}

			function q() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return 'string' == typeof t[0] ? t[0] : 'Request' in C && (0, x.V9)(t[0], Request) ? t[0].url : String(t[0])
			}
			var H, V;

			function W(t, e) {
				if (!t) return !0;
				if (t.type !== e.type) return !0;
				try {
					if (t.target !== e.target) return !0
				} catch (t) {}
				return !1
			}

			function F(t) {
				if ('keypress' !== t.type) return !1;
				try {
					var e = t.target;
					if (!e || !e.tagName) return !0;
					if ('INPUT' === e.tagName || 'TEXTAREA' === e.tagName || e.isContentEditable) return !1
				} catch (t) {}
				return !0
			}

			function J(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return function(n) {
					if (n && V !== n && !F(n)) {
						var r = 'keypress' === n.type ? 'input' : n.type;
						(void 0 === H || W(V, n)) && (t({
							event: n,
							name: r,
							global: e
						}), V = n), clearTimeout(H), H = C.setTimeout((function() {
							H = void 0
						}), 1e3)
					}
				}
			}
			var K = null;
			var z = null;
			var X = n(59868);

			function Z(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Q(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function tt(t) {
				var e = t.protocol ? ''.concat(t.protocol, ':') : '',
					n = t.port ? ':'.concat(t.port) : '';
				return ''.concat(e, '//').concat(t.host).concat(n).concat(t.path ? '/'.concat(t.path) : '', '/api/')
			}

			function et(t) {
				return ''.concat(tt(t)).concat(t.projectId, '/envelope/')
			}

			function nt(t, e) {
				return (0, d._j)(function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {};
						e % 2 ? Z(Object(n), !0).forEach((function(e) {
							Q(t, e, n[e])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}))
					}
					return t
				}({
					sentry_key: t.publicKey,
					sentry_version: '7'
				}, e && {
					sentry_client: ''.concat(e.name, '/').concat(e.version)
				}))
			}

			function rt(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = 'string' == typeof e ? e : e.tunnel,
					r = 'string' != typeof e && e._metadata ? e._metadata.sdk : void 0;
				return n || ''.concat(et(t), '?').concat(nt(t, r))
			}
			var ot = n(26428);

			function it(t) {
				return it = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				}, it(t)
			}

			function at(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}

			function ct(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
			}

			function ut(t, e) {
				if (e && ('object' === it(e) || 'function' == typeof e)) return e;
				if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
				return st(t)
			}

			function st(t) {
				if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
				return t
			}

			function ft(t) {
				var e = 'function' == typeof Map ? new Map : void 0;
				return ft = function(t) {
					if (null === t || (n = t, -1 === Function.toString.call(n).indexOf('[native code]'))) return t;
					var n;
					if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
					if (void 0 !== e) {
						if (e.has(t)) return e.get(t);
						e.set(t, r)
					}

					function r() {
						return lt(t, arguments, dt(this).constructor)
					}
					return r.prototype = Object.create(t.prototype, {
						constructor: {
							value: r,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), yt(r, t)
				}, ft(t)
			}

			function lt(t, e, n) {
				return lt = pt() ? Reflect.construct.bind() : function(t, e, n) {
					var r = [null];
					r.push.apply(r, e);
					var o = new(Function.bind.apply(t, r));
					return n && yt(o, n.prototype), o
				}, lt.apply(null, arguments)
			}

			function pt() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}

			function yt(t, e) {
				return yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
					return t.__proto__ = e, t
				}, yt(t, e)
			}

			function dt(t) {
				return dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
					return t.__proto__ || Object.getPrototypeOf(t)
				}, dt(t)
			}
			var vt = function(t) {
				! function(t, e) {
					if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							writable: !0,
							configurable: !0
						}
					}), Object.defineProperty(t, 'prototype', {
						writable: !1
					}), e && yt(t, e)
				}(c, t);
				var e, n, r, o, i, a = (e = c, n = pt(), function() {
					var t, r = dt(e);
					if (n) {
						var o = dt(this).constructor;
						t = Reflect.construct(r, arguments, o)
					} else t = r.apply(this, arguments);
					return ut(this, t)
				});

				function c(t) {
					var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'warn';
					return ct(this, c), (e = a.call(this, t)).message = t, e.name = (this instanceof c ? this.constructor : void 0).prototype.constructor.name, Object.setPrototypeOf(st(e), (this instanceof c ? this.constructor : void 0).prototype), e.logLevel = n, e
				}
				return r = c, o && at(r.prototype, o), i && at(r, i), Object.defineProperty(r, 'prototype', {
					writable: !1
				}), r
			}(ft(Error));

			function ht(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return _t(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _t(t, e)
				}(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function _t(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var bt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

			function gt(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = t.host,
					r = t.path,
					o = t.pass,
					i = t.port,
					a = t.projectId,
					c = t.protocol,
					u = t.publicKey;
				return ''.concat(c, '://').concat(u).concat(e && o ? ':'.concat(o) : '') + '@'.concat(n).concat(i ? ':'.concat(i) : '', '/').concat(r ? ''.concat(r, '/') : r).concat(a)
			}

			function mt(t) {
				return {
					protocol: t.protocol,
					publicKey: t.publicKey || '',
					pass: t.pass || '',
					host: t.host,
					port: t.port || '',
					path: t.path || '',
					projectId: t.projectId
				}
			}

			function Ot(t) {
				var e = 'string' == typeof t ? function(t) {
					var e = bt.exec(t);
					if (!e) throw new vt('Invalid Sentry Dsn: '.concat(t));
					var n = ht(e.slice(1), 6),
						r = n[0],
						o = n[1],
						i = n[2],
						a = void 0 === i ? '' : i,
						c = n[3],
						u = n[4],
						s = void 0 === u ? '' : u,
						f = '',
						l = n[5],
						p = l.split('/');
					if (p.length > 1 && (f = p.slice(0, -1).join('/'), l = p.pop()), l) {
						var y = l.match(/^\d+/);
						y && (l = y[0])
					}
					return mt({
						host: c,
						pass: a,
						path: f,
						projectId: l,
						port: s,
						protocol: r,
						publicKey: o
					})
				}(t) : mt(t);
				return function(t) {
					if ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
						var e = t.port,
							n = t.projectId,
							r = t.protocol;
						if (['protocol', 'publicKey', 'host', 'projectId'].forEach((function(e) {
								if (!t[e]) throw new vt('Invalid Sentry Dsn: '.concat(e, ' missing'))
							})), !n.match(/^\d+$/)) throw new vt('Invalid Sentry Dsn: Invalid projectId '.concat(n));
						if (! function(t) {
								return 'http' === t || 'https' === t
							}(r)) throw new vt('Invalid Sentry Dsn: Invalid protocol '.concat(r));
						if (e && isNaN(parseInt(e, 10))) throw new vt('Invalid Sentry Dsn: Invalid port '.concat(e))
					}
				}(e), e
			}
			var wt = n(11367);

			function Et(t, e) {
				var n = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
				if (!n) {
					if (Array.isArray(t) || (n = kt(t)) || e && t && 'number' == typeof t.length) {
						n && (t = n);
						var r = 0,
							o = function() {};
						return {
							s: o,
							n: function() {
								return r >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[r++]
								}
							},
							e: function(t) {
								throw t
							},
							f: o
						}
					}
					throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}
				var i, a = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(t)
					},
					n: function() {
						var t = n.next();
						return a = t.done, t
					},
					e: function(t) {
						c = !0, i = t
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function St(t) {
				return function(t) {
					if (Array.isArray(t)) return Pt(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || kt(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function jt(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || kt(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function kt(t, e) {
				if (t) {
					if ('string' == typeof t) return Pt(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pt(t, e) : void 0
				}
			}

			function Pt(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function Dt(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				return [t, e]
			}

			function xt(t, e) {
				var n = jt(t, 2),
					r = n[0],
					o = n[1];
				return [r, [].concat(St(o), [e])]
			}

			function Tt(t, e) {
				t[1].forEach((function(t) {
					var n = t[0].type;
					e(t, n)
				}))
			}

			function Rt(t, e) {
				return (e || new TextEncoder).encode(t)
			}

			function At(t, e) {
				var n = jt(t, 2),
					r = n[0],
					o = n[1],
					i = JSON.stringify(r);

				function a(t) {
					'string' == typeof i ? i = 'string' == typeof t ? i + t : [Rt(i, e), t] : i.push('string' == typeof t ? Rt(t, e) : t)
				}
				var c, u = Et(o);
				try {
					for (u.s(); !(c = u.n()).done;) {
						var s = jt(c.value, 2),
							f = s[0],
							l = s[1];
						a('\n'.concat(JSON.stringify(f), '\n')), a('string' == typeof l || l instanceof Uint8Array ? l : JSON.stringify(l))
					}
				} catch (t) {
					u.e(t)
				} finally {
					u.f()
				}
				return 'string' == typeof i ? i : function(t) {
					var e, n = t.reduce((function(t, e) {
							return t + e.length
						}), 0),
						r = new Uint8Array(n),
						o = 0,
						i = Et(t);
					try {
						for (i.s(); !(e = i.n()).done;) {
							var a = e.value;
							r.set(a, o), o += a.length
						}
					} catch (t) {
						i.e(t)
					} finally {
						i.f()
					}
					return r
				}(i)
			}

			function Nt(t, e) {
				var n = 'string' == typeof t.data ? Rt(t.data, e) : t.data;
				return [(0, d.Jr)({
					type: 'attachment',
					length: n.length,
					filename: t.filename,
					content_type: t.contentType,
					attachment_type: t.attachmentType
				}), n]
			}
			var Ut = {
				session: 'session',
				sessions: 'session',
				attachment: 'attachment',
				transaction: 'transaction',
				event: 'error',
				client_report: 'internal',
				user_report: 'default'
			};

			function It(t) {
				return Ut[t]
			}
			var Ct = n(29395),
				Gt = n(62239);

			function Bt(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Yt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Bt(Object(n), !0).forEach((function(e) {
						$t(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function $t(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function Mt(t) {
				return function(t) {
					if (Array.isArray(t)) return Lt(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return Lt(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lt(t, e)
				}(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function Lt(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function qt(t) {
				if (t && t.sdk) {
					var e = t.sdk;
					return {
						name: e.name,
						version: e.version
					}
				}
			}

			function Ht(t, e, n, r) {
				var o = qt(n),
					i = t.type || 'event',
					a = (t.sdkProcessingMetadata || {}).transactionSampling || {},
					c = a.method,
					u = a.rate;
				! function(t, e) {
					e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [].concat(Mt(t.sdk.integrations || []), Mt(e.integrations || [])), t.sdk.packages = [].concat(Mt(t.sdk.packages || []), Mt(e.packages || [])))
				}(t, n && n.sdk);
				var s = function(t, e, n, r) {
					var o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.baggage,
						i = o && function(t) {
							return t[0]
						}(o);
					return Yt(Yt(Yt({
						event_id: t.event_id,
						sent_at: (new Date).toISOString()
					}, e && {
						sdk: e
					}), !!n && {
						dsn: gt(r)
					}), 'transaction' === t.type && i && {
						trace: (0, d.Jr)(Yt({}, i))
					})
				}(t, o, r, e);
				return delete t.sdkProcessingMetadata, Dt(s, [
					[{
						type: i,
						sample_rates: [{
							id: c,
							rate: u
						}]
					}, t]
				])
			}

			function Vt(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || Jt(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function Wt(t) {
				return function(t) {
					if (Array.isArray(t)) return Kt(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || Jt(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function Ft(t, e) {
				var n = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
				if (!n) {
					if (Array.isArray(t) || (n = Jt(t)) || e && t && 'number' == typeof t.length) {
						n && (t = n);
						var r = 0,
							o = function() {};
						return {
							s: o,
							n: function() {
								return r >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[r++]
								}
							},
							e: function(t) {
								throw t
							},
							f: o
						}
					}
					throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}
				var i, a = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(t)
					},
					n: function() {
						var t = n.next();
						return a = t.done, t
					},
					e: function(t) {
						c = !0, i = t
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function Jt(t, e) {
				if (t) {
					if ('string' == typeof t) return Kt(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Kt(t, e) : void 0
				}
			}

			function Kt(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function zt(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Xt(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? zt(Object(n), !0).forEach((function(e) {
						Zt(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function Zt(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function Qt(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var te = 'Not capturing exception because it\'s already been captured.',
				ee = function() {
					function t(e) {
						if (function(t, e) {
								if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
							}(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), this._options = e, e.dsn) {
							this._dsn = Ot(e.dsn);
							var n = rt(this._dsn, e);
							this._transport = e.transport(Xt(Xt({
								recordDroppedEvent: this.recordDroppedEvent.bind(this)
							}, e.transportOptions), {}, {
								url: n
							}))
						} else('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('No DSN provided, client will not do anything.')
					}
					var e, n, a;
					return e = t, n = [{
						key: '__init',
						value: function() {
							this._integrations = {}
						}
					}, {
						key: '__init2',
						value: function() {
							this._integrationsInitialized = !1
						}
					}, {
						key: '__init3',
						value: function() {
							this._numProcessing = 0
						}
					}, {
						key: '__init4',
						value: function() {
							this._outcomes = {}
						}
					}, {
						key: 'captureException',
						value: function(t, e, n) {
							var i = this;
							if (!(0, o.YO)(t)) {
								var a = e && e.event_id;
								return this._process(this.eventFromException(t, e).then((function(t) {
									return i._captureEvent(t, e, n)
								})).then((function(t) {
									a = t
								}))), a
							}('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(te)
						}
					}, {
						key: 'captureMessage',
						value: function(t, e, n, r) {
							var o = this,
								i = n && n.event_id,
								a = (0, x.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
							return this._process(a.then((function(t) {
								return o._captureEvent(t, n, r)
							})).then((function(t) {
								i = t
							}))), i
						}
					}, {
						key: 'captureEvent',
						value: function(t, e, n) {
							if (!(e && e.originalException && (0, o.YO)(e.originalException))) {
								var i = e && e.event_id;
								return this._process(this._captureEvent(t, e, n).then((function(t) {
									i = t
								}))), i
							}('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(te)
						}
					}, {
						key: 'captureSession',
						value: function(t) {
							this._isEnabled() ? 'string' != typeof t.release ? ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Discarded session because of missing or non-string release') : (this.sendSession(t), (0, ot.CT)(t, {
								init: !1
							})) : ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('SDK not enabled, will not capture session.')
						}
					}, {
						key: 'getDsn',
						value: function() {
							return this._dsn
						}
					}, {
						key: 'getOptions',
						value: function() {
							return this._options
						}
					}, {
						key: 'getTransport',
						value: function() {
							return this._transport
						}
					}, {
						key: 'flush',
						value: function(t) {
							var e = this._transport;
							return e ? this._isClientDoneProcessing(t).then((function(n) {
								return e.flush(t).then((function(t) {
									return n && t
								}))
							})) : (0, wt.WD)(!0)
						}
					}, {
						key: 'close',
						value: function(t) {
							var e = this;
							return this.flush(t).then((function(t) {
								return e.getOptions().enabled = !1, t
							}))
						}
					}, {
						key: 'setupIntegrations',
						value: function() {
							var t, e;
							this._isEnabled() && !this._integrationsInitialized && (this._integrations = (t = this._options.integrations, e = {}, t.forEach((function(t) {
								e[t.name] = t, -1 === O.indexOf(t.name) && (t.setupOnce(_.c, b.Gd), O.push(t.name), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log('Integration installed: '.concat(t.name)))
							})), e), this._integrationsInitialized = !0)
						}
					}, {
						key: 'getIntegrationById',
						value: function(t) {
							return this._integrations[t]
						}
					}, {
						key: 'getIntegration',
						value: function(t) {
							try {
								return this._integrations[t.id] || null
							} catch (e) {
								return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Cannot retrieve integration '.concat(t.id, ' from the current Client')), null
							}
						}
					}, {
						key: 'sendEvent',
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (this._dsn) {
								var n, r = Ht(t, this._dsn, this._options._metadata, this._options.tunnel),
									o = Ft(e.attachments || []);
								try {
									for (o.s(); !(n = o.n()).done;) {
										var i = n.value;
										r = xt(r, Nt(i, this._options.transportOptions && this._options.transportOptions.textEncoder))
									}
								} catch (t) {
									o.e(t)
								} finally {
									o.f()
								}
								this._sendEnvelope(r)
							}
						}
					}, {
						key: 'sendSession',
						value: function(t) {
							if (this._dsn) {
								var e = function(t, e, n, r) {
									var o = qt(n);
									return Dt(Yt(Yt({
										sent_at: (new Date).toISOString()
									}, o && {
										sdk: o
									}), !!r && {
										dsn: gt(e)
									}), ['aggregates' in t ? [{
										type: 'sessions'
									}, t] : [{
										type: 'session'
									}, t]])
								}(t, this._dsn, this._options._metadata, this._options.tunnel);
								this._sendEnvelope(e)
							}
						}
					}, {
						key: 'recordDroppedEvent',
						value: function(t, e) {
							if (this._options.sendClientReports) {
								var n = ''.concat(t, ':').concat(e);
								('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log('Adding outcome: "'.concat(n, '"')), this._outcomes[n] = this._outcomes[n] + 1 || 1
							}
						}
					}, {
						key: '_updateSessionFromEvent',
						value: function(t, e) {
							var n = !1,
								r = !1,
								o = e.exception && e.exception.values;
							if (o) {
								r = !0;
								var i, a = Ft(o);
								try {
									for (a.s(); !(i = a.n()).done;) {
										var c = i.value.mechanism;
										if (c && !1 === c.handled) {
											n = !0;
											break
										}
									}
								} catch (t) {
									a.e(t)
								} finally {
									a.f()
								}
							}
							var u = 'ok' === t.status;
							(u && 0 === t.errors || u && n) && ((0, ot.CT)(t, Xt(Xt({}, n && {
								status: 'crashed'
							}), {}, {
								errors: t.errors || Number(r || n)
							})), this.captureSession(t))
						}
					}, {
						key: '_isClientDoneProcessing',
						value: function(t) {
							var e = this;
							return new wt.cW((function(n) {
								var r = 0,
									o = setInterval((function() {
										0 == e._numProcessing ? (clearInterval(o), n(!0)) : (r += 1, t && r >= t && (clearInterval(o), n(!1)))
									}), 1)
							}))
						}
					}, {
						key: '_isEnabled',
						value: function() {
							return !1 !== this.getOptions().enabled && void 0 !== this._dsn
						}
					}, {
						key: '_prepareEvent',
						value: function(t, e, n) {
							var r = this,
								i = this.getOptions(),
								a = i.normalizeDepth,
								c = void 0 === a ? 3 : a,
								u = i.normalizeMaxBreadth,
								s = void 0 === u ? 1e3 : u,
								f = Xt(Xt({}, t), {}, {
									event_id: t.event_id || e.event_id || (0, o.DM)(),
									timestamp: t.timestamp || (0, Ct.yW)()
								});
							this._applyClientOptions(f), this._applyIntegrationsMetadata(f);
							var l = n;
							e.captureContext && (l = _.s.clone(l).update(e.captureContext));
							var p = (0, wt.WD)(f);
							if (l) {
								var y = [].concat(Wt(e.attachments || []), Wt(l.getAttachments()));
								y.length && (e.attachments = y), p = l.applyToEvent(f, e)
							}
							return p.then((function(t) {
								return 'number' == typeof c && c > 0 ? r._normalizeEvent(t, c, s) : t
							}))
						}
					}, {
						key: '_normalizeEvent',
						value: function(t, e, n) {
							if (!t) return null;
							var r = Xt(Xt(Xt(Xt(Xt({}, t), t.breadcrumbs && {
								breadcrumbs: t.breadcrumbs.map((function(t) {
									return Xt(Xt({}, t), t.data && {
										data: (0, Gt.Fv)(t.data, e, n)
									})
								}))
							}), t.user && {
								user: (0, Gt.Fv)(t.user, e, n)
							}), t.contexts && {
								contexts: (0, Gt.Fv)(t.contexts, e, n)
							}), t.extra && {
								extra: (0, Gt.Fv)(t.extra, e, n)
							});
							return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = (0, Gt.Fv)(t.contexts.trace.data, e, n))), t.spans && (r.spans = t.spans.map((function(t) {
								return t.data && (t.data = (0, Gt.Fv)(t.data, e, n)), t
							}))), r
						}
					}, {
						key: '_applyClientOptions',
						value: function(t) {
							var e = this.getOptions(),
								n = e.environment,
								r = e.release,
								o = e.dist,
								a = e.maxValueLength,
								c = void 0 === a ? 250 : a;
							'environment' in t || (t.environment = 'environment' in e ? n : 'production'), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = (0, i.$G)(t.message, c));
							var u = t.exception && t.exception.values && t.exception.values[0];
							u && u.value && (u.value = (0, i.$G)(u.value, c));
							var s = t.request;
							s && s.url && (s.url = (0, i.$G)(s.url, c))
						}
					}, {
						key: '_applyIntegrationsMetadata',
						value: function(t) {
							var e = Object.keys(this._integrations);
							e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [].concat(Wt(t.sdk.integrations || []), e))
						}
					}, {
						key: '_captureEvent',
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								n = arguments.length > 2 ? arguments[2] : void 0;
							return this._processEvent(t, e, n).then((function(t) {
								return t.event_id
							}), (function(t) {
								if ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
									var e = t;
									'log' === e.logLevel ? r.kg.log(e.message) : r.kg.warn(e)
								}
							}))
						}
					}, {
						key: '_processEvent',
						value: function(t, e, n) {
							var r = this,
								o = this.getOptions(),
								i = o.beforeSend,
								a = o.sampleRate;
							if (!this._isEnabled()) return (0, wt.$2)(new vt('SDK not enabled, will not capture event.', 'log'));
							var c = 'transaction' === t.type;
							return !c && 'number' == typeof a && Math.random() > a ? (this.recordDroppedEvent('sample_rate', 'error'), (0, wt.$2)(new vt('Discarding event because it\'s not included in the random sample (sampling rate = '.concat(a, ')'), 'log'))) : this._prepareEvent(t, e, n).then((function(n) {
								if (null === n) throw r.recordDroppedEvent('event_processor', t.type || 'error'), new vt('An event processor returned null, will not send event.', 'log');
								return e.data && !0 === e.data.__sentry__ || c || !i ? n : function(t) {
									var e = '`beforeSend` method has to return `null` or a valid event.';
									if ((0, x.J8)(t)) return t.then((function(t) {
										if (!(0, x.PO)(t) && null !== t) throw new vt(e);
										return t
									}), (function(t) {
										throw new vt('beforeSend rejected with '.concat(t))
									}));
									if (!(0, x.PO)(t) && null !== t) throw new vt(e);
									return t
								}(i(n, e))
							})).then((function(o) {
								if (null === o) throw r.recordDroppedEvent('before_send', t.type || 'error'), new vt('`beforeSend` returned `null`, will not send event.', 'log');
								var i = n && n.getSession();
								return !c && i && r._updateSessionFromEvent(i, o), r.sendEvent(o, e), o
							})).then(null, (function(t) {
								if (t instanceof vt) throw t;
								throw r.captureException(t, {
									data: {
										__sentry__: !0
									},
									originalException: t
								}), new vt('Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: '.concat(t))
							}))
						}
					}, {
						key: '_process',
						value: function(t) {
							var e = this;
							this._numProcessing += 1, t.then((function(t) {
								return e._numProcessing -= 1, t
							}), (function(t) {
								return e._numProcessing -= 1, t
							}))
						}
					}, {
						key: '_sendEnvelope',
						value: function(t) {
							this._transport && this._dsn ? this._transport.send(t).then(null, (function(t) {
								('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Error while sending event:', t)
							})) : ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Transport disabled')
						}
					}, {
						key: '_clearOutcomes',
						value: function() {
							var t = this._outcomes;
							return this._outcomes = {}, Object.keys(t).map((function(e) {
								var n = Vt(e.split(':'), 2);
								return {
									reason: n[0],
									category: n[1],
									quantity: t[e]
								}
							}))
						}
					}], n && Qt(e.prototype, n), a && Qt(e, a), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), t
				}();

			function ne(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function re(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ne(Object(n), !0).forEach((function(e) {
						oe(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function oe(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function ie(t, e) {
				var n = ce(t, e),
					r = {
						type: e && e.name,
						value: se(e)
					};
				return n.length && (r.stacktrace = {
					frames: n
				}), void 0 === r.type && '' === r.value && (r.value = 'Unrecoverable error caught'), r
			}

			function ae(t, e) {
				return {
					exception: {
						values: [ie(t, e)]
					}
				}
			}

			function ce(t, e) {
				var n = e.stacktrace || e.stack || '',
					r = function(t) {
						if (t) {
							if ('number' == typeof t.framesToPop) return t.framesToPop;
							if (ue.test(t.message)) return 1
						}
						return 0
					}(e);
				try {
					return t(n, r)
				} catch (t) {}
				return []
			}
			var ue = /Minified React error #\d+;/i;

			function se(t) {
				var e = t && t.message;
				return e ? e.error && 'string' == typeof e.error.message ? e.error.message : e : 'No error message'
			}

			function fe(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'info',
					r = arguments.length > 3 ? arguments[3] : void 0,
					o = arguments.length > 4 ? arguments[4] : void 0,
					i = r && r.syntheticException || void 0,
					a = pe(t, e, i, o);
				return a.level = n, r && r.event_id && (a.event_id = r.event_id), (0, wt.WD)(a)
			}

			function le(t, e, n, r, i) {
				var a;
				if ((0, x.VW)(e) && e.error) return ae(t, e.error);
				if ((0, x.TX)(e) || (0, x.fm)(e)) {
					var c = e;
					if ('stack' in e) a = ae(t, e);
					else {
						var u = c.name || ((0, x.TX)(c) ? 'DOMError' : 'DOMException'),
							s = c.message ? ''.concat(u, ': ').concat(c.message) : u;
						a = pe(t, s, n, r), (0, o.Db)(a, s)
					}
					return 'code' in c && (a.tags = re(re({}, a.tags), {}, {
						'DOMException.code': ''.concat(c.code)
					})), a
				}
				return (0, x.VZ)(e) ? ae(t, e) : (0, x.PO)(e) || (0, x.cO)(e) ? (a = function(t, e, n, r) {
					var o = {
						exception: {
							values: [{
								type: (0, x.cO)(e) ? e.constructor.name : r ? 'UnhandledRejection' : 'Error',
								value: 'Non-Error '.concat(r ? 'promise rejection' : 'exception', ' captured with keys: ').concat((0, d.zf)(e))
							}]
						},
						extra: {
							__serialized__: (0, Gt.Qy)(e)
						}
					};
					if (n) {
						var i = ce(t, n);
						i.length && (o.exception.values[0].stacktrace = {
							frames: i
						})
					}
					return o
				}(t, e, n, i), (0, o.EG)(a, {
					synthetic: !0
				}), a) : (a = pe(t, e, n, r), (0, o.Db)(a, ''.concat(e), void 0), (0, o.EG)(a, {
					synthetic: !0
				}), a)
			}

			function pe(t, e, n, r) {
				var o = {
					message: e
				};
				if (r && n) {
					var i = ce(t, n);
					i.length && (o.exception = {
						values: [{
							value: e,
							stacktrace: {
								frames: i
							}
						}]
					})
				}
				return o
			}
			var ye = n(95602),
				de = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];

			function ve(t) {
				return 'warn' === t ? 'warning' : de.includes(t) ? t : 'log'
			}

			function he(t) {
				if (!t) return {};
				var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
				if (!e) return {};
				var n = e[6] || '',
					r = e[8] || '';
				return {
					host: e[4],
					path: e[5],
					protocol: e[2],
					relative: e[5] + n + r
				}
			}

			function _e(t) {
				return _e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				}, _e(t)
			}

			function be(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function ge(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? be(Object(n), !0).forEach((function(e) {
						me(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function me(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function Oe(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var we = 'Breadcrumbs',
				Ee = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
						}(this, t), t.prototype.__init.call(this), this.options = ge({
							console: !0,
							dom: !0,
							fetch: !0,
							history: !0,
							sentry: !0,
							xhr: !0
						}, e)
					}
					var e, n, r;
					return e = t, r = [{
						key: '__initStatic',
						value: function() {
							this.id = we
						}
					}], (n = [{
						key: '__init',
						value: function() {
							this.name = t.id
						}
					}, {
						key: 'setupOnce',
						value: function() {
							this.options.console && $('console', Se), this.options.dom && $('dom', function(t) {
								function e(e) {
									var n, r = 'object' === _e(t) ? t.serializeAttribute : void 0;
									'string' == typeof r && (r = [r]);
									try {
										n = e.event.target ? (0, ye.Rt)(e.event.target, r) : (0, ye.Rt)(e.event, r)
									} catch (t) {
										n = '<unknown>'
									}
									0 !== n.length && (0, b.Gd)().addBreadcrumb({
										category: 'ui.'.concat(e.name),
										message: n
									}, {
										event: e.event,
										name: e.name,
										global: e.global
									})
								}
								return e
							}(this.options.dom)), this.options.xhr && $('xhr', je), this.options.fetch && $('fetch', ke), this.options.history && $('history', Pe)
						}
					}]) && Oe(e.prototype, n), r && Oe(e, r), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), t
				}();

			function Se(t) {
				var e = {
					category: 'console',
					data: {
						arguments: t.args,
						logger: 'console'
					},
					level: ve(t.level),
					message: (0, i.nK)(t.args, ' ')
				};
				if ('assert' === t.level) {
					if (!1 !== t.args[0]) return;
					e.message = 'Assertion failed: '.concat((0, i.nK)(t.args.slice(1), ' ') || 'console.assert'), e.data.arguments = t.args.slice(1)
				}(0, b.Gd)().addBreadcrumb(e, {
					input: t.args,
					level: t.level
				})
			}

			function je(t) {
				if (t.endTimestamp) {
					if (t.xhr.__sentry_own_request__) return;
					var e = t.xhr.__sentry_xhr__ || {},
						n = e.method,
						r = e.url,
						o = e.status_code,
						i = e.body;
					(0, b.Gd)().addBreadcrumb({
						category: 'xhr',
						data: {
							method: n,
							url: r,
							status_code: o
						},
						type: 'http'
					}, {
						xhr: t.xhr,
						input: i
					})
				} else;
			}

			function ke(t) {
				t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && 'POST' === t.fetchData.method || (t.error ? (0, b.Gd)().addBreadcrumb({
					category: 'fetch',
					data: t.fetchData,
					level: 'error',
					type: 'http'
				}, {
					data: t.error,
					input: t.args
				}) : (0, b.Gd)().addBreadcrumb({
					category: 'fetch',
					data: ge(ge({}, t.fetchData), {}, {
						status_code: t.response.status
					}),
					type: 'http'
				}, {
					input: t.args,
					response: t.response
				})))
			}

			function Pe(t) {
				var e = (0, j.R)(),
					n = t.from,
					r = t.to,
					o = he(e.location.href),
					i = he(n),
					a = he(r);
				i.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), (0, b.Gd)().addBreadcrumb({
					category: 'navigation',
					data: {
						from: n,
						to: r
					}
				})
			}
			Ee.__initStatic();
			var De, xe = (0, j.R)();

			function Te() {
				if (De) return De;
				if (D(xe.fetch)) return De = xe.fetch.bind(xe);
				var t = xe.document,
					e = xe.fetch;
				if (t && 'function' == typeof t.createElement) try {
					var n = t.createElement('iframe');
					n.hidden = !0, t.head.appendChild(n);
					var o = n.contentWindow;
					o && o.fetch && (e = o.fetch), t.head.removeChild(n)
				} catch (t) {
					('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', t)
				}
				return De = e.bind(xe)
			}

			function Re(t) {
				return Re = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				}, Re(t)
			}

			function Ae(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}

			function Ne() {
				return Ne = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
					var r = Ue(t, e);
					if (r) {
						var o = Object.getOwnPropertyDescriptor(r, e);
						return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value
					}
				}, Ne.apply(this, arguments)
			}

			function Ue(t, e) {
				for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Be(t)););
				return t
			}

			function Ie(t, e) {
				return Ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
					return t.__proto__ = e, t
				}, Ie(t, e)
			}

			function Ce(t) {
				var e = function() {
					if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ('function' == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
					} catch (t) {
						return !1
					}
				}();
				return function() {
					var n, r = Be(t);
					if (e) {
						var o = Be(this).constructor;
						n = Reflect.construct(r, arguments, o)
					} else n = r.apply(this, arguments);
					return Ge(this, n)
				}
			}

			function Ge(t, e) {
				if (e && ('object' === Re(e) || 'function' == typeof e)) return e;
				if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
				return function(t) {
					if (void 0 === t) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
					return t
				}(t)
			}

			function Be(t) {
				return Be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
					return t.__proto__ || Object.getPrototypeOf(t)
				}, Be(t)
			}
			var Ye = (0, j.R)(),
				$e = function(t) {
					! function(t, e) {
						if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								writable: !0,
								configurable: !0
							}
						}), Object.defineProperty(t, 'prototype', {
							writable: !1
						}), e && Ie(t, e)
					}(c, t);
					var e, n, i, a = Ce(c);

					function c(t) {
						var e;
						return function(t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
						}(this, c), t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
							name: 'sentry.javascript.browser',
							packages: [{
								name: 'npm:@sentry/browser',
								version: X.J
							}],
							version: X.J
						}, e = a.call(this, t), t.sendClientReports && Ye.document && Ye.document.addEventListener('visibilitychange', (function() {
							'hidden' === Ye.document.visibilityState && e._flushOutcomes()
						})), e
					}
					return e = c, n = [{
						key: 'eventFromException',
						value: function(t, e) {
							return function(t, e, n, r) {
								var i = le(t, e, n && n.syntheticException || void 0, r);
								return (0, o.EG)(i), i.level = 'error', n && n.event_id && (i.event_id = n.event_id), (0, wt.WD)(i)
							}(this._options.stackParser, t, e, this._options.attachStacktrace)
						}
					}, {
						key: 'eventFromMessage',
						value: function(t) {
							var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'info',
								n = arguments.length > 2 ? arguments[2] : void 0;
							return fe(this._options.stackParser, t, e, n, this._options.attachStacktrace)
						}
					}, {
						key: 'sendEvent',
						value: function(t, e) {
							var n = this.getIntegrationById(we);
							n && n.options && n.options.sentry && (0, b.Gd)().addBreadcrumb({
								category: 'sentry.'.concat('transaction' === t.type ? 'transaction' : 'event'),
								event_id: t.event_id,
								level: t.level,
								message: (0, o.jH)(t)
							}, {
								event: t
							}), Ne(Be(c.prototype), 'sendEvent', this).call(this, t, e)
						}
					}, {
						key: '_prepareEvent',
						value: function(t, e, n) {
							return t.platform = t.platform || 'javascript', Ne(Be(c.prototype), '_prepareEvent', this).call(this, t, e, n)
						}
					}, {
						key: '_flushOutcomes',
						value: function() {
							var t = this._clearOutcomes();
							if (0 !== t.length)
								if (this._dsn) {
									('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log('Sending outcomes:', t);
									var e, n, o, i = rt(this._dsn, this._options),
										a = (e = t, Dt((n = this._options.tunnel && gt(this._dsn)) ? {
											dsn: n
										} : {}, [
											[{
												type: 'client_report'
											}, {
												timestamp: o || (0, Ct.yW)(),
												discarded_events: e
											}]
										]));
									try {
										! function(t, e) {
											'[object Navigator]' === Object.prototype.toString.call(xe && xe.navigator) && 'function' == typeof xe.navigator.sendBeacon ? xe.navigator.sendBeacon.bind(xe.navigator)(t, e) : P() && Te()(t, {
												body: e,
												method: 'POST',
												credentials: 'omit',
												keepalive: !0
											}).then(null, (function(t) {
												('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(t)
											}))
										}(i, At(a))
									} catch (t) {
										('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(t)
									}
								} else('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log('No dsn provided, will not send outcomes');
							else('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log('No outcomes to send')
						}
					}], n && Ae(e.prototype, n), i && Ae(e, i), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), c
				}(ee);

			function Me(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return Le(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Le(t, e)
				}(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function Le(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var qe = '?';

			function He(t, e, n, r) {
				var o = {
					filename: t,
					function: e,
					in_app: !0
				};
				return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o
			}
			var Ve = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
				We = /\((\S*)(?::(\d+))(?::(\d+))\)/,
				Fe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
				Je = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
				Ke = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
				ze = [
					[30, function(t) {
						var e = Ve.exec(t);
						if (e) {
							if (e[2] && 0 === e[2].indexOf('eval')) {
								var n = We.exec(e[2]);
								n && (e[2] = n[1], e[3] = n[2], e[4] = n[3])
							}
							var r = Me(Ze(e[1] || qe, e[2]), 2),
								o = r[0];
							return He(r[1], o, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
						}
					}],
					[50, function(t) {
						var e = Fe.exec(t);
						if (e) {
							if (e[3] && e[3].indexOf(' > eval') > -1) {
								var n = Je.exec(e[3]);
								n && (e[1] = e[1] || 'eval', e[3] = n[1], e[4] = n[2], e[5] = '')
							}
							var r = e[3],
								o = e[1] || qe,
								i = Me(Ze(o, r), 2);
							return o = i[0], He(r = i[1], o, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
						}
					}],
					[40, function(t) {
						var e = Ke.exec(t);
						return e ? He(e[2], e[1] || qe, +e[3], e[4] ? +e[4] : void 0) : void 0
					}]
				],
				Xe = k.pE.apply(void 0, ze),
				Ze = function(t, e) {
					var n = -1 !== t.indexOf('safari-extension'),
						r = -1 !== t.indexOf('safari-web-extension');
					return n || r ? [-1 !== t.indexOf('@') ? t.split('@')[0] : qe, n ? 'safari-extension:'.concat(e) : 'safari-web-extension:'.concat(e)] : [t, e]
				},
				Qe = n(17659);

			function tn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function en(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? tn(Object(n), !0).forEach((function(e) {
						nn(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function nn(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}
			var rn = 0;

			function on() {
				return rn > 0
			}

			function an() {
				rn += 1, setTimeout((function() {
					rn -= 1
				}))
			}

			function cn(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = arguments.length > 2 ? arguments[2] : void 0;
				if ('function' != typeof t) return t;
				try {
					var r = t.__sentry_wrapped__;
					if (r) return r;
					if ((0, d.HK)(t)) return t
				} catch (e) {
					return t
				}
				var i = function() {
					var r = Array.prototype.slice.call(arguments);
					try {
						n && 'function' == typeof n && n.apply(this, arguments);
						var i = r.map((function(t) {
							return cn(t, e)
						}));
						return t.apply(this, i)
					} catch (t) {
						throw an(), (0, Qe.$e)((function(n) {
							n.addEventProcessor((function(t) {
								return e.mechanism && ((0, o.Db)(t, void 0, void 0), (0, o.EG)(t, e.mechanism)), t.extra = en(en({}, t.extra), {}, {
									arguments: r
								}), t
							})), (0, Qe.Tb)(t)
						})), t
					}
				};
				try {
					for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a])
				} catch (t) {}(0, d.$Q)(i, t), (0, d.xp)(t, '__sentry_wrapped__', i);
				try {
					var c = Object.getOwnPropertyDescriptor(i, 'name');
					c.configurable && Object.defineProperty(i, 'name', {
						get: function() {
							return t.name
						}
					})
				} catch (t) {}
				return i
			}

			function un(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function sn(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function fn(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var ln = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'],
				pn = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
						}(this, t), t.prototype.__init.call(this), this._options = function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {};
								e % 2 ? un(Object(n), !0).forEach((function(e) {
									sn(t, e, n[e])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : un(Object(n)).forEach((function(e) {
									Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
								}))
							}
							return t
						}({
							XMLHttpRequest: !0,
							eventTarget: !0,
							requestAnimationFrame: !0,
							setInterval: !0,
							setTimeout: !0
						}, e)
					}
					var e, n, r;
					return e = t, n = [{
						key: '__init',
						value: function() {
							this.name = t.id
						}
					}, {
						key: 'setupOnce',
						value: function() {
							var t = (0, j.R)();
							this._options.setTimeout && (0, d.hl)(t, 'setTimeout', yn), this._options.setInterval && (0, d.hl)(t, 'setInterval', yn), this._options.requestAnimationFrame && (0, d.hl)(t, 'requestAnimationFrame', dn), this._options.XMLHttpRequest && 'XMLHttpRequest' in t && (0, d.hl)(XMLHttpRequest.prototype, 'send', vn);
							var e = this._options.eventTarget;
							e && (Array.isArray(e) ? e : ln).forEach(hn)
						}
					}], r = [{
						key: '__initStatic',
						value: function() {
							this.id = 'TryCatch'
						}
					}], n && fn(e.prototype, n), r && fn(e, r), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), t
				}();

			function yn(t) {
				return function() {
					for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
					var o = n[0];
					return n[0] = cn(o, {
						mechanism: {
							data: {
								function: (0, k.$P)(t)
							},
							handled: !0,
							type: 'instrument'
						}
					}), t.apply(this, n)
				}
			}

			function dn(t) {
				return function(e) {
					return t.apply(this, [cn(e, {
						mechanism: {
							data: {
								function: 'requestAnimationFrame',
								handler: (0, k.$P)(t)
							},
							handled: !0,
							type: 'instrument'
						}
					})])
				}
			}

			function vn(t) {
				return function() {
					var e = this,
						n = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
					n.forEach((function(t) {
						t in e && 'function' == typeof e[t] && (0, d.hl)(e, t, (function(e) {
							var n = {
									mechanism: {
										data: {
											function: t,
											handler: (0, k.$P)(e)
										},
										handled: !0,
										type: 'instrument'
									}
								},
								r = (0, d.HK)(e);
							return r && (n.mechanism.data.handler = (0, k.$P)(r)), cn(e, n)
						}))
					}));
					for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
					return t.apply(this, o)
				}
			}

			function hn(t) {
				var e = (0, j.R)(),
					n = e[t] && e[t].prototype;
				n && n.hasOwnProperty && n.hasOwnProperty('addEventListener') && ((0, d.hl)(n, 'addEventListener', (function(e) {
					return function(n, r, o) {
						try {
							'function' == typeof r.handleEvent && (r.handleEvent = cn(r.handleEvent, {
								mechanism: {
									data: {
										function: 'handleEvent',
										handler: (0, k.$P)(r),
										target: t
									},
									handled: !0,
									type: 'instrument'
								}
							}))
						} catch (t) {}
						return e.apply(this, [n, cn(r, {
							mechanism: {
								data: {
									function: 'addEventListener',
									handler: (0, k.$P)(r),
									target: t
								},
								handled: !0,
								type: 'instrument'
							}
						}), o])
					}
				})), (0, d.hl)(n, 'removeEventListener', (function(t) {
					return function(e, n, r) {
						var o = n;
						try {
							var i = o && o.__sentry_wrapped__;
							i && t.call(this, e, i, r)
						} catch (t) {}
						return t.call(this, e, o, r)
					}
				})))
			}

			function _n(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return bn(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bn(t, e)
				}(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function bn(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function gn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function mn(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function On(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			pn.__initStatic();
			var wn = function() {
				function t(e) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), this._options = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {};
							e % 2 ? gn(Object(n), !0).forEach((function(e) {
								mn(t, e, n[e])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gn(Object(n)).forEach((function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
							}))
						}
						return t
					}({
						onerror: !0,
						onunhandledrejection: !0
					}, e)
				}
				var e, n, o;
				return e = t, o = [{
					key: '__initStatic',
					value: function() {
						this.id = 'GlobalHandlers'
					}
				}], (n = [{
					key: '__init',
					value: function() {
						this.name = t.id
					}
				}, {
					key: '__init2',
					value: function() {
						this._installFunc = {
							onerror: En,
							onunhandledrejection: Sn
						}
					}
				}, {
					key: 'setupOnce',
					value: function() {
						Error.stackTraceLimit = 50;
						var t, e = this._options;
						for (var n in e) {
							var o = this._installFunc[n];
							o && e[n] && (t = n, ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log('Global Handler attached: '.concat(t)), o(), this._installFunc[n] = void 0)
						}
					}
				}]) && On(e.prototype, n), o && On(e, o), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();

			function En() {
				$('error', (function(t) {
					var e = _n(Pn(), 3),
						n = e[0],
						r = e[1],
						o = e[2];
					if (n.getIntegration(wn)) {
						var i = t.msg,
							a = t.url,
							c = t.line,
							u = t.column,
							s = t.error;
						if (!(on() || s && s.__sentry_own_request__)) {
							var f = void 0 === s && (0, x.HD)(i) ? function(t, e, n, r) {
								var o = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
									i = (0, x.VW)(t) ? t.message : t,
									a = 'Error',
									c = i.match(o);
								c && (a = c[1], i = c[2]);
								return jn({
									exception: {
										values: [{
											type: a,
											value: i
										}]
									}
								}, e, n, r)
							}(i, a, c, u) : jn(le(r, s || i, void 0, o, !1), a, c, u);
							f.level = 'error', kn(n, s, f, 'onerror')
						}
					}
				}))
			}

			function Sn() {
				$('unhandledrejection', (function(t) {
					var e = _n(Pn(), 3),
						n = e[0],
						r = e[1],
						o = e[2];
					if (n.getIntegration(wn)) {
						var i = t;
						try {
							'reason' in t ? i = t.reason : 'detail' in t && 'reason' in t.detail && (i = t.detail.reason)
						} catch (t) {}
						if (on() || i && i.__sentry_own_request__) return !0;
						var a = (0, x.pt)(i) ? {
							exception: {
								values: [{
									type: 'UnhandledRejection',
									value: 'Non-Error promise rejection captured with value: '.concat(String(i))
								}]
							}
						} : le(r, i, void 0, o, !0);
						a.level = 'error', kn(n, i, a, 'onunhandledrejection')
					}
				}))
			}

			function jn(t, e, n, r) {
				var o = t.exception = t.exception || {},
					i = o.values = o.values || [],
					a = i[0] = i[0] || {},
					c = a.stacktrace = a.stacktrace || {},
					u = c.frames = c.frames || [],
					s = isNaN(parseInt(r, 10)) ? void 0 : r,
					f = isNaN(parseInt(n, 10)) ? void 0 : n,
					l = (0, x.HD)(e) && e.length > 0 ? e : (0, ye.l4)();
				return 0 === u.length && u.push({
					colno: s,
					filename: l,
					function: '?',
					in_app: !0,
					lineno: f
				}), t
			}

			function kn(t, e, n, r) {
				(0, o.EG)(n, {
					handled: !1,
					type: r
				}), t.captureEvent(n, {
					originalException: e
				})
			}

			function Pn() {
				var t = (0, b.Gd)(),
					e = t.getClient(),
					n = e && e.getOptions() || {
						stackParser: function() {
							return []
						},
						attachStacktrace: !1
					};
				return [t, n.stackParser, n.attachStacktrace]
			}

			function Dn(t) {
				return function(t) {
					if (Array.isArray(t)) return xn(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return xn(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xn(t, e)
				}(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function xn(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function Tn(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
			}

			function Rn(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			wn.__initStatic();
			var An = 'cause',
				Nn = function() {
					function t() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						Tn(this, t), t.prototype.__init.call(this), this._key = e.key || An, this._limit = e.limit || 5
					}
					var e, n, r;
					return e = t, r = [{
						key: '__initStatic',
						value: function() {
							this.id = 'LinkedErrors'
						}
					}], (n = [{
						key: '__init',
						value: function() {
							this.name = t.id
						}
					}, {
						key: 'setupOnce',
						value: function() {
							var e = (0, b.Gd)().getClient();
							e && (0, _.c)((function(n, r) {
								var o = (0, b.Gd)().getIntegration(t);
								return o ? function(t, e, n, r, o) {
									if (!(r.exception && r.exception.values && o && (0, x.V9)(o.originalException, Error))) return r;
									var i = Un(t, n, o.originalException, e);
									return r.exception.values = [].concat(Dn(i), Dn(r.exception.values)), r
								}(e.getOptions().stackParser, o._key, o._limit, n, r) : n
							}))
						}
					}]) && Rn(e.prototype, n), r && Rn(e, r), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), t
				}();

			function Un(t, e, n, r) {
				var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
				if (!(0, x.V9)(n[r], Error) || o.length + 1 >= e) return o;
				var i = ie(t, n[r]);
				return Un(t, e, n[r], r, [i].concat(Dn(o)))
			}

			function In(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			Nn.__initStatic();
			var Cn = function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), t.prototype.__init.call(this)
				}
				var e, n, o;
				return e = t, o = [{
					key: '__initStatic',
					value: function() {
						this.id = 'Dedupe'
					}
				}], (n = [{
					key: '__init',
					value: function() {
						this.name = t.id
					}
				}, {
					key: 'setupOnce',
					value: function(e, n) {
						var o = function(e) {
							var o = n().getIntegration(t);
							if (o) {
								try {
									if (function(t, e) {
											return !!e && (!! function(t, e) {
												var n = t.message,
													r = e.message;
												return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!Bn(t, e) && !!Gn(t, e))))
											}(t, e) || !! function(t, e) {
												var n = Yn(e),
													r = Yn(t);
												return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!Bn(t, e) && !!Gn(t, e)))
											}(t, e))
										}(e, o._previousEvent)) return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null
								} catch (t) {
									return o._previousEvent = e
								}
								return o._previousEvent = e
							}
							return e
						};
						o.id = this.name, e(o)
					}
				}]) && In(e.prototype, n), o && In(e, o), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();

			function Gn(t, e) {
				var n = $n(t),
					r = $n(e);
				if (!n && !r) return !0;
				if (n && !r || !n && r) return !1;
				if (r.length !== n.length) return !1;
				for (var o = 0; o < r.length; o++) {
					var i = r[o],
						a = n[o];
					if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
				}
				return !0
			}

			function Bn(t, e) {
				var n = t.fingerprint,
					r = e.fingerprint;
				if (!n && !r) return !0;
				if (n && !r || !n && r) return !1;
				try {
					return !(n.join('') !== r.join(''))
				} catch (t) {
					return !1
				}
			}

			function Yn(t) {
				return t.exception && t.exception.values && t.exception.values[0]
			}

			function $n(t) {
				var e = t.exception;
				if (e) try {
					return e.values[0].stacktrace.frames
				} catch (t) {
					return
				}
			}

			function Mn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Ln(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Mn(Object(n), !0).forEach((function(e) {
						qn(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function qn(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function Hn(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			Cn.__initStatic();
			var Vn = (0, j.R)(),
				Wn = function() {
					function t() {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
						}(this, t), t.prototype.__init.call(this)
					}
					var e, n, r;
					return e = t, r = [{
						key: '__initStatic',
						value: function() {
							this.id = 'HttpContext'
						}
					}], (n = [{
						key: '__init',
						value: function() {
							this.name = t.id
						}
					}, {
						key: 'setupOnce',
						value: function() {
							(0, _.c)((function(e) {
								if ((0, b.Gd)().getIntegration(t)) {
									if (!Vn.navigator && !Vn.location && !Vn.document) return e;
									var n = e.request && e.request.url || Vn.location && Vn.location.href,
										r = (Vn.document || {}).referrer,
										o = (Vn.navigator || {}).userAgent,
										i = Ln(Ln(Ln({}, e.request && e.request.headers), r && {
											Referer: r
										}), o && {
											'User-Agent': o
										}),
										a = Ln(Ln({}, n && {
											url: n
										}), {}, {
											headers: i
										});
									return Ln(Ln({}, e), {}, {
										request: a
									})
								}
								return e
							}))
						}
					}]) && Hn(e.prototype, n), r && Hn(e, r), Object.defineProperty(e, 'prototype', {
						writable: !1
					}), t
				}();

			function Fn(t) {
				var e = [];

				function n(t) {
					return e.splice(e.indexOf(t), 1)[0]
				}
				return {
					$: e,
					add: function(r) {
						if (!(void 0 === t || e.length < t)) return (0, wt.$2)(new vt('Not adding Promise because buffer limit was reached.'));
						var o = r();
						return -1 === e.indexOf(o) && e.push(o), o.then((function() {
							return n(o)
						})).then(null, (function() {
							return n(o).then(null, (function() {}))
						})), o
					},
					drain: function(t) {
						return new wt.cW((function(n, r) {
							var o = e.length;
							if (!o) return n(!0);
							var i = setTimeout((function() {
								t && t > 0 && n(!1)
							}), t);
							e.forEach((function(t) {
								(0, wt.WD)(t).then((function() {
									--o || (clearTimeout(i), n(!0))
								}), r)
							}))
						}))
					}
				}
			}

			function Jn(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || zn(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function Kn(t, e) {
				var n = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
				if (!n) {
					if (Array.isArray(t) || (n = zn(t)) || e && t && 'number' == typeof t.length) {
						n && (t = n);
						var r = 0,
							o = function() {};
						return {
							s: o,
							n: function() {
								return r >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[r++]
								}
							},
							e: function(t) {
								throw t
							},
							f: o
						}
					}
					throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}
				var i, a = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(t)
					},
					n: function() {
						var t = n.next();
						return a = t.done, t
					},
					e: function(t) {
						c = !0, i = t
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function zn(t, e) {
				if (t) {
					if ('string' == typeof t) return Xn(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xn(t, e) : void 0
				}
			}

			function Xn(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function Zn(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function Qn(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? Zn(Object(n), !0).forEach((function(e) {
						tr(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zn(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function tr(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}
			Wn.__initStatic();

			function er(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
					n = parseInt(''.concat(t), 10);
				if (!isNaN(n)) return 1e3 * n;
				var r = Date.parse(''.concat(t));
				return isNaN(r) ? 6e4 : r - e
			}

			function nr(t, e) {
				return t[e] || t.all || 0
			}

			function rr(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
				return nr(t, e) > n
			}

			function or(t, e) {
				var n = e.statusCode,
					r = e.headers,
					o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
					i = Qn({}, t),
					a = r && r['x-sentry-rate-limits'],
					c = r && r['retry-after'];
				if (a) {
					var u, s = Kn(a.trim().split(','));
					try {
						for (s.s(); !(u = s.n()).done;) {
							var f = u.value,
								l = f.split(':', 2),
								p = Jn(l, 2),
								y = p[0],
								d = p[1],
								v = parseInt(y, 10),
								h = 1e3 * (isNaN(v) ? 60 : v);
							if (d) {
								var _, b = Kn(d.split(';'));
								try {
									for (b.s(); !(_ = b.n()).done;) {
										var g = _.value;
										i[g] = o + h
									}
								} catch (t) {
									b.e(t)
								} finally {
									b.f()
								}
							} else i.all = o + h
						}
					} catch (t) {
						s.e(t)
					} finally {
						s.f()
					}
				} else c ? i.all = o + er(c, o) : 429 === n && (i.all = o + 6e4);
				return i
			}

			function ir(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fn(t.bufferSize || 30),
					o = {},
					i = function(t) {
						return n.drain(t)
					};

				function a(i) {
					var a = [];
					if (Tt(i, (function(e, n) {
							var r = It(n);
							rr(o, r) ? t.recordDroppedEvent('ratelimit_backoff', r) : a.push(e)
						})), 0 === a.length) return (0, wt.WD)();
					var c = Dt(i[0], a),
						u = function(e) {
							Tt(c, (function(n, r) {
								t.recordDroppedEvent(e, It(r))
							}))
						};
					return n.add((function() {
						return e({
							body: At(c, t.textEncoder)
						}).then((function(t) {
							void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Sentry responded with status code '.concat(t.statusCode, ' to sent event.')), o = or(o, t)
						}), (function(t) {
							('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Failed while sending event:', t), u('network_error')
						}))
					})).then((function(t) {
						return t
					}), (function(t) {
						if (t instanceof vt) return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error('Skipped sending event because buffer is full.'), u('queue_overflow'), (0, wt.WD)();
						throw t
					}))
				}
				return {
					send: a,
					flush: i
				}
			}

			function ar(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function cr(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? ar(Object(n), !0).forEach((function(e) {
						ur(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function ur(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function sr(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Te();

				function n(n) {
					var r = cr({
						body: n.body,
						method: 'POST',
						referrerPolicy: 'origin',
						headers: t.headers
					}, t.fetchOptions);
					return e(t.url, r).then((function(t) {
						return {
							statusCode: t.status,
							headers: {
								'x-sentry-rate-limits': t.headers.get('X-Sentry-Rate-Limits'),
								'retry-after': t.headers.get('Retry-After')
							}
						}
					}))
				}
				return ir(t, n)
			}

			function fr(t) {
				return ir(t, (function(e) {
					return new wt.cW((function(n, r) {
						var o = new XMLHttpRequest;
						for (var i in o.onerror = r, o.onreadystatechange = function() {
								4 === o.readyState && n({
									statusCode: o.status,
									headers: {
										'x-sentry-rate-limits': o.getResponseHeader('X-Sentry-Rate-Limits'),
										'retry-after': o.getResponseHeader('Retry-After')
									}
								})
							}, o.open('POST', t.url), t.headers) Object.prototype.hasOwnProperty.call(t.headers, i) && o.setRequestHeader(i, t.headers[i]);
						o.send(e.body)
					}))
				}))
			}

			function lr(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function pr(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? lr(Object(n), !0).forEach((function(e) {
						yr(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lr(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function yr(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}
			var dr = [new l, new h, new pn, new Ee, new wn, new Nn, new Cn, new Wn];

			function vr() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if (void 0 === t.defaultIntegrations && (t.defaultIntegrations = dr), void 0 === t.release) {
					var e = (0, j.R)();
					e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
				}
				void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
				var n = pr(pr({}, t), {}, {
					stackParser: (0, k.Sq)(t.stackParser || Xe),
					integrations: E(t),
					transport: t.transport || (P() ? sr : fr)
				});
				S($e, n), t.autoSessionTracking && _r()
			}

			function hr(t) {
				t.startSession({
					ignoreDuration: !0
				}), t.captureSession()
			}

			function _r() {
				if (void 0 !== (0, j.R)().document) {
					var t = (0, b.Gd)();
					t.captureSession && (hr(t), $('history', (function(t) {
						var e = t.from,
							n = t.to;
						void 0 !== e && e !== n && hr((0, b.Gd)())
					})))
				} else('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Session tracking in non-browser environment with @sentry/browser is not supported.')
			}
		},
		59868: function(t, e, n) {
			'use strict';
			n.d(e, {
				'J': function() {
					return r
				}
			});
			var r = '7.12.1'
		},
		17659: function(t, e, n) {
			'use strict';
			n.d(e, {
				'$e': function() {
					return a
				},
				'Tb': function() {
					return o
				},
				'e': function() {
					return i
				}
			});
			var r = n(53683);

			function o(t, e) {
				return (0, r.Gd)().captureException(t, {
					captureContext: e
				})
			}

			function i(t) {
				(0, r.Gd)().configureScope(t)
			}

			function a(t) {
				(0, r.Gd)().withScope(t)
			}
		},
		53683: function(t, e, n) {
			'use strict';
			n.d(e, {
				'Gd': function() {
					return b
				}
			});
			var r = n(88084),
				o = n(29395),
				i = n(74996),
				a = n(94647),
				c = n(50082),
				u = n(65185),
				s = n(26428);

			function f(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function l(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? f(Object(n), !0).forEach((function(e) {
						p(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function p(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function y(t, e) {
				if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
			}

			function d(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var v = function() {
				function t(e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new u.s,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4;
					y(this, t), this._version = r, t.prototype.__init.call(this), this.getStackTop().scope = n, e && this.bindClient(e)
				}
				var e, n, c;
				return e = t, n = [{
					key: '__init',
					value: function() {
						this._stack = [{}]
					}
				}, {
					key: 'isOlderThan',
					value: function(t) {
						return this._version < t
					}
				}, {
					key: 'bindClient',
					value: function(t) {
						this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
					}
				}, {
					key: 'pushScope',
					value: function() {
						var t = u.s.clone(this.getScope());
						return this.getStack().push({
							client: this.getClient(),
							scope: t
						}), t
					}
				}, {
					key: 'popScope',
					value: function() {
						return !(this.getStack().length <= 1 || !this.getStack().pop())
					}
				}, {
					key: 'withScope',
					value: function(t) {
						var e = this.pushScope();
						try {
							t(e)
						} finally {
							this.popScope()
						}
					}
				}, {
					key: 'getClient',
					value: function() {
						return this.getStackTop().client
					}
				}, {
					key: 'getScope',
					value: function() {
						return this.getStackTop().scope
					}
				}, {
					key: 'getStack',
					value: function() {
						return this._stack
					}
				}, {
					key: 'getStackTop',
					value: function() {
						return this._stack[this._stack.length - 1]
					}
				}, {
					key: 'captureException',
					value: function(t, e) {
						var n = this._lastEventId = e && e.event_id ? e.event_id : (0, r.DM)(),
							o = new Error('Sentry syntheticException');
						return this._withClient((function(r, i) {
							r.captureException(t, l(l({
								originalException: t,
								syntheticException: o
							}, e), {}, {
								event_id: n
							}), i)
						})), n
					}
				}, {
					key: 'captureMessage',
					value: function(t, e, n) {
						var o = this._lastEventId = n && n.event_id ? n.event_id : (0, r.DM)(),
							i = new Error(t);
						return this._withClient((function(r, a) {
							r.captureMessage(t, e, l(l({
								originalException: t,
								syntheticException: i
							}, n), {}, {
								event_id: o
							}), a)
						})), o
					}
				}, {
					key: 'captureEvent',
					value: function(t, e) {
						var n = e && e.event_id ? e.event_id : (0, r.DM)();
						return 'transaction' !== t.type && (this._lastEventId = n), this._withClient((function(r, o) {
							r.captureEvent(t, l(l({}, e), {}, {
								event_id: n
							}), o)
						})), n
					}
				}, {
					key: 'lastEventId',
					value: function() {
						return this._lastEventId
					}
				}, {
					key: 'addBreadcrumb',
					value: function(t, e) {
						var n = this.getStackTop(),
							r = n.scope,
							a = n.client;
						if (r && a) {
							var c = a.getOptions && a.getOptions() || {},
								u = c.beforeBreadcrumb,
								s = void 0 === u ? null : u,
								f = c.maxBreadcrumbs,
								p = void 0 === f ? 100 : f;
							if (!(p <= 0)) {
								var y = l({
										timestamp: (0, o.yW)()
									}, t),
									d = s ? (0, i.Cf)((function() {
										return s(y, e)
									})) : y;
								null !== d && r.addBreadcrumb(d, p)
							}
						}
					}
				}, {
					key: 'setUser',
					value: function(t) {
						var e = this.getScope();
						e && e.setUser(t)
					}
				}, {
					key: 'setTags',
					value: function(t) {
						var e = this.getScope();
						e && e.setTags(t)
					}
				}, {
					key: 'setExtras',
					value: function(t) {
						var e = this.getScope();
						e && e.setExtras(t)
					}
				}, {
					key: 'setTag',
					value: function(t, e) {
						var n = this.getScope();
						n && n.setTag(t, e)
					}
				}, {
					key: 'setExtra',
					value: function(t, e) {
						var n = this.getScope();
						n && n.setExtra(t, e)
					}
				}, {
					key: 'setContext',
					value: function(t, e) {
						var n = this.getScope();
						n && n.setContext(t, e)
					}
				}, {
					key: 'configureScope',
					value: function(t) {
						var e = this.getStackTop(),
							n = e.scope,
							r = e.client;
						n && r && t(n)
					}
				}, {
					key: 'run',
					value: function(t) {
						var e = _(this);
						try {
							t(this)
						} finally {
							_(e)
						}
					}
				}, {
					key: 'getIntegration',
					value: function(t) {
						var e = this.getClient();
						if (!e) return null;
						try {
							return e.getIntegration(t)
						} catch (e) {
							return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn('Cannot retrieve integration '.concat(t.id, ' from the current Hub')), null
						}
					}
				}, {
					key: 'startTransaction',
					value: function(t, e) {
						return this._callExtensionMethod('startTransaction', t, e)
					}
				}, {
					key: 'traceHeaders',
					value: function() {
						return this._callExtensionMethod('traceHeaders')
					}
				}, {
					key: 'captureSession',
					value: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (t) return this.endSession();
						this._sendSessionUpdate()
					}
				}, {
					key: 'endSession',
					value: function() {
						var t = this.getStackTop(),
							e = t && t.scope,
							n = e && e.getSession();
						n && (0, s.RJ)(n), this._sendSessionUpdate(), e && e.setSession()
					}
				}, {
					key: 'startSession',
					value: function(t) {
						var e = this.getStackTop(),
							n = e.scope,
							r = e.client,
							o = r && r.getOptions() || {},
							i = o.release,
							c = o.environment,
							u = ((0, a.R)().navigator || {}).userAgent,
							f = (0, s.Hv)(l(l(l({
								release: i,
								environment: c
							}, n && {
								user: n.getUser()
							}), u && {
								userAgent: u
							}), t));
						if (n) {
							var p = n.getSession && n.getSession();
							p && 'ok' === p.status && (0, s.CT)(p, {
								status: 'exited'
							}), this.endSession(), n.setSession(f)
						}
						return f
					}
				}, {
					key: 'shouldSendDefaultPii',
					value: function() {
						var t = this.getClient(),
							e = t && t.getOptions();
						return Boolean(e && e.sendDefaultPii)
					}
				}, {
					key: '_sendSessionUpdate',
					value: function() {
						var t = this.getStackTop(),
							e = t.scope,
							n = t.client;
						if (e) {
							var r = e.getSession();
							r && n && n.captureSession && n.captureSession(r)
						}
					}
				}, {
					key: '_withClient',
					value: function(t) {
						var e = this.getStackTop(),
							n = e.scope,
							r = e.client;
						r && t(r, n)
					}
				}, {
					key: '_callExtensionMethod',
					value: function(t) {
						var e = h(),
							n = e.__SENTRY__;
						if (n && n.extensions && 'function' == typeof n.extensions[t]) {
							for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
							return n.extensions[t].apply(this, o)
						}('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn('Extension method '.concat(t, ' couldn\'t be found, doing nothing.'))
					}
				}], n && d(e.prototype, n), c && d(e, c), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();

			function h() {
				var t = (0, a.R)();
				return t.__SENTRY__ = t.__SENTRY__ || {
					extensions: {},
					hub: void 0
				}, t
			}

			function _(t) {
				var e = h(),
					n = m(e);
				return O(e, t), n
			}

			function b() {
				var t = h();
				return g(t) && !m(t).isOlderThan(4) || O(t, new v), (0, c.KV)() ? function(t) {
					try {
						var e = h().__SENTRY__,
							n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
						if (!n) return m(t);
						if (!g(n) || m(n).isOlderThan(4)) {
							var r = m(t).getStackTop();
							O(n, new v(r.client, u.s.clone(r.scope)))
						}
						return m(n)
					} catch (e) {
						return m(t)
					}
				}(t) : m(t)
			}

			function g(t) {
				return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
			}

			function m(t) {
				return (0, a.Y)('hub', (function() {
					return new v
				}), t)
			}

			function O(t, e) {
				return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
			}
		},
		65185: function(t, e, n) {
			'use strict';
			n.d(e, {
				'c': function() {
					return b
				},
				's': function() {
					return h
				}
			});
			var r = n(44459),
				o = n(29395),
				i = n(11367),
				a = n(74996),
				c = n(88084),
				u = n(94647),
				s = n(26428);

			function f(t) {
				return function(t) {
					if (Array.isArray(t)) return l(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return l(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
				}(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function l(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function p(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function y(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? p(Object(n), !0).forEach((function(e) {
						d(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function d(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function v(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var h = function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
				}
				var e, n, u;
				return e = t, n = [{
					key: 'addScopeListener',
					value: function(t) {
						this._scopeListeners.push(t)
					}
				}, {
					key: 'addEventProcessor',
					value: function(t) {
						return this._eventProcessors.push(t), this
					}
				}, {
					key: 'setUser',
					value: function(t) {
						return this._user = t || {}, this._session && (0, s.CT)(this._session, {
							user: t
						}), this._notifyScopeListeners(), this
					}
				}, {
					key: 'getUser',
					value: function() {
						return this._user
					}
				}, {
					key: 'getRequestSession',
					value: function() {
						return this._requestSession
					}
				}, {
					key: 'setRequestSession',
					value: function(t) {
						return this._requestSession = t, this
					}
				}, {
					key: 'setTags',
					value: function(t) {
						return this._tags = y(y({}, this._tags), t), this._notifyScopeListeners(), this
					}
				}, {
					key: 'setTag',
					value: function(t, e) {
						return this._tags = y(y({}, this._tags), {}, d({}, t, e)), this._notifyScopeListeners(), this
					}
				}, {
					key: 'setExtras',
					value: function(t) {
						return this._extra = y(y({}, this._extra), t), this._notifyScopeListeners(), this
					}
				}, {
					key: 'setExtra',
					value: function(t, e) {
						return this._extra = y(y({}, this._extra), {}, d({}, t, e)), this._notifyScopeListeners(), this
					}
				}, {
					key: 'setFingerprint',
					value: function(t) {
						return this._fingerprint = t, this._notifyScopeListeners(), this
					}
				}, {
					key: 'setLevel',
					value: function(t) {
						return this._level = t, this._notifyScopeListeners(), this
					}
				}, {
					key: 'setTransactionName',
					value: function(t) {
						return this._transactionName = t, this._notifyScopeListeners(), this
					}
				}, {
					key: 'setContext',
					value: function(t, e) {
						return null === e ? delete this._contexts[t] : this._contexts = y(y({}, this._contexts), {}, d({}, t, e)), this._notifyScopeListeners(), this
					}
				}, {
					key: 'setSpan',
					value: function(t) {
						return this._span = t, this._notifyScopeListeners(), this
					}
				}, {
					key: 'getSpan',
					value: function() {
						return this._span
					}
				}, {
					key: 'getTransaction',
					value: function() {
						var t = this.getSpan();
						return t && t.transaction
					}
				}, {
					key: 'setSession',
					value: function(t) {
						return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
					}
				}, {
					key: 'getSession',
					value: function() {
						return this._session
					}
				}, {
					key: 'update',
					value: function(e) {
						if (!e) return this;
						if ('function' == typeof e) {
							var n = e(this);
							return n instanceof t ? n : this
						}
						return e instanceof t ? (this._tags = y(y({}, this._tags), e._tags), this._extra = y(y({}, this._extra), e._extra), this._contexts = y(y({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession)) : (0, r.PO)(e) && (this._tags = y(y({}, this._tags), e.tags), this._extra = y(y({}, this._extra), e.extra), this._contexts = y(y({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession)), this
					}
				}, {
					key: 'clear',
					value: function() {
						return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this
					}
				}, {
					key: 'addBreadcrumb',
					value: function(t, e) {
						var n = 'number' == typeof e ? Math.min(e, 100) : 100;
						if (n <= 0) return this;
						var r = y({
							timestamp: (0, o.yW)()
						}, t);
						return this._breadcrumbs = [].concat(f(this._breadcrumbs), [r]).slice(-n), this._notifyScopeListeners(), this
					}
				}, {
					key: 'clearBreadcrumbs',
					value: function() {
						return this._breadcrumbs = [], this._notifyScopeListeners(), this
					}
				}, {
					key: 'addAttachment',
					value: function(t) {
						return this._attachments.push(t), this
					}
				}, {
					key: 'getAttachments',
					value: function() {
						return this._attachments
					}
				}, {
					key: 'clearAttachments',
					value: function() {
						return this._attachments = [], this
					}
				}, {
					key: 'applyToEvent',
					value: function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						if (this._extra && Object.keys(this._extra).length && (t.extra = y(y({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = y(y({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = y(y({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = y(y({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
							t.contexts = y({
								trace: this._span.getTraceContext()
							}, t.contexts);
							var n = this._span.transaction && this._span.transaction.name;
							n && (t.tags = y({
								transaction: n
							}, t.tags))
						}
						return this._applyFingerprint(t), t.breadcrumbs = [].concat(f(t.breadcrumbs || []), f(this._breadcrumbs)), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = y(y({}, t.sdkProcessingMetadata), this._sdkProcessingMetadata), this._notifyEventProcessors([].concat(f(_()), f(this._eventProcessors)), t, e)
					}
				}, {
					key: 'setSDKProcessingMetadata',
					value: function(t) {
						return this._sdkProcessingMetadata = y(y({}, this._sdkProcessingMetadata), t), this
					}
				}, {
					key: '_notifyEventProcessors',
					value: function(t, e, n) {
						var o = this,
							c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
						return new i.cW((function(i, u) {
							var s = t[c];
							if (null === e || 'function' != typeof s) i(e);
							else {
								var f = s(y({}, e), n);
								('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.id && null === f && a.kg.log('Event processor "'.concat(s.id, '" dropped event')), (0, r.J8)(f) ? f.then((function(e) {
									return o._notifyEventProcessors(t, e, n, c + 1).then(i)
								})).then(null, u) : o._notifyEventProcessors(t, f, n, c + 1).then(i).then(null, u)
							}
						}))
					}
				}, {
					key: '_notifyScopeListeners',
					value: function() {
						var t = this;
						this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
							e(t)
						})), this._notifyingListeners = !1)
					}
				}, {
					key: '_applyFingerprint',
					value: function(t) {
						t.fingerprint = t.fingerprint ? (0, c.lE)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
					}
				}], u = [{
					key: 'clone',
					value: function(e) {
						var n = new t;
						return e && (n._breadcrumbs = f(e._breadcrumbs), n._tags = y({}, e._tags), n._extra = y({}, e._extra), n._contexts = y({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = f(e._eventProcessors), n._requestSession = e._requestSession, n._attachments = f(e._attachments)), n
					}
				}], n && v(e.prototype, n), u && v(e, u), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();

			function _() {
				return (0, u.Y)('globalEventProcessors', (function() {
					return []
				}))
			}

			function b(t) {
				_().push(t)
			}
		},
		26428: function(t, e, n) {
			'use strict';
			n.d(e, {
				'CT': function() {
					return c
				},
				'Hv': function() {
					return a
				},
				'RJ': function() {
					return u
				}
			});
			var r = n(29395),
				o = n(88084),
				i = n(38912);

			function a(t) {
				var e = (0, r.ph)(),
					n = {
						sid: (0, o.DM)(),
						init: !0,
						timestamp: e,
						started: e,
						duration: 0,
						status: 'ok',
						errors: 0,
						ignoreDuration: !1,
						toJSON: function() {
							return function(t) {
								return (0, i.Jr)({
									sid: ''.concat(t.sid),
									init: t.init,
									started: new Date(1e3 * t.started).toISOString(),
									timestamp: new Date(1e3 * t.timestamp).toISOString(),
									status: t.status,
									errors: t.errors,
									did: 'number' == typeof t.did || 'string' == typeof t.did ? ''.concat(t.did) : void 0,
									duration: t.duration,
									attrs: {
										release: t.release,
										environment: t.environment,
										ip_address: t.ipAddress,
										user_agent: t.userAgent
									}
								})
							}(n)
						}
					};
				return t && c(n, t), n
			}

			function c(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.ph)(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, o.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = ''.concat(e.did)), 'number' == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
				else if ('number' == typeof e.duration) t.duration = e.duration;
				else {
					var n = t.timestamp - t.started;
					t.duration = n >= 0 ? n : 0
				}
				e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), 'number' == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
			}

			function u(t, e) {
				var n = {};
				e ? n = {
					status: e
				} : 'ok' === t.status && (n = {
					status: 'exited'
				}), c(t, n)
			}
		},
		62530: function(t, e, n) {
			'use strict';
			n.d(e, {
				'I': function() {
					return i
				}
			});
			var r = n(74996);

			function o(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var i = function() {
				function t() {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), t.prototype.__init.call(this)
				}
				var e, n, i;
				return e = t, i = [{
					key: '__initStatic',
					value: function() {
						this.id = 'Dedupe'
					}
				}], (n = [{
					key: '__init',
					value: function() {
						this.name = t.id
					}
				}, {
					key: 'setupOnce',
					value: function(e, n) {
						var o = function(e) {
							var o = n().getIntegration(t);
							if (o) {
								try {
									if (function(t, e) {
											return !!e && (!! function(t, e) {
												var n = t.message,
													r = e.message;
												return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!c(t, e) && !!a(t, e))))
											}(t, e) || !! function(t, e) {
												var n = u(e),
													r = u(t);
												return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!c(t, e) && !!a(t, e)))
											}(t, e))
										}(e, o._previousEvent)) return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn('Event dropped due to being a duplicate of previously captured event.'), null
								} catch (t) {
									return o._previousEvent = e
								}
								return o._previousEvent = e
							}
							return e
						};
						o.id = this.name, e(o)
					}
				}]) && o(e.prototype, n), i && o(e, i), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();

			function a(t, e) {
				var n = s(t),
					r = s(e);
				if (!n && !r) return !0;
				if (n && !r || !n && r) return !1;
				if (r.length !== n.length) return !1;
				for (var o = 0; o < r.length; o++) {
					var i = r[o],
						a = n[o];
					if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
				}
				return !0
			}

			function c(t, e) {
				var n = t.fingerprint,
					r = e.fingerprint;
				if (!n && !r) return !0;
				if (n && !r || !n && r) return !1;
				try {
					return !(n.join('') !== r.join(''))
				} catch (t) {
					return !1
				}
			}

			function u(t) {
				return t.exception && t.exception.values && t.exception.values[0]
			}

			function s(t) {
				var e = t.exception;
				if (e) try {
					return e.values[0].stacktrace.frames
				} catch (t) {
					return
				}
			}
			i.__initStatic()
		},
		43041: function(t, e, n) {
			'use strict';
			n.d(e, {
				'S': function() {
					return l
				}
			});
			var r = n(44459),
				o = n(62239),
				i = n(38912),
				a = n(74996);

			function c(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function u(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? c(Object(n), !0).forEach((function(e) {
						s(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function s(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function f(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}
			var l = function() {
				function t(e) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), t.prototype.__init.call(this), this._options = u({
						depth: 3
					}, e)
				}
				var e, n, c;
				return e = t, n = [{
					key: '__init',
					value: function() {
						this.name = t.id
					}
				}, {
					key: 'setupOnce',
					value: function(e, n) {
						e((function(e, r) {
							var o = n().getIntegration(t);
							return o ? o.enhanceEventWithErrorData(e, r) : e
						}))
					}
				}, {
					key: 'enhanceEventWithErrorData',
					value: function(t) {
						var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						if (!e.originalException || !(0, r.VZ)(e.originalException)) return t;
						var n = e.originalException.name || e.originalException.constructor.name,
							a = this._extractErrorData(e.originalException);
						if (a) {
							var c = u({}, t.contexts),
								s = (0, o.Fv)(a, this._options.depth);
							return (0, r.PO)(s) && ((0, i.xp)(s, '__sentry_skip_normalization__', !0), c[n] = s), u(u({}, t), {}, {
								contexts: c
							})
						}
						return t
					}
				}, {
					key: '_extractErrorData',
					value: function(t) {
						try {
							for (var e = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'], n = {}, o = 0, i = Object.keys(t); o < i.length; o++) {
								var c = i[o];
								if (-1 === e.indexOf(c)) {
									var u = t[c];
									n[c] = (0, r.VZ)(u) ? u.toString() : u
								}
							}
							if ('function' == typeof t.toJSON)
								for (var s = t.toJSON(), f = 0, l = Object.keys(s); f < l.length; f++) u = s[c = l[f]], n[c] = (0, r.VZ)(u) ? u.toString() : u;
							return n
						} catch (t) {
							('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.error('Unable to extract extra data from the Error object:', t)
						}
						return null
					}
				}], c = [{
					key: '__initStatic',
					value: function() {
						this.id = 'ExtraErrorData'
					}
				}], n && f(e.prototype, n), c && f(e, c), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}();
			l.__initStatic()
		},
		95602: function(t, e, n) {
			'use strict';
			n.d(e, {
				'Rt': function() {
					return i
				},
				'l4': function() {
					return c
				}
			});
			var r = n(94647),
				o = n(44459);

			function i(t, e) {
				try {
					for (var n, r = t, o = [], i = 0, c = 0, u = ' > '.length; r && i++ < 5 && !('html' === (n = a(r, e)) || i > 1 && c + o.length * u + n.length >= 80);) o.push(n), c += n.length, r = r.parentNode;
					return o.reverse().join(' > ')
				} catch (t) {
					return '<unknown>'
				}
			}

			function a(t, e) {
				var n, r, i, a, c, u = t,
					s = [];
				if (!u || !u.tagName) return '';
				s.push(u.tagName.toLowerCase());
				var f = e && e.length ? e.filter((function(t) {
					return u.getAttribute(t)
				})).map((function(t) {
					return [t, u.getAttribute(t)]
				})) : null;
				if (f && f.length) f.forEach((function(t) {
					s.push('['.concat(t[0], '="').concat(t[1], '"]'))
				}));
				else if (u.id && s.push('#'.concat(u.id)), (n = u.className) && (0, o.HD)(n))
					for (r = n.split(/\s+/), c = 0; c < r.length; c++) s.push('.'.concat(r[c]));
				var l = ['type', 'name', 'title', 'alt'];
				for (c = 0; c < l.length; c++) i = l[c], (a = u.getAttribute(i)) && s.push('['.concat(i, '="').concat(a, '"]'));
				return s.join('')
			}

			function c() {
				var t = (0, r.R)();
				try {
					return t.document.location.href
				} catch (t) {
					return ''
				}
			}
		},
		94647: function(t, e, n) {
			'use strict';
			n.d(e, {
				'R': function() {
					return i
				},
				'Y': function() {
					return a
				}
			});
			var r = n(50082),
				o = {};

			function i() {
				return (0, r.KV)() || 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : o
			}

			function a(t, e, n) {
				var r = n || i(),
					o = r.__SENTRY__ = r.__SENTRY__ || {};
				return o[t] || (o[t] = e())
			}
		},
		44459: function(t, e, n) {
			'use strict';

			function r(t) {
				return r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				}, r(t)
			}
			n.d(e, {
				'Cy': function() {
					return _
				},
				'HD': function() {
					return f
				},
				'J8': function() {
					return h
				},
				'Kj': function() {
					return v
				},
				'PO': function() {
					return p
				},
				'TX': function() {
					return u
				},
				'V9': function() {
					return g
				},
				'VW': function() {
					return c
				},
				'VZ': function() {
					return i
				},
				'cO': function() {
					return y
				},
				'fm': function() {
					return s
				},
				'i2': function() {
					return b
				},
				'kK': function() {
					return d
				},
				'pt': function() {
					return l
				}
			});
			var o = Object.prototype.toString;

			function i(t) {
				switch (o.call(t)) {
					case '[object Error]':
					case '[object Exception]':
					case '[object DOMException]':
						return !0;
					default:
						return g(t, Error)
				}
			}

			function a(t, e) {
				return o.call(t) === '[object '.concat(e, ']')
			}

			function c(t) {
				return a(t, 'ErrorEvent')
			}

			function u(t) {
				return a(t, 'DOMError')
			}

			function s(t) {
				return a(t, 'DOMException')
			}

			function f(t) {
				return a(t, 'String')
			}

			function l(t) {
				return null === t || 'object' !== r(t) && 'function' != typeof t
			}

			function p(t) {
				return a(t, 'Object')
			}

			function y(t) {
				return 'undefined' != typeof Event && g(t, Event)
			}

			function d(t) {
				return 'undefined' != typeof Element && g(t, Element)
			}

			function v(t) {
				return a(t, 'RegExp')
			}

			function h(t) {
				return Boolean(t && t.then && 'function' == typeof t.then)
			}

			function _(t) {
				return p(t) && 'nativeEvent' in t && 'preventDefault' in t && 'stopPropagation' in t
			}

			function b(t) {
				return 'number' == typeof t && t != t
			}

			function g(t, e) {
				try {
					return t instanceof e
				} catch (t) {
					return !1
				}
			}
		},
		74996: function(t, e, n) {
			'use strict';
			n.d(e, {
				'Cf': function() {
					return u
				},
				'RU': function() {
					return c
				},
				'kg': function() {
					return r
				}
			});
			var r, o = n(94647),
				i = (0, o.R)(),
				a = 'Sentry Logger ',
				c = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];

			function u(t) {
				var e = (0, o.R)();
				if (!('console' in e)) return t();
				var n = e.console,
					r = {};
				c.forEach((function(t) {
					var o = n[t] && n[t].__sentry_original__;
					t in e.console && o && (r[t] = n[t], n[t] = o)
				}));
				try {
					return t()
				} finally {
					Object.keys(r).forEach((function(t) {
						n[t] = r[t]
					}))
				}
			}

			function s() {
				var t = !1,
					e = {
						enable: function() {
							t = !0
						},
						disable: function() {
							t = !1
						}
					};
				return 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? c.forEach((function(n) {
					e[n] = function() {
						for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
						t && u((function() {
							var t;
							(t = i.console)[n].apply(t, [''.concat(a, '[').concat(n, ']:')].concat(r))
						}))
					}
				})) : c.forEach((function(t) {
					e[t] = function() {}
				})), e
			}
			r = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0, o.Y)('logger', s) : s()
		},
		88084: function(t, e, n) {
			'use strict';
			n.d(e, {
				'DM': function() {
					return u
				},
				'Db': function() {
					return l
				},
				'EG': function() {
					return p
				},
				'YO': function() {
					return y
				},
				'jH': function() {
					return f
				},
				'lE': function() {
					return d
				}
			});
			var r = n(94647),
				o = n(38912);

			function i(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function a(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? i(Object(n), !0).forEach((function(e) {
						c(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function c(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function u() {
				var t = (0, r.R)(),
					e = t.crypto || t.msCrypto;
				if (e && e.randomUUID) return e.randomUUID().replace(/-/g, '');
				var n = e && e.getRandomValues ? function() {
					return e.getRandomValues(new Uint8Array(1))[0]
				} : function() {
					return 16 * Math.random()
				};
				return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (function(t) {
					return (t ^ (15 & n()) >> t / 4).toString(16)
				}))
			}

			function s(t) {
				return t.exception && t.exception.values ? t.exception.values[0] : void 0
			}

			function f(t) {
				var e = t.message,
					n = t.event_id;
				if (e) return e;
				var r = s(t);
				return r ? r.type && r.value ? ''.concat(r.type, ': ').concat(r.value) : r.type || r.value || n || '<unknown>' : n || '<unknown>'
			}

			function l(t, e, n) {
				var r = t.exception = t.exception || {},
					o = r.values = r.values || [],
					i = o[0] = o[0] || {};
				i.value || (i.value = e || ''), i.type || (i.type = n || 'Error')
			}

			function p(t, e) {
				var n = s(t);
				if (n) {
					var r = n.mechanism;
					if (n.mechanism = a(a(a({}, {
							type: 'generic',
							handled: !0
						}), r), e), e && 'data' in e) {
						var o = a(a({}, r && r.data), e.data);
						n.mechanism.data = o
					}
				}
			}

			function y(t) {
				if (t && t.__sentry_captured__) return !0;
				try {
					(0, o.xp)(t, '__sentry_captured__', !0)
				} catch (t) {}
				return !1
			}

			function d(t) {
				return Array.isArray(t) ? t : [t]
			}
		},
		50082: function(t, e, n) {
			'use strict';

			function r() {
				return !('undefined' != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && '[object process]' === Object.prototype.toString.call('undefined' != typeof process ? process : 0)
			}

			function o(t, e) {
				return t.require(e)
			}
			n.d(e, {
				'l$': function() {
					return o
				},
				'KV': function() {
					return r
				}
			}), t = n.hmd(t)
		},
		62239: function(t, e, n) {
			'use strict';
			n.d(e, {
				'Fv': function() {
					return f
				},
				'Qy': function() {
					return l
				}
			});
			var r = n(44459);

			function o() {
				var t = 'function' == typeof WeakSet,
					e = t ? new WeakSet : [];
				return [function(n) {
					if (t) return !!e.has(n) || (e.add(n), !1);
					for (var r = 0; r < e.length; r++) {
						if (e[r] === n) return !0
					}
					return e.push(n), !1
				}, function(n) {
					if (t) e.delete(n);
					else
						for (var r = 0; r < e.length; r++)
							if (e[r] === n) {
								e.splice(r, 1);
								break
							}
				}]
			}
			var i = n(38912),
				a = n(77761);

			function c(t) {
				return c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				}, c(t)
			}

			function u(t, e) {
				return function(t) {
					if (Array.isArray(t)) return t
				}(t) || function(t, e) {
					var n = null == t ? null : 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
					if (null == n) return;
					var r, o, i = [],
						a = !0,
						c = !1;
					try {
						for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
					} catch (t) {
						c = !0, o = t
					} finally {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw o
						}
					}
					return i
				}(t, e) || function(t, e) {
					if (!t) return;
					if ('string' == typeof t) return s(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					'Object' === n && t.constructor && (n = t.constructor.name);
					if ('Map' === n || 'Set' === n) return Array.from(t);
					if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
				}(t, e) || function() {
					throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function s(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}

			function f(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
				try {
					return p('', t, e, n)
				} catch (t) {
					return {
						ERROR: '**non-serializable** ('.concat(t, ')')
					}
				}
			}

			function l(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
					r = f(t, e);
				return d(r) > n ? l(t, e - 1, n) : r
			}

			function p(t, e) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
					a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
					s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o(),
					f = u(s, 2),
					l = f[0],
					d = f[1];
				if (null === e || ['number', 'boolean', 'string'].includes(c(e)) && !(0, r.i2)(e)) return e;
				var v = y(t, e);
				if (!v.startsWith('[object ')) return v;
				if (e.__sentry_skip_normalization__) return e;
				if (0 === n) return v.replace('object ', '');
				if (l(e)) return '[Circular ~]';
				var h = e;
				if (h && 'function' == typeof h.toJSON) try {
					var _ = h.toJSON();
					return p('', _, n - 1, a, s)
				} catch (t) {}
				var b = Array.isArray(e) ? [] : {},
					g = 0,
					m = (0, i.Sh)(e);
				for (var O in m)
					if (Object.prototype.hasOwnProperty.call(m, O)) {
						if (g >= a) {
							b[O] = '[MaxProperties ~]';
							break
						}
						var w = m[O];
						b[O] = p(O, w, n - 1, a, s), g += 1
					}
				return d(e), b
			}

			function y(t, e) {
				try {
					return 'domain' === t && e && 'object' === c(e) && e._events ? '[Domain]' : 'domainEmitter' === t ? '[DomainEmitter]' : 'undefined' != typeof window && e === window ? '[Global]' : 'undefined' != typeof window && e === window ? '[Window]' : 'undefined' != typeof document && e === document ? '[Document]' : (0, r.Cy)(e) ? '[SyntheticEvent]' : 'number' == typeof e && e != e ? '[NaN]' : void 0 === e ? '[undefined]' : 'function' == typeof e ? '[Function: '.concat((0, a.$P)(e), ']') : 'symbol' === c(e) ? '['.concat(String(e), ']') : 'bigint' == typeof e ? '[BigInt: '.concat(String(e), ']') : '[object '.concat(Object.getPrototypeOf(e).constructor.name, ']')
				} catch (t) {
					return '**non-serializable** ('.concat(t, ')')
				}
			}

			function d(t) {
				return function(t) {
					return ~-encodeURI(t).split(/%..|./).length
				}(JSON.stringify(t))
			}
		},
		38912: function(t, e, n) {
			'use strict';
			n.d(e, {
				'$Q': function() {
					return p
				},
				'HK': function() {
					return y
				},
				'Jr': function() {
					return g
				},
				'Sh': function() {
					return v
				},
				'_j': function() {
					return d
				},
				'hl': function() {
					return f
				},
				'xp': function() {
					return l
				},
				'zf': function() {
					return b
				}
			});
			var r = n(95602),
				o = n(44459),
				i = n(14450);

			function a(t) {
				return a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
				}, a(t)
			}

			function c(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function u(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? c(Object(n), !0).forEach((function(e) {
						s(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function s(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function f(t, e, n) {
				if (e in t) {
					var r = t[e],
						o = n(r);
					if ('function' == typeof o) try {
						p(o, r)
					} catch (t) {}
					t[e] = o
				}
			}

			function l(t, e, n) {
				Object.defineProperty(t, e, {
					value: n,
					writable: !0,
					configurable: !0
				})
			}

			function p(t, e) {
				var n = e.prototype || {};
				t.prototype = e.prototype = n, l(t, '__sentry_original__', e)
			}

			function y(t) {
				return t.__sentry_original__
			}

			function d(t) {
				return Object.keys(t).map((function(e) {
					return ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(t[e]))
				})).join('&')
			}

			function v(t) {
				if ((0, o.VZ)(t)) return u({
					message: t.message,
					name: t.name,
					stack: t.stack
				}, _(t));
				if ((0, o.cO)(t)) {
					var e = u({
						type: t.type,
						target: h(t.target),
						currentTarget: h(t.currentTarget)
					}, _(t));
					return 'undefined' != typeof CustomEvent && (0, o.V9)(t, CustomEvent) && (e.detail = t.detail), e
				}
				return t
			}

			function h(t) {
				try {
					return (0, o.kK)(t) ? (0, r.Rt)(t) : Object.prototype.toString.call(t)
				} catch (t) {
					return '<unknown>'
				}
			}

			function _(t) {
				if ('object' === a(t) && null !== t) {
					var e = {};
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
					return e
				}
				return {}
			}

			function b(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
					n = Object.keys(v(t));
				if (n.sort(), !n.length) return '[object has no keys]';
				if (n[0].length >= e) return (0, i.$G)(n[0], e);
				for (var r = n.length; r > 0; r--) {
					var o = n.slice(0, r).join(', ');
					if (!(o.length > e)) return r === n.length ? o : (0, i.$G)(o, e)
				}
				return ''
			}

			function g(t) {
				return m(t, new Map)
			}

			function m(t, e) {
				if ((0, o.PO)(t)) {
					if (void 0 !== (c = e.get(t))) return c;
					var n = {};
					e.set(t, n);
					for (var r = 0, i = Object.keys(t); r < i.length; r++) {
						var a = i[r];
						void 0 !== t[a] && (n[a] = m(t[a], e))
					}
					return n
				}
				if (Array.isArray(t)) {
					var c;
					if (void 0 !== (c = e.get(t))) return c;
					n = [];
					return e.set(t, n), t.forEach((function(t) {
						n.push(m(t, e))
					})), n
				}
				return t
			}
		},
		77761: function(t, e, n) {
			'use strict';

			function r(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? r(Object(n), !0).forEach((function(e) {
						i(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function i(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function a(t) {
				return function(t) {
					if (Array.isArray(t)) return s(t)
				}(t) || function(t) {
					if ('undefined' != typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) return Array.from(t)
				}(t) || u(t) || function() {
					throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}()
			}

			function c(t, e) {
				var n = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
				if (!n) {
					if (Array.isArray(t) || (n = u(t)) || e && t && 'number' == typeof t.length) {
						n && (t = n);
						var r = 0,
							o = function() {};
						return {
							s: o,
							n: function() {
								return r >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[r++]
								}
							},
							e: function(t) {
								throw t
							},
							f: o
						}
					}
					throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}
				var i, a = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(t)
					},
					n: function() {
						var t = n.next();
						return a = t.done, t
					},
					e: function(t) {
						c = !0, i = t
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function u(t, e) {
				if (t) {
					if ('string' == typeof t) return s(t, e);
					var n = Object.prototype.toString.call(t).slice(8, -1);
					return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
				}
			}

			function s(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			n.d(e, {
				'$P': function() {
					return d
				},
				'Sq': function() {
					return l
				},
				'pE': function() {
					return f
				}
			});

			function f() {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var r = e.sort((function(t, e) {
					return t[0] - e[0]
				})).map((function(t) {
					return t[1]
				}));
				return function(t) {
					var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						o = [],
						i = c(t.split('\n').slice(n));
					try {
						for (i.s(); !(e = i.n()).done;) {
							var a, u = e.value,
								s = u.replace(/\(error: (.*)\)/, '$1'),
								f = c(r);
							try {
								for (f.s(); !(a = f.n()).done;) {
									var l = a.value,
										y = l(s);
									if (y) {
										o.push(y);
										break
									}
								}
							} catch (t) {
								f.e(t)
							} finally {
								f.f()
							}
						}
					} catch (t) {
						i.e(t)
					} finally {
						i.f()
					}
					return p(o)
				}
			}

			function l(t) {
				return Array.isArray(t) ? f.apply(void 0, a(t)) : t
			}

			function p(t) {
				if (!t.length) return [];
				var e = t,
					n = e[0].function || '',
					r = e[e.length - 1].function || '';
				return -1 === n.indexOf('captureMessage') && -1 === n.indexOf('captureException') || (e = e.slice(1)), -1 !== r.indexOf('sentryWrapped') && (e = e.slice(0, -1)), e.slice(0, 50).map((function(t) {
					return o(o({}, t), {}, {
						filename: t.filename || e[0].filename,
						function: t.function || '?'
					})
				})).reverse()
			}
			var y = '<anonymous>';

			function d(t) {
				try {
					return t && 'function' == typeof t && t.name || y
				} catch (t) {
					return y
				}
			}
		},
		14450: function(t, e, n) {
			'use strict';
			n.d(e, {
				'$G': function() {
					return o
				},
				'nK': function() {
					return i
				},
				'zC': function() {
					return a
				}
			});
			var r = n(44459);

			function o(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return 'string' != typeof t || 0 === e || t.length <= e ? t : ''.concat(t.substr(0, e), '...')
			}

			function i(t, e) {
				if (!Array.isArray(t)) return '';
				for (var n = [], r = 0; r < t.length; r++) {
					var o = t[r];
					try {
						n.push(String(o))
					} catch (t) {
						n.push('[value cannot be serialized]')
					}
				}
				return n.join(e)
			}

			function a(t, e) {
				return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : 'string' == typeof e && -1 !== t.indexOf(e))
			}
		},
		11367: function(t, e, n) {
			'use strict';
			n.d(e, {
				'$2': function() {
					return c
				},
				'WD': function() {
					return a
				},
				'cW': function() {
					return u
				}
			});
			var r, o = n(44459);

			function i(t, e) {
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
				}
			}

			function a(t) {
				return new u((function(e) {
					e(t)
				}))
			}

			function c(t) {
				return new u((function(e, n) {
					n(t)
				}))
			}! function(t) {
				t[t.PENDING = 0] = 'PENDING';
				t[t.RESOLVED = 1] = 'RESOLVED';
				t[t.REJECTED = 2] = 'REJECTED'
			}(r || (r = {}));
			var u = function() {
				function t(e) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
					}(this, t), t.prototype.__init.call(this), t.prototype.__init2.call(this), t.prototype.__init3.call(this), t.prototype.__init4.call(this), t.prototype.__init5.call(this), t.prototype.__init6.call(this);
					try {
						e(this._resolve, this._reject)
					} catch (t) {
						this._reject(t)
					}
				}
				var e, n, a;
				return e = t, (n = [{
					key: '__init',
					value: function() {
						this._state = r.PENDING
					}
				}, {
					key: '__init2',
					value: function() {
						this._handlers = []
					}
				}, {
					key: 'then',
					value: function(e, n) {
						var r = this;
						return new t((function(t, o) {
							r._handlers.push([!1, function(n) {
								if (e) try {
									t(e(n))
								} catch (t) {
									o(t)
								} else t(n)
							}, function(e) {
								if (n) try {
									t(n(e))
								} catch (t) {
									o(t)
								} else o(e)
							}]), r._executeHandlers()
						}))
					}
				}, {
					key: 'catch',
					value: function(t) {
						return this.then((function(t) {
							return t
						}), t)
					}
				}, {
					key: 'finally',
					value: function(e) {
						var n = this;
						return new t((function(t, r) {
							var o, i;
							return n.then((function(t) {
								i = !1, o = t, e && e()
							}), (function(t) {
								i = !0, o = t, e && e()
							})).then((function() {
								i ? r(o) : t(o)
							}))
						}))
					}
				}, {
					key: '__init3',
					value: function() {
						var t = this;
						this._resolve = function(e) {
							t._setResult(r.RESOLVED, e)
						}
					}
				}, {
					key: '__init4',
					value: function() {
						var t = this;
						this._reject = function(e) {
							t._setResult(r.REJECTED, e)
						}
					}
				}, {
					key: '__init5',
					value: function() {
						var t = this;
						this._setResult = function(e, n) {
							t._state === r.PENDING && ((0, o.J8)(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
						}
					}
				}, {
					key: '__init6',
					value: function() {
						var t = this;
						this._executeHandlers = function() {
							if (t._state !== r.PENDING) {
								var e = t._handlers.slice();
								t._handlers = [], e.forEach((function(e) {
									e[0] || (t._state === r.RESOLVED && e[1](t._value), t._state === r.REJECTED && e[2](t._value), e[0] = !0)
								}))
							}
						}
					}
				}]) && i(e.prototype, n), a && i(e, a), Object.defineProperty(e, 'prototype', {
					writable: !1
				}), t
			}()
		},
		29395: function(t, e, n) {
			'use strict';
			n.d(e, {
				'ph': function() {
					return s
				},
				'yW': function() {
					return u
				}
			});
			var r = n(94647),
				o = n(50082);
			t = n.hmd(t);
			var i = {
				nowSeconds: function() {
					return Date.now() / 1e3
				}
			};
			var a = (0, o.KV)() ? function() {
					try {
						return (0, o.l$)(t, 'perf_hooks').performance
					} catch (t) {
						return
					}
				}() : function() {
					var t = (0, r.R)().performance;
					if (t && t.now) return {
						now: function() {
							return t.now()
						},
						timeOrigin: Date.now() - t.now()
					}
				}(),
				c = void 0 === a ? i : {
					nowSeconds: function() {
						return (a.timeOrigin + a.now()) / 1e3
					}
				},
				u = i.nowSeconds.bind(i),
				s = c.nowSeconds.bind(c);
			! function() {
				var t = (0, r.R)().performance;
				if (t && t.now) {
					var e = 36e5,
						n = t.now(),
						o = Date.now(),
						i = t.timeOrigin ? Math.abs(t.timeOrigin + n - o) : e,
						a = i < e,
						c = t.timing && t.timing.navigationStart,
						u = 'number' == typeof c ? Math.abs(c + n - o) : e;
					return a || u < e ? i <= u ? ('timeOrigin', t.timeOrigin) : ('navigationStart', c) : ('dateNow', o)
				}
				'none'
			}()
		},
		61244: function(t, e, n) {
			'use strict';
			n.d(e, {
				'S': function() {
					return j
				}
			});
			var r = n(59868),
				o = n(7096),
				i = n(94647),
				a = n(74996),
				c = n(88084),
				u = ['activate', 'mount', 'update'],
				s = n(53683);

			function f(t) {
				for (var e = void 0, n = t[0], r = 1; r < t.length;) {
					var o = t[r],
						i = t[r + 1];
					if (r += 2, ('optionalAccess' === o || 'optionalCall' === o) && null == n) return;
					'access' === o || 'optionalAccess' === o ? (e = n, n = i(n)) : 'call' !== o && 'optionalCall' !== o || (n = i((function() {
						for (var t, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
						return (t = n).call.apply(t, [e].concat(o))
					})), e = void 0)
				}
				return n
			}
			var l = /(?:^|[-_])(\w)/g,
				p = '<Anonymous>',
				y = function(t, e) {
					if (!t) return p;
					if (t.$root === t) return '<Root>';
					if (!t.$options) return p;
					var n = t.$options,
						r = n.name || n._componentTag,
						o = n.__file;
					if (!r && o) {
						var i = o.match(/([^/\\]+)\.vue$/);
						i && (r = i[1])
					}
					return (r ? '<'.concat(r.replace(l, (function(t) {
						return t.toUpperCase()
					})).replace(/[-_]/g, ''), '>') : p) + (o && !1 !== e ? ' at '.concat(o) : '')
				},
				d = function(t, e) {
					var n = t.config,
						r = n.errorHandler,
						o = n.warnHandler,
						i = n.silent;
					t.config.errorHandler = function(n, a, c) {
						var u = y(a, !1),
							l = a ? function(t) {
								if ((f([t, 'optionalAccess', function(t) {
										return t._isVue
									}]) || f([t, 'optionalAccess', function(t) {
										return t.__isVue
									}])) && f([t, 'optionalAccess', function(t) {
										return t.$parent
									}])) {
									for (var e = [], n = 0; t;) {
										if (e.length > 0) {
											var r = e[e.length - 1];
											if (r.constructor === t.constructor) {
												n += 1, t = t.$parent;
												continue
											}
											n > 0 && (e[e.length - 1] = [r, n], n = 0)
										}
										e.push(t), t = t.$parent
									}
									var o = e.map((function(t, e) {
										return ''.concat((0 === e ? '---\x3e ' : function(t, e) {
											for (var n = ''; e;) e % 2 == 1 && (n += t), e > 1 && (t += t), e >>= 1;
											return n
										}(' ', 5 + 2 * e)) + (Array.isArray(t) ? ''.concat(y(t[0]), '... (').concat(t[1], ' recursive calls)') : y(t)))
									})).join('\n');
									return '\n\nfound in\n\n'.concat(o)
								}
								return '\n\n(found in '.concat(y(t), ')')
							}(a) : '',
							p = {
								componentName: u,
								lifecycleHook: c,
								trace: l
							};
						if (e.attachProps && a && (a.$options && a.$options.propsData ? p.propsData = a.$options.propsData : a.$props && (p.propsData = a.$props)), setTimeout((function() {
								(0, s.Gd)().withScope((function(t) {
									t.setContext('vue', p), (0, s.Gd)().captureException(n)
								}))
							})), 'function' == typeof r && r.call(t, n, a, c), e.logErrors) {
							var d = 'undefined' != typeof console,
								v = 'Error in '.concat(c, ': "').concat(n && n.toString(), '"');
							o ? o.call(null, v, a, l) : d && !i && console.error('[Vue warn]: '.concat(v).concat(l))
						}
					}
				},
				v = n(29395);

			function h(t, e) {
				var n = 'undefined' != typeof Symbol && t[Symbol.iterator] || t['@@iterator'];
				if (!n) {
					if (Array.isArray(t) || (n = function(t, e) {
							if (!t) return;
							if ('string' == typeof t) return _(t, e);
							var n = Object.prototype.toString.call(t).slice(8, -1);
							'Object' === n && t.constructor && (n = t.constructor.name);
							if ('Map' === n || 'Set' === n) return Array.from(t);
							if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
						}(t)) || e && t && 'number' == typeof t.length) {
						n && (t = n);
						var r = 0,
							o = function() {};
						return {
							s: o,
							n: function() {
								return r >= t.length ? {
									done: !0
								} : {
									done: !1,
									value: t[r++]
								}
							},
							e: function(t) {
								throw t
							},
							f: o
						}
					}
					throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
				}
				var i, a = !0,
					c = !1;
				return {
					s: function() {
						n = n.call(t)
					},
					n: function() {
						var t = n.next();
						return a = t.done, t
					},
					e: function(t) {
						c = !0, i = t
					},
					f: function() {
						try {
							a || null == n.return || n.return()
						} finally {
							if (c) throw i
						}
					}
				}
			}

			function _(t, e) {
				(null == e || e > t.length) && (e = t.length);
				for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
				return r
			}
			var b = 'ui.vue',
				g = {
					activate: ['activated', 'deactivated'],
					create: ['beforeCreate', 'created'],
					destroy: ['beforeDestroy', 'destroyed'],
					mount: ['beforeMount', 'mounted'],
					update: ['beforeUpdate', 'updated']
				};

			function m() {
				return f([s.Gd, 'call', function(t) {
					return t()
				}, 'access', function(t) {
					return t.getScope
				}, 'call', function(t) {
					return t()
				}, 'optionalAccess', function(t) {
					return t.getTransaction
				}, 'call', function(t) {
					return t()
				}])
			}

			function O(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e && (r = r.filter((function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function w(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2 ? O(Object(n), !0).forEach((function(e) {
						E(t, e, n[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}))
				}
				return t
			}

			function E(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}
			var S = {
				Vue: (0, i.R)().Vue,
				attachProps: !0,
				logErrors: !1,
				hooks: u,
				timeout: 2e3,
				trackComponents: !1,
				_metadata: {
					sdk: {
						name: 'sentry.javascript.vue',
						packages: [{
							name: 'npm:@sentry/vue',
							version: r.J
						}],
						version: r.J
					}
				}
			};

			function j() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					e = w(w({}, S), t);
				if ((0, o.S1)(e), e.Vue || e.app)
					if (e.app) {
						var n = (0, c.lE)(e.app);
						n.forEach((function(t) {
							return k(t, e)
						}))
					} else e.Vue && k(e.Vue, e);
				else('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn('Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).')
			}
			var k = function(t, e) {
				d(t, e), ('tracesSampleRate' in e || 'tracesSampler' in e) && t.mixin(function(t) {
					var e, n = {},
						r = h((t.hooks || []).concat(u).filter((function(t, e, n) {
							return n.indexOf(t) === e
						})));
					try {
						for (r.s(); !(e = r.n()).done;) {
							var o = e.value,
								i = g[o];
							if (i) {
								var c, s = h(i);
								try {
									for (s.s(); !(c = s.n()).done;) {
										var l = c.value;
										n[l] = function() {
											var e = this.$root === this;
											e && (s = m()) && (this.$_sentryRootSpan = this.$_sentryRootSpan || s.startChild({
												description: 'Application Render',
												op: b
											}));
											var n, r, a, c = y(this, !1),
												u = Array.isArray(t.trackComponents) ? t.trackComponents.indexOf(c) > -1 : t.trackComponents;
											if (e || u)
												if (this.$_sentrySpans = this.$_sentrySpans || {}, l == i[0]) {
													var s;
													(s = f([this, 'access', function(t) {
														return t.$root
													}, 'optionalAccess', function(t) {
														return t.$_sentryRootSpan
													}]) || m()) && (this.$_sentrySpans[o] = s.startChild({
														description: 'Vue <'.concat(c, '>'),
														op: ''.concat(b, '.').concat(o)
													}))
												} else {
													var p = this.$_sentrySpans[o];
													if (!p) return;
													p.finish(), n = this, r = (0, v.ph)(), a = t.timeout, n.$_sentryRootSpanTimer && clearTimeout(n.$_sentryRootSpanTimer), n.$_sentryRootSpanTimer = setTimeout((function() {
														f([n, 'access', function(t) {
															return t.$root
														}, 'optionalAccess', function(t) {
															return t.$_sentryRootSpan
														}]) && (n.$root.$_sentryRootSpan.finish(r), n.$root.$_sentryRootSpan = void 0)
													}), a)
												}
										}
									}
								} catch (t) {
									s.e(t)
								} finally {
									s.f()
								}
							} else('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn('Unknown hook: '.concat(o))
						}
					} catch (t) {
						r.e(t)
					} finally {
						r.f()
					}
					return n
				}(w(w({}, e), e.tracingOptions)))
			}
		},
		98504: function() {
			('undefined' != typeof window || 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).SENTRY_RELEASE = {
				id: 'b84ea65e72f155749ab23a2e8c4749033d3221b5'
			}
		}
	}
]);