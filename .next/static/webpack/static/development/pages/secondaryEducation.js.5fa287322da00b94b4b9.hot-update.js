webpackHotUpdate("static\\development\\pages\\secondaryEducation.js",{

/***/ "./components/SecondaryEducationForm.js":
/*!**********************************************!*\
  !*** ./components/SecondaryEducationForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecondaryEducationForm; });
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






function SecondaryEducationForm() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showSecondaryEducation = _useState[0],
      setShowSecondaryEducation = _useState[1];

  var handleCloseSecondaryEducation = function handleCloseSecondaryEducation() {
    return setShowSecondaryEducation(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //highlight yes no button
    if (form.payForCollege === true) {
      document.getElementById('education-no').classList.remove('active_button');
      document.getElementById('education-yes').classList.add('active_button');
    } else if (form.payForCollege === false) {
      document.getElementById('education-yes').classList.remove('active_button');
      document.getElementById('education-no').classList.add('active_button');
    }
  }, []);
  var now = 25;
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
  }, "Do you plan on paying for your children's post secondary education?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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
    id: "education-yes",
    onClick: function onClick() {
      document.getElementById('education-no').classList.remove('active_button');
      document.getElementById('education-yes').classList.add('active_button');
      dispatch({
        type: "PAY_FOR_COLLEGE",
        payForCollege: true
      });
      router.push('/dob');
    },
    style: {
      width: "100%"
    },
    variant: "outline-info",
    size: "lg"
  }, "Yes")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "align-button",
    id: "education-no",
    onClick: function onClick() {
      document.getElementById('education-yes').classList.remove('active_button');
      document.getElementById('education-no').classList.add('active_button');
      dispatch({
        type: "PAY_FOR_COLLEGE",
        payForCollege: false
      });
      router.push('/dob');
    },
    style: {
      width: "100%"
    },
    variant: "outline-info",
    size: "lg"
  }, "No"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Why do we ask about your children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_3__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowSecondaryEducation(true);
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: showSecondaryEducation,
    onHide: handleCloseSecondaryEducation
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, null, "If your children\u2019s post-secondary education is something you\u2019re planning to pay for, we\u2019ll want to make sure that your family will have enough money to cover the costs if you were no longer around."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "outline-info",
    onClick: handleCloseSecondaryEducation
  }, "Close")))));
}

_s(SecondaryEducationForm, "uZgb2UMQtepm2oSIGZk9rgG+P/0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = SecondaryEducationForm;

var _c;

$RefreshReg$(_c, "SecondaryEducationForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY29uZGFyeUVkdWNhdGlvbkZvcm0uanMiXSwibmFtZXMiOlsiU2Vjb25kYXJ5RWR1Y2F0aW9uRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRpc3BhdGNoQ29udGV4dCIsImZvcm0iLCJGb3JtQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1NlY29uZGFyeUVkdWNhdGlvbiIsInNldFNob3dTZWNvbmRhcnlFZHVjYXRpb24iLCJoYW5kbGVDbG9zZVNlY29uZGFyeUVkdWNhdGlvbiIsInVzZUVmZmVjdCIsInBheUZvckNvbGxlZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibm93IiwibWFyZ2luIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwidHlwZSIsInB1c2giLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxzQkFBVCxHQUFrQztBQUFBOztBQUM3QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNILE1BQU1DLElBQUksR0FBR0Ysd0RBQVUsQ0FBQ0csaUVBQUQsQ0FBdkI7O0FBSGdELGtCQUllQyxzREFBUSxDQUFDLEtBQUQsQ0FKdkI7QUFBQSxNQUl0Q0Msc0JBSnNDO0FBQUEsTUFJZEMseUJBSmM7O0FBSzdDLE1BQU1DLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0M7QUFBQSxXQUFNRCx5QkFBeUIsQ0FBQyxLQUFELENBQS9CO0FBQUEsR0FBdEM7O0FBRUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ04sUUFBR04sSUFBSSxDQUFDTyxhQUFMLEtBQXVCLElBQTFCLEVBQStCO0FBQzlCQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NDLFNBQXhDLENBQWtEQyxNQUFsRCxDQUF5RCxlQUF6RDtBQUNBSCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLFNBQXpDLENBQW1ERSxHQUFuRCxDQUF1RCxlQUF2RDtBQUNBLEtBSEQsTUFHTSxJQUFHWixJQUFJLENBQUNPLGFBQUwsS0FBdUIsS0FBMUIsRUFBZ0M7QUFDckNDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsU0FBekMsQ0FBbURDLE1BQW5ELENBQTBELGVBQTFEO0FBQ0FILGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0MsU0FBeEMsQ0FBa0RFLEdBQWxELENBQXNELGVBQXREO0FBQ0E7QUFFRSxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBV0EsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFFQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0wsTUFBQyw2REFBRCxPQURLLEVBRUwsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBRTtBQUFDQyxZQUFNLEVBQUM7QUFBUjtBQUExQixLQUNDLE1BQUMsMkRBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFFO0FBQVQsS0FBcEI7QUFBd0MsWUFBUSxNQUFoRDtBQUFpRCxXQUFPLE1BQXhEO0FBQXlELFdBQU8sRUFBQyxNQUFqRTtBQUF3RSxTQUFLLFlBQUtGLEdBQUwsV0FBN0U7QUFBK0YsT0FBRyxFQUFFQTtBQUFwRyxJQURELENBRkssRUFLTCxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBRTtBQUFDRyxlQUFTLEVBQUM7QUFBWDtBQUFoQyxLQUNDLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQThDLE1BQUUsRUFBRSxFQUFsRDtBQUFzRCxXQUFPLEVBQUU7QUFBL0QsS0FDQztBQUFJLGFBQVMsRUFBQztBQUFkLDJFQURELENBREQsRUFJYSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFO0FBQS9ELEtBQ1gsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsc0RBQUQ7QUFDc0IsYUFBUyxFQUFDLGNBRGhDO0FBRXNCLE1BQUUsRUFBQyxlQUZ6QjtBQUdDLFdBQU8sRUFBRyxtQkFBTTtBQUNTUixjQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NDLFNBQXhDLENBQWtEQyxNQUFsRCxDQUF5RCxlQUF6RDtBQUNUSCxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLFNBQXpDLENBQW1ERSxHQUFuRCxDQUF1RCxlQUF2RDtBQUNTZixjQUFRLENBQUM7QUFBRW9CLFlBQUksRUFBRSxpQkFBUjtBQUEyQlYscUJBQWEsRUFBRTtBQUExQyxPQUFELENBQVI7QUFDQVosWUFBTSxDQUFDdUIsSUFBUCxDQUFZLE1BQVo7QUFDSCxLQVJ2QjtBQVNDLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQVRSO0FBVUMsV0FBTyxFQUFDLGNBVlQ7QUFXQyxRQUFJLEVBQUM7QUFYTixXQURELENBRFcsRUFrQlgsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsc0RBQUQ7QUFDc0IsYUFBUyxFQUFDLGNBRGhDO0FBRXNCLE1BQUUsRUFBQyxjQUZ6QjtBQUdzQixXQUFPLEVBQUcsbUJBQU07QUFDckJYLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsU0FBekMsQ0FBbURDLE1BQW5ELENBQTBELGVBQTFEO0FBQ1NILGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0MsU0FBeEMsQ0FBa0RFLEdBQWxELENBQXNELGVBQXREO0FBQ0FmLGNBQVEsQ0FBQztBQUFFb0IsWUFBSSxFQUFFLGlCQUFSO0FBQTJCVixxQkFBYSxFQUFFO0FBQTFDLE9BQUQsQ0FBUjtBQUNBWixZQUFNLENBQUN1QixJQUFQLENBQVksTUFBWjtBQUNILEtBUnZCO0FBU0MsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBVFI7QUFVQyxXQUFPLEVBQUMsY0FWVDtBQVdDLFFBQUksRUFBQztBQVhOLFVBREQsQ0FsQlcsQ0FKYixFQXdDYSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFLENBQS9EO0FBQWtFLGFBQVMsRUFBQztBQUE1RSxLQUNJO0FBQUcsYUFBUyxFQUFDO0FBQWIsbURBQ0ksTUFBQyxvRUFBRDtBQUNJLFFBQUksRUFBRSxFQURWO0FBRUksYUFBUyxFQUFDLGdCQUZkO0FBR0ksV0FBTyxFQUFFLG1CQUFNO0FBQUNmLCtCQUF5QixDQUFDLElBQUQsQ0FBekI7QUFBZ0M7QUFIcEQsSUFESixDQURKLENBeENiLEVBa0RTLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVELHNCQUFiO0FBQXFDLFVBQU0sRUFBRUU7QUFBN0MsS0FDSSxNQUFDLHFEQUFELENBQU8sSUFBUCwrTkFESixFQUVJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxjQUFoQjtBQUErQixXQUFPLEVBQUVBO0FBQXhDLGFBREosQ0FGSixDQWxEVCxDQUxLLENBREo7QUFtRUg7O0dBdkZ1Qlgsc0I7VUFDTEUscUQ7OztLQURLRixzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2Vjb25kYXJ5RWR1Y2F0aW9uLmpzLjVmYTI4NzMyMmRhMDBiOTRiNGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQ29sLCBSb3csIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgVGV4dEZpZWxkLCBDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vjb25kYXJ5RWR1Y2F0aW9uRm9ybSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XHJcblx0Y29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3QgW3Nob3dTZWNvbmRhcnlFZHVjYXRpb24sIHNldFNob3dTZWNvbmRhcnlFZHVjYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTZWNvbmRhcnlFZHVjYXRpb24gPSAoKSA9PiBzZXRTaG93U2Vjb25kYXJ5RWR1Y2F0aW9uKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvL2hpZ2hsaWdodCB5ZXMgbm8gYnV0dG9uXHJcblx0XHRpZihmb3JtLnBheUZvckNvbGxlZ2UgPT09IHRydWUpe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWR1Y2F0aW9uLW5vJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlX2J1dHRvbicpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWR1Y2F0aW9uLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1lbHNlIGlmKGZvcm0ucGF5Rm9yQ29sbGVnZSA9PT0gZmFsc2Upe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWR1Y2F0aW9uLXllcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkdWNhdGlvbi1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHRcdFxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgbm93ID0gMjU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IHBsYW4gb24gcGF5aW5nIGZvciB5b3VyIGNoaWxkcmVuJ3MgcG9zdCBzZWNvbmRhcnkgZWR1Y2F0aW9uPzwvaDQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZHVjYXRpb24teWVzXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZHVjYXRpb24tbm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkdWNhdGlvbi15ZXMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlBBWV9GT1JfQ09MTEVHRVwiLCBwYXlGb3JDb2xsZWdlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZG9iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRZZXNcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWR1Y2F0aW9uLW5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkdWNhdGlvbi15ZXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkdWNhdGlvbi1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiUEFZX0ZPUl9DT0xMRUdFXCIsIHBheUZvckNvbGxlZ2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZG9iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJvdXRsaW5lLWluZm9cIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHROb1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoeSBkbyB3ZSBhc2sgYWJvdXQgeW91ciBjaGlsZHJlbj8mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93U2Vjb25kYXJ5RWR1Y2F0aW9uKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICB7Lyphc2sgYWJvdXQgY2hpbGRyZW4qL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dTZWNvbmRhcnlFZHVjYXRpb259IG9uSGlkZT17aGFuZGxlQ2xvc2VTZWNvbmRhcnlFZHVjYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+SWYgeW91ciBjaGlsZHJlbuKAmXMgcG9zdC1zZWNvbmRhcnkgZWR1Y2F0aW9uIGlzIHNvbWV0aGluZyB5b3XigJlyZSBwbGFubmluZyB0byBwYXkgZm9yLCB3ZeKAmWxsIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgeW91ciBmYW1pbHkgd2lsbCBoYXZlIGVub3VnaCBtb25leSB0byBjb3ZlciB0aGUgY29zdHMgaWYgeW91IHdlcmUgbm8gbG9uZ2VyIGFyb3VuZC48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtaW5mb1wiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2Vjb25kYXJ5RWR1Y2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=