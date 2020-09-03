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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/QuotesPage.js":
/*!**********************************!*\
  !*** ./components/QuotesPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuotesPage; });
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






function QuotesPage() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  const {
    0: showQuoteMessage,
    1: setShowQuoteMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseQuoteMessage = () => setShowQuoteMessage(false);

  const policyPrice = ["$25.99", "18.99", "32.99", "54.99", "29.99"]; // progress bar

  const now = 100;
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
  }, "Here are your quotes!\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowQuoteMessage(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, ['Canada Life', 'Manulife', 'TD Term Life', 'Sunlife', 'RBC Insurance'].map((variant, index) => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    key: index,
    bg: "white",
    text: 'dark',
    className: "mb-4",
    style: {
      width: '30rem'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, variant), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, null, variant, " Policy "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, null, variant, " is offering a policy of 35.99 per month for a term 20 policy"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showQuoteMessage,
    onHide: handleCloseQuoteMessage
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "These are mock quotes and do not necessarily reflect your final quote."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-info",
    onClick: handleCloseQuoteMessage
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

/***/ "./pages/quotes.js":
/*!*************************!*\
  !*** ./pages/quotes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quotes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QuotesPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/QuotesPage */ "./components/QuotesPage.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Quotes() {
  return __jsx(_components_QuotesPage__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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

/***/ 14:
/*!*******************************!*\
  !*** multi ./pages/quotes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\quotes.js */"./pages/quotes.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdW90ZXNQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0Zvcm1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcXVvdGVzLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIiJdLCJuYW1lcyI6WyJRdW90ZXNQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0Iiwic2hvd1F1b3RlTWVzc2FnZSIsInNldFNob3dRdW90ZU1lc3NhZ2UiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsb3NlUXVvdGVNZXNzYWdlIiwicG9saWN5UHJpY2UiLCJub3ciLCJtYXJnaW4iLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXAiLCJ2YXJpYW50IiwiaW5kZXgiLCJ3aWR0aCIsImRlZmF1bHRGb3JtIiwiRm9ybUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJmb3JtIiwidXNlTG9jYWxTdG9yYWdlUmVkdWNlciIsImZvcm1SZWR1Y2VyIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwia2V5IiwiZGVmYXVsdFZhbCIsInJlZHVjZXIiLCJzdGF0ZSIsInVzZVJlZHVjZXIiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU3RyaW5nIiwiZSIsInVzZUVmZmVjdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJRdW90ZXMiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJzcG91c2UiLCJzcG91c2VBZ2UiLCJoYXNDaGlsZHJlbiIsIm51bWJlck9mQ2hpbGRyZW4iLCJjaGlsZHJlbkFnZUFycmF5IiwicGF5Rm9yQ29sbGVnZSIsImRvYiIsInNleCIsInRvYmFjY28iLCJoZWFsdGhDb25kaXRpb24iLCJ5b3VySW5jb21lIiwic3BvdXNlSW5jb21lIiwicmVudE9yT3duIiwibW9udGhseVJlbnQiLCJtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlIiwibW9ydGdhZ2VNb250aGx5UGF5bWVudCIsImxpZmVJbnN1cmFuY2UiLCJsaWZlSW5zdXJhbmNlRW1wbG95ZXIiLCJsaWZlSW5zdXJhbmNlUGVyc29uYWwiLCJoYXNTYXZpbmdzIiwiaGFzUmV0aXJlbWVudFNhdmluZ3MiLCJoYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsImRlYnQiLCJkZWJ0Q3JlZGl0Q2FyZCIsImRlYnRTdHVkZW50TG9hbiIsImRlYnRIb21lRXF1aXR5IiwiZGVidExpbmVPZkNyZWRpdCIsImRlYnRPdGhlciIsIm5hbWVGaXJzdCIsIm5hbWVMYXN0IiwibmFtZUVtYWlsIiwibmFtZVBob25lIiwiZXhwZW5zZU1vcnRnYWdlQW5kUmVudCIsImV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMiLCJleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sIiwiZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSIsImV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsImV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0IiwiZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiIsImV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMiLCJleHBlbnNlVG90YWwiXSwibWFwcGlu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QUFrQyxFQUFFckMsTUFBTSxDQUFDcUM7QUFBN0Q7O0FBQ0osU0FBSyw4QkFBTDtBQUNJLDZDQUFXbkQsS0FBWDtBQUFrQm9ELGlDQUF5QixFQUFFdEMsTUFBTSxDQUFDc0M7QUFBcEQ7O0FBQ0osU0FBSyxtQ0FBTDtBQUNJLDZDQUFXcEQsS0FBWDtBQUFrQnFELHNDQUE4QixFQUFFdkMsTUFBTSxDQUFDdUM7QUFBekQ7O0FBQ0osU0FBSyw0QkFBTDtBQUNJLDZDQUFXckQsS0FBWDtBQUFrQnNELHFDQUE2QixFQUFFeEMsTUFBTSxDQUFDd0M7QUFBeEQ7O0FBQ0osU0FBSyw2QkFBTDtBQUNJLDZDQUFXdEQsS0FBWDtBQUFrQnVELGlDQUF5QixFQUFFekMsTUFBTSxDQUFDeUM7QUFBcEQ7O0FBQ0osU0FBSyx3Q0FBTDtBQUNJLDZDQUFXdkQsS0FBWDtBQUFrQndELDBDQUFrQyxFQUFFMUMsTUFBTSxDQUFDMEM7QUFBN0Q7O0FBQ0osU0FBSyxlQUFMO0FBQ0ksNkNBQVd4RCxLQUFYO0FBQWtCeUQsb0JBQVksRUFBRTNDLE1BQU0sQ0FBQzJDO0FBQXZDOztBQUNKO0FBQ0ksYUFBT3pELEtBQVA7QUExRlI7QUE0RkgsQ0E3RkQ7O0FBOEZlRCxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccXVvdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbiwgQ2FyZH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIElucHV0QWRvcm5tZW50LCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdW90ZXNQYWdlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuICAgIGNvbnN0IFtzaG93UXVvdGVNZXNzYWdlLCBzZXRTaG93UXVvdGVNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlUXVvdGVNZXNzYWdlID0gKCkgPT4gc2V0U2hvd1F1b3RlTWVzc2FnZShmYWxzZSk7XHJcbiAgICBjb25zdCBwb2xpY3lQcmljZSA9IFtcIiQyNS45OVwiLCBcIjE4Ljk5XCIsIFwiMzIuOTlcIiwgXCI1NC45OVwiLCBcIjI5Ljk5XCJdO1xyXG5cclxuICAgIC8vIHByb2dyZXNzIGJhclxyXG4gICAgY29uc3Qgbm93ID0gMTAwO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IGFuaW1hdGVkIHN0cmlwZWQgdmFyaWFudD1cImluZm9cIiBsYWJlbD17YCR7bm93fSUgRG9uZWB9IG5vdz17bm93fSAvPlxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0naGVhZGVyJz5IZXJlIGFyZSB5b3VyIHF1b3RlcyEmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dRdW90ZU1lc3NhZ2UodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ2FuYWRhIExpZmUnLFxyXG4gICAgICAgICAgICAnTWFudWxpZmUnLFxyXG4gICAgICAgICAgICAnVEQgVGVybSBMaWZlJyxcclxuICAgICAgICAgICAgJ1N1bmxpZmUnLFxyXG4gICAgICAgICAgICAnUkJDIEluc3VyYW5jZScsXHJcbiAgICAgICAgICAgIF0ubWFwKCh2YXJpYW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnZGFyayd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzByZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj57dmFyaWFudH08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57dmFyaWFudH0gUG9saWN5IDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudH0gaXMgb2ZmZXJpbmcgYSBwb2xpY3kgb2YgMzUuOTkgcGVyIG1vbnRoIGZvciBhIHRlcm0gMjAgcG9saWN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApKX1cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0ey8qcXVvdGUgbWVzc2FnZSovfVxyXG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93UXVvdGVNZXNzYWdlfSBvbkhpZGU9e2hhbmRsZUNsb3NlUXVvdGVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlRoZXNlIGFyZSBtb2NrIHF1b3RlcyBhbmQgZG8gbm90IG5lY2Vzc2FyaWx5IHJlZmxlY3QgeW91ciBmaW5hbCBxdW90ZS48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUXVvdGVNZXNzYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJcIjtcclxuaW1wb3J0IGZvcm1SZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXJcIlxyXG5jb25zdCBkZWZhdWx0Rm9ybSA9IHt9O1xyXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsRm9ybVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZm9ybSwgZGlzcGF0Y2hdID0gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihcImZvcm1cIiwgZGVmYXVsdEZvcm0sIGZvcm1SZWR1Y2VyKTtcclxuICAgIGNvbnNvbGUubG9nKCdkaXNwYXRjaCcsIGRpc3BhdGNoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Zvcm19PlxyXG4gICAgICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoa2V5LCBkZWZhdWx0VmFsLCByZWR1Y2VyKSB7XHJcbiAgICAvLyBtYWtlIHBpZWNlIG9mIHN0YXRlIGJhc2VkIG9uIG9mIHZhbHVlIGluIGxvY2Fsc3RvcmFnZSAob3IgZGVmYXVsdClcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgU3RyaW5nKGRlZmF1bHRWYWwpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICB2YWwgPSBkZWZhdWx0VmFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgICB9LCBbc3RhdGVdKTtcclxuICAgIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXVxyXG59XHJcbmV4cG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFF1b3Rlc1BhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVvdGVzUGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UXVvdGVzUGFnZS8+XHJcbiAgICApXHJcbn1cclxuIiwiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJJRFwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaWQ6IGFjdGlvbi5pZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZTogYWN0aW9uLnNwb3VzZX07XHJcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc0NoaWxkcmVuOiBhY3Rpb24uaGFzQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbnVtYmVyT2ZDaGlsZHJlbjogYWN0aW9uLm51bWJlck9mQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJDSElMRFJFTl9BR0VfQVJSQVlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xyXG4gICAgICAgIGNhc2UgXCJQQVlfRk9SX0NPTExFR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9O1xyXG4gICAgICAgIGNhc2UgXCJET0JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZG9iOiBhY3Rpb24uZG9ifTtcclxuICAgICAgICBjYXNlIFwiU0VYXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XHJcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9iYWNjbzogYWN0aW9uLnRvYmFjY299O1xyXG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhlYWx0aENvbmRpdGlvbjogYWN0aW9uLmhlYWx0aENvbmRpdGlvbn07XHJcbiAgICAgICAgY2FzZSBcIllPVVJfSU5DT01FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcclxuICAgICAgICBjYXNlIFwiU1BPVVNFX0lOQ09NRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VJbmNvbWU6IGFjdGlvbi5zcG91c2VJbmNvbWV9O1xyXG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZW50T3JPd246IGFjdGlvbi5yZW50T3JPd259O1xyXG4gICAgICAgIGNhc2UgXCJNT05USExZX1JFTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX0NVUlJFTlRfQkFMQU5DRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlOiBhY3Rpb24ubW9ydGdhZ2VDdXJyZW50QmFsYW5jZX07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBhY3Rpb24ubW9ydGdhZ2VNb250aGx5UGF5bWVudH07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBhY3Rpb24ubGlmZUluc3VyYW5jZUVtcGxveWVyfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBhY3Rpb24ubGlmZUluc3VyYW5jZVBlcnNvbmFsfTtcclxuICAgICAgICBjYXNlIFwiSEFTX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzU2F2aW5nczogYWN0aW9uLmhhc1NhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzUmV0aXJlbWVudFNhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfTk9OX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNOb25SZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc05vblJldGlyZW1lbnRTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0RFQlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidDogYWN0aW9uLmRlYnR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0NSRURJVF9DQVJEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRDcmVkaXRDYXJkOiBhY3Rpb24uZGVidENyZWRpdENhcmR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX1NUVURFTlRfTE9BTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0U3R1ZGVudExvYW46IGFjdGlvbi5kZWJ0U3R1ZGVudExvYW59O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0hPTUVfRVFVSVRZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRIb21lRXF1aXR5OiBhY3Rpb24uZGVidEhvbWVFcXVpdHl9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0xJTkVfT0ZfQ1JFRElUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRMaW5lT2ZDcmVkaXQ6IGFjdGlvbi5kZWJ0TGluZU9mQ3JlZGl0fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9PVEhFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0T3RoZXI6IGFjdGlvbi5kZWJ0T3RoZXJ9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0ZJUlNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVGaXJzdDogYWN0aW9uLm5hbWVGaXJzdH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfTEFTVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lTGFzdDogYWN0aW9uLm5hbWVMYXN0fTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9FTUFJTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRW1haWw6IGFjdGlvbi5uYW1lRW1haWx9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX1BIT05FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVQaG9uZTogYWN0aW9uLm5hbWVQaG9uZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlTW9ydGdhZ2VBbmRSZW50OiBhY3Rpb24uZXhwZW5zZU1vcnRnYWdlQW5kUmVudH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfSE9VU0lOR19CSUxMU19VVElMSVRJRVNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllczogYWN0aW9uLmV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0dST0NFUklFU19SRVNUQVVSQU5UU19BTENPSE9MXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2w6IGFjdGlvbi5leHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlOiBhY3Rpb24uZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfU0hPUFBJTkdfRklUTkVTU19HUk9PTUlOR1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmc6IGFjdGlvbi5leHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0NBUlNfVEFYSVNfVFJBTlNJVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdDogYWN0aW9uLmV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0fTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb246IGFjdGlvbi5leHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9ufTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9ESVNDUkVUSU9OQVJZX1RSQVZFTF9SRUNfR0lGVFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0czogYWN0aW9uLmV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1RPVEFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VUb3RhbDogYWN0aW9uLmV4cGVuc2VUb3RhbH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9