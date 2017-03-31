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

eval("// include panels module\nvar tabs = __webpack_require__(/*! ./js/panels */ 2);\n\n// include this css file inside the main.bundle.js\nconst css = __webpack_require__(/*! ./scss/app.scss */ 0);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kOGVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGluY2x1ZGUgcGFuZWxzIG1vZHVsZVxudmFyIHRhYnMgPSByZXF1aXJlKCcuL2pzL3BhbmVscycpO1xuXG4vLyBpbmNsdWRlIHRoaXMgY3NzIGZpbGUgaW5zaWRlIHRoZSBtYWluLmJ1bmRsZS5qc1xuY29uc3QgY3NzID0gcmVxdWlyZSgnLi9zY3NzL2FwcC5zY3NzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./js/panels.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// Lack of time and skill to add own functionality. \n// Code source: https://codepen.io/brianhan/pen/xbqRLe\n\nmodule.export = ( function (){\n    var tabs = {\n        tab1: document.getElementById('tab-1'),\n        tab2: document.getElementById('tab-2'), \n        tab3: document.getElementById('tab-3'),\n        tab4: document.getElementById('tab-4')\n    }\n\n    var content = {\n        panelone: document.getElementById(\"panel-1\"),\n        paneltwo: document.getElementById(\"panel-2\"),\n        panelthree: document.getElementById(\"panel-3\"),\n        panelfour: document.getElementById(\"panel-4\")   \n    }\n\n    for (tab in tabs) {\n        tabs[tab].addEventListener('click', function(event) {\n            event.preventDefault();\n            var $this = this;\n            clearSelected();\n            $this.classList.add(\"tab-active\");\n\n            clearActive();\n\n            if ($this.id === \"tab-1\") {\n            content.panelone.classList.add(\"tabpanel__active\");\n            } else if ($this.id === \"tab-2\") {\n            content.paneltwo.classList.add(\"tabpanel__active\");\n            } else if ($this.id === \"tab-3\") {\n            content.panelthree.classList.add(\"tabpanel__active\");\n            } else {\n            content.panelfour.classList.add(\"tabpanel__active\");\n            }\n        });\n    }\n\n    function clearSelected() {\n        for (tab in tabs) {\n            tabs[tab].classList.remove(\"tab-active\");\n        }\n    }\n    function clearActive() {\n        for (element in content) {\n            content[element].classList.remove(\"tabpanel__active\");\n        }\n    }\n} )();\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 3)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3BhbmVscy5qcz9iZDlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIExhY2sgb2YgdGltZSBhbmQgc2tpbGwgdG8gYWRkIG93biBmdW5jdGlvbmFsaXR5LiBcbi8vIENvZGUgc291cmNlOiBodHRwczovL2NvZGVwZW4uaW8vYnJpYW5oYW4vcGVuL3hicVJMZVxuXG5tb2R1bGUuZXhwb3J0ID0gKCBmdW5jdGlvbiAoKXtcbiAgICB2YXIgdGFicyA9IHtcbiAgICAgICAgdGFiMTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0xJyksXG4gICAgICAgIHRhYjI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItMicpLCBcbiAgICAgICAgdGFiMzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi0zJyksXG4gICAgICAgIHRhYjQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItNCcpXG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSB7XG4gICAgICAgIHBhbmVsb25lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbmVsLTFcIiksXG4gICAgICAgIHBhbmVsdHdvOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbmVsLTJcIiksXG4gICAgICAgIHBhbmVsdGhyZWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFuZWwtM1wiKSxcbiAgICAgICAgcGFuZWxmb3VyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbmVsLTRcIikgICBcbiAgICB9XG5cbiAgICBmb3IgKHRhYiBpbiB0YWJzKSB7XG4gICAgICAgIHRhYnNbdGFiXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGNsZWFyU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICR0aGlzLmNsYXNzTGlzdC5hZGQoXCJ0YWItYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICBjbGVhckFjdGl2ZSgpO1xuXG4gICAgICAgICAgICBpZiAoJHRoaXMuaWQgPT09IFwidGFiLTFcIikge1xuICAgICAgICAgICAgY29udGVudC5wYW5lbG9uZS5jbGFzc0xpc3QuYWRkKFwidGFicGFuZWxfX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoaXMuaWQgPT09IFwidGFiLTJcIikge1xuICAgICAgICAgICAgY29udGVudC5wYW5lbHR3by5jbGFzc0xpc3QuYWRkKFwidGFicGFuZWxfX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHRoaXMuaWQgPT09IFwidGFiLTNcIikge1xuICAgICAgICAgICAgY29udGVudC5wYW5lbHRocmVlLmNsYXNzTGlzdC5hZGQoXCJ0YWJwYW5lbF9fYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQucGFuZWxmb3VyLmNsYXNzTGlzdC5hZGQoXCJ0YWJwYW5lbF9fYWN0aXZlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclNlbGVjdGVkKCkge1xuICAgICAgICBmb3IgKHRhYiBpbiB0YWJzKSB7XG4gICAgICAgICAgICB0YWJzW3RhYl0uY2xhc3NMaXN0LnJlbW92ZShcInRhYi1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJBY3RpdmUoKSB7XG4gICAgICAgIGZvciAoZWxlbWVudCBpbiBjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50W2VsZW1lbnRdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJwYW5lbF9fYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfVxufSApKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL3BhbmVscy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0EiLCJzb3VyY2VSb290IjoiIn0=");

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