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

  var now = 15; //get data from localstroage/redux and set State when component mounted

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (hasChildren !== form.hasChildren) {
      updateHasChildren(form.hasChildren);
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

    if (hasChildren === true) {
      document.getElementById('child-yes').classList.add('active_button');
    } else if (hasChildren === false) {
      document.getElementById('child-no').classList.add('active_button');
    } //dispatch data to localstroage/redux on change


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
              document.getElementById('child-no').classList.remove('active_button');
              document.getElementById('child-yes').classList.add('active_button');
              _context2.next = 4;
              return updateHasChildren(true);

            case 4:
              dispatch({
                type: "HAS_CHILDREN",
                hasChildren: true
              });

            case 5:
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
    id: "child-no",
    onClick: function onClick() {
      updateHasChildren(false);
      document.getElementById('child-yes').classList.remove('active_button');
      document.getElementById('child-no').classList.add('active_button');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcyJdLCJuYW1lcyI6WyJDaGlsZHJlbkZvcm0iLCJ1c2VTdGF0ZSIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJpZCIsImFnZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dIb3dPbGQiLCJzZXRTaG93SG93T2xkIiwiaGFuZGxlQ2xvc2VIb3dPbGQiLCJmb3JtIiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0Iiwic2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJzZXRTaG93QXNrQWJvdXRDaGlsZHJlbiIsImhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiIsInNob3dQbGFubmluZ09uS2lkcyIsInNldFNob3dQbGFubmluZ09uS2lkcyIsImhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMiLCJub3ciLCJ1c2VFZmZlY3QiLCJjaGlsZHJlbkFnZUFycmF5IiwibWFwIiwiY2hpbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGF0Y2giLCJ0eXBlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJEaXNwYXRjaENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVEYXRhIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIk51bWJlciIsImNoaWxkcmVuIiwic3BsaWNlIiwiZGVsZXRlQ2hpbGQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVDbGljayIsInJlbW92ZSIsIm1hcmdpbiIsImhlaWdodCIsImluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsRUFEWDtBQUFBLE1BQy9CQyxXQUQrQjtBQUFBLE1BQ2xCQyxpQkFEa0I7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsQ0FDM0Q7QUFBRUcsTUFBRSxFQUFFLENBQU47QUFBU0MsT0FBRyxFQUFFO0FBQWQsR0FEMkQsQ0FBRCxDQUZyQjtBQUFBLE1BRS9CQyxnQkFGK0I7QUFBQSxNQUViQyxzQkFGYTs7QUFBQSxtQkFLUE4sc0RBQVEsQ0FBQyxJQUFELENBTEQ7QUFBQSxNQUs1Qk8sTUFMNEI7QUFBQSxNQUtwQkMsU0FMb0Isa0JBTXRDOzs7QUFOc0MsbUJBT0pSLHNEQUFRLENBQUMsS0FBRCxDQVBKO0FBQUEsTUFPL0JTLFNBUCtCO0FBQUEsTUFPcEJDLFlBUG9COztBQVF0QyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsV0FBTUQsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxHQUF6Qjs7QUFSc0MsbUJBU0ZWLHNEQUFRLENBQUMsS0FBRCxDQVROO0FBQUEsTUFTL0JZLFVBVCtCO0FBQUEsTUFTbkJDLGFBVG1COztBQVV0QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsV0FBTUQsYUFBYSxDQUFDLEtBQUQsQ0FBbkI7QUFBQSxHQUExQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCOztBQVhzQyxtQkFZa0JqQixzREFBUSxDQUFDLEtBQUQsQ0FaMUI7QUFBQSxNQVkvQmtCLG9CQVorQjtBQUFBLE1BWVRDLHVCQVpTOztBQWF0QyxNQUFNQywyQkFBMkIs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LE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREQsQ0FGRCxDQW5KQSxFQTRKQSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyxVQUFiO0FBQXlCLFVBQU0sRUFBRUU7QUFBakMsS0FDQyxNQUFDLHFEQUFELENBQU8sSUFBUCxrTEFERCxFQUVDLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREQsQ0FGRCxDQTVKQSxFQXFLQSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFSSxvQkFBYjtBQUFtQyxVQUFNLEVBQUVKO0FBQTNDLEtBQ0MsTUFBQyxxREFBRCxDQUFPLElBQVAsMFFBREQsRUFFQyxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNDLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFTTtBQUFyQyxhQURELENBRkQsQ0FyS0EsRUE4S0EsTUFBQyxxREFBRDtBQUFPLFFBQUksRUFBRUMsa0JBQWI7QUFBaUMsVUFBTSxFQUFFRTtBQUF6QyxLQUNDLE1BQUMscURBQUQsQ0FBTyxJQUFQLDhyQkFERCxFQU1DLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREQsQ0FORCxDQTlLQSxDQUxELENBREQ7QUFtTUE7O0dBM1R1QnhCLFk7VUF3RVJrRCxxRDs7O0tBeEVRbEQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hpbGRyZW4uanMuZDQ4ODg2MDQwNWJiZWMwOGU1YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQsIEZvcm1Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGUsIFRyYXNofSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgVGV4dEZpZWxkLCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGlsZHJlbkZvcm0oKSB7XHJcblx0Y29uc3QgW2hhc0NoaWxkcmVuLCB1cGRhdGVIYXNDaGlsZHJlbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtudW1iZXJPZkNoaWxkcmVuLCB1cGRhdGVOdW1iZXJPZkNoaWxkcmVuXSA9IHVzZVN0YXRlKFtcclxuXHRcdHsgaWQ6IDEsIGFnZTogJycgfVxyXG5cdF0pO1xyXG4gICAgY29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdC8vIG1vZGFsIHN0dWZmXHJcblx0Y29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVRpdGxlID0gKCkgPT4gc2V0U2hvd1RpdGxlKGZhbHNlKTtcclxuXHRjb25zdCBbc2hvd0hvd09sZCwgc2V0U2hvd0hvd09sZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VIb3dPbGQgPSAoKSA9PiBzZXRTaG93SG93T2xkKGZhbHNlKTtcclxuXHRjb25zdCBmb3JtID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcblx0Y29uc3QgW3Nob3dBc2tBYm91dENoaWxkcmVuLCBzZXRTaG93QXNrQWJvdXRDaGlsZHJlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VBc2tBYm91dENoaWxkcmVuID0gKCkgPT4gc2V0U2hvd0Fza0Fib3V0Q2hpbGRyZW4oZmFsc2UpO1xyXG5cdGNvbnN0IFtzaG93UGxhbm5pbmdPbktpZHMsIHNldFNob3dQbGFubmluZ09uS2lkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VQbGFubmluZ09uS2lkcyA9ICgpID0+IHNldFNob3dQbGFubmluZ09uS2lkcyhmYWxzZSk7XHJcblxyXG5cdGNvbnN0IG5vdyA9IDE1O1xyXG5cclxuXHQvL2dldCBkYXRhIGZyb20gbG9jYWxzdHJvYWdlL3JlZHV4IGFuZCBzZXQgU3RhdGUgd2hlbiBjb21wb25lbnQgbW91bnRlZFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaGFzQ2hpbGRyZW4gIT09IGZvcm0uaGFzQ2hpbGRyZW4pe1xyXG5cdFx0XHR1cGRhdGVIYXNDaGlsZHJlbihmb3JtLmhhc0NoaWxkcmVuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGZvcm0uY2hpbGRyZW5BZ2VBcnJheSAmJiBudW1iZXJPZkNoaWxkcmVuICE9PSBmb3JtLmNoaWxkcmVuQWdlQXJyYXkpe1xyXG4gICAgICAgICAgICB1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKGZvcm0uY2hpbGRyZW5BZ2VBcnJheSk7XHJcbiAgICAgICAgfVxyXG5cdH0sIFtdKTtcclxuXHRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL2VuYWJsZSBkaXNhYmxlIG5leHQgYnV0dG9uXHJcbiAgICAgICAgaWYoaGFzQ2hpbGRyZW4gIT09IGZhbHNlKXtcclxuXHRcdFx0aWYobnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuICE9PSB7IGlkOiAxLCBhZ2U6ICcnIH0pe1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKVxyXG5cdFx0XHRcdG51bWJlck9mQ2hpbGRyZW4ubWFwKChjaGlsZCk9PntcclxuXHRcdFx0XHRcdGlmKGNoaWxkLmFnZSAhPT0gJycpe1xyXG5cdFx0XHRcdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRJc05leHQodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRpZihoYXNDaGlsZHJlbiA9PT0gdHJ1ZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9ZWxzZSBpZihoYXNDaGlsZHJlbiA9PT0gZmFsc2Upe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9XHJcblx0XHQvL2Rpc3BhdGNoIGRhdGEgdG8gbG9jYWxzdHJvYWdlL3JlZHV4IG9uIGNoYW5nZVxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk5VTUJFUl9PRl9DSElMRFJFTlwiLCBudW1iZXJPZkNoaWxkcmVuOiBudW1iZXJPZkNoaWxkcmVuIH0pO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkNISUxEUkVOX0FHRV9BUlJBWVwiLCBjaGlsZHJlbkFnZUFycmF5OiBudW1iZXJPZkNoaWxkcmVuIH0pO1xyXG5cdH0sIFtoYXNDaGlsZHJlbiwgbnVtYmVyT2ZDaGlsZHJlbl0pO1xyXG5cclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdCAgZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0ICBmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdC8vIFVwZGF0ZSBudW1iZXJPZkNoaWxkcmVuIHN0YXRlXHJcblx0ZnVuY3Rpb24gdXBkYXRlRGF0YShlLCBpZCkge1xyXG5cdFx0Ly8gR3JhYiB0aGUgaWQgb2YgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHRoZSB0eXBlZCB2YWx1ZVxyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblx0XHQvLyBGaW5kIHRoZSBpdGVtIGluIHRoZSBhcnJheSB0aGF0IGhhcyB0aGUgc2FtZSBpZFxyXG5cdFx0Ly8gQ29udmVydCB0aGUgZ3JhYmVkIGlkIGZyb20gc3RyaW5nIHRvIE51bWJlclxyXG5cdFx0Y29uc3QgaXRlbUluZGV4ID0gbnVtYmVyT2ZDaGlsZHJlbi5maW5kSW5kZXgoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKVxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBJZiB0aGUgaXRlbUluZGV4IGlzIC0xIHRoYXQgbWVhbnMgaXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYXJyYXlcclxuXHRcdGlmIChpdGVtSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBzdGF0ZVxyXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IFsuLi5udW1iZXJPZkNoaWxkcmVuXTtcclxuXHRcdFx0Ly8gVGhlIGNoaWxkIGl0ZW1cclxuXHRcdFx0Y29uc3QgY2hpbGQgPSBjaGlsZHJlbltpdGVtSW5kZXhdO1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGNoaWxkJ3MgYWdlXHJcblx0XHRcdGNoaWxkcmVuLnNwbGljZShpdGVtSW5kZXgsIDEsIHsgLi4uY2hpbGQsIGFnZTogdmFsdWUgfSk7XHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihjaGlsZHJlbik7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkKSB7XHJcblx0XHQvLyBGaW5kIHRoZSBpdGVtIGluIHRoZSBhcnJheSB0aGF0IGhhcyB0aGUgc2FtZSBpZFxyXG5cdFx0Ly8gQ29udmVydCB0aGUgZ3JhYmVkIGlkIGZyb20gc3RyaW5nIHRvIE51bWJlclxyXG5cdFx0Y29uc3QgaXRlbUluZGV4ID0gbnVtYmVyT2ZDaGlsZHJlbi5maW5kSW5kZXgoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKVxyXG5cdFx0KTtcclxuXHRcdC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBzdGF0ZVxyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBbLi4ubnVtYmVyT2ZDaGlsZHJlbl07XHJcblx0XHQvLyByZW1vdmUgdGhlIGNoaWxkIGZyb20gdGhlIGFycmF5XHJcblx0XHRjaGlsZHJlbi5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuXHRcdC8vIFVwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRyb3V0ZXIucHVzaCgnL3NlY29uZGFyeUVkdWNhdGlvbicpXHJcblx0fVxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRhd2FpdCB1cGRhdGVIYXNDaGlsZHJlbih0cnVlKTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfQ0hJTERSRU5cIiwgaGFzQ2hpbGRyZW46IHRydWUgfSk7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdHNpemU9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1RpdGxlKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjaGlsZC15ZXNcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FzeW5jICgpID0+IHtoYW5kbGVDbGljaygpfX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WWVzXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiY2hpbGQtbm9cIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL2RvYicpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdHsvKiB0aGlzIHNlY3Rpb24gaXMgb25seSBzaG93biB3aGVuIGhhc0NoaWxkcmVuIGlzIHRydWUgKi99XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIDw+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9ID5cclxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImhlYWRlclwiPkhvdyBvbGQgYXJlIHlvdXIgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPXsxNX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SG93T2xkKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0e251bWJlck9mQ2hpbGRyZW4gJiYgbnVtYmVyT2ZDaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpbmRleCA9PT0gMCA/IDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPntgQ2hpbGQgJHtpbmRleCsxfSBBZ2VgfTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4ICsgNjB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2hpbGQuYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVEYXRhKGUsIGluZGV4KzEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj57YENoaWxkICR7aW5kZXgrMX0gQWdlYH08L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleCArIDYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NoaWxkLmFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGF0YShlLCBpbmRleCsxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kQWRvcm5tZW50PXs8VHJhc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPXszMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtMiBtdC0zIGN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4geyBkZWxldGVDaGlsZChpbmRleCsxKTt9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ubnVtYmVyT2ZDaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGlkOiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCArIDEsIGFnZTogJycgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRdKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZCBBZGRpdGlvbmFsIENoaWxkXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvPn1cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHdlIGFzayBhYm91dCB5b3VyIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93QXNrQWJvdXRDaGlsZHJlbih0cnVlKX19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPVwibXQtMVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaGF0IGlmIEknbSBwbGFubmluZyBvbiBoYXZpbmcga2lkcz8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1BsYW5uaW5nT25LaWRzKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIChcclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpPT57aGFuZGxlU3VibWl0KGUpfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc05leHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdHsvKnRpdGxlIG1vZGFsKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VGl0bGV9IG9uSGlkZT17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+U2VsZWN0IOKAnFllc+KAnSBpZiB5b3UgaGF2ZSBjaGlsZHJlbiBvciBhcmUgY3VycmVudGx5IGV4cGVjdGluZy4gU2VsZWN0IOKAnE5v4oCdIGlmIHlvdSBkb27igJl0IGhhdmUgY2hpbGRyZW4gb3IgYWxsIG9mIHlvdXIgY2hpbGRyZW4gYXJlIG91dCBvZiB5b3VyIGhvdXNlaG9sZCBhbmQgbW9yZSBvciBsZXNzIGZpbmFuY2lhbGx5IGluZGVwZW5kZW50LjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qaG93IG9kbGEgcmUgdXIgY2hpbGRyZW4gbW9kYWwqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dIb3dPbGR9IG9uSGlkZT17aGFuZGxlQ2xvc2VIb3dPbGR9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5Pk9ubHkgaW5jbHVkZSBjaGlsZHJlbiB3aG8geW91IGFyZSBmaW5hbmNpYWxseSBzdXBwb3J0aW5nICh1c3VhbGx5IDI1IGFuZCB5b3VuZ2VyKS4gTWFrZSBzdXJlIHRvIGluY29ycG9yYXRlIHlvdXIgY2hpbGRyZW4gd2hlbiB3ZSBhc2sgYWJvdXQgeW91ciBmaW5hbmNlcyBhbmQgZXhwZW5zZXMuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qYXNrIGFib3V0IGNoaWxkcmVuKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93QXNrQWJvdXRDaGlsZHJlbn0gb25IaWRlPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+TGlmZSBpbnN1cmFuY2UgaXMgYWxsIGFib3V0IHByb3RlY3RpbmcgdGhlIHBlb3BsZSB5b3UgbG92ZS4gSWYgdGhlcmUgYXJlIHBlb3BsZSB3aG8gcmVseSBvbiB5b3UgZm9yIGZpbmFuY2lhbCBzdXBwb3J0LCBhIGxpZmUgaW5zdXJhbmNlIHBvbGljeSB3aWxsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgZW5vdWdoIG1vbmV5IGlmIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMgdG8geW91IGFuZCB5b3VyIGluY29tZSBpcyBubyBsb25nZXIgdGhlcmUuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW59PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdHsvKmFzayBhYm91dCBjaGlsZHJlbiovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd1BsYW5uaW5nT25LaWRzfSBvbkhpZGU9e2hhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHN9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PklmIHlvdeKAmXJlIGV4cGVjdGluZywgZmlyc3Qgb2ZmLCBjb25ncmF0dWxhdGlvbnMhIFlvdSBzaG91bGQgaW5jbHVkZSB5b3VyIGV4cGVjdGVkIGNoaWxkIChvciBjaGlsZHJlbiBpZiB5b3XigJlyZSBoYXZpbmcgdHdpbnMgb3IgdHJpcGxldHMpIGFuZCBzcGVjaWZ5IOKAnDDigJ0gd2hlbiB3ZSBhc2sgZm9yIHlvdXIgY2hpbGRyZW7igJlzIGFnZXMuXHJcblxyXG5cdFx0XHRcdFx0SG93ZXZlciwgaWYgeW914oCZcmUgbWVyZWx5IHBsYW5uaW5nIG9uIGhhdmluZyBjaGlsZHJlbiBpbiB0aGUgZnV0dXJlLCBkb27igJl0IGluY2x1ZGUgdGhlbS4gVW50aWwgeW91IGFyZSBjZXJ0YWluIGFib3V0IGlmIGFuZCB3aGVuIHlvdeKAmWxsIGJlIGhhdmluZyBjaGlsZHJlbiwgaXTigJlzIGJlc3QgdG8gbm90IGluY2x1ZGUgdGhlbSBpbiB5b3VyIG5lZWRzIGFzc2Vzc21lbnQgdG8gZW5zdXJlIHlvdSBhcmUgbm90IHBheWluZyBmb3IgY292ZXJhZ2UgdGhhdCB5b3UgbWlnaHQgbm90IHVsdGltYXRlbHkgbmVlZC5cclxuXHJcblx0XHRcdFx0XHRXaGVuIHlvdXIgZmFtaWx5IGRvZXMgZ3Jvdywgd2UgcmVjb21tZW5kIHJldmlzaXRpbmcgdGhlIFBvbGljeU1lIGxpZmUgaW5zdXJhbmNlIGNoZWNrdXAgdG8gZ2V0IHVwZGF0ZWQgYWR2aWNlIGFuZCB1bmRlcnN0YW5kIGhvdyB5b3VyIGNvdmVyYWdlIG5lZWRzIG1heSBoYXZlIGNoYW5nZWQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9