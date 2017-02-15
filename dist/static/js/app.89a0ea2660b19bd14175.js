webpackJsonp([13,15],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_manager__ = __webpack_require__(111);


let idSeed = 1

const getDOM = function (dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling
    getDOM(dom)
  }
  return dom
}

/* harmony default export */ __webpack_exports__["a"] = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    ClosezIndexStatic: { // 闭关的时候，zIndex是否不变，默认需要改变
      type: Boolean,
      default: false
    }
  },
  beforeMount() {

    this._popupId = 'popup-' + idSeed++;

    __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].register(this._popupId, this)

  },
  beforeDestroy() {

    __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].deregister(this._popupId)

    __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].closeModal(this._popupId)

  },
  data() {
    return {
      opened: false,
      rendered: false
    }
  },
  watch: {
    value(val) {

      console.log('popup-val:' + val)

      if (val) {
        if (!this.rendered) {
          this.rendered = true
          this.$nextTick(() => {
            this.open()
          })
        } else {
          this.open()
        }
      } else {
        this.close()
      }

    }
  },
  methods: {
    open() {

      if (!this.rendered) {
        this.rendered = true
      }
      this.doOpen()
    },
    doOpen() {

      if (this.opened) {
        return
      }

      this.$emit('input', true)

      const dom = getDOM(this.$el)

      const modal = this.modal

      if (modal) {
        __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].openModal(this._popupId, __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].nextZIndex(), dom)
      }

      dom.style.zIndex = __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].nextZIndex()

      this.opened = true

    },
    close() {
      this.doClose()
    },
    doClose() {

      if (!this.value) {
        return
      }

      this.value = false
      this.opened = false

      this.$emit('input', false)

      this.$nextTick(() => {

        this.$el.classList.add('modal-out')

        setTimeout(() => {
          if (!this.value) {
            if (!this.ClosezIndexStatic) {
              this.$el.style.zIndex = -1
            }
            this.$el.classList.remove('modal-out')
          }
        }, 400)

      })

      this.doAfterClose()

    },
    doAfterClose() {
      __WEBPACK_IMPORTED_MODULE_0__popup_manager__["a" /* default */].closeModal(this._popupId)
    }
  }

};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packages_page_pages_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packages_page_pages_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_packages_page_pages_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_packages_page_page_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_packages_page_page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_packages_page_page_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packages_page_panel_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_packages_page_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_packages_page_panel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_packages_page_content_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_packages_page_content_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_packages_page_content_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_packages_page_contentBlockTitle_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_packages_page_contentBlockTitle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_packages_page_contentBlockTitle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_packages_bar_barNav_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_packages_bar_barNav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_packages_bar_barNav_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_packages_bar_barTab_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_packages_bar_barTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_packages_bar_barTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_packages_button_button_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_packages_button_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_packages_button_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_packages_button_buttons_group_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_packages_button_buttons_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_packages_button_buttons_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_packages_button_buttons_tab_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_packages_button_buttons_tab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_packages_button_buttons_tab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_packages_tabs_tabsPane_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_packages_tabs_tabsPane_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_packages_tabs_tabsPane_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_packages_tabs_tabs_vue__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_packages_tabs_tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_packages_tabs_tabs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_packages_lists_listBlock_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_packages_lists_listBlock_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_packages_lists_listBlock_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_packages_lists_listBlockItem_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_packages_lists_listBlockItem_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_packages_lists_listBlockItem_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_packages_lists_listBlockItemMedia_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_packages_lists_listBlockItemMedia_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_packages_lists_listBlockItemMedia_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_packages_lists_listBlockItemInput_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_packages_lists_listBlockItemInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_packages_lists_listBlockItemInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_packages_card_card_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_packages_card_card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_packages_card_card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_packages_swiper_swiper_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_packages_swiper_swiper_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_packages_swiper_swiper_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_packages_iscroll_iscroll_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_packages_iscroll_iscroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_packages_iscroll_iscroll_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_packages_input_input_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_packages_input_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_packages_input_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_packages_input_switch_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_packages_input_switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_packages_input_switch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_packages_input_checkbox_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_packages_input_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_packages_input_checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_packages_modal_index__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_packages_preloader_index__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_packages_toast_index__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_packages_actions_index__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_packages_popup_popup_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_packages_popup_popup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_packages_popup_popup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_packages_device__ = __webpack_require__(109);








































var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) {
    return;
  }

  Vue.component(__WEBPACK_IMPORTED_MODULE_0_packages_page_pages_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0_packages_page_pages_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_1_packages_page_page_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_1_packages_page_page_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_2_packages_page_panel_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_2_packages_page_panel_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_4_packages_page_contentBlockTitle_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_4_packages_page_contentBlockTitle_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_5_packages_bar_barNav_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_5_packages_bar_barNav_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_6_packages_bar_barTab_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_6_packages_bar_barTab_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_3_packages_page_content_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_3_packages_page_content_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_7_packages_button_button_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_7_packages_button_button_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_8_packages_button_buttons_group_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_8_packages_button_buttons_group_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_9_packages_button_buttons_tab_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_9_packages_button_buttons_tab_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_10_packages_tabs_tabsPane_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_10_packages_tabs_tabsPane_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_11_packages_tabs_tabs_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_11_packages_tabs_tabs_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_12_packages_lists_listBlock_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_12_packages_lists_listBlock_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_13_packages_lists_listBlockItem_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_13_packages_lists_listBlockItem_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_14_packages_lists_listBlockItemMedia_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_14_packages_lists_listBlockItemMedia_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_15_packages_lists_listBlockItemInput_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_15_packages_lists_listBlockItemInput_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_16_packages_card_card_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_16_packages_card_card_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_17_packages_swiper_swiper_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_17_packages_swiper_swiper_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_18_packages_iscroll_iscroll_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_18_packages_iscroll_iscroll_vue___default.a);

  Vue.component(__WEBPACK_IMPORTED_MODULE_19_packages_input_input_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_19_packages_input_input_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_20_packages_input_switch_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_20_packages_input_switch_vue___default.a);
  Vue.component(__WEBPACK_IMPORTED_MODULE_21_packages_input_checkbox_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_21_packages_input_checkbox_vue___default.a);

  Vue.prototype.$modal = __WEBPACK_IMPORTED_MODULE_22_packages_modal_index__["a" /* default */];
  Vue.prototype.$alert = __WEBPACK_IMPORTED_MODULE_22_packages_modal_index__["a" /* default */].alert;
  Vue.prototype.$confirm = __WEBPACK_IMPORTED_MODULE_22_packages_modal_index__["a" /* default */].confirm;

  Vue.prototype.$confirm = __WEBPACK_IMPORTED_MODULE_22_packages_modal_index__["a" /* default */].confirm;

  Vue.prototype.$preloader = __WEBPACK_IMPORTED_MODULE_23_packages_preloader_index__["a" /* default */];

  Vue.prototype.$toast = __WEBPACK_IMPORTED_MODULE_24_packages_toast_index__["a" /* default */];

  Vue.prototype.$actions = __WEBPACK_IMPORTED_MODULE_25_packages_actions_index__["a" /* default */];

  Vue.component(__WEBPACK_IMPORTED_MODULE_26_packages_popup_popup_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_26_packages_popup_popup_vue___default.a);

  __WEBPACK_IMPORTED_MODULE_27_packages_device__["a" /* default */].init();
  Vue.prototype.$device = __WEBPACK_IMPORTED_MODULE_27_packages_device__["a" /* default */].device;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ __webpack_exports__["a"] = {
  version: '0.0.1',
  install: install
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(39)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-actions',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__popup__["a" /* default */]],
  props: {
    groups: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-bar-nav',
  props: {
    title: String,
    back: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-bar-tab',
  props: {
    nav: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    getIcon: function getIcon(icon) {
      return 'icon-' + icon;
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    fill: Boolean,
    round: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-buttons-group'
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-buttons-tab',
  props: {
    nav: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-card',
  props: {
    text: String,
    title: String,
    imgUrl: String,
    imgAlt: String
  }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-checkbox',
  props: {
    value: [String, Array],
    label: String
  },
  data: function data() {
    return {
      selfModel: false
    };
  },
  created: function created() {
    this.selfModel = this.value;
  }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-input',
  props: {
    value: [String, Number],
    placeholder: [String, Number],
    size: String,
    readonly: Boolean,
    autofocus: Boolean,
    icon: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    form: String,
    maxlength: Number,
    minlength: Number,
    max: {},
    min: {}
  },
  methods: {
    handleChange: function handleChange() {},
    handleFocus: function handleFocus(e) {
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.$emit('blur', e);
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-switch',

  props: {
    value: Boolean,
    label: String
  },
  data: function data() {
    return {
      selfModel: false
    };
  },

  computed: {
    model: {
      get: function get() {
        return this.selfModel;
      },
      set: function set(val) {
        if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = val;
        }
      }
    }
  },
  created: function created() {
    this.selfModel = this.value;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-iscroll',
  props: {
    startY: {
      type: Number,
      default: 0
    },
    pullToRefresh: Function,
    infiniteToRefresh: Function
  },
  data: function data() {
    return {
      showPTR: false,
      PTRClassName: [],
      pullToRefreshLoading: false,
      loading: false };
  },
  mounted: function mounted() {
    var _this = this;

    var self = this;

    self.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(self.$refs.iscroll, {
      probeType: 1
    });

    self.scroll.on('scroll', function (pos) {

      if (pos.y > 10) {
        self.showPTR = true;

        if (pos.y > 55) {
          self.PTRClassName = 'down';

          if (pos.y > 85) {
            self.PTRClassName = 'loading';
            self.pullToRefreshLoading = true;
          } else {
            self.PTRClassName = 'down';
            self.pullToRefreshLoading = false;
          }
        } else {
          self.PTRClassName = '';
          self.pullToRefreshLoading = false;
        }
      } else {
        self.showPTR = false;
        self.PTRClassName = '';

        if (pos.y <= -(self.$refs.iscrollContent.offsetHeight - self.$refs.iscroll.offsetHeight - 150)) {
          self.InfiniteToRefresh();
        }
      }
    });

    self.scroll.on('scrollEnd', function () {

      if (!self.pullToRefreshLoading) {
        self.showPTR = false;
        self.PTRClassName = '';
      } else {
        self.showPTR = true;
        self.PTRClassName = 'loading';

        _this.PullToRefresh();
      }
    });
  },
  destroyed: function destroyed() {
    self.scroll.destroy();
  },

  methods: {
    PullToRefresh: function PullToRefresh() {

      var self = this;

      if (self.loading) {
        return;
      }

      self.loading = true;

      self.pullToRefresh(function () {

        self.showPTR = false;
        self.PTRClassName = '';
        self.loading = false;

        self.$nextTick(function () {
          self.scroll.refresh();
        });
      });
    },
    InfiniteToRefresh: function InfiniteToRefresh() {
      var self = this;

      if (self.loading) {
        return;
      }

      self.loading = true;

      self.infiniteToRefresh(function () {
        self.loading = false;
        self.$nextTick(function () {
          self.scroll.refresh();
        });
      });
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-list-block',
  props: {
    isMedia: Boolean,
    isCheck: Boolean,
    isInset: Boolean
  }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-list-block-item',
  props: {
    title: String,
    after: String,
    icon: String,
    isLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hanlderClick: function hanlderClick(e) {
      this.$emit('click', e);
    }
  }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-list-block-item-input',
  props: {
    label: String,
    icon: String
  },
  methods: {
    hanlderClick: function hanlderClick(e) {
      this.$emit('click', e);
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-list-block-item-media',
  props: {
    title: String,
    subTitle: String,
    text: String,
    rightText: String,
    imgUrl: String,
    imgWidth: {
      type: String,
      default: '4rem'
    },
    link: String
  }
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-modal',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__popup__["a" /* default */]],
  props: {
    title: String,
    text: String,
    buttons: Array,
    verticalButtons: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Number,
      default: 0
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-content'
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-content-block-title',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h) {

    return h(this.tag, {
      'class': ['content-block-title']
    }, this.$slots.default);
  }
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-page'
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-pages',
  props: {
    panelopen: Boolean,
    paneldir: String
  },
  computed: {
    openRight: function openRight() {
      return this.paneldir == 'right' ? this.panelopen : false;
    },
    openLeft: function openLeft() {
      return this.paneldir == 'left' ? this.panelopen : false;
    }
  }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-panel'
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-popup',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var showInput = this.show;
    return {
      showInput: showInput
    };
  },

  watch: {
    show: function show(val) {

      var self = this;

      if (val) {

        self.showInput = val;

        self.$nextTick(function () {

          setTimeout(function () {
            self.$el.classList.add('modal-in');
          }, 0);
        });
      } else {

        self.$el.classList.remove('modal-in');
        self.$el.classList.add('modal-out');

        self.$nextTick(function () {

          setTimeout(function () {
            self.showInput = val;
            self.$el.classList.remove('modal-out');
          }, 400);
        });
      }
    }
  }
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-modal',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__popup__["a" /* default */]],
  props: {
    title: String,
    marginTop: {
      type: Number,
      default: 0
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-swiper',
  props: {
    imgList: Array,
    dots: {
      type: Boolean,
      default: false
    },
    snapLoop: {
      type: Boolean,
      default: false
    },
    snapSpeed: {
      type: Number,
      default: 400
    }
  },
  data: function data() {
    return {
      winWidth: 0,
      maxWidth: 0,
      imgIndex: 0
    };
  },
  mounted: function mounted() {

    var self = this;
    self.winWidth = window.innerWidth;
    self.maxWidth = (self.imgList.length + (self.snapLoop ? 2 : 0)) * self.winWidth;

    self.$nextTick(function () {

      self.imgs = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(self.$refs.imgs, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: self.snapLoop,
        snapSpeed: self.snapSpeed
      });

      self.imgs.on('scrollEnd', function () {
        self.imgIndex = self.imgs.getCurrentPage().pageX - (self.snapLoop ? 1 : 0);
      });
    });
  },
  destroyed: function destroyed() {
    self.imgs.destroy();
  }
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-tabs',
  props: {
    type: String,
    activeName: String
  },
  data: function data() {
    return {
      children: null,
      activeTab: null,
      currentName: '',
      panes: []
    };
  },

  watch: {
    activeName: {
      handler: function handler(val) {
        this.currentName = val;
      }
    }
  },
  methods: {
    handleTabClick: function handleTabClick(tab, event) {
      if (tab.disabled) {
        return;
      }
      this.currentName = tab.index;
      this.$emit('tab-click', tab, event);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.currentName = this.activeName || this.$children[0] && this.$children[0].index || '1';
    this.$nextTick(function () {
      _this.$forceUpdate();
    });
  },
  render: function render(h) {
    var _this2 = this;

    var type = this.type,
        panes = this.panes,
        handleTabRemove = this.handleTabRemove,
        handleTabClick = this.handleTabClick,
        currentName = this.currentName;


    var tabs = this.$children.map(function (tab, index) {

      var _tab = h('button', {
        class: ['tab-link', 'button', currentName === tab.index ? 'active' : ''],
        ref: 'tabs',
        refInFor: true,
        on: {
          click: function click(e) {
            handleTabClick(tab, e);
          }
        }
      }, [tab.labelContent ? tab.labelContent.call(_this2._renderProxy, h) : tab.label]);

      return _tab;
    });

    return h(
      'div',
      { 'class': 'tabs' },
      [h(
        'div',
        { 'class': 'buttons-tab' },
        [tabs]
      ), h(
        'div',
        { 'class': 'content-block' },
        [this.$slots.default]
      )]
    );
  }
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'ms-tab-pane',
  props: {
    label: String,
    name: String,
    labelContent: Function
  },
  computed: {
    show: function show() {
      return this.$parent.currentName === this.index;
    }
  },
  destroyed: function destroyed() {

    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    var panes = this.$parent.panes;

    if (panes) {
      panes.splice(this, panes.indexOf(this));
    }
  },

  watch: {
    name: {
      immediate: true,
      handler: function handler(val) {
        this.index = val;
      }
    }
  }
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(93),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(37)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(95),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(84),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(90),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(94),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(88),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(82),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(41)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(105),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(40)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(104),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(92),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(89),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(87),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(86),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(83),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(38)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(91),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(81),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(85),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "imgs",
    staticClass: "ms-swiper"
  }, [_c('ul', {
    staticClass: "imglist",
    style: ({
      width: _vm.maxWidth + 'px'
    })
  }, _vm._l((_vm.imgList), function(item) {
    return _c('li', {
      staticClass: "li-img",
      style: ({
        width: _vm.winWidth + 'px'
      })
    }, [_c('router-link', {
      attrs: {
        "to": item.link,
        "tag": !!item.link ? 'a' : 'div'
      }
    }, [_c('img', {
      attrs: {
        "src": item.imgUrl
      }
    })])], 1)
  })), _vm._v(" "), (_vm.dots) ? _c('ul', {
    staticClass: "dots"
  }, _vm._l((_vm.imgList), function(item, i) {
    return _c('li', {
      class: {
        active: i == _vm.imgIndex
      }
    })
  })) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "label-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.model),
      expression: "model"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.selfModel,
      "checked": Array.isArray(_vm.model) ? _vm._i(_vm.model, null) > -1 : (_vm.model)
    },
    on: {
      "change": function($event) {
        _vm.$emit('change', $event)
      },
      "click": function($event) {
        var $$a = _vm.model,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.model = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.model = $$c
        }
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  })])
},staticRenderFns: []}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-group",
    class: {
      'with-panel-right-reveal': _vm.openRight,
      'with-panel-left-reveal': _vm.openLeft
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "buttons-tab"
  }, _vm._l((_vm.nav), function(item) {
    return _c('button', {
      staticClass: "tab-link ms-button",
      class: {
        active: item.active
      },
      domProps: {
        "innerHTML": _vm._s(item.text)
      },
      on: {
        "click": _vm.handleClick
      }
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show && _vm.$slots.default),
      expression: "show && $slots.default"
    }],
    staticClass: "tab-pane"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page page-current"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal",
    class: {
      'modal-in': _vm.value
    },
    staticStyle: {
      "display": "block"
    },
    style: ({
      'margin-top': _vm.marginTop + 'px'
    })
  }, [_c('div', {
    staticClass: "modal-inner"
  }, [(_vm.title) ? _c('div', {
    staticClass: "modal-title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.text) ? _c('div', {
    staticClass: "modal-text",
    domProps: {
      "textContent": _vm._s(_vm.text)
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "modal-buttons",
    class: {
      'modal-buttons-vertical': _vm.verticalButtons
    }
  }, _vm._l((_vm.buttons), function(item) {
    return _c('span', {
      staticClass: "modal-button",
      class: {
        'modal-button-bold': item.bold
      },
      domProps: {
        "textContent": _vm._s(item.text)
      },
      on: {
        "click": item.onClick
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [
      _vm.type === 'textarea' ? 'ms-textarea' : 'ms-input',
      _vm.size ? 'ms-input--' + _vm.size : '',
      {
        'is-disabled': _vm.disabled
      }
    ]
  }, [(_vm.type != 'textarea') ? _c('input', {
    staticClass: "ms-input-el",
    attrs: {
      "type": _vm.type,
      "name": _vm.name,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled,
      "readonly": _vm.readonly,
      "maxlength": _vm.maxlength,
      "minlength": _vm.minlength,
      "autocomplete": _vm.autoComplete,
      "autofocus": _vm.autofocus,
      "min": _vm.min,
      "max": _vm.max,
      "form": _vm.form
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "change": _vm.handleChange,
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type === 'textarea') ? _c('textarea') : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "item-content"
  }, [(!!_vm.icon) ? _c('div', {
    staticClass: "item-media"
  }, [_c('i', {
    staticClass: "icon",
    class: ['icon-' + _vm.icon]
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "item-inner"
  }, [(!!_vm.label) ? _c('div', {
    staticClass: "item-title label",
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "item-input"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [(!!_vm.imgUrl) ? _c('div', {
    staticClass: "card-header color-white no-border no-padding",
    attrs: {
      "valign": "bottom"
    }
  }, [_c('img', {
    staticClass: "card-cover",
    attrs: {
      "src": _vm.imgUrl,
      "alt": _vm.imgAlt
    }
  })]) : _vm._e(), _vm._v(" "), (!!_vm.title) ? _c('div', {
    staticClass: "card-header",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [(!!_vm.imgAlt) ? _c('div', {
    staticClass: "card-content-inner"
  }, [_c('p', {
    staticClass: "color-gray",
    domProps: {
      "textContent": _vm._s(_vm.imgAlt)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.text)
    }
  })]) : _c('div', {
    staticClass: "card-content-inner",
    domProps: {
      "textContent": _vm._s(_vm.text)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_vm._t("footer")], 2)])
},staticRenderFns: []}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal modal-no-buttons",
    class: {
      'modal-in': _vm.value
    },
    staticStyle: {
      "display": "block"
    },
    style: ({
      'margin-top': _vm.marginTop + 'px'
    })
  }, [_c('div', {
    staticClass: "modal-inner"
  }, [(_vm.title) ? _c('div', {
    staticClass: "modal-title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }) : _vm._e(), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-text"
  }, [_c('div', {
    staticClass: "preloader"
  })])
}]}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "item-content",
    class: {
      'item-link': _vm.isLink
    },
    on: {
      "click": _vm.hanlderClick
    }
  }, [(!!_vm.icon) ? _c('div', {
    staticClass: "item-media"
  }, [_c('i', {
    staticClass: "icon",
    class: ['icon-' + _vm.icon]
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "item-after",
    domProps: {
      "textContent": _vm._s(_vm.after)
    }
  })])])
},staticRenderFns: []}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "actions-modal",
    class: {
      'modal-in': _vm.value
    }
  }, _vm._l((_vm.groups), function(group) {
    return _c('div', {
      staticClass: "actions-modal-group"
    }, _vm._l((group), function(item) {
      return _c('span', {
        class: [
          item.label ? 'actions-modal-label' : 'actions-modal-button',
          item.bold ? 'actions-modal-button-bold' : '',
          item.color ? 'color-' + item.color : '',
          item.bg ? 'bg-' + item.bg : ''
        ],
        domProps: {
          "textContent": _vm._s(item.text)
        },
        on: {
          "click": item.onClick
        }
      })
    }))
  }))
},staticRenderFns: []}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "label-checkbox"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selfModel),
      expression: "selfModel"
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.selfModel,
      "value": _vm.label,
      "checked": Array.isArray(_vm.selfModel) ? _vm._i(_vm.selfModel, _vm.label) > -1 : (_vm.selfModel)
    },
    on: {
      "change": function($event) {
        _vm.$emit('input', _vm.selfModel)
      },
      "click": function($event) {
        var $$a = _vm.selfModel,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.label,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.selfModel = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.selfModel = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.selfModel = $$c
        }
      }
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "icon icon-form-checkbox"
  }), _vm._v(" "), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.label)
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "button",
    class: [
      _vm.type ? 'button-' + _vm.type : '',
      _vm.size ? 'button-' + _vm.size : '',
      {
        'button-fill': _vm.fill,
        'button-round': _vm.round,
        'disabled': _vm.disabled
      }
    ],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "type": _vm.nativeType
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "bar bar-nav"
  }, [_vm._t("left"), _vm._v(" "), _vm._t("right"), _vm._v(" "), (_vm.back) ? _c('a', {
    staticClass: "icon icon-left pull-left",
    on: {
      "click": _vm.goBack
    }
  }) : _vm._e(), _vm._v(" "), _c('h1', {
    staticClass: "title",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "popup",
    style: ({
      display: _vm.showInput ? 'block' : 'none'
    })
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('router-link', {
    staticClass: "item-content",
    class: {
      'item-link': !!_vm.link
    },
    attrs: {
      "to": {
        path: _vm.link
      },
      "tag": !!_vm.link ? 'a' : 'div'
    }
  }, [(!!_vm.imgUrl) ? _c('div', {
    staticClass: "item-media"
  }, [_c('img', {
    style: ({
      width: _vm.imgWidth
    }),
    attrs: {
      "src": _vm.imgUrl
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "item-inner"
  }, [_c('div', {
    staticClass: "item-title-row"
  }, [_c('div', {
    staticClass: "item-title",
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "item-after",
    domProps: {
      "textContent": _vm._s(_vm.rightText)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item-subtitle",
    domProps: {
      "textContent": _vm._s(_vm.subTitle)
    }
  }), _vm._v(" "), (!!_vm.text) ? _c('div', {
    staticClass: "item-text",
    domProps: {
      "textContent": _vm._s(_vm.text)
    }
  }) : _vm._e()])])], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "bar bar-tab"
  }, _vm._l((_vm.nav), function(item) {
    return _c('router-link', {
      staticClass: "tab-item",
      attrs: {
        "to": item.url,
        "active-class": "active"
      }
    }, [_c('span', {
      class: ['icon', _vm.getIcon(item.icon)]
    }), _vm._v(" "), _c('span', {
      staticClass: "tab-label",
      domProps: {
        "innerHTML": _vm._s(item.text)
      }
    }), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.badge >= 1),
        expression: "item.badge >= 1"
      }],
      staticClass: "badge",
      domProps: {
        "innerHTML": _vm._s(item.badge)
      }
    })])
  }))
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-reveal"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.$router.app.pageTransition
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "buttons-row"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list-block",
    class: {
      'media-list': _vm.isMedia || _vm.isCheck, 'inset': _vm.isInset
    }
  }, [_c('ul', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "iscroll",
    staticClass: "ms-iscroll"
  }, [_c('div', {
    ref: "iscrollContent",
    staticClass: "ms-iscroll-content"
  }, [_vm._t("default"), _vm._v(" "), (!!_vm.infiniteToRefresh) ? _c('div', {
    staticClass: "infinite-scroll-preloader"
  }, [_c('div', {
    staticClass: "preloader"
  })]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPTR),
      expression: "showPTR"
    }],
    staticClass: "pull-to-refresh-layer ms-pull-to-refresh",
    class: [_vm.PTRClassName]
  }, [_c('div', {
    staticClass: "preloader"
  }), _vm._v(" "), _c('div', {
    staticClass: "pull-to-refresh-arrow"
  })])])
},staticRenderFns: []}

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__actions_vue__);



const ModalConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__actions_vue___default.a)

let currentAction, instance
let actionQueue = []

const initInstance = () => {
  instance = new ModalConstructor({
    el: document.createElement('div')
  })
}

const defaultCallBack = (instance, cb) => {

  if (currentAction) {

    return function () {

      cb && cb()

      // instance.value = false
      // popup中有对value = false 进行阻断，避免多次关闭，造成modal报错
      // 貌似这样并不优雅，但是close是公共方法，也没啥问题
      instance.close()

    }

  }

}

const showNextAction = () => {

  if (!instance) {
    initInstance()
  }

  if (actionQueue.length > 0) {

    currentAction = actionQueue.shift()

    let options = currentAction.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        if (prop === 'groups') {
          options[prop].forEach((group, index) => {

            group.forEach((obj, i) => {

              if (!!!obj.label) {

                obj.onClick = defaultCallBack(instance, obj.onClick)

              } else {
                obj.onClick = () => {}
              }

            })

          })

        }

        instance[prop] = options[prop]
      }
    }

    // 避免zIndex=-1
    instance['ClosezIndexStatic'] = true

    document.body.appendChild(instance.$el)

    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(() => {

      setTimeout(() => {
        instance.value = true
      }, 0)

    })

  }

}

const Action = (groups) => {

  if (!Array.isArray(groups)) {
    return
  }

  actionQueue.push({
    options: {
      groups
    }
  })

  showNextAction()

}

/* harmony default export */ __webpack_exports__["a"] = Action;

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var device = {}
var ua = navigator.userAgent

var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)

device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false

// Android
if (android) {
  device.os = 'android'
  device.osVersion = android[2]
  device.android = true
  device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
}
if (ipad || iphone || ipod) {
  device.os = 'ios'
  device.ios = true
}
// iOS
if (iphone && !ipod) {
  device.osVersion = iphone[2].replace(/_/g, '.')
  device.iphone = true
}
if (ipad) {
  device.osVersion = ipad[2].replace(/_/g, '.')
  device.ipad = true
}
if (ipod) {
  device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
  device.iphone = true
}
// iOS 8+ changed UA
if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
  if (device.osVersion.split('.')[0] === '10') {
    device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
  }
}

// Webview
device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i)

const _viewports = document.querySelectorAll('meta[name="viewport"]')

// Minimal UI
if (device.os && device.os === 'ios') {
  var osVersionArr = device.osVersion.split('.')
  device.minimalUi = !device.webView &&
    (ipod || iphone) &&
    (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
    _viewports.length > 0 && _viewports[0].getAttribute('content').indexOf('minimal-ui') > 0;
}

var windowWidth = window.innerWidth
var windowHeight = window.innerHeight

device.statusBar = false

if (device.webView && (windowWidth * windowHeight === screen.width * screen.height)) {
  device.statusBar = true;
} else {
  device.statusBar = false;
}

var classNames = []

// Pixel Ratio
device.pixelRatio = window.devicePixelRatio || 1;
classNames.push('pixel-ratio-' + Math.floor(device.pixelRatio))
if (device.pixelRatio >= 2) {
  classNames.push('retina')
}

// OS classes
if (device.os) {
  classNames.push(device.os, device.os + '-' + device.osVersion.split('.')[0], device.os + '-' + device.osVersion.replace(/\./g, '-'))
  if (device.os === 'ios') {
    var major = parseInt(device.osVersion.split('.')[0], 10)
    for (var i = major - 1; i >= 6; i--) {
      classNames.push('ios-gt-' + i)
    }
  }

}

const init = () => {
  const _html = document.getElementsByTagName('html')[0]
    // Status bar classes
  if (device.statusBar) {
    classNames.push('with-statusbar-overlay')
  } else {
    _html.classList.remove('with-statusbar-overlay')
  }

  // Add html classes
  if (classNames.length > 0) {

    _html.className ? _html.className += ' ' + classNames.join(' ') : _html.className = classNames.join(' ')

  }
}

/* harmony default export */ __webpack_exports__["a"] = {
  device,
  init
};

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modal_vue__);
const MODAL_DEFAULT = {
  modalStack: true,
  modalButtonOk: '确定',
  modalButtonCancel: '取消',
  modalPreloaderTitle: '加载中',
  defaultButtons: [{
    text: '确定',
    bold: true
  }]
}




const ModalConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__modal_vue___default.a)

let currentMsg, instance
let msgQueue = []

const initInstance = () => {
  instance = new ModalConstructor({
    el: document.createElement('div')
  })
}

const defaultCallBack = (instance, cb) => {

  if (currentMsg) {

    return function () {

      cb && cb()

      // instance.value = false
      // popup中有对value = false 进行阻断，避免多次关闭，造成modal报错
      // 貌似这样并不优雅，但是close是公共方法，也没啥问题
      instance.close()

    }

  }

}

const showNextMsg = () => {

  if (!instance) {
    initInstance()
  }

  if (msgQueue.length > 0) {

    currentMsg = msgQueue.shift()

    let options = currentMsg.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        if (prop === 'buttons') {
          options[prop].forEach((obj, i) => {
            obj.onClick = defaultCallBack(instance, obj.onClick)
          })
        }
        instance[prop] = options[prop]
      }
    }

    document.body.appendChild(instance.$el)

    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(() => {

      instance.marginTop = -(instance.$el.offsetHeight / 2)

      instance.value = true

    })

  }

}

const Modal = (options) => {

  let opt = options || {}

  let title = opt.title || ''
  let text = opt.text || ''
  let verticalButtons = opt.verticalButtons || ''
  let buttons = (opt.buttons && !!opt.buttons.length) ? opt.buttons : MODAL_DEFAULT.defaultButtons

  msgQueue.push({
    options: {
      title,
      text,
      verticalButtons,
      buttons
    }
  })

  showNextMsg()

}

Modal.alert = (text, title, callbackOk) => {
  if (typeof title === 'function') {
    callbackOk = title
    title = ''
  }
  return Modal({
    text: text || '',
    title: title,
    buttons: [{
      text: MODAL_DEFAULT.modalButtonOk,
      bold: true,
      onClick: callbackOk
    }]
  })
}

Modal.confirm = (text, title, callbackOk, callbackCancel) => {
  if (typeof title === 'function') {
    callbackCancel = callbackOk
    callbackOk = title
    title = ''
  }
  return Modal({
    text: text || '',
    title: title,
    buttons: [{
      text: MODAL_DEFAULT.modalButtonCancel,
      bold: true,
      onClick: callbackCancel
    }, {
      text: MODAL_DEFAULT.modalButtonOk,
      bold: true,
      onClick: callbackOk
    }]
  })
}

Modal.closeModal = () => {

  instance.close()
  msgQueue = []
  currentMsg = null

}

/* harmony default export */ __webpack_exports__["a"] = Modal;

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 所有弹出层的管理 
 *
 * 灵感来源 https://github.com/ElemeFE/vue-popup/blob/master/src/popup-manager.js
 *
 * <div class="modal-overlay"></div> 遮罩层
 * 
 */

const getModal = () => {

  let modalDom = document.querySelector('.modal-overlay')

  if (!!!modalDom) {

    modalDom = document.createElement('div')
    modalDom.className = 'modal-overlay'

    document.getElementsByTagName('body')[0].appendChild(modalDom)


  }

  return modalDom

}

const instances = {}

const PopupManager = {
  zIndex: 2100,
  overlayStack: [],
  nextZIndex() {
    return this.zIndex++
  },
  register(id, instance) {
    if (id && instance) {
      instances[id] = instance
    }
  },
  deregister(id) {
    if (id) {
      instances[id] = null
      delete instances[id]
    }
  },
  getInstance(id) {
    return instances[id]
  },
  modalStack: [],
  openModal(id, zIndex, dom) {

    const modalStack = this.modalStack

    for (let i = 0, j = modalStack.length; i < j; i++) {
      const item = modalStack[i]
      if (item.id === id) {
        return
      }
    }

    const modalDom = getModal()

    modalDom.classList.add('modal-overlay-visible')

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }

    this.modalStack.push({
      id: id,
      zIndex: zIndex
    })

  },
  closeModal(id) {

    const modalStack = this.modalStack
    const modalDom = getModal()

    const topItem = modalStack[modalStack.length - 1]

    if (modalStack.length - 1 == 0) {
      modalDom.classList.remove('modal-overlay-visible')
    }

    if (topItem.id === id) {
      modalStack.pop()
    } else {
      for (let i = modalStack.length - 1; i >= 0; i--) {
        if (modalStack[i].id === id) {
          modalStack.splice(i, 1);
          break;
        }
      }
    }


  }
}

/* harmony default export */ __webpack_exports__["a"] = PopupManager;

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preloader_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__preloader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__preloader_vue__);



const ModalConstructor = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__preloader_vue___default.a)

let currentPreloader, preloaderInstance
let preloaderQueue = []

const initPreloaderInstance = () => {
  preloaderInstance = new ModalConstructor({
    el: document.createElement('div')
  })
}

const showNextPreloader = () => {

  if (!preloaderInstance) {
    initPreloaderInstance()
  }

  if (preloaderQueue.length > 0) {

    currentPreloader = preloaderQueue.shift()

    let options = currentPreloader.options

    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        console.log(options[prop])
        preloaderInstance[prop] = options[prop]
      }
    }

    document.body.appendChild(preloaderInstance.$el)

    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(() => {

      preloaderInstance.marginTop = -(preloaderInstance.$el.offsetHeight / 2)

      preloaderInstance.value = true

    })

  }

}

const showPreloader = (title) => {

  preloaderQueue.push({
    options: {
      title: title || '加载中'
    }
  })

  showNextPreloader()

}

showPreloader.close = () => {

  preloaderInstance.close()
  preloaderQueue = []
  currentPreloader = null

}

/* harmony default export */ __webpack_exports__["a"] = showPreloader;

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (msg, duration, extraclass) => {

  let toastDom = document.createElement('div')
  toastDom.className = 'modal toast'
  toastDom.innerHTML = msg
  toastDom.style.display = 'block'

  if (extraclass) {

    extraclass.split(' ').forEach((str, i) => {

      toastDom.classList.add(str)

    })

  }

  document.body.appendChild(toastDom)

  setTimeout(() => {
    toastDom.style.marginLeft = -(toastDom.offsetWidth / 2) + 'px'
    toastDom.style.marginTop = -(toastDom.offsetHeight / 2) + 'px'

    toastDom.classList.add('modal-in')
  }, 5)

  setTimeout(() => {
    toastDom.classList.remove('modal-in')
    toastDom.classList.add('modal-out')
    setTimeout(() => {
      document.body.removeChild(toastDom)
    }, 200)
  }, duration || 2000)


};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__msui__ = __webpack_require__(4);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_router___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3__msui__["a" /* default */]);

var routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(72)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    title: '首页'
  }
}, {
  path: '/about',
  name: 'about',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '关于我们'
  }
}, {
  path: '/button',
  name: 'button',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(69)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '按钮'
  }
}, {
  path: '/tabs',
  name: 'tabs',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(80)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '标签页'
  }
}, {
  path: '/list',
  name: 'list',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(76)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '列表'
  }
}, {
  path: '/form',
  name: 'form',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(71)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '表单'
  }
}, {
  path: '/card',
  name: 'card',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(70)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '卡片'
  }
}, {
  path: '/icon',
  name: 'icon',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(73)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '图标'
  }
}, {
  path: '/swiper',
  name: 'swiper',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(79)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '轮播'
  }
}, {
  path: '/iscroll',
  name: 'iscroll',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(74)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: 'iscroll'
  }
}, {
  path: '/modal',
  name: 'modal',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(77)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '对话框'
  }
}, {
  path: '/iscroll2',
  name: 'iscroll2',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(75)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: 'iscroll2'
  }
}, {
  path: '/preloader',
  name: 'preloader',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(78)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  },
  meta: {
    goback: true,
    title: '预加载'
  }
}];

var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router___default.a({
  routes: routes });

var IS_ROUTER_FIRST_CHANGE = true;

router.beforeEach(function (to, from, next) {

  var direction = 'slide-fade';

  if (!!from.meta.goback) {
    if (!!to.meta.goback) {
      var toDepth = to.path.split('/').length;
      var fromDepth = from.path.split('/').length;
      direction = toDepth >= fromDepth ? 'slide-right' : 'slide-left';
    } else {
      direction = 'slide-left';
    }
  } else {
    direction = !!to.meta.goback ? 'slide-right' : 'slide-fade';
  }

  if (IS_ROUTER_FIRST_CHANGE) {
    IS_ROUTER_FIRST_CHANGE = !IS_ROUTER_FIRST_CHANGE;
    direction = 'slide-fade';
  }

  router.app.pageTransition = direction;

  document.title = to.meta.title;

  next();
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  router: router,
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
  }
}).$mount('#app');

/***/ })
],[114]);
//# sourceMappingURL=app.89a0ea2660b19bd14175.js.map