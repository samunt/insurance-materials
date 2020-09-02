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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FamilyIncomeForm.js":
/*!****************************************!*\
  !*** ./components/FamilyIncomeForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FamilyIncomeForm; });
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






function FamilyIncomeForm() {
  const now = 60;
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: yourIncome,
    1: setYourIncome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isNext,
    1: setIsNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: spouseIncome,
    1: setSpouseIncome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: showFamilyIncome,
    1: setShowFamilyIncome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseFamilyIncome = () => setShowFamilyIncome(false);

  const {
    0: showWhatAboutYourOtherIncome,
    1: setShowWhatAboutYourOtherIncome
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseWhatAboutYourOtherIncome = () => setShowWhatAboutYourOtherIncome(false);

  const {
    0: showWhyDoWeAsk,
    1: setShowWhyDoWeAsk
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseWhyDoWeAsk = () => setShowWhyDoWeAsk(false);

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
    if (yourIncome !== form.yourIncome) {
      setYourIncome(form.yourIncome ? form.yourIncome : 0);
    }

    if (spouseIncome !== form.spouseIncome) {
      setSpouseIncome(form.spouseIncome);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (form.spouse === true && spouseIncome >= 0 && yourIncome >= 0) {
      setIsNext(false);
    } else if (form.spouse === false && yourIncome >= 0) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }

    dispatch({
      type: "YOUR_INCOME",
      yourIncome: yourIncome
    });
    dispatch({
      type: "SPOUSE_INCOME",
      spouseIncome: spouseIncome
    });
  }, [yourIncome, spouseIncome]);
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
  }, "What is your family's annual income (before taxes)?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: () => {
      setShowFamilyIncome(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    justify: "center",
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Your Income"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: yourIncome,
    type: "number",
    onChange: e => {
      setYourIncome(e.target.value != '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
      position: "start"
    }, "$")
  })))), form.spouse && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    justify: "center",
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Spouse Income"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: spouseIncome,
    type: "number",
    onChange: e => {
      setSpouseIncome(e.target.value != '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
      position: "start"
    }, "$")
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
    onClick: e => {
      e.preventDefault;
      router.push("/rentOrOwn");
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
  }, "What about investments and other income?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowWhatAboutYourOtherIncome(true);
    }
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
  }, "Why do we ask about your income?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowWhyDoWeAsk(true);
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showFamilyIncome,
    onHide: handleCloseFamilyIncome
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Give us a ballpark estimate of your annual pre-tax income. Don\u2019t include investments \u2014 we\u2019ll get to that soon"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseFamilyIncome
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showWhatAboutYourOtherIncome,
    onHide: handleCloseWhatAboutYourOtherIncome
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Please don\u2019t include income that you generate from investments. We will cover your investments in the \u201Csavings\u201D section. Some examples of income generated from investments are dividends, interest payments and capital gains collected from the sale of an asset. Similarly, don\u2019t include any income that isn\u2019t tied to your work and would still be generated if you passed away. Some examples of non-employment income are rental income on a property you own or even income you make off a business that isn\u2019t tied to your time."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseWhatAboutYourOtherIncome
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showWhyDoWeAsk,
    onHide: handleCloseWhyDoWeAsk
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "It\u2019s important for us to have an accurate understanding of your finances, and your income is a key aspect of your financial situation. Our calculations will use your income (along with many other factors) to evaluate how much life insurance protection your family needs. The same goes for your partner\u2019s income. We never recommend more coverage than you need. This prevents you from becoming \u201Coverprotected,\u201D keeping your costs low and freeing up money for you and your family. There are many features in our calculation that help us do this. We include your partner\u2019s future income as money that will be available to pay for some of your family\u2019s future expenses."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseWhyDoWeAsk
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

/***/ "./pages/familyIncome.js":
/*!*******************************!*\
  !*** ./pages/familyIncome.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FamilyIncome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FamilyIncomeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FamilyIncomeForm */ "./components/FamilyIncomeForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FamilyIncome() {
  return __jsx(_components_FamilyIncomeForm__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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

/***/ 12:
/*!*************************************!*\
  !*** multi ./pages/familyIncome.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\familyIncome.js */"./pages/familyIncome.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYW1pbHlJbmNvbWVGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0Zvcm1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmFtaWx5SW5jb21lLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIiJdLCJuYW1lcyI6WyJGYW1pbHlJbmNvbWVGb3JtIiwibm93IiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwieW91ckluY29tZSIsInNldFlvdXJJbmNvbWUiLCJ1c2VTdGF0ZSIsImlzTmV4dCIsInNldElzTmV4dCIsInNwb3VzZUluY29tZSIsInNldFNwb3VzZUluY29tZSIsInNob3dGYW1pbHlJbmNvbWUiLCJzZXRTaG93RmFtaWx5SW5jb21lIiwiaGFuZGxlQ2xvc2VGYW1pbHlJbmNvbWUiLCJzaG93V2hhdEFib3V0WW91ck90aGVySW5jb21lIiwic2V0U2hvd1doYXRBYm91dFlvdXJPdGhlckluY29tZSIsImhhbmRsZUNsb3NlV2hhdEFib3V0WW91ck90aGVySW5jb21lIiwic2hvd1doeURvV2VBc2siLCJzZXRTaG93V2h5RG9XZUFzayIsImhhbmRsZUNsb3NlV2h5RG9XZUFzayIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtYXJnaW4iLCJzcGFjaW5nIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwidGV4dEZpZWxkIiwid2lkdGgiLCJjbGFzc2VzIiwidXNlRWZmZWN0Iiwic3BvdXNlIiwidHlwZSIsImhlaWdodCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGVmYXVsdEZvcm0iLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJrZXkiLCJkZWZhdWx0VmFsIiwicmVkdWNlciIsInN0YXRlIiwidXNlUmVkdWNlciIsInZhbCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTdHJpbmciLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiRmFtaWx5SW5jb21lIiwiYWN0aW9uIiwiaWQiLCJzcG91c2VBZ2UiLCJoYXNDaGlsZHJlbiIsIm51bWJlck9mQ2hpbGRyZW4iLCJjaGlsZHJlbkFnZUFycmF5IiwicGF5Rm9yQ29sbGVnZSIsImRvYiIsInNleCIsInRvYmFjY28iLCJoZWFsdGhDb25kaXRpb24iLCJyZW50T3JPd24iLCJtb250aGx5UmVudCIsIm1vcnRnYWdlQ3VycmVudEJhbGFuY2UiLCJtb3J0Z2FnZU1vbnRobHlQYXltZW50IiwibGlmZUluc3VyYW5jZSIsImxpZmVJbnN1cmFuY2VFbXBsb3llciIsImxpZmVJbnN1cmFuY2VQZXJzb25hbCIsImhhc1NhdmluZ3MiLCJoYXNSZXRpcmVtZW50U2F2aW5ncyIsImhhc05vblJldGlyZW1lbnRTYXZpbmdzIiwiZGVidCIsImRlYnRDcmVkaXRDYXJkIiwiZGVidFN0dWRlbnRMb2FuIiwiZGVidEhvbWVFcXVpdHkiLCJkZWJ0TGluZU9mQ3JlZGl0IiwiZGVidE90aGVyIiwibmFtZUZpcnN0IiwibmFtZUxhc3QiLCJuYW1lRW1haWwiLCJuYW1lUGhvbmUiLCJleHBlbnNlTW9ydGdhZ2VBbmRSZW50IiwiZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcyIsImV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wiLCJleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlIiwiZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nIiwiZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQiLCJleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uIiwiZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0cyIsImV4cGVuc2VUb3RhbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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akQsS0FBWDtBQUFrQmtELDBDQUFrQyxFQUFFdEMsTUFBTSxDQUFDc0M7QUFBN0Q7O0FBQ0osU0FBSyxlQUFMO0FBQ0ksNkNBQVdsRCxLQUFYO0FBQWtCbUQsb0JBQVksRUFBRXZDLE1BQU0sQ0FBQ3VDO0FBQXZDOztBQUNKO0FBQ0ksYUFBT25ELEtBQVA7QUExRlI7QUE0RkgsQ0E3RkQ7O0FBOEZlRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZmFtaWx5SW5jb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge0Rpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCI7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBJbnB1dEFkb3JubWVudCwgbWFrZVN0eWxlcywgSW5wdXQsIElucHV0TGFiZWwsIEZvcm1Db250cm9sfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYW1pbHlJbmNvbWVGb3JtKCkge1xyXG4gICAgY29uc3Qgbm93ID0gNjA7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuICAgIGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3lvdXJJbmNvbWUsIHNldFlvdXJJbmNvbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3Nwb3VzZUluY29tZSwgc2V0U3BvdXNlSW5jb21lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93RmFtaWx5SW5jb21lLCBzZXRTaG93RmFtaWx5SW5jb21lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlRmFtaWx5SW5jb21lID0gKCkgPT4gc2V0U2hvd0ZhbWlseUluY29tZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1doYXRBYm91dFlvdXJPdGhlckluY29tZSwgc2V0U2hvd1doYXRBYm91dFlvdXJPdGhlckluY29tZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVdoYXRBYm91dFlvdXJPdGhlckluY29tZSA9ICgpID0+IHNldFNob3dXaGF0QWJvdXRZb3VyT3RoZXJJbmNvbWUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dXaHlEb1dlQXNrLCBzZXRTaG93V2h5RG9XZUFza10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVdoeURvV2VBc2sgPSAoKSA9PiBzZXRTaG93V2h5RG9XZUFzayhmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2l0aG91dExhYmVsOiB7XHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgICAgIHdpZHRoOiAnMjVjaCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoeW91ckluY29tZSAhPT0gZm9ybS55b3VySW5jb21lKXtcclxuICAgICAgICAgICAgc2V0WW91ckluY29tZShmb3JtLnlvdXJJbmNvbWUgPyBmb3JtLnlvdXJJbmNvbWUgOiAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHNwb3VzZUluY29tZSAhPT0gZm9ybS5zcG91c2VJbmNvbWUpe1xyXG4gICAgICAgICAgICBzZXRTcG91c2VJbmNvbWUoZm9ybS5zcG91c2VJbmNvbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoZm9ybS5zcG91c2UgPT09IHRydWUgJiYgc3BvdXNlSW5jb21lID49IDAgJiYgeW91ckluY29tZSA+PSAwKXtcclxuICAgICAgICAgICAgc2V0SXNOZXh0KGZhbHNlKTtcclxuICAgICAgICB9ZWxzZSBpZihmb3JtLnNwb3VzZSA9PT0gZmFsc2UgJiYgeW91ckluY29tZSA+PTApe1xyXG4gICAgICAgICAgICBzZXRJc05leHQoZmFsc2UpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRJc05leHQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJZT1VSX0lOQ09NRVwiLCB5b3VySW5jb21lOiB5b3VySW5jb21lIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTUE9VU0VfSU5DT01FXCIsIHNwb3VzZUluY29tZTogc3BvdXNlSW5jb21lIH0pO1xyXG4gICAgfSwgW3lvdXJJbmNvbWUsIHNwb3VzZUluY29tZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN0eWxlPXt7bWFyZ2luVG9wOic0MHB4J319PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdoZWFkZXInPldoYXQgaXMgeW91ciBmYW1pbHkncyBhbm51YWwgaW5jb21lIChiZWZvcmUgdGF4ZXMpPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0ZhbWlseUluY29tZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5Zb3VyIEluY29tZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3lvdXJJbmNvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFlvdXJJbmNvbWUoZS50YXJnZXQudmFsdWUgIT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuICAgICAgICAgICAge2Zvcm0uc3BvdXNlICYmIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+U3BvdXNlIEluY29tZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Nwb3VzZUluY29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0U3BvdXNlSW5jb21lKGUudGFyZ2V0LnZhbHVlICE9ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+fVxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3JlbnRPck93blwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc05leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaGF0IGFib3V0IGludmVzdG1lbnRzIGFuZCBvdGhlciBpbmNvbWU/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93V2hhdEFib3V0WW91ck90aGVySW5jb21lKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHdlIGFzayBhYm91dCB5b3VyIGluY29tZT8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dXaHlEb1dlQXNrKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICB7Lyphc2sgYWJvdXQgZmFtaWx5IGluY29tZSovfVxyXG4gICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dGYW1pbHlJbmNvbWV9IG9uSGlkZT17aGFuZGxlQ2xvc2VGYW1pbHlJbmNvbWV9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+R2l2ZSB1cyBhIGJhbGxwYXJrIGVzdGltYXRlIG9mIHlvdXIgYW5udWFsIHByZS10YXggaW5jb21lLiBEb27igJl0IGluY2x1ZGUgaW52ZXN0bWVudHMg4oCUIHdl4oCZbGwgZ2V0IHRvIHRoYXQgc29vbjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VGYW1pbHlJbmNvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKmFzayBhYm91dCBvdGhlciBpbmNvbWUqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dXaGF0QWJvdXRZb3VyT3RoZXJJbmNvbWV9IG9uSGlkZT17aGFuZGxlQ2xvc2VXaGF0QWJvdXRZb3VyT3RoZXJJbmNvbWV9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+UGxlYXNlIGRvbuKAmXQgaW5jbHVkZSBpbmNvbWUgdGhhdCB5b3UgZ2VuZXJhdGUgZnJvbSBpbnZlc3RtZW50cy4gV2Ugd2lsbCBjb3ZlciB5b3VyIGludmVzdG1lbnRzIGluIHRoZSDigJxzYXZpbmdz4oCdIHNlY3Rpb24uIFNvbWUgZXhhbXBsZXMgb2YgaW5jb21lIGdlbmVyYXRlZCBmcm9tIGludmVzdG1lbnRzIGFyZSBkaXZpZGVuZHMsIGludGVyZXN0IHBheW1lbnRzIGFuZCBjYXBpdGFsIGdhaW5zIGNvbGxlY3RlZCBmcm9tIHRoZSBzYWxlIG9mIGFuIGFzc2V0LlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBTaW1pbGFybHksIGRvbuKAmXQgaW5jbHVkZSBhbnkgaW5jb21lIHRoYXQgaXNu4oCZdCB0aWVkIHRvIHlvdXIgd29yayBhbmQgd291bGQgc3RpbGwgYmUgZ2VuZXJhdGVkIGlmIHlvdSBwYXNzZWQgYXdheS4gU29tZSBleGFtcGxlcyBvZiBub24tZW1wbG95bWVudCBpbmNvbWUgYXJlIHJlbnRhbCBpbmNvbWUgb24gYSBwcm9wZXJ0eSB5b3Ugb3duIG9yIGV2ZW4gaW5jb21lIHlvdSBtYWtlIG9mZiBhIGJ1c2luZXNzIHRoYXQgaXNu4oCZdCB0aWVkIHRvIHlvdXIgdGltZS48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlV2hhdEFib3V0WW91ck90aGVySW5jb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lyphc2sgYWJvdXQgb3RoZXIgaW5jb21lKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93V2h5RG9XZUFza30gb25IaWRlPXtoYW5kbGVDbG9zZVdoeURvV2VBc2t9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+SXTigJlzIGltcG9ydGFudCBmb3IgdXMgdG8gaGF2ZSBhbiBhY2N1cmF0ZSB1bmRlcnN0YW5kaW5nIG9mIHlvdXIgZmluYW5jZXMsIGFuZCB5b3VyIGluY29tZSBpcyBhIGtleSBhc3BlY3Qgb2YgeW91ciBmaW5hbmNpYWwgc2l0dWF0aW9uLiBPdXIgY2FsY3VsYXRpb25zIHdpbGwgdXNlIHlvdXIgaW5jb21lIChhbG9uZyB3aXRoIG1hbnkgb3RoZXIgZmFjdG9ycykgdG8gZXZhbHVhdGUgaG93IG11Y2ggbGlmZSBpbnN1cmFuY2UgcHJvdGVjdGlvbiB5b3VyIGZhbWlseSBuZWVkcy4gVGhlIHNhbWUgZ29lcyBmb3IgeW91ciBwYXJ0bmVy4oCZcyBpbmNvbWUuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFdlIG5ldmVyIHJlY29tbWVuZCBtb3JlIGNvdmVyYWdlIHRoYW4geW91IG5lZWQuIFRoaXMgcHJldmVudHMgeW91IGZyb20gYmVjb21pbmcg4oCcb3ZlcnByb3RlY3RlZCzigJ0ga2VlcGluZyB5b3VyIGNvc3RzIGxvdyBhbmQgZnJlZWluZyB1cCBtb25leSBmb3IgeW91IGFuZCB5b3VyIGZhbWlseS4gVGhlcmUgYXJlIG1hbnkgZmVhdHVyZXMgaW4gb3VyIGNhbGN1bGF0aW9uIHRoYXQgaGVscCB1cyBkbyB0aGlzLiBXZSBpbmNsdWRlIHlvdXIgcGFydG5lcuKAmXMgZnV0dXJlIGluY29tZSBhcyBtb25leSB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIHRvIHBheSBmb3Igc29tZSBvZiB5b3VyIGZhbWlseeKAmXMgZnV0dXJlIGV4cGVuc2VzLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VXaHlEb1dlQXNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJcIjtcclxuaW1wb3J0IGZvcm1SZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXJcIlxyXG5jb25zdCBkZWZhdWx0Rm9ybSA9IHt9O1xyXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsRm9ybVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZm9ybSwgZGlzcGF0Y2hdID0gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihcImZvcm1cIiwgZGVmYXVsdEZvcm0sIGZvcm1SZWR1Y2VyKTtcclxuICAgIGNvbnNvbGUubG9nKCdkaXNwYXRjaCcsIGRpc3BhdGNoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Zvcm19PlxyXG4gICAgICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoa2V5LCBkZWZhdWx0VmFsLCByZWR1Y2VyKSB7XHJcbiAgICAvLyBtYWtlIHBpZWNlIG9mIHN0YXRlIGJhc2VkIG9uIG9mIHZhbHVlIGluIGxvY2Fsc3RvcmFnZSAob3IgZGVmYXVsdClcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgU3RyaW5nKGRlZmF1bHRWYWwpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICB2YWwgPSBkZWZhdWx0VmFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgICB9LCBbc3RhdGVdKTtcclxuICAgIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXVxyXG59XHJcbmV4cG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhbWlseUluY29tZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRmFtaWx5SW5jb21lRm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFtaWx5SW5jb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmFtaWx5SW5jb21lRm9ybS8+XHJcbiAgICApXHJcbn1cclxuIiwiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJJRFwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaWQ6IGFjdGlvbi5pZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZTogYWN0aW9uLnNwb3VzZX07XHJcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc0NoaWxkcmVuOiBhY3Rpb24uaGFzQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbnVtYmVyT2ZDaGlsZHJlbjogYWN0aW9uLm51bWJlck9mQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJDSElMRFJFTl9BR0VfQVJSQVlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xyXG4gICAgICAgIGNhc2UgXCJQQVlfRk9SX0NPTExFR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9O1xyXG4gICAgICAgIGNhc2UgXCJET0JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZG9iOiBhY3Rpb24uZG9ifTtcclxuICAgICAgICBjYXNlIFwiU0VYXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XHJcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9iYWNjbzogYWN0aW9uLnRvYmFjY299O1xyXG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhlYWx0aENvbmRpdGlvbjogYWN0aW9uLmhlYWx0aENvbmRpdGlvbn07XHJcbiAgICAgICAgY2FzZSBcIllPVVJfSU5DT01FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcclxuICAgICAgICBjYXNlIFwiU1BPVVNFX0lOQ09NRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VJbmNvbWU6IGFjdGlvbi5zcG91c2VJbmNvbWV9O1xyXG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZW50T3JPd246IGFjdGlvbi5yZW50T3JPd259O1xyXG4gICAgICAgIGNhc2UgXCJNT05USExZX1JFTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX0NVUlJFTlRfQkFMQU5DRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlOiBhY3Rpb24ubW9ydGdhZ2VDdXJyZW50QmFsYW5jZX07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBhY3Rpb24ubW9ydGdhZ2VNb250aGx5UGF5bWVudH07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBhY3Rpb24ubGlmZUluc3VyYW5jZUVtcGxveWVyfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBhY3Rpb24ubGlmZUluc3VyYW5jZVBlcnNvbmFsfTtcclxuICAgICAgICBjYXNlIFwiSEFTX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzU2F2aW5nczogYWN0aW9uLmhhc1NhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzUmV0aXJlbWVudFNhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfTk9OX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNOb25SZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc05vblJldGlyZW1lbnRTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0RFQlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidDogYWN0aW9uLmRlYnR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0NSRURJVF9DQVJEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRDcmVkaXRDYXJkOiBhY3Rpb24uZGVidENyZWRpdENhcmR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX1NUVURFTlRfTE9BTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0U3R1ZGVudExvYW46IGFjdGlvbi5kZWJ0U3R1ZGVudExvYW59O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0hPTUVfRVFVSVRZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRIb21lRXF1aXR5OiBhY3Rpb24uZGVidEhvbWVFcXVpdHl9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0xJTkVfT0ZfQ1JFRElUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRMaW5lT2ZDcmVkaXQ6IGFjdGlvbi5kZWJ0TGluZU9mQ3JlZGl0fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9PVEhFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0T3RoZXI6IGFjdGlvbi5kZWJ0T3RoZXJ9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0ZJUlNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVGaXJzdDogYWN0aW9uLm5hbWVGaXJzdH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfTEFTVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lTGFzdDogYWN0aW9uLm5hbWVMYXN0fTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9FTUFJTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRW1haWw6IGFjdGlvbi5uYW1lRW1haWx9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX1BIT05FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVQaG9uZTogYWN0aW9uLm5hbWVQaG9uZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlTW9ydGdhZ2VBbmRSZW50OiBhY3Rpb24uZXhwZW5zZU1vcnRnYWdlQW5kUmVudH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfSE9VU0lOR19CSUxMU19VVElMSVRJRVNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllczogYWN0aW9uLmV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0dST0NFUklFU19SRVNUQVVSQU5UU19BTENPSE9MXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2w6IGFjdGlvbi5leHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlOiBhY3Rpb24uZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfU0hPUFBJTkdfRklUTkVTU19HUk9PTUlOR1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmc6IGFjdGlvbi5leHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0NBUlNfVEFYSVNfVFJBTlNJVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdDogYWN0aW9uLmV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0fTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb246IGFjdGlvbi5leHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9ufTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9ESVNDUkVUSU9OQVJZX1RSQVZFTF9SRUNfR0lGVFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0czogYWN0aW9uLmV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1RPVEFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VUb3RhbDogYWN0aW9uLmV4cGVuc2VUb3RhbH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9