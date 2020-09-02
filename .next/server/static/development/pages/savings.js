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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SavingsForm.js":
/*!***********************************!*\
  !*** ./components/SavingsForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SavingsForm; });
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






function SavingsForm() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);
  const {
    0: hasSavings,
    1: setHasSavings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); //has life insurance

  const {
    0: hasRetirementSavings,
    1: setHasRetirementSavings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: hasNonRetirementSavings,
    1: setHasNonRetirementSavings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isNext,
    1: setIsNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // modal

  const {
    0: showTitle,
    1: setShowTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseTitle = () => setShowTitle(false);

  const {
    0: showOwnABusiness,
    1: setShowOwnABusiness
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseOwnABusiness = () => setShowOwnABusiness(false);

  const {
    0: showBenefitPension,
    1: setShowBenefitPension
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseBenefitPension = () => setShowBenefitPension(false);

  const {
    0: showHasRetirementSavings,
    1: setShowHasRetirementSavings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseHasRetirementSavings = () => setShowHasRetirementSavings(false);

  const {
    0: showHasNonRetirementSavings,
    1: setShowHasNonRetirementSavings
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseHasNonRetirementSavings = () => setShowHasNonRetirementSavings(false); // progress bar


  const now = 85;
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
    if (hasSavings !== form.hasSavings) {
      setHasSavings(form.hasSavings ? form.hasSavings : false);
    }

    if (hasRetirementSavings !== form.hasRetirementSavings) {
      setHasRetirementSavings(form.hasRetirementSavings ? form.hasRetirementSavings : '');
    }

    if (hasNonRetirementSavings !== form.hasNonRetirementSavings) {
      setHasNonRetirementSavings(form.hasNonRetirementSavings ? form.hasNonRetirementSavings : '');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (hasSavings === true) {
      document.getElementById('saving-no').classList.remove('active_button');
      document.getElementById('saving-yes').classList.add('active_button');
    } else if (hasSavings === false) {
      document.getElementById('saving-yes').classList.remove('active_button');
      document.getElementById('saving-no').classList.add('active_button');
    }

    if (hasSavings === true && (hasRetirementSavings > 0 || hasRetirementSavings === 0) && (hasNonRetirementSavings > 0 || hasNonRetirementSavings === 0)) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }

    dispatch({
      type: "HAS_SAVINGS",
      hasSavings: hasSavings
    });
    dispatch({
      type: "HAS_RETIREMENT_SAVINGS",
      hasRetirementSavings: hasRetirementSavings
    });
    dispatch({
      type: "HAS_NON_RETIREMENT_SAVINGS",
      hasNonRetirementSavings: hasNonRetirementSavings
    });
  }, [hasSavings, hasRetirementSavings, hasNonRetirementSavings]);
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
  }, "Do you have any savings?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 30,
    className: "cursor-pointer",
    onClick: () => {
      setShowTitle(true);
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
    id: "saving-yes",
    onClick: () => {
      setHasSavings(true);
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
    id: "saving-no",
    onClick: () => {
      setHasSavings(false);
      setHasRetirementSavings();
      setHasNonRetirementSavings();
      dispatch({
        type: "HAS_RETIREMENT_SAVINGS",
        hasRetirementSavings: 0
      });
      dispatch({
        type: "HAS_NON_RETIREMENT_SAVINGS",
        hasNonRetirementSavings: 0
      });
      router.push('/debt');
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "No"))), hasSavings && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
  }, "Retirement savings\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowHasRetirementSavings(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Retirement savings"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: hasRetirementSavings,
    type: "number",
    onChange: e => {
      setHasRetirementSavings(e.target.value !== '' ? parseInt(e.target.value) : '');
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
  }, "Non retirement savings\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowHasNonRetirementSavings(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Non retirement savings"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "standard-adornment-amount",
    value: hasNonRetirementSavings,
    type: "number",
    onChange: e => {
      setHasNonRetirementSavings(e.target.value !== '' ? parseInt(e.target.value) : '');
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
    onClick: () => router.push('/debt'),
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
  }, "What if I own a business?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowOwnABusiness(true);
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
  }, "What if I have a defined benefits pension?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowBenefitPension(true);
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showTitle,
    onHide: handleCloseTitle
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Say \u201CYes\u201D if you have money in any of the following: bank accounts, investment accounts, pensions, TFSAs, RRSPs or equity in a corporation."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseTitle
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showOwnABusiness,
    onHide: handleCloseOwnABusiness
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "When a person dies, it\u2019s likely that any businesses he/she owns will be sold to provide money for his/her family. Sometimes, it\u2019s required if, for example, the person has business partners and there\u2019s a contract in place that mandates the deceased person must be \u201Cbought out.\u201D It can also be optional if, for example, the person\u2019s family wants the money to cover expenses. Either way, it\u2019s important to include the value of the business (including any assets or savings owned by the corporation) in your \u201Cnon-retirement savings.\u201D Savings within a corporation often have large tax implications upon withdrawal so it would be wise not to assume that the full amount will be available to pay for personal or family expenses. Although the exact amount is dependent on your personal income tax rate at the time of withdrawal, for purposes of this assessment, please approximate the available amount by multiplying the savings by 80%. For example, if you have $100,000 of savings in an account owned by a corporation, add $80,000 to your \u201Cnon-retirement savings\u201D ($100,000 \xD7 80% = $80,000). Don\u2019t forget to add this to all other \u201Cnon-retirement savings\u201D that are in personal accounts. For example, if you have $100,000 of savings in an account owned by a corporation and $200,000 of \u201Cnon-retirement savings\u201D in a personal bank and/or investment account, then your total \u201Cnon-retirement savings\u201D would be $280,000 ($100,000 \xD7 80% + $200,000 = $280,000).\u201D"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseOwnABusiness
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showBenefitPension,
    onHide: handleCloseBenefitPension
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Defined benefit pension plans are tricky as the monthly payment you\u2019ll receive (or the death benefit your family would receive) is linked to a number of unknown factors, including: your future income, future years of service, and future economic conditions, like interest rates and stock market returns. However, most employers will send an annual statement indicating the estimated current value of all your future monthly payments. This will often be labelled as the \u201Ctermination value\u201D or \u201Ccommuted value\u201D of your pension statement. If you have this number handy, please include it in your \u201Cretirement savings.\u201D Don\u2019t worry if you don\u2019t; you can proceed without including your defined benefit pension plan."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseBenefitPension
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showHasRetirementSavings,
    onHide: handleCloseHasRetirementSavings
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Add up the money you have in both your personal retirement accounts (RRSPs, LIRAs, etc.) and your employer pension accounts. Do not include TFSA accounts as they belong in the 'non-retirement savings' category below."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseHasRetirementSavings
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showHasNonRetirementSavings,
    onHide: handleCloseHasNonRetirementSavings
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Add up the money you have in all other accounts not included in your retirement savings estimate above. This could include bank accounts, TFSAs, other investment accounts, and if applicable, the value at which you can sell a business you own."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseHasNonRetirementSavings
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

/***/ "./pages/savings.js":
/*!**************************!*\
  !*** ./pages/savings.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return savings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SavingsForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SavingsForm */ "./components/SavingsForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function savings() {
  return __jsx(_components_SavingsForm__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/savings.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\savings.js */"./pages/savings.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TYXZpbmdzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Gb3JtQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NhdmluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvZm9ybS5yZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiIl0sIm5hbWVzIjpbIlNhdmluZ3NGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0IiwiaGFzU2F2aW5ncyIsInNldEhhc1NhdmluZ3MiLCJ1c2VTdGF0ZSIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwic2V0SGFzUmV0aXJlbWVudFNhdmluZ3MiLCJoYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsInNldEhhc05vblJldGlyZW1lbnRTYXZpbmdzIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dPd25BQnVzaW5lc3MiLCJzZXRTaG93T3duQUJ1c2luZXNzIiwiaGFuZGxlQ2xvc2VPd25BQnVzaW5lc3MiLCJzaG93QmVuZWZpdFBlbnNpb24iLCJzZXRTaG93QmVuZWZpdFBlbnNpb24iLCJoYW5kbGVDbG9zZUJlbmVmaXRQZW5zaW9uIiwic2hvd0hhc1JldGlyZW1lbnRTYXZpbmdzIiwic2V0U2hvd0hhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFuZGxlQ2xvc2VIYXNSZXRpcmVtZW50U2F2aW5ncyIsInNob3dIYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsInNldFNob3dIYXNOb25SZXRpcmVtZW50U2F2aW5ncyIsImhhbmRsZUNsb3NlSGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiLCJub3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luIiwic3BhY2luZyIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0eXBlIiwiaGVpZ2h0IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50IiwiZGVmYXVsdEZvcm0iLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJrZXkiLCJkZWZhdWx0VmFsIiwicmVkdWNlciIsInN0YXRlIiwidXNlUmVkdWNlciIsInZhbCIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTdHJpbmciLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2aW5ncyIsImFjdGlvbiIsImlkIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiaGFzQ2hpbGRyZW4iLCJudW1iZXJPZkNoaWxkcmVuIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiZGVidCIsImRlYnRDcmVkaXRDYXJkIiwiZGVidFN0dWRlbnRMb2FuIiwiZGVidEhvbWVFcXVpdHkiLCJkZWJ0TGluZU9mQ3JlZGl0IiwiZGVidE90aGVyIiwibmFtZUZpcnN0IiwibmFtZUxhc3QiLCJuYW1lRW1haWwiLCJuYW1lUGhvbmUiLCJleHBlbnNlTW9ydGdhZ2VBbmRSZW50IiwiZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcyIsImV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wiLCJleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlIiwiZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nIiwiZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQiLCJleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uIiwiZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0cyIsImV4cGVuc2VUb3RhbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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O0FBQ0ksNkNBQVdoRCxLQUFYO0FBQWtCaUQsaUNBQXlCLEVBQUVyQyxNQUFNLENBQUNxQztBQUFwRDs7QUFDSixTQUFLLHdDQUFMO0FBQ0ksNkNBQVdqRCxLQUFYO0FBQWtCa0QsMENBQWtDLEVBQUV0QyxNQUFNLENBQUNzQztBQUE3RDs7QUFDSixTQUFLLGVBQUw7QUFDSSw2Q0FBV2xELEtBQVg7QUFBa0JtRCxvQkFBWSxFQUFFdkMsTUFBTSxDQUFDdUM7QUFBdkM7O0FBQ0o7QUFDSSxhQUFPbkQsS0FBUDtBQTFGUjtBQTRGSCxDQTdGRDs7QUE4RmVELHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzYXZpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQsIEZvcm1Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIElucHV0QWRvcm5tZW50LCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhdmluZ3NGb3JtKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHRjb25zdCBmb3JtID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcbiAgICBjb25zdCBbaGFzU2F2aW5ncywgc2V0SGFzU2F2aW5nc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvL2hhcyBsaWZlIGluc3VyYW5jZVxyXG4gICAgY29uc3QgW2hhc1JldGlyZW1lbnRTYXZpbmdzLCBzZXRIYXNSZXRpcmVtZW50U2F2aW5nc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MsIHNldEhhc05vblJldGlyZW1lbnRTYXZpbmdzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtpc05leHQsIHNldElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vIG1vZGFsXHJcbiAgICBjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VUaXRsZSA9ICgpID0+IHNldFNob3dUaXRsZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd093bkFCdXNpbmVzcywgc2V0U2hvd093bkFCdXNpbmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZU93bkFCdXNpbmVzcyA9ICgpID0+IHNldFNob3dPd25BQnVzaW5lc3MoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dCZW5lZml0UGVuc2lvbiwgc2V0U2hvd0JlbmVmaXRQZW5zaW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlQmVuZWZpdFBlbnNpb24gPSAoKSA9PiBzZXRTaG93QmVuZWZpdFBlbnNpb24oZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dIYXNSZXRpcmVtZW50U2F2aW5ncywgc2V0U2hvd0hhc1JldGlyZW1lbnRTYXZpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlSGFzUmV0aXJlbWVudFNhdmluZ3MgPSAoKSA9PiBzZXRTaG93SGFzUmV0aXJlbWVudFNhdmluZ3MoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dIYXNOb25SZXRpcmVtZW50U2F2aW5ncywgc2V0U2hvd0hhc05vblJldGlyZW1lbnRTYXZpbmdzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlSGFzTm9uUmV0aXJlbWVudFNhdmluZ3MgPSAoKSA9PiBzZXRTaG93SGFzTm9uUmV0aXJlbWVudFNhdmluZ3MoZmFsc2UpO1xyXG5cclxuICAgIC8vIHByb2dyZXNzIGJhclxyXG4gICAgY29uc3Qgbm93ID0gODU7XHJcblxyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHQgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCAgZmxleFdyYXA6ICd3cmFwJyxcclxuXHRcdH0sXHJcblx0XHRtYXJnaW46IHtcclxuXHRcdCAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihoYXNTYXZpbmdzICE9PSBmb3JtLmhhc1NhdmluZ3Mpe1xyXG4gICAgICAgICAgICBzZXRIYXNTYXZpbmdzKGZvcm0uaGFzU2F2aW5ncyA/IGZvcm0uaGFzU2F2aW5ncyA6IGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaGFzUmV0aXJlbWVudFNhdmluZ3MgIT09IGZvcm0uaGFzUmV0aXJlbWVudFNhdmluZ3Mpe1xyXG4gICAgICAgICAgICBzZXRIYXNSZXRpcmVtZW50U2F2aW5ncyhmb3JtLmhhc1JldGlyZW1lbnRTYXZpbmdzID8gZm9ybS5oYXNSZXRpcmVtZW50U2F2aW5ncyA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MgIT09IGZvcm0uaGFzTm9uUmV0aXJlbWVudFNhdmluZ3Mpe1xyXG4gICAgICAgICAgICBzZXRIYXNOb25SZXRpcmVtZW50U2F2aW5ncyhmb3JtLmhhc05vblJldGlyZW1lbnRTYXZpbmdzID8gZm9ybS5oYXNOb25SZXRpcmVtZW50U2F2aW5ncyA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoaGFzU2F2aW5ncyA9PT0gdHJ1ZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZpbmctbm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZpbmcteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0fWVsc2UgaWYoaGFzU2F2aW5ncyA9PT0gZmFsc2Upe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2aW5nLXllcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmluZy1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoaGFzU2F2aW5ncyA9PT0gdHJ1ZSAmJiAoaGFzUmV0aXJlbWVudFNhdmluZ3MgPiAwIHx8IGhhc1JldGlyZW1lbnRTYXZpbmdzID09PSAwKSAmJiAoaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MgPiAwIHx8IGhhc05vblJldGlyZW1lbnRTYXZpbmdzID09PSAwKSl7XHJcblx0XHRcdHNldElzTmV4dChmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0c2V0SXNOZXh0KHRydWUpXHJcblx0XHR9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfU0FWSU5HU1wiLCBoYXNTYXZpbmdzOiBoYXNTYXZpbmdzIH0pO1xyXG5cclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCIsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiBoYXNSZXRpcmVtZW50U2F2aW5ncyB9KTtcclxuXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiSEFTX05PTl9SRVRJUkVNRU5UX1NBVklOR1NcIiwgaGFzTm9uUmV0aXJlbWVudFNhdmluZ3M6IGhhc05vblJldGlyZW1lbnRTYXZpbmdzIH0pO1xyXG5cclxuICAgIH0sIFtoYXNTYXZpbmdzLCBoYXNSZXRpcmVtZW50U2F2aW5ncywgaGFzTm9uUmV0aXJlbWVudFNhdmluZ3NdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luOicxMHB4IGF1dG8nfX0+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdDwvR3JpZD5cclxuXHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN0eWxlPXt7bWFyZ2luVG9wOic0MHB4J319PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgYW55IHNhdmluZ3M/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93VGl0bGUodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2aW5nLXllc1wiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhhc1NhdmluZ3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0WWVzXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2F2aW5nLW5vXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGFzU2F2aW5ncyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNSZXRpcmVtZW50U2F2aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGFzTm9uUmV0aXJlbWVudFNhdmluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCIsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkhBU19OT05fUkVUSVJFTUVOVF9TQVZJTkdTXCIsIGhhc05vblJldGlyZW1lbnRTYXZpbmdzOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9kZWJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR7aGFzU2F2aW5ncyAmJiA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+UmV0aXJlbWVudCBzYXZpbmdzJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hhc1JldGlyZW1lbnRTYXZpbmdzKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPlJldGlyZW1lbnQgc2F2aW5nczwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17aGFzUmV0aXJlbWVudFNhdmluZ3N9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGFzUmV0aXJlbWVudFNhdmluZ3MoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+Tm9uIHJldGlyZW1lbnQgc2F2aW5ncyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dIYXNOb25SZXRpcmVtZW50U2F2aW5ncyh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5Ob24gcmV0aXJlbWVudCBzYXZpbmdzPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtoYXNOb25SZXRpcmVtZW50U2F2aW5nc31cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtzZXRIYXNOb25SZXRpcmVtZW50U2F2aW5ncyhlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyl9fVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goJy9kZWJ0Jyl9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdH1cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoYXQgaWYgSSBvd24gYSBidXNpbmVzcz8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dPd25BQnVzaW5lc3ModHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoYXQgaWYgSSBoYXZlIGEgZGVmaW5lZCBiZW5lZml0cyBwZW5zaW9uPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0JlbmVmaXRQZW5zaW9uKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VGl0bGV9IG9uSGlkZT17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5TYXkg4oCcWWVz4oCdIGlmIHlvdSBoYXZlIG1vbmV5IGluIGFueSBvZiB0aGUgZm9sbG93aW5nOiBiYW5rIGFjY291bnRzLCBpbnZlc3RtZW50IGFjY291bnRzLCBwZW5zaW9ucywgVEZTQXMsIFJSU1BzIG9yIGVxdWl0eSBpbiBhIGNvcnBvcmF0aW9uLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qb3duIGEgYnVzaW5lc3MqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dPd25BQnVzaW5lc3N9IG9uSGlkZT17aGFuZGxlQ2xvc2VPd25BQnVzaW5lc3N9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+V2hlbiBhIHBlcnNvbiBkaWVzLCBpdOKAmXMgbGlrZWx5IHRoYXQgYW55IGJ1c2luZXNzZXMgaGUvc2hlIG93bnMgd2lsbCBiZSBzb2xkIHRvIHByb3ZpZGUgbW9uZXkgZm9yIGhpcy9oZXIgZmFtaWx5LiBTb21ldGltZXMsIGl04oCZcyByZXF1aXJlZCBpZiwgZm9yIGV4YW1wbGUsIHRoZSBwZXJzb24gaGFzIGJ1c2luZXNzIHBhcnRuZXJzIGFuZCB0aGVyZeKAmXMgYSBjb250cmFjdCBpbiBwbGFjZSB0aGF0IG1hbmRhdGVzIHRoZSBkZWNlYXNlZCBwZXJzb24gbXVzdCBiZSDigJxib3VnaHQgb3V0LuKAnSBJdCBjYW4gYWxzbyBiZSBvcHRpb25hbCBpZiwgZm9yIGV4YW1wbGUsIHRoZSBwZXJzb27igJlzIGZhbWlseSB3YW50cyB0aGUgbW9uZXkgdG8gY292ZXIgZXhwZW5zZXMuIEVpdGhlciB3YXksIGl04oCZcyBpbXBvcnRhbnQgdG8gaW5jbHVkZSB0aGUgdmFsdWUgb2YgdGhlIGJ1c2luZXNzIChpbmNsdWRpbmcgYW55IGFzc2V0cyBvciBzYXZpbmdzIG93bmVkIGJ5IHRoZSBjb3Jwb3JhdGlvbikgaW4geW91ciDigJxub24tcmV0aXJlbWVudCBzYXZpbmdzLuKAnVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBTYXZpbmdzIHdpdGhpbiBhIGNvcnBvcmF0aW9uIG9mdGVuIGhhdmUgbGFyZ2UgdGF4IGltcGxpY2F0aW9ucyB1cG9uIHdpdGhkcmF3YWwgc28gaXQgd291bGQgYmUgd2lzZSBub3QgdG8gYXNzdW1lIHRoYXQgdGhlIGZ1bGwgYW1vdW50IHdpbGwgYmUgYXZhaWxhYmxlIHRvIHBheSBmb3IgcGVyc29uYWwgb3IgZmFtaWx5IGV4cGVuc2VzLiBBbHRob3VnaCB0aGUgZXhhY3QgYW1vdW50IGlzIGRlcGVuZGVudCBvbiB5b3VyIHBlcnNvbmFsIGluY29tZSB0YXggcmF0ZSBhdCB0aGUgdGltZSBvZiB3aXRoZHJhd2FsLCBmb3IgcHVycG9zZXMgb2YgdGhpcyBhc3Nlc3NtZW50LCBwbGVhc2UgYXBwcm94aW1hdGUgdGhlIGF2YWlsYWJsZSBhbW91bnQgYnkgbXVsdGlwbHlpbmcgdGhlIHNhdmluZ3MgYnkgODAlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgJDEwMCwwMDAgb2Ygc2F2aW5ncyBpbiBhbiBhY2NvdW50IG93bmVkIGJ5IGEgY29ycG9yYXRpb24sIGFkZCAkODAsMDAwIHRvIHlvdXIg4oCcbm9uLXJldGlyZW1lbnQgc2F2aW5nc+KAnSAoJDEwMCwwMDAgw5cgODAlID0gJDgwLDAwMCkuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIERvbuKAmXQgZm9yZ2V0IHRvIGFkZCB0aGlzIHRvIGFsbCBvdGhlciDigJxub24tcmV0aXJlbWVudCBzYXZpbmdz4oCdIHRoYXQgYXJlIGluIHBlcnNvbmFsIGFjY291bnRzLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgJDEwMCwwMDAgb2Ygc2F2aW5ncyBpbiBhbiBhY2NvdW50IG93bmVkIGJ5IGEgY29ycG9yYXRpb24gYW5kICQyMDAsMDAwIG9mIOKAnG5vbi1yZXRpcmVtZW50IHNhdmluZ3PigJ0gaW4gYSBwZXJzb25hbCBiYW5rIGFuZC9vciBpbnZlc3RtZW50IGFjY291bnQsIHRoZW4geW91ciB0b3RhbCDigJxub24tcmV0aXJlbWVudCBzYXZpbmdz4oCdIHdvdWxkIGJlICQyODAsMDAwICgkMTAwLDAwMCDDlyA4MCUgKyAkMjAwLDAwMCA9ICQyODAsMDAwKS7igJ08L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3duQUJ1c2luZXNzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7LypCZW5lZml0IHBlbnNpb24qL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dCZW5lZml0UGVuc2lvbn0gb25IaWRlPXtoYW5kbGVDbG9zZUJlbmVmaXRQZW5zaW9ufT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkRlZmluZWQgYmVuZWZpdCBwZW5zaW9uIHBsYW5zIGFyZSB0cmlja3kgYXMgdGhlIG1vbnRobHkgcGF5bWVudCB5b3XigJlsbCByZWNlaXZlIChvciB0aGUgZGVhdGggYmVuZWZpdCB5b3VyIGZhbWlseSB3b3VsZCByZWNlaXZlKSBpcyBsaW5rZWQgdG8gYSBudW1iZXIgb2YgdW5rbm93biBmYWN0b3JzLCBpbmNsdWRpbmc6IHlvdXIgZnV0dXJlIGluY29tZSwgZnV0dXJlIHllYXJzIG9mIHNlcnZpY2UsIGFuZCBmdXR1cmUgZWNvbm9taWMgY29uZGl0aW9ucywgbGlrZSBpbnRlcmVzdCByYXRlcyBhbmQgc3RvY2sgbWFya2V0IHJldHVybnMuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEhvd2V2ZXIsIG1vc3QgZW1wbG95ZXJzIHdpbGwgc2VuZCBhbiBhbm51YWwgc3RhdGVtZW50IGluZGljYXRpbmcgdGhlIGVzdGltYXRlZCBjdXJyZW50IHZhbHVlIG9mIGFsbCB5b3VyIGZ1dHVyZSBtb250aGx5IHBheW1lbnRzLiBUaGlzIHdpbGwgb2Z0ZW4gYmUgbGFiZWxsZWQgYXMgdGhlIOKAnHRlcm1pbmF0aW9uIHZhbHVl4oCdIG9yIOKAnGNvbW11dGVkIHZhbHVl4oCdIG9mIHlvdXIgcGVuc2lvbiBzdGF0ZW1lbnQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIElmIHlvdSBoYXZlIHRoaXMgbnVtYmVyIGhhbmR5LCBwbGVhc2UgaW5jbHVkZSBpdCBpbiB5b3VyIOKAnHJldGlyZW1lbnQgc2F2aW5ncy7igJ0gRG9u4oCZdCB3b3JyeSBpZiB5b3UgZG9u4oCZdDsgeW91IGNhbiBwcm9jZWVkIHdpdGhvdXQgaW5jbHVkaW5nIHlvdXIgZGVmaW5lZCBiZW5lZml0IHBlbnNpb24gcGxhbi48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmVuZWZpdFBlbnNpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKmhhcyByZXRpcmVtZW50IHNhdmluZ3MqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dIYXNSZXRpcmVtZW50U2F2aW5nc30gb25IaWRlPXtoYW5kbGVDbG9zZUhhc1JldGlyZW1lbnRTYXZpbmdzfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkFkZCB1cCB0aGUgbW9uZXkgeW91IGhhdmUgaW4gYm90aCB5b3VyIHBlcnNvbmFsIHJldGlyZW1lbnQgYWNjb3VudHMgKFJSU1BzLCBMSVJBcywgZXRjLikgYW5kIHlvdXIgZW1wbG95ZXIgcGVuc2lvbiBhY2NvdW50cy4gRG8gbm90IGluY2x1ZGUgVEZTQSBhY2NvdW50cyBhcyB0aGV5IGJlbG9uZyBpbiB0aGUgJ25vbi1yZXRpcmVtZW50IHNhdmluZ3MnIGNhdGVnb3J5IGJlbG93LjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VIYXNSZXRpcmVtZW50U2F2aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qaGFzIG5vbiByZXRpcmVtZW50IHNhdmluZ3MqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dIYXNOb25SZXRpcmVtZW50U2F2aW5nc30gb25IaWRlPXtoYW5kbGVDbG9zZUhhc05vblJldGlyZW1lbnRTYXZpbmdzfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkFkZCB1cCB0aGUgbW9uZXkgeW91IGhhdmUgaW4gYWxsIG90aGVyIGFjY291bnRzIG5vdCBpbmNsdWRlZCBpbiB5b3VyIHJldGlyZW1lbnQgc2F2aW5ncyBlc3RpbWF0ZSBhYm92ZS4gVGhpcyBjb3VsZCBpbmNsdWRlIGJhbmsgYWNjb3VudHMsIFRGU0FzLCBvdGhlciBpbnZlc3RtZW50IGFjY291bnRzLCBhbmQgaWYgYXBwbGljYWJsZSwgdGhlIHZhbHVlIGF0IHdoaWNoIHlvdSBjYW4gc2VsbCBhIGJ1c2luZXNzIHlvdSBvd24uPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhhc05vblJldGlyZW1lbnRTYXZpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyfSBmcm9tIFwiLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlUmVkdWNlclwiO1xyXG5pbXBvcnQgZm9ybVJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzL2Zvcm0ucmVkdWNlclwiXHJcbmNvbnN0IGRlZmF1bHRGb3JtID0ge307XHJcbmV4cG9ydCBjb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGNvbnN0IERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHbG9iYWxGb3JtUHJvdmlkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IFtmb3JtLCBkaXNwYXRjaF0gPSB1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyKFwiZm9ybVwiLCBkZWZhdWx0Rm9ybSwgZm9ybVJlZHVjZXIpO1xyXG4gICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoJywgZGlzcGF0Y2gpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Zm9ybX0+XHJcbiAgICAgICAgICAgIDxEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihrZXksIGRlZmF1bHRWYWwsIHJlZHVjZXIpIHtcclxuICAgIC8vIG1ha2UgcGllY2Ugb2Ygc3RhdGUgYmFzZWQgb24gb2YgdmFsdWUgaW4gbG9jYWxzdG9yYWdlIChvciBkZWZhdWx0KVxyXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGRlZmF1bHRWYWwsICgpID0+IHtcclxuICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhbCA9IEpTT04ucGFyc2UoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCBTdHJpbmcoZGVmYXVsdFZhbClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIHZhbCA9IGRlZmF1bHRWYWxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSlcclxuICAgIH0sIFtzdGF0ZV0pO1xyXG4gICAgcmV0dXJuIFtzdGF0ZSwgZGlzcGF0Y2hdXHJcbn1cclxuZXhwb3J0IHt1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyfVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2F2aW5nc0Zvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2F2aW5nc0Zvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmluZ3MoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTYXZpbmdzRm9ybS8+XHJcbiAgICApXHJcbn1cclxuIiwiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJJRFwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaWQ6IGFjdGlvbi5pZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJBRERfU1BPVVNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZTogYWN0aW9uLnNwb3VzZX07XHJcbiAgICAgICAgY2FzZSBcIlNQT1VTRV9BR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlQWdlOiBhY3Rpb24uc3BvdXNlQWdlfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0NISUxEUkVOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc0NoaWxkcmVuOiBhY3Rpb24uaGFzQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbnVtYmVyT2ZDaGlsZHJlbjogYWN0aW9uLm51bWJlck9mQ2hpbGRyZW59O1xyXG4gICAgICAgIGNhc2UgXCJDSElMRFJFTl9BR0VfQVJSQVlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgY2hpbGRyZW5BZ2VBcnJheTogYWN0aW9uLmNoaWxkcmVuQWdlQXJyYXl9O1xyXG4gICAgICAgIGNhc2UgXCJQQVlfRk9SX0NPTExFR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgcGF5Rm9yQ29sbGVnZTogYWN0aW9uLnBheUZvckNvbGxlZ2V9O1xyXG4gICAgICAgIGNhc2UgXCJET0JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZG9iOiBhY3Rpb24uZG9ifTtcclxuICAgICAgICBjYXNlIFwiU0VYXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNleDogYWN0aW9uLnNleH07XHJcbiAgICAgICAgY2FzZSBcIlRPQkFDQ09cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9iYWNjbzogYWN0aW9uLnRvYmFjY299O1xyXG4gICAgICAgIGNhc2UgXCJIRUFMVEhfQ09ORElUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhlYWx0aENvbmRpdGlvbjogYWN0aW9uLmhlYWx0aENvbmRpdGlvbn07XHJcbiAgICAgICAgY2FzZSBcIllPVVJfSU5DT01FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHlvdXJJbmNvbWU6IGFjdGlvbi55b3VySW5jb21lfTtcclxuICAgICAgICBjYXNlIFwiU1BPVVNFX0lOQ09NRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VJbmNvbWU6IGFjdGlvbi5zcG91c2VJbmNvbWV9O1xyXG4gICAgICAgIGNhc2UgXCJSRU5UX09SX09XTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCByZW50T3JPd246IGFjdGlvbi5yZW50T3JPd259O1xyXG4gICAgICAgIGNhc2UgXCJNT05USExZX1JFTlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9udGhseVJlbnQ6IGFjdGlvbi5tb250aGx5UmVudH07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX0NVUlJFTlRfQkFMQU5DRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlOiBhY3Rpb24ubW9ydGdhZ2VDdXJyZW50QmFsYW5jZX07XHJcbiAgICAgICAgY2FzZSBcIk1PUlRHQUdFX01PTlRITFlfUEFZTUVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb3J0Z2FnZU1vbnRobHlQYXltZW50OiBhY3Rpb24ubW9ydGdhZ2VNb250aGx5UGF5bWVudH07XHJcbiAgICAgICAgY2FzZSBcIkxJRkVfSU5TVVJBTkNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxpZmVJbnN1cmFuY2U6IGFjdGlvbi5saWZlSW5zdXJhbmNlfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBhY3Rpb24ubGlmZUluc3VyYW5jZUVtcGxveWVyfTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBhY3Rpb24ubGlmZUluc3VyYW5jZVBlcnNvbmFsfTtcclxuICAgICAgICBjYXNlIFwiSEFTX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzU2F2aW5nczogYWN0aW9uLmhhc1NhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfUkVUSVJFTUVOVF9TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc1JldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzUmV0aXJlbWVudFNhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfTk9OX1JFVElSRU1FTlRfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNOb25SZXRpcmVtZW50U2F2aW5nczogYWN0aW9uLmhhc05vblJldGlyZW1lbnRTYXZpbmdzfTtcclxuICAgICAgICBjYXNlIFwiSEFTX0RFQlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidDogYWN0aW9uLmRlYnR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0NSRURJVF9DQVJEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRDcmVkaXRDYXJkOiBhY3Rpb24uZGVidENyZWRpdENhcmR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX1NUVURFTlRfTE9BTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0U3R1ZGVudExvYW46IGFjdGlvbi5kZWJ0U3R1ZGVudExvYW59O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0hPTUVfRVFVSVRZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRIb21lRXF1aXR5OiBhY3Rpb24uZGVidEhvbWVFcXVpdHl9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX0xJTkVfT0ZfQ1JFRElUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRMaW5lT2ZDcmVkaXQ6IGFjdGlvbi5kZWJ0TGluZU9mQ3JlZGl0fTtcclxuICAgICAgICBjYXNlIFwiREVCVF9PVEhFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0T3RoZXI6IGFjdGlvbi5kZWJ0T3RoZXJ9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0ZJUlNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVGaXJzdDogYWN0aW9uLm5hbWVGaXJzdH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfTEFTVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lTGFzdDogYWN0aW9uLm5hbWVMYXN0fTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9FTUFJTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYW1lRW1haWw6IGFjdGlvbi5uYW1lRW1haWx9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX1BIT05FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVQaG9uZTogYWN0aW9uLm5hbWVQaG9uZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlTW9ydGdhZ2VBbmRSZW50OiBhY3Rpb24uZXhwZW5zZU1vcnRnYWdlQW5kUmVudH07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfSE9VU0lOR19CSUxMU19VVElMSVRJRVNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllczogYWN0aW9uLmV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0dST0NFUklFU19SRVNUQVVSQU5UU19BTENPSE9MXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2w6IGFjdGlvbi5leHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlOiBhY3Rpb24uZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZX07XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfU0hPUFBJTkdfRklUTkVTU19HUk9PTUlOR1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmc6IGFjdGlvbi5leHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0NBUlNfVEFYSVNfVFJBTlNJVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdDogYWN0aW9uLmV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0fTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb246IGFjdGlvbi5leHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9ufTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9ESVNDUkVUSU9OQVJZX1RSQVZFTF9SRUNfR0lGVFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0czogYWN0aW9uLmV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHN9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1RPVEFMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VUb3RhbDogYWN0aW9uLmV4cGVuc2VUb3RhbH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9