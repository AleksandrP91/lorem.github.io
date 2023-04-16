/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/menu */ \"./src/js/module/menu.js\");\n/* harmony import */ var _module_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/dropdown */ \"./src/js/module/dropdown.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_module_dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_module_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://gulp-started/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/dropdown.js":
/*!***********************************!*\
  !*** ./src/js/module/dropdown.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar dropdown = function dropdown() {\n  var selectBox = document.querySelector('.select__box');\n  var selectOption = document.querySelector('.select__option');\n  var selectInput = document.querySelector('.select__input');\n  var optionsItem = document.querySelectorAll('.options__item');\n  selectOption.addEventListener('click', function () {\n    selectBox.classList.toggle('active');\n    selectInput.classList.toggle('active');\n  });\n  optionsItem.forEach(function (item) {\n    item.addEventListener('click', function () {\n      var selectOption = item.querySelector('.options__text').innerText;\n      selectInput.innerText = selectOption;\n      selectBox.classList.remove('active');\n      selectInput.classList.remove('active');\n    });\n  });\n  var range = document.querySelector('.form__input-range');\n  var rangeNum = document.querySelector('.range__numbers');\n\n  range.oninput = function () {\n    rangeNum.innerHTML = range.value + '%';\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dropdown);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/dropdown.js?");

/***/ }),

/***/ "./src/js/module/menu.js":
/*!*******************************!*\
  !*** ./src/js/module/menu.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar menu = function menu() {\n  var menuClick = document.querySelector('.menu__burger');\n  var menuAnimate = document.querySelector('.menu__burger-animate');\n  var menu = document.querySelector('.menu');\n  var menuLink = document.querySelectorAll('.menu__link');\n  var body = document.querySelector('body');\n  menuClick.addEventListener('click', function () {\n    menuAnimate.classList.toggle('active_menu');\n    menu.classList.toggle('active');\n    body.classList.toggle('active_body');\n  });\n  menuLink.forEach(function (event) {\n    event.addEventListener('click', function () {\n      menu.classList.remove('active');\n      menuAnimate.classList.remove('active_menu');\n      body.classList.remove('active_body');\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/menu.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;