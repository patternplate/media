window["patternplate-components"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


    module.exports['lib/button/demo.js'] = __webpack_require__(3);
module.exports['lib/button/demo.js'].js = () => __webpack_require__(4)
module.exports['lib/hello-world/demo.js'] = __webpack_require__(5);
module.exports['lib/hello-world/demo.js'].js = () => __webpack_require__(6)
  

/***/ }),
/* 3 */
/***/ (function(module, exports) {



module.exports = {
  html: () => '<button class="my-button">My first button</button>',
  default: () => {
    // Nothing implemented yet
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "\n\nmodule.exports = {\n  html: () => '<button class=\"my-button\">My first button</button>',\n  default: () => {\n    // Nothing implemented yet\n  }\n}\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {


// lib/hello-world/demo.js
module.exports = {
  html: () => '<h1 class="hello-world" data-hello-world>Hello World</h1>',
  css: () => '.hello-world { font-family: sans-serif; color: cornflowerblue; cursor: pointer; }',
  default: function() {
    var el = document.querySelector("[data-hello-world]");
    var count = 0;
    el.addEventListener("click", function(e) {
      e.target.textContent = "Hello World, " + (++count);
    });
  }
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "\n// lib/hello-world/demo.js\nmodule.exports = {\n  html: () => '<h1 class=\"hello-world\" data-hello-world>Hello World</h1>',\n  css: () => '.hello-world { font-family: sans-serif; color: cornflowerblue; cursor: pointer; }',\n  default: function() {\n    var el = document.querySelector(\"[data-hello-world]\");\n    var count = 0;\n    el.addEventListener(\"click\", function(e) {\n      e.target.textContent = \"Hello World, \" + (++count);\n    });\n  }\n};\n"

/***/ })
/******/ ]);