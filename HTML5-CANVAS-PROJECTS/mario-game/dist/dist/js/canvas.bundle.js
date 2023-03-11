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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable */





var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = 576;
canvas.width = 1024;
var gravity = 0.5;
var scrollOffset = 0;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

var Player = /*#__PURE__*/function () {
  function Player(width, height, color, speed) {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.speed = speed;
    this.width = 66;
    this.height = 150;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
    console.log(this.currentSprite);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && this.currentSprite === this.sprites.stand.right) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === this.sprites.run.right) {
        this.frames = 0;
      } // this.position.x += this.speed.x;\\


      this.position.y += this.speed.y;
      this.position.x += this.speed.x; // if (this.position.y < 0 || this.position.y + this.height > canvas.height) {
      //     gravity = -
      // }

      if (this.position.y + this.height + this.speed.y <= canvas.height) {
        this.speed.y += gravity;

        if (0 <= this.position.y + this.height + this.speed.y && this.position.y + this.height + this.speed.y <= 10) {
          this.speed.y = -this.speed.y;
        }
      }

      this.draw();
    }
  }]);

  return Player;
}();

function createImage(ImageSrc) {
  var image = new Image();
  image.src = ImageSrc;
  return image;
}

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var player = new Player(40, 40, 'red', {
  x: 0,
  y: 1
});
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var backgroundImage = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var hillsImage = createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platforms = [];
var genericObject = [];

function init() {
  scrollOffset = 0;

  function createImage(ImageSrc) {
    var image = new Image();
    image.src = ImageSrc;
    return image;
  }

  player = new Player(40, 40, 'red', {
    x: 0,
    y: 1
  });
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  backgroundImage = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  hillsImage = createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  platforms = [new Platform({
    x: 0,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 1 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 50,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 200,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 200,
    y: 470,
    image: platformImage
  })];
  genericObject = [new GenericObject({
    x: -1,
    y: -1,
    image: backgroundImage
  }), new GenericObject({
    x: 0,
    y: 47,
    image: hillsImage
  })];
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObject.forEach(function (genObject) {
    genObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.speed.x = 5;
  } else if (keys.left.pressed && player.position.x > 0) {
    player.speed.x = -5;
  } else {
    player.speed.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      genericObject.forEach(function (genObject) {
        genObject.position.x -= 1;
        console.log(genObject.position.x);
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
    }
  } //platform collision detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.speed.y >= platform.position.y) {
      if (platform.position.x < player.position.x && player.position.x < platform.position.x + platform.width) {
        player.speed.y = 0;
      } else {
        player.speed.y = player.speed.y;
      }
    }
  });

  if (player.position.y >= canvas.height) {
    init();
  }
}

animate();
init();
window.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = true;
      break;

    case 87:
      console.log('up');
      player.speed.y -= 15;
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
      break;

    default:
      break;
  }
});
window.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 65:
      console.log('left');
      keys.left.pressed = false;
      break;

    case 87:
      console.log('up');
      break;

    case 83:
      console.log('down');
      break;

    case 68:
      console.log('right');
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
      break;

    default:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map