webpackHotUpdate("static\\development\\pages\\spouseForm.js",{

/***/ "./components/SpouseForm.js":
/*!**********************************!*\
  !*** ./components/SpouseForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap-icons */ "./node_modules/react-bootstrap-icons/dist/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function SpouseForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      hasSpouse = _useState[0],
      updateHasSpouse = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      spouseAge = _useState2[0],
      updateSpouseAge = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isNext = _useState3[0],
      setIsNext = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__["DispatchContext"]);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__["FormContext"]);
  var now = 10; //get data from localstorage/redux and set to states

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (hasSpouse !== form.spouse) {
      updateHasSpouse(form.spouse);
    }

    if (spouseAge !== form.spouseAge) {
      updateSpouseAge(form.spouseAge);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //enable disable next button
    if (hasSpouse !== false) {
      if (spouseAge && spouseAge !== '') {
        setIsNext(false);
      } else {
        setIsNext(true);
      }
    } else {
      setIsNext(true);
    } //hightlight yes/no button


    if (hasSpouse === true) {
      document.getElementById('spouse-no').classList.remove('active_button');
      document.getElementById('spouse-yes').classList.add('active_button');
    } else if (hasSpouse === false) {
      document.getElementById('spouse-yes').classList.remove('active_button');
      document.getElementById('spouse-no').classList.add('active_button');
    }
  }, [hasSpouse, spouseAge]); // modal stuff

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showTitle = _useState4[0],
      setShowTitle = _useState4[1];

  var handleCloseTitle = function handleCloseTitle() {
    return setShowTitle(false);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showWhyWeAsk = _useState5[0],
      setShowWhyWeAsk = _useState5[1];

  var handleCloseWhyWeAsk = function handleCloseWhyWeAsk() {
    return setShowWhyWeAsk(false);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    router.push("/children");
  }; //set has spouse true and dispatch data to localstorage/redux and highlight yes button on click on Yes button


  function handleClick() {
    updateHasSpouse(true);
    dispatch({
      type: "ADD_SPOUSE",
      spouse: true
    });
    document.getElementById('spouse-yes').classList.add('active_button');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CssBaseline"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    style: {
      margin: '10px auto'
    }
  }, __jsx(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      height: '0.5rem'
    },
    animated: true,
    striped: true,
    variant: "info",
    label: "".concat(now, "% Done"),
    now: now
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    maxWidth: "sm",
    style: {
      marginTop: '40px'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("h4", {
    className: "header"
  }, "Do you have a spouse or partner?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowTitle(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 5
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "align-button",
    id: "spouse-yes",
    onClick: function onClick() {
      handleClick();
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "Yes")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 5
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "align-button",
    id: "spouse-no",
    onClick: function onClick(e) {
      e.preventDefault();
      updateHasSpouse(false);
      dispatch({
        type: "ADD_SPOUSE",
        spouse: false
      });
      dispatch({
        type: "SPOUSE_AGE",
        spouseAge: ''
      });
      router.push("/children");
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "No")), hasSpouse !== true ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Why do we ask about your spouse?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowWhyWeAsk(true);
    }
  }))) : // this section is only shown when hasSpouse is true
  __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 12
  }, __jsx("h4", {
    className: "header"
  }, "How old is your spouse or partner?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 10,
    justify: "center",
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 10
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    fullWidth: true,
    id: "age",
    label: "Age",
    type: "number",
    value: spouseAge,
    onChange: function onChange(e) {
      updateSpouseAge(e.target.value);
    },
    onBlur: function onBlur() {
      dispatch({
        type: "SPOUSE_AGE",
        spouseAge: spouseAge
      });
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Why do we ask about your spouse?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowWhyWeAsk(true);
    }
  }))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 5,
    className: "mt-2"
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%"
    },
    onClick: function onClick(e) {
      handleSubmit(e);
    },
    variant: "contained",
    size: "lg",
    disabled: isNext
  }, "Next")))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showTitle,
    onHide: handleCloseTitle
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, "Select \u201CYes\u201D if you are currently married, engaged, in a common-law relationship or have a partner that you share finances with. If so, make sure to incorporate both you and your partner when we ask about your finances and expenses."), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    onClick: handleCloseTitle
  }, "Close"))), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showWhyWeAsk,
    onHide: handleCloseWhyWeAsk
  }, __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Header, null, "Why do we ask about your partner"), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, "Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there."), __jsx(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, null, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    onClick: handleCloseWhyWeAsk
  }, "Close")))));
}

_s(SpouseForm, "/ZcT7k3N21d0kSKHxOnL7bVtSzM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = SpouseForm;
/* harmony default export */ __webpack_exports__["default"] = (SpouseForm);

var _c;

$RefreshReg$(_c, "SpouseForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Nwb3VzZUZvcm0uanMiXSwibmFtZXMiOlsiU3BvdXNlRm9ybSIsInVzZVN0YXRlIiwiaGFzU3BvdXNlIiwidXBkYXRlSGFzU3BvdXNlIiwic3BvdXNlQWdlIiwidXBkYXRlU3BvdXNlQWdlIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0Iiwibm93IiwidXNlRWZmZWN0Iiwic3BvdXNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInNob3dUaXRsZSIsInNldFNob3dUaXRsZSIsImhhbmRsZUNsb3NlVGl0bGUiLCJzaG93V2h5V2VBc2siLCJzZXRTaG93V2h5V2VBc2siLCJoYW5kbGVDbG9zZVdoeVdlQXNrIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImhhbmRsZUNsaWNrIiwidHlwZSIsIm1hcmdpbiIsImhlaWdodCIsIm1hcmdpblRvcCIsIndpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxlQURLOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVoQkcsU0FGZ0I7QUFBQSxNQUVMQyxlQUZLOztBQUFBLG1CQUdVSixzREFBUSxDQUFDLElBQUQsQ0FIbEI7QUFBQSxNQUdYSyxNQUhXO0FBQUEsTUFHSEMsU0FIRzs7QUFJckIsTUFBTUMsTUFBTSxHQUFHQyw2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QUFBbkMsS0FDQyxNQUFDLDZEQUFELENBQU8sTUFBUCwyQ0FERCxFQUVDLE1BQUMsNkRBQUQsQ0FBTyxJQUFQLDBRQUZELEVBR0MsTUFBQyw2REFBRCxDQUFPLE1BQVAsUUFDQyxNQUFDLDhEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFERCxDQUhELENBL0dELENBTEQsQ0FERDtBQWlJQTs7R0ExTFE1QixVO1VBSU9TLHFEOzs7S0FKUFQsVTtBQTRMTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNwb3VzZUZvcm0uanMuMDkzNWUzMTM5YjUyOGI5NjU4MDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQge0Rpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkNpcmNsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucydcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIlxyXG5pbXBvcnQge0dyaWQsIFRleHRGaWVsZCwgQ3NzQmFzZWxpbmUsIENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZnVuY3Rpb24gU3BvdXNlRm9ybSgpIHtcclxuXHRsZXQgW2hhc1Nwb3VzZSwgdXBkYXRlSGFzU3BvdXNlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRsZXQgW3Nwb3VzZUFnZSwgdXBkYXRlU3BvdXNlQWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG5cdGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuXHRjb25zdCBub3cgPSAxMDtcclxuXHRcclxuXHQvL2dldCBkYXRhIGZyb20gbG9jYWxzdG9yYWdlL3JlZHV4IGFuZCBzZXQgdG8gc3RhdGVzXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihoYXNTcG91c2UgIT09IGZvcm0uc3BvdXNlKXtcclxuXHRcdFx0dXBkYXRlSGFzU3BvdXNlKGZvcm0uc3BvdXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3BvdXNlQWdlICE9PSBmb3JtLnNwb3VzZUFnZSl7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNwb3VzZUFnZShmb3JtLnNwb3VzZUFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHR9LCBbXSk7XHJcblx0XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly9lbmFibGUgZGlzYWJsZSBuZXh0IGJ1dHRvblxyXG4gICAgICAgIGlmKGhhc1Nwb3VzZSAhPT0gZmFsc2Upe1xyXG5cdFx0XHRpZihzcG91c2VBZ2UgJiYgc3BvdXNlQWdlICE9PSAnJyl7XHJcbiAgICAgICAgICAgIFx0c2V0SXNOZXh0KGZhbHNlKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdC8vaGlnaHRsaWdodCB5ZXMvbm8gYnV0dG9uXHJcblx0XHRpZihoYXNTcG91c2UgPT09IHRydWUpe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BvdXNlLW5vJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BvdXNlLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1lbHNlIGlmKGhhc1Nwb3VzZSA9PT0gZmFsc2Upe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BvdXNlLXllcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nwb3VzZS1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHR9LCBbaGFzU3BvdXNlLCBzcG91c2VBZ2VdKTtcclxuXHRcclxuXHQvLyBtb2RhbCBzdHVmZlxyXG5cdGNvbnN0IFtzaG93VGl0bGUsIHNldFNob3dUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VUaXRsZSA9ICgpID0+IHNldFNob3dUaXRsZShmYWxzZSk7XHJcblx0Y29uc3QgW3Nob3dXaHlXZUFzaywgc2V0U2hvd1doeVdlQXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVdoeVdlQXNrID0gKCkgPT4gc2V0U2hvd1doeVdlQXNrKGZhbHNlKTtcclxuXHRcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT57XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRyb3V0ZXIucHVzaChcIi9jaGlsZHJlblwiKTtcclxuXHR9XHJcblx0Ly9zZXQgaGFzIHNwb3VzZSB0cnVlIGFuZCBkaXNwYXRjaCBkYXRhIHRvIGxvY2Fsc3RvcmFnZS9yZWR1eCBhbmQgaGlnaGxpZ2h0IHllcyBidXR0b24gb24gY2xpY2sgb24gWWVzIGJ1dHRvblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcblx0XHR1cGRhdGVIYXNTcG91c2UodHJ1ZSk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiQUREX1NQT1VTRVwiLCBzcG91c2U6IHRydWUgfSk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BvdXNlLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPkRvIHlvdSBoYXZlIGEgc3BvdXNlIG9yIHBhcnRuZXI/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdHNpemU9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1RpdGxlKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezV9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzcG91c2UteWVzXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge2hhbmRsZUNsaWNrKCl9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRZZXNcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezV9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzcG91c2Utbm9cIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlSGFzU3BvdXNlKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJBRERfU1BPVVNFXCIsIHNwb3VzZTogZmFsc2UgfSk7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiU1BPVVNFX0FHRVwiLCBzcG91c2VBZ2U6ICcnIH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goXCIvY2hpbGRyZW5cIik7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHR7LyogdGhpcyBzZWN0aW9uIGlzIG9ubHkgc2hvd3Mgd2hlbiBoYXNTcHVzZSBpcyBub3QgdHJ1ZSAqL31cclxuXHRcdFx0XHRcdHtoYXNTcG91c2UgIT09IHRydWUgPyA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoeSBkbyB3ZSBhc2sgYWJvdXQgeW91ciBzcG91c2U/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPXsxNX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93V2h5V2VBc2sodHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDpcclxuXHRcdFx0XHRcdC8vIHRoaXMgc2VjdGlvbiBpcyBvbmx5IHNob3duIHdoZW4gaGFzU3BvdXNlIGlzIHRydWVcclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9ID5cclxuXHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRIb3cgb2xkIGlzIHlvdXIgc3BvdXNlIG9yIHBhcnRuZXI/XHJcblx0XHRcdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezEwfSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEwfSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmdWxsV2lkdGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cImFnZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJBZ2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzcG91c2VBZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVTcG91c2VBZ2UoZS50YXJnZXQudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIlNQT1VTRV9BR0VcIiwgc3BvdXNlQWdlOiBzcG91c2VBZ2UgfSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHdlIGFzayBhYm91dCB5b3VyIHNwb3VzZT8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9ezE1fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dXaHlXZUFzayh0cnVlKX19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezV9IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKT0+e2hhbmRsZVN1Ym1pdChlKX19XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdE5leHRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHR7Lyp0aXRsZSBtb2RhbCovfVxyXG5cdFx0XHRcdDxNb2RhbCBzaG93PXtzaG93VGl0bGV9IG9uSGlkZT17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0XHQ8TW9kYWwuQm9keT5TZWxlY3Qg4oCcWWVz4oCdIGlmIHlvdSBhcmUgY3VycmVudGx5IG1hcnJpZWQsIGVuZ2FnZWQsIGluIGEgY29tbW9uLWxhdyByZWxhdGlvbnNoaXAgb3IgaGF2ZSBhIHBhcnRuZXIgdGhhdCB5b3Ugc2hhcmUgZmluYW5jZXMgd2l0aC4gSWYgc28sIG1ha2Ugc3VyZSB0byBpbmNvcnBvcmF0ZSBib3RoIHlvdSBhbmQgeW91ciBwYXJ0bmVyIHdoZW4gd2UgYXNrIGFib3V0IHlvdXIgZmluYW5jZXMgYW5kIGV4cGVuc2VzLjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVGl0bGV9PlxyXG5cdFx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0XHR7LyogIGFzayBhYm91dCBwYXJ0bmVyICAqL31cclxuXHRcdFx0XHQ8TW9kYWwgc2hvdz17c2hvd1doeVdlQXNrfSBvbkhpZGU9e2hhbmRsZUNsb3NlV2h5V2VBc2t9PlxyXG5cdFx0XHRcdFx0PE1vZGFsLkhlYWRlcj5XaHkgZG8gd2UgYXNrIGFib3V0IHlvdXIgcGFydG5lcjwvTW9kYWwuSGVhZGVyPlxyXG5cdFx0XHRcdFx0PE1vZGFsLkJvZHk+TGlmZSBpbnN1cmFuY2UgaXMgYWxsIGFib3V0IHByb3RlY3RpbmcgdGhlIHBlb3BsZSB5b3UgbG92ZS4gSWYgdGhlcmUgYXJlIHBlb3BsZSB3aG8gcmVseSBvbiB5b3UgZm9yIGZpbmFuY2lhbCBzdXBwb3J0LCBhIGxpZmUgaW5zdXJhbmNlIHBvbGljeSB3aWxsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgZW5vdWdoIG1vbmV5IGlmIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMgdG8geW91IGFuZCB5b3VyIGluY29tZSBpcyBubyBsb25nZXIgdGhlcmUuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VXaHlXZUFza30+XHJcblx0XHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHQ8L01vZGFsPiAgICBcclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcG91c2VGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9