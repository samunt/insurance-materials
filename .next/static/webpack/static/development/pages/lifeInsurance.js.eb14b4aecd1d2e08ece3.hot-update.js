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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpZmVJbnN1cmFuY2VGb3JtLmpzIl0sIm5hbWVzIjpbInJlbnRPck93bkZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEaXNwYXRjaENvbnRleHQiLCJmb3JtIiwiRm9ybUNvbnRleHQiLCJ1c2VTdGF0ZSIsImxpZmVJbnN1cmFuY2UiLCJzZXRMaWZlSW5zdXJhbmNlIiwibGlmZUluc3VyYW5jZUVtcGxveWVyIiwic2V0TGlmZUluc3VyYW5jZUVtcGxveWVyIiwibGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsIiwic2hvd0hhc0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93SGFzTGlmZUluc3VyYW5jZSIsImlzTmV4dCIsInNldElzTmV4dCIsImhhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZSIsInNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlIiwiaGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2UiLCJub3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luIiwic3BhY2luZyIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0eXBlIiwiaGVpZ2h0IiwicHVzaCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDcEMsTUFBTUMsTUFBTSxH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QkFGZDtBQUdJLFdBQU8sRUFBRSxtQkFBTTtBQUFDSSxrQ0FBNEIsQ0FBQyxJQUFELENBQTVCO0FBQW1DO0FBSHZELElBREosQ0FEYixDQTdGRCxFQXVHVSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFTixvQkFBYjtBQUFtQyxVQUFNLEVBQUVJO0FBQTNDLEtBQ0ksTUFBQyxxREFBRCxDQUFPLElBQVAsb1VBREosRUFFSSxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQTtBQUFyQyxhQURKLENBRkosQ0F2R1YsRUFnSFUsTUFBQyxxREFBRDtBQUFPLFFBQUksRUFBRUMseUJBQWI7QUFBd0MsVUFBTSxFQUFFRTtBQUFoRCxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLDRQQURKLEVBRUksTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFESixDQUZKLENBaEhWLENBTE0sQ0FESjtBQWlJSDs7R0F2TXVCdEIsYTtVQUNMRSxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbGlmZUluc3VyYW5jZS5qcy5lYjE0YjRhZWNkMWQyZTA4ZWNlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQsIEZvcm1Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIElucHV0QWRvcm5tZW50LCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbnRPck93bkZvcm0oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG5cdGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuICAgIGNvbnN0IFtsaWZlSW5zdXJhbmNlLCBzZXRMaWZlSW5zdXJhbmNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIC8vaGFzIGxpZmUgaW5zdXJhbmNlXHJcbiAgICBjb25zdCBbbGlmZUluc3VyYW5jZUVtcGxveWVyLCBzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xpZmVJbnN1cmFuY2VQZXJzb25hbCwgc2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93SGFzTGlmZUluc3VyYW5jZSwgc2V0U2hvd0hhc0xpZmVJbnN1cmFuY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VIYXNMaWZlSW5zdXJhbmNlID0gKCkgPT4gc2V0U2hvd0hhc0xpZmVJbnN1cmFuY2UoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UsIHNldFNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2UgPSAoKSA9PiBzZXRTaG93RXhpc3RpbmdMaWZlSW5zdXJhbmNlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBwcm9ncmVzcyBiYXJcclxuICAgIGNvbnN0IG5vdyA9IDc1O1xyXG5cclxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0ICBkaXNwbGF5OiAnZmxleCcsXHJcblx0XHQgIGZsZXhXcmFwOiAnd3JhcCcsXHJcblx0XHR9LFxyXG5cdFx0bWFyZ2luOiB7XHJcblx0XHQgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdH0sXHJcblx0XHR3aXRob3V0TGFiZWw6IHtcclxuXHRcdCAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0ICB3aWR0aDogJzI1Y2gnLFxyXG5cdFx0fSxcclxuXHR9KSk7XHJcblx0XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHQvL2dldCBkYXRhIGZyb20gbG9jYWxzdHJvYWdlL3JlZHV4IGFuZCBzZXQgU3RhdGUgd2hlbiBjb21wb25lbnQgbW91bnRlZFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobGlmZUluc3VyYW5jZSAhPT0gZm9ybS5saWZlSW5zdXJhbmNlKXtcclxuICAgICAgICAgICAgc2V0TGlmZUluc3VyYW5jZShmb3JtLmxpZmVJbnN1cmFuY2UgPyBmb3JtLmxpZmVJbnN1cmFuY2UgOiAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxpZmVJbnN1cmFuY2VFbXBsb3llciAhPT0gZm9ybS5saWZlSW5zdXJhbmNlRW1wbG95ZXIpe1xyXG4gICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXIoZm9ybS5saWZlSW5zdXJhbmNlRW1wbG95ZXIgPyBmb3JtLmxpZmVJbnN1cmFuY2VFbXBsb3llciA6ICcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGlmZUluc3VyYW5jZVBlcnNvbmFsICE9PSBmb3JtLmxpZmVJbnN1cmFuY2VQZXJzb25hbCl7XHJcbiAgICAgICAgICAgIHNldExpZmVJbnN1cmFuY2VQZXJzb25hbChmb3JtLmxpZmVJbnN1cmFuY2VQZXJzb25hbCA/IGZvcm0ubGlmZUluc3VyYW5jZVBlcnNvbmFsIDogJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL2hpZ2hsaWdodCBZZXMvTm8gYnV0dG9uIGFjY291cmRpbmcgdG8gc2VsZWN0ZWQgc3RhdGVcclxuXHRcdGlmKGxpZmVJbnN1cmFuY2UgPT09IHRydWUpe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdXJhbmNlLW5vJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5zdXJhbmNlLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1lbHNlIGlmKGxpZmVJbnN1cmFuY2UgPT09IGZhbHNlKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3VyYW5jZS15ZXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN1cmFuY2Utbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9XHJcblx0XHQvL2VuYWJsZSBkaXNhYmxlIG5leHQgYnV0dG9uXHJcblx0XHRpZihsaWZlSW5zdXJhbmNlID09PSB0cnVlICYmIChsaWZlSW5zdXJhbmNlRW1wbG95ZXIgPiAwIHx8IGxpZmVJbnN1cmFuY2VFbXBsb3llciA9PT0gMCkgJiYgKGxpZmVJbnN1cmFuY2VQZXJzb25hbCA+IDAgfHwgbGlmZUluc3VyYW5jZVBlcnNvbmFsID09PSAwKSl7XHJcblx0XHRcdHNldElzTmV4dChmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0c2V0SXNOZXh0KHRydWUpXHJcblx0XHR9XHJcblx0XHQvL2Rpc3BhdGNoIGRhdGEgb24gbG9jYWxzdHJvYWdlL3JlZHV4IG9uIGNoYW5nZVxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFXCIsIGxpZmVJbnN1cmFuY2U6IGxpZmVJbnN1cmFuY2UgfSk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfRU1QTE9ZRVJcIiwgbGlmZUluc3VyYW5jZUVtcGxveWVyOiBsaWZlSW5zdXJhbmNlRW1wbG95ZXIgfSk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIiwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiBsaWZlSW5zdXJhbmNlUGVyc29uYWwgfSk7XHJcblxyXG5cdH0sIFtsaWZlSW5zdXJhbmNlLCBsaWZlSW5zdXJhbmNlRW1wbG95ZXIsIGxpZmVJbnN1cmFuY2VQZXJzb25hbF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IGFuaW1hdGVkIHN0cmlwZWQgdmFyaWFudD1cImluZm9cIiBsYWJlbD17YCR7bm93fSUgRG9uZWB9IG5vdz17bm93fSAvPlxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0naGVhZGVyJz5EbyB5b3UgaGF2ZSBsaWZlIGluc3VyYW5jZT8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dIYXNMaWZlSW5zdXJhbmNlKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMaWZlSW5zdXJhbmNlKHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRpZD1cImluc3VyYW5jZS15ZXNcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFllc1xyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRpZD1cImluc3VyYW5jZS1ub1wiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRMaWZlSW5zdXJhbmNlKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRMaWZlSW5zdXJhbmNlRW1wbG95ZXIoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRMaWZlSW5zdXJhbmNlUGVyc29uYWwoKTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VcIiwgbGlmZUluc3VyYW5jZTogZmFsc2UgfSk7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkxJRkVfSU5TVVJBTkNFX0VNUExPWUVSXCIsIGxpZmVJbnN1cmFuY2VFbXBsb3llcjogMCB9KTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTElGRV9JTlNVUkFOQ0VfUEVSU09OQUxcIiwgbGlmZUluc3VyYW5jZVBlcnNvbmFsOiAwIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9zYXZpbmdzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHR7LyogdGhpcyBzZWN0aW9uIGlzIG9ubHkgc2hvd24gd2hlbiBsaWZlSW5zdXJhbmNlIGlzIHRydWUgKi99XHJcblx0XHRcdHtsaWZlSW5zdXJhbmNlICYmIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPkVtcGxveWVyIExpZmUgSW5zdXJhbmNlPC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5FbXBsb3llciBMaWZlIEluc3VyYW5jZTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bGlmZUluc3VyYW5jZUVtcGxveWVyfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExpZmVJbnN1cmFuY2VFbXBsb3llcihlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+UGVyc29uYWwgTGlmZSBJbnN1cmFuY2U8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPlBlcnNvbmFsIExpZmUgSW5zdXJhbmNlPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtsaWZlSW5zdXJhbmNlUGVyc29uYWx9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7c2V0TGlmZUluc3VyYW5jZVBlcnNvbmFsKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKX19XHJcblx0XHRcdFx0XHRcdFx0c3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpPT4ge3JvdXRlci5wdXNoKCcvc2F2aW5ncycpfX1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNOZXh0fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD59XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaHkgZG8geW91IGFzayBhYm91dCBteSBleGlzdGluZyBsaWZlIGluc3VyYW5jZT8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2UodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0ey8qdGl0bGUqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dIYXNMaWZlSW5zdXJhbmNlfSBvbkhpZGU9e2hhbmRsZUNsb3NlSGFzTGlmZUluc3VyYW5jZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5TZWxlY3Qg4oCcWWVz4oCdIGlmIHlvdSBhbHJlYWR5IGhhdmUgbGlmZSBpbnN1cmFuY2UgY292ZXJhZ2UgaW4gcGxhY2UsIGJ1dCBzZWxlY3Qg4oCcTm/igJ0gaWYgeW91IGRvbuKAmXQgaGF2ZSBleGlzdGluZyBsaWZlIGluc3VyYW5jZSBvciBpZiB5b3VyIHBvbGljaWVzIGFyZSBleHBpcmluZyBzb29uLiBUaGlzIHdvdWxkIGluY2x1ZGUgYm90aCBwb2xpY2llcyB5b3UgaGF2ZSB0aHJvdWdoIHdvcmsgb3IgcG9saWNpZXMgdGhhdCB5b3XigJl2ZSBwdXJjaGFzZWQgaW5kaXZpZHVhbGx5IHRocm91Z2ggYSBicm9rZXIuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhhc0xpZmVJbnN1cmFuY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKmFzayBhYm91dCBleGlzdGluZyBpbnN1cmFuY2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeGlzdGluZ0xpZmVJbnN1cmFuY2V9IG9uSGlkZT17aGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2V9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+SWYgeW91IGFscmVhZHkgaGF2ZSBsaWZlIGluc3VyYW5jZSwgd2Ugd2lsbCByZWR1Y2UgdGhlIGNvdmVyYWdlIGFtb3VudCBvZiB5b3VyIG5ldyBwb2xpY3kgYnkgdGhlIGFtb3VudCBvZiBjb3ZlcmFnZSBhbHJlYWR5IGluIHBsYWNlLiBUaGlzIHdpbGwgbWFrZSBzdXJlIHRoYXQgdGhlIHRvdGFsIGFtb3VudCBvZiBjb3ZlcmFnZSBiZXR3ZWVuIGFsbCB5b3VyIHBvbGljaWVzIGlzIGluIGxpbmUgd2l0aCB5b3VyIG5lZWRzLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VFeGlzdGluZ0xpZmVJbnN1cmFuY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=