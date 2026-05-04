/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/PostStreamScrubberHook/index.js":
/*!***************************************************!*\
  !*** ./src/forum/PostStreamScrubberHook/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hookScrubber)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_PostStreamScrubber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/PostStreamScrubber */ "flarum/forum/components/PostStreamScrubber");
/* harmony import */ var flarum_forum_components_PostStreamScrubber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStreamScrubber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);


function hookScrubber() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_forum_components_PostStreamScrubber__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'updateScrubberValues', function () {
    var $scrubber = this.$();
    var index = this.stream.index;
    var count = this.stream.count();
    var visible = this.stream.visible || 1;
    var percentPerPost = this.percentPerPost();
    var before = Math.max(0, percentPerPost.index * Math.min(index - 1, count - visible));
    var handle = Math.min(100 - before, percentPerPost.visible * visible);
    var progress = before + handle / 2;
    $scrubber.find('.Scrubber-scrollbar').css('--progress', progress + "%");
  });
}

/***/ }),

/***/ "./src/forum/globalHeader/backButtonAndHomeLink.js":
/*!*********************************************************!*\
  !*** ./src/forum/globalHeader/backButtonAndHomeLink.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);




function backUrl() {
  var _app$history, _app$history2;
  if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default()) != null && (_app$history = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history)) != null && _app$history.canGoBack()) return (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default()) == null || (_app$history2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history)) == null ? void 0 : _app$history2.backUrl();
}
var backButtonComponent = /*#__PURE__*/function (_Component) {
  function backButtonComponent() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(backButtonComponent, _Component);
  var _proto = backButtonComponent.prototype;
  _proto.view = function view() {
    var _app$previous, _app$history3;
    return m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Navigation-back Button--icon Button--flat",
      href: backUrl(),
      icon: "fas fa-arrow-left",
      "aria-label": (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default()) == null || (_app$previous = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().previous)) == null ? void 0 : _app$previous.title,
      disabled: !((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default()) != null && (_app$history3 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history)) != null && _app$history3.canGoBack()),
      onclick: function onclick(e) {
        var _app$history4;
        if (e.shiftKey || e.ctrlKey || e.metaKey || e.which === 2) return;
        e.preventDefault();
        (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default()) == null || (_app$history4 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history)) == null || _app$history4.back();
      }
    });
  };
  return backButtonComponent;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));
var homeLink = document.getElementById('home-link');
var homeLinkHref = homeLink.href;
var homeLinkChilds = Array.from(homeLink.childNodes).map(function (node) {
  return node.cloneNode(true);
});
var homeLinkComponent = /*#__PURE__*/function (_Component2) {
  function homeLinkComponent() {
    return _Component2.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(homeLinkComponent, _Component2);
  var _proto2 = homeLinkComponent.prototype;
  _proto2.view = function view() {
    return m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button  Button--flat",
      href: homeLinkHref,
      onclick: function onclick(e) {
        var _app$session$user;
        if (e.ctrlKey || e.metaKey || e.button === 1) return;
        e.preventDefault();
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.home();

        // Reload the current user so that their unread notification count is refreshed.
        var userId = (_app$session$user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user) == null ? void 0 : _app$session$user.id();
        if (userId) {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('users', userId);
          m.redraw();
        }
      }
    });
  };
  _proto2.oncreate = function oncreate(vnode) {
    var _linkEles;
    var theButton = vnode.dom.children[0];
    theButton.append.apply(theButton, homeLinkChilds);
    if (theButton.matches('img')) return;
    var linkEles = document.head.querySelectorAll('[rel~=icon]');
    var linkNum = linkEles.length;
    if (linkNum == 0) return;
    theButton.dataset.favicon = (_linkEles = linkEles[linkNum - 1]) == null ? void 0 : _linkEles.href;
  };
  return homeLinkComponent;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  backButton: backButtonComponent,
  homeLink: homeLinkComponent
});

/***/ }),

/***/ "./src/forum/globalHeader/collapsibleNav.js":
/*!**************************************************!*\
  !*** ./src/forum/globalHeader/collapsibleNav.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addCollapsible)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classPrivateFieldLooseBase */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js");
/* harmony import */ var _babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classPrivateFieldLooseKey */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/throttleDebounce */ "flarum/common/utils/throttleDebounce");
/* harmony import */ var flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _moreDropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moreDropdown */ "./src/forum/globalHeader/moreDropdown.tsx");










// It's used by processItems(), to prevent building the same class again and again...
var componentPool = new WeakMap();

/**
 *
 * @param { HeaderSecondary } element
 * @param { Number } direction
 */

function addCollapsible(element, direction) {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.override)(element.prototype, 'view', function () {
    var withMoreDropdown = this.items();
    withMoreDropdown.add('more', m(_moreDropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
      parent: this
    }, direction ? processItems(this.items()) : processItems(this.items()).slice(2)), direction ? Infinity : -Infinity);
    return m("ul", {
      className: "Header-controls"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(withMoreDropdown.toArray()));
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)(element.prototype, 'oncreate', function () {
    var helper = new collapsibleHelper(this.element, direction);
    this.helper = helper;
    window.addEventListener('resize', (0,flarum_common_utils_throttleDebounce__WEBPACK_IMPORTED_MODULE_7__.debounce)(200, function () {
      helper.layout();
    }), {
      signal: helper.signal
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)(element.prototype, 'onbeforeremove', function () {
    this.helper.unregister();
  });
}
var _abort = /*#__PURE__*/(0,_babel_runtime_helpers_esm_classPrivateFieldLooseKey__WEBPACK_IMPORTED_MODULE_2__["default"])("abort");
var collapsibleHelper = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param { HTMLElement } element
   */

  function collapsibleHelper(element, direction) {
    Object.defineProperty(this, _abort, {
      writable: true,
      value: new AbortController()
    });
    this.element = element;
    this.direction = direction;
    this.showChoice = false;
    this.signal = (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _abort)[_abort].signal;
    this.layout();
  }
  var _proto = collapsibleHelper.prototype;
  _proto.unregister = function unregister() {
    (0,_babel_runtime_helpers_esm_classPrivateFieldLooseBase__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _abort)[_abort].abort();
  };
  _proto.layout = function layout() {
    var children = Array.from(this.element.children);
    children.forEach(function (element) {
      element.classList.remove('hidden-item');
    });
    var domRects = children.map(function (e) {
      return e.getBoundingClientRect();
    });
    var parentRect = this.element.getBoundingClientRect();
    var parentWidth = parentRect.width;
    var childrenWidth = domRects.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.width;
    }, 0);
    var menuItems = children.find(function (element) {
      return element.className == 'item-more';
    });
    menuItems.querySelectorAll('ul>li').forEach(function (element) {
      element.style.display = '';
    });
    if (parentWidth >= childrenWidth - menuItems.getBoundingClientRect().width) {
      menuItems.classList.add('hidden-item');
      return;
    }
    (this.direction ? children.slice(1) : children.slice(2, -1).reverse()).every(function (element, index) {
      if (element.classList.contains('chosen-item')) return parentWidth < childrenWidth;
      menuItems.querySelector("." + element.className).style.display = 'block';
      element.classList.add('hidden-item');
      childrenWidth -= domRects[index + 1].width;
      return parentWidth < childrenWidth;
    });
  };
  _proto.clearChoiceItem = function clearChoiceItem() {
    Array.from(this.element.children).forEach(function (element) {
      element.classList.remove('chosen-item');
    });
  };
  return collapsibleHelper;
}();
/**
 *
 * @param { ItemList } items
 */
function processItems(items) {
  Object.keys(items.toObject()).forEach(function (itemName) {
    var item = items.get(itemName);
    item.attrs.onclick = null;
    if (!('getButton' in item.tag.prototype)) return;
    var buttonOfComponent = componentPool.get(item.tag);
    if (buttonOfComponent) {
      items.setContent(itemName, buttonOfComponent.component(item.attrs, item.children));
      return;
    }

    // Build a new component in place
    buttonOfComponent = /*#__PURE__*/function (_item$tag) {
      function buttonOfComponent() {
        return _item$tag.apply(this, arguments) || this;
      }
      (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(buttonOfComponent, _item$tag);
      var _proto2 = buttonOfComponent.prototype;
      _proto2.view = function view(vnode) {
        var button = this.getButton(vnode.children);
        button.attrs.className += ' hasIcon';
        button.attrs.onclick = null;
        return button;
      };
      return buttonOfComponent;
    }(item.tag);
    items.setContent(itemName, buttonOfComponent.component(item.attrs, item.children));
    componentPool.set(item.tag, buttonOfComponent);
  });
  return items.toArray();
}

/***/ }),

/***/ "./src/forum/globalHeader/headerSearch.js":
/*!************************************************!*\
  !*** ./src/forum/globalHeader/headerSearch.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderSearch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/Search */ "flarum/forum/components/Search");
/* harmony import */ var flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);







var HeaderSearch = /*#__PURE__*/function (_Component) {
  function HeaderSearch() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HeaderSearch, _Component);
  var _proto = HeaderSearch.prototype;
  _proto.view = function view() {
    return m("ul", {
      className: "Header-controls"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(this.items().toArray()));
  }

  /**
   * Build an item list for the controls.
   *
   * @return {ItemList<import('mithril').Children>}
   */;
  _proto.items = function items() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default())();
    items.add('search', flarum_forum_components_Search__WEBPACK_IMPORTED_MODULE_3___default().component({
      state: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().search)
    }), 30);
    return items;
  };
  return HeaderSearch;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/globalHeader/index.js":
/*!*****************************************!*\
  !*** ./src/forum/globalHeader/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hookGlobalHeader)
/* harmony export */ });
/* harmony import */ var flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/ForumApplication */ "flarum/forum/ForumApplication");
/* harmony import */ var flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headerSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerSearch */ "./src/forum/globalHeader/headerSearch.js");
/* harmony import */ var _backButtonAndHomeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backButtonAndHomeLink */ "./src/forum/globalHeader/backButtonAndHomeLink.js");
/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ "./src/forum/globalHeader/test.js");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _collapsibleNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsibleNav */ "./src/forum/globalHeader/collapsibleNav.js");








function hookGlobalHeader() {
  var headerSearch = document.createElement('div');
  headerSearch.id = 'header-search';
  headerSearch.className = 'Header-search';
  document.getElementById('header-secondary').before(headerSearch);
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)((flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'mount', function () {
    m.mount(headerSearch, _headerSearch__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'items', function (items) {
    items.add('back', m(_backButtonAndHomeLink__WEBPACK_IMPORTED_MODULE_2__["default"].backButton, null), Infinity);
    items.add('homelink', m(_backButtonAndHomeLink__WEBPACK_IMPORTED_MODULE_2__["default"].homeLink, null), Infinity);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5___default().prototype), 'items', function (items) {
    items.remove('search');
  });

  // 0: from right, 1: from left
  (0,_collapsibleNav__WEBPACK_IMPORTED_MODULE_7__["default"])((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_4___default()), 0);
  (0,_collapsibleNav__WEBPACK_IMPORTED_MODULE_7__["default"])((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_5___default()), 1);
  (0,_test__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./src/forum/globalHeader/moreDropdown.tsx":
/*!*************************************************!*\
  !*** ./src/forum/globalHeader/moreDropdown.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoreDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);



var MoreDropdown = /*#__PURE__*/function (_Dropdown) {
  function MoreDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MoreDropdown, _Dropdown);
  MoreDropdown.initAttrs = function initAttrs(attrs) {
    attrs.className || (attrs.className = 'MoreDropdown');
    attrs.buttonClassName || (attrs.buttonClassName = 'Button Button--flat hasIcon');
    attrs.icon || (attrs.icon = 'fas fa-ellipsis-h');
    _Dropdown.initAttrs.call(this, attrs);
  };
  var _proto = MoreDropdown.prototype;
  _proto.getMenu = function getMenu(items) {
    return m("ul", {
      className: 'Dropdown-menu dropdown-menu ' + this.attrs.menuClassName,
      onclick: this.menuClick.bind(this)
    }, items);
  };
  _proto.getButtonContent = function getButtonContent(children) {
    return [this.attrs.icon ? flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.icon, {
      className: 'Button-icon'
    }) : '', m("span", {
      className: "Button-label"
    }, this.attrs.label)];
  };
  _proto.menuClick = function menuClick(e) {
    // Do nothing if the menu itself is clicked
    if (e.target == e.currentTarget) return;
    var clickedItem = e.target;
    var id = Array.from(clickedItem.closest('li').classList).find(function (value) {
      return value.startsWith('item');
    });
    var parentContainer = this.element.closest('.Header-controls');
    var target = parentContainer.querySelector(":scope > ." + id);
    var toBeClicked = target.querySelector('a, button');

    // @ts-ignore
    this.attrs.parent.helper.clearChoiceItem();
    if (toBeClicked.tagName == 'BUTTON') {
      target.classList.remove('hidden-item');
      target.classList.add('chosen-item');
    }

    // @ts-ignore
    this.attrs.parent.helper.layout();
    setTimeout(function () {
      return toBeClicked.click();
    }, 0);
  };
  return MoreDropdown;
}((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/globalHeader/test.js":
/*!****************************************!*\
  !*** ./src/forum/globalHeader/test.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTestButtons)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/HeaderSecondary */ "flarum/forum/components/HeaderSecondary");
/* harmony import */ var flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);





function addTestButtons() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'items', function (items) {
    var n = 8;
    while (n) {
      var href = "#" + n;
      var dosomething = Function("alert(\"Link " + n + " is clicked!\");return false");
      items.add(n, m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
        "class": 'LinksButton Button Button--link',
        active: false,
        href: href,
        onclick: dosomething
      }, "link " + n), -n--);
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    var n = 5;
    while (n) {
      var dosomething = Function("alert(\"Button " + n + " is clicked!\")");
      items.add(n, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button Button--flat",
        onclick: dosomething,
        icon: "fas fa-square"
      }, "" + n), n--);
    }
  });
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globalHeader */ "./src/forum/globalHeader/index.js");
/* harmony import */ var _PostStreamScrubberHook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostStreamScrubberHook */ "./src/forum/PostStreamScrubberHook/index.js");
/* harmony import */ var _viewTransition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewTransition/index */ "./src/forum/viewTransition/index.js");


/*
 * This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */





function withID(more) {
  if (more === void 0) {
    more = '';
  }
  return "dalez-fluent-flarum" + more;
}
function getNoiseAsset() {
  return _getNoiseAsset.apply(this, arguments);
}
function _getNoiseAsset() {
  _getNoiseAsset = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var canvas, context, imageData, data, i;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          canvas = document.createElement('canvas');
          canvas.width = canvas.height = 256;
          context = canvas.getContext('2d');
          imageData = new ImageData(256, 256);
          data = imageData.data;
          for (i = 0; i < data.length; i += 4) {
            data[i] = data[i + 1] = data[i + 2] = Math.floor(Math.random() * 255);
            data[i + 3] = 8;
          }
          context.putImageData(imageData, 0, 0);
          return _context2.abrupt("return", canvas.toDataURL());
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getNoiseAsset.apply(this, arguments);
}
function addNoiseAsset(asset) {
  var style = document.createElement('style');
  style.textContent = ":root {--noise-asset: url(" + asset + ")}";
  document.head.appendChild(style);
}
var rootStyle = document.documentElement.style;
var bodyClassList = document.body.classList;
function mqListener() {
  refreshDPIScale();
  this.removeEventListener('change', mqListener);
  matchMedia("(resolution: " + window.devicePixelRatio + "dppx)").addEventListener('change', mqListener);
}
function refreshDPIScale() {
  rootStyle.setProperty('--dpi-scale', window.devicePixelRatio * window.visualViewport.scale);
}
flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().initializers.add(withID(), function () {
  (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = addNoiseAsset;
          _context.next = 3;
          return getNoiseAsset();
        case 3:
          _context.t1 = _context.sent;
          (0, _context.t0)(_context.t1);
          refreshDPIScale();
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))();
  document.body.classList.toggle('activated');
  window.addEventListener('blur', function () {
    return bodyClassList.remove('activated');
  });
  window.addEventListener('focus', function () {
    return bodyClassList.add('activated');
  });
  window.visualViewport.addEventListener('resize', refreshDPIScale);
  matchMedia("(resolution: " + window.devicePixelRatio + "dppx)").addEventListener('change', mqListener);
  (0,_globalHeader__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_PostStreamScrubberHook__WEBPACK_IMPORTED_MODULE_4__["default"])();
  if (data['dalez_fluent_flarum.disableViewTransition'] != '1') (0,_viewTransition_index__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/forum/viewTransition/cachePool.js":
/*!***********************************************!*\
  !*** ./src/forum/viewTransition/cachePool.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */


var pool = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().cache).flunet_internal_pool = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);

/***/ }),

/***/ "./src/forum/viewTransition/grabEvent.js":
/*!***********************************************!*\
  !*** ./src/forum/viewTransition/grabEvent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cachePool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachePool */ "./src/forum/viewTransition/cachePool.js");
/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  function grab(event) {
    _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].click_event = event;
  }
  document.addEventListener('click', grab, {
    capture: true
  });
}

/***/ }),

/***/ "./src/forum/viewTransition/hookMithril.js":
/*!*************************************************!*\
  !*** ./src/forum/viewTransition/hookMithril.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hookMithril)
/* harmony export */ });
/* harmony import */ var _cachePool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachePool */ "./src/forum/viewTransition/cachePool.js");
/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */


function hookMithril() {
  // backup the origional functions

  m.route.oldSet = m.route.set;
  m.sync = m.redraw.sync;

  // hook

  m.route.set = function () {
    var _m$route;
    _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].calling = 'true';
    (_m$route = m.route).oldSet.apply(_m$route, arguments);
    return;
  };

  // (what does the codes below do? I just forgot...)
  // maybe it has no use. disable it to see what'll happen.

  /*
  m.redraw = () => {
          if (!window.pending) {
              window.pending = true;
              window.rAF(function() {
                  pending = false;
                  m.redraw.sync();
              })
          }
      }
  */

  // restore

  m.redraw.sync = m.sync;

  // hook `popstate` event so that the transition can be available
  // when user starts their navigation with buttons provided by
  // browser.

  window.addEventListener('popstate', function (e) {
    // if browser performs transition for us, then we don't.
    if (!e.hasUAVisualTransition) _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].calling = 'true';
  }, true);
}

/***/ }),

/***/ "./src/forum/viewTransition/index.js":
/*!*******************************************!*\
  !*** ./src/forum/viewTransition/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transitionController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionController */ "./src/forum/viewTransition/transitionController.js");
/* harmony import */ var _grabEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grabEvent */ "./src/forum/viewTransition/grabEvent.js");
/* harmony import */ var _hookMithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hookMithril */ "./src/forum/viewTransition/hookMithril.js");
/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  if (!document.startViewTransition) return;
  (0,_grabEvent__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_hookMithril__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__.compat, {
    'utils/fluent_internal_transition_controller': _transitionController__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  window.requestAnimationFrame = window.rAF;
});

/***/ }),

/***/ "./src/forum/viewTransition/transitionController.js":
/*!**********************************************************!*\
  !*** ./src/forum/viewTransition/transitionController.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _cachePool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachePool */ "./src/forum/viewTransition/cachePool.js");
/*
 *  This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */


var pool = _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].pool = [];
var content = document.getElementById('content');
var body = document.body;
var style = document.createElement('style');
document.head.appendChild(style);
function markFirstCriticalElements() {
  if (!_cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].click_event) return;

  /**
   * @type {HTMLElement}
   */
  var clicked = _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].click_event.target;

  // clear the event pool

  _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].click_event = null;
  try {
    var transitionItem = clicked.closest('.DiscussionListItem, .UserCard, .PostsUserPage');
    if (!transitionItem) return;
    body.classList.toggle('view');
    body.style.viewTransitionName = 'drill';
    style.textContent = "::view-transition-old(drill){translate: 0 -" + window.scrollY + "px}";
    // cachePool.beforeElement = transitionItem;
    // transitionItem.style.viewTransitionName = 'keyItem';
  } catch (error) {
    console.warn("Seems like the selector is invalid. More info: " + error);
  }
}

/*
function markSecondCriticalElements() {
    try {
        const transitionItem = content.querySelector('.DiscussionPage-stream, .UserHero');
        if (!transitionItem) return;

        // the before element may still keeps in dom tree
        // and it can't stay with the after element.
        // since it've been captured, we removes its name here.

        cachePool.beforeElement.style.viewTransitionName = '';

        // add the name for the after element.

        transitionItem.style.viewTransitionName = 'keyItem';

        cachePool.afterElement = transitionItem;
    } catch (error) {
        console.warn(`Seems like the selector is invalid. More info: ${error}`);
    }
    body.style.viewTransitionName = '';
}
*/

function controller(func) {
  // Is this condition still necessary?
  if (_cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].calling == 'processing') {
    pool.push(func);
    return;
  }
  if (_cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].calling == 'true') {
    _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].calling = 'processing';
    markFirstCriticalElements();
    console.log('start');
    var view = document.startViewTransition(function () {
      func();
      // markSecondCriticalElements();
    });
    console.log(view);
    view.updateCallbackDone.then(function () {
      _cachePool__WEBPACK_IMPORTED_MODULE_0__["default"].calling = 'false';
      var i;
      while (typeof (i = pool.shift()) !== 'undefined') {
        window.rAF(i);
      }
    });
    view.ready.then(function () {
      // const old = getAnimations(view, 'drill', ViewTransitionPart.Old)[0];
    });
    /*if (cachePool.afterElement)*/
    view.finished.then(function () {
      body.style.viewTransitionName = '';
      setTimeout(function () {
        return body.classList.toggle('view');
      }, 0);
    });
    return;
  }

  // Browser's back & Next navigation will broke our whole logic.
  // Do the special for it...But since it has been fixed at hookmithril.js,
  // maybe it can be removed?

  window.rAF(func);
}

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core;

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/throttleDebounce":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/throttleDebounce']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/throttleDebounce'];

/***/ }),

/***/ "flarum/forum/ForumApplication":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['forum/ForumApplication']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/ForumApplication'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderPrimary']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/forum/components/HeaderSecondary":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderSecondary']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderSecondary'];

/***/ }),

/***/ "flarum/forum/components/PostStreamScrubber":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStreamScrubber']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostStreamScrubber'];

/***/ }),

/***/ "flarum/forum/components/Search":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Search']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Search'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseBase.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldBase)
/* harmony export */ });
function _classPrivateFieldBase(e, t) {
  if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldLooseKey.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldKey)
/* harmony export */ });
var id = 0;
function _classPrivateFieldKey(e) {
  return "__private_" + id++ + "_" + e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _readOnlyError)
/* harmony export */ });
function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/*
 * This file is part of dalez/fluent-flarum
 *
 *  Copyright (c) 2025 DaleZ.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE-SCRIPT file that was distributed with this source code.
 */


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map