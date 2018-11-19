!
    function(n) {
        function t() {
            n[s].glbl || (d = {
                $wndw: n(window),
                $html: n("html"),
                $body: n("body")
            },
                a = {},
                l = {},
                r = {},
                n.each([a, l, r],
                    function(e, n) {
                        n.add = function(e) {
                            e = e.split(" ");
                            for (var t in e) n[e[t]] = n.mm(e[t])
                        }
                    }), a.mm = function(e) {
                return "mm-" + e
            },
                a.add("wrapper menu vertical panel nopanel current highest opened subopened navbar hasnavbar title btn prev next first last listview nolistview selected divider spacer hidden fullsubopen"), a.umm = function(e) {
                return "mm-" == e.slice(0, 3) && (e = e.slice(3)),
                    e
            },
                l.mm = function(e) {
                    return "mm-" + e
                },
                l.add("parent sub"), r.mm = function(e) {
                return e + ".mm"
            },
                r.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), n[s]._c = a, n[s]._d = l, n[s]._e = r, n[s].glbl = d)
        }
        var s = "mmenu",
            i = "5.1.2";
        if (!n[s]) {
            n[s] = function(e, n, t) {
                this.$menu = e,
                    this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"],
                    this.opts = n,
                    this.conf = t,
                    this.vars = {},
                    this.cbck = {},
                "function" == typeof this.___deprecated && this.___deprecated(),
                    this._initMenu(),
                    this._initAnchors();
                var s = this.$menu.children(this.conf.panelNodetype);
                return this._initAddons(),
                    this.init(s),
                "function" == typeof this.___debug && this.___debug(),
                    this
            },
                n[s].version = i,
                n[s].addons = {},
                n[s].uniqueId = 0,
                n[s].defaults = {
                    extensions: [],
                    onClick: {
                        setSelected: !0
                    },
                    slidingSubmenus: !0
                },
                n[s].configuration = {
                    classNames: {
                        panel: "Panel",
                        vertical: "Vertical",
                        selected: "Selected",
                        divider: "Divider",
                        spacer: "Spacer"
                    },
                    clone: !1,
                    openingInterval: 25,
                    panelNodetype: "ul, ol, div",
                    transitionDuration: 400
                },
                n[s].prototype = {
                    init: function(e) {
                        e = e.not("." + a.nopanel),
                            e = this._initPanels(e),
                            this.trigger("init", e),
                            this.trigger("update")
                    },
                    update: function() {
                        this.trigger("update")
                    },
                    setSelected: function(e) {
                        this.$menu.find("." + a.listview).children().removeClass(a.selected),
                            e.addClass(a.selected),
                            this.trigger("setSelected", e)
                    },
                    openPanel: function(e) {
                        var t = e.parent();
                        if (t.hasClass(a.vertical)) {
                            var s = t.parents("." + a.subopened);
                            if (s.length) return this.openPanel(s.first());
                            t.addClass(a.opened)
                        } else {
                            if (e.hasClass(a.current)) return;
                            var i = n(this.$menu).children("." + a.panel),
                                l = i.filter("." + a.current);
                            i.removeClass(a.highest).removeClass(a.current).not(e).not(l).not("." + a.vertical).addClass(a.hidden),
                                e.hasClass(a.opened) ? l.addClass(a.highest).removeClass(a.opened).removeClass(a.subopened) : (e.addClass(a.highest), l.addClass(a.subopened)),
                                e.removeClass(a.hidden).addClass(a.current),
                                setTimeout(function() {
                                        e.removeClass(a.subopened).addClass(a.opened)
                                    },
                                    this.conf.openingInterval)
                        }
                        this.trigger("openPanel", e)
                    },
                    closePanel: function(e) {
                        var n = e.parent();
                        n.hasClass(a.vertical) && (n.removeClass(a.opened), this.trigger("closePanel", e))
                    },
                    closeAllPanels: function() {
                        this.$menu.find("." + a.listview).children().removeClass(a.selected).filter("." + a.vertical).removeClass(a.opened);
                        var e = this.$menu.children("." + a.panel),
                            n = e.first();
                        this.$menu.children("." + a.panel).not(n).removeClass(a.subopened).removeClass(a.opened).removeClass(a.current).removeClass(a.highest).addClass(a.hidden),
                            this.openPanel(n)
                    },
                    togglePanel: function(e) {
                        var n = e.parent();
                        n.hasClass(a.vertical) && this[n.hasClass(a.opened) ? "closePanel": "openPanel"](e)
                    },
                    getInstance: function() {
                        return this
                    },
                    bind: function(e, n) {
                        this.cbck[e] = this.cbck[e] || [],
                            this.cbck[e].push(n)
                    },
                    trigger: function() {
                        var n = this,
                            t = Array.prototype.slice.call(arguments),
                            s = t.shift();
                        if (this.cbck[s]) for (e in this.cbck[s]) this.cbck[s][e].apply(n, t)
                    },
                    _initMenu: function() {
                        this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                            n(this).attr("id", a.mm(n(this).attr("id")))
                        })),
                            this.$menu.contents().each(function() {
                                3 == n(this)[0].nodeType && n(this).remove()
                            }),
                            this.$menu.parent().addClass(a.wrapper);
                        var e = [a.menu];
                        this.opts.slidingSubmenus || e.push(a.vertical),
                            this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "",
                        this.opts.extensions && e.push(this.opts.extensions),
                            this.$menu.addClass(e.join(" "))
                    },
                    _initPanels: function(e) {
                        var t = this;
                        this.__findAddBack(e, "ul, ol").not("." + a.nolistview).addClass(a.listview);
                        var s = this.__findAddBack(e, "." + a.listview).children();
                        this.__refactorClass(s, this.conf.classNames.selected, "selected"),
                            this.__refactorClass(s, this.conf.classNames.divider, "divider"),
                            this.__refactorClass(s, this.conf.classNames.spacer, "spacer"),
                            this.__refactorClass(this.__findAddBack(e, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                        var i = n(),
                            r = e.add(e.find("." + a.panel)).add(this.__findAddBack(e, "." + a.listview).children().children(this.conf.panelNodetype)).not("." + a.nopanel);
                        this.__refactorClass(r, this.conf.classNames.vertical, "vertical"),
                        this.opts.slidingSubmenus || r.addClass(a.vertical),
                            r.each(function() {
                                var e = n(this),
                                    s = e;
                                e.is("ul, ol") ? (e.wrap('<div class="' + a.panel + '" />'), s = e.parent()) : s.addClass(a.panel);
                                var l = e.attr("id");
                                e.removeAttr("id"),
                                    s.attr("id", l || t.__getUniqueId()),
                                e.hasClass(a.vertical) && (e.removeClass(t.conf.classNames.vertical), s.add(s.parent()).addClass(a.vertical)),
                                    i = i.add(s);
                                var r = s.children().first(),
                                    d = s.children().last();
                                r.is("." + a.listview) && r.addClass(a.first),
                                d.is("." + a.listview) && d.addClass(a.last)
                            });
                        var d = n("." + a.panel, this.$menu);
                        i.each(function() {
                            var e = n(this),
                                t = e.parent(),
                                s = t.children("a, span").first();
                            if (t.is("." + a.menu) || (t.data(l.sub, e), e.data(l.parent, t)), !t.children("." + a.next).length && t.parent().is("." + a.listview)) {
                                var i = e.attr("id"),
                                    r = n('<a class="' + a.next + '" href="#' + i + '" data-target="#' + i + '" />').insertBefore(s);
                                s.is("span") && r.addClass(a.fullsubopen)
                            }
                            if (!e.children("." + a.navbar).length && !t.hasClass(a.vertical)) {
                                if (t.parent().is("." + a.listview)) var t = t.closest("." + a.panel);
                                else var s = t.closest("." + a.panel).find('a[href="#' + e.attr("id") + '"]').first(),
                                    t = s.closest("." + a.panel);
                                if (t.length) {
                                    var i = t.attr("id");
                                    e.prepend('<div class="' + a.navbar + '"><a class="' + a.btn + " " + a.prev + '" href="#' + i + '" data-target="#' + i + '"></a><a class="' + a.title + '">' + s.text() + "</a></div>"),
                                        e.addClass(a.hasnavbar)
                                }
                            }
                        });
                        var o = this.__findAddBack(e, "." + a.listview).children("." + a.selected).removeClass(a.selected).last().addClass(a.selected);
                        o.add(o.parentsUntil("." + a.menu, "li")).filter("." + a.vertical).addClass(a.opened).end().not("." + a.vertical).each(function() {
                            n(this).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).addClass(a.subopened)
                        }),
                            o.children("." + a.panel).not("." + a.vertical).addClass(a.opened).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).addClass(a.subopened);
                        var c = d.filter("." + a.opened);
                        return c.length || (c = i.first()),
                            c.addClass(a.opened).last().addClass(a.current),
                            i.not("." + a.vertical).not(c.last()).addClass(a.hidden).end().appendTo(this.$menu),
                            i
                    },
                    _initAnchors: function() {
                        var e = this;
                        d.$body.on(r.click + "-oncanvas", "a[href]",
                            function(t) {
                                if($(this).hasClass("mm-hbtn")) $('.mm-hbtn').addClass('open');

                                var i = n(this),
                                    l = !1,
                                    r = e.$menu.find(i).length;
                                for (var o in n[s].addons) if (l = n[s].addons[o].clickAnchor.call(e, i, r)) break;
                                if (!l && r) {
                                    var c = i.attr("href");
                                    if (c.length > 1 && "#" == c.slice(0, 1)) {
                                        var h = n(c, e.$menu);
                                        h.is("." + a.panel) && (l = !0, e[i.parent().hasClass(a.vertical) ? "togglePanel": "openPanel"](h))
                                    }
                                }
                                if (l && t.preventDefault(), !l && r && i.is("." + a.listview + " > li > a") && !i.is('[rel="external"]') && !i.is('[target="_blank"]')) {
                                    e.__valueOrFn(e.opts.onClick.setSelected, i) && e.setSelected(n(t.target).parent());
                                    var u = e.__valueOrFn(e.opts.onClick.preventDefault, i, "#" == c.slice(0, 1));
                                    u && t.preventDefault(),
                                    e.__valueOrFn(e.opts.onClick.blockUI, i, !u) && d.$html.addClass(a.blocking),
                                    e.__valueOrFn(e.opts.onClick.close, i, u) && e.close()
                                }
                            })
                    },
                    _initAddons: function() {
                        for (var e in n[s].addons) n[s].addons[e].add.call(this),
                            n[s].addons[e].add = function() {};
                        for (var e in n[s].addons) n[s].addons[e].setup.call(this)
                    },
                    __api: function() {
                        var e = this,
                            t = {};
                        return n.each(this._api,
                            function() {
                                var n = this;
                                t[n] = function() {
                                    var s = e[n].apply(e, arguments);
                                    return "undefined" == typeof s ? t: s
                                }
                            }),
                            t
                    },
                    __valueOrFn: function(e, n, t) {
                        return "function" == typeof e ? e.call(n[0]) : "undefined" == typeof e && "undefined" != typeof t ? t: e
                    },
                    __refactorClass: function(e, n, t) {
                        return e.filter("." + n).removeClass(n).addClass(a[t])
                    },
                    __findAddBack: function(e, n) {
                        return e.find(n).add(e.filter(n))
                    },
                    __filterListItems: function(e) {
                        return e.not("." + a.divider).not("." + a.hidden)
                    },
                    __transitionend: function(e, n, t) {
                        var s = !1,
                            i = function() {
                                s || n.call(e[0]),
                                    s = !0
                            };
                        e.one(r.transitionend, i),
                            e.one(r.webkitTransitionEnd, i),
                            setTimeout(i, 1.1 * t)
                    },
                    __getUniqueId: function() {
                        return a.mm(n[s].uniqueId++)
                    }
                },
                n.fn[s] = function(e, i) {
                    return t(),
                        e = n.extend(!0, {},
                            n[s].defaults, e),
                        i = n.extend(!0, {},
                            n[s].configuration, i),
                        this.each(function() {
                            var t = n(this);
                            if (!t.data(s)) {
                                var a = new n[s](t, e, i);
                                t.data(s, a.__api())
                            }
                        })
                },
                n[s].support = {
                    touch: "ontouchstart" in window || navigator.msMaxTouchPoints
                };
            var a, l, r, d
        }
    } (jQuery);

!
    function(e) {
        var t = "mmenu",
            o = "offCanvas";
        e[t].addons[o] = {
            setup: function() {
                if (this.opts[o]) {
                    var n = this.opts[o],
                        i = this.conf[o];
                    a = e[t].glbl,
                        this._api = e.merge(this._api, ["open", "close", "setPage"]),
                    ("top" == n.position || "bottom" == n.position) && (n.zposition = "front"),
                    "string" != typeof i.pageSelector && (i.pageSelector = "> " + i.pageNodetype),
                        a.$allMenus = (a.$allMenus || e()).add(this.$menu),
                        this.vars.opened = !1;
                    var r = [s.offcanvas];
                    "left" != n.position && r.push(s.mm(n.position)),
                    "back" != n.zposition && r.push(s.mm(n.zposition)),
                        this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),
                        this.setPage(a.$page),
                        this._initBlocker(),
                        this["_initWindow_" + o](),
                        this.$menu[i.menuInjectMethod + "To"](i.menuWrapperSelector)
                }
            },
            add: function() {
                s = e[t]._c,
                    n = e[t]._d,
                    i = e[t]._e,
                    s.add("offcanvas slideout modal background opening blocker page"),
                    n.add("style"),
                    i.add("resize")
            },
            clickAnchor: function(e) {
                if (!this.opts[o]) return ! 1;
                var t = this.$menu.attr("id");
                if (t && t.length && (this.conf.clone && (t = s.umm(t)), e.is('[href="#' + t + '"]'))) return this.open(),
                    !0;
                if (a.$page) {
                    var t = a.$page.attr("id");
                    return t && t.length && e.is('[href="#' + t + '"]') ? (this.close(), !0) : !1
                }
            }
        },
            e[t].defaults[o] = {
                position: "left",
                zposition: "back",
                modal: !1,
                moveBackground: !0
            },
            e[t].configuration[o] = {
                pageNodetype: "div",
                pageSelector: null,
                menuWrapperSelector: "body",
                menuInjectMethod: "prepend"
            },
            e[t].prototype.open = function() {
                if (!this.vars.opened) {
                    var e = this;
                    this._openSetup(),
                        setTimeout(function() {
                                e._openFinish()
                            },
                            this.conf.openingInterval),
                        this.trigger("open")
                }
            },
            e[t].prototype._openSetup = function() {
                var e = this;
                this.closeAllOthers(),
                    a.$page.data(n.style, a.$page.attr("style") || ""),
                    a.$wndw.trigger(i.resize + "-offcanvas", [!0]);
                var t = [s.opened];
                this.opts[o].modal && t.push(s.modal),
                this.opts[o].moveBackground && t.push(s.background),
                "left" != this.opts[o].position && t.push(s.mm(this.opts[o].position)),
                "back" != this.opts[o].zposition && t.push(s.mm(this.opts[o].zposition)),
                this.opts.extensions && t.push(this.opts.extensions),
                    a.$html.addClass(t.join(" ")),
                    setTimeout(function() {
                            e.vars.opened = !0
                        },
                        this.conf.openingInterval),
                    this.$menu.addClass(s.current + " " + s.opened)
            },
            e[t].prototype._openFinish = function() {
                var e = this;
                this.__transitionend(a.$page,
                    function() {
                        e.trigger("opened")
                    },
                    this.conf.transitionDuration),
                    a.$html.addClass(s.opening),
                    this.trigger("opening")
            },
            e[t].prototype.close = function() {
                if (this.vars.opened) {
                    var e = this;
                    this.__transitionend(a.$page,
                        function() {
                            e.$menu.removeClass(s.current).removeClass(s.opened),
                                a.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[o].position)).removeClass(s.mm(e.opts[o].zposition)),
                            e.opts.extensions && a.$html.removeClass(e.opts.extensions),
                                a.$page.attr("style", a.$page.data(n.style)),
                                e.vars.opened = !1,
                                e.trigger("closed")
                        },
                        this.conf.transitionDuration),
                        a.$html.removeClass(s.opening),
                        this.trigger("close"),
                        this.trigger("closing")
                }
            },
            e[t].prototype.closeAllOthers = function() {
                a.$allMenus.not(this.$menu).each(function() {
                    var o = e(this).data(t);
                    o && o.close && o.close()
                })
            },
            e[t].prototype.setPage = function(t) {
                t && t.length || (t = e(this.conf[o].pageSelector, a.$body), t.length > 1 && (t = t.wrapAll("<" + this.conf[o].pageNodetype + " />").parent())),
                    t.attr("id", t.attr("id") || this.__getUniqueId()),
                    t.addClass(s.page + " " + s.slideout),
                    a.$page = t,
                    this.trigger("setPage", t)
            },
            e[t].prototype["_initWindow_" + o] = function() {
                a.$wndw.off(i.keydown + "-offcanvas").on(i.keydown + "-offcanvas",
                    function(e) {
                        return a.$html.hasClass(s.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
                    });
                var e = 0;
                a.$wndw.off(i.resize + "-offcanvas").on(i.resize + "-offcanvas",
                    function(t, o) {
                        if (o || a.$html.hasClass(s.opened)) {
                            var n = a.$wndw.height(); (o || n != e) && (e = n, a.$page.css("minHeight", n))
                        }
                    })
            },
            e[t].prototype._initBlocker = function() {
                var t = this;
                a.$blck || (a.$blck = e('<div id="' + s.blocker + '" class="' + s.slideout + '" />')),
                    a.$blck.appendTo(a.$body).off(i.touchstart + "-offcanvas " + i.touchend + "-offcanvas").on(i.touchstart + "-offcanvas " + i.touchend + "-offcanvas",
                        function(e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                a.$blck.trigger(i.mousedown + "-offcanvas");
                            $('.mm-hbtn').removeClass('open');

                        }).off(i.mousedown + "-offcanvas").on(i.mousedown + "-offcanvas",
                        function(e) {
                            e.preventDefault(),
                            a.$html.hasClass(s.modal) || (t.closeAllOthers(), t.close())
                        })
            };
        var s, n, i, a
    } (jQuery);

!
    function(t) {
        var e = "mmenu",
            i = "autoHeight";
        t[e].addons[i] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    switch (this.opts.offCanvas.position) {
                        case "left":
                        case "right":
                            return
                    }
                    var n = this,
                        o = this.opts[i];
                    if (this.conf[i], h = t[e].glbl, "boolean" == typeof o && o && (o = {
                            height: "auto"
                        }), "object" != typeof o && (o = {}), o = this.opts[i] = t.extend(!0, {},
                            t[e].defaults[i], o), "auto" == o.height) {
                        this.$menu.addClass(s.autoheight);
                        var u = function(t) {
                            var e = this.$menu.children("." + s.current);
                            _top = parseInt(e.css("top"), 10) || 0,
                                _bot = parseInt(e.css("bottom"), 10) || 0,
                                this.$menu.addClass(s.measureheight),
                                t = t || this.$menu.children("." + s.current),
                            t.is("." + s.vertical) && (t = t.parents("." + s.panel).not("." + s.vertical).first()),
                                this.$menu.height(t.outerHeight() + _top + _bot).removeClass(s.measureheight)
                        };
                        this.bind("update", u),
                            this.bind("openPanel", u),
                            this.bind("closePanel", u),
                            this.bind("open", u),
                            h.$wndw.off(a.resize + "-autoheight").on(a.resize + "-autoheight",
                                function() {
                                    u.call(n)
                                })
                    }
                }
            },
            add: function() {
                s = t[e]._c,
                    n = t[e]._d,
                    a = t[e]._e,
                    s.add("autoheight measureheight"),
                    a.add("resize")
            },
            clickAnchor: function() {}
        },
            t[e].defaults[i] = {
                height: "default"
            };
        var s, n, a, h
    } (jQuery);

!
    function(o) {
        var t = "mmenu",
            n = "backButton";
        o[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var i = this,
                        e = this.opts[n];
                    if (this.conf[n], a = o[t].glbl, "boolean" == typeof e && (e = {
                            close: e
                        }), "object" != typeof e && (e = {}), e = o.extend(!0, {},
                            o[t].defaults[n], e), e.close) {
                        var c = "#" + i.$menu.attr("id");
                        this.bind("opened",
                            function() {
                                location.hash != c && history.pushState(null, document.title, c)
                            }),
                            o(window).on("popstate",
                                function(o) {
                                    a.$html.hasClass(s.opened) ? (o.stopPropagation(), i.close()) : location.hash == c && (o.stopPropagation(), i.open())
                                })
                    }
                }
            },
            add: function() {
                return window.history && window.history.pushState ? (s = o[t]._c, i = o[t]._d, e = o[t]._e, void 0) : (o[t].addons[n].setup = function() {},
                    void 0)
            },
            clickAnchor: function() {}
        },
            o[t].defaults[n] = {
                close: !1
            };
        var s, i, e, a
    } (jQuery);

!
    function(t) {
        var n = "mmenu",
            e = "counters";
        t[n].addons[e] = {
            setup: function() {
                var c = this,
                    o = this.opts[e];
                this.conf[e],
                    s = t[n].glbl,
                "boolean" == typeof o && (o = {
                    add: o,
                    update: o
                }),
                "object" != typeof o && (o = {}),
                    o = this.opts[e] = t.extend(!0, {},
                        t[n].defaults[e], o),
                    this.bind("init",
                        function(n) {
                            this.__refactorClass(t("em", n), this.conf.classNames[e].counter, "counter")
                        }),
                o.add && this.bind("init",
                    function(n) {
                        n.each(function() {
                            var n = t(this).data(a.parent);
                            n && (n.children("em." + i.counter).length || n.prepend(t('<em class="' + i.counter + '" />')))
                        })
                    }),
                o.update && this.bind("update",
                    function() {
                        this.$menu.find("." + i.panel).each(function() {
                            var n = t(this),
                                e = n.data(a.parent);
                            if (e) {
                                var s = e.children("em." + i.counter);
                                s.length && (n = n.children("." + i.listview), n.length && s.html(c.__filterListItems(n.children()).length))
                            }
                        })
                    })
            },
            add: function() {
                i = t[n]._c,
                    a = t[n]._d,
                    c = t[n]._e,
                    i.add("counter search noresultsmsg")
            },
            clickAnchor: function() {}
        },
            t[n].defaults[e] = {
                add: !1,
                update: !1
            },
            t[n].configuration.classNames[e] = {
                counter: "Counter"
            };
        var i, a, c, s
    } (jQuery);

!
    function(i) {
        var e = "mmenu",
            s = "dividers";
        i[e].addons[s] = {
            setup: function() {
                var n = this,
                    a = this.opts[s];
                if (this.conf[s], l = i[e].glbl, "boolean" == typeof a && (a = {
                        add: a,
                        fixed: a
                    }), "object" != typeof a && (a = {}), a = this.opts[s] = i.extend(!0, {},
                        i[e].defaults[s], a), this.bind("init",
                        function() {
                            this.__refactorClass(i("li", this.$menu), this.conf.classNames[s].collapsed, "collapsed")
                        }), a.add && this.bind("init",
                        function(e) {
                            switch (a.addTo) {
                                case "panels":
                                    var s = e;
                                    break;
                                default:
                                    var s = i(a.addTo, this.$menu).filter("." + d.panel)
                            }
                            i("." + d.divider, s).remove(),
                                s.find("." + d.listview).not("." + d.vertical).each(function() {
                                    var e = "";
                                    n.__filterListItems(i(this).children()).each(function() {
                                        var s = i.trim(i(this).children("a, span").text()).slice(0, 1).toLowerCase();
                                        s != e && s.length && (e = s, i('<li class="' + d.divider + '">' + s + "</li>").insertBefore(this))
                                    })
                                })
                        }), a.collapse && this.bind("init",
                        function(e) {
                            i("." + d.divider, e).each(function() {
                                var e = i(this),
                                    s = e.nextUntil("." + d.divider, "." + d.collapsed);
                                s.length && (e.children("." + d.subopen).length || (e.wrapInner("<span />"), e.prepend('<a href="#" class="' + d.subopen + " " + d.fullsubopen + '" />')))
                            })
                        }), a.fixed) {
                    var o = function(e) {
                        e = e || this.$menu.children("." + d.current);
                        var s = e.find("." + d.divider).not("." + d.hidden);
                        if (s.length) {
                            this.$menu.addClass(d.hasdividers);
                            var n = e.scrollTop() || 0,
                                t = "";
                            e.is(":visible") && e.find("." + d.divider).not("." + d.hidden).each(function() {
                                i(this).position().top + n < n + 1 && (t = i(this).text())
                            }),
                                this.$fixeddivider.text(t)
                        } else this.$menu.removeClass(d.hasdividers)
                    };
                    this.$fixeddivider = i('<ul class="' + d.listview + " " + d.fixeddivider + '"><li class="' + d.divider + '"></li></ul>').prependTo(this.$menu).children(),
                        this.bind("openPanel", o),
                        this.bind("init",
                            function(e) {
                                e.off(t.scroll + "-dividers " + t.touchmove + "-dividers").on(t.scroll + "-dividers " + t.touchmove + "-dividers",
                                    function() {
                                        o.call(n, i(this))
                                    })
                            })
                }
            },
            add: function() {
                d = i[e]._c,
                    n = i[e]._d,
                    t = i[e]._e,
                    d.add("collapsed uncollapsed fixeddivider hasdividers"),
                    t.add("scroll")
            },
            clickAnchor: function(i, e) {
                if (this.opts[s].collapse && e) {
                    var n = i.parent();
                    if (n.is("." + d.divider)) {
                        var t = n.nextUntil("." + d.divider, "." + d.collapsed);
                        return n.toggleClass(d.opened),
                            t[n.hasClass(d.opened) ? "addClass": "removeClass"](d.uncollapsed),
                            !0
                    }
                }
                return ! 1
            }
        },
            i[e].defaults[s] = {
                add: !1,
                addTo: "panels",
                fixed: !1,
                collapse: !1
            },
            i[e].configuration.classNames[s] = {
                collapsed: "Collapsed"
            };
        var d, n, t, l
    } (jQuery);

!
    function(e) {
        function t(e, t, n) {
            return t > e && (e = t),
            e > n && (e = n),
                e
        }
        var n = "mmenu",
            o = "dragOpen";
        e[n].addons[o] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var i = this,
                        a = this.opts[o],
                        p = this.conf[o];
                    if (r = e[n].glbl, "boolean" == typeof a && (a = {
                            open: a
                        }), "object" != typeof a && (a = {}), a = this.opts[o] = e.extend(!0, {},
                            e[n].defaults[o], a), a.open) {
                        var d, f, c, u, h, l = {},
                            m = 0,
                            g = !1,
                            v = !1,
                            w = 0,
                            _ = 0;
                        switch (this.opts.offCanvas.position) {
                            case "left":
                            case "right":
                                l.events = "panleft panright",
                                    l.typeLower = "x",
                                    l.typeUpper = "X",
                                    v = "width";
                                break;
                            case "top":
                            case "bottom":
                                l.events = "panup pandown",
                                    l.typeLower = "y",
                                    l.typeUpper = "Y",
                                    v = "height"
                        }
                        switch (this.opts.offCanvas.position) {
                            case "right":
                            case "bottom":
                                l.negative = !0,
                                    u = function(e) {
                                        e >= r.$wndw[v]() - a.maxStartPos && (m = 1)
                                    };
                                break;
                            default:
                                l.negative = !1,
                                    u = function(e) {
                                        e <= a.maxStartPos && (m = 1)
                                    }
                        }
                        switch (this.opts.offCanvas.position) {
                            case "left":
                                l.open_dir = "right",
                                    l.close_dir = "left";
                                break;
                            case "right":
                                l.open_dir = "left",
                                    l.close_dir = "right";
                                break;
                            case "top":
                                l.open_dir = "down",
                                    l.close_dir = "up";
                                break;
                            case "bottom":
                                l.open_dir = "up",
                                    l.close_dir = "down"
                        }
                        switch (this.opts.offCanvas.zposition) {
                            case "front":
                                h = function() {
                                    return this.$menu
                                };
                                break;
                            default:
                                h = function() {
                                    return e("." + s.slideout)
                                }
                        }
                        var b = this.__valueOrFn(a.pageNode, this.$menu, r.$page);
                        "string" == typeof b && (b = e(b));
                        var y = new Hammer(b[0], a.vendors.hammer);
                        y.on("panstart",
                            function(e) {
                                u(e.center[l.typeLower]),
                                    r.$slideOutNodes = h(),
                                    g = l.open_dir
                            }).on(l.events + " panend",
                            function(e) {
                                m > 0 && e.preventDefault()
                            }).on(l.events,
                            function(e) {
                                if (d = e["delta" + l.typeUpper], l.negative && (d = -d), d != w && (g = d >= w ? l.open_dir: l.close_dir), w = d, w > a.threshold && 1 == m) {
                                    if (r.$html.hasClass(s.opened)) return;
                                    m = 2,
                                        i._openSetup(),
                                        i.trigger("opening"),
                                        r.$html.addClass(s.dragging),
                                        _ = t(r.$wndw[v]() * p[v].perc, p[v].min, p[v].max)
                                }
                                2 == m && (f = t(w, 10, _) - ("front" == i.opts.offCanvas.zposition ? _: 0), l.negative && (f = -f), c = "translate" + l.typeUpper + "(" + f + "px )", r.$slideOutNodes.css({
                                    "-webkit-transform": "-webkit-" + c,
                                    transform: c
                                }))
                            }).on("panend",
                            function() {
                                2 == m && (r.$html.removeClass(s.dragging), r.$slideOutNodes.css("transform", ""), i[g == l.open_dir ? "_openFinish": "close"]()),
                                    m = 0
                            })
                    }
                }
            },
            add: function() {
                return "function" != typeof Hammer || Hammer.VERSION < 2 ? (e[n].addons[o].setup = function() {},
                    void 0) : (s = e[n]._c, i = e[n]._d, a = e[n]._e, s.add("dragging"), void 0)
            },
            clickAnchor: function() {}
        },
            e[n].defaults[o] = {
                open: !1,
                maxStartPos: 100,
                threshold: 50,
                vendors: {
                    hammer: {}
                }
            },
            e[n].configuration[o] = {
                width: {
                    perc: .8,
                    min: 140,
                    max: 440
                },
                height: {
                    perc: .8,
                    min: 140,
                    max: 880
                }
            };
        var s, i, a, r
    } (jQuery);

!
    function(i) {
        var s = "mmenu",
            a = "fixedElements";
        i[s].addons[a] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    this.opts[a],
                        this.conf[a],
                        t = i[s].glbl;
                    var d = function(i) {
                        var s = this.conf.classNames[a].fixed;
                        this.__refactorClass(i.find("." + s), s, "fixed").appendTo(t.$body).addClass(n.slideout)
                    };
                    d.call(this, t.$page),
                        this.bind("setPage", d)
                }
            },
            add: function() {
                n = i[s]._c,
                    d = i[s]._d,
                    e = i[s]._e,
                    n.add("fixed")
            },
            clickAnchor: function() {}
        },
            i[s].configuration.classNames[a] = {
                fixed: "Fixed"
            };
        var n, d, e, t
    } (jQuery);

!
    function(e) {
        var n = "mmenu",
            t = "navbars",
            a = "navbar";
        e[n].addons[t] = {
            setup: function() {
                var c = this,
                    l = this.opts[t];
                this.conf[t],
                    i = e[n].glbl,
                "undefined" != typeof l && (l instanceof Array || (l = [l]), e.each(l,
                    function(o) {
                        var d = l[o];
                        "boolean" == typeof d && d && (d = {}),
                        "object" != typeof d && (d = {}),
                        "undefined" == typeof d.content && (d.content = ["prev", "title", "next"]),
                            d = e.extend(!0, {},
                                e[n].defaults[a], d);
                        var f = f = d.position || "top",
                            h = e('<div class="' + s.navbar + " " + s.navbar + "-" + f + '" />');
                        if (d.content instanceof Array) {
                            for (var v = e("<div />"), p = 0, u = !1, m = !1, b = 0, C = d.content.length; C > b; b++) {
                                switch (d.content[b]) {
                                    case "prev":
                                    case "next":
                                    case "close":
                                    case "title":
                                        u = !0
                                }
                                switch (d.content[b]) {
                                    case "prev":
                                        m = !0
                                }
                                switch (d.content[b]) {
                                    case "prev":
                                    case "next":
                                    case "close":
                                        h.addClass(s.hasbtns),
                                            v.append('<a class="' + s[d.content[b]] + " " + s.btn + '" href="#"></a>');
                                        break;
                                    case "title":
                                        p++,
                                            v.append('<a class="' + s.title + '"></a>');
                                        break;
                                    default:
                                        d.content[b] instanceof e || (d.content[b] = e(d.content[b])),
                                            c.__findAddBack(d.content[b], "a").each(function() {
                                                p++,
                                                    v.append(e(this))
                                            })
                                }
                            }
                            p > 1 && h.addClass(s.navbar + "-" + p),
                                v = v.html()
                        } else var v = d.content;
                        if (h.prependTo(c.$menu).append(v), c.$menu.addClass(s.hasnavbar + "-" + f), m && (c.$menu.addClass(s.hasnavbar), c.bind("init",
                                function(e) {
                                    e.removeClass(s.hasnavbar)
                                })), u) {
                            var x = h.find("." + s.title),
                                k = h.find("." + s.prev),
                                y = h.find("." + s.next),
                                A = h.find("." + s.close),
                                N = function(e) {
                                    e = e || c.$menu.children("." + s.current);
                                    var n = e.find("." + c.conf.classNames[t].panelTitle + "-" + f),
                                        a = e.find("." + c.conf.classNames[t].panelPrev + "-" + f),
                                        i = e.find("." + c.conf.classNames[t].panelNext + "-" + f),
                                        l = e.data(r.parent),
                                        o = n.html(),
                                        h = a.attr("href"),
                                        v = i.attr("href"),
                                        p = !1,
                                        u = a.html(),
                                        m = i.html();
                                    switch (o || (o = e.children("." + s.navbar).children("." + s.title).html()), o || (o = d.title), h || (h = e.children("." + s.navbar).children("." + s.prev).attr("href")), d.titleLink) {
                                        case "anchor":
                                            var p = l ? l.children("a").not("." + s.next).attr("href") : !1;
                                            break;
                                        case "panel":
                                            var p = h
                                    }
                                    x[p ? "attr": "removeAttr"]("href", p),
                                        x[o ? "removeClass": "addClass"](s.hidden),
                                        x.html(o),
                                        k[h ? "attr": "removeAttr"]("href", h),
                                        k[h || u ? "removeClass": "addClass"](s.hidden),
                                        k.html(u),
                                        y[v ? "attr": "removeAttr"]("href", v),
                                        y[v || m ? "removeClass": "addClass"](s.hidden),
                                        y.html(m)
                                };
                            if (c.bind("openPanel", N), c.bind("init",
                                    function() {
                                        N.call(c, c.$menu.children("." + s.current))
                                    }), c.opts.offCanvas) {
                                var $ = function(e) {
                                    A.attr("href", "#" + e.attr("id"))
                                };
                                $.call(c, i.$page),
                                    c.bind("setPage", $)
                            }
                        }
                    }))
            },
            add: function() {
                s = e[n]._c,
                    r = e[n]._d,
                    c = e[n]._e,
                    s.add("close hasbtns")
            },
            clickAnchor: function() {}
        },
            e[n].defaults[a] = {
                position: "top",
                title: "Menu",
                titleLink: "panel"
            },
            e[n].configuration.classNames[t] = {
                panelTitle: "Title",
                panelNext: "Next",
                panelPrev: "Prev"
            };
        var s, r, c, i
    } (jQuery);

!
    function(e) {
        function s(e) {
            switch (e) {
                case 9:
                case 16:
                case 17:
                case 18:
                case 37:
                case 38:
                case 39:
                case 40:
                    return ! 0
            }
            return ! 1
        }
        var a = "mmenu",
            n = "searchfield";
        e[a].addons[n] = {
            setup: function() {
                var o = this,
                    d = this.opts[n],
                    c = this.conf[n];
                r = e[a].glbl,
                "boolean" == typeof d && (d = {
                    add: d,
                    search: d
                }),
                "object" != typeof d && (d = {}),
                    d = this.opts[n] = e.extend(!0, {},
                        e[a].defaults[n], d),
                    this.bind("init",
                        function(a) {
                            if (d.add) {
                                switch (d.addTo) {
                                    case "menu":
                                        var n = this.$menu;
                                        break;
                                    case "panels":
                                        var n = a;
                                        break;
                                    default:
                                        var n = e(d.addTo, this.$menu).filter("." + t.panel)
                                }
                                n.each(function() {
                                    var s = e(this);
                                    if (!s.is("." + t.panel) || !s.is("." + t.vertical)) {
                                        if (!s.children("." + t.search).length) {
                                            var a = c.form ? "form": "div",
                                                n = e("<" + a + ' class="' + t.search + '" />');
                                            if (c.form && "object" == typeof c.form) for (var l in c.form) n.attr(l, c.form[l]);
                                            n.append('<h3 id="logo1"></h3>').prependTo(s),
                                                s.addClass(t.hassearch)
                                        }
                                        if (d.noResults && (s.is("." + t.menu) && (s = s.children("." + t.panel).first()), !s.children("." + t.noresultsmsg).length)) {
                                            var i = s.children("." + t.listview);
                                            e('<div class="' + t.noresultsmsg + '" />').append(d.noResults)[i.length ? "insertBefore": "prependTo"](i.length ? i: s)
                                        }
                                    }
                                })
                            }
                            d.search && e("." + t.search, this.$menu).each(function() {
                                var a = e(this);
                                if ("menu" == d.addTo) var n = e("." + t.panel, o.$menu),
                                    r = o.$menu;
                                else var n = a.closest("." + t.panel),
                                    r = n;
                                var c = a.children("input"),
                                    h = o.__findAddBack(n, "." + t.listview).children("li"),
                                    u = h.filter("." + t.divider),
                                    f = o.__filterListItems(h),
                                    p = "> a",
                                    v = p + ", > span",
                                    m = function() {
                                        var s = c.val().toLowerCase();
                                        n.scrollTop(0),
                                            f.add(u).addClass(t.hidden).find("." + t.fullsubopensearch).removeClass(t.fullsubopen).removeClass(t.fullsubopensearch),
                                            f.each(function() {
                                                var a = e(this),
                                                    n = p; (d.showTextItems || d.showSubPanels && a.find("." + t.next)) && (n = v),
                                                e(n, a).text().toLowerCase().indexOf(s) > -1 && a.add(a.prevAll("." + t.divider).first()).removeClass(t.hidden)
                                            }),
                                        d.showSubPanels && n.each(function() {
                                            var s = e(this);
                                            o.__filterListItems(s.find("." + t.listview).children()).each(function() {
                                                var s = e(this),
                                                    a = s.data(l.sub);
                                                s.removeClass(t.nosubresults),
                                                a && a.find("." + t.listview).children().removeClass(t.hidden)
                                            })
                                        }),
                                            e(n.get().reverse()).each(function(s) {
                                                var a = e(this),
                                                    n = a.data(l.parent);
                                                n && (o.__filterListItems(a.find("." + t.listview).children()).length ? (n.hasClass(t.hidden) && n.children("." + t.next).not("." + t.fullsubopen).addClass(t.fullsubopen).addClass(t.fullsubopensearch), n.removeClass(t.hidden).removeClass(t.nosubresults).prevAll("." + t.divider).first().removeClass(t.hidden)) : "menu" == d.addTo && (a.hasClass(t.opened) && setTimeout(function() {
                                                        o.openPanel(n.closest("." + t.panel))
                                                    },
                                                    1.5 * (s + 1) * o.conf.openingInterval), n.addClass(t.nosubresults)))
                                            }),
                                            r[f.not("." + t.hidden).length ? "removeClass": "addClass"](t.noresults),
                                            this.update()
                                    };
                                c.off(i.keyup + "-searchfield " + i.change + "-searchfield").on(i.keyup + "-searchfield",
                                    function(e) {
                                        s(e.keyCode) || m.call(o)
                                    }).on(i.change + "-searchfield",
                                    function() {
                                        m.call(o)
                                    })
                            })
                        })
            },
            add: function() {
                t = e[a]._c,
                    l = e[a]._d,
                    i = e[a]._e,
                    t.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"),
                    i.add("change keyup")
            },
            clickAnchor: function() {}
        },
            e[a].defaults[n] = {
                add: !1,
                addTo: "menu",
                search: !1,
                placeholder: "Search",
                noResults: "No results found.",
                showTextItems: !1,
                showSubPanels: !0
            },
            e[a].configuration[n] = {
                form: !1
            };
        var t, l, i, r
    } (jQuery);

!
    function(e) {
        var a = "mmenu",
            r = "sectionIndexer";
        e[a].addons[r] = {
            setup: function() {
                var n = this,
                    s = this.opts[r];
                this.conf[r],
                    d = e[a].glbl,
                "boolean" == typeof s && (s = {
                    add: s
                }),
                "object" != typeof s && (s = {}),
                    s = this.opts[r] = e.extend(!0, {},
                        e[a].defaults[r], s),
                    this.bind("init",
                        function(a) {
                            if (s.add) {
                                switch (s.addTo) {
                                    case "panels":
                                        var r = a;
                                        break;
                                    default:
                                        var r = e(s.addTo, this.$menu).filter("." + i.panel)
                                }
                                r.find("." + i.divider).closest("." + i.panel).addClass(i.hasindexer)
                            }
                            if (!this.$indexer && this.$menu.children("." + i.hasindexer).length) {
                                this.$indexer = e('<div class="' + i.indexer + '" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a><a href="##">#</a>'),
                                    this.$indexer.children().on(h.mouseover + "-searchfield " + i.touchmove + "-searchfield",
                                        function() {
                                            var a = e(this).attr("href").slice(1),
                                                r = n.$menu.children("." + i.current),
                                                h = r.find("." + i.listview),
                                                d = !1,
                                                s = r.scrollTop(),
                                                t = h.position().top + parseInt(h.css("margin-top"), 10) + parseInt(h.css("padding-top"), 10) + s;
                                            r.scrollTop(0),
                                                h.children("." + i.divider).not("." + i.hidden).each(function() {
                                                    d === !1 && a == e(this).text().slice(0, 1).toLowerCase() && (d = e(this).position().top + t)
                                                }),
                                                r.scrollTop(d !== !1 ? d: s)
                                        });
                                var d = function(e) {
                                    n.$menu[(e.hasClass(i.hasindexer) ? "add": "remove") + "Class"](i.hasindexer)
                                };
                                this.bind("openPanel", d),
                                    d.call(this, this.$menu.children("." + i.current))
                            }
                        })
            },
            add: function() {
                i = e[a]._c,
                    n = e[a]._d,
                    h = e[a]._e,
                    i.add("indexer hasindexer"),
                    h.add("mouseover touchmove")
            },
            clickAnchor: function(e) {
                return e.parent().is("." + i.indexer) ? !0 : void 0
            }
        },
            e[a].defaults[r] = {
                add: !1,
                addTo: "panels"
            };
        var i, n, h, d
    } (jQuery);

!
    function(t) {
        var e = "mmenu",
            c = "toggles";
        t[e].addons[c] = {
            setup: function() {
                var n = this;
                this.opts[c],
                    this.conf[c],
                    l = t[e].glbl,
                    this.bind("init",
                        function(e) {
                            this.__refactorClass(t("input", e), this.conf.classNames[c].toggle, "toggle"),
                                this.__refactorClass(t("input", e), this.conf.classNames[c].check, "check"),
                                t("input." + s.toggle + ", input." + s.check, e).each(function() {
                                    var e = t(this),
                                        c = e.closest("li"),
                                        i = e.hasClass(s.toggle) ? "toggle": "check",
                                        l = e.attr("id") || n.__getUniqueId();
                                    c.children('label[for="' + l + '"]').length || (e.attr("id", l), c.prepend(e), t('<label for="' + l + '" class="' + s[i] + '"></label>').insertBefore(c.children("a, span").last()))
                                })
                        })
            },
            add: function() {
                s = t[e]._c,
                    n = t[e]._d,
                    i = t[e]._e,
                    s.add("toggle check")
            },
            clickAnchor: function() {}
        },
            t[e].configuration.classNames[c] = {
                toggle: "Toggle",
                check: "Check"
            };
        var s, n, i, l
    } (jQuery);



;(function($){

    var plugin = {};

    var defaults = {
        mode: 'horizontal',
        slideSelector: '',
        infiniteLoop: true,
        hideControlOnEnd: false,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        captions: false,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: false,
        adaptiveHeightSpeed: 500,
        video: false,
        useCSS: true,
        preloadImages: 'visible',
        responsive: true,
        slideZIndex: 50,
        wrapperClass: 'bx-wrapper',
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,

        pager: true,
        pagerType: 'full',
        pagerShortSeparator: ' / ',
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,

        controls: true,
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: 'Start',
        stopText: 'Stop',
        autoControlsCombine: false,
        autoControlsSelector: null,

        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: 'next',
        autoHover: false,
        autoDelay: 0,
        autoSlideForOnePage: false,

        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,

        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    }

    $.fn.bxSlider = function(options){

        if(this.length == 0) return this;

        if(this.length > 1){
            this.each(function(){$(this).bxSlider(options)});
            return this;
        }

        var slider = {};
        var el = this;
        plugin.el = this;

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();


        var init = function(){
            slider.settings = $.extend({}, defaults, options);
            slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
            slider.children = el.children(slider.settings.slideSelector);
            if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
            if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
            if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
            slider.active = { index: slider.settings.startSlide }
            slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
            if(slider.carousel) slider.settings.preloadImages = 'all';
            slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
            slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
            slider.working = false;
            slider.controls = {};
            slider.interval = null;
            slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
            slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
                var div = document.createElement('div');
                var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                for(var i in props){
                    if(div.style[props[i]] !== undefined){
                        slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
                        slider.animProp = '-' + slider.cssPrefix + '-transform';
                        return true;
                    }
                }
                return false;
            }());
            if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
            el.data("origStyle", el.attr("style"));
            el.children(slider.settings.slideSelector).each(function() {
                $(this).data("origStyle", $(this).attr("style"));
            });
            setup();
        }

        var setup = function(){
            el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
            slider.viewport = el.parent();
            slider.loader = $('<div class="bx-loading" />');
            slider.viewport.prepend(slider.loader);
            el.css({
                width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
                position: 'relative'
            });
            if(slider.usingCSS && slider.settings.easing){
                el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
            }else if(!slider.settings.easing){
                slider.settings.easing = 'swing';
            }
            var slidesShowing = getNumberSlidesShowing();
            slider.viewport.css({
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
            });
            slider.viewport.parent().css({
                maxWidth: getViewportMaxWidth()
            });
            if(!slider.settings.pager) {
                slider.viewport.parent().css({
                    margin: '0 auto 0px'
                });
            }
            slider.children.css({
                'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
                listStyle: 'none',
                position: 'relative'
            });
            slider.children.css('width', getSlideWidth());
            if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
            if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
            if(slider.settings.mode == 'fade'){
                slider.children.css({
                    position: 'absolute',
                    zIndex: 0,
                    display: 'none'
                });
                slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
            }
            slider.controls.el = $('<div class="bx-controls" />');
            if(slider.settings.captions) appendCaptions();
            slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
            if(slider.settings.video) el.fitVids();
            var preloadSelector = slider.children.eq(slider.settings.startSlide);
            if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
            if(!slider.settings.ticker){
                if(slider.settings.pager) appendPager();
                if(slider.settings.controls) appendControls();
                if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
                if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
            }else{
                slider.settings.pager = false;
            }
            loadElements(preloadSelector, start);
        }

        var loadElements = function(selector, callback){
            var total = selector.find('img, iframe').length;
            if (total == 0){
                callback();
                return;
            }
            var count = 0;
            selector.find('img, iframe').each(function(){
                $(this).one('load', function() {
                    if(++count == total) callback();
                }).each(function() {
                    if(this.complete) $(this).load();
                });
            });
        }

        var start = function(){
            if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
                var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
                var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
                var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
                el.append(sliceAppend).prepend(slicePrepend);
            }
            slider.loader.remove();
            setSlidePosition();
            if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
            slider.viewport.height(getViewportHeight());
            el.redrawSlider();
            slider.settings.onSliderLoad(slider.active.index);
            slider.initialized = true;
            if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
            if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
            if (slider.settings.ticker) initTicker();
            if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
            if (slider.settings.controls) updateDirectionControls();
            if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
        }

        var getViewportHeight = function(){
            var height = 0;
            var children = $();
            if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
                children = slider.children;
            }else{
                if(!slider.carousel){
                    children = slider.children.eq(slider.active.index);
                }else{
                    var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
                    children = slider.children.eq(currentIndex);
                    for (i = 1; i <= slider.settings.maxSlides - 1; i++){
                        if(currentIndex + i >= slider.children.length){
                            children = children.add(slider.children.eq(i - 1));
                        }else{
                            children = children.add(slider.children.eq(currentIndex + i));
                        }
                    }
                }
            }
            if(slider.settings.mode == 'vertical'){
                children.each(function(index) {
                    height += $(this).outerHeight();
                });
                if(slider.settings.slideMargin > 0){
                    height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
                }
            }else{
                height = Math.max.apply(Math, children.map(function(){
                    return $(this).outerHeight(false);
                }).get());
            }

            if(slider.viewport.css('box-sizing') == 'border-box'){
                height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
                    parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
            }else if(slider.viewport.css('box-sizing') == 'padding-box'){
                height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
            }

            return height;
        }

        var getViewportMaxWidth = function(){
            var width = '100%';
            if(slider.settings.slideWidth > 0){
                if(slider.settings.mode == 'horizontal'){
                    width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
                }else{
                    width = slider.settings.slideWidth;
                }
            }
            return width;
        }

        var getSlideWidth = function(){
            var newElWidth = slider.settings.slideWidth;
            var wrapWidth = slider.viewport.width();
            if(slider.settings.slideWidth == 0 ||
                (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
                slider.settings.mode == 'vertical'){
                newElWidth = wrapWidth;
            }else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
                if(wrapWidth > slider.maxThreshold){
                }else if(wrapWidth < slider.minThreshold){
                    newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
                }
            }
            return newElWidth;
        }

        var getNumberSlidesShowing = function(){
            var slidesShowing = 1;
            if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
                if(slider.viewport.width() < slider.minThreshold){
                    slidesShowing = slider.settings.minSlides;
                }else if(slider.viewport.width() > slider.maxThreshold){
                    slidesShowing = slider.settings.maxSlides;
                }else{
                    var childWidth = slider.children.first().width() + slider.settings.slideMargin;
                    slidesShowing = Math.floor((slider.viewport.width() +
                        slider.settings.slideMargin) / childWidth);
                }
            }else if(slider.settings.mode == 'vertical'){
                slidesShowing = slider.settings.minSlides;
            }
            return slidesShowing;
        }

        var getPagerQty = function(){
            var pagerQty = 0;
            if(slider.settings.moveSlides > 0){
                if(slider.settings.infiniteLoop){
                    pagerQty = Math.ceil(slider.children.length / getMoveBy());
                }else{
                    var breakPoint = 0;
                    var counter = 0
                    while (breakPoint < slider.children.length){
                        ++pagerQty;
                        breakPoint = counter + getNumberSlidesShowing();
                        counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
                    }
                }
            }else{
                pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
            }
            return pagerQty;
        }

        var getMoveBy = function(){
            if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
                return slider.settings.moveSlides;
            }
            return getNumberSlidesShowing();
        }

        var setSlidePosition = function(){
            if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
                if (slider.settings.mode == 'horizontal'){
                    var lastChild = slider.children.last();
                    var position = lastChild.position();
                    setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
                }else if(slider.settings.mode == 'vertical'){
                    var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                    var position = slider.children.eq(lastShowingIndex).position();
                    setPositionProperty(-position.top, 'reset', 0);
                }
            }else{
                var position = slider.children.eq(slider.active.index * getMoveBy()).position();
                if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
                if (position != undefined){
                    if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
                    else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
                }
            }
        }

        var setPositionProperty = function(value, type, duration, params){
            if(slider.usingCSS){
                var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
                el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
                if(type == 'slide'){
                    el.css(slider.animProp, propValue);
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
                        el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                        updateAfterSlideTransition();
                    });
                }else if(type == 'reset'){
                    el.css(slider.animProp, propValue);
                }else if(type == 'ticker'){
                    el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
                    el.css(slider.animProp, propValue);
                    el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
                        el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                        setPositionProperty(params['resetValue'], 'reset', 0);
                        tickerLoop();
                    });
                }
            }else{
                var animateObj = {};
                animateObj[slider.animProp] = value;
                if(type == 'slide'){
                    el.animate(animateObj, duration, slider.settings.easing, function(){
                        updateAfterSlideTransition();
                    });
                }else if(type == 'reset'){
                    el.css(slider.animProp, value)
                }else if(type == 'ticker'){
                    el.animate(animateObj, speed, 'linear', function(){
                        setPositionProperty(params['resetValue'], 'reset', 0);
                        tickerLoop();
                    });
                }
            }
        }

        var populatePager = function(){
            var pagerHtml = '';
            var pagerQty = getPagerQty();
            for(var i=0; i < pagerQty; i++){
                var linkContent = '';
                if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
                    linkContent = slider.settings.buildPager(i);
                    slider.pagerEl.addClass('bx-custom-pager');
                }else{
                    linkContent = i + 1;
                    slider.pagerEl.addClass('bx-default-pager');
                }
                pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
            };
            slider.pagerEl.html(pagerHtml);
        }

        var appendPager = function(){
            if(!slider.settings.pagerCustom){
                slider.pagerEl = $('<div class="bx-pager" />');
                if(slider.settings.pagerSelector){
                    $(slider.settings.pagerSelector).html(slider.pagerEl);
                }else{
                    slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
                }
                populatePager();
            }else{
                slider.pagerEl = $(slider.settings.pagerCustom);
            }
            slider.pagerEl.on('touchstart', 'a', clickPagerBind);
        }

        var appendControls = function(){
            slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
            slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
            slider.controls.next.bind('touchstart', clickNextBind);
            slider.controls.prev.bind('touchstart', clickPrevBind);
            if(slider.settings.nextSelector){
                $(slider.settings.nextSelector).append(slider.controls.next);
            }
            if(slider.settings.prevSelector){
                $(slider.settings.prevSelector).append(slider.controls.prev);
            }
            if(!slider.settings.nextSelector && !slider.settings.prevSelector){
                slider.controls.directionEl = $('<div class="bx-controls-direction" />');
                slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
                slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
            }
        }

        var appendControlsAuto = function(){
            slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
            slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
            slider.controls.autoEl = $('<div class="bx-controls-auto" />');
            slider.controls.autoEl.on('touchstart', '.bx-start', clickStartBind);
            slider.controls.autoEl.on('touchstart', '.bx-stop', clickStopBind);
            if(slider.settings.autoControlsCombine){
                slider.controls.autoEl.append(slider.controls.start);
            }else{
                slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
            }
            if(slider.settings.autoControlsSelector){
                $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
            }else{
                slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
            }
            updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
        }

        var appendCaptions = function(){
            slider.children.each(function(index){
                var title = $(this).find('img:first').attr('title');
                if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
            });
        }

        var clickNextBind = function(e){
            if (slider.settings.auto) el.stopAuto();
            el.goToNextSlide();
            e.preventDefault();
        }

        var clickPrevBind = function(e){
            if (slider.settings.auto) el.stopAuto();
            el.goToPrevSlide();
            e.preventDefault();
        }

        var clickStartBind = function(e){
            el.startAuto();
            e.preventDefault();
        }

        var clickStopBind = function(e){
            el.stopAuto();
            e.preventDefault();
        }

        var clickPagerBind = function(e){
            if (slider.settings.auto) el.stopAuto();
            var pagerLink = $(e.currentTarget);
            if(pagerLink.attr('data-slide-index') !== undefined){
                var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
                if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
                e.preventDefault();
            }
        }

        var updatePagerActive = function(slideIndex){
            var len = slider.children.length;
            if(slider.settings.pagerType == 'short'){
                if(slider.settings.maxSlides > 1) {
                    len = Math.ceil(slider.children.length/slider.settings.maxSlides);
                }
                slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
                return;
            }
            slider.pagerEl.find('a').removeClass('active');
            slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
        }

        var updateAfterSlideTransition = function(){
            if(slider.settings.infiniteLoop){
                var position = '';
                if(slider.active.index == 0){
                    position = slider.children.eq(0).position();
                }else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
                    position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
                }else if(slider.active.index == slider.children.length - 1){
                    position = slider.children.eq(slider.children.length - 1).position();
                }
                if(position){
                    if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
                    else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
                }
            }
            slider.working = false;
            slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        }

        var updateAutoControls = function(state){
            if(slider.settings.autoControlsCombine){
                slider.controls.autoEl.html(slider.controls[state]);
            }else{
                slider.controls.autoEl.find('a').removeClass('active');
                slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
            }
        }

        var updateDirectionControls = function(){
            if(getPagerQty() == 1){
                slider.controls.prev.addClass('disabled');
                slider.controls.next.addClass('disabled');
            }else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
                if (slider.active.index == 0){
                    slider.controls.prev.addClass('disabled');
                    slider.controls.next.removeClass('disabled');
                }else if(slider.active.index == getPagerQty() - 1){
                    slider.controls.next.addClass('disabled');
                    slider.controls.prev.removeClass('disabled');
                }else{
                    slider.controls.prev.removeClass('disabled');
                    slider.controls.next.removeClass('disabled');
                }
            }
        }

        var initAuto = function(){
            if(slider.settings.autoDelay > 0){
                var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
            }else{
                el.startAuto();
            }
            if(slider.settings.autoHover){
                el.hover(function(){
                    if(slider.interval){
                        el.stopAuto(true);
                        slider.autoPaused = true;
                    }
                }, function(){
                    if(slider.autoPaused){
                        el.startAuto(true);
                        slider.autoPaused = null;
                    }
                });
            }
        }

        var initTicker = function(){
            var startPosition = 0;
            if(slider.settings.autoDirection == 'next'){
                el.append(slider.children.clone().addClass('bx-clone'));
            }else{
                el.prepend(slider.children.clone().addClass('bx-clone'));
                var position = slider.children.first().position();
                startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
            }
            setPositionProperty(startPosition, 'reset', 0);
            slider.settings.pager = false;
            slider.settings.controls = false;
            slider.settings.autoControls = false;
            if(slider.settings.tickerHover && !slider.usingCSS){
                slider.viewport.hover(function(){
                    el.stop();
                }, function(){
                    var totalDimens = 0;
                    slider.children.each(function(index){
                        totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
                    });
                    var ratio = slider.settings.speed / totalDimens;
                    var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
                    var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
                    tickerLoop(newSpeed);
                });
            }
            tickerLoop();
        }

        var tickerLoop = function(resumeSpeed){
            speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
            var position = {left: 0, top: 0};
            var reset = {left: 0, top: 0};
            if(slider.settings.autoDirection == 'next'){
                position = el.find('.bx-clone').first().position();
            }else{
                reset = slider.children.first().position();
            }
            var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
            var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
            var params = {resetValue: resetValue};
            setPositionProperty(animateProperty, 'ticker', speed, params);
        }

        var initTouch = function(){
            slider.touch = {
                start: {x: 0, y: 0},
                end: {x: 0, y: 0}
            }
            slider.viewport.bind('touchstart', onTouchStart);
        }

        var onTouchStart = function(e){
            if(slider.working){
                e.preventDefault();
            }else{
                slider.touch.originalPos = el.position();
                var orig = e.originalEvent;
                slider.touch.start.x = orig.changedTouches[0].pageX;
                slider.touch.start.y = orig.changedTouches[0].pageY;
                slider.viewport.bind('touchmove', onTouchMove);
                slider.viewport.bind('touchend', onTouchEnd);
            }
        }

        var onTouchMove = function(e){
            var orig = e.originalEvent;
            var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
            var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
            if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
                e.preventDefault();
            }else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
                e.preventDefault();
            }
            if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
                var value = 0;
                if(slider.settings.mode == 'horizontal'){
                    var change = orig.changedTouches[0].pageX - slider.touch.start.x;
                    value = slider.touch.originalPos.left + change;
                }else{
                    var change = orig.changedTouches[0].pageY - slider.touch.start.y;
                    value = slider.touch.originalPos.top + change;
                }
                setPositionProperty(value, 'reset', 0);
            }
        }

        var onTouchEnd = function(e){
            slider.viewport.unbind('touchmove', onTouchMove);
            var orig = e.originalEvent;
            var value = 0;
            slider.touch.end.x = orig.changedTouches[0].pageX;
            slider.touch.end.y = orig.changedTouches[0].pageY;
            if(slider.settings.mode == 'fade'){
                var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
                if(distance >= slider.settings.swipeThreshold){
                    slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
                    el.stopAuto();
                }
            }else{
                var distance = 0;
                if(slider.settings.mode == 'horizontal'){
                    distance = slider.touch.end.x - slider.touch.start.x;
                    value = slider.touch.originalPos.left;
                }else{
                    distance = slider.touch.end.y - slider.touch.start.y;
                    value = slider.touch.originalPos.top;
                }
                if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
                    setPositionProperty(value, 'reset', 200);
                }else{
                    // check if distance clears threshold
                    if(Math.abs(distance) >= slider.settings.swipeThreshold){
                        distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
                        el.stopAuto();
                    }else{
                        // el.animate(property, 200);
                        setPositionProperty(value, 'reset', 200);
                    }
                }
            }
            slider.viewport.unbind('touchend', onTouchEnd);
        }

        var resizeWindow = function(e){
            if(!slider.initialized) return;
            var windowWidthNew = $(window).width();
            var windowHeightNew = $(window).height();
            if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
                windowWidth = windowWidthNew;
                windowHeight = windowHeightNew;
                el.redrawSlider();
                slider.settings.onSliderResize.call(el, slider.active.index);
            }
        }

        el.goToSlide = function(slideIndex, direction){
            if(slider.working || slider.active.index == slideIndex) return;
            slider.working = true;
            slider.oldIndex = slider.active.index;
            if(slideIndex < 0){
                slider.active.index = getPagerQty() - 1;
            }else if(slideIndex >= getPagerQty()){
                slider.active.index = 0;
            }else{
                slider.active.index = slideIndex;
            }
            slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            if(direction == 'next'){
                slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            }else if(direction == 'prev'){
                slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
            }
            slider.active.last = slider.active.index >= getPagerQty() - 1;
            if(slider.settings.pager) updatePagerActive(slider.active.index);
            if(slider.settings.controls) updateDirectionControls();
            if(slider.settings.mode == 'fade'){
                if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
                slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
                    $(this).css('zIndex', slider.settings.slideZIndex);
                    updateAfterSlideTransition();
                });
            }else{
                if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
                    slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
                }
                var moveBy = 0;
                var position = {left: 0, top: 0};
                if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
                    if(slider.settings.mode == 'horizontal'){
                        var lastChild = slider.children.eq(slider.children.length - 1);
                        position = lastChild.position();
                        moveBy = slider.viewport.width() - lastChild.outerWidth();
                    }else{
                        var lastShowingIndex = slider.children.length - slider.settings.minSlides;
                        position = slider.children.eq(lastShowingIndex).position();
                    }
                }else if(slider.carousel && slider.active.last && direction == 'prev'){
                    var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
                    var lastChild = el.children('.bx-clone').eq(eq);
                    position = lastChild.position();
                }else if(direction == 'next' && slider.active.index == 0){
                    position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
                    slider.active.last = false;
                }else if(slideIndex >= 0){
                    var requestEl = slideIndex * getMoveBy();
                    position = slider.children.eq(requestEl).position();
                }

                if ("undefined" !== typeof(position)) {
                    var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
                    setPositionProperty(value, 'slide', slider.settings.speed);
                }
            }
        }

        el.goToNextSlide = function(){
            if (!slider.settings.infiniteLoop && slider.active.last) return;
            var pagerIndex = parseInt(slider.active.index) + 1;
            el.goToSlide(pagerIndex, 'next');
        }

        el.goToPrevSlide = function(){
            if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
            var pagerIndex = parseInt(slider.active.index) - 1;
            el.goToSlide(pagerIndex, 'prev');
        }

        el.startAuto = function(preventControlUpdate){
            if(slider.interval) return;
            slider.interval = setInterval(function(){
                slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
            }, slider.settings.pause);
            if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
        }

        el.stopAuto = function(preventControlUpdate){
            if(!slider.interval) return;
            clearInterval(slider.interval);
            slider.interval = null;
            if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
        }

        el.getCurrentSlide = function(){
            return slider.active.index;
        }

        el.getCurrentSlideElement = function(){
            return slider.children.eq(slider.active.index);
        }

        el.getSlideCount = function(){
            return slider.children.length;
        }

        el.redrawSlider = function(){
            slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
            slider.viewport.css('height', getViewportHeight());
            if(!slider.settings.ticker) setSlidePosition();
            if (slider.active.last) slider.active.index = getPagerQty() - 1;
            if (slider.active.index >= getPagerQty()) slider.active.last = true;
            if(slider.settings.pager && !slider.settings.pagerCustom){
                populatePager();
                updatePagerActive(slider.active.index);
            }
        }

        el.destroySlider = function(){
            if(!slider.initialized) return;
            slider.initialized = false;
            $('.bx-clone', this).remove();
            slider.children.each(function() {
                $(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
            });
            $(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
            $(this).unwrap().unwrap();
            if(slider.controls.el) slider.controls.el.remove();
            if(slider.controls.next) slider.controls.next.remove();
            if(slider.controls.prev) slider.controls.prev.remove();
            if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
            $('.bx-caption', this).remove();
            if(slider.controls.autoEl) slider.controls.autoEl.remove();
            clearInterval(slider.interval);
            if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
        }

        el.reloadSlider = function(settings){
            if (settings != undefined) options = settings;
            el.destroySlider();
            init();
        }

        init();

        return this;
    }

})(jQuery);



;(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);










$(function() {
    $('nav#menu').mmenu({
        extensions	: [ 'effect-slide-menu', 'pageshadow' ],
        searchfield	: true,
        counters	: true,
    });

});
$(document).ready(function(e) {
    var img = $(".slider img")[0];
    function sliderChulaiba(){
        $('.slider').bxSlider({
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            auto: 1,
            speed:500,
        });
    }
    sliderChulaiba();
    $(".indexPage .ser-slider").bxSlider({
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',

    });


    if($.support.leadingWhitespace){
        new WOW({"scrollContainer":"#sitecontent",moblie:true}).init();
        $('[animation_hover]').hover(function () {
            $(this).addClass($(this).attr('animation_hover'));
        }, function () {
            $(this).removeClass($(this).attr('animation_hover'));
        });
    }

    $('.slide-list').bxSlider({
        speed:1000,
        auto: true,
        autoControls: true
    });
});
(function(doc, win) {
    var init_w = 640,
        init_fs = 10,
        max_scale = 1,
        min_scale = 1;
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            var percentage = clientWidth / init_w;
            percentage = percentage > max_scale ? max_scale : percentage < min_scale ? min_scale : percentage;

            docEl.style.fontSize = init_fs * percentage + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function(e) {
    $('.list_nav .dropmenu').each(function (index, element) {
        var $dropmenu = $(element);
        var $dropmenuActive = $(".active:last", $dropmenu);
        $('.cate-box .text', $dropmenu).text($dropmenuActive.text());
        $('.label .text', $dropmenu).text($dropmenuActive.text());
        var winH=$(window).height();
        $('.cate-box ul.transform').css({"height":winH+"px","padding":"0 0 70px"});
        $('.label', $dropmenu).on("touchstart", function (event) {
            event.preventDefault();
            if ($dropmenu.hasClass('open')) {
                $dropmenu.removeClass("open");

            }
            else {
                $($dropmenu).addClass("open");

            }
            ;
        });
        $('.pclose', $dropmenu).on("touchstart", function (event){
            $dropmenu.removeClass("open");
        });

        $('#sitecontent').css({"overflow-y":"scroll"});
    });
});






$(function(e) {
    $("a.backtop").click(function(){
        if($('#sitecontent').scrollTop()>0)
            $('#sitecontent').animate({scrollTop:0},1000);
    });

});