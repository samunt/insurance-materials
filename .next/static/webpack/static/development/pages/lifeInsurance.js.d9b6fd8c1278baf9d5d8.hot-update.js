webpackHotUpdate("static\\development\\pages\\lifeInsurance.js",{

/***/ "./components/LifeInsuranceForm.js":
/*!*****************************************!*\
  !*** ./components/LifeInsuranceForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rentOrOwnForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-icons */ "./node_modules/react-bootstrap-icons/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function rentOrOwnForm() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lifeInsurance = _useState[0],
      setLifeInsurance = _useState[1]; //has life insurance


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lifeInsuranceEmployer = _useState2[0],
      setLifeInsuranceEmployer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lifeInsurancePersonal = _useState3[0],
      setLifeInsurancePersonal = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showHasLifeInsurance = _useState4[0],
      setShowHasLifeInsurance = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isNext = _useState5[0],
      setIsNext = _useState5[1];

  var handleCloseHasLifeInsurance = function handleCloseHasLifeInsurance() {
    return setShowHasLifeInsurance(false);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExistingLifeInsurance = _useState6[0],
      setShowExistingLifeInsurance = _useState6[1];

  var handleCloseExistingLifeInsurance = function handleCloseExistingLifeInsurance() {
    return setShowExistingLifeInsurance(false);
  }; // progress bar


  var now = 75;
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
    return {
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
    };
  });
  var classes = useStyles(); //get data from localstroage/redux and set State when component mounted
  // useEffect(() => {
  //     if(lifeInsurance !== form.lifeInsurance){
  //         setLifeInsurance(form.lifeInsurance ? form.lifeInsurance : '');
  //     }
  //     if(lifeInsuranceEmployer !== form.lifeInsuranceEmployer){
  //         setLifeInsuranceEmployer(form.lifeInsuranceEmployer ? form.lifeInsuranceEmployer : '');
  //     }
  //     if(lifeInsurancePersonal !== form.lifeInsurancePersonal){
  //         setLifeInsurancePersonal(form.lifeInsurancePersonal ? form.lifeInsurancePersonal : '');
  //     }
  // }, []);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (lifeInsurance !== form.lifeInsurance) {
      setLifeInsurance(form.lifeInsurance ? form.lifeInsurance : '');
    }

    if (lifeInsuranceEmployer !== form.lifeInsuranceEmployer) {
      setLifeInsuranceEmployer(form.lifeInsuranceEmployer ? form.lifeInsuranceEmployer : '');
    }

    if (lifeInsurancePersonal !== form.lifeInsurancePersonal) {
      setLifeInsurancePersonal(form.lifeInsurancePersonal ? form.lifeInsurancePersonal : '');
    } //highlight Yes/No button accourding to selected state


    if (lifeInsurance === true) {
      document.getElementById('insurance-no').classList.remove('active_button');
      document.getElementById('insurance-yes').classList.add('active_button');
    } else if (lifeInsurance === false) {
      document.getElementById('insurance-yes').classList.remove('active_button');
      document.getElementById('insurance-no').classList.add('active_button');
    } //enable disable next button


    if (lifeInsurance === true && (lifeInsuranceEmployer > 0 || lifeInsuranceEmployer === 0) && (lifeInsurancePersonal > 0 || lifeInsurancePersonal === 0)) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
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
    label: "".concat(now, "% Done"),
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
    onClick: function onClick() {
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
    onClick: function onClick() {
      setLifeInsurance(true);
      dispatch({
        type: "LIFE_INSURANCE",
        lifeInsurance: true
      });
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
    onClick: function onClick() {
      setLifeInsurance(false);
      setLifeInsuranceEmployer();
      setLifeInsurancePersonal();
      dispatch({
        type: "LIFE_INSURANCE",
        lifeInsurance: false
      });
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
    onChange: function onChange(e) {
      setLifeInsuranceEmployer(e.target.value !== '' ? parseInt(e.target.value) : '');
      dispatch({
        type: "LIFE_INSURANCE_EMPLOYER",
        lifeInsuranceEmployer: lifeInsuranceEmployer
      });
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
    onChange: function onChange(e) {
      setLifeInsurancePersonal(e.target.value !== '' ? parseInt(e.target.value) : '');
      dispatch({
        type: "LIFE_INSURANCE_PERSONAL",
        lifeInsurancePersonal: lifeInsurancePersonal
      });
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
    onClick: function onClick() {
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
    onClick: function onClick() {
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

_s(rentOrOwnForm, "ZJCKO+7P525Ri6AeTM6wPDRp7pk=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpZmVJbnN1cmFuY2VGb3JtLmpzIl0sIm5hbWVzIjpbInJlbnRPck93bkZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJmb3JtIiwiRm9ybUNvbnRleHQiLCJ1c2VTdGF0ZSIsImxpZmVJbnN1cmFuY2UiLCJzZXRMaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwic2V0TGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2hvd0hhc0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93SGFzTGlmZUluc3VyYW5jZSIsImlzTmV4dCIsInNldElzTmV4dCIsImhhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZSIsInNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlIiwiaGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJub3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luIiwic3BhY2luZyIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJoZWlnaHQiLCJ0eXBlIiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDcEMsTUFBTUMsTUFBTSxH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LEVBQUMsZ0JBRmQ7QUFHSSxXQUFPLEVBQUUsbUJBQU07QUFBQ0ksa0NBQTRCLENBQUMsSUFBRCxDQUE1QjtBQUFtQztBQUh2RCxJQURKLENBRGIsQ0FsR0QsRUE0R1UsTUFBQyxxREFBRDtBQUFPLFFBQUksRUFBRU4sb0JBQWI7QUFBbUMsVUFBTSxFQUFFSTtBQUEzQyxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLG9VQURKLEVBRUksTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFESixDQUZKLENBNUdWLEVBcUhVLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVDLHlCQUFiO0FBQXdDLFVBQU0sRUFBRUU7QUFBaEQsS0FDSSxNQUFDLHFEQUFELENBQU8sSUFBUCw0UEFESixFQUVJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FGSixDQXJIVixDQUxNLENBREo7QUFzSUg7O0dBak51QnRCLGE7VUFDTEUscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxpZmVJbnN1cmFuY2UuanMuZDliNmZkOGMxMjc4YmFmOWQ1ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0LCBGb3JtQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCI7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBJbnB1dEFkb3JubWVudCwgbWFrZVN0eWxlcywgSW5wdXQsIElucHV0TGFiZWwsIEZvcm1Db250cm9sfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW50T3JPd25Gb3JtKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHRjb25zdCBmb3JtID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcbiAgICBjb25zdCBbbGlmZUluc3VyYW5jZSwgc2V0TGlmZUluc3VyYW5jZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICAvL2hhcyBsaWZlIGluc3VyYW5jZVxyXG4gICAgY29uc3QgW2xpZmVJbnN1cmFuY2VFbXBsb3llciwgc2V0TGlmZUluc3VyYW5jZUVtcGxveWVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsaWZlSW5zdXJhbmNlUGVyc29uYWwsIHNldExpZmVJbnN1cmFuY2VQZXJzb25hbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2hvd0hhc0xpZmVJbnN1cmFuY2UsIHNldFNob3dIYXNMaWZlSW5zdXJhbmNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc05leHQsIHNldElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZSA9ICgpID0+IHNldFNob3dIYXNMaWZlSW5zdXJhbmNlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlLCBzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlRXhpc3RpbmdMaWZlSW5zdXJhbmNlID0gKCkgPT4gc2V0U2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZShmYWxzZSk7XHJcblxyXG4gICAgLy8gcHJvZ3Jlc3MgYmFyXHJcbiAgICBjb25zdCBub3cgPSA3NTtcclxuXHJcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdCAgZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0ICBmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdFx0fSxcclxuXHRcdG1hcmdpbjoge1xyXG5cdFx0ICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHR9LFxyXG5cdFx0d2l0aG91dExhYmVsOiB7XHJcblx0XHQgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdCAgd2lkdGg6ICcyNWNoJyxcclxuXHRcdH0sXHJcblx0fSkpO1xyXG5cdFxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Ly9nZXQgZGF0YSBmcm9tIGxvY2Fsc3Ryb2FnZS9yZWR1eCBhbmQgc2V0IFN0YXRlIHdoZW4gY29tcG9uZW50IG1vdW50ZWRcclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmKGxpZmVJbnN1cmFuY2UgIT09IGZvcm0ubGlmZUluc3VyYW5jZSl7XHJcbiAgICAvLyAgICAgICAgIHNldExpZmVJbnN1cmFuY2UoZm9ybS5saWZlSW5zdXJhbmNlID8gZm9ybS5saWZlSW5zdXJhbmNlIDogJycpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZihsaWZlSW5zdXJhbmNlRW1wbG95ZXIgIT09IGZvcm0ubGlmZUluc3VyYW5jZUVtcGxveWVyKXtcclxuICAgIC8vICAgICAgICAgc2V0TGlmZUluc3VyYW5jZUVtcGxveWVyKGZvcm0ubGlmZUluc3VyYW5jZUVtcGxveWVyID8gZm9ybS5saWZlSW5zdXJhbmNlRW1wbG95ZXIgOiAnJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmKGxpZmVJbnN1cmFuY2VQZXJzb25hbCAhPT0gZm9ybS5saWZlSW5zdXJhbmNlUGVyc29uYWwpe1xyXG4gICAgLy8gICAgICAgICBzZXRMaWZlSW5zdXJhbmNlUGVyc29uYWwoZm9ybS5saWZlSW5zdXJhbmNlUGVyc29uYWwgPyBmb3JtLmxpZmVJbnN1cmFuY2VQZXJzb25hbCA6ICcnKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbXSk7XHJcbiAgICBcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYobGlmZUluc3VyYW5jZSAhPT0gZm9ybS5saWZlSW5zdXJhbmNlKXtcclxuICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZShmb3JtLmxpZmVJbnN1cmFuY2UgPyBmb3JtLmxpZmVJbnN1cmFuY2UgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxpZmVJbnN1cmFuY2VFbXBsb3llciAhPT0gZm9ybS5saWZlSW5zdXJhbmNlRW1wbG95ZXIpe1xyXG4gICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXIoZm9ybS5saWZlSW5zdXJhbmNlRW1wbG95ZXIgPyBmb3JtLmxpZmVJbnN1cmFuY2VFbXBsb3llciA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGlmZUluc3VyYW5jZVBlcnNvbmFsICE9PSBmb3JtLmxpZmVJbnN1cmFuY2VQZXJzb25hbCl7XHJcbiAgICAgICAgICAgIHNldExpZmVJbnN1cmFuY2VQZXJzb25hbChmb3JtLmxpZmVJbnN1cmFuY2VQZXJzb25hbCA/IGZvcm0ubGlmZUluc3VyYW5jZVBlcnNvbmFsIDogJycpO1xyXG4gICAgICAgIH1cclxuXHRcdC8vaGlnaGxpZ2h0IFllcy9ObyBidXR0b24gYWNjb3VyZGluZyB0byBzZWxlY3RlZCBzdGF0ZVxyXG5cdFx0aWYobGlmZUluc3VyYW5jZSA9PT0gdHJ1ZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN1cmFuY2Utbm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN1cmFuY2UteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0fWVsc2UgaWYobGlmZUluc3VyYW5jZSA9PT0gZmFsc2Upe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdXJhbmNlLXllcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZS1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHRcdC8vZW5hYmxlIGRpc2FibGUgbmV4dCBidXR0b25cclxuXHRcdGlmKGxpZmVJbnN1cmFuY2UgPT09IHRydWUgJiYgKGxpZmVJbnN1cmFuY2VFbXBsb3llciA+IDAgfHwgbGlmZUluc3VyYW5jZUVtcGxveWVyID09PSAwKSAmJiAobGlmZUluc3VyYW5jZVBlcnNvbmFsID4gMCB8fCBsaWZlSW5zdXJhbmNlUGVyc29uYWwgPT09IDApKXtcclxuXHRcdFx0c2V0SXNOZXh0KGZhbHNlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRzZXRJc05leHQodHJ1ZSlcclxuXHRcdH1cclxuXHJcblx0fSwgW2xpZmVJbnN1cmFuY2UsIGxpZmVJbnN1cmFuY2VFbXBsb3llciwgbGlmZUluc3VyYW5jZVBlcnNvbmFsXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdoZWFkZXInPkRvIHlvdSBoYXZlIGxpZmUgaW5zdXJhbmNlPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hhc0xpZmVJbnN1cmFuY2UodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExpZmVJbnN1cmFuY2UodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFXCIsIGxpZmVJbnN1cmFuY2U6IHRydWUgfSk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGlkPVwiaW5zdXJhbmNlLXllc1wiXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0WWVzXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdGlkPVwiaW5zdXJhbmNlLW5vXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHNldExpZmVJbnN1cmFuY2UoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHNldExpZmVJbnN1cmFuY2VFbXBsb3llcigpO1xyXG5cdFx0XHRcdFx0XHRcdHNldExpZmVJbnN1cmFuY2VQZXJzb25hbCgpO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJMSUZFX0lOU1VSQU5DRVwiLCBsaWZlSW5zdXJhbmNlOiBmYWxzZSB9KTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIiwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiAwIH0pO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJMSUZFX0lOU1VSQU5DRV9QRVJTT05BTFwiLCBsaWZlSW5zdXJhbmNlUGVyc29uYWw6IDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3NhdmluZ3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHROb1xyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdHsvKiB0aGlzIHNlY3Rpb24gaXMgb25seSBzaG93biB3aGVuIGxpZmVJbnN1cmFuY2UgaXMgdHJ1ZSAqL31cclxuXHRcdFx0e2xpZmVJbnN1cmFuY2UgJiYgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+RW1wbG95ZXIgTGlmZSBJbnN1cmFuY2U8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPkVtcGxveWVyIExpZmUgSW5zdXJhbmNlPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtsaWZlSW5zdXJhbmNlRW1wbG95ZXJ9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXIoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCIsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogbGlmZUluc3VyYW5jZUVtcGxveWVyIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuXHRcdFx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5QZXJzb25hbCBMaWZlIEluc3VyYW5jZTwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+UGVyc29uYWwgTGlmZSBJbnN1cmFuY2U8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2xpZmVJbnN1cmFuY2VQZXJzb25hbH1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldExpZmVJbnN1cmFuY2VQZXJzb25hbChlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIiwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBsaWZlSW5zdXJhbmNlUGVyc29uYWwgfSk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCk9PiB7cm91dGVyLnB1c2goJy9zYXZpbmdzJyl9fVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc05leHR9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdE5leHRcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPn1cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoeSBkbyB5b3UgYXNrIGFib3V0IG15IGV4aXN0aW5nIGxpZmUgaW5zdXJhbmNlPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR7Lyp0aXRsZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0hhc0xpZmVJbnN1cmFuY2V9IG9uSGlkZT17aGFuZGxlQ2xvc2VIYXNMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlNlbGVjdCDigJxZZXPigJ0gaWYgeW91IGFscmVhZHkgaGF2ZSBsaWZlIGluc3VyYW5jZSBjb3ZlcmFnZSBpbiBwbGFjZSwgYnV0IHNlbGVjdCDigJxOb+KAnSBpZiB5b3UgZG9u4oCZdCBoYXZlIGV4aXN0aW5nIGxpZmUgaW5zdXJhbmNlIG9yIGlmIHlvdXIgcG9saWNpZXMgYXJlIGV4cGlyaW5nIHNvb24uIFRoaXMgd291bGQgaW5jbHVkZSBib3RoIHBvbGljaWVzIHlvdSBoYXZlIHRocm91Z2ggd29yayBvciBwb2xpY2llcyB0aGF0IHlvdeKAmXZlIHB1cmNoYXNlZCBpbmRpdmlkdWFsbHkgdGhyb3VnaCBhIGJyb2tlci48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qYXNrIGFib3V0IGV4aXN0aW5nIGluc3VyYW5jZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZX0gb25IaWRlPXtoYW5kbGVDbG9zZUV4aXN0aW5nTGlmZUluc3VyYW5jZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5JZiB5b3UgYWxyZWFkeSBoYXZlIGxpZmUgaW5zdXJhbmNlLCB3ZSB3aWxsIHJlZHVjZSB0aGUgY292ZXJhZ2UgYW1vdW50IG9mIHlvdXIgbmV3IHBvbGljeSBieSB0aGUgYW1vdW50IG9mIGNvdmVyYWdlIGFscmVhZHkgaW4gcGxhY2UuIFRoaXMgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgdG90YWwgYW1vdW50IG9mIGNvdmVyYWdlIGJldHdlZW4gYWxsIHlvdXIgcG9saWNpZXMgaXMgaW4gbGluZSB3aXRoIHlvdXIgbmVlZHMuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUV4aXN0aW5nTGlmZUluc3VyYW5jZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==