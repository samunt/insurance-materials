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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (form.lifeInsurance && lifeInsurance !== form.lifeInsurance) {
      setLifeInsurance(form.lifeInsurance);
    }

    if (lifeInsuranceEmployer !== form.lifeInsuranceEmployer) {
      setLifeInsuranceEmployer(form.lifeInsuranceEmployer ? form.lifeInsuranceEmployer : '');
    }

    if (lifeInsurancePersonal !== form.lifeInsurancePersonal) {
      setLifeInsurancePersonal(form.lifeInsurancePersonal ? form.lifeInsurancePersonal : '');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //highlight Yes/No button accourding to selected state
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
    } //dispatch data on localstroage/redux on change


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

_s(rentOrOwnForm, "zcx2TQ1f0+KdDJhqcyWKly1D0xk=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpZmVJbnN1cmFuY2VGb3JtLmpzIl0sIm5hbWVzIjpbInJlbnRPck93bkZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJmb3JtIiwiRm9ybUNvbnRleHQiLCJ1c2VTdGF0ZSIsImxpZmVJbnN1cmFuY2UiLCJzZXRMaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwic2V0TGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2hvd0hhc0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93SGFzTGlmZUluc3VyYW5jZSIsImlzTmV4dCIsInNldElzTmV4dCIsImhhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZSIsInNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlIiwiaGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJub3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luIiwic3BhY2luZyIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0eXBlIiwiaGVpZ2h0IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBM0I7QUFDSCxNQUFNQyxJQUFJLEdBQUdGLHdEQUFVLENBQUNHLGlFQUFELENBQXZCOztBQUh1QyxrQkFJTUMsc0RBQVEsQ0FBQyxFQUFELENBSmQ7QUFBQSxNQUk3QkMsYUFKNkI7QUFBQSxNQUlkQyxnQkFKYyxpQkFLcEM7OztBQUxvQyxtQkFNc0JGLHNEQUFRLENBQUMsRUFBRCxDQU45QjtBQUFBLE1BTTdCRyxxQkFONkI7QUFBQSxNQU1OQyx3QkFOTTs7QUFBQSxtQkFPc0JKLHNEQUFRLENBQUMsRUFBRCxDQVA5QjtBQUFBLE1BTzdCSyxxQkFQNkI7QUFBQSxNQU9OQyx3QkFQTTs7QUFBQSxtQkFRb0JOLHNEQUFRLENBQUMsS0FBRCxDQVI1QjtBQUFBLE1BUTdCTyxvQkFSNkI7QUFBQSxNQVFQQyx1QkFSTzs7QUFBQSxtQkFTUlIsc0RBQVEsQ0FBQyxJQUFELENBVEE7QUFBQSxNQVM3QlMsTUFUNkI7QUFBQSxNQVNyQkMsU0FUcUI7O0FBVXBDLE1BQU1DLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEI7QUFBQSxXQUFNSCx1QkFBdUIsQ0FBQyxLQUFELENBQTdCO0FBQUEsR0FBcEM7O0FBVm9DLG1CQVc4QlIsc0RBQVEsQ0FBQyxLQUFELENBWHRDO0FBQUEsTUFXN0JZLHlCQVg2QjtBQUFBLE1BV0ZDLDRCQVhFOztBQVlwQyxNQUFNQyxnQ0FBZ0MsR0FBRyxTQUFuQ0EsZ0NBQW1DO0FBQUEsV0FBTUQsNEJBQTRCLENBQUMsS0FBRCxDQUFsQztBQUFBLEdBQXpDLENBWm9DLENBY3BDOzs7QUFDQSxNQUFNRSxHQUFHLEdBQUcsRUFBWjtBQUVBLE1BQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUMzQ0MsVUFBSSxFQUFFO0FBQ0pDLGVBQU8sRUFBRSxNQURMO0FBRUpDLGdCQUFRLEVBQUU7QUFGTixPQURxQztBQUszQ0MsWUFBTSxFQUFFO0FBQ05BLGNBQU0sRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURGLE9BTG1DO0FBUTNDQyxrQkFBWSxFQUFFO0FBQ1pDLGlCQUFTLEVBQUVQLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFEQyxPQVI2QjtBQVczQ0csZUFBUyxFQUFFO0FBQ1RDLGFBQUssRUFBRTtBQURFO0FBWGdDLEtBQVo7QUFBQSxHQUFELENBQTVCO0FBZ0JILE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QixDQWpDdUMsQ0FtQ3ZDOztBQUNBYSx5REFBUyxDQUFDLFlBQU07QUFDVCxRQUFHL0IsSUFBSSxDQUFDRyxhQUFMLElBQXNCQSxhQUFhLEtBQUtILElBQUksQ0FBQ0csYUFBaEQsRUFBOEQ7QUFDMURDLHNCQUFnQixDQUFDSixJQUFJLENBQUNHLGFBQU4sQ0FBaEI7QUFDSDs7QUFDRCxRQUFHRSxxQkFBcUIsS0FBS0wsSUFBSSxDQUFDSyxxQkFBbEMsRUFBd0Q7QUFDcERDLDhCQUF3QixDQUFDTixJQUFJLENBQUNLLHFCQUFMLEdBQTZCTCxJQUFJLENBQUNLLHFCQUFsQyxHQUEwRCxFQUEzRCxDQUF4QjtBQUNIOztBQUNELFFBQUdFLHFCQUFxQixLQUFLUCxJQUFJLENBQUNPLHFCQUFsQyxFQUF3RDtBQUNwREMsOEJBQXdCLENBQUNSLElBQUksQ0FBQ08scUJBQUwsR0FBNkJQLElBQUksQ0FBQ08scUJBQWxDLEdBQTBELEVBQTNELENBQXhCO0FBQ0g7QUFDSixHQVZLLEVBVUgsRUFWRyxDQUFUO0FBWUF3Qix5REFBUyxDQUFDLFlBQU07QUFDZjtBQUNBLFFBQUc1QixhQUFhLEtBQUssSUFBckIsRUFBMEI7QUFDekI2QixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NDLFNBQXhDLENBQWtEQyxNQUFsRCxDQUF5RCxlQUF6RDtBQUNBSCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLFNBQXpDLENBQW1ERSxHQUFuRCxDQUF1RCxlQUF2RDtBQUNBLEtBSEQsTUFHTSxJQUFHakMsYUFBYSxLQUFLLEtBQXJCLEVBQTJCO0FBQ2hDNkIsY0FBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxTQUF6QyxDQUFtREMsTUFBbkQsQ0FBMEQsZUFBMUQ7QUFDQUgsY0FBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDQyxTQUF4QyxDQUFrREUsR0FBbEQsQ0FBc0QsZUFBdEQ7QUFDQSxLQVJjLENBU2Y7OztBQUNBLFFBQUdqQyxhQUFhLEtBQUssSUFBbEIsS0FBMkJFLHFCQUFxQixHQUFHLENBQXhCLElBQTZCQSxxQkFBcUIsS0FBSyxDQUFsRixNQUF5RkUscUJBQXFCLEdBQUcsQ0FBeEIsSUFBNkJBLHFCQUFxQixLQUFLLENBQWhKLENBQUgsRUFBc0o7QUFDckpLLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDQSxLQUZELE1BRUs7QUFDSkEsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBLEtBZGMsQ0FlZjs7O0FBQ0FmLFlBQVEsQ0FBQztBQUFFd0MsVUFBSSxFQUFFLGdCQUFSO0FBQTBCbEMsbUJBQWEsRUFBRUE7QUFBekMsS0FBRCxDQUFSO0FBQ0FOLFlBQVEsQ0FBQztBQUFFd0MsVUFBSSxFQUFFLHlCQUFSO0FBQW1DaEMsMkJBQXFCLEVBQUVBO0FBQTFELEtBQUQsQ0FBUjtBQUNBUixZQUFRLENBQUM7QUFBRXdDLFVBQUksRUFBRSx5QkFBUjtBQUFtQzlCLDJCQUFxQixFQUFFQTtBQUExRCxLQUFELENBQVI7QUFFQSxHQXBCUSxFQW9CTixDQUFDSixhQUFELEVBQWdCRSxxQkFBaEIsRUFBdUNFLHFCQUF2QyxDQXBCTSxDQUFUO0FBc0JHLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDTixNQUFDLDZEQUFELE9BRE0sRUFFTixNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsU0FBSyxFQUFFO0FBQUNpQixZQUFNLEVBQUM7QUFBUjtBQUExQixLQUNDLE1BQUMsMkRBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBQ2MsWUFBTSxFQUFFO0FBQVQsS0FBcEI7QUFBd0MsWUFBUSxNQUFoRDtBQUFpRCxXQUFPLE1BQXhEO0FBQXlELFdBQU8sRUFBQyxNQUFqRTtBQUF3RSxTQUFLLFlBQUtyQixHQUFMLFdBQTdFO0FBQStGLE9BQUcsRUFBRUE7QUFBcEcsSUFERCxDQUZNLEVBS04sTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUU7QUFBQ1UsZUFBUyxFQUFDO0FBQVg7QUFBaEMsS0FDQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFO0FBQS9ELEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCw0Q0FDZ0IsTUFBQyxvRUFBRDtBQUNJLFFBQUksRUFBRSxFQURWO0FBRUksYUFBUyxFQUFDLGdCQUZkO0FBR0ksV0FBTyxFQUFFLG1CQUFNO0FBQUNqQiw2QkFBdUIsQ0FBQyxJQUFELENBQXZCO0FBQThCO0FBSGxELElBRGhCLENBREQsQ0FERCxFQVVDLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQThDLE1BQUUsRUFBRSxFQUFsRDtBQUFzRCxXQUFPLEVBQUU7QUFBL0QsS0FDQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0MsTUFBQyxzREFBRDtBQUNDLGFBQVMsRUFBQyxjQURYO0FBRUMsV0FBTyxFQUFFLG1CQUFNO0FBQ09OLHNCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDckIsS0FKRjtBQUtDLE1BQUUsRUFBQyxlQUxKO0FBTUMsU0FBSyxFQUFFO0FBQUV5QixXQUFLLEVBQUU7QUFBVCxLQU5SO0FBT0MsV0FBTyxFQUFDLFdBUFQ7QUFRQyxRQUFJLEVBQUM7QUFSTixXQURELENBREQsRUFlQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0MsTUFBQyxzREFBRDtBQUNDLGFBQVMsRUFBQyxjQURYO0FBRUMsTUFBRSxFQUFDLGNBRko7QUFHQyxXQUFPLEVBQUUsbUJBQU07QUFDZHpCLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQUUsOEJBQXdCO0FBQ3hCRSw4QkFBd0I7QUFDeEJYLGNBQVEsQ0FBQztBQUFFd0MsWUFBSSxFQUFFLGdCQUFSO0FBQTBCbEMscUJBQWEsRUFBRTtBQUF6QyxPQUFELENBQVI7QUFDQU4sY0FBUSxDQUFDO0FBQUV3QyxZQUFJLEVBQUUseUJBQVI7QUFBbUNoQyw2QkFBcUIsRUFBRTtBQUExRCxPQUFELENBQVI7QUFDQVIsY0FBUSxDQUFDO0FBQUV3QyxZQUFJLEVBQUUseUJBQVI7QUFBbUM5Qiw2QkFBcUIsRUFBRTtBQUExRCxPQUFELENBQVI7QUFDcUJaLFlBQU0sQ0FBQzRDLElBQVAsQ0FBWSxVQUFaO0FBQ0gsS0FYcEI7QUFZQyxTQUFLLEVBQUU7QUFBRVYsV0FBSyxFQUFFO0FBQVQsS0FaUjtBQWFDLFdBQU8sRUFBQyxXQWJUO0FBY0MsUUFBSSxFQUFDO0FBZE4sVUFERCxDQWZELENBVkQsRUErQ0UxQixhQUFhLElBQUksTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsRUFBakM7QUFBcUMsV0FBTyxFQUFDLFFBQTdDO0FBQXNELFdBQU8sRUFBRTtBQUEvRCxLQUNqQixNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFLENBQS9EO0FBQWtFLGFBQVMsRUFBQztBQUE1RSxLQUNDO0FBQUcsYUFBUyxFQUFDO0FBQWIsK0JBREQsQ0FEaUIsRUFJakIsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRTJCLE9BQU8sQ0FBQ047QUFBMUMsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLCtCQURELEVBRUMsTUFBQyx1REFBRDtBQUNDLE1BQUUsRUFBQywyQkFESjtBQUVDLFNBQUssRUFBRW5CLHFCQUZSO0FBR0MsUUFBSSxFQUFDLFFBSE47QUFJQyxZQUFRLEVBQUUsa0JBQUNtQyxDQUFELEVBQU87QUFDUWxDLDhCQUF3QixDQUFDa0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkIsR0FBd0JDLFFBQVEsQ0FBQ0gsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEMsR0FBbUQsRUFBcEQsQ0FBeEI7QUFDSCxLQU52QjtBQU9DLGtCQUFjLEVBQUUsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekI7QUFQakIsSUFGRCxDQURELENBSmlCLEVBa0JMLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQThDLE1BQUUsRUFBRSxFQUFsRDtBQUFzRCxXQUFPLEVBQUUsQ0FBL0Q7QUFBa0UsYUFBUyxFQUFDO0FBQTVFLEtBQ1g7QUFBRyxhQUFTLEVBQUM7QUFBYiwrQkFEVyxDQWxCSyxFQXFCakIsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRVosT0FBTyxDQUFDTjtBQUExQyxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsK0JBREQsRUFFQyxNQUFDLHVEQUFEO0FBQ0MsTUFBRSxFQUFDLDJCQURKO0FBRUMsU0FBSyxFQUFFakIscUJBRlI7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFlBQVEsRUFBRSxrQkFBQ2lDLENBQUQsRUFBTztBQUFDaEMsOEJBQXdCLENBQUNnQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixFQUFuQixHQUF3QkMsUUFBUSxDQUFDSCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQyxHQUFtRCxFQUFwRCxDQUF4QjtBQUFnRixLQUpuRztBQUtDLGtCQUFjLEVBQUUsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekI7QUFMakIsSUFGRCxDQURELENBckJpQixFQWlDakIsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsc0RBQUQ7QUFDQyxhQUFTLEVBQUMsY0FEWDtBQUVDLFdBQU8sRUFBRSxtQkFBSztBQUFDL0MsWUFBTSxDQUFDNEMsSUFBUCxDQUFZLFVBQVo7QUFBd0IsS0FGeEM7QUFHQyxTQUFLLEVBQUU7QUFBRVYsV0FBSyxFQUFFO0FBQVQsS0FIUjtBQUlDLFdBQU8sRUFBQyxXQUpUO0FBS0MsUUFBSSxFQUFDLElBTE47QUFNQyxZQUFRLEVBQUVsQjtBQU5YLFlBREQsQ0FqQ2lCLENBL0NuQixFQTZGQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFLENBQS9EO0FBQWtFLGFBQVMsRUFBQztBQUE1RSxLQUNhO0FBQUcsYUFBUyxFQUFDO0FBQWIsaUVBQ0ksTUFBQyxvRUFBRDtBQUNJLFFBQUksRUFBRSxFQURWO0FBRUksYUFBUyxFQUFDLGdCQUZkO0FBR0ksV0FBTyxFQUFFLG1CQUFNO0FBQUNJLGtDQUE0QixDQUFDLElBQUQsQ0FBNUI7QUFBbUM7QUFIdkQsSUFESixDQURiLENBN0ZELEVBdUdVLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVOLG9CQUFiO0FBQW1DLFVBQU0sRUFBRUk7QUFBM0MsS0FDSSxNQUFDLHFEQUFELENBQU8sSUFBUCxvVUFESixFQUVJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FGSixDQXZHVixFQWdIVSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyx5QkFBYjtBQUF3QyxVQUFNLEVBQUVFO0FBQWhELEtBQ0ksTUFBQyxxREFBRCxDQUFPLElBQVAsNFBBREosRUFFSSxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQTtBQUFyQyxhQURKLENBRkosQ0FoSFYsQ0FMTSxDQURKO0FBaUlIOztHQXZNdUJ0QixhO1VBQ0xFLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsaWZlSW5zdXJhbmNlLmpzLmFjYmMwMzhmNGI2M2E5NWY3ZmZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgSW5wdXRBZG9ybm1lbnQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVudE9yT3duRm9ybSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XHJcblx0Y29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3QgW2xpZmVJbnN1cmFuY2UsIHNldExpZmVJbnN1cmFuY2VdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy9oYXMgbGlmZSBpbnN1cmFuY2VcclxuICAgIGNvbnN0IFtsaWZlSW5zdXJhbmNlRW1wbG95ZXIsIHNldExpZmVJbnN1cmFuY2VFbXBsb3llcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbGlmZUluc3VyYW5jZVBlcnNvbmFsLCBzZXRMaWZlSW5zdXJhbmNlUGVyc29uYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3dIYXNMaWZlSW5zdXJhbmNlLCBzZXRTaG93SGFzTGlmZUluc3VyYW5jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUhhc0xpZmVJbnN1cmFuY2UgPSAoKSA9PiBzZXRTaG93SGFzTGlmZUluc3VyYW5jZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZSwgc2V0U2hvd0V4aXN0aW5nTGlmZUluc3VyYW5jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZUV4aXN0aW5nTGlmZUluc3VyYW5jZSA9ICgpID0+IHNldFNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UoZmFsc2UpO1xyXG5cclxuICAgIC8vIHByb2dyZXNzIGJhclxyXG4gICAgY29uc3Qgbm93ID0gNzU7XHJcblxyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHQgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCAgZmxleFdyYXA6ICd3cmFwJyxcclxuXHRcdH0sXHJcblx0XHRtYXJnaW46IHtcclxuXHRcdCAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdC8vZ2V0IGRhdGEgZnJvbSBsb2NhbHN0cm9hZ2UvcmVkdXggYW5kIHNldCBTdGF0ZSB3aGVuIGNvbXBvbmVudCBtb3VudGVkXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihmb3JtLmxpZmVJbnN1cmFuY2UgJiYgbGlmZUluc3VyYW5jZSAhPT0gZm9ybS5saWZlSW5zdXJhbmNlKXtcclxuICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZShmb3JtLmxpZmVJbnN1cmFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsaWZlSW5zdXJhbmNlRW1wbG95ZXIgIT09IGZvcm0ubGlmZUluc3VyYW5jZUVtcGxveWVyKXtcclxuICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZUVtcGxveWVyKGZvcm0ubGlmZUluc3VyYW5jZUVtcGxveWVyID8gZm9ybS5saWZlSW5zdXJhbmNlRW1wbG95ZXIgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxpZmVJbnN1cmFuY2VQZXJzb25hbCAhPT0gZm9ybS5saWZlSW5zdXJhbmNlUGVyc29uYWwpe1xyXG4gICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlUGVyc29uYWwoZm9ybS5saWZlSW5zdXJhbmNlUGVyc29uYWwgPyBmb3JtLmxpZmVJbnN1cmFuY2VQZXJzb25hbCA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly9oaWdobGlnaHQgWWVzL05vIGJ1dHRvbiBhY2NvdXJkaW5nIHRvIHNlbGVjdGVkIHN0YXRlXHJcblx0XHRpZihsaWZlSW5zdXJhbmNlID09PSB0cnVlKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZS1ubycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZS15ZXMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9ZWxzZSBpZihsaWZlSW5zdXJhbmNlID09PSBmYWxzZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN1cmFuY2UteWVzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdXJhbmNlLW5vJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0fVxyXG5cdFx0Ly9lbmFibGUgZGlzYWJsZSBuZXh0IGJ1dHRvblxyXG5cdFx0aWYobGlmZUluc3VyYW5jZSA9PT0gdHJ1ZSAmJiAobGlmZUluc3VyYW5jZUVtcGxveWVyID4gMCB8fCBsaWZlSW5zdXJhbmNlRW1wbG95ZXIgPT09IDApICYmIChsaWZlSW5zdXJhbmNlUGVyc29uYWwgPiAwIHx8IGxpZmVJbnN1cmFuY2VQZXJzb25hbCA9PT0gMCkpe1xyXG5cdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHNldElzTmV4dCh0cnVlKVxyXG5cdFx0fVxyXG5cdFx0Ly9kaXNwYXRjaCBkYXRhIG9uIGxvY2Fsc3Ryb2FnZS9yZWR1eCBvbiBjaGFuZ2VcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJMSUZFX0lOU1VSQU5DRVwiLCBsaWZlSW5zdXJhbmNlOiBsaWZlSW5zdXJhbmNlIH0pO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCIsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogbGlmZUluc3VyYW5jZUVtcGxveWVyIH0pO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX1BFUlNPTkFMXCIsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogbGlmZUluc3VyYW5jZVBlcnNvbmFsIH0pO1xyXG5cclxuXHR9LCBbbGlmZUluc3VyYW5jZSwgbGlmZUluc3VyYW5jZUVtcGxveWVyLCBsaWZlSW5zdXJhbmNlUGVyc29uYWxdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luOicxMHB4IGF1dG8nfX0+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdDwvR3JpZD5cclxuXHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN0eWxlPXt7bWFyZ2luVG9wOic0MHB4J319PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgbGlmZSBpbnN1cmFuY2U/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SGFzTGlmZUluc3VyYW5jZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZSh0cnVlKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnN1cmFuY2UteWVzXCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRZZXNcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0aWQ9XCJpbnN1cmFuY2Utbm9cIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0c2V0TGlmZUluc3VyYW5jZShmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0c2V0TGlmZUluc3VyYW5jZUVtcGxveWVyKCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsKCk7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFXCIsIGxpZmVJbnN1cmFuY2U6IGZhbHNlIH0pO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJMSUZFX0lOU1VSQU5DRV9FTVBMT1lFUlwiLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXI6IDAgfSk7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX1BFUlNPTkFMXCIsIGxpZmVJbnN1cmFuY2VQZXJzb25hbDogMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvc2F2aW5ncycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdE5vXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0ey8qIHRoaXMgc2VjdGlvbiBpcyBvbmx5IHNob3duIHdoZW4gbGlmZUluc3VyYW5jZSBpcyB0cnVlICovfVxyXG5cdFx0XHR7bGlmZUluc3VyYW5jZSAmJiA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5FbXBsb3llciBMaWZlIEluc3VyYW5jZTwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+RW1wbG95ZXIgTGlmZSBJbnN1cmFuY2U8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2xpZmVJbnN1cmFuY2VFbXBsb3llcn1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXIoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPlBlcnNvbmFsIExpZmUgSW5zdXJhbmNlPC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5QZXJzb25hbCBMaWZlIEluc3VyYW5jZTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bGlmZUluc3VyYW5jZVBlcnNvbmFsfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge3NldExpZmVJbnN1cmFuY2VQZXJzb25hbChlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyl9fVxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+IHtyb3V0ZXIucHVzaCgnL3NhdmluZ3MnKX19XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzTmV4dH1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+fVxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHlvdSBhc2sgYWJvdXQgbXkgZXhpc3RpbmcgbGlmZSBpbnN1cmFuY2U/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdHsvKnRpdGxlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93SGFzTGlmZUluc3VyYW5jZX0gb25IaWRlPXtoYW5kbGVDbG9zZUhhc0xpZmVJbnN1cmFuY2V9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+U2VsZWN0IOKAnFllc+KAnSBpZiB5b3UgYWxyZWFkeSBoYXZlIGxpZmUgaW5zdXJhbmNlIGNvdmVyYWdlIGluIHBsYWNlLCBidXQgc2VsZWN0IOKAnE5v4oCdIGlmIHlvdSBkb27igJl0IGhhdmUgZXhpc3RpbmcgbGlmZSBpbnN1cmFuY2Ugb3IgaWYgeW91ciBwb2xpY2llcyBhcmUgZXhwaXJpbmcgc29vbi4gVGhpcyB3b3VsZCBpbmNsdWRlIGJvdGggcG9saWNpZXMgeW91IGhhdmUgdGhyb3VnaCB3b3JrIG9yIHBvbGljaWVzIHRoYXQgeW914oCZdmUgcHVyY2hhc2VkIGluZGl2aWR1YWxseSB0aHJvdWdoIGEgYnJva2VyLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VIYXNMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lyphc2sgYWJvdXQgZXhpc3RpbmcgaW5zdXJhbmNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlfSBvbkhpZGU9e2hhbmRsZUNsb3NlRXhpc3RpbmdMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PklmIHlvdSBhbHJlYWR5IGhhdmUgbGlmZSBpbnN1cmFuY2UsIHdlIHdpbGwgcmVkdWNlIHRoZSBjb3ZlcmFnZSBhbW91bnQgb2YgeW91ciBuZXcgcG9saWN5IGJ5IHRoZSBhbW91bnQgb2YgY292ZXJhZ2UgYWxyZWFkeSBpbiBwbGFjZS4gVGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IHRoZSB0b3RhbCBhbW91bnQgb2YgY292ZXJhZ2UgYmV0d2VlbiBhbGwgeW91ciBwb2xpY2llcyBpcyBpbiBsaW5lIHdpdGggeW91ciBuZWVkcy48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXhpc3RpbmdMaWZlSW5zdXJhbmNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9