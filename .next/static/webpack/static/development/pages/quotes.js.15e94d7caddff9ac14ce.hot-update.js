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
    size: 30,
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
      className: "mb-4"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1F1b3Rlc1BhZ2UuanMiXSwibmFtZXMiOlsiUXVvdGVzUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1F1b3RlTWVzc2FnZSIsInNldFNob3dRdW90ZU1lc3NhZ2UiLCJoYW5kbGVDbG9zZVF1b3RlTWVzc2FnZSIsInBvbGljeVByaWNlIiwibm93IiwibWFyZ2luIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwibWFwIiwidmFyaWFudCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBM0I7O0FBRmlDLGtCQUdlQyxzREFBUSxDQUFDLEtBQUQsQ0FIdkI7QUFBQSxNQUcxQkMsZ0JBSDBCO0FBQUEsTUFHUkMsbUJBSFE7O0FBSWpDLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEI7QUFBQSxXQUFNRCxtQkFBbUIsQ0FBQyxLQUFELENBQXpCO0FBQUEsR0FBaEM7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsT0FBcEIsRUFBNkIsT0FBN0IsRUFBc0MsT0FBdEMsQ0FBcEIsQ0FMaUMsQ0FPakM7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFFQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ04sTUFBQyw2REFBRCxPQURNLEVBRU4sTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUM7QUFBUjtBQUExQixLQUNDLE1BQUMsMkRBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBcEI7QUFBd0MsWUFBUSxNQUFoRDtBQUFpRCxXQUFPLE1BQXhEO0FBQXlELFdBQU8sRUFBQyxNQUFqRTtBQUF3RSxTQUFLLFlBQUtGLEdBQUwsV0FBN0U7QUFBK0YsT0FBRyxFQUFFQTtBQUFwRyxJQURELENBRk0sRUFLTixNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBRTtBQUFDRyxlQUFTLEVBQUM7QUFBWDtBQUFoQyxLQUNDLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQThDLE1BQUUsRUFBRSxFQUFsRDtBQUFzRCxXQUFPLEVBQUU7QUFBL0QsS0FDQztBQUFJLGFBQVMsRUFBQztBQUFkLHNDQUNnQixNQUFDLG9FQUFEO0FBQ0ksUUFBSSxFQUFFLEVBRFY7QUFFSSxhQUFTLEVBQUMsZ0JBRmQ7QUFHSSxXQUFPLEVBQUUsbUJBQU07QUFBQ04seUJBQW1CLENBQUMsSUFBRCxDQUFuQjtBQUEwQjtBQUg5QyxJQURoQixDQURELENBREQsRUFVQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFO0FBQS9ELEtBRVMsQ0FDQSxhQURBLEVBRUEsVUFGQSxFQUdBLGNBSEEsRUFJQSxTQUpBLEVBS0EsZUFMQSxFQU1FTyxHQU5GLENBTU0sVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsV0FDTSxNQUFDLG9EQUFEO0FBQ0ksU0FBRyxFQUFFQSxLQURUO0FBRUksUUFBRSxFQUFFLE9BRlI7QUFHSSxVQUFJLEVBQUUsTUFIVjtBQUlJLGVBQVMsRUFBQztBQUpkLE9BTUksTUFBQyxvREFBRCxDQUFNLE1BQU4sUUFBY0QsT0FBZCxDQU5KLEVBT0ksTUFBQyxvREFBRCxDQUFNLElBQU4sUUFDSSxNQUFDLG9EQUFELENBQU0sS0FBTixRQUFhQSxPQUFiLGFBREosRUFFSSxNQUFDLG9EQUFELENBQU0sSUFBTixRQUNLQSxPQURMLGtFQUZKLENBUEosQ0FETjtBQUFBLEdBTk4sQ0FGVCxNQVZELEVBb0NNLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVULGdCQUFiO0FBQStCLFVBQU0sRUFBRUU7QUFBdkMsS0FDUSxNQUFDLHFEQUFELENBQU8sSUFBUCxpRkFEUixFQUVRLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxjQUFoQjtBQUErQixXQUFPLEVBQUVBO0FBQXhDLGFBREosQ0FGUixDQXBDTixDQUxNLENBREo7QUFxREg7O0dBL0R1QlQsVTtVQUNMRSxxRDs7O0tBREtGLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHF1b3Rlcy5qcy4xNWU5NGQ3Y2FkZGZmOWFjMTRjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9uLCBDYXJkfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgSW5wdXRBZG9ybm1lbnQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1b3Rlc1BhZ2UoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgY29uc3QgW3Nob3dRdW90ZU1lc3NhZ2UsIHNldFNob3dRdW90ZU1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VRdW90ZU1lc3NhZ2UgPSAoKSA9PiBzZXRTaG93UXVvdGVNZXNzYWdlKGZhbHNlKTtcclxuICAgIGNvbnN0IHBvbGljeVByaWNlID0gW1wiJDI1Ljk5XCIsIFwiMTguOTlcIiwgXCIzMi45OVwiLCBcIjU0Ljk5XCIsIFwiMjkuOTlcIl07XHJcblxyXG4gICAgLy8gcHJvZ3Jlc3MgYmFyXHJcbiAgICBjb25zdCBub3cgPSAxMDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdoZWFkZXInPkhlcmUgYXJlIHlvdXIgcXVvdGVzISZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1F1b3RlTWVzc2FnZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICdDYW5hZGEgTGlmZScsXHJcbiAgICAgICAgICAgICdNYW51bGlmZScsXHJcbiAgICAgICAgICAgICdURCBUZXJtIExpZmUnLFxyXG4gICAgICAgICAgICAnU3VubGlmZScsXHJcbiAgICAgICAgICAgICdSQkMgSW5zdXJhbmNlJyxcclxuICAgICAgICAgICAgXS5tYXAoKHZhcmlhbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9eydkYXJrJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+e3ZhcmlhbnR9PC9DYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3ZhcmlhbnR9IFBvbGljeSA8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhcmlhbnR9IGlzIG9mZmVyaW5nIGEgcG9saWN5IG9mIDM1Ljk5IHBlciBtb250aCBmb3IgYSB0ZXJtIDIwIHBvbGljeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKSl9O1xyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHR7LypxdW90ZSBtZXNzYWdlKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dRdW90ZU1lc3NhZ2V9IG9uSGlkZT17aGFuZGxlQ2xvc2VRdW90ZU1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+VGhlc2UgYXJlIG1vY2sgcXVvdGVzIGFuZCBkbyBub3QgbmVjZXNzYXJpbHkgcmVmbGVjdCB5b3VyIGZpbmFsIHF1b3RlLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1pbmZvXCIgb25DbGljaz17aGFuZGxlQ2xvc2VRdW90ZU1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=