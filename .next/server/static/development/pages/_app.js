module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/MainNavbar.js":
/*!**********************************!*\
  !*** ./components/MainNavbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "@material-ui/icons/ArrowBackIos");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  }
}));
function MenuAppBar() {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    style: {
      backgroundColor: '#33b5e5'
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: () => {
      router.back();
    },
    style: {
      cursor: 'pointer'
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h4",
    className: "navbar-heading navbar-custom"
  }, "Insurdinary Insurance Advice"))));
}

/***/ }),

/***/ "./contexts/FormContext.js":
/*!*********************************!*\
  !*** ./contexts/FormContext.js ***!
  \*********************************/
/*! exports provided: FormContext, DispatchContext, GlobalFormProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchContext", function() { return DispatchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFormProvider", function() { return GlobalFormProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useLocalStorageReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useLocalStorageReducer */ "./hooks/useLocalStorageReducer.js");
/* harmony import */ var _reducers_form_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/form.reducer */ "./reducers/form.reducer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultForm = {};
const FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const DispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function GlobalFormProvider(props) {
  const [form, dispatch] = Object(_hooks_useLocalStorageReducer__WEBPACK_IMPORTED_MODULE_1__["useLocalStorageReducer"])("form", defaultForm, _reducers_form_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]);
  console.log('dispatch', dispatch);
  return __jsx(FormContext.Provider, {
    value: form
  }, __jsx(DispatchContext.Provider, {
    value: dispatch
  }, props.children));
}

/***/ }),

/***/ "./hooks/useLocalStorageReducer.js":
/*!*****************************************!*\
  !*** ./hooks/useLocalStorageReducer.js ***!
  \*****************************************/
/*! exports provided: useLocalStorageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocalStorageReducer", function() { return useLocalStorageReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useLocalStorageReducer(key, defaultVal, reducer) {
  // make piece of state based on of value in localstorage (or default)
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, defaultVal, () => {
    let val;

    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }

    return val;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, dispatch];
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap-css-only/css/bootstrap.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-css-only/css/bootstrap.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/mdbreact/dist/css/mdb.css":
/*!************************************************!*\
  !*** ./node_modules/mdbreact/dist/css/mdb.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MainNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainNavbar */ "./components/MainNavbar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_css_global_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/global.css */ "./public/css/global.css");
/* harmony import */ var _public_css_global_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_global_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const theme = {
  colors: {
    primary: '#0070f3'
  }
};
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
      theme: theme
    }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
      maxWidth: "lg"
    }, __jsx(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["GlobalFormProvider"], null, __jsx(_components_MainNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(Component, pageProps))));
  }

} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
//export default MyApp

/***/ }),

/***/ "./public/css/global.css":
/*!*******************************!*\
  !*** ./public/css/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./reducers/form.reducer.js":
/*!**********************************!*\
  !*** ./reducers/form.reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "ID":
      if (state.id) {
        return state;
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          id: action.id
        });
      }

    case "ADD_SPOUSE":
      return _objectSpread(_objectSpread({}, state), {}, {
        spouse: action.spouse
      });

    case "SPOUSE_AGE":
      return _objectSpread(_objectSpread({}, state), {}, {
        spouseAge: action.spouseAge
      });

    case "HAS_CHILDREN":
      return _objectSpread(_objectSpread({}, state), {}, {
        hasChildren: action.hasChildren
      });

    case "NUMBER_OF_CHILDREN":
      return _objectSpread(_objectSpread({}, state), {}, {
        numberOfChildren: action.numberOfChildren
      });

    case "CHILDREN_AGE_ARRAY":
      return _objectSpread(_objectSpread({}, state), {}, {
        childrenAgeArray: action.childrenAgeArray
      });

    case "PAY_FOR_COLLEGE":
      return _objectSpread(_objectSpread({}, state), {}, {
        payForCollege: action.payForCollege
      });

    case "DOB":
      return _objectSpread(_objectSpread({}, state), {}, {
        dob: action.dob
      });

    case "SEX":
      return _objectSpread(_objectSpread({}, state), {}, {
        sex: action.sex
      });

    case "TOBACCO":
      return _objectSpread(_objectSpread({}, state), {}, {
        tobacco: action.tobacco
      });

    case "HEALTH_CONDITION":
      return _objectSpread(_objectSpread({}, state), {}, {
        healthCondition: action.healthCondition
      });

    case "YOUR_INCOME":
      return _objectSpread(_objectSpread({}, state), {}, {
        yourIncome: action.yourIncome
      });

    case "SPOUSE_INCOME":
      return _objectSpread(_objectSpread({}, state), {}, {
        spouseIncome: action.spouseIncome
      });

    case "RENT_OR_OWN":
      return _objectSpread(_objectSpread({}, state), {}, {
        rentOrOwn: action.rentOrOwn
      });

    case "MONTHLY_RENT":
      return _objectSpread(_objectSpread({}, state), {}, {
        monthlyRent: action.monthlyRent
      });

    case "MORTGAGE_CURRENT_BALANCE":
      return _objectSpread(_objectSpread({}, state), {}, {
        mortgageCurrentBalance: action.mortgageCurrentBalance
      });

    case "MORTGAGE_MONTHLY_PAYMENT":
      return _objectSpread(_objectSpread({}, state), {}, {
        mortgageMonthlyPayment: action.mortgageMonthlyPayment
      });

    case "LIFE_INSURANCE":
      return _objectSpread(_objectSpread({}, state), {}, {
        lifeInsurance: action.lifeInsurance
      });

    case "LIFE_INSURANCE_EMPLOYER":
      return _objectSpread(_objectSpread({}, state), {}, {
        lifeInsuranceEmployer: action.lifeInsuranceEmployer
      });

    case "LIFE_INSURANCE_PERSONAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        lifeInsurancePersonal: action.lifeInsurancePersonal
      });

    case "HAS_SAVINGS":
      return _objectSpread(_objectSpread({}, state), {}, {
        hasSavings: action.hasSavings
      });

    case "HAS_RETIREMENT_SAVINGS":
      return _objectSpread(_objectSpread({}, state), {}, {
        hasRetirementSavings: action.hasRetirementSavings
      });

    case "HAS_NON_RETIREMENT_SAVINGS":
      return _objectSpread(_objectSpread({}, state), {}, {
        hasNonRetirementSavings: action.hasNonRetirementSavings
      });

    case "HAS_DEBT":
      return _objectSpread(_objectSpread({}, state), {}, {
        debt: action.debt
      });

    case "DEBT_CREDIT_CARD":
      return _objectSpread(_objectSpread({}, state), {}, {
        debtCreditCard: action.debtCreditCard
      });

    case "DEBT_STUDENT_LOAN":
      return _objectSpread(_objectSpread({}, state), {}, {
        debtStudentLoan: action.debtStudentLoan
      });

    case "DEBT_HOME_EQUITY":
      return _objectSpread(_objectSpread({}, state), {}, {
        debtHomeEquity: action.debtHomeEquity
      });

    case "DEBT_LINE_OF_CREDIT":
      return _objectSpread(_objectSpread({}, state), {}, {
        debtLineOfCredit: action.debtLineOfCredit
      });

    case "DEBT_OTHER":
      return _objectSpread(_objectSpread({}, state), {}, {
        debtOther: action.debtOther
      });

    case "NAME_FIRST":
      return _objectSpread(_objectSpread({}, state), {}, {
        nameFirst: action.nameFirst
      });

    case "NAME_LAST":
      return _objectSpread(_objectSpread({}, state), {}, {
        nameLast: action.nameLast
      });

    case "NAME_EMAIL":
      return _objectSpread(_objectSpread({}, state), {}, {
        nameEmail: action.nameEmail
      });

    case "NAME_PHONE":
      return _objectSpread(_objectSpread({}, state), {}, {
        namePhone: action.namePhone
      });

    case "EXPENSE_MORTGAGE_RENT":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseMortgageAndRent: action.expenseMortgageAndRent
      });

    case "EXPENSE_HOUSING_BILLS_UTILITIES":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseHousingBillsUtilities: action.expenseHousingBillsUtilities
      });

    case "EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseGroceriesRestaurantsAlcohol: action.expenseGroceriesRestaurantsAlcohol
      });

    case "EXPENSE_PHONE_INTERNET_CABLE":
      return _objectSpread(_objectSpread({}, state), {}, {
        expensePhoneInternetCable: action.expensePhoneInternetCable
      });

    case "EXPENSE_SHOPPING_FITNESS_GROOMING":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseShoppingFitnessGrooming: action.expenseShoppingFitnessGrooming
      });

    case "EXPENSE_CARS_TAXIS_TRANSIT":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseCarsTaxisPublicTransit: action.expenseCarsTaxisPublicTransit
      });

    case "EXPENSE_CHILDCARE_EDUCATION":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseChildcareEducation: action.expenseChildcareEducation
      });

    case "EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseDiscretionaryTravelRecGifts: action.expenseDiscretionaryTravelRecGifts
      });

    case "EXPENSE_TOTAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        expenseTotal: action.expenseTotal
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowBackIos":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowBackIos" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBackIos");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpbk5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIk1lbnVBcHBCYXIiLCJjbGFzc2VzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmFja2dyb3VuZENvbG9yIiwiYmFjayIsImN1cnNvciIsImRlZmF1bHRGb3JtIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJmb3JtIiwiZGlzcGF0Y2giLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJrZXkiLCJkZWZhdWx0VmFsIiwicmVkdWNlciIsInN0YXRlIiwidXNlUmVkdWNlciIsInZhbCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTdHJpbmciLCJlIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicCIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsImNvbG9ycyIsInByaW1hcnkiLCJNeUFwcCIsImFjdGlvbiIsInR5cGUiLCJpZCIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiIsImNoaWxkcmVuQWdlQXJyYXkiLCJwYXlGb3JDb2xsZWdlIiwiZG9iIiwic2V4IiwidG9iYWNjbyIsImhlYWx0aENvbmRpdGlvbiIsInlvdXJJbmNvbWUiLCJzcG91c2VJbmNvbWUiLCJyZW50T3JPd24iLCJtb250aGx5UmVudCIsIm1vcnRnYWdlQ3VycmVudEJhbGFuY2UiLCJtb3J0Z2FnZU1vbnRobHlQYXltZW50IiwibGlmZUluc3VyYW5jZSIsImxpZmVJbnN1cmFuY2VFbXBsb3llciIsImxpZmVJbnN1cmFuY2VQZXJzb25hbCIsImhhc1NhdmluZ3MiLCJoYXNSZXRpcmVtZW50U2F2aW5ncyIsImhhc05vblJldGlyZW1lbnRTYXZpbmdzIiwiZGVidCIsImRlYnRDcmVkaXRDYXJkIiwiZGVidFN0dWRlbnRMb2FuIiwiZGVidEhvbWVFcXVpdHkiLCJkZWJ0TGluZU9mQ3JlZGl0IiwiZGVidE90aGVyIiwibmFtZUZpcnN0IiwibmFtZUxhc3QiLCJuYW1lRW1haWwiLCJuYW1lUGhvbmUiLCJleHBlbnNlTW9ydGdhZ2VBbmRSZW50IiwiZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcyIsImV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wiLCJleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlIiwiZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nIiwiZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQiLCJleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uIiwiZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0cyIsImV4cGVuc2VUb3RhbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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cEQ7O0FBQ0osU0FBSyx3Q0FBTDtBQUNJLDZDQUFXakYsS0FBWDtBQUFrQmtGLDBDQUFrQyxFQUFFMUMsTUFBTSxDQUFDMEM7QUFBN0Q7O0FBQ0osU0FBSyxlQUFMO0FBQ0ksNkNBQVdsRixLQUFYO0FBQWtCbUYsb0JBQVksRUFBRTNDLE1BQU0sQ0FBQzJDO0FBQXZDOztBQUNKO0FBQ0ksYUFBT25GLEtBQVA7QUExRlI7QUE0RkgsQ0E3RkQ7O0FBOEZlRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVBcHBCYXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzMzYjVlNSd9fT5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgICAgPEFycm93QmFja0lvc0ljb24gb25DbGljaz17KCkgPT4ge3JvdXRlci5iYWNrKCl9fSBzdHlsZT17e2N1cnNvcjoncG9pbnRlcid9fS8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkaW5nIG5hdmJhci1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgIEluc3VyZGluYXJ5IEluc3VyYW5jZSBBZHZpY2VcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyfSBmcm9tIFwiLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlUmVkdWNlclwiO1xyXG5pbXBvcnQgZm9ybVJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlclwiXHJcbmNvbnN0IGRlZmF1bHRGb3JtID0ge307XHJcbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbG9iYWxGb3JtUHJvdmlkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtmb3JtLCBkaXNwYXRjaF0gPSB1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyKFwiZm9ybVwiLCBkZWZhdWx0Rm9ybSwgZm9ybVJlZHVjZXIpO1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoJywgZGlzcGF0Y2gpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Zm9ybX0+XHJcbiAgICAgICAgICAgIDxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihrZXksIGRlZmF1bHRWYWwsIHJlZHVjZXIpIHtcclxuICAgIC8vIG1ha2UgcGllY2Ugb2Ygc3RhdGUgYmFzZWQgb24gb2YgdmFsdWUgaW4gbG9jYWxzdG9yYWdlIChvciBkZWZhdWx0KVxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWwsICgpID0+IHtcclxuICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBTdHJpbmcoZGVmYXVsdFZhbClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIHZhbCA9IGRlZmF1bHRWYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICAgIH0sIFtzdGF0ZV0pO1xyXG4gICAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdXHJcbn1cclxuZXhwb3J0IHt1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyfVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQge0dsb2JhbEZvcm1Qcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IE1haW5OYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbk5hdmJhclwiO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwLWNzcy1vbmx5L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnbWRicmVhY3QvZGlzdC9jc3MvbWRiLmNzcyc7XHJcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9nbG9iYWwuY3NzJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICAgICAgY29sb3JzOiB7XHJcbiAgICAgICAgICBwcmltYXJ5OiAnIzAwNzBmMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R2xvYmFsRm9ybVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1haW5OYXZiYXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR2xvYmFsRm9ybVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4vLyBPbmx5IHVuY29tbWVudCB0aGlzIG1ldGhvZCBpZiB5b3UgaGF2ZSBibG9ja2luZyBkYXRhIHJlcXVpcmVtZW50cyBmb3JcclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xyXG4vLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cclxuLy8gYmUgc2VydmVyLXNpZGUgcmVuZGVyZWQuXHJcbi8vXHJcbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XHJcbi8vICAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxyXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuLy9cclxuLy8gICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XHJcbi8vIH1cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJJRFwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaWQ6IGFjdGlvbi5pZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZTogYWN0aW9uLnNwb3VzZX07XHJcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc0NoaWxkcmVuOiBhY3Rpb24uaGFzQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbnVtYmVyT2ZDaGlsZHJlbjogYWN0aW9uLm51bWJlck9mQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJDSElMRFJFTl9BR0VfQVJSQVlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xyXG4gICAgICAgIGNhc2UgXCJQQVlfRk9SX0NPTExFR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9O1xyXG4gICAgICAgIGNhc2UgXCJET0JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZG9iOiBhY3Rpb24uZG9ifTtcclxuICAgICAgICBjYXNlIFwiU0VYXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XHJcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9iYWNjbzogYWN0aW9uLnRvYmFjY299O1xyXG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhlYWx0aENvbmRpdGlvbjogYWN0aW9uLmhlYWx0aENvbmRpdGlvbn07XHJcbiAgICAgICAgY2FzZSBcIllPVVJfSU5DT01FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcclxuICAgICAgICBjYXNlIFwiU1BPVVNFX0lOQ09NRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VJbmNvbWU6IGFjdGlvbi5zcG91c2VJbmNvbWV9O1xyXG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZW50T3JPd246IGFjdGlvbi5yZW50T3JPd259O1xyXG4gICAgICAgIGNhc2UgXCJNT05USExZX1JFTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX0NVUlJFTlRfQkFMQU5DRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlOiBhY3Rpb24ubW9ydGdhZ2VDdXJyZW50QmFsYW5jZX07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBhY3Rpb24ubW9ydGdhZ2VNb250aGx5UGF5bWVudH07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBhY3Rpb24ubGlmZUluc3VyYW5jZUVtcGxveWVyfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBhY3Rpb24ubGlmZUluc3VyYW5jZVBlcnNvbmFsfTtcclxuICAgICAgICBjYXNlIFwiSEFTX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzU2F2aW5nczogYWN0aW9uLmhhc1NhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzUmV0aXJlbWVudFNhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfTk9OX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNOb25SZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc05vblJldGlyZW1lbnRTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0RFQlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidDogYWN0aW9uLmRlYnR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0NSRURJVF9DQVJEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRDcmVkaXRDYXJkOiBhY3Rpb24uZGVidENyZWRpdENhcmR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX1NUVURFTlRfTE9BTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0U3R1ZGVudExvYW46IGFjdGlvbi5kZWJ0U3R1ZGVudExvYW59O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0hPTUVfRVFVSVRZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRIb21lRXF1aXR5OiBhY3Rpb24uZGVidEhvbWVFcXVpdHl9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0xJTkVfT0ZfQ1JFRElUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRMaW5lT2ZDcmVkaXQ6IGFjdGlvbi5kZWJ0TGluZU9mQ3JlZGl0fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9PVEhFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0T3RoZXI6IGFjdGlvbi5kZWJ0T3RoZXJ9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0ZJUlNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVGaXJzdDogYWN0aW9uLm5hbWVGaXJzdH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfTEFTVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lTGFzdDogYWN0aW9uLm5hbWVMYXN0fTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9FTUFJTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRW1haWw6IGFjdGlvbi5uYW1lRW1haWx9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX1BIT05FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVQaG9uZTogYWN0aW9uLm5hbWVQaG9uZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlTW9ydGdhZ2VBbmRSZW50OiBhY3Rpb24uZXhwZW5zZU1vcnRnYWdlQW5kUmVudH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfSE9VU0lOR19CSUxMU19VVElMSVRJRVNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllczogYWN0aW9uLmV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0dST0NFUklFU19SRVNUQVVSQU5UU19BTENPSE9MXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2w6IGFjdGlvbi5leHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlOiBhY3Rpb24uZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfU0hPUFBJTkdfRklUTkVTU19HUk9PTUlOR1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmc6IGFjdGlvbi5leHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0NBUlNfVEFYSVNfVFJBTlNJVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdDogYWN0aW9uLmV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0fTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb246IGFjdGlvbi5leHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9ufTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9ESVNDUkVUSU9OQVJZX1RSQVZFTF9SRUNfR0lGVFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0czogYWN0aW9uLmV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1RPVEFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VUb3RhbDogYWN0aW9uLmV4cGVuc2VUb3RhbH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==