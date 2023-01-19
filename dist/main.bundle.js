"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/list.js */ \"./src/modules/list.js\");\n// import javaScript from modules\n\n// call elements\nconst listContainer = document.querySelector('.list-container');\n\nconst toDos = () => {\n  _modules_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((item) => {\n    listContainer.innerHTML += `\n    <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"${item.index}\">\n        <label class=\"form-check-label\">\n            ${item.description}\n        </label>\n    </div>\n    <hr>\n    `;\n  });\n};\n\ntoDos();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toDoList = [\n  {\n    description: 'wash the car',\n    completed: Boolean,\n    index: 0,\n  },\n  {\n    description: 'bring fruits',\n    completed: Boolean,\n    index: 1,\n  },\n  {\n    description: 'buy a book',\n    completed: Boolean,\n    index: 2,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDoList);\n\n//# sourceURL=webpack://to-do-list/./src/modules/list.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);