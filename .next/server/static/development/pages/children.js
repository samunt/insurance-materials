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

/***/ "./components/ChildrenForm.js":
/*!************************************!*\
  !*** ./components/ChildrenForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChildrenForm; });
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ChildrenForm() {
  const {
    0: hasChildren,
    1: updateHasChildren
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: numberOfChildren,
    1: updateNumberOfChildren
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: 1,
    age: ''
  }]);
  const {
    0: isNext,
    1: setIsNext
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // modal stuff

  const {
    0: showTitle,
    1: setShowTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseTitle = () => setShowTitle(false);

  const {
    0: showHowOld,
    1: setShowHowOld
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseHowOld = () => setShowHowOld(false);

  const form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);
  const {
    0: showAskAboutChildren,
    1: setShowAskAboutChildren
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleCloseAskAboutChildren = () => setShowAskAboutChildren(false);

  const {
    0: showPlanningOnKids,
    1: setShowPlanningOnKids
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClosePlanningOnKids = () => setShowPlanningOnKids(false);

  const now = 15; //get data from localstroage/redux and set State when component mounted

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (hasChildren !== form.hasChildren) {
      updateHasChildren(form.hasChildren);
    }

    if (form.numberOfChildren && numberOfChildren !== form.numberOfChildren) {
      updateNumberOfChildren(form.numberOfChildren);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //enable disable next button
    if (hasChildren !== false) {
      if (numberOfChildren && numberOfChildren !== {
        id: 1,
        age: ''
      }) {
        setIsNext(true);
        numberOfChildren.map(child => {
          if (child.age !== '') {
            setIsNext(false);
          }
        });
      } else {
        setIsNext(true);
      }
    } else {
      setIsNext(true);
    } //highlight yes/no button


    if (hasChildren === true) {
      document.getElementById('child-yes').classList.add('active_button');
    } else if (hasChildren === false) {
      document.getElementById('child-no').classList.add('active_button');
    } //dispatch data to localstroage/redux on change


    dispatch({
      type: "NUMBER_OF_CHILDREN",
      numberOfChildren: numberOfChildren
    });
  }, [hasChildren, numberOfChildren]); //style classes

  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: '25ch'
    }
  }));
  const classes = useStyles();
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); // Update numberOfChildren state

  function updateData(e, id) {
    // Grab the id of the input element and the typed value
    const {
      value
    } = e.target; // Find the item in the array that has the same id
    // Convert the grabed id from string to Number

    const itemIndex = numberOfChildren.findIndex(item => item.id === Number(id)); // If the itemIndex is -1 that means it doesn't exist in the array

    if (itemIndex !== -1) {
      // Make a copy of the state
      const children = [...numberOfChildren]; // The child item

      const child = children[itemIndex]; // Update the child's age

      children.splice(itemIndex, 1, _objectSpread(_objectSpread({}, child), {}, {
        age: value
      })); // Update the state

      updateNumberOfChildren(children);
    }
  }

  function deleteChild(id) {
    // Find the item in the array that has the same id
    // Convert the grabed id from string to Number
    const itemIndex = numberOfChildren.findIndex(item => item.id === Number(id)); // Make a copy of the state

    const children = [...numberOfChildren]; // remove the child from the array

    children.splice(itemIndex, 1); // Update the state

    updateNumberOfChildren(children);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/secondaryEducation');
  } //if person have childrens highlight yes button and dispatch data to localstorage/redux and update state


  async function handleClick() {
    document.getElementById('child-no').classList.remove('active_button');
    document.getElementById('child-yes').classList.add('active_button');
    await updateHasChildren(true);
    dispatch({
      type: "HAS_CHILDREN",
      hasChildren: true
    });
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
  }, "Do you have children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 20,
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
    id: "child-yes",
    onClick: async () => {
      handleClick();
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
    id: "child-no",
    onClick: () => {
      updateHasChildren(false);
      updateNumberOfChildren([{
        id: 1,
        age: ''
      }]);
      dispatch({
        type: "HAS_CHILDREN",
        hasChildren: false
      });
      dispatch({
        type: "NUMBER_OF_CHILDREN",
        numberOfChildren: [{
          id: 1,
          age: ''
        }]
      });
      document.getElementById('child-yes').classList.remove('active_button');
      document.getElementById('child-no').classList.add('active_button');
      router.push('/dob');
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "No"))), hasChildren === true && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 12
  }, __jsx("h5", {
    className: "header"
  }, "How old are your children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowHowOld(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 8,
    justify: "center",
    spacing: 2
  }, numberOfChildren && numberOfChildren.map((child, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    key: index
  }, index === 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, `Child ${index + 1} Age`), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    key: index + 60,
    className: "col-sm-12 col-12",
    value: child.age,
    onChange: e => {
      updateData(e, index + 1);
    },
    type: "number"
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    fullWidth: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, `Child ${index + 1} Age`), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    key: index + 60,
    className: "col-sm-12 col-12",
    value: child.age,
    onChange: e => {
      updateData(e, index + 1);
    },
    type: "number",
    endAdornment: __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["Trash"], {
      size: 30,
      className: "col-sm-2 col-2 mt-3 cursor-pointer",
      onClick: e => {
        deleteChild(index + 1);
      }
    })
  })))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    onClick: e => {
      e.preventDefault();
      updateNumberOfChildren([...numberOfChildren, {
        id: numberOfChildren.length + 1,
        age: ''
      }]);
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    type: "submit",
    size: "lg"
  }, "Add Additional Child")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    className: "mt-4"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Why do we ask about your children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowAskAboutChildren(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    className: "mt-1"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "What if I'm planning on having kids?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: () => {
      setShowPlanningOnKids(true);
    }
  }))), hasChildren === true && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
    style: {
      width: "100%"
    },
    onClick: e => {
      handleSubmit(e);
    },
    variant: "contained",
    size: "lg",
    disabled: isNext
  }, "Next"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showTitle,
    onHide: handleCloseTitle
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Select \u201CYes\u201D if you have children or are currently expecting. Select \u201CNo\u201D if you don\u2019t have children or all of your children are out of your household and more or less financially independent."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseTitle
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showHowOld,
    onHide: handleCloseHowOld
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Only include children who you are financially supporting (usually 25 and younger). Make sure to incorporate your children when we ask about your finances and expenses."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseHowOld
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showAskAboutChildren,
    onHide: handleCloseHowOld
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleCloseAskAboutChildren
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showPlanningOnKids,
    onHide: handleClosePlanningOnKids
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "If you\u2019re expecting, first off, congratulations! You should include your expected child (or children if you\u2019re having twins or triplets) and specify \u201C0\u201D when we ask for your children\u2019s ages. However, if you\u2019re merely planning on having children in the future, don\u2019t include them. Until you are certain about if and when you\u2019ll be having children, it\u2019s best to not include them in your needs assessment to ensure you are not paying for coverage that you might not ultimately need. When your family does grow, we recommend revisiting the PolicyMe life insurance checkup to get updated advice and understand how your coverage needs may have changed."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "contained",
    onClick: handleClosePlanningOnKids
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

/***/ "./pages/children.js":
/*!***************************!*\
  !*** ./pages/children.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Children; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ChildrenForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ChildrenForm */ "./components/ChildrenForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Children() {
  return __jsx(_components_ChildrenForm__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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
/*!*********************************!*\
  !*** multi ./pages/children.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\insurdinary\pages\children.js */"./pages/children.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGlsZHJlbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvRm9ybUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlTG9jYWxTdG9yYWdlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCIiXSwibmFtZXMiOlsiQ2hpbGRyZW5Gb3JtIiwiaGFzQ2hpbGRyZW4iLCJ1cGRhdGVIYXNDaGlsZHJlbiIsInVzZVN0YXRlIiwibnVtYmVyT2ZDaGlsZHJlbiIsInVwZGF0ZU51bWJlck9mQ2hpbGRyZW4iLCJpZCIsImFnZSIsImlzTmV4dCIsInNldElzTmV4dCIsInNob3dUaXRsZSIsInNldFNob3dUaXRsZSIsImhhbmRsZUNsb3NlVGl0bGUiLCJzaG93SG93T2xkIiwic2V0U2hvd0hvd09sZCIsImhhbmRsZUNsb3NlSG93T2xkIiwiZm9ybSIsInVzZUNvbnRleHQiLCJGb3JtQ29udGV4dCIsInNob3dBc2tBYm91dENoaWxkcmVuIiwic2V0U2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW4iLCJzaG93UGxhbm5pbmdPbktpZHMiLCJzZXRTaG93UGxhbm5pbmdPbktpZHMiLCJoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzIiwibm93IiwidXNlRWZmZWN0IiwibWFwIiwiY2hpbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGF0Y2giLCJ0eXBlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJEaXNwYXRjaENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVEYXRhIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIk51bWJlciIsImNoaWxkcmVuIiwic3BsaWNlIiwiZGVsZXRlQ2hpbGQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVDbGljayIsInJlbW92ZSIsIm1hcmdpbiIsImhlaWdodCIsImluZGV4IiwibGVuZ3RoIiwiZGVmYXVsdEZvcm0iLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsRm9ybVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VMb2NhbFN0b3JhZ2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwia2V5IiwiZGVmYXVsdFZhbCIsInJlZHVjZXIiLCJzdGF0ZSIsInVzZVJlZHVjZXIiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU3RyaW5nIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIkNoaWxkcmVuIiwiYWN0aW9uIiwic3BvdXNlIiwic3BvdXNlQWdlIiwiY2hpbGRyZW5BZ2VBcnJheSIsInBheUZvckNvbGxlZ2UiLCJkb2IiLCJzZXgiLCJ0b2JhY2NvIiwiaGVhbHRoQ29uZGl0aW9uIiwieW91ckluY29tZSIsInNwb3VzZUluY29tZSIsInJlbnRPck93biIsIm1vbnRobHlSZW50IiwibW9ydGdhZ2VDdXJyZW50QmFsYW5jZSIsIm1vcnRnYWdlTW9udGhseVBheW1lbnQiLCJsaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwiaGFzU2F2aW5ncyIsImhhc1JldGlyZW1lbnRTYXZpbmdzIiwiaGFzTm9uUmV0aXJlbWVudFNhdmluZ3MiLCJkZWJ0IiwiZGVidENyZWRpdENhcmQiLCJkZWJ0U3R1ZGVudExvYW4iLCJkZWJ0SG9tZUVxdWl0eSIsImRlYnRMaW5lT2ZDcmVkaXQiLCJkZWJ0T3RoZXIiLCJuYW1lRmlyc3QiLCJuYW1lTGFzdCIsIm5hbWVFbWFpbCIsIm5hbWVQaG9uZSIsImV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQiLCJleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIiwiZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCIsImV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUiLCJleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmciLCJleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCIsImV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24iLCJleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIiwiZXhwZW5zZVRvdGFsIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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NkNBQVczQyxLQUFYO0FBQWtCNEMsb0NBQTRCLEVBQUVoQyxNQUFNLENBQUNnQztBQUF2RDs7QUFDSixTQUFLLHVDQUFMO0FBQ0ksNkNBQVc1QyxLQUFYO0FBQWtCNkMsMENBQWtDLEVBQUVqQyxNQUFNLENBQUNpQztBQUE3RDs7QUFDSixTQUFLLDhCQUFMO0FBQ0ksNkNBQVc3QyxLQUFYO0FBQWtCOEMsaUNBQXlCLEVBQUVsQyxNQUFNLENBQUNrQztBQUFwRDs7QUFDSixTQUFLLG1DQUFMO0FBQ0ksNkNBQVc5QyxLQUFYO0FBQWtCK0Msc0NBQThCLEVBQUVuQyxNQUFNLENBQUNtQztBQUF6RDs7QUFDSixTQUFLLDRCQUFMO0FBQ0ksNkNBQVcvQyxLQUFYO0FBQWtCZ0QscUNBQTZCLEVBQUVwQyxNQUFNLENBQUNvQztBQUF4RDs7QUFDSixTQUFLLDZCQUFMO0FBQ0ksNkNBQVdoRCxLQUFYO0FBQWtCaUQsaUNBQXlCLEVBQUVyQyxNQUFNLENBQUNxQztBQUFwRDs7QUFDSixTQUFLLHdDQUFMO0FBQ0ksNkNBQVdqRCxLQUFYO0FBQWtCa0QsMENBQWtDLEVBQUV0QyxNQUFNLENBQUNzQztBQUE3RDs7QUFDSixTQUFLLGVBQUw7QUFDSSw2Q0FBV2xELEtBQVg7QUFBa0JtRCxvQkFBWSxFQUFFdkMsTUFBTSxDQUFDdUM7QUFBdkM7O0FBQ0o7QUFDSSxhQUFPbkQsS0FBUDtBQTFGUjtBQTRGSCxDQTdGRDs7QUE4RmVELHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGlsZHJlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQsIEZvcm1Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGUsIFRyYXNofSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgVGV4dEZpZWxkLCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGlsZHJlbkZvcm0oKSB7XHJcblx0Y29uc3QgW2hhc0NoaWxkcmVuLCB1cGRhdGVIYXNDaGlsZHJlbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtudW1iZXJPZkNoaWxkcmVuLCB1cGRhdGVOdW1iZXJPZkNoaWxkcmVuXSA9IHVzZVN0YXRlKFtcclxuXHRcdHsgaWQ6IDEsIGFnZTogJycgfVxyXG5cdF0pO1xyXG4gICAgY29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdC8vIG1vZGFsIHN0dWZmXHJcblx0Y29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVRpdGxlID0gKCkgPT4gc2V0U2hvd1RpdGxlKGZhbHNlKTtcclxuXHRjb25zdCBbc2hvd0hvd09sZCwgc2V0U2hvd0hvd09sZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VIb3dPbGQgPSAoKSA9PiBzZXRTaG93SG93T2xkKGZhbHNlKTtcclxuXHRjb25zdCBmb3JtID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcblx0Y29uc3QgW3Nob3dBc2tBYm91dENoaWxkcmVuLCBzZXRTaG93QXNrQWJvdXRDaGlsZHJlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VBc2tBYm91dENoaWxkcmVuID0gKCkgPT4gc2V0U2hvd0Fza0Fib3V0Q2hpbGRyZW4oZmFsc2UpO1xyXG5cdGNvbnN0IFtzaG93UGxhbm5pbmdPbktpZHMsIHNldFNob3dQbGFubmluZ09uS2lkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VQbGFubmluZ09uS2lkcyA9ICgpID0+IHNldFNob3dQbGFubmluZ09uS2lkcyhmYWxzZSk7XHJcblxyXG5cdGNvbnN0IG5vdyA9IDE1O1xyXG5cclxuXHQvL2dldCBkYXRhIGZyb20gbG9jYWxzdHJvYWdlL3JlZHV4IGFuZCBzZXQgU3RhdGUgd2hlbiBjb21wb25lbnQgbW91bnRlZFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaGFzQ2hpbGRyZW4gIT09IGZvcm0uaGFzQ2hpbGRyZW4pe1xyXG5cdFx0XHR1cGRhdGVIYXNDaGlsZHJlbihmb3JtLmhhc0NoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZm9ybS5udW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IGZvcm0ubnVtYmVyT2ZDaGlsZHJlbil7XHJcbiAgICAgICAgICAgIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oZm9ybS5udW1iZXJPZkNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcblx0fSwgW10pO1xyXG5cdFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdC8vZW5hYmxlIGRpc2FibGUgbmV4dCBidXR0b25cclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZmFsc2Upe1xyXG5cdFx0XHRpZihudW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IHsgaWQ6IDEsIGFnZTogJycgfSl7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpXHJcblx0XHRcdFx0bnVtYmVyT2ZDaGlsZHJlbi5tYXAoKGNoaWxkKT0+e1xyXG5cdFx0XHRcdFx0aWYoY2hpbGQuYWdlICE9PSAnJyl7XHJcblx0XHRcdFx0XHRcdHNldElzTmV4dChmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdC8vaGlnaGxpZ2h0IHllcy9ubyBidXR0b25cclxuXHRcdGlmKGhhc0NoaWxkcmVuID09PSB0cnVlKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoaWxkLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1lbHNlIGlmKGhhc0NoaWxkcmVuID09PSBmYWxzZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHRcdC8vZGlzcGF0Y2ggZGF0YSB0byBsb2NhbHN0cm9hZ2UvcmVkdXggb24gY2hhbmdlXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTlVNQkVSX09GX0NISUxEUkVOXCIsIG51bWJlck9mQ2hpbGRyZW46IG51bWJlck9mQ2hpbGRyZW4gfSk7XHJcblx0fSwgW2hhc0NoaWxkcmVuLCBudW1iZXJPZkNoaWxkcmVuXSk7XHJcblx0Ly9zdHlsZSBjbGFzc2VzXHJcblx0Y29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHQgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCAgZmxleFdyYXA6ICd3cmFwJyxcclxuXHRcdH0sXHJcblx0XHR3aXRob3V0TGFiZWw6IHtcclxuXHRcdCAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0ICB3aWR0aDogJzI1Y2gnLFxyXG5cdFx0fSxcclxuXHR9KSk7XHJcblx0XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdFxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHQvLyBVcGRhdGUgbnVtYmVyT2ZDaGlsZHJlbiBzdGF0ZVxyXG5cdGZ1bmN0aW9uIHVwZGF0ZURhdGEoZSwgaWQpIHtcclxuXHRcdC8vIEdyYWIgdGhlIGlkIG9mIHRoZSBpbnB1dCBlbGVtZW50IGFuZCB0aGUgdHlwZWQgdmFsdWVcclxuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cdFx0Ly8gRmluZCB0aGUgaXRlbSBpbiB0aGUgYXJyYXkgdGhhdCBoYXMgdGhlIHNhbWUgaWRcclxuXHRcdC8vIENvbnZlcnQgdGhlIGdyYWJlZCBpZCBmcm9tIHN0cmluZyB0byBOdW1iZXJcclxuXHRcdGNvbnN0IGl0ZW1JbmRleCA9IG51bWJlck9mQ2hpbGRyZW4uZmluZEluZGV4KFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZClcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIGl0ZW1JbmRleCBpcyAtMSB0aGF0IG1lYW5zIGl0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFycmF5XHJcblx0XHRpZiAoaXRlbUluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHQvLyBNYWtlIGEgY29weSBvZiB0aGUgc3RhdGVcclxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBbLi4ubnVtYmVyT2ZDaGlsZHJlbl07XHJcblx0XHRcdC8vIFRoZSBjaGlsZCBpdGVtXHJcblx0XHRcdGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baXRlbUluZGV4XTtcclxuXHRcdFx0Ly8gVXBkYXRlIHRoZSBjaGlsZCdzIGFnZVxyXG5cdFx0XHRjaGlsZHJlbi5zcGxpY2UoaXRlbUluZGV4LCAxLCB7IC4uLmNoaWxkLCBhZ2U6IHZhbHVlIH0pO1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIHN0YXRlXHJcblx0XHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBkZWxldGVDaGlsZChpZCkge1xyXG5cdFx0Ly8gRmluZCB0aGUgaXRlbSBpbiB0aGUgYXJyYXkgdGhhdCBoYXMgdGhlIHNhbWUgaWRcclxuXHRcdC8vIENvbnZlcnQgdGhlIGdyYWJlZCBpZCBmcm9tIHN0cmluZyB0byBOdW1iZXJcclxuXHRcdGNvbnN0IGl0ZW1JbmRleCA9IG51bWJlck9mQ2hpbGRyZW4uZmluZEluZGV4KFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZClcclxuXHRcdCk7XHJcblx0XHQvLyBNYWtlIGEgY29weSBvZiB0aGUgc3RhdGVcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gWy4uLm51bWJlck9mQ2hpbGRyZW5dO1xyXG5cdFx0Ly8gcmVtb3ZlIHRoZSBjaGlsZCBmcm9tIHRoZSBhcnJheVxyXG5cdFx0Y2hpbGRyZW4uc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcblx0XHQvLyBVcGRhdGUgdGhlIHN0YXRlXHJcblx0XHR1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKGNoaWxkcmVuKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0cm91dGVyLnB1c2goJy9zZWNvbmRhcnlFZHVjYXRpb24nKVxyXG5cdH1cclxuXHQvL2lmIHBlcnNvbiBoYXZlIGNoaWxkcmVucyBoaWdobGlnaHQgeWVzIGJ1dHRvbiBhbmQgZGlzcGF0Y2ggZGF0YSB0byBsb2NhbHN0b3JhZ2UvcmVkdXggYW5kIHVwZGF0ZSBzdGF0ZVxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRhd2FpdCB1cGRhdGVIYXNDaGlsZHJlbih0cnVlKTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfQ0hJTERSRU5cIiwgaGFzQ2hpbGRyZW46IHRydWUgfSk7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdHNpemU9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1RpdGxlKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjaGlsZC15ZXNcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FzeW5jICgpID0+IHtoYW5kbGVDbGljaygpfX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WWVzXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiY2hpbGQtbm9cIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oW3tpZDogMSwgYWdlOiAnJ31dKVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkhBU19DSElMRFJFTlwiLCBoYXNDaGlsZHJlbjogZmFsc2UgfSk7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTlVNQkVSX09GX0NISUxEUkVOXCIsIG51bWJlck9mQ2hpbGRyZW46IFt7aWQ6IDEsIGFnZTogJyd9XSB9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL2RvYicpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdHsvKiB0aGlzIHNlY3Rpb24gaXMgb25seSBzaG93biB3aGVuIGhhc0NoaWxkcmVuIGlzIHRydWUgKi99XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIDw+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9ID5cclxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImhlYWRlclwiPkhvdyBvbGQgYXJlIHlvdXIgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPXsxNX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SG93T2xkKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0e251bWJlck9mQ2hpbGRyZW4gJiYgbnVtYmVyT2ZDaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpbmRleCA9PT0gMCA/IDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPntgQ2hpbGQgJHtpbmRleCsxfSBBZ2VgfTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4ICsgNjB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2hpbGQuYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVEYXRhKGUsIGluZGV4KzEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj57YENoaWxkICR7aW5kZXgrMX0gQWdlYH08L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleCArIDYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NoaWxkLmFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGF0YShlLCBpbmRleCsxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kQWRvcm5tZW50PXs8VHJhc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPXszMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtMiBtdC0zIGN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4geyBkZWxldGVDaGlsZChpbmRleCsxKTt9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ubnVtYmVyT2ZDaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGlkOiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCArIDEsIGFnZTogJycgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRdKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZCBBZGRpdGlvbmFsIENoaWxkXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvPn1cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHdlIGFzayBhYm91dCB5b3VyIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93QXNrQWJvdXRDaGlsZHJlbih0cnVlKX19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPVwibXQtMVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaGF0IGlmIEknbSBwbGFubmluZyBvbiBoYXZpbmcga2lkcz8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1BsYW5uaW5nT25LaWRzKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIChcclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpPT57aGFuZGxlU3VibWl0KGUpfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc05leHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdHsvKnRpdGxlIG1vZGFsKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VGl0bGV9IG9uSGlkZT17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+U2VsZWN0IOKAnFllc+KAnSBpZiB5b3UgaGF2ZSBjaGlsZHJlbiBvciBhcmUgY3VycmVudGx5IGV4cGVjdGluZy4gU2VsZWN0IOKAnE5v4oCdIGlmIHlvdSBkb27igJl0IGhhdmUgY2hpbGRyZW4gb3IgYWxsIG9mIHlvdXIgY2hpbGRyZW4gYXJlIG91dCBvZiB5b3VyIGhvdXNlaG9sZCBhbmQgbW9yZSBvciBsZXNzIGZpbmFuY2lhbGx5IGluZGVwZW5kZW50LjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qaG93IG9kbGEgcmUgdXIgY2hpbGRyZW4gbW9kYWwqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dIb3dPbGR9IG9uSGlkZT17aGFuZGxlQ2xvc2VIb3dPbGR9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5Pk9ubHkgaW5jbHVkZSBjaGlsZHJlbiB3aG8geW91IGFyZSBmaW5hbmNpYWxseSBzdXBwb3J0aW5nICh1c3VhbGx5IDI1IGFuZCB5b3VuZ2VyKS4gTWFrZSBzdXJlIHRvIGluY29ycG9yYXRlIHlvdXIgY2hpbGRyZW4gd2hlbiB3ZSBhc2sgYWJvdXQgeW91ciBmaW5hbmNlcyBhbmQgZXhwZW5zZXMuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qYXNrIGFib3V0IGNoaWxkcmVuKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93QXNrQWJvdXRDaGlsZHJlbn0gb25IaWRlPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+TGlmZSBpbnN1cmFuY2UgaXMgYWxsIGFib3V0IHByb3RlY3RpbmcgdGhlIHBlb3BsZSB5b3UgbG92ZS4gSWYgdGhlcmUgYXJlIHBlb3BsZSB3aG8gcmVseSBvbiB5b3UgZm9yIGZpbmFuY2lhbCBzdXBwb3J0LCBhIGxpZmUgaW5zdXJhbmNlIHBvbGljeSB3aWxsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgZW5vdWdoIG1vbmV5IGlmIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMgdG8geW91IGFuZCB5b3VyIGluY29tZSBpcyBubyBsb25nZXIgdGhlcmUuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW59PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdHsvKmFzayBhYm91dCBjaGlsZHJlbiovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd1BsYW5uaW5nT25LaWRzfSBvbkhpZGU9e2hhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHN9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PklmIHlvdeKAmXJlIGV4cGVjdGluZywgZmlyc3Qgb2ZmLCBjb25ncmF0dWxhdGlvbnMhIFlvdSBzaG91bGQgaW5jbHVkZSB5b3VyIGV4cGVjdGVkIGNoaWxkIChvciBjaGlsZHJlbiBpZiB5b3XigJlyZSBoYXZpbmcgdHdpbnMgb3IgdHJpcGxldHMpIGFuZCBzcGVjaWZ5IOKAnDDigJ0gd2hlbiB3ZSBhc2sgZm9yIHlvdXIgY2hpbGRyZW7igJlzIGFnZXMuXHJcblxyXG5cdFx0XHRcdFx0SG93ZXZlciwgaWYgeW914oCZcmUgbWVyZWx5IHBsYW5uaW5nIG9uIGhhdmluZyBjaGlsZHJlbiBpbiB0aGUgZnV0dXJlLCBkb27igJl0IGluY2x1ZGUgdGhlbS4gVW50aWwgeW91IGFyZSBjZXJ0YWluIGFib3V0IGlmIGFuZCB3aGVuIHlvdeKAmWxsIGJlIGhhdmluZyBjaGlsZHJlbiwgaXTigJlzIGJlc3QgdG8gbm90IGluY2x1ZGUgdGhlbSBpbiB5b3VyIG5lZWRzIGFzc2Vzc21lbnQgdG8gZW5zdXJlIHlvdSBhcmUgbm90IHBheWluZyBmb3IgY292ZXJhZ2UgdGhhdCB5b3UgbWlnaHQgbm90IHVsdGltYXRlbHkgbmVlZC5cclxuXHJcblx0XHRcdFx0XHRXaGVuIHlvdXIgZmFtaWx5IGRvZXMgZ3Jvdywgd2UgcmVjb21tZW5kIHJldmlzaXRpbmcgdGhlIFBvbGljeU1lIGxpZmUgaW5zdXJhbmNlIGNoZWNrdXAgdG8gZ2V0IHVwZGF0ZWQgYWR2aWNlIGFuZCB1bmRlcnN0YW5kIGhvdyB5b3VyIGNvdmVyYWdlIG5lZWRzIG1heSBoYXZlIGNoYW5nZWQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn0gZnJvbSBcIi4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZVJlZHVjZXJcIjtcclxuaW1wb3J0IGZvcm1SZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9mb3JtLnJlZHVjZXJcIlxyXG5jb25zdCBkZWZhdWx0Rm9ybSA9IHt9O1xyXG5leHBvcnQgY29uc3QgRm9ybUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBjb25zdCBEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2xvYmFsRm9ybVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbZm9ybSwgZGlzcGF0Y2hdID0gdXNlTG9jYWxTdG9yYWdlUmVkdWNlcihcImZvcm1cIiwgZGVmYXVsdEZvcm0sIGZvcm1SZWR1Y2VyKTtcclxuICAgIGNvbnNvbGUubG9nKCdkaXNwYXRjaCcsIGRpc3BhdGNoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Zvcm19PlxyXG4gICAgICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvRm9ybUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZVJlZHVjZXIoa2V5LCBkZWZhdWx0VmFsLCByZWR1Y2VyKSB7XHJcbiAgICAvLyBtYWtlIHBpZWNlIG9mIHN0YXRlIGJhc2VkIG9uIG9mIHZhbHVlIGluIGxvY2Fsc3RvcmFnZSAob3IgZGVmYXVsdClcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YWwgPSBKU09OLnBhcnNlKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgU3RyaW5nKGRlZmF1bHRWYWwpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICB2YWwgPSBkZWZhdWx0VmFsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxcclxuICAgIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXHJcbiAgICB9LCBbc3RhdGVdKTtcclxuICAgIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoXVxyXG59XHJcbmV4cG9ydCB7dXNlTG9jYWxTdG9yYWdlUmVkdWNlcn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoaWxkcmVuRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGlsZHJlbkZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWxkcmVuKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hpbGRyZW5Gb3JtLz5cclxuICAgIClcclxufVxyXG4iLCJjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIklEXCI6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpZDogYWN0aW9uLmlkfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkFERF9TUE9VU0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3BvdXNlOiBhY3Rpb24uc3BvdXNlfTtcclxuICAgICAgICBjYXNlIFwiU1BPVVNFX0FHRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzcG91c2VBZ2U6IGFjdGlvbi5zcG91c2VBZ2V9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfQ0hJTERSRU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzQ2hpbGRyZW46IGFjdGlvbi5oYXNDaGlsZHJlbn07XHJcbiAgICAgICAgY2FzZSBcIk5VTUJFUl9PRl9DSElMRFJFTlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBudW1iZXJPZkNoaWxkcmVuOiBhY3Rpb24ubnVtYmVyT2ZDaGlsZHJlbn07XHJcbiAgICAgICAgY2FzZSBcIkNISUxEUkVOX0FHRV9BUlJBWVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBjaGlsZHJlbkFnZUFycmF5OiBhY3Rpb24uY2hpbGRyZW5BZ2VBcnJheX07XHJcbiAgICAgICAgY2FzZSBcIlBBWV9GT1JfQ09MTEVHRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBwYXlGb3JDb2xsZWdlOiBhY3Rpb24ucGF5Rm9yQ29sbGVnZX07XHJcbiAgICAgICAgY2FzZSBcIkRPQlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkb2I6IGFjdGlvbi5kb2J9O1xyXG4gICAgICAgIGNhc2UgXCJTRVhcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2V4OiBhY3Rpb24uc2V4fTtcclxuICAgICAgICBjYXNlIFwiVE9CQUNDT1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCB0b2JhY2NvOiBhY3Rpb24udG9iYWNjb307XHJcbiAgICAgICAgY2FzZSBcIkhFQUxUSF9DT05ESVRJT05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGVhbHRoQ29uZGl0aW9uOiBhY3Rpb24uaGVhbHRoQ29uZGl0aW9ufTtcclxuICAgICAgICBjYXNlIFwiWU9VUl9JTkNPTUVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgeW91ckluY29tZTogYWN0aW9uLnlvdXJJbmNvbWV9O1xyXG4gICAgICAgIGNhc2UgXCJTUE9VU0VfSU5DT01FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNwb3VzZUluY29tZTogYWN0aW9uLnNwb3VzZUluY29tZX07XHJcbiAgICAgICAgY2FzZSBcIlJFTlRfT1JfT1dOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlbnRPck93bjogYWN0aW9uLnJlbnRPck93bn07XHJcbiAgICAgICAgY2FzZSBcIk1PTlRITFlfUkVOVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBtb250aGx5UmVudDogYWN0aW9uLm1vbnRobHlSZW50fTtcclxuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfQ1VSUkVOVF9CQUxBTkNFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlQ3VycmVudEJhbGFuY2U6IGFjdGlvbi5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlfTtcclxuICAgICAgICBjYXNlIFwiTU9SVEdBR0VfTU9OVEhMWV9QQVlNRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG1vcnRnYWdlTW9udGhseVBheW1lbnQ6IGFjdGlvbi5tb3J0Z2FnZU1vbnRobHlQYXltZW50fTtcclxuICAgICAgICBjYXNlIFwiTElGRV9JTlNVUkFOQ0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbGlmZUluc3VyYW5jZTogYWN0aW9uLmxpZmVJbnN1cmFuY2V9O1xyXG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9FTVBMT1lFUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXI6IGFjdGlvbi5saWZlSW5zdXJhbmNlRW1wbG95ZXJ9O1xyXG4gICAgICAgIGNhc2UgXCJMSUZFX0lOU1VSQU5DRV9QRVJTT05BTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsaWZlSW5zdXJhbmNlUGVyc29uYWw6IGFjdGlvbi5saWZlSW5zdXJhbmNlUGVyc29uYWx9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfU0FWSU5HU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBoYXNTYXZpbmdzOiBhY3Rpb24uaGFzU2F2aW5nc307XHJcbiAgICAgICAgY2FzZSBcIkhBU19SRVRJUkVNRU5UX1NBVklOR1NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgaGFzUmV0aXJlbWVudFNhdmluZ3M6IGFjdGlvbi5oYXNSZXRpcmVtZW50U2F2aW5nc307XHJcbiAgICAgICAgY2FzZSBcIkhBU19OT05fUkVUSVJFTUVOVF9TQVZJTkdTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGhhc05vblJldGlyZW1lbnRTYXZpbmdzOiBhY3Rpb24uaGFzTm9uUmV0aXJlbWVudFNhdmluZ3N9O1xyXG4gICAgICAgIGNhc2UgXCJIQVNfREVCVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkZWJ0OiBhY3Rpb24uZGVidH07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfQ1JFRElUX0NBUkRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidENyZWRpdENhcmQ6IGFjdGlvbi5kZWJ0Q3JlZGl0Q2FyZH07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfU1RVREVOVF9MT0FOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRTdHVkZW50TG9hbjogYWN0aW9uLmRlYnRTdHVkZW50TG9hbn07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfSE9NRV9FUVVJVFlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidEhvbWVFcXVpdHk6IGFjdGlvbi5kZWJ0SG9tZUVxdWl0eX07XHJcbiAgICAgICAgY2FzZSBcIkRFQlRfTElORV9PRl9DUkVESVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGVidExpbmVPZkNyZWRpdDogYWN0aW9uLmRlYnRMaW5lT2ZDcmVkaXR9O1xyXG4gICAgICAgIGNhc2UgXCJERUJUX09USEVSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGRlYnRPdGhlcjogYWN0aW9uLmRlYnRPdGhlcn07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfRklSU1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZUZpcnN0OiBhY3Rpb24ubmFtZUZpcnN0fTtcclxuICAgICAgICBjYXNlIFwiTkFNRV9MQVNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVMYXN0OiBhY3Rpb24ubmFtZUxhc3R9O1xyXG4gICAgICAgIGNhc2UgXCJOQU1FX0VNQUlMXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hbWVFbWFpbDogYWN0aW9uLm5hbWVFbWFpbH07XHJcbiAgICAgICAgY2FzZSBcIk5BTUVfUEhPTkVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmFtZVBob25lOiBhY3Rpb24ubmFtZVBob25lfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9NT1JUR0FHRV9SRU5UXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQ6IGFjdGlvbi5leHBlbnNlTW9ydGdhZ2VBbmRSZW50fTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9IT1VTSU5HX0JJTExTX1VUSUxJVElFU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzOiBhY3Rpb24uZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllc307XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfR1JPQ0VSSUVTX1JFU1RBVVJBTlRTX0FMQ09IT0xcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbDogYWN0aW9uLmV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2x9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX1BIT05FX0lOVEVSTkVUX0NBQkxFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VQaG9uZUludGVybmV0Q2FibGU6IGFjdGlvbi5leHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlfTtcclxuICAgICAgICBjYXNlIFwiRVhQRU5TRV9TSE9QUElOR19GSVRORVNTX0dST09NSU5HXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZzogYWN0aW9uLmV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZ307XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfQ0FSU19UQVhJU19UUkFOU0lUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0OiBhY3Rpb24uZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXR9O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0NISUxEQ0FSRV9FRFVDQVRJT05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbjogYWN0aW9uLmV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb259O1xyXG4gICAgICAgIGNhc2UgXCJFWFBFTlNFX0RJU0NSRVRJT05BUllfVFJBVkVMX1JFQ19HSUZUU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzOiBhY3Rpb24uZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0c307XHJcbiAgICAgICAgY2FzZSBcIkVYUEVOU0VfVE9UQUxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZXhwZW5zZVRvdGFsOiBhY3Rpb24uZXhwZW5zZVRvdGFsfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=