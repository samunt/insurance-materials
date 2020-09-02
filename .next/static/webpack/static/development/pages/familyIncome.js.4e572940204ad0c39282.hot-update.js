webpackHotUpdate("static\\development\\pages\\familyIncome.js",{

/***/ "./components/FamilyIncomeForm.js":
/*!****************************************!*\
  !*** ./components/FamilyIncomeForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FamilyIncomeForm; });
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






function FamilyIncomeForm() {
  _s();

  var now = 60;
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      yourIncome = _useState[0],
      setYourIncome = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isNext = _useState2[0],
      setIsNext = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      spouseIncome = _useState3[0],
      setSpouseIncome = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showFamilyIncome = _useState4[0],
      setShowFamilyIncome = _useState4[1];

  var handleCloseFamilyIncome = function handleCloseFamilyIncome() {
    return setShowFamilyIncome(false);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showWhatAboutYourOtherIncome = _useState5[0],
      setShowWhatAboutYourOtherIncome = _useState5[1];

  var handleCloseWhatAboutYourOtherIncome = function handleCloseWhatAboutYourOtherIncome() {
    return setShowWhatAboutYourOtherIncome(false);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showWhyDoWeAsk = _useState6[0],
      setShowWhyDoWeAsk = _useState6[1];

  var handleCloseWhyDoWeAsk = function handleCloseWhyDoWeAsk() {
    return setShowWhyDoWeAsk(false);
  };

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
  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (yourIncome !== form.yourIncome) {
      setYourIncome(form.yourIncome ? form.yourIncome : 0);
    }

    if (spouseIncome !== form.spouseIncome) {
      setSpouseIncome(form.spouseIncome);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
  }, "What is your family's annual income (before taxes)?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: function onClick() {
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
    onChange: function onChange(e) {
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
    onChange: function onChange(e) {
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
    onClick: function onClick(e) {
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
    onClick: function onClick() {
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
    onClick: function onClick() {
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

_s(FamilyIncomeForm, "4KZ/2C2sqic1K2gyNoF/GLEXa+U=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = FamilyIncomeForm;

var _c;

$RefreshReg$(_c, "FamilyIncomeForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhbWlseUluY29tZUZvcm0uanMiXSwibmFtZXMiOlsiRmFtaWx5SW5jb21lRm9ybSIsIm5vdyIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsImZvcm0iLCJGb3JtQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwieW91ckluY29tZSIsInNldFlvdXJJbmNvbWUiLCJpc05leHQiLCJzZXRJc05leHQiLCJzcG91c2VJbmNvbWUiLCJzZXRTcG91c2VJbmNvbWUiLCJzaG93RmFtaWx5SW5jb21lIiwic2V0U2hvd0ZhbWlseUluY29tZSIsImhhbmRsZUNsb3NlRmFtaWx5SW5jb21lIiwic2hvd1doYXRBYm91dFlvdXJPdGhlckluY29tZSIsInNldFNob3dXaGF0QWJvdXRZb3VyT3RoZXJJbmNvbWUiLCJoYW5kbGVDbG9zZVdoYXRBYm91dFlvdXJPdGhlckluY29tZSIsInNob3dXaHlEb1dlQXNrIiwic2V0U2hvd1doeURvV2VBc2siLCJoYW5kbGVDbG9zZVdoeURvV2VBc2siLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFyZ2luIiwic3BhY2luZyIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsInNwb3VzZSIsInR5cGUiLCJoZWlnaHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYXJzZUludCIsInByZXZlbnREZWZhdWx0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxHQUE0QjtBQUFBOztBQUN2QyxNQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0Ms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QUpKLENBbkZKLEVBOEZJLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVDLGNBQWI7QUFBNkIsVUFBTSxFQUFFRTtBQUFyQyxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLGlzQkFESixFQUlJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FKSixDQTlGSixDQUxBLENBREo7QUFpSEg7O0dBMUt1QnhCLGdCO1VBSUxRLHFEOzs7S0FKS1IsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZhbWlseUluY29tZS5qcy40ZTU3Mjk0MDIwNGFkMGMzOTI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7RGlzcGF0Y2hDb250ZXh0LCBGb3JtQ29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIElucHV0QWRvcm5tZW50LCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhbWlseUluY29tZUZvcm0oKSB7XHJcbiAgICBjb25zdCBub3cgPSA2MDtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgY29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbeW91ckluY29tZSwgc2V0WW91ckluY29tZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BvdXNlSW5jb21lLCBzZXRTcG91c2VJbmNvbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3dGYW1pbHlJbmNvbWUsIHNldFNob3dGYW1pbHlJbmNvbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VGYW1pbHlJbmNvbWUgPSAoKSA9PiBzZXRTaG93RmFtaWx5SW5jb21lKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93V2hhdEFib3V0WW91ck90aGVySW5jb21lLCBzZXRTaG93V2hhdEFib3V0WW91ck90aGVySW5jb21lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlV2hhdEFib3V0WW91ck90aGVySW5jb21lID0gKCkgPT4gc2V0U2hvd1doYXRBYm91dFlvdXJPdGhlckluY29tZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1doeURvV2VBc2ssIHNldFNob3dXaHlEb1dlQXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlV2h5RG9XZUFzayA9ICgpID0+IHNldFNob3dXaHlEb1dlQXNrKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aXRob3V0TGFiZWw6IHtcclxuICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgICAgd2lkdGg6ICcyNWNoJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZih5b3VySW5jb21lICE9PSBmb3JtLnlvdXJJbmNvbWUpe1xyXG4gICAgICAgICAgICBzZXRZb3VySW5jb21lKGZvcm0ueW91ckluY29tZSA/IGZvcm0ueW91ckluY29tZSA6IDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc3BvdXNlSW5jb21lICE9PSBmb3JtLnNwb3VzZUluY29tZSl7XHJcbiAgICAgICAgICAgIHNldFNwb3VzZUluY29tZShmb3JtLnNwb3VzZUluY29tZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihmb3JtLnNwb3VzZSA9PT0gdHJ1ZSAmJiBzcG91c2VJbmNvbWUgPj0gMCAmJiB5b3VySW5jb21lID49IDApe1xyXG4gICAgICAgICAgICBzZXRJc05leHQoZmFsc2UpO1xyXG4gICAgICAgIH1lbHNlIGlmKGZvcm0uc3BvdXNlID09PSBmYWxzZSAmJiB5b3VySW5jb21lID49MCl7XHJcbiAgICAgICAgICAgIHNldElzTmV4dChmYWxzZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIllPVVJfSU5DT01FXCIsIHlvdXJJbmNvbWU6IHlvdXJJbmNvbWUgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNQT1VTRV9JTkNPTUVcIiwgc3BvdXNlSW5jb21lOiBzcG91c2VJbmNvbWUgfSk7XHJcbiAgICB9LCBbeW91ckluY29tZSwgc3BvdXNlSW5jb21lXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luOicxMHB4IGF1dG8nfX0+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2hlYWRlcic+V2hhdCBpcyB5b3VyIGZhbWlseSdzIGFubnVhbCBpbmNvbWUgKGJlZm9yZSB0YXhlcyk/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RmFtaWx5SW5jb21lKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPllvdXIgSW5jb21lPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eW91ckluY29tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0WW91ckluY29tZShlLnRhcmdldC52YWx1ZSAhPSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICB7Zm9ybS5zcG91c2UgJiYgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5TcG91c2UgSW5jb21lPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3BvdXNlSW5jb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRTcG91c2VJbmNvbWUoZS50YXJnZXQudmFsdWUgIT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD59XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvcmVudE9yT3duXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTmV4dH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoYXQgYWJvdXQgaW52ZXN0bWVudHMgYW5kIG90aGVyIGluY29tZT8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dXaGF0QWJvdXRZb3VyT3RoZXJJbmNvbWUodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaHkgZG8gd2UgYXNrIGFib3V0IHlvdXIgaW5jb21lPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1doeURvV2VBc2sodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgIHsvKmFzayBhYm91dCBmYW1pbHkgaW5jb21lKi99XHJcbiAgICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0ZhbWlseUluY29tZX0gb25IaWRlPXtoYW5kbGVDbG9zZUZhbWlseUluY29tZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5HaXZlIHVzIGEgYmFsbHBhcmsgZXN0aW1hdGUgb2YgeW91ciBhbm51YWwgcHJlLXRheCBpbmNvbWUuIERvbuKAmXQgaW5jbHVkZSBpbnZlc3RtZW50cyDigJQgd2XigJlsbCBnZXQgdG8gdGhhdCBzb29uPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUZhbWlseUluY29tZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qYXNrIGFib3V0IG90aGVyIGluY29tZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd1doYXRBYm91dFlvdXJPdGhlckluY29tZX0gb25IaWRlPXtoYW5kbGVDbG9zZVdoYXRBYm91dFlvdXJPdGhlckluY29tZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5QbGVhc2UgZG9u4oCZdCBpbmNsdWRlIGluY29tZSB0aGF0IHlvdSBnZW5lcmF0ZSBmcm9tIGludmVzdG1lbnRzLiBXZSB3aWxsIGNvdmVyIHlvdXIgaW52ZXN0bWVudHMgaW4gdGhlIOKAnHNhdmluZ3PigJ0gc2VjdGlvbi4gU29tZSBleGFtcGxlcyBvZiBpbmNvbWUgZ2VuZXJhdGVkIGZyb20gaW52ZXN0bWVudHMgYXJlIGRpdmlkZW5kcywgaW50ZXJlc3QgcGF5bWVudHMgYW5kIGNhcGl0YWwgZ2FpbnMgY29sbGVjdGVkIGZyb20gdGhlIHNhbGUgb2YgYW4gYXNzZXQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFNpbWlsYXJseSwgZG9u4oCZdCBpbmNsdWRlIGFueSBpbmNvbWUgdGhhdCBpc27igJl0IHRpZWQgdG8geW91ciB3b3JrIGFuZCB3b3VsZCBzdGlsbCBiZSBnZW5lcmF0ZWQgaWYgeW91IHBhc3NlZCBhd2F5LiBTb21lIGV4YW1wbGVzIG9mIG5vbi1lbXBsb3ltZW50IGluY29tZSBhcmUgcmVudGFsIGluY29tZSBvbiBhIHByb3BlcnR5IHlvdSBvd24gb3IgZXZlbiBpbmNvbWUgeW91IG1ha2Ugb2ZmIGEgYnVzaW5lc3MgdGhhdCBpc27igJl0IHRpZWQgdG8geW91ciB0aW1lLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VXaGF0QWJvdXRZb3VyT3RoZXJJbmNvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKmFzayBhYm91dCBvdGhlciBpbmNvbWUqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dXaHlEb1dlQXNrfSBvbkhpZGU9e2hhbmRsZUNsb3NlV2h5RG9XZUFza30+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5JdOKAmXMgaW1wb3J0YW50IGZvciB1cyB0byBoYXZlIGFuIGFjY3VyYXRlIHVuZGVyc3RhbmRpbmcgb2YgeW91ciBmaW5hbmNlcywgYW5kIHlvdXIgaW5jb21lIGlzIGEga2V5IGFzcGVjdCBvZiB5b3VyIGZpbmFuY2lhbCBzaXR1YXRpb24uIE91ciBjYWxjdWxhdGlvbnMgd2lsbCB1c2UgeW91ciBpbmNvbWUgKGFsb25nIHdpdGggbWFueSBvdGhlciBmYWN0b3JzKSB0byBldmFsdWF0ZSBob3cgbXVjaCBsaWZlIGluc3VyYW5jZSBwcm90ZWN0aW9uIHlvdXIgZmFtaWx5IG5lZWRzLiBUaGUgc2FtZSBnb2VzIGZvciB5b3VyIHBhcnRuZXLigJlzIGluY29tZS5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgV2UgbmV2ZXIgcmVjb21tZW5kIG1vcmUgY292ZXJhZ2UgdGhhbiB5b3UgbmVlZC4gVGhpcyBwcmV2ZW50cyB5b3UgZnJvbSBiZWNvbWluZyDigJxvdmVycHJvdGVjdGVkLOKAnSBrZWVwaW5nIHlvdXIgY29zdHMgbG93IGFuZCBmcmVlaW5nIHVwIG1vbmV5IGZvciB5b3UgYW5kIHlvdXIgZmFtaWx5LiBUaGVyZSBhcmUgbWFueSBmZWF0dXJlcyBpbiBvdXIgY2FsY3VsYXRpb24gdGhhdCBoZWxwIHVzIGRvIHRoaXMuIFdlIGluY2x1ZGUgeW91ciBwYXJ0bmVy4oCZcyBmdXR1cmUgaW5jb21lIGFzIG1vbmV5IHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gcGF5IGZvciBzb21lIG9mIHlvdXIgZmFtaWx54oCZcyBmdXR1cmUgZXhwZW5zZXMuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVdoeURvV2VBc2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=