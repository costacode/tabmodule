/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njc3MvYXBwLnNjc3M/NDYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (function(module, exports, __webpack_require__) {

eval("// include panels module\nvar tabs = __webpack_require__(/*! ./js/panels */ 2);\n\n// include this css file inside the main.bundle.js\nvar css = __webpack_require__(/*! ./scss/app.scss */ 0);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kOGVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluY2x1ZGUgcGFuZWxzIG1vZHVsZVxudmFyIHRhYnMgPSByZXF1aXJlKCcuL2pzL3BhbmVscycpO1xuXG4vLyBpbmNsdWRlIHRoaXMgY3NzIGZpbGUgaW5zaWRlIHRoZSBtYWluLmJ1bmRsZS5qc1xudmFyIGNzcyA9IHJlcXVpcmUoJy4vc2Nzcy9hcHAuc2NzcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./js/panels.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// Using vanilla js\n\nmodule.export = ( function (){\n\n    function updatePanels(e, navigation, content) {\n        var queryVal = 'div' + e.target.hash;\n        e.preventDefault();\n\n        navigation.querySelector('a.tablist__tab__link--active').classList.remove('tablist__tab__link--active');\n        e.target.classList.add('tablist__tab__link--active');\n\n        console.log(queryVal);\n\n        content.querySelector('div.tabpanel--active').classList.remove('tabpanel--active');\n        content.querySelector(queryVal).classList.add('tabpanel--active');\n\n        return queryVal;\n    }\n\n    // store nodes\n    var moduleContainer = document.getElementsByClassName('module__container--centered')[0];\n    var tabList = moduleContainer.querySelector('.tablist');\n    var tabPanels = tabList.nextElementSibling; \n\n    tabList.addEventListener('click', function(event) {\n        // if click on a tab\n        if (event.target.tagName.toLowerCase() === 'a') {\n            // change tabpanels\n            var functionVar = updatePanels(event, tabList, tabPanels);\n        }\n    }); \n} )();\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 3)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3BhbmVscy5qcz9iZDlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVzaW5nIHZhbmlsbGEganNcblxubW9kdWxlLmV4cG9ydCA9ICggZnVuY3Rpb24gKCl7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQYW5lbHMoZSwgbmF2aWdhdGlvbiwgY29udGVudCkge1xuICAgICAgICB2YXIgcXVlcnlWYWwgPSAnZGl2JyArIGUudGFyZ2V0Lmhhc2g7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBuYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2EudGFibGlzdF9fdGFiX19saW5rLS1hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCd0YWJsaXN0X190YWJfX2xpbmstLWFjdGl2ZScpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YWJsaXN0X190YWJfX2xpbmstLWFjdGl2ZScpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5VmFsKTtcblxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWJwYW5lbC0tYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgndGFicGFuZWwtLWFjdGl2ZScpO1xuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlWYWwpLmNsYXNzTGlzdC5hZGQoJ3RhYnBhbmVsLS1hY3RpdmUnKTtcblxuICAgICAgICByZXR1cm4gcXVlcnlWYWw7XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgbm9kZXNcbiAgICB2YXIgbW9kdWxlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kdWxlX19jb250YWluZXItLWNlbnRlcmVkJylbMF07XG4gICAgdmFyIHRhYkxpc3QgPSBtb2R1bGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhYmxpc3QnKTtcbiAgICB2YXIgdGFiUGFuZWxzID0gdGFiTGlzdC5uZXh0RWxlbWVudFNpYmxpbmc7IFxuXG4gICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIGlmIGNsaWNrIG9uIGEgdGFiXG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScpIHtcbiAgICAgICAgICAgIC8vIGNoYW5nZSB0YWJwYW5lbHNcbiAgICAgICAgICAgIHZhciBmdW5jdGlvblZhciA9IHVwZGF0ZVBhbmVscyhldmVudCwgdGFiTGlzdCwgdGFiUGFuZWxzKTtcbiAgICAgICAgfVxuICAgIH0pOyBcbn0gKSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9wYW5lbHMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** multi ./app.js ./scss/app.scss ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./app.js */1);
module.exports = __webpack_require__(/*! ./scss/app.scss */0);


/***/ })
/******/ ]);