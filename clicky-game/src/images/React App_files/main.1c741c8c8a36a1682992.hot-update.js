webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");
/* harmony import */ var _components_NavBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/NavBar.js */ "./src/components/NavBar.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_ClickItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ClickItem */ "./src/components/ClickItem.js");
/* harmony import */ var _characters_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters.json */ "./src/characters.json");
var _characters_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./characters.json */ "./src/characters.json", 1);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/keenanmapp/Documents/Clicky-Game/clicky-game/src/App.js";
 // import Wrapper from './components/Wrapper'






 // import ClickItem from './components/ClickItem';

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cards: [],
      score: 0,
      topScore: 0
    };
  }

  componentDidMount() {
    this.setState(this.state.cards, () => {
      _characters_json__WEBPACK_IMPORTED_MODULE_5__.forEach(person => this.state.cards.push(person));
    });
    console.log(this.state.cards);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), this.state.cards.map(person => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ClickItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: person.image,
      name: person.name,
      id: person.key,
      clicked: person.clicked,
      clickHandler: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.1c741c8c8a36a1682992.hot-update.js.map