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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/RentOrOwnForm.js":
/*!*************************************!*\
  !*** ./components/RentOrOwnForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rentOrOwnForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function rentOrOwnForm() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);
  const {
    0: rentOrOwn,
    1: setRentOrOwn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //renter

  const {
    0: monthlyRent,
    1: setMonthlyRent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //owner

  const {
    0: currentBalance,
    1: setCurrentBalance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: monthlyPayment,
    1: setMonthlyPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isNext,
    1: setIsNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // modal

  const {
    0: showInTheMarket,
    1: setShowInTheMarket
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseInTheMarket = () => setShowInTheMarket(false);

  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: '25ch'
    }
  }));
  const classes = useStyles();
  const now = 65;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (rentOrOwn !== form.rentOrOwn) {
      setRentOrOwn(form.rentOrOwn ? form.rentOrOwn : '');
    }

    if (monthlyRent !== form.monthlyRent) {
      setMonthlyRent(form.monthlyRent ? form.monthlyRent : 0);
    }

    if (currentBalance !== form.mortgageCurrentBalance) {
      setCurrentBalance(form.mortgageCurrentBalance ? form.mortgageCurrentBalance : '');
    }

    if (monthlyPayment !== form.mortgageMonthlyPayment) {
      setMonthlyPayment(form.mortgageMonthlyPayment ? form.mortgageMonthlyPayment : '');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (rentOrOwn === "Rent") {
      dispatch({
        type: "RENT_OR_OWN",
        rentOrOwn: "Rent"
      });
      document.getElementById(`Own-yes`).classList.remove('active_button');
      document.getElementById(`Rent-yes`).classList.add('active_button');
      setCurrentBalance();
      setMonthlyPayment();
      dispatch({
        type: "MORTGAGE_CURRENT_BALANCE",
        mortgageCurrentBalance: 0
      });
      dispatch({
        type: "MORTGAGE_MONTHLY_PAYMENT",
        mortgageMonthlyPayment: 0
      });
    } else if (rentOrOwn === "Own") {
      dispatch({
        type: "RENT_OR_OWN",
        rentOrOwn: "Own"
      });
      document.getElementById(`Rent-yes`).classList.remove('active_button');
      document.getElementById(`Own-yes`).classList.add('active_button');
      setMonthlyRent('');
      dispatch({
        type: "MONTHLY_RENT",
        monthlyRent: 0
      });
    }

    if (rentOrOwn === "Rent" && (monthlyRent > 0 || monthlyRent === 0)) {
      setIsNext(false);
    } else if (rentOrOwn === "Own" && (currentBalance > 0 || currentBalance === 0) && (monthlyPayment > 0 || monthlyPayment === 0)) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }

    dispatch({
      type: "MONTHLY_RENT",
      monthlyRent: monthlyRent
    });
    dispatch({
      type: "MORTGAGE_CURRENT_BALANCE",
      mortgageCurrentBalance: currentBalance
    });
    dispatch({
      type: "MORTGAGE_MONTHLY_PAYMENT",
      mortgageMonthlyPayment: monthlyPayment
    });
  }, [rentOrOwn, monthlyRent, currentBalance, monthlyPayment]);

  function handleClick(e) {
    setRentOrOwn(e);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    style: {
      margin: '10px auto'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ProgressBar"], {
    style: {
      height: '0.5rem'
    },
    animated: true,
    striped: true,
    variant: "info",
    label: `${now}% Done`,
    now: now
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    maxWidth: "sm",
    style: {
      marginTop: '40px'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("h4", {
    className: "header"
  }, "Do you rent or own your primary resident?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    id: "Rent-yes",
    onClick: () => handleClick('Rent'),
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "Rent")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    id: "Own-yes",
    onClick: () => handleClick('Own'),
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "Own"))), rentOrOwn === "Rent" && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    justify: "center",
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx("h5", {
    className: "header"
  }, "What is your monthly rent?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Rent"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: monthlyRent,
    type: "number",
    onChange: e => {
      console.log('valudddd', e.target.value);
      setMonthlyRent(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
      position: "start"
    }, "$")
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    onClick: () => router.push('/lifeInsurance'),
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg",
    disabled: isNext
  }, "Next"))), rentOrOwn === "Own" && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    justify: "center",
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx("h5", {
    className: "header"
  }, "What is your mortgage amount?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Balance"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: currentBalance,
    type: "number",
    onChange: e => setCurrentBalance(e.target.value !== '' ? parseInt(e.target.value) : ''),
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
      position: "start"
    }, "$")
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Monthly Payment"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: monthlyPayment,
    type: "number",
    onChange: e => setMonthlyPayment(e.target.value !== '' ? parseInt(e.target.value) : ''),
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
      position: "start"
    }, "$")
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    onClick: () => router.push('/lifeInsurance'),
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg",
    disabled: isNext
  }, "Next"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "What if I'm in the market to buy?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowInTheMarket(true);
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showInTheMarket,
    onHide: handleCloseInTheMarket
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "First off, fingers crossed that you find your dream home! However, you should select \u201Cown\u201D only if you currently own or are in the process of purchasing your place of residence. If you plan to buy a home in the future, but are not currently looking, please don\u2019t select \u201Cown.\u201D The time of purchase, sale price and mortgage payments you make can significantly impact your coverage needs. Until you\u2019re certain about these details, it\u2019s best to not include them to ensure you aren\u2019t paying for coverage that you might not ultimately need. When you do buy your home, we recommend revisiting the PolicyMe life insurance checkup to get updated advice and understand how your coverage needs may have changed."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseInTheMarket
  }, "Close")))));
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

/***/ "./pages/rentOrOwn.js":
/*!****************************!*\
  !*** ./pages/rentOrOwn.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rentOrOwn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_RentOrOwnForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RentOrOwnForm */ "./components/RentOrOwnForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function rentOrOwn() {
  return __jsx(_components_RentOrOwnForm__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

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

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/rentOrOwn.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\rentOrOwn.js */"./pages/rentOrOwn.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap-icons":
/*!****************************************!*\
  !*** external "react-bootstrap-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-icons");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZW50T3JPd25Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0Zvcm1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVudE9yT3duLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIiJdLCJuYW1lcyI6WyJyZW50T3JPd25Gb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0IiwicmVudE9yT3duIiwic2V0UmVudE9yT3duIiwidXNlU3RhdGUiLCJtb250aGx5UmVudCIsInNldE1vbnRobHlSZW50IiwiY3VycmVudEJhbGFuY2UiLCJzZXRDdXJyZW50QmFsYW5jZSIsIm1vbnRobHlQYXltZW50Iiwic2V0TW9udGhseVBheW1lbnQiLCJpc05leHQiLCJzZXRJc05leHQiLCJzaG93SW5UaGVNYXJrZXQiLCJzZXRTaG93SW5UaGVNYXJrZXQiLCJoYW5kbGVDbG9zZUluVGhlTWFya2V0IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aXRob3V0TGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJub3ciLCJ1c2VFZmZlY3QiLCJtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlIiwibW9ydGdhZ2VNb250aGx5UGF5bWVudCIsInR5cGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFuZGxlQ2xpY2siLCJlIiwiaGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicGFyc2VJbnQiLCJwdXNoIiwiZGVmYXVsdEZvcm0iLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjaGlsZHJlbiIsImtleSIsImRlZmF1bHRWYWwiLCJyZWR1Y2VyIiwic3RhdGUiLCJ1c2VSZWR1Y2VyIiwidmFsIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlN0cmluZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhY3Rpb24iLCJpZCIsInNwb3VzZSIsInNwb3VzZUFnZSIsImhhc0NoaWxkcmVuIiwibnVtYmVyT2ZDaGlsZHJlbiIsImNoaWxkcmVuQWdlQXJyYXkiLCJwYXlGb3JDb2xsZWdlIiwiZG9iIiwic2V4IiwidG9iYWNjbyIsImhlYWx0aENvbmRpdGlvbiIsInlvdXJJbmNvbWUiLCJzcG91c2VJbmNvbWUiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiaGFzU2F2aW5ncyIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiLCJkZWJ0IiwiZGVidENyZWRpdENhcmQiLCJkZWJ0U3R1ZGVudExvYW4iLCJkZWJ0SG9tZUVxdWl0eSIsImRlYnRMaW5lT2ZDcmVkaXQiLCJkZWJ0T3RoZXIiLCJuYW1lRmlyc3QiLCJuYW1lTGFzdCIsIm5hbWVFbWFpbCIsIm5hbWVQaG9uZSIsImV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQiLCJleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIiwiZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCIsImV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUiLCJleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmciLCJleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCIsImV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24iLCJleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIiwiZXhwZW5zZVRvdGFsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUN2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aUNBQXlCLEVBQUVqQyxNQUFNLENBQUNpQztBQUFwRDs7QUFDSixTQUFLLG1DQUFMO0FBQ0ksNkNBQVc1QyxLQUFYO0FBQWtCNkMsc0NBQThCLEVBQUVsQyxNQUFNLENBQUNrQztBQUF6RDs7QUFDSixTQUFLLDRCQUFMO0FBQ0ksNkNBQVc3QyxLQUFYO0FBQWtCOEMscUNBQTZCLEVBQUVuQyxNQUFNLENBQUNtQztBQUF4RDs7QUFDSixTQUFLLDZCQUFMO0FBQ0ksNkNBQVc5QyxLQUFYO0FBQWtCK0MsaUNBQXlCLEVBQUVwQyxNQUFNLENBQUNvQztBQUFwRDs7QUFDSixTQUFLLHdDQUFMO0FBQ0ksNkNBQVcvQyxLQUFYO0FBQWtCZ0QsMENBQWtDLEVBQUVyQyxNQUFNLENBQUNxQztBQUE3RDs7QUFDSixTQUFLLGVBQUw7QUFDSSw2Q0FBV2hELEtBQVg7QUFBa0JpRCxvQkFBWSxFQUFFdEMsTUFBTSxDQUFDc0M7QUFBdkM7O0FBQ0o7QUFDSSxhQUFPakQsS0FBUDtBQTFGUjtBQTRGSCxDQTdGRDs7QUE4RmVELHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZW50T3JPd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgSW5wdXRBZG9ybm1lbnQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVudE9yT3duRm9ybSgpIHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHRjb25zdCBmb3JtID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcblx0Y29uc3QgW3JlbnRPck93biwgc2V0UmVudE9yT3duXSA9IHVzZVN0YXRlKCcnKTtcclxuXHQvL3JlbnRlclxyXG5cdGNvbnN0IFttb250aGx5UmVudCwgc2V0TW9udGhseVJlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cdC8vb3duZXJcclxuXHRjb25zdCBbY3VycmVudEJhbGFuY2UsIHNldEN1cnJlbnRCYWxhbmNlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbbW9udGhseVBheW1lbnQsIHNldE1vbnRobHlQYXltZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Ly8gbW9kYWxcclxuXHRjb25zdCBbc2hvd0luVGhlTWFya2V0LCBzZXRTaG93SW5UaGVNYXJrZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlSW5UaGVNYXJrZXQgPSAoKSA9PiBzZXRTaG93SW5UaGVNYXJrZXQoZmFsc2UpO1xyXG5cclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdCAgZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0ICBmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdFx0fSxcclxuXHRcdG1hcmdpbjoge1xyXG5cdFx0ICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR9LFxyXG5cdFx0d2l0aG91dExhYmVsOiB7XHJcblx0XHQgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdCAgd2lkdGg6ICcyNWNoJyxcclxuXHRcdH0sXHJcblx0fSkpO1xyXG5cdFxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3Qgbm93ID0gNjU7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYocmVudE9yT3duICE9PSBmb3JtLnJlbnRPck93bil7XHJcbiAgICAgICAgICAgIHNldFJlbnRPck93bihmb3JtLnJlbnRPck93biA/IGZvcm0ucmVudE9yT3duIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtb250aGx5UmVudCAhPT0gZm9ybS5tb250aGx5UmVudCl7XHJcbiAgICAgICAgICAgIHNldE1vbnRobHlSZW50KGZvcm0ubW9udGhseVJlbnQgPyBmb3JtLm1vbnRobHlSZW50IDogMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGN1cnJlbnRCYWxhbmNlICE9PSBmb3JtLm1vcnRnYWdlQ3VycmVudEJhbGFuY2Upe1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50QmFsYW5jZShmb3JtLm1vcnRnYWdlQ3VycmVudEJhbGFuY2UgPyBmb3JtLm1vcnRnYWdlQ3VycmVudEJhbGFuY2UgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1vbnRobHlQYXltZW50ICE9PSBmb3JtLm1vcnRnYWdlTW9udGhseVBheW1lbnQpe1xyXG4gICAgICAgICAgICBzZXRNb250aGx5UGF5bWVudChmb3JtLm1vcnRnYWdlTW9udGhseVBheW1lbnQgPyBmb3JtLm1vcnRnYWdlTW9udGhseVBheW1lbnQgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmKHJlbnRPck93biA9PT0gXCJSZW50XCIpe1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiUkVOVF9PUl9PV05cIiwgcmVudE9yT3duOiBcIlJlbnRcIiB9KTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYE93bi15ZXNgKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJylcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJlbnQteWVzYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRcdHNldEN1cnJlbnRCYWxhbmNlKCk7XHJcblx0XHRcdHNldE1vbnRobHlQYXltZW50KCk7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIiwgbW9ydGdhZ2VDdXJyZW50QmFsYW5jZTogMCB9KTtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiAwIH0pO1xyXG5cdFx0fWVsc2UgaWYocmVudE9yT3duID09PSBcIk93blwiKXtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlJFTlRfT1JfT1dOXCIsIHJlbnRPck93bjogXCJPd25cIiB9KTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFJlbnQteWVzYCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBPd24teWVzYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRcdHNldE1vbnRobHlSZW50KCcnKTtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk1PTlRITFlfUkVOVFwiLCBtb250aGx5UmVudDogMCB9KTtcclxuXHRcdH1cclxuXHRcdGlmKHJlbnRPck93biA9PT0gXCJSZW50XCIgJiYgKG1vbnRobHlSZW50ID4gMCB8fCBtb250aGx5UmVudCA9PT0gMCkpe1xyXG5cdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZihyZW50T3JPd24gPT09IFwiT3duXCIgJiYgKGN1cnJlbnRCYWxhbmNlID4gMCB8fCBjdXJyZW50QmFsYW5jZSA9PT0gMCkgJiYgKG1vbnRobHlQYXltZW50ID4gMCB8fCBtb250aGx5UGF5bWVudCA9PT0gMCkpe1xyXG5cdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHNldElzTmV4dCh0cnVlKVxyXG5cdFx0fVxyXG5cclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJNT05USExZX1JFTlRcIiwgbW9udGhseVJlbnQ6IG1vbnRobHlSZW50IH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIiwgbW9ydGdhZ2VDdXJyZW50QmFsYW5jZTogY3VycmVudEJhbGFuY2UgfSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBtb250aGx5UGF5bWVudCB9KTtcclxuXHJcblx0fSwgW3JlbnRPck93biwgbW9udGhseVJlbnQsIGN1cnJlbnRCYWxhbmNlLCBtb250aGx5UGF5bWVudF0pO1xyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVDbGljayhlKXtcclxuXHRcdHNldFJlbnRPck93bihlKVxyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IGFuaW1hdGVkIHN0cmlwZWQgdmFyaWFudD1cImluZm9cIiBsYWJlbD17YCR7bm93fSUgRG9uZWB9IG5vdz17bm93fSAvPlxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0naGVhZGVyJz5EbyB5b3UgcmVudCBvciBvd24geW91ciBwcmltYXJ5IHJlc2lkZW50PzwvaDQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJSZW50LXllc1wiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+XHJcblx0XHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2soJ1JlbnQnKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0UmVudFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRpZD1cIk93bi15ZXNcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT5cclxuXHRcdFx0XHRcdFx0XHRoYW5kbGVDbGljaygnT3duJylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdE93blxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdHtyZW50T3JPd24gPT09IFwiUmVudFwiICYmIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiaGVhZGVyXCI+V2hhdCBpcyB5b3VyIG1vbnRobHkgcmVudD88L2g1PlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5SZW50PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXttb250aGx5UmVudH1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2YWx1ZGRkZCcsZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRNb250aGx5UmVudChlLnRhcmdldC52YWx1ZSE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvbGlmZUluc3VyYW5jZScpfVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc05leHR9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdE5leHRcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR9XHJcblx0XHRcdHtyZW50T3JPd24gPT09IFwiT3duXCIgJiYgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJoZWFkZXJcIj5XaGF0IGlzIHlvdXIgbW9ydGdhZ2UgYW1vdW50PzwvaDU+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPkJhbGFuY2U8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2N1cnJlbnRCYWxhbmNlfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVudEJhbGFuY2UoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpfVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPk1vbnRobHkgUGF5bWVudDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bW9udGhseVBheW1lbnR9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRNb250aGx5UGF5bWVudChlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyl9XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaCgnL2xpZmVJbnN1cmFuY2UnKX1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNOZXh0fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD59XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaGF0IGlmIEknbSBpbiB0aGUgbWFya2V0IHRvIGJ1eT8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dJblRoZU1hcmtldCh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR7Lyphc2sgYWJvdXQgbmljb3RpbmUqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dJblRoZU1hcmtldH0gb25IaWRlPXtoYW5kbGVDbG9zZUluVGhlTWFya2V0fT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5GaXJzdCBvZmYsIGZpbmdlcnMgY3Jvc3NlZCB0aGF0IHlvdSBmaW5kIHlvdXIgZHJlYW0gaG9tZSEgSG93ZXZlciwgeW91IHNob3VsZCBzZWxlY3Qg4oCcb3du4oCdIG9ubHkgaWYgeW91IGN1cnJlbnRseSBvd24gb3IgYXJlIGluIHRoZSBwcm9jZXNzIG9mIHB1cmNoYXNpbmcgeW91ciBwbGFjZSBvZiByZXNpZGVuY2UuIElmIHlvdSBwbGFuIHRvIGJ1eSBhIGhvbWUgaW4gdGhlIGZ1dHVyZSwgYnV0IGFyZSBub3QgY3VycmVudGx5IGxvb2tpbmcsIHBsZWFzZSBkb27igJl0IHNlbGVjdCDigJxvd24u4oCdXHJcblxyXG5cdFx0XHRcdFx0VGhlIHRpbWUgb2YgcHVyY2hhc2UsIHNhbGUgcHJpY2UgYW5kIG1vcnRnYWdlIHBheW1lbnRzIHlvdSBtYWtlIGNhbiBzaWduaWZpY2FudGx5IGltcGFjdCB5b3VyIGNvdmVyYWdlIG5lZWRzLiBVbnRpbCB5b3XigJlyZSBjZXJ0YWluIGFib3V0IHRoZXNlIGRldGFpbHMsIGl04oCZcyBiZXN0IHRvIG5vdCBpbmNsdWRlIHRoZW0gdG8gZW5zdXJlIHlvdSBhcmVu4oCZdCBwYXlpbmcgZm9yIGNvdmVyYWdlIHRoYXQgeW91IG1pZ2h0IG5vdCB1bHRpbWF0ZWx5IG5lZWQuXHJcblxyXG5cdFx0XHRcdFx0V2hlbiB5b3UgZG8gYnV5IHlvdXIgaG9tZSwgd2UgcmVjb21tZW5kIHJldmlzaXRpbmcgdGhlIFBvbGljeU1lIGxpZmUgaW5zdXJhbmNlIGNoZWNrdXAgdG8gZ2V0IHVwZGF0ZWQgYWR2aWNlIGFuZCB1bmRlcnN0YW5kIGhvdyB5b3VyIGNvdmVyYWdlIG5lZWRzIG1heSBoYXZlIGNoYW5nZWQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUluVGhlTWFya2V0fT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJ9IGZyb20gXCIuLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyXCI7XHJcbmltcG9ydCBmb3JtUmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyXCJcclxuY29uc3QgZGVmYXVsdEZvcm0gPSB7fTtcclxuZXhwb3J0IGNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsb2JhbEZvcm1Qcm92aWRlcihwcm9wcykge1xyXG4gICAgY29uc3QgW2Zvcm0sIGRpc3BhdGNoXSA9IHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoXCJmb3JtXCIsIGRlZmF1bHRGb3JtLCBmb3JtUmVkdWNlcik7XHJcbiAgICBjb25zb2xlLmxvZygnZGlzcGF0Y2gnLCBkaXNwYXRjaClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtmb3JtfT5cclxuICAgICAgICAgICAgPERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8L0Zvcm1Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiB1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyKGtleSwgZGVmYXVsdFZhbCwgcmVkdWNlcikge1xyXG4gICAgLy8gbWFrZSBwaWVjZSBvZiBzdGF0ZSBiYXNlZCBvbiBvZiB2YWx1ZSBpbiBsb2NhbHN0b3JhZ2UgKG9yIGRlZmF1bHQpXHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgZGVmYXVsdFZhbCwgKCkgPT4ge1xyXG4gICAgICAgIGxldCB2YWw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFsID0gSlNPTi5wYXJzZShcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8IFN0cmluZyhkZWZhdWx0VmFsKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKXtcclxuICAgICAgICAgICAgdmFsID0gZGVmYXVsdFZhbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsXHJcbiAgICB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxyXG4gICAgfSwgW3N0YXRlXSk7XHJcbiAgICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaF1cclxufVxyXG5leHBvcnQge3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJ9XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZW50T3JPd25Gb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1JlbnRPck93bkZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbnRPck93bigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlbnRPck93bkZvcm0vPlxyXG4gICAgKVxyXG59XHJcbiIsImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiSURcIjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlkOiBhY3Rpb24uaWR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiQUREX1NQT1VTRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2U6IGFjdGlvbi5zcG91c2V9O1xyXG4gICAgICAgIGNhc2UgXCJTUE9VU0VfQUdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX07XHJcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNDaGlsZHJlbjogYWN0aW9uLmhhc0NoaWxkcmVufTtcclxuICAgICAgICBjYXNlIFwiTlVNQkVSX09GX0NISUxEUkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG51bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufTtcclxuICAgICAgICBjYXNlIFwiQ0hJTERSRU5fQUdFX0FSUkFZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNoaWxkcmVuQWdlQXJyYXk6IGFjdGlvbi5jaGlsZHJlbkFnZUFycmF5fTtcclxuICAgICAgICBjYXNlIFwiUEFZX0ZPUl9DT0xMRUdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBheUZvckNvbGxlZ2U6IGFjdGlvbi5wYXlGb3JDb2xsZWdlfTtcclxuICAgICAgICBjYXNlIFwiRE9CXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRvYjogYWN0aW9uLmRvYn07XHJcbiAgICAgICAgY2FzZSBcIlNFWFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzZXg6IGFjdGlvbi5zZXh9O1xyXG4gICAgICAgIGNhc2UgXCJUT0JBQ0NPXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHRvYmFjY286IGFjdGlvbi50b2JhY2NvfTtcclxuICAgICAgICBjYXNlIFwiSEVBTFRIX0NPTkRJVElPTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoZWFsdGhDb25kaXRpb246IGFjdGlvbi5oZWFsdGhDb25kaXRpb259O1xyXG4gICAgICAgIGNhc2UgXCJZT1VSX0lOQ09NRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB5b3VySW5jb21lOiBhY3Rpb24ueW91ckluY29tZX07XHJcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9JTkNPTUVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlSW5jb21lOiBhY3Rpb24uc3BvdXNlSW5jb21lfTtcclxuICAgICAgICBjYXNlIFwiUkVOVF9PUl9PV05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVudE9yT3duOiBhY3Rpb24ucmVudE9yT3dufTtcclxuICAgICAgICBjYXNlIFwiTU9OVEhMWV9SRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vbnRobHlSZW50OiBhY3Rpb24ubW9udGhseVJlbnR9O1xyXG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VDdXJyZW50QmFsYW5jZTogYWN0aW9uLm1vcnRnYWdlQ3VycmVudEJhbGFuY2V9O1xyXG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9NT05USExZX1BBWU1FTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VNb250aGx5UGF5bWVudDogYWN0aW9uLm1vcnRnYWdlTW9udGhseVBheW1lbnR9O1xyXG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlOiBhY3Rpb24ubGlmZUluc3VyYW5jZX07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogYWN0aW9uLmxpZmVJbnN1cmFuY2VFbXBsb3llcn07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX1BFUlNPTkFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogYWN0aW9uLmxpZmVJbnN1cmFuY2VQZXJzb25hbH07XHJcbiAgICAgICAgY2FzZSBcIkhBU19TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1NhdmluZ3M6IGFjdGlvbi5oYXNTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNSZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc1JldGlyZW1lbnRTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX05PTl9SRVRJUkVNRU5UX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzTm9uUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNOb25SZXRpcmVtZW50U2F2aW5nc307XHJcbiAgICAgICAgY2FzZSBcIkhBU19ERUJUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnQ6IGFjdGlvbi5kZWJ0fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9DUkVESVRfQ0FSRFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0Q3JlZGl0Q2FyZDogYWN0aW9uLmRlYnRDcmVkaXRDYXJkfTtcclxuICAgICAgICBjYXNlIFwiREVCVF9TVFVERU5UX0xPQU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidFN0dWRlbnRMb2FuOiBhY3Rpb24uZGVidFN0dWRlbnRMb2FufTtcclxuICAgICAgICBjYXNlIFwiREVCVF9IT01FX0VRVUlUWVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0SG9tZUVxdWl0eTogYWN0aW9uLmRlYnRIb21lRXF1aXR5fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9MSU5FX09GX0NSRURJVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0TGluZU9mQ3JlZGl0OiBhY3Rpb24uZGVidExpbmVPZkNyZWRpdH07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfT1RIRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidE90aGVyOiBhY3Rpb24uZGVidE90aGVyfTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9GSVJTVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRmlyc3Q6IGFjdGlvbi5uYW1lRmlyc3R9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0xBU1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUxhc3Q6IGFjdGlvbi5uYW1lTGFzdH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfRU1BSUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUVtYWlsOiBhY3Rpb24ubmFtZUVtYWlsfTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9QSE9ORVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lUGhvbmU6IGFjdGlvbi5uYW1lUGhvbmV9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX01PUlRHQUdFX1JFTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZU1vcnRnYWdlQW5kUmVudDogYWN0aW9uLmV4cGVuc2VNb3J0Z2FnZUFuZFJlbnR9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0hPVVNJTkdfQklMTFNfVVRJTElUSUVTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXM6IGFjdGlvbi5leHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9HUk9DRVJJRVNfUkVTVEFVUkFOVFNfQUxDT0hPTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sOiBhY3Rpb24uZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfUEhPTkVfSU5URVJORVRfQ0FCTEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZTogYWN0aW9uLmV4cGVuc2VQaG9uZUludGVybmV0Q2FibGV9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1NIT1BQSU5HX0ZJVE5FU1NfR1JPT01JTkdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nOiBhY3Rpb24uZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DQVJTX1RBWElTX1RSQU5TSVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQ6IGFjdGlvbi5leHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfQ0hJTERDQVJFX0VEVUNBVElPTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uOiBhY3Rpb24uZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbn07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfRElTQ1JFVElPTkFSWV9UUkFWRUxfUkVDX0dJRlRTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHM6IGFjdGlvbi5leHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9UT1RBTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlVG90YWw6IGFjdGlvbi5leHBlbnNlVG90YWx9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==