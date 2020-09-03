webpackHotUpdate("static\\development\\pages\\quotes.js",{

/***/ "./components/QuotesPage.js":
/*!**********************************!*\
  !*** ./components/QuotesPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuotesPage; });
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






function QuotesPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showQuoteMessage = _useState[0],
      setShowQuoteMessage = _useState[1];

  var handleCloseQuoteMessage = function handleCloseQuoteMessage() {
    return setShowQuoteMessage(false);
  };

  var policyPrice = ["$25.99", "18.99", "32.99", "54.99", "29.99"]; // progress bar

  var now = 100;
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
  }, "Here are your quotes!\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowQuoteMessage(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, ['Canada Life', 'Manulife', 'TD Term Life', 'Sunlife', 'RBC Insurance'].map(function (variant, index) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      key: index,
      bg: "white",
      text: 'dark',
      className: "mb-4",
      style: {
        width: '18rem'
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header, null, variant), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, null, variant, " Policy "), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, null, variant, " is offering a policy of 35.99 per month for a term 20 policy")));
  }), ";"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showQuoteMessage,
    onHide: handleCloseQuoteMessage
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "These are mock quotes and do not necessarily reflect your final quote."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-info",
    onClick: handleCloseQuoteMessage
  }, "Close")))));
}

_s(QuotesPage, "zEGWgtsZ8TBgF0vh4X5m/eaZ1Q4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = QuotesPage;

var _c;

$RefreshReg$(_c, "QuotesPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1b3Rlc1BhZ2UuanMiXSwibmFtZXMiOlsiUXVvdGVzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1F1b3RlTWVzc2FnZSIsInNldFNob3dRdW90ZU1lc3NhZ2UiLCJoYW5kbGVDbG9zZVF1b3RlTWVzc2FnZSIsInBvbGljeVByaWNlIiwibm93IiwibWFyZ2luIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFwIiwidmFyaWFudCIsImluZGV4Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjs7QUFGaUMsa0JBR2VDLHNEQUFRLENBQUMsS0FBRCxDQUh2QjtBQUFBLE1BRzFCQyxnQkFIMEI7QUFBQSxNQUdSQyxtQkFIUTs7QUFJakMsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLFdBQU1ELG1CQUFtQixDQUFDLEtBQUQsQ0FBekI7QUFBQSxHQUFoQzs7QUFDQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixPQUFwQixFQUE2QixPQUE3QixFQUFzQyxPQUF0QyxDQUFwQixDQUxpQyxDQU9qQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsR0FBWjtBQUVBLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDTixNQUFDLDZEQUFELE9BRE0sRUFFTixNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsU0FBSyxFQUFFO0FBQUNDLFlBQU0sRUFBQztBQUFSO0FBQTFCLEtBQ0MsTUFBQywyREFBRDtBQUFhLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUU7QUFBVCxLQUFwQjtBQUF3QyxZQUFRLE1BQWhEO0FBQWlELFdBQU8sTUFBeEQ7QUFBeUQsV0FBTyxFQUFDLE1BQWpFO0FBQXdFLFNBQUssWUFBS0YsR0FBTCxXQUE3RTtBQUErRixPQUFHLEVBQUVBO0FBQXBHLElBREQsQ0FGTSxFQUtOLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFFO0FBQUNHLGVBQVMsRUFBQztBQUFYO0FBQWhDLEtBQ0MsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFzQyxNQUFFLEVBQUUsRUFBMUM7QUFBOEMsTUFBRSxFQUFFLEVBQWxEO0FBQXNELFdBQU8sRUFBRTtBQUEvRCxLQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsc0NBQ2dCLE1BQUMsb0VBQUQ7QUFDSSxRQUFJLEVBQUUsRUFEVjtBQUVJLGFBQVMsRUFBQyxnQkFGZDtBQUdJLFdBQU8sRUFBRSxtQkFBTTtBQUFDTix5QkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQTBCO0FBSDlDLElBRGhCLENBREQsQ0FERCxFQVVDLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQThDLE1BQUUsRUFBRSxFQUFsRDtBQUFzRCxXQUFPLEVBQUU7QUFBL0QsS0FFUyxDQUNBLGFBREEsRUFFQSxVQUZBLEVBR0EsY0FIQSxFQUlBLFNBSkEsRUFLQSxlQUxBLEVBTUVPLEdBTkYsQ0FNTSxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxXQUNNLE1BQUMsb0RBQUQ7QUFDSSxTQUFHLEVBQUVBLEtBRFQ7QUFFSSxRQUFFLEVBQUUsT0FGUjtBQUdJLFVBQUksRUFBRSxNQUhWO0FBSUksZUFBUyxFQUFDLE1BSmQ7QUFLSSxXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQ7QUFMWCxPQU9JLE1BQUMsb0RBQUQsQ0FBTSxNQUFOLFFBQWNGLE9BQWQsQ0FQSixFQVFJLE1BQUMsb0RBQUQsQ0FBTSxJQUFOLFFBQ0ksTUFBQyxvREFBRCxDQUFNLEtBQU4sUUFBYUEsT0FBYixhQURKLEVBRUksTUFBQyxvREFBRCxDQUFNLElBQU4sUUFDS0EsT0FETCxrRUFGSixDQVJKLENBRE47QUFBQSxHQU5OLENBRlQsTUFWRCxFQXFDTSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFVCxnQkFBYjtBQUErQixVQUFNLEVBQUVFO0FBQXZDLEtBQ1EsTUFBQyxxREFBRCxDQUFPLElBQVAsaUZBRFIsRUFFUSxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsY0FBaEI7QUFBK0IsV0FBTyxFQUFFQTtBQUF4QyxhQURKLENBRlIsQ0FyQ04sQ0FMTSxDQURKO0FBc0RIOztHQWhFdUJULFU7VUFDTEUscUQ7OztLQURLRixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxxdW90ZXMuanMuY2MzNzg5YjVkY2NmYWE3M2FlMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbiwgQ2FyZH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIElucHV0QWRvcm5tZW50LCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdW90ZXNQYWdlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuICAgIGNvbnN0IFtzaG93UXVvdGVNZXNzYWdlLCBzZXRTaG93UXVvdGVNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlUXVvdGVNZXNzYWdlID0gKCkgPT4gc2V0U2hvd1F1b3RlTWVzc2FnZShmYWxzZSk7XHJcbiAgICBjb25zdCBwb2xpY3lQcmljZSA9IFtcIiQyNS45OVwiLCBcIjE4Ljk5XCIsIFwiMzIuOTlcIiwgXCI1NC45OVwiLCBcIjI5Ljk5XCJdO1xyXG5cclxuICAgIC8vIHByb2dyZXNzIGJhclxyXG4gICAgY29uc3Qgbm93ID0gMTAwO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0PFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IGFuaW1hdGVkIHN0cmlwZWQgdmFyaWFudD1cImluZm9cIiBsYWJlbD17YCR7bm93fSUgRG9uZWB9IG5vdz17bm93fSAvPlxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0PGg0IGNsYXNzTmFtZT0naGVhZGVyJz5IZXJlIGFyZSB5b3VyIHF1b3RlcyEmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dRdW90ZU1lc3NhZ2UodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ2FuYWRhIExpZmUnLFxyXG4gICAgICAgICAgICAnTWFudWxpZmUnLFxyXG4gICAgICAgICAgICAnVEQgVGVybSBMaWZlJyxcclxuICAgICAgICAgICAgJ1N1bmxpZmUnLFxyXG4gICAgICAgICAgICAnUkJDIEluc3VyYW5jZScsXHJcbiAgICAgICAgICAgIF0ubWFwKCh2YXJpYW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXsnZGFyayd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj57dmFyaWFudH08L0NhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57dmFyaWFudH0gUG9saWN5IDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFyaWFudH0gaXMgb2ZmZXJpbmcgYSBwb2xpY3kgb2YgMzUuOTkgcGVyIG1vbnRoIGZvciBhIHRlcm0gMjAgcG9saWN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApKX07XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdHsvKnF1b3RlIG1lc3NhZ2UqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd1F1b3RlTWVzc2FnZX0gb25IaWRlPXtoYW5kbGVDbG9zZVF1b3RlTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5UaGVzZSBhcmUgbW9jayBxdW90ZXMgYW5kIGRvIG5vdCBuZWNlc3NhcmlseSByZWZsZWN0IHlvdXIgZmluYWwgcXVvdGUuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVF1b3RlTWVzc2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuXHRcdDwvQ29udGFpbmVyPlxyXG5cdDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==