/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/js/bootstrap-magnify.min.js":
/*!************************************************!*\
  !*** ./assets/src/js/bootstrap-magnify.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (e) {\n  \"use strict\";\n  var t = function t(e, _t) {\n    this.init(\"magnify\", e, _t);\n  };t.prototype = { constructor: t, init: function init(t, n, r) {\n      var i = \"mousemove\",\n          s = \"mouseleave\";this.type = t;this.$element = e(n);this.options = this.getOptions(r);this.nativeWidth = 0;this.nativeHeight = 0;this.$element.wrap('<div class=\"magnify\" >');this.$element.parent(\".magnify\").append('<div class=\"magnify-large\" >');this.$element.siblings(\".magnify-large\").css(\"background\", \"url('\" + this.$element.attr(\"src\") + \"') no-repeat\");this.$element.parent(\".magnify\").on(i + \".\" + this.type, e.proxy(this.check, this));this.$element.parent(\".magnify\").on(s + \".\" + this.type, e.proxy(this.check, this));\n    }, getOptions: function getOptions(t) {\n      t = e.extend({}, e.fn[this.type].defaults, t, this.$element.data());t.delay && typeof t.delay == \"number\" && (t.delay = { show: t.delay, hide: t.delay });return t;\n    }, check: function check(t) {\n      var n = e(t.currentTarget),\n          r = n.children(\"img\"),\n          i = n.children(\".magnify-large\");if (!this.nativeWidth && !this.nativeHeight) {\n        var s = new Image();s.src = r.attr(\"src\");this.nativeWidth = s.width;this.nativeHeight = s.height;\n      } else {\n        var o = n.offset(),\n            u = t.pageX - o.left,\n            a = t.pageY - o.top;u < n.width() && a < n.height() && u > 0 && a > 0 ? i.fadeIn(100) : i.fadeOut(100);if (i.is(\":visible\")) {\n          var f = Math.round(u / n.width() * this.nativeWidth - i.width() / 2) * -1,\n              l = Math.round(a / n.height() * this.nativeHeight - i.height() / 2) * -1,\n              c = f + \"px \" + l + \"px\",\n              h = u - i.width() / 2,\n              p = a - i.height() / 2;i.css({ left: h, top: p, backgroundPosition: c });\n        }\n      }\n    } };e.fn.magnify = function (n) {\n    return this.each(function () {\n      var r = e(this),\n          i = r.data(\"magnify\"),\n          s = (typeof n === \"undefined\" ? \"undefined\" : _typeof(n)) == \"object\" && n;i || r.data(\"tooltip\", i = new t(this, s));typeof n == \"string\" && i[n]();\n    });\n  };e.fn.magnify.Constructor = t;e.fn.magnify.defaults = { delay: 0 };e(window).on(\"load\", function () {\n    e('[data-toggle=\"magnify\"]').each(function () {\n      var t = e(this);t.magnify();\n    });\n  });\n}(window.jQuery);\n\n//# sourceURL=webpack:///./assets/src/js/bootstrap-magnify.min.js?");

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./assets/src/js/bootstrap-magnify.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./assets/src/js/bootstrap-magnify.min.js */\"./assets/src/js/bootstrap-magnify.min.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/src/js/bootstrap-magnify.min.js?");

/***/ })

/******/ });