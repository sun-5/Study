webpackHotUpdate("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n// main.js 是我们项目的js入口文件\r\n\r\n//1.导入jquery\r\n//import *** from *** 是ES6中导入模块的方式\r\n//由于ES6代码太高级，浏览器不一定支持 解析，所以这一行会有问题,用webpack处理此文件\r\n \r\n\r\n// const $ = require('jquery')  node.js中引入模块操作\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function(){\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('li:odd').css('backgroundColor','blue')\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('li:even').css('backgroundColor',function(){\r\n        return '#' + '4caf50'\r\n    })\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

})