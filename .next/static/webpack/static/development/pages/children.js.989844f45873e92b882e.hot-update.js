webpackHotUpdate("static\\development\\pages\\children.js",{

/***/ "./components/ChildrenForm.js":
/*!************************************!*\
  !*** ./components/ChildrenForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChildrenForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap-icons */ "./node_modules/react-bootstrap-icons/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function ChildrenForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      hasChildren = _useState[0],
      updateHasChildren = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    id: 1,
    age: ''
  }]),
      numberOfChildren = _useState2[0],
      updateNumberOfChildren = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      isNext = _useState3[0],
      setIsNext = _useState3[1]; // modal stuff


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showTitle = _useState4[0],
      setShowTitle = _useState4[1];

  var handleCloseTitle = function handleCloseTitle() {
    return setShowTitle(false);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showHowOld = _useState5[0],
      setShowHowOld = _useState5[1];

  var handleCloseHowOld = function handleCloseHowOld() {
    return setShowHowOld(false);
  };

  var form = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__["FormContext"]);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showAskAboutChildren = _useState6[0],
      setShowAskAboutChildren = _useState6[1];

  var handleCloseAskAboutChildren = function handleCloseAskAboutChildren() {
    return setShowAskAboutChildren(false);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showPlanningOnKids = _useState7[0],
      setShowPlanningOnKids = _useState7[1];

  var handleClosePlanningOnKids = function handleClosePlanningOnKids() {
    return setShowPlanningOnKids(false);
  };

  var now = 15;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    //get data from localstroage/redux and set State
    if (hasChildren !== form.hasChildren) {
      updateHasChildren(form.hasChildren);
      document.getElementById('child-yes').classList.add('active_button');
    }

    if (form.childrenAgeArray && numberOfChildren !== form.childrenAgeArray) {
      updateNumberOfChildren(form.childrenAgeArray);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    //enable disable next button
    if (hasChildren !== false) {
      if (numberOfChildren && numberOfChildren !== {
        id: 1,
        age: ''
      }) {
        setIsNext(true);
        numberOfChildren.map(function (child) {
          if (child.age !== '') {
            setIsNext(false);
          }
        });
      } else {
        setIsNext(true);
      }
    } else {
      setIsNext(true);
    }

    dispatch({
      type: "NUMBER_OF_CHILDREN",
      numberOfChildren: numberOfChildren
    });
    dispatch({
      type: "CHILDREN_AGE_ARRAY",
      childrenAgeArray: numberOfChildren
    });
  }, [hasChildren, numberOfChildren]);
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
    return {
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
    };
  });
  var classes = useStyles();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_6__["DispatchContext"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // Update numberOfChildren state

  function updateData(e, id) {
    // Grab the id of the input element and the typed value
    var value = e.target.value; // Find the item in the array that has the same id
    // Convert the grabed id from string to Number

    var itemIndex = numberOfChildren.findIndex(function (item) {
      return item.id === Number(id);
    }); // If the itemIndex is -1 that means it doesn't exist in the array

    if (itemIndex !== -1) {
      // Make a copy of the state
      var children = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(numberOfChildren); // The child item


      var child = children[itemIndex]; // Update the child's age

      children.splice(itemIndex, 1, _objectSpread(_objectSpread({}, child), {}, {
        age: value
      })); // Update the state

      updateNumberOfChildren(children);
    }
  }

  function deleteChild(id) {
    // Find the item in the array that has the same id
    // Convert the grabed id from string to Number
    var itemIndex = numberOfChildren.findIndex(function (item) {
      return item.id === Number(id);
    }); // Make a copy of the state

    var children = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(numberOfChildren); // remove the child from the array


    children.splice(itemIndex, 1); // Update the state

    updateNumberOfChildren(children);
  }

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/secondaryEducation');
  }

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              document.getElementById('child-yes').classList.add('active_button');
              _context2.next = 3;
              return updateHasChildren(true);

            case 3:
              dispatch({
                type: "HAS_CHILDREN",
                hasChildren: true
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleClick.apply(this, arguments);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["CssBaseline"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    style: {
      margin: '10px auto'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ProgressBar"], {
    style: {
      height: '0.5rem'
    },
    animated: true,
    striped: true,
    variant: "info",
    label: "".concat(now, "% Done"),
    now: now
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    maxWidth: "sm",
    style: {
      marginTop: '40px'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("h4", {
    className: "header"
  }, "Do you have children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["QuestionCircle"], {
    size: 20,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowTitle(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "align-button",
    id: "child-yes",
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              handleClick();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "Yes")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "align-button",
    onClick: function onClick() {
      updateHasChildren(false);
      router.push('/dob');
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg"
  }, "No"))), hasChildren === true && __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 12
  }, __jsx("h5", {
    className: "header"
  }, "How old are your children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowHowOld(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 8,
    justify: "center",
    spacing: 2
  }, numberOfChildren && numberOfChildren.map(function (child, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
      item: true,
      xs: 12,
      sm: 12,
      key: index
    }, index === 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
      fullWidth: true
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
      htmlFor: "standard-adornment-amount"
    }, "Child ".concat(index + 1, " Age")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Input"], {
      key: index + 60,
      className: "col-sm-12 col-12",
      value: child.age,
      onChange: function onChange(e) {
        updateData(e, index + 1);
      },
      type: "number"
    })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
      fullWidth: true
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["InputLabel"], {
      htmlFor: "standard-adornment-amount"
    }, "Child ".concat(index + 1, " Age")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Input"], {
      key: index + 60,
      className: "col-sm-12 col-12",
      value: child.age,
      onChange: function onChange(e) {
        updateData(e, index + 1);
      },
      type: "number",
      endAdornment: __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["Trash"], {
        size: 30,
        className: "col-sm-2 col-2 mt-3 cursor-pointer",
        onClick: function onClick(e) {
          deleteChild(index + 1);
        }
      })
    })));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2,
    className: "mt-4"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "align-button",
    onClick: function onClick(e) {
      e.preventDefault();
      updateNumberOfChildren([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(numberOfChildren), [{
        id: numberOfChildren.length + 1,
        age: ''
      }]));
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    type: "submit",
    size: "lg"
  }, "Add Additional Child")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    className: "mt-4"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Why do we ask about your children?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowAskAboutChildren(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    className: "mt-1"
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "What if I'm planning on having kids?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_7__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowPlanningOnKids(true);
    }
  }))), hasChildren === true && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    style: {
      width: "100%"
    },
    onClick: function onClick(e) {
      handleSubmit(e);
    },
    variant: "contained",
    size: "lg",
    disabled: isNext
  }, "Next"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    show: showTitle,
    onHide: handleCloseTitle
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, null, "Select \u201CYes\u201D if you have children or are currently expecting. Select \u201CNo\u201D if you don\u2019t have children or all of your children are out of your household and more or less financially independent."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    onClick: handleCloseTitle
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    show: showHowOld,
    onHide: handleCloseHowOld
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, null, "Only include children who you are financially supporting (usually 25 and younger). Make sure to incorporate your children when we ask about your finances and expenses."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    onClick: handleCloseHowOld
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    show: showAskAboutChildren,
    onHide: handleCloseHowOld
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, null, "Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    onClick: handleCloseAskAboutChildren
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    show: showPlanningOnKids,
    onHide: handleClosePlanningOnKids
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, null, "If you\u2019re expecting, first off, congratulations! You should include your expected child (or children if you\u2019re having twins or triplets) and specify \u201C0\u201D when we ask for your children\u2019s ages. However, if you\u2019re merely planning on having children in the future, don\u2019t include them. Until you are certain about if and when you\u2019ll be having children, it\u2019s best to not include them in your needs assessment to ensure you are not paying for coverage that you might not ultimately need. When your family does grow, we recommend revisiting the PolicyMe life insurance checkup to get updated advice and understand how your coverage needs may have changed."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    onClick: handleClosePlanningOnKids
  }, "Close")))));
}

_s(ChildrenForm, "W798V5haIIA29KxnuaXe11QFLAM=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ChildrenForm;

var _c;

$RefreshReg$(_c, "ChildrenForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcyJdLCJuYW1lcyI6WyJDaGlsZHJlbkZvcm0iLCJ1c2VTdGF0ZSIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJpZCIsImFnZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dIb3dPbGQiLCJzZXRTaG93SG93T2xkIiwiaGFuZGxlQ2xvc2VIb3dPbGQiLCJmb3JtIiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0Iiwic2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJzZXRTaG93QXNrQWJvdXRDaGlsZHJlbiIsImhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiIsInNob3dQbGFubmluZ09uS2lkcyIsInNldFNob3dQbGFubmluZ09uS2lkcyIsImhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMiLCJub3ciLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hpbGRyZW5BZ2VBcnJheSIsIm1hcCIsImNoaWxkIiwiZGlzcGF0Y2giLCJ0eXBlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJEaXNwYXRjaENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVEYXRhIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIk51bWJlciIsImNoaWxkcmVuIiwic3BsaWNlIiwiZGVsZXRlQ2hpbGQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVDbGljayIsIm1hcmdpbiIsImhlaWdodCIsImluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsRUFEWDtBQUFBLE1BQy9CQyxXQUQrQjtBQUFBLE1BQ2xCQyxpQkFEa0I7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsQ0FDM0Q7QUFBRUcsTUFBRSxFQUFFLENBQU47QUFBU0MsT0FBRyxFQUFFO0FBQWQsR0FEMkQsQ0FBRCxDQUZyQjtBQUFBLE1BRS9CQyxnQkFGK0I7QUFBQSxNQUViQyxzQkFGYTs7QUFBQSxtQkFLUE4sc0RBQVEsQ0FBQyxJQUFELENBTEQ7QUFBQSxNQUs1Qk8sTUFMNEI7QUFBQSxNQUtwQkMsU0FMb0Isa0JBTXRDOzs7QUFOc0MsbUJBT0pSLHNEQUFRLENBQUMsS0FBRCxDQVBKO0FBQUEsTUFPL0JTLFNBUCtCO0FBQUEsTUFPcEJDLFlBUG9COztBQVF0QyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsV0FBTUQsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxHQUF6Qjs7QUFSc0MsbUJBU0ZWLHNEQUFRLENBQUMsS0FBRCxDQVROO0FBQUEsTUFTL0JZLFVBVCtCO0FBQUEsTUFTbkJDLGFBVG1COztBQVV0QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsV0FBTUQsYUFBYSxDQUFDLEtBQUQsQ0FBbkI7QUFBQSxHQUExQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCOztBQVhzQyxtQkFZa0JqQixzREFBUSxDQUFDLEtBQUQsQ0FaMUI7QUFBQSxNQVkvQmtCLG9CQVorQjtBQUFBLE1BWVRDLHVCQVpTOztBQWF0QyxNQUFNQywyQkFBMkIsR0FBRyxTQUE5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LFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVNO0FBQXJDLGFBREQsQ0FGRCxDQWxLQSxFQTJLQSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyxrQkFBYjtBQUFpQyxVQUFNLEVBQUVFO0FBQXpDLEtBQ0MsTUFBQyxxREFBRCxDQUFPLElBQVAsOHJCQURELEVBTUMsTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDQyxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFERCxDQU5ELENBM0tBLENBTEQsQ0FERDtBQWdNQTs7R0FuVHVCeEIsWTtVQW9FUmtELHFEOzs7S0FwRVFsRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGlsZHJlbi5qcy45ODk4NDRmNDU4NzNlOTJiODgyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZSwgVHJhc2h9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucyc7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWxkcmVuRm9ybSgpIHtcclxuXHRjb25zdCBbaGFzQ2hpbGRyZW4sIHVwZGF0ZUhhc0NoaWxkcmVuXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW251bWJlck9mQ2hpbGRyZW4sIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW5dID0gdXNlU3RhdGUoW1xyXG5cdFx0eyBpZDogMSwgYWdlOiAnJyB9XHJcblx0XSk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Ly8gbW9kYWwgc3R1ZmZcclxuXHRjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlVGl0bGUgPSAoKSA9PiBzZXRTaG93VGl0bGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzaG93SG93T2xkLCBzZXRTaG93SG93T2xkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZUhvd09sZCA9ICgpID0+IHNldFNob3dIb3dPbGQoZmFsc2UpO1xyXG5cdGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuXHRjb25zdCBbc2hvd0Fza0Fib3V0Q2hpbGRyZW4sIHNldFNob3dBc2tBYm91dENoaWxkcmVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW4gPSAoKSA9PiBzZXRTaG93QXNrQWJvdXRDaGlsZHJlbihmYWxzZSk7XHJcblx0Y29uc3QgW3Nob3dQbGFubmluZ09uS2lkcywgc2V0U2hvd1BsYW5uaW5nT25LaWRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzID0gKCkgPT4gc2V0U2hvd1BsYW5uaW5nT25LaWRzKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgbm93ID0gMTU7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL2dldCBkYXRhIGZyb20gbG9jYWxzdHJvYWdlL3JlZHV4IGFuZCBzZXQgU3RhdGVcclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZm9ybS5oYXNDaGlsZHJlbil7XHJcblx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZvcm0uaGFzQ2hpbGRyZW4pO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZm9ybS5jaGlsZHJlbkFnZUFycmF5ICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IGZvcm0uY2hpbGRyZW5BZ2VBcnJheSl7XHJcbiAgICAgICAgICAgIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oZm9ybS5jaGlsZHJlbkFnZUFycmF5KTtcclxuICAgICAgICB9XHJcblxyXG5cdH0sIFtdKTtcclxuXHRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL2VuYWJsZSBkaXNhYmxlIG5leHQgYnV0dG9uXHJcbiAgICAgICAgaWYoaGFzQ2hpbGRyZW4gIT09IGZhbHNlKXtcclxuXHRcdFx0aWYobnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuICE9PSB7IGlkOiAxLCBhZ2U6ICcnIH0pe1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKVxyXG5cdFx0XHRcdG51bWJlck9mQ2hpbGRyZW4ubWFwKChjaGlsZCk9PntcclxuXHRcdFx0XHRcdGlmKGNoaWxkLmFnZSAhPT0gJycpe1xyXG5cdFx0XHRcdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRJc05leHQodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTlVNQkVSX09GX0NISUxEUkVOXCIsIG51bWJlck9mQ2hpbGRyZW46IG51bWJlck9mQ2hpbGRyZW4gfSk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiQ0hJTERSRU5fQUdFX0FSUkFZXCIsIGNoaWxkcmVuQWdlQXJyYXk6IG51bWJlck9mQ2hpbGRyZW4gfSk7XHJcblx0fSwgW2hhc0NoaWxkcmVuLCBudW1iZXJPZkNoaWxkcmVuXSk7XHJcblxyXG5cdGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0ICBkaXNwbGF5OiAnZmxleCcsXHJcblx0XHQgIGZsZXhXcmFwOiAnd3JhcCcsXHJcblx0XHR9LFxyXG5cdFx0d2l0aG91dExhYmVsOiB7XHJcblx0XHQgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdCAgd2lkdGg6ICcyNWNoJyxcclxuXHRcdH0sXHJcblx0fSkpO1xyXG5cdFxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Ly8gVXBkYXRlIG51bWJlck9mQ2hpbGRyZW4gc3RhdGVcclxuXHRmdW5jdGlvbiB1cGRhdGVEYXRhKGUsIGlkKSB7XHJcblx0XHQvLyBHcmFiIHRoZSBpZCBvZiB0aGUgaW5wdXQgZWxlbWVudCBhbmQgdGhlIHR5cGVkIHZhbHVlXHJcblx0XHRjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHRcdC8vIEZpbmQgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IHRoYXQgaGFzIHRoZSBzYW1lIGlkXHJcblx0XHQvLyBDb252ZXJ0IHRoZSBncmFiZWQgaWQgZnJvbSBzdHJpbmcgdG8gTnVtYmVyXHJcblx0XHRjb25zdCBpdGVtSW5kZXggPSBudW1iZXJPZkNoaWxkcmVuLmZpbmRJbmRleChcclxuXHRcdFx0aXRlbSA9PiBpdGVtLmlkID09PSBOdW1iZXIoaWQpXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIElmIHRoZSBpdGVtSW5kZXggaXMgLTEgdGhhdCBtZWFucyBpdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBhcnJheVxyXG5cdFx0aWYgKGl0ZW1JbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0Ly8gTWFrZSBhIGNvcHkgb2YgdGhlIHN0YXRlXHJcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gWy4uLm51bWJlck9mQ2hpbGRyZW5dO1xyXG5cdFx0XHQvLyBUaGUgY2hpbGQgaXRlbVxyXG5cdFx0XHRjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2l0ZW1JbmRleF07XHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgY2hpbGQncyBhZ2VcclxuXHRcdFx0Y2hpbGRyZW4uc3BsaWNlKGl0ZW1JbmRleCwgMSwgeyAuLi5jaGlsZCwgYWdlOiB2YWx1ZSB9KTtcclxuXHRcdFx0Ly8gVXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0XHR1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKGNoaWxkcmVuKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZGVsZXRlQ2hpbGQoaWQpIHtcclxuXHRcdC8vIEZpbmQgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IHRoYXQgaGFzIHRoZSBzYW1lIGlkXHJcblx0XHQvLyBDb252ZXJ0IHRoZSBncmFiZWQgaWQgZnJvbSBzdHJpbmcgdG8gTnVtYmVyXHJcblx0XHRjb25zdCBpdGVtSW5kZXggPSBudW1iZXJPZkNoaWxkcmVuLmZpbmRJbmRleChcclxuXHRcdFx0aXRlbSA9PiBpdGVtLmlkID09PSBOdW1iZXIoaWQpXHJcblx0XHQpO1xyXG5cdFx0Ly8gTWFrZSBhIGNvcHkgb2YgdGhlIHN0YXRlXHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IFsuLi5udW1iZXJPZkNoaWxkcmVuXTtcclxuXHRcdC8vIHJlbW92ZSB0aGUgY2hpbGQgZnJvbSB0aGUgYXJyYXlcclxuXHRcdGNoaWxkcmVuLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG5cdFx0Ly8gVXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihjaGlsZHJlbik7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHJvdXRlci5wdXNoKCcvc2Vjb25kYXJ5RWR1Y2F0aW9uJylcclxuXHR9XHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKXtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJylcclxuXHRcdGF3YWl0IHVwZGF0ZUhhc0NoaWxkcmVuKHRydWUpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkhBU19DSElMRFJFTlwiLCBoYXNDaGlsZHJlbjogdHJ1ZSB9KTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0naGVhZGVyJz5EbyB5b3UgaGF2ZSBjaGlsZHJlbj8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT17MjB9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93VGl0bGUodHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cImNoaWxkLXllc1wiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17YXN5bmMgKCkgPT4ge2hhbmRsZUNsaWNrKCl9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRZZXNcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlSGFzQ2hpbGRyZW4oZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy9kb2InKVxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdE5vXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHR7LyogdGhpcyBzZWN0aW9uIGlzIG9ubHkgc2hvd24gd2hlbiBoYXNDaGlsZHJlbiBpcyB0cnVlICovfVxyXG5cdFx0XHRcdHtoYXNDaGlsZHJlbiA9PT0gdHJ1ZSAmJiA8PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSA+XHJcblx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJoZWFkZXJcIj5Ib3cgb2xkIGFyZSB5b3VyIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17MTV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hvd09sZCh0cnVlKX19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17OH0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdHtudW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7aW5kZXggPT09IDAgPyA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj57YENoaWxkICR7aW5kZXgrMX0gQWdlYH08L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleCArIDYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NoaWxkLmFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGF0YShlLCBpbmRleCsxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+e2BDaGlsZCAke2luZGV4KzF9IEFnZWB9PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXggKyA2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC0xMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjaGlsZC5hZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZURhdGEoZSwgaW5kZXgrMSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVuZEFkb3JubWVudD17PFRyYXNoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT17MzB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLTIgbXQtMyBjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHsgZGVsZXRlQ2hpbGQoaW5kZXgrMSk7fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm51bWJlck9mQ2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBpZDogbnVtYmVyT2ZDaGlsZHJlbi5sZW5ndGggKyAxLCBhZ2U6ICcnIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRBZGQgQWRkaXRpb25hbCBDaGlsZFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8Lz59XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoeSBkbyB3ZSBhc2sgYWJvdXQgeW91ciBjaGlsZHJlbj8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0Fza0Fib3V0Q2hpbGRyZW4odHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT1cIm10LTFcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2hhdCBpZiBJJ20gcGxhbm5pbmcgb24gaGF2aW5nIGtpZHM/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dQbGFubmluZ09uS2lkcyh0cnVlKX19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdHtoYXNDaGlsZHJlbiA9PT0gdHJ1ZSAmJiAoXHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKT0+e2hhbmRsZVN1Ym1pdChlKX19XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17aXNOZXh0fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdE5leHRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHR7Lyp0aXRsZSBtb2RhbCovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd1RpdGxlfSBvbkhpZGU9e2hhbmRsZUNsb3NlVGl0bGV9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PlNlbGVjdCDigJxZZXPigJ0gaWYgeW91IGhhdmUgY2hpbGRyZW4gb3IgYXJlIGN1cnJlbnRseSBleHBlY3RpbmcuIFNlbGVjdCDigJxOb+KAnSBpZiB5b3UgZG9u4oCZdCBoYXZlIGNoaWxkcmVuIG9yIGFsbCBvZiB5b3VyIGNoaWxkcmVuIGFyZSBvdXQgb2YgeW91ciBob3VzZWhvbGQgYW5kIG1vcmUgb3IgbGVzcyBmaW5hbmNpYWxseSBpbmRlcGVuZGVudC48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVGl0bGV9PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdHsvKmhvdyBvZGxhIHJlIHVyIGNoaWxkcmVuIG1vZGFsKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93SG93T2xkfSBvbkhpZGU9e2hhbmRsZUNsb3NlSG93T2xkfT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5Pbmx5IGluY2x1ZGUgY2hpbGRyZW4gd2hvIHlvdSBhcmUgZmluYW5jaWFsbHkgc3VwcG9ydGluZyAodXN1YWxseSAyNSBhbmQgeW91bmdlcikuIE1ha2Ugc3VyZSB0byBpbmNvcnBvcmF0ZSB5b3VyIGNoaWxkcmVuIHdoZW4gd2UgYXNrIGFib3V0IHlvdXIgZmluYW5jZXMgYW5kIGV4cGVuc2VzLjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VIb3dPbGR9PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdHsvKmFzayBhYm91dCBjaGlsZHJlbiovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd0Fza0Fib3V0Q2hpbGRyZW59IG9uSGlkZT17aGFuZGxlQ2xvc2VIb3dPbGR9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PkxpZmUgaW5zdXJhbmNlIGlzIGFsbCBhYm91dCBwcm90ZWN0aW5nIHRoZSBwZW9wbGUgeW91IGxvdmUuIElmIHRoZXJlIGFyZSBwZW9wbGUgd2hvIHJlbHkgb24geW91IGZvciBmaW5hbmNpYWwgc3VwcG9ydCwgYSBsaWZlIGluc3VyYW5jZSBwb2xpY3kgd2lsbCBtYWtlIHN1cmUgdGhleSBoYXZlIGVub3VnaCBtb25leSBpZiBzb21ldGhpbmcgdW5leHBlY3RlZCBoYXBwZW5zIHRvIHlvdSBhbmQgeW91ciBpbmNvbWUgaXMgbm8gbG9uZ2VyIHRoZXJlLjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VBc2tBYm91dENoaWxkcmVufT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHR7Lyphc2sgYWJvdXQgY2hpbGRyZW4qL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dQbGFubmluZ09uS2lkc30gb25IaWRlPXtoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzfT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5JZiB5b3XigJlyZSBleHBlY3RpbmcsIGZpcnN0IG9mZiwgY29uZ3JhdHVsYXRpb25zISBZb3Ugc2hvdWxkIGluY2x1ZGUgeW91ciBleHBlY3RlZCBjaGlsZCAob3IgY2hpbGRyZW4gaWYgeW914oCZcmUgaGF2aW5nIHR3aW5zIG9yIHRyaXBsZXRzKSBhbmQgc3BlY2lmeSDigJww4oCdIHdoZW4gd2UgYXNrIGZvciB5b3VyIGNoaWxkcmVu4oCZcyBhZ2VzLlxyXG5cclxuXHRcdFx0XHRcdEhvd2V2ZXIsIGlmIHlvdeKAmXJlIG1lcmVseSBwbGFubmluZyBvbiBoYXZpbmcgY2hpbGRyZW4gaW4gdGhlIGZ1dHVyZSwgZG9u4oCZdCBpbmNsdWRlIHRoZW0uIFVudGlsIHlvdSBhcmUgY2VydGFpbiBhYm91dCBpZiBhbmQgd2hlbiB5b3XigJlsbCBiZSBoYXZpbmcgY2hpbGRyZW4sIGl04oCZcyBiZXN0IHRvIG5vdCBpbmNsdWRlIHRoZW0gaW4geW91ciBuZWVkcyBhc3Nlc3NtZW50IHRvIGVuc3VyZSB5b3UgYXJlIG5vdCBwYXlpbmcgZm9yIGNvdmVyYWdlIHRoYXQgeW91IG1pZ2h0IG5vdCB1bHRpbWF0ZWx5IG5lZWQuXHJcblxyXG5cdFx0XHRcdFx0V2hlbiB5b3VyIGZhbWlseSBkb2VzIGdyb3csIHdlIHJlY29tbWVuZCByZXZpc2l0aW5nIHRoZSBQb2xpY3lNZSBsaWZlIGluc3VyYW5jZSBjaGVja3VwIHRvIGdldCB1cGRhdGVkIGFkdmljZSBhbmQgdW5kZXJzdGFuZCBob3cgeW91ciBjb3ZlcmFnZSBuZWVkcyBtYXkgaGF2ZSBjaGFuZ2VkLjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VQbGFubmluZ09uS2lkc30+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==