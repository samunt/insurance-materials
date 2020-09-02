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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/HealthConditionForm.js":
/*!*******************************************!*\
  !*** ./components/HealthConditionForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HealthForm; });
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






function HealthForm() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);
  const {
    0: showHealthCondition,
    1: setShowHealthCondition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: healthCondition,
    1: setHealthCondition
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const handleCloseHealthCondition = () => setShowHealthCondition(false);

  const {
    0: showHealthPrice,
    1: setShowHealthPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseHealthPrice = () => setShowHealthPrice(false);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (form && healthCondition !== form.healthCondition) {
      setHealthCondition(form.healthCondition);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (healthCondition === true) {
      dispatch({
        type: "HEALTH_CONDITION",
        healthCondition: true
      });
      document.getElementById('healthCondition-no').classList.remove('active_button');
      document.getElementById('healthCondition-yes').classList.add('active_button');
    } else if (healthCondition === false) {
      dispatch({
        type: "HEALTH_CONDITION",
        healthCondition: false
      });
      document.getElementById('healthCondition-yes').classList.remove('active_button');
      document.getElementById('healthCondition-no').classList.add('active_button');
    }
  }, [healthCondition]);
  const now = 55;
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
  }, "Have you been diagnosed with a serious health condition?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: () => {
      setShowHealthCondition(true);
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
    id: "healthCondition-yes",
    onClick: () => {
      setHealthCondition(true);
      router.push('/familyIncome');
    },
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
    id: "healthCondition-no",
    onClick: () => {
      setHealthCondition(false);
      router.push('/familyIncome');
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "No"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "How does my health affect my price?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowHealthPrice(true);
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showHealthCondition,
    onHide: handleCloseHealthCondition
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Select \u201CYes\u201D if you\u2019ve been diagnosed with any of the following: heart attack, stroke, cancer, lung disease, diabetes, psychiatric illness, AIDS or any other major illness."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseHealthCondition
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showHealthPrice,
    onHide: handleCloseHealthPrice
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Your health tends to be an important factor in your insurance rate. For example, if you\u2019ve suffered from a recent heart attack, you will probably pay higher premiums than someone who hasn\u2019t. Most people aren\u2019t too surprised by this. Insurers are pretty comprehensive when it comes to assessing your health. They\u2019ll ask you about everything from asthma to Alzheimer\u2019s. (You can count on them being very thorough here.) Each of these illnesses has different implications for your life expectancy, and each one gets factored into your life insurance rate. Luckily, getting insurance with a pre-existing health condition isn\u2019t impossible. We\u2019re here to help you through the application process as your questions arise."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseHealthPrice
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

/***/ "./pages/healthCondition.js":
/*!**********************************!*\
  !*** ./pages/healthCondition.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HealthCondition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HealthConditionForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HealthConditionForm */ "./components/HealthConditionForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HealthCondition() {
  return __jsx(_components_HealthConditionForm__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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

/***/ 11:
/*!****************************************!*\
  !*** multi ./pages/healthCondition.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\healthCondition.js */"./pages/healthCondition.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFsdGhDb25kaXRpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0Zvcm1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaGVhbHRoQ29uZGl0aW9uLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIiJdLCJuYW1lcyI6WyJIZWFsdGhGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0Iiwic2hvd0hlYWx0aENvbmRpdGlvbiIsInNldFNob3dIZWFsdGhDb25kaXRpb24iLCJ1c2VTdGF0ZSIsImhlYWx0aENvbmRpdGlvbiIsInNldEhlYWx0aENvbmRpdGlvbiIsImhhbmRsZUNsb3NlSGVhbHRoQ29uZGl0aW9uIiwic2hvd0hlYWx0aFByaWNlIiwic2V0U2hvd0hlYWx0aFByaWNlIiwiaGFuZGxlQ2xvc2VIZWFsdGhQcmljZSIsInVzZUVmZmVjdCIsInR5cGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibm93IiwibWFyZ2luIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwicHVzaCIsIndpZHRoIiwiZGVmYXVsdEZvcm0iLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJrZXkiLCJkZWZhdWx0VmFsIiwicmVkdWNlciIsInN0YXRlIiwidXNlUmVkdWNlciIsInZhbCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTdHJpbmciLCJlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIkhlYWx0aENvbmRpdGlvbiIsImFjdGlvbiIsImlkIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiaGFzU2F2aW5ncyIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiLCJkZWJ0IiwiZGVidENyZWRpdENhcmQiLCJkZWJ0U3R1ZGVudExvYW4iLCJkZWJ0SG9tZUVxdWl0eSIsImRlYnRMaW5lT2ZDcmVkaXQiLCJkZWJ0T3RoZXIiLCJuYW1lRmlyc3QiLCJuYW1lTGFzdCIsIm5hbWVFbWFpbCIsIm5hbWVQaG9uZSIsImV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQiLCJleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIiwiZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCIsImV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUiLCJleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmciLCJleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCIsImV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24iLCJleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIiwiZXhwZW5zZVRvdGFsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxHQUFzQjtBQUNqQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNBLFFBQU1DLElBQUksR0FBR0Ysd0RBQVUsQ0FBQ0csaUVBQUQsQ0FBdkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsbUJBQUQ7QUFB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QUNJLDZDQUFXaEQsS0FBWDtBQUFrQmlELGlDQUF5QixFQUFFcEMsTUFBTSxDQUFDb0M7QUFBcEQ7O0FBQ0osU0FBSyxtQ0FBTDtBQUNJLDZDQUFXakQsS0FBWDtBQUFrQmtELHNDQUE4QixFQUFFckMsTUFBTSxDQUFDcUM7QUFBekQ7O0FBQ0osU0FBSyw0QkFBTDtBQUNJLDZDQUFXbEQsS0FBWDtBQUFrQm1ELHFDQUE2QixFQUFFdEMsTUFBTSxDQUFDc0M7QUFBeEQ7O0FBQ0osU0FBSyw2QkFBTDtBQUNJLDZDQUFXbkQsS0FBWDtBQUFrQm9ELGlDQUF5QixFQUFFdkMsTUFBTSxDQUFDdUM7QUFBcEQ7O0FBQ0osU0FBSyx3Q0FBTDtBQUNJLDZDQUFXcEQsS0FBWDtBQUFrQnFELDBDQUFrQyxFQUFFeEMsTUFBTSxDQUFDd0M7QUFBN0Q7O0FBQ0osU0FBSyxlQUFMO0FBQ0ksNkNBQVdyRCxLQUFYO0FBQWtCc0Qsb0JBQVksRUFBRXpDLE1BQU0sQ0FBQ3lDO0FBQXZDOztBQUNKO0FBQ0ksYUFBT3RELEtBQVA7QUExRlI7QUE0RkgsQ0E3RkQ7O0FBOEZlRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaGVhbHRoQ29uZGl0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0LCBGb3JtQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCI7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFsdGhGb3JtKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuICAgIGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuICAgIGNvbnN0IFtzaG93SGVhbHRoQ29uZGl0aW9uLCBzZXRTaG93SGVhbHRoQ29uZGl0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoZWFsdGhDb25kaXRpb24sIHNldEhlYWx0aENvbmRpdGlvbl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VIZWFsdGhDb25kaXRpb24gPSAoKSA9PiBzZXRTaG93SGVhbHRoQ29uZGl0aW9uKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93SGVhbHRoUHJpY2UsIHNldFNob3dIZWFsdGhQcmljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUhlYWx0aFByaWNlID0gKCkgPT4gc2V0U2hvd0hlYWx0aFByaWNlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGZvcm0gJiYgaGVhbHRoQ29uZGl0aW9uICE9PSBmb3JtLmhlYWx0aENvbmRpdGlvbil7XHJcblx0XHRcdHNldEhlYWx0aENvbmRpdGlvbihmb3JtLmhlYWx0aENvbmRpdGlvbik7XHJcblx0XHR9XHJcblx0fSwgW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoaGVhbHRoQ29uZGl0aW9uID09PSB0cnVlKXtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkhFQUxUSF9DT05ESVRJT05cIiwgaGVhbHRoQ29uZGl0aW9uOiB0cnVlIH0pO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhbHRoQ29uZGl0aW9uLW5vJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhbHRoQ29uZGl0aW9uLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoaGVhbHRoQ29uZGl0aW9uID09PSBmYWxzZSl7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJIRUFMVEhfQ09ORElUSU9OXCIsIGhlYWx0aENvbmRpdGlvbjogZmFsc2UgfSk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFsdGhDb25kaXRpb24teWVzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhbHRoQ29uZGl0aW9uLW5vJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0fVxyXG4gICAgfSwgW2hlYWx0aENvbmRpdGlvbl0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBub3cgPSA1NTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IGFuaW1hdGVkIHN0cmlwZWQgdmFyaWFudD1cImluZm9cIiBsYWJlbD17YCR7bm93fSUgRG9uZWB9IG5vdz17bm93fSAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0naGVhZGVyJz5IYXZlIHlvdSBiZWVuIGRpYWdub3NlZCB3aXRoIGEgc2VyaW91cyBoZWFsdGggY29uZGl0aW9uPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hlYWx0aENvbmRpdGlvbih0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJoZWFsdGhDb25kaXRpb24teWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlYWx0aENvbmRpdGlvbih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9mYW1pbHlJbmNvbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGVhbHRoQ29uZGl0aW9uLW5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlYWx0aENvbmRpdGlvbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZmFtaWx5SW5jb21lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPkhvdyBkb2VzIG15IGhlYWx0aCBhZmZlY3QgbXkgcHJpY2U/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SGVhbHRoUHJpY2UodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgey8qYXNrIGFib3V0IGlmIHRoZXkgaGF2ZSBoZWFsdGggY29uZGl0aW9uKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93SGVhbHRoQ29uZGl0aW9ufSBvbkhpZGU9e2hhbmRsZUNsb3NlSGVhbHRoQ29uZGl0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlNlbGVjdCDigJxZZXPigJ0gaWYgeW914oCZdmUgYmVlbiBkaWFnbm9zZWQgd2l0aCBhbnkgb2YgdGhlIGZvbGxvd2luZzogaGVhcnQgYXR0YWNrLCBzdHJva2UsIGNhbmNlciwgbHVuZyBkaXNlYXNlLCBkaWFiZXRlcywgcHN5Y2hpYXRyaWMgaWxsbmVzcywgQUlEUyBvciBhbnkgb3RoZXIgbWFqb3IgaWxsbmVzcy48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSGVhbHRoQ29uZGl0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lyphc2sgYWJvdXQgaG93IGhlYWx0aCBjb25kaXRpb24gYWZmZWN0cyBwcmljZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0hlYWx0aFByaWNlfSBvbkhpZGU9e2hhbmRsZUNsb3NlSGVhbHRoUHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+WW91ciBoZWFsdGggdGVuZHMgdG8gYmUgYW4gaW1wb3J0YW50IGZhY3RvciBpbiB5b3VyIGluc3VyYW5jZSByYXRlLiBGb3IgZXhhbXBsZSwgaWYgeW914oCZdmUgc3VmZmVyZWQgZnJvbSBhIHJlY2VudCBoZWFydCBhdHRhY2ssIHlvdSB3aWxsIHByb2JhYmx5IHBheSBoaWdoZXIgcHJlbWl1bXMgdGhhbiBzb21lb25lIHdobyBoYXNu4oCZdC4gTW9zdCBwZW9wbGUgYXJlbuKAmXQgdG9vIHN1cnByaXNlZCBieSB0aGlzLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBJbnN1cmVycyBhcmUgcHJldHR5IGNvbXByZWhlbnNpdmUgd2hlbiBpdCBjb21lcyB0byBhc3Nlc3NpbmcgeW91ciBoZWFsdGguIFRoZXnigJlsbCBhc2sgeW91IGFib3V0IGV2ZXJ5dGhpbmcgZnJvbSBhc3RobWEgdG8gQWx6aGVpbWVy4oCZcy4gKFlvdSBjYW4gY291bnQgb24gdGhlbSBiZWluZyB2ZXJ5IHRob3JvdWdoIGhlcmUuKSBFYWNoIG9mIHRoZXNlIGlsbG5lc3NlcyBoYXMgZGlmZmVyZW50IGltcGxpY2F0aW9ucyBmb3IgeW91ciBsaWZlIGV4cGVjdGFuY3ksIGFuZCBlYWNoIG9uZSBnZXRzIGZhY3RvcmVkIGludG8geW91ciBsaWZlIGluc3VyYW5jZSByYXRlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBMdWNraWx5LCBnZXR0aW5nIGluc3VyYW5jZSB3aXRoIGEgcHJlLWV4aXN0aW5nIGhlYWx0aCBjb25kaXRpb24gaXNu4oCZdCBpbXBvc3NpYmxlLiBXZeKAmXJlIGhlcmUgdG8gaGVscCB5b3UgdGhyb3VnaCB0aGUgYXBwbGljYXRpb24gcHJvY2VzcyBhcyB5b3VyIHF1ZXN0aW9ucyBhcmlzZS48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSGVhbHRoUHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyfSBmcm9tIFwiLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlUmVkdWNlclwiO1xyXG5pbXBvcnQgZm9ybVJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlclwiXHJcbmNvbnN0IGRlZmF1bHRGb3JtID0ge307XHJcbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbG9iYWxGb3JtUHJvdmlkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtmb3JtLCBkaXNwYXRjaF0gPSB1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyKFwiZm9ybVwiLCBkZWZhdWx0Rm9ybSwgZm9ybVJlZHVjZXIpO1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoJywgZGlzcGF0Y2gpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Zm9ybX0+XHJcbiAgICAgICAgICAgIDxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihrZXksIGRlZmF1bHRWYWwsIHJlZHVjZXIpIHtcclxuICAgIC8vIG1ha2UgcGllY2Ugb2Ygc3RhdGUgYmFzZWQgb24gb2YgdmFsdWUgaW4gbG9jYWxzdG9yYWdlIChvciBkZWZhdWx0KVxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWwsICgpID0+IHtcclxuICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBTdHJpbmcoZGVmYXVsdFZhbClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIHZhbCA9IGRlZmF1bHRWYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICAgIH0sIFtzdGF0ZV0pO1xyXG4gICAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdXHJcbn1cclxuZXhwb3J0IHt1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhbHRoQ29uZGl0aW9uRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFsdGhDb25kaXRpb25Gb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFsdGhDb25kaXRpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFsdGhDb25kaXRpb25Gb3JtLz5cclxuICAgIClcclxufVxyXG4iLCJjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIklEXCI6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpZDogYWN0aW9uLmlkfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkFERF9TUE9VU0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlOiBhY3Rpb24uc3BvdXNlfTtcclxuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VBZ2U6IGFjdGlvbi5zcG91c2VBZ2V9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfQ0hJTERSRU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn07XHJcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn07XHJcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX07XHJcbiAgICAgICAgY2FzZSBcIlBBWV9GT1JfQ09MTEVHRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYXlGb3JDb2xsZWdlOiBhY3Rpb24ucGF5Rm9yQ29sbGVnZX07XHJcbiAgICAgICAgY2FzZSBcIkRPQlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkb2I6IGFjdGlvbi5kb2J9O1xyXG4gICAgICAgIGNhc2UgXCJTRVhcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2V4OiBhY3Rpb24uc2V4fTtcclxuICAgICAgICBjYXNlIFwiVE9CQUNDT1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0b2JhY2NvOiBhY3Rpb24udG9iYWNjb307XHJcbiAgICAgICAgY2FzZSBcIkhFQUxUSF9DT05ESVRJT05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGVhbHRoQ29uZGl0aW9uOiBhY3Rpb24uaGVhbHRoQ29uZGl0aW9ufTtcclxuICAgICAgICBjYXNlIFwiWU9VUl9JTkNPTUVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgeW91ckluY29tZTogYWN0aW9uLnlvdXJJbmNvbWV9O1xyXG4gICAgICAgIGNhc2UgXCJTUE9VU0VfSU5DT01FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUluY29tZTogYWN0aW9uLnNwb3VzZUluY29tZX07XHJcbiAgICAgICAgY2FzZSBcIlJFTlRfT1JfT1dOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlbnRPck93bjogYWN0aW9uLnJlbnRPck93bn07XHJcbiAgICAgICAgY2FzZSBcIk1PTlRITFlfUkVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb250aGx5UmVudDogYWN0aW9uLm1vbnRobHlSZW50fTtcclxuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfQ1VSUkVOVF9CQUxBTkNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlQ3VycmVudEJhbGFuY2U6IGFjdGlvbi5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlfTtcclxuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfTU9OVEhMWV9QQVlNRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlTW9udGhseVBheW1lbnQ6IGFjdGlvbi5tb3J0Z2FnZU1vbnRobHlQYXltZW50fTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZTogYWN0aW9uLmxpZmVJbnN1cmFuY2V9O1xyXG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9FTVBMT1lFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXI6IGFjdGlvbi5saWZlSW5zdXJhbmNlRW1wbG95ZXJ9O1xyXG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9QRVJTT05BTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlUGVyc29uYWw6IGFjdGlvbi5saWZlSW5zdXJhbmNlUGVyc29uYWx9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNTYXZpbmdzOiBhY3Rpb24uaGFzU2F2aW5nc307XHJcbiAgICAgICAgY2FzZSBcIkhBU19SRVRJUkVNRU5UX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNSZXRpcmVtZW50U2F2aW5nc307XHJcbiAgICAgICAgY2FzZSBcIkhBU19OT05fUkVUSVJFTUVOVF9TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc05vblJldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzTm9uUmV0aXJlbWVudFNhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfREVCVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0OiBhY3Rpb24uZGVidH07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfQ1JFRElUX0NBUkRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidENyZWRpdENhcmQ6IGFjdGlvbi5kZWJ0Q3JlZGl0Q2FyZH07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfU1RVREVOVF9MT0FOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRTdHVkZW50TG9hbjogYWN0aW9uLmRlYnRTdHVkZW50TG9hbn07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfSE9NRV9FUVVJVFlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidEhvbWVFcXVpdHk6IGFjdGlvbi5kZWJ0SG9tZUVxdWl0eX07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfTElORV9PRl9DUkVESVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidExpbmVPZkNyZWRpdDogYWN0aW9uLmRlYnRMaW5lT2ZDcmVkaXR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX09USEVSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRPdGhlcjogYWN0aW9uLmRlYnRPdGhlcn07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfRklSU1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUZpcnN0OiBhY3Rpb24ubmFtZUZpcnN0fTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9MQVNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVMYXN0OiBhY3Rpb24ubmFtZUxhc3R9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0VNQUlMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVFbWFpbDogYWN0aW9uLm5hbWVFbWFpbH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfUEhPTkVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZVBob25lOiBhY3Rpb24ubmFtZVBob25lfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9NT1JUR0FHRV9SRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQ6IGFjdGlvbi5leHBlbnNlTW9ydGdhZ2VBbmRSZW50fTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9IT1VTSU5HX0JJTExTX1VUSUxJVElFU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzOiBhY3Rpb24uZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllc307XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfR1JPQ0VSSUVTX1JFU1RBVVJBTlRTX0FMQ09IT0xcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbDogYWN0aW9uLmV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2x9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1BIT05FX0lOVEVSTkVUX0NBQkxFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VQaG9uZUludGVybmV0Q2FibGU6IGFjdGlvbi5leHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9TSE9QUElOR19GSVRORVNTX0dST09NSU5HXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZzogYWN0aW9uLmV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZ307XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfQ0FSU19UQVhJU19UUkFOU0lUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0OiBhY3Rpb24uZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXR9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0NISUxEQ0FSRV9FRFVDQVRJT05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbjogYWN0aW9uLmV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb259O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0RJU0NSRVRJT05BUllfVFJBVkVMX1JFQ19HSUZUU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzOiBhY3Rpb24uZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0c307XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfVE9UQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVRvdGFsOiBhY3Rpb24uZXhwZW5zZVRvdGFsfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=