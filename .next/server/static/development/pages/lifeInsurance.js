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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LifeInsuranceForm.js":
/*!*****************************************!*\
  !*** ./components/LifeInsuranceForm.js ***!
  \*****************************************/
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
    0: lifeInsurance,
    1: setLifeInsurance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); //has life insurance

  const {
    0: lifeInsuranceEmployer,
    1: setLifeInsuranceEmployer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: lifeInsurancePersonal,
    1: setLifeInsurancePersonal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showHasLifeInsurance,
    1: setShowHasLifeInsurance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isNext,
    1: setIsNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleCloseHasLifeInsurance = () => setShowHasLifeInsurance(false);

  const {
    0: showExistingLifeInsurance,
    1: setShowExistingLifeInsurance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseExistingLifeInsurance = () => setShowExistingLifeInsurance(false); // progress bar


  const now = 75;
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (lifeInsurance !== form.lifeInsurance) {
      setLifeInsurance(form.lifeInsurance ? form.lifeInsurance : '');
    }

    if (lifeInsuranceEmployer !== form.lifeInsuranceEmployer) {
      setLifeInsuranceEmployer(form.lifeInsuranceEmployer ? form.lifeInsuranceEmployer : '');
    }

    if (lifeInsurancePersonal !== form.lifeInsurancePersonal) {
      setLifeInsurancePersonal(form.lifeInsurancePersonal ? form.lifeInsurancePersonal : '');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (lifeInsurance === true) {
      document.getElementById('insurance-no').classList.remove('active_button');
      document.getElementById('insurance-yes').classList.add('active_button');
    } else if (lifeInsurance === false) {
      document.getElementById('insurance-yes').classList.remove('active_button');
      document.getElementById('insurance-no').classList.add('active_button');
    }

    if (lifeInsurance === true && (lifeInsuranceEmployer > 0 || lifeInsuranceEmployer === 0) && (lifeInsurancePersonal > 0 || lifeInsurancePersonal === 0)) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }

    dispatch({
      type: "LIFE_INSURANCE",
      lifeInsurance: lifeInsurance
    });
    dispatch({
      type: "LIFE_INSURANCE_EMPLOYER",
      lifeInsuranceEmployer: lifeInsuranceEmployer
    });
    dispatch({
      type: "LIFE_INSURANCE_PERSONAL",
      lifeInsurancePersonal: lifeInsurancePersonal
    });
  }, [lifeInsurance, lifeInsuranceEmployer, lifeInsurancePersonal]);
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
  }, "Do you have life insurance?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: () => {
      setShowHasLifeInsurance(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
    onClick: () => {
      setLifeInsurance(true);
    },
    id: "insurance-yes",
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "Yes")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    id: "insurance-no",
    onClick: () => {
      setLifeInsurance(false);
      setLifeInsuranceEmployer();
      setLifeInsurancePersonal();
      dispatch({
        type: "LIFE_INSURANCE_EMPLOYER",
        lifeInsuranceEmployer: 0
      });
      dispatch({
        type: "LIFE_INSURANCE_PERSONAL",
        lifeInsurancePersonal: 0
      });
      router.push('/savings');
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "No"))), lifeInsurance && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Employer Life Insurance")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Employer Life Insurance"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: lifeInsuranceEmployer,
    type: "number",
    onChange: e => {
      setLifeInsuranceEmployer(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
      position: "start"
    }, "$")
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Personal Life Insurance")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Personal Life Insurance"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: lifeInsurancePersonal,
    type: "number",
    onChange: e => {
      setLifeInsurancePersonal(e.target.value !== '' ? parseInt(e.target.value) : '');
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
    onClick: () => {
      router.push('/savings');
    },
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
  }, "Why do you ask about my existing life insurance?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowExistingLifeInsurance(true);
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showHasLifeInsurance,
    onHide: handleCloseHasLifeInsurance
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Select \u201CYes\u201D if you already have life insurance coverage in place, but select \u201CNo\u201D if you don\u2019t have existing life insurance or if your policies are expiring soon. This would include both policies you have through work or policies that you\u2019ve purchased individually through a broker."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseHasLifeInsurance
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showExistingLifeInsurance,
    onHide: handleCloseExistingLifeInsurance
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "If you already have life insurance, we will reduce the coverage amount of your new policy by the amount of coverage already in place. This will make sure that the total amount of coverage between all your policies is in line with your needs."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseExistingLifeInsurance
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

/***/ "./pages/lifeInsurance.js":
/*!********************************!*\
  !*** ./pages/lifeInsurance.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LifeInsurance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LifeInsuranceForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LifeInsuranceForm */ "./components/LifeInsuranceForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LifeInsurance() {
  return __jsx(_components_LifeInsuranceForm__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/lifeInsurance.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\lifeInsurance.js */"./pages/lifeInsurance.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaWZlSW5zdXJhbmNlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xpZmVJbnN1cmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiIl0sIm5hbWVzIjpbInJlbnRPck93bkZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJmb3JtIiwiRm9ybUNvbnRleHQiLCJsaWZlSW5zdXJhbmNlIiwic2V0TGlmZUluc3VyYW5jZSIsInVzZVN0YXRlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwic2V0TGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2hvd0hhc0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93SGFzTGlmZUluc3VyYW5jZSIsImlzTmV4dCIsInNldElzTmV4dCIsImhhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZSIsInNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlIiwiaGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJub3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luIiwic3BhY2luZyIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0eXBlIiwiaGVpZ2h0IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50IiwiZGVmYXVsdEZvcm0iLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJrZXkiLCJkZWZhdWx0VmFsIiwicmVkdWNlciIsInN0YXRlIiwidXNlUmVkdWNlciIsInZhbCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTdHJpbmciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiTGlmZUluc3VyYW5jZSIsImFjdGlvbiIsImlkIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJoYXNTYXZpbmdzIiwiaGFzUmV0aXJlbWVudFNhdmluZ3MiLCJoYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsImRlYnQiLCJkZWJ0Q3JlZGl0Q2FyZCIsImRlYnRTdHVkZW50TG9hbiIsImRlYnRIb21lRXF1aXR5IiwiZGVidExpbmVPZkNyZWRpdCIsImRlYnRPdGhlciIsIm5hbWVGaXJzdCIsIm5hbWVMYXN0IiwibmFtZUVtYWlsIiwibmFtZVBob25lIiwiZXhwZW5zZU1vcnRnYWdlQW5kUmVudCIsImV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMiLCJleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sIiwiZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSIsImV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsImV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0IiwiZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiIsImV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMiLCJleHBlbnNlVG90YWwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FB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QUssNEJBQUw7QUFDSSw2Q0FBVy9DLEtBQVg7QUFBa0JnRCxxQ0FBNkIsRUFBRXBDLE1BQU0sQ0FBQ29DO0FBQXhEOztBQUNKLFNBQUssNkJBQUw7QUFDSSw2Q0FBV2hELEtBQVg7QUFBa0JpRCxpQ0FBeUIsRUFBRXJDLE1BQU0sQ0FBQ3FDO0FBQXBEOztBQUNKLFNBQUssd0NBQUw7QUFDSSw2Q0FBV2pELEtBQVg7QUFBa0JrRCwwQ0FBa0MsRUFBRXRDLE1BQU0sQ0FBQ3NDO0FBQTdEOztBQUNKLFNBQUssZUFBTDtBQUNJLDZDQUFXbEQsS0FBWDtBQUFrQm1ELG9CQUFZLEVBQUV2QyxNQUFNLENBQUN1QztBQUF2Qzs7QUFDSjtBQUNJLGFBQU9uRCxLQUFQO0FBMUZSO0FBNEZILENBN0ZEOztBQThGZUQsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpZmVJbnN1cmFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgSW5wdXRBZG9ybm1lbnQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVudE9yT3duRm9ybSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XHJcblx0Y29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3QgW2xpZmVJbnN1cmFuY2UsIHNldExpZmVJbnN1cmFuY2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy9oYXMgbGlmZSBpbnN1cmFuY2VcclxuICAgIGNvbnN0IFtsaWZlSW5zdXJhbmNlRW1wbG95ZXIsIHNldExpZmVJbnN1cmFuY2VFbXBsb3llcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGlmZUluc3VyYW5jZVBlcnNvbmFsLCBzZXRMaWZlSW5zdXJhbmNlUGVyc29uYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3dIYXNMaWZlSW5zdXJhbmNlLCBzZXRTaG93SGFzTGlmZUluc3VyYW5jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUhhc0xpZmVJbnN1cmFuY2UgPSAoKSA9PiBzZXRTaG93SGFzTGlmZUluc3VyYW5jZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZSwgc2V0U2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUV4aXN0aW5nTGlmZUluc3VyYW5jZSA9ICgpID0+IHNldFNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UoZmFsc2UpO1xyXG5cclxuICAgIC8vIHByb2dyZXNzIGJhclxyXG4gICAgY29uc3Qgbm93ID0gNzU7XHJcblxyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHQgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCAgZmxleFdyYXA6ICd3cmFwJyxcclxuXHRcdH0sXHJcblx0XHRtYXJnaW46IHtcclxuXHRcdCAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihsaWZlSW5zdXJhbmNlICE9PSBmb3JtLmxpZmVJbnN1cmFuY2Upe1xyXG4gICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlKGZvcm0ubGlmZUluc3VyYW5jZSA/IGZvcm0ubGlmZUluc3VyYW5jZSA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGlmZUluc3VyYW5jZUVtcGxveWVyICE9PSBmb3JtLmxpZmVJbnN1cmFuY2VFbXBsb3llcil7XHJcbiAgICAgICAgICAgIHNldExpZmVJbnN1cmFuY2VFbXBsb3llcihmb3JtLmxpZmVJbnN1cmFuY2VFbXBsb3llciA/IGZvcm0ubGlmZUluc3VyYW5jZUVtcGxveWVyIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsaWZlSW5zdXJhbmNlUGVyc29uYWwgIT09IGZvcm0ubGlmZUluc3VyYW5jZVBlcnNvbmFsKXtcclxuICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsKGZvcm0ubGlmZUluc3VyYW5jZVBlcnNvbmFsID8gZm9ybS5saWZlSW5zdXJhbmNlUGVyc29uYWwgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmKGxpZmVJbnN1cmFuY2UgPT09IHRydWUpe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdXJhbmNlLW5vJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdXJhbmNlLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1lbHNlIGlmKGxpZmVJbnN1cmFuY2UgPT09IGZhbHNlKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZS15ZXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN1cmFuY2Utbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKGxpZmVJbnN1cmFuY2UgPT09IHRydWUgJiYgKGxpZmVJbnN1cmFuY2VFbXBsb3llciA+IDAgfHwgbGlmZUluc3VyYW5jZUVtcGxveWVyID09PSAwKSAmJiAobGlmZUluc3VyYW5jZVBlcnNvbmFsID4gMCB8fCBsaWZlSW5zdXJhbmNlUGVyc29uYWwgPT09IDApKXtcclxuXHRcdFx0c2V0SXNOZXh0KGZhbHNlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRzZXRJc05leHQodHJ1ZSlcclxuXHRcdH1cclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VcIiwgbGlmZUluc3VyYW5jZTogbGlmZUluc3VyYW5jZSB9KTtcclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIiwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBsaWZlSW5zdXJhbmNlRW1wbG95ZXIgfSk7XHJcblxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX1BFUlNPTkFMXCIsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogbGlmZUluc3VyYW5jZVBlcnNvbmFsIH0pO1xyXG5cclxuXHR9LCBbbGlmZUluc3VyYW5jZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyLCBsaWZlSW5zdXJhbmNlUGVyc29uYWxdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luOicxMHB4IGF1dG8nfX0+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdDwvR3JpZD5cclxuXHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN0eWxlPXt7bWFyZ2luVG9wOic0MHB4J319PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgbGlmZSBpbnN1cmFuY2U/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SGFzTGlmZUluc3VyYW5jZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZSh0cnVlKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnN1cmFuY2UteWVzXCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRZZXNcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnN1cmFuY2Utbm9cIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0TGlmZUluc3VyYW5jZShmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0c2V0TGlmZUluc3VyYW5jZUVtcGxveWVyKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCIsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogMCB9KTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIiwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zYXZpbmdzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR7bGlmZUluc3VyYW5jZSAmJiA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5FbXBsb3llciBMaWZlIEluc3VyYW5jZTwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+RW1wbG95ZXIgTGlmZSBJbnN1cmFuY2U8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2xpZmVJbnN1cmFuY2VFbXBsb3llcn1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXIoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPlBlcnNvbmFsIExpZmUgSW5zdXJhbmNlPC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5QZXJzb25hbCBMaWZlIEluc3VyYW5jZTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bGlmZUluc3VyYW5jZVBlcnNvbmFsfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge3NldExpZmVJbnN1cmFuY2VQZXJzb25hbChlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyl9fVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+IHtyb3V0ZXIucHVzaCgnL3NhdmluZ3MnKX19XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzTmV4dH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+fVxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHlvdSBhc2sgYWJvdXQgbXkgZXhpc3RpbmcgbGlmZSBpbnN1cmFuY2U/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdHsvKnRpdGxlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93SGFzTGlmZUluc3VyYW5jZX0gb25IaWRlPXtoYW5kbGVDbG9zZUhhc0xpZmVJbnN1cmFuY2V9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+U2VsZWN0IOKAnFllc+KAnSBpZiB5b3UgYWxyZWFkeSBoYXZlIGxpZmUgaW5zdXJhbmNlIGNvdmVyYWdlIGluIHBsYWNlLCBidXQgc2VsZWN0IOKAnE5v4oCdIGlmIHlvdSBkb27igJl0IGhhdmUgZXhpc3RpbmcgbGlmZSBpbnN1cmFuY2Ugb3IgaWYgeW91ciBwb2xpY2llcyBhcmUgZXhwaXJpbmcgc29vbi4gVGhpcyB3b3VsZCBpbmNsdWRlIGJvdGggcG9saWNpZXMgeW91IGhhdmUgdGhyb3VnaCB3b3JrIG9yIHBvbGljaWVzIHRoYXQgeW914oCZdmUgcHVyY2hhc2VkIGluZGl2aWR1YWxseSB0aHJvdWdoIGEgYnJva2VyLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VIYXNMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lyphc2sgYWJvdXQgZXhpc3RpbmcgaW5zdXJhbmNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlfSBvbkhpZGU9e2hhbmRsZUNsb3NlRXhpc3RpbmdMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PklmIHlvdSBhbHJlYWR5IGhhdmUgbGlmZSBpbnN1cmFuY2UsIHdlIHdpbGwgcmVkdWNlIHRoZSBjb3ZlcmFnZSBhbW91bnQgb2YgeW91ciBuZXcgcG9saWN5IGJ5IHRoZSBhbW91bnQgb2YgY292ZXJhZ2UgYWxyZWFkeSBpbiBwbGFjZS4gVGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IHRoZSB0b3RhbCBhbW91bnQgb2YgY292ZXJhZ2UgYmV0d2VlbiBhbGwgeW91ciBwb2xpY2llcyBpcyBpbiBsaW5lIHdpdGggeW91ciBuZWVkcy48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXhpc3RpbmdMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJcIjtcclxuaW1wb3J0IGZvcm1SZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXJcIlxyXG5jb25zdCBkZWZhdWx0Rm9ybSA9IHt9O1xyXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsRm9ybVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZm9ybSwgZGlzcGF0Y2hdID0gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihcImZvcm1cIiwgZGVmYXVsdEZvcm0sIGZvcm1SZWR1Y2VyKTtcclxuICAgIGNvbnNvbGUubG9nKCdkaXNwYXRjaCcsIGRpc3BhdGNoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Zvcm19PlxyXG4gICAgICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoa2V5LCBkZWZhdWx0VmFsLCByZWR1Y2VyKSB7XHJcbiAgICAvLyBtYWtlIHBpZWNlIG9mIHN0YXRlIGJhc2VkIG9uIG9mIHZhbHVlIGluIGxvY2Fsc3RvcmFnZSAob3IgZGVmYXVsdClcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgU3RyaW5nKGRlZmF1bHRWYWwpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICB2YWwgPSBkZWZhdWx0VmFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgICB9LCBbc3RhdGVdKTtcclxuICAgIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXVxyXG59XHJcbmV4cG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpZmVJbnN1cmFuY2VGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpZmVJbnN1cmFuY2VGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaWZlSW5zdXJhbmNlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlmZUluc3VyYW5jZUZvcm0vPlxyXG4gICAgKVxyXG59XHJcbiIsImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiSURcIjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGlkOiBhY3Rpb24uaWR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiQUREX1NQT1VTRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2U6IGFjdGlvbi5zcG91c2V9O1xyXG4gICAgICAgIGNhc2UgXCJTUE9VU0VfQUdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUFnZTogYWN0aW9uLnNwb3VzZUFnZX07XHJcbiAgICAgICAgY2FzZSBcIkhBU19DSElMRFJFTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNDaGlsZHJlbjogYWN0aW9uLmhhc0NoaWxkcmVufTtcclxuICAgICAgICBjYXNlIFwiTlVNQkVSX09GX0NISUxEUkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG51bWJlck9mQ2hpbGRyZW46IGFjdGlvbi5udW1iZXJPZkNoaWxkcmVufTtcclxuICAgICAgICBjYXNlIFwiQ0hJTERSRU5fQUdFX0FSUkFZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNoaWxkcmVuQWdlQXJyYXk6IGFjdGlvbi5jaGlsZHJlbkFnZUFycmF5fTtcclxuICAgICAgICBjYXNlIFwiUEFZX0ZPUl9DT0xMRUdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHBheUZvckNvbGxlZ2U6IGFjdGlvbi5wYXlGb3JDb2xsZWdlfTtcclxuICAgICAgICBjYXNlIFwiRE9CXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRvYjogYWN0aW9uLmRvYn07XHJcbiAgICAgICAgY2FzZSBcIlNFWFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzZXg6IGFjdGlvbi5zZXh9O1xyXG4gICAgICAgIGNhc2UgXCJUT0JBQ0NPXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHRvYmFjY286IGFjdGlvbi50b2JhY2NvfTtcclxuICAgICAgICBjYXNlIFwiSEVBTFRIX0NPTkRJVElPTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoZWFsdGhDb25kaXRpb246IGFjdGlvbi5oZWFsdGhDb25kaXRpb259O1xyXG4gICAgICAgIGNhc2UgXCJZT1VSX0lOQ09NRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB5b3VySW5jb21lOiBhY3Rpb24ueW91ckluY29tZX07XHJcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9JTkNPTUVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlSW5jb21lOiBhY3Rpb24uc3BvdXNlSW5jb21lfTtcclxuICAgICAgICBjYXNlIFwiUkVOVF9PUl9PV05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcmVudE9yT3duOiBhY3Rpb24ucmVudE9yT3dufTtcclxuICAgICAgICBjYXNlIFwiTU9OVEhMWV9SRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vbnRobHlSZW50OiBhY3Rpb24ubW9udGhseVJlbnR9O1xyXG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9DVVJSRU5UX0JBTEFOQ0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VDdXJyZW50QmFsYW5jZTogYWN0aW9uLm1vcnRnYWdlQ3VycmVudEJhbGFuY2V9O1xyXG4gICAgICAgIGNhc2UgXCJNT1JUR0FHRV9NT05USExZX1BBWU1FTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9ydGdhZ2VNb250aGx5UGF5bWVudDogYWN0aW9uLm1vcnRnYWdlTW9udGhseVBheW1lbnR9O1xyXG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlOiBhY3Rpb24ubGlmZUluc3VyYW5jZX07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogYWN0aW9uLmxpZmVJbnN1cmFuY2VFbXBsb3llcn07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFX1BFUlNPTkFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogYWN0aW9uLmxpZmVJbnN1cmFuY2VQZXJzb25hbH07XHJcbiAgICAgICAgY2FzZSBcIkhBU19TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1NhdmluZ3M6IGFjdGlvbi5oYXNTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNSZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc1JldGlyZW1lbnRTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX05PTl9SRVRJUkVNRU5UX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzTm9uUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNOb25SZXRpcmVtZW50U2F2aW5nc307XHJcbiAgICAgICAgY2FzZSBcIkhBU19ERUJUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnQ6IGFjdGlvbi5kZWJ0fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9DUkVESVRfQ0FSRFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0Q3JlZGl0Q2FyZDogYWN0aW9uLmRlYnRDcmVkaXRDYXJkfTtcclxuICAgICAgICBjYXNlIFwiREVCVF9TVFVERU5UX0xPQU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidFN0dWRlbnRMb2FuOiBhY3Rpb24uZGVidFN0dWRlbnRMb2FufTtcclxuICAgICAgICBjYXNlIFwiREVCVF9IT01FX0VRVUlUWVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0SG9tZUVxdWl0eTogYWN0aW9uLmRlYnRIb21lRXF1aXR5fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9MSU5FX09GX0NSRURJVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0TGluZU9mQ3JlZGl0OiBhY3Rpb24uZGVidExpbmVPZkNyZWRpdH07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfT1RIRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidE90aGVyOiBhY3Rpb24uZGVidE90aGVyfTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9GSVJTVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRmlyc3Q6IGFjdGlvbi5uYW1lRmlyc3R9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0xBU1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUxhc3Q6IGFjdGlvbi5uYW1lTGFzdH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfRU1BSUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUVtYWlsOiBhY3Rpb24ubmFtZUVtYWlsfTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9QSE9ORVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lUGhvbmU6IGFjdGlvbi5uYW1lUGhvbmV9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX01PUlRHQUdFX1JFTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZU1vcnRnYWdlQW5kUmVudDogYWN0aW9uLmV4cGVuc2VNb3J0Z2FnZUFuZFJlbnR9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0hPVVNJTkdfQklMTFNfVVRJTElUSUVTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXM6IGFjdGlvbi5leHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9HUk9DRVJJRVNfUkVTVEFVUkFOVFNfQUxDT0hPTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sOiBhY3Rpb24uZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfUEhPTkVfSU5URVJORVRfQ0FCTEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZTogYWN0aW9uLmV4cGVuc2VQaG9uZUludGVybmV0Q2FibGV9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1NIT1BQSU5HX0ZJVE5FU1NfR1JPT01JTkdcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nOiBhY3Rpb24uZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DQVJTX1RBWElTX1RSQU5TSVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQ6IGFjdGlvbi5leHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfQ0hJTERDQVJFX0VEVUNBVElPTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uOiBhY3Rpb24uZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbn07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfRElTQ1JFVElPTkFSWV9UUkFWRUxfUkVDX0dJRlRTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHM6IGFjdGlvbi5leHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9UT1RBTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlVG90YWw6IGFjdGlvbi5leHBlbnNlVG90YWx9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==