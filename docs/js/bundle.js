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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sprite = __webpack_require__(/*! ./Sprite */ "./src/Sprite.js");

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    var _this = this;

    _classCallCheck(this, Main);

    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = 300;
    this.canvas.height = 300;

    this.imgs = {
      'table': document.querySelector('#img-table'),
      'bed': document.querySelector('#img-bed'),
      'z': document.querySelector('#img-z')
    };

    this.sprites = [new _Sprite2.default(100, 100, this.imgs.bed), new _Sprite2.default(52, 146, this.imgs.table), new _Sprite2.default(80, 135, this.imgs.z)];

    this.inputCanvas = document.createElement('canvas');
    this.inputCanvas.width = this.canvas.width;
    this.inputCanvas.height = this.canvas.width;
    this.inputCanvasCtx = this.inputCanvas.getContext('2d');

    this.clicked = "Nothing :(";

    this.canvas.addEventListener('click', function (event) {
      var color = _this.inputCanvasCtx.getImageData(event.layerX, event.layerY, 1, 1).data;
      var hexColor = ("000000" + _this.rgbToHex(color[0], color[1], color[2])).slice(-6);

      console.log('Youjust clicked on color #' + hexColor);

      var sprite = _this.sprites.filter(function (sprite) {
        return sprite.id === hexColor;
      });
      _this.clicked = sprite[0].name;
    });

    setInterval(function () {
      return _this.render();
    }, 1000 / 30);
  }

  _createClass(Main, [{
    key: 'rgbToHex',
    value: function rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255) throw "Invalid color component";
      return (r << 16 | g << 8 | b).toString(16);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.ctx.fillStyle = "#112";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.sprites.forEach(function (sprite) {
        sprite.render(_this2.ctx);
        sprite.renderColor(_this2.inputCanvasCtx);
      });

      this.ctx.fillStyle = "#EEF";
      this.ctx.font = "14px sans-serif";
      this.ctx.fillText("You clicked on: " + this.clicked, 15, 20);
    }
  }]);

  return Main;
}();

exports.default = Main;

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
  function Sprite(x, y, img) {
    _classCallCheck(this, Sprite);

    this.x = x;
    this.y = y;
    this.img = img;
    this.name = this.img.id.replace('img-', '');
    this.id = Math.floor(Math.random() * 16777215).toString(16);
    console.log("Created '" + this.name + "' with color #" + this.id);
  }

  _createClass(Sprite, [{
    key: 'render',
    value: function render(ctx) {
      ctx.drawImage(this.img, this.x, this.y);
    }
  }, {
    key: 'renderColor',
    value: function renderColor(ctx) {
      var buffer = document.createElement('canvas');
      buffer.width = this.img.width;
      buffer.height = this.img.height;
      var bx = buffer.getContext('2d');
      bx.fillStyle = '#' + this.id;
      bx.fillRect(0, 0, buffer.width, buffer.height);
      bx.globalCompositeOperation = "destination-atop";
      bx.drawImage(this.img, 0, 0);
      ctx.drawImage(buffer, this.x, this.y);
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(/*! ./Main */ "./src/Main.js");

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function (event) {
  new _Main2.default();
  var markdownContainer = document.querySelector('#markdown');
  var converter = new showdown.Converter();
  markdownContainer.innerHTML = converter.makeHtml(markdownContainer.textContent.replace(/(?:\r\n|\r|\n)/g, '\n'));
  hljs.initHighlightingOnLoad();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map