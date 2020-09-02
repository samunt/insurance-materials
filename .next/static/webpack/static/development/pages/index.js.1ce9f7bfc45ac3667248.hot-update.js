webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PersonalInformationForm.js":
/*!***********************************************!*\
  !*** ./components/PersonalInformationForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalInformationForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function PersonalInformationForm() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__["DispatchContext"]);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_3__["FormContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nameFirst = _useState[0],
      setNameFirst = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nameLast = _useState2[0],
      setNameLast = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      nameEmail = _useState3[0],
      setNameEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      namePhone = _useState4[0],
      setNamePhone = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isNext = _useState5[0],
      setIsNext = _useState5[1];

  dispatch({
    type: "ID",
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])()
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (nameFirst !== form.nameFirst) {
      setNameFirst(form.nameFirst ? form.nameFirst : '');
    }

    if (nameLast !== form.nameLast) {
      setNameLast(form.nameLast ? form.nameLast : '');
    }

    if (nameEmail !== form.nameEmail) {
      setNameEmail(form.nameEmail ? form.nameEmail : '');
    }

    if (namePhone !== form.namePhone) {
      setNamePhone(form.namePhone ? form.namePhone : '');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (nameFirst !== '' && nameLast !== '' && nameEmail !== '' && namePhone !== '') {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
  }, [nameFirst, nameLast, nameEmail, namePhone]);
  var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
    return {
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      },
      dense: {
        marginTop: theme.spacing(2)
      },
      menu: {
        width: 200
      },
      button: {
        marginTop: theme.spacing(5),
        textAlign: 'center'
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
      }
    };
  });
  var classes = useStyles();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    router.push('/spouseForm');
  }; // progress bar


  var now = 0;
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
    maxWidth: "sm"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12
  }, __jsx("h4", {
    className: "header"
  }, "Please enter some information in case we get disconnected")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12
  }, __jsx("form", {
    className: classes.container,
    autoComplete: "off",
    onSubmit: function onSubmit(e) {
      handleSubmit(e);
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    className: classes.paper
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    required: true,
    fullWidth: true,
    id: "first_name",
    label: "First Name",
    className: classes.textField,
    value: nameFirst,
    onChange: function onChange(e) {
      setNameFirst(e.target.value);
    },
    onBlur: function onBlur() {
      dispatch({
        type: "NAME_FIRST",
        nameFirst: nameFirst
      });
    }
  })), __jsx("br", null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    className: classes.paper
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    required: true,
    fullWidth: true,
    id: "last_name",
    label: "Last Name",
    className: classes.textField,
    value: nameLast,
    onChange: function onChange(e) {
      setNameLast(e.target.value);
    },
    onBlur: function onBlur() {
      dispatch({
        type: "NAME_LAST",
        nameLast: nameLast
      });
    }
  })), __jsx("br", null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    className: classes.paper
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email",
    type: "email",
    className: classes.textField,
    value: nameEmail,
    onChange: function onChange(e) {
      setNameEmail(e.target.value);
    },
    onBlur: function onBlur(e) {
      dispatch({
        type: "NAME_EMAIL",
        nameEmail: nameEmail
      });
    }
  })), __jsx("br", null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    className: classes.paper
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    required: true,
    fullWidth: true,
    id: "phone",
    label: "Phone",
    type: "number",
    className: classes.textField,
    value: namePhone,
    onChange: function onChange(e) {
      setNamePhone(e.target.value);
    },
    onBlur: function onBlur(e) {
      dispatch({
        type: "NAME_PHONE",
        namePhone: namePhone
      });
    }
  })), __jsx("br", null), __jsx("br", null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.button
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 4
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    as: "input",
    type: "submit",
    value: "Next",
    variant: "contained",
    style: {
      width: "100%"
    },
    disabled: isNext
  }))))))));
}

_s(PersonalInformationForm, "RYm/P5oM40UPTV2ah6ut6zIJcX4=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = PersonalInformationForm;

var _c;

$RefreshReg$(_c, "PersonalInformationForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BlcnNvbmFsSW5mb3JtYXRpb25Gb3JtLmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsSW5mb3JtYXRpb25Gb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0IiwidXNlU3RhdGUiLCJuYW1lRmlyc3QiLCJzZXROYW1lRmlyc3QiLCJuYW1lTGFzdCIsInNldE5hbWVMYXN0IiwibmFtZUVtYWlsIiwic2V0TmFtZUVtYWlsIiwibmFtZVBob25lIiwic2V0TmFtZVBob25lIiwiaXNOZXh0Iiwic2V0SXNOZXh0IiwidHlwZSIsImlkIiwidXVpZCIsInVzZUVmZmVjdCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsInRleHRGaWVsZCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJkZW5zZSIsIm1hcmdpblRvcCIsIm1lbnUiLCJ3aWR0aCIsImJ1dHRvbiIsInRleHRBbGlnbiIsInBhcGVyIiwicGFkZGluZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJjbGFzc2VzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIm5vdyIsIm1hcmdpbiIsImhlaWdodCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLHVCQUFULEdBQW1DO0FBQUE7O0FBQzlDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHFFQUFELENBQTNCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRix3REFB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LFNBUFg7QUFRSSxZQUFRLEVBQUUsa0JBQUNnQyxDQUFELEVBQU87QUFDYi9CLGtCQUFZLENBQUMrQixDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0gsS0FWTDtBQVdJLFVBQU0sRUFBRSxnQkFBQ1AsQ0FBRCxFQUFLO0FBQ1Q1QyxjQUFRLENBQUM7QUFBQ2dCLFlBQUksRUFBRSxZQUFQO0FBQXFCSixpQkFBUyxFQUFFQTtBQUFoQyxPQUFELENBQVI7QUFDSDtBQWJMLElBREEsQ0F0REosRUFzRUksaUJBdEVKLEVBdUVJLGlCQXZFSixFQXdFSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFpQyxjQUFVLEVBQUMsUUFBNUM7QUFBcUQsYUFBUyxFQUFFOEIsT0FBTyxDQUFDUjtBQUF4RSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsS0FDSSxNQUFDLDhEQUFEO0FBQVEsTUFBRSxFQUFDLE9BQVg7QUFBbUIsUUFBSSxFQUFDLFFBQXhCO0FBQWlDLFNBQUssRUFBQyxNQUF2QztBQUE4QyxXQUFPLEVBQUMsV0FBdEQ7QUFBa0UsU0FBSyxFQUFFO0FBQUVELFdBQUssRUFBRTtBQUFULEtBQXpFO0FBQTRGLFlBQVEsRUFBRW5CO0FBQXRHLElBREosQ0FESixDQXhFSixDQURKLENBSkosQ0FEUixDQUxKLENBREo7QUErRkg7O0dBMUt1QmpCLHVCO1VBQ0xFLHFEOzs7S0FES0YsdUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFjZTlmN2JmYzQ1YWMzNjY3MjQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0LCBGb3JtQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Qcm9ncmVzc0JhclwiO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgVGV4dEZpZWxkLCBDc3NCYXNlbGluZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYWxJbmZvcm1hdGlvbkZvcm0oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgY29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3QgW25hbWVGaXJzdCwgc2V0TmFtZUZpcnN0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuYW1lTGFzdCwgc2V0TmFtZUxhc3RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25hbWVFbWFpbCwgc2V0TmFtZUVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtuYW1lUGhvbmUsIHNldE5hbWVQaG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIklEXCIsIGlkOiB1dWlkKCkgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYobmFtZUZpcnN0ICE9PSBmb3JtLm5hbWVGaXJzdCl7XHJcbiAgICAgICAgICAgIHNldE5hbWVGaXJzdChmb3JtLm5hbWVGaXJzdCA/IGZvcm0ubmFtZUZpcnN0IDogJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobmFtZUxhc3QgIT09IGZvcm0ubmFtZUxhc3Qpe1xyXG4gICAgICAgICAgICBzZXROYW1lTGFzdChmb3JtLm5hbWVMYXN0ID8gZm9ybS5uYW1lTGFzdCA6ICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG5hbWVFbWFpbCAhPT0gZm9ybS5uYW1lRW1haWwpe1xyXG4gICAgICAgICAgICBzZXROYW1lRW1haWwoZm9ybS5uYW1lRW1haWwgPyBmb3JtLm5hbWVFbWFpbCA6ICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG5hbWVQaG9uZSAhPT0gZm9ybS5uYW1lUGhvbmUpe1xyXG4gICAgICAgICAgICBzZXROYW1lUGhvbmUoZm9ybS5uYW1lUGhvbmUgPyBmb3JtLm5hbWVQaG9uZSA6ICcnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKG5hbWVGaXJzdCAhPT0gJycgJiYgbmFtZUxhc3QgIT09ICcnICYmIG5hbWVFbWFpbCAhPT0gJycgJiYgbmFtZVBob25lICE9PSAnJyl7XHJcbiAgICAgICAgICAgIHNldElzTmV4dChmYWxzZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbmFtZUZpcnN0LCBuYW1lTGFzdCwgbmFtZUVtYWlsLCBuYW1lUGhvbmVdKTtcclxuXHJcbiAgICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgICAgICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dEZpZWxkOiB7XHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZW5zZToge1xyXG4gICAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudToge1xyXG4gICAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9zcG91c2VGb3JtJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9ncmVzcyBiYXJcclxuICAgIGNvbnN0IG5vdyA9IDA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0ICAgIDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5QbGVhc2UgZW50ZXIgc29tZSBpbmZvcm1hdGlvbiBpbiBjYXNlIHdlIGdldCBkaXNjb25uZWN0ZWQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGF1dG9Db21wbGV0ZT1cIm9mZlwiIG9uU3VibWl0PXsoZSk9PntoYW5kbGVTdWJtaXQoZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZUZpcnN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWVGaXJzdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJOQU1FX0ZJUlNUXCIsIG5hbWVGaXJzdDogbmFtZUZpcnN0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lTGFzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROYW1lTGFzdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJOQU1FX0xBU1RcIiwgbmFtZUxhc3Q6IG5hbWVMYXN0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWVFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJOQU1FX0VNQUlMXCIsIG5hbWVFbWFpbDogbmFtZUVtYWlsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lUGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZVBob25lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIk5BTUVfUEhPTkVcIiwgbmFtZVBob25lOiBuYW1lUGhvbmV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPVwiaW5wdXRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBkaXNhYmxlZD17aXNOZXh0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+ICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==