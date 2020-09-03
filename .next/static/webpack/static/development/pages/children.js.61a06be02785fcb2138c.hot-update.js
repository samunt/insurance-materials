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
    if (hasChildren !== form.hasChildren) {
      updateHasChildren(form.hasChildren);
      document.getElementById('child-yes').classList.add('active_button');
    }

    if (numberOfChildren !== form.childrenAgeArray) {
      updateNumberOfChildren(form.childrenAgeArray);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
      numberOfChildren: numberOfChildren && numberOfChildren.length
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // useEffect(() => {
  // 	dispatch({ type: "CHILDREN_AGE_ARRAY", childrenAgeArray: numberOfChildren });
  // 	dispatch({ type: "NUMBER_OF_CHILDREN", numberOfChildren: numberOfChildren.length - 1 });
  // }, [numberOfChildren]);
  // useEffect(() => {
  // 	dispatch({ type: "HAS_CHILDREN", hasChildren: false });
  // }, [hasChildren]);
  // Update numberOfChildren state

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
    });
    console.log('ITEM INDEX', itemIndex); // Make a copy of the state

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
        id: numberOfChildren && numberOfChildren.length + 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcyJdLCJuYW1lcyI6WyJDaGlsZHJlbkZvcm0iLCJ1c2VTdGF0ZSIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJpZCIsImFnZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dIb3dPbGQiLCJzZXRTaG93SG93T2xkIiwiaGFuZGxlQ2xvc2VIb3dPbGQiLCJmb3JtIiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0Iiwic2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJzZXRTaG93QXNrQWJvdXRDaGlsZHJlbiIsImhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiIsInNob3dQbGFubmluZ09uS2lkcyIsInNldFNob3dQbGFubmluZ09uS2lkcyIsImhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMiLCJub3ciLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hpbGRyZW5BZ2VBcnJheSIsIm1hcCIsImNoaWxkIiwiZGlzcGF0Y2giLCJ0eXBlIiwibGVuZ3RoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJEaXNwYXRjaENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVEYXRhIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIk51bWJlciIsImNoaWxkcmVuIiwic3BsaWNlIiwiZGVsZXRlQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGFuZGxlQ2xpY2siLCJtYXJnaW4iLCJoZWlnaHQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLEVBRFg7QUFBQSxNQUMvQkMsV0FEK0I7QUFBQSxNQUNsQkMsaUJBRGtCOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLENBQzNEO0FBQUVHLE1BQUUsRUFBRSxDQUFOO0FBQVNDLE9BQUcsRUFBRTtBQUFkLEdBRDJELENBQUQsQ0FGckI7QUFBQSxNQUUvQkMsZ0JBRitCO0FBQUEsTUFFYkMsc0JBRmE7O0FBQUEsbUJBS1BOLHNEQUFRLENBQUMsSUFBRCxDQUxEO0FBQUEsTUFLNUJPLE1BTDRCO0FBQUEsTUFLcEJDLFNBTG9CLGtCQU10Qzs7O0FBTnNDLG1CQU9KUixzREFBUSxDQUFDLEtBQUQsQ0FQSjtBQUFBLE1BTy9CUyxTQVArQjtBQUFBLE1BT3BCQyxZQVBvQjs7QUFRdEMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFdBQU1ELFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsR0FBekI7O0FBUnNDLG1CQVNGVixzREFBUSxDQUFDLEtBQUQsQ0FUTjtBQUFBLE1BUy9CWSxVQVQrQjtBQUFBLE1BU25CQyxhQVRtQjs7QUFVdEMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU1ELGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsR0FBMUI7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUF2Qjs7QUFYc0MsbUJBWWtCakIsc0RBQVEsQ0FBQyxLQUFELENBWjFCO0FBQUEsTUFZL0JrQixvQkFaK0I7QUFBQSxNQVlUQyx1QkFaUzs7QUFhdEMsTUFBTUMs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YjtBQUFtQyxVQUFNLEVBQUVKO0FBQTNDLEtBQ0MsTUFBQyxxREFBRCxDQUFPLElBQVAsMFFBREQsRUFFQyxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNDLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFTTtBQUFyQyxhQURELENBRkQsQ0FqS0EsRUEwS0EsTUFBQyxxREFBRDtBQUFPLFFBQUksRUFBRUMsa0JBQWI7QUFBaUMsVUFBTSxFQUFFRTtBQUF6QyxLQUNDLE1BQUMscURBQUQsQ0FBTyxJQUFQLDhyQkFERCxFQU1DLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREQsQ0FORCxDQTFLQSxDQUxELENBREQ7QUErTEE7O0dBM1R1QnhCLFk7VUFtRVJtRCxxRDs7O0tBbkVRbkQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hpbGRyZW4uanMuNjFhMDZiZTAyNzg1ZmNiMjEzOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQsIEZvcm1Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGUsIFRyYXNofSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5pbXBvcnQge01vZGFsLCBQcm9ncmVzc0JhciwgQnV0dG9ufSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyLCBDc3NCYXNlbGluZSwgVGV4dEZpZWxkLCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGlsZHJlbkZvcm0oKSB7XHJcblx0Y29uc3QgW2hhc0NoaWxkcmVuLCB1cGRhdGVIYXNDaGlsZHJlbl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtudW1iZXJPZkNoaWxkcmVuLCB1cGRhdGVOdW1iZXJPZkNoaWxkcmVuXSA9IHVzZVN0YXRlKFtcclxuXHRcdHsgaWQ6IDEsIGFnZTogJycgfVxyXG5cdF0pO1xyXG4gICAgY29uc3QgW2lzTmV4dCwgc2V0SXNOZXh0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cdC8vIG1vZGFsIHN0dWZmXHJcblx0Y29uc3QgW3Nob3dUaXRsZSwgc2V0U2hvd1RpdGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVRpdGxlID0gKCkgPT4gc2V0U2hvd1RpdGxlKGZhbHNlKTtcclxuXHRjb25zdCBbc2hvd0hvd09sZCwgc2V0U2hvd0hvd09sZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VIb3dPbGQgPSAoKSA9PiBzZXRTaG93SG93T2xkKGZhbHNlKTtcclxuXHRjb25zdCBmb3JtID0gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcblx0Y29uc3QgW3Nob3dBc2tBYm91dENoaWxkcmVuLCBzZXRTaG93QXNrQWJvdXRDaGlsZHJlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VBc2tBYm91dENoaWxkcmVuID0gKCkgPT4gc2V0U2hvd0Fza0Fib3V0Q2hpbGRyZW4oZmFsc2UpO1xyXG5cdGNvbnN0IFtzaG93UGxhbm5pbmdPbktpZHMsIHNldFNob3dQbGFubmluZ09uS2lkc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VQbGFubmluZ09uS2lkcyA9ICgpID0+IHNldFNob3dQbGFubmluZ09uS2lkcyhmYWxzZSk7XHJcblxyXG5cdGNvbnN0IG5vdyA9IDE1O1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZm9ybS5oYXNDaGlsZHJlbil7XHJcblx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZvcm0uaGFzQ2hpbGRyZW4pO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobnVtYmVyT2ZDaGlsZHJlbiAhPT0gZm9ybS5jaGlsZHJlbkFnZUFycmF5KXtcclxuICAgICAgICAgICAgdXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihmb3JtLmNoaWxkcmVuQWdlQXJyYXkpO1xyXG4gICAgICAgIH1cclxuXHJcblx0fSwgW10pO1xyXG5cdFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZmFsc2Upe1xyXG5cdFx0XHRpZihudW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IHsgaWQ6IDEsIGFnZTogJycgfSl7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpXHJcblx0XHRcdFx0bnVtYmVyT2ZDaGlsZHJlbi5tYXAoKGNoaWxkKT0+e1xyXG5cdFx0XHRcdFx0aWYoY2hpbGQuYWdlICE9PSAnJyl7XHJcblx0XHRcdFx0XHRcdHNldElzTmV4dChmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIiwgbnVtYmVyT2ZDaGlsZHJlbjogbnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCB9KTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJDSElMRFJFTl9BR0VfQVJSQVlcIiwgY2hpbGRyZW5BZ2VBcnJheTogbnVtYmVyT2ZDaGlsZHJlbiB9KTtcclxuXHR9LCBbaGFzQ2hpbGRyZW4sIG51bWJlck9mQ2hpbGRyZW5dKTtcclxuXHJcblx0Y29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHQgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCAgZmxleFdyYXA6ICd3cmFwJyxcclxuXHRcdH0sXHJcblx0XHR3aXRob3V0TGFiZWw6IHtcclxuXHRcdCAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0ICB3aWR0aDogJzI1Y2gnLFxyXG5cdFx0fSxcclxuXHR9KSk7XHJcblx0XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdFxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkNISUxEUkVOX0FHRV9BUlJBWVwiLCBjaGlsZHJlbkFnZUFycmF5OiBudW1iZXJPZkNoaWxkcmVuIH0pO1xyXG5cdC8vIFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk5VTUJFUl9PRl9DSElMRFJFTlwiLCBudW1iZXJPZkNoaWxkcmVuOiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCAtIDEgfSk7XHJcblx0Ly8gfSwgW251bWJlck9mQ2hpbGRyZW5dKTtcclxuXHJcblx0Ly8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHQvLyBcdGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfQ0hJTERSRU5cIiwgaGFzQ2hpbGRyZW46IGZhbHNlIH0pO1xyXG5cdC8vIH0sIFtoYXNDaGlsZHJlbl0pO1xyXG5cclxuXHQvLyBVcGRhdGUgbnVtYmVyT2ZDaGlsZHJlbiBzdGF0ZVxyXG5cdGZ1bmN0aW9uIHVwZGF0ZURhdGEoZSwgaWQpIHtcclxuXHRcdC8vIEdyYWIgdGhlIGlkIG9mIHRoZSBpbnB1dCBlbGVtZW50IGFuZCB0aGUgdHlwZWQgdmFsdWVcclxuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cdFx0Ly8gRmluZCB0aGUgaXRlbSBpbiB0aGUgYXJyYXkgdGhhdCBoYXMgdGhlIHNhbWUgaWRcclxuXHRcdC8vIENvbnZlcnQgdGhlIGdyYWJlZCBpZCBmcm9tIHN0cmluZyB0byBOdW1iZXJcclxuXHRcdGNvbnN0IGl0ZW1JbmRleCA9IG51bWJlck9mQ2hpbGRyZW4uZmluZEluZGV4KFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZClcclxuXHRcdCk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIGl0ZW1JbmRleCBpcyAtMSB0aGF0IG1lYW5zIGl0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIGFycmF5XHJcblx0XHRpZiAoaXRlbUluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHQvLyBNYWtlIGEgY29weSBvZiB0aGUgc3RhdGVcclxuXHRcdFx0Y29uc3QgY2hpbGRyZW4gPSBbLi4ubnVtYmVyT2ZDaGlsZHJlbl07XHJcblx0XHRcdC8vIFRoZSBjaGlsZCBpdGVtXHJcblx0XHRcdGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baXRlbUluZGV4XTtcclxuXHRcdFx0Ly8gVXBkYXRlIHRoZSBjaGlsZCdzIGFnZVxyXG5cdFx0XHRjaGlsZHJlbi5zcGxpY2UoaXRlbUluZGV4LCAxLCB7IC4uLmNoaWxkLCBhZ2U6IHZhbHVlIH0pO1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIHN0YXRlXHJcblx0XHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oY2hpbGRyZW4pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBkZWxldGVDaGlsZChpZCkge1xyXG5cdFx0Ly8gRmluZCB0aGUgaXRlbSBpbiB0aGUgYXJyYXkgdGhhdCBoYXMgdGhlIHNhbWUgaWRcclxuXHRcdC8vIENvbnZlcnQgdGhlIGdyYWJlZCBpZCBmcm9tIHN0cmluZyB0byBOdW1iZXJcclxuXHRcdGNvbnN0IGl0ZW1JbmRleCA9IG51bWJlck9mQ2hpbGRyZW4uZmluZEluZGV4KFxyXG5cdFx0XHRpdGVtID0+IGl0ZW0uaWQgPT09IE51bWJlcihpZClcclxuXHRcdCk7XHJcblx0XHRjb25zb2xlLmxvZygnSVRFTSBJTkRFWCcsIGl0ZW1JbmRleCk7XHJcblx0XHQvLyBNYWtlIGEgY29weSBvZiB0aGUgc3RhdGVcclxuXHRcdGNvbnN0IGNoaWxkcmVuID0gWy4uLm51bWJlck9mQ2hpbGRyZW5dO1xyXG5cdFx0Ly8gcmVtb3ZlIHRoZSBjaGlsZCBmcm9tIHRoZSBhcnJheVxyXG5cdFx0Y2hpbGRyZW4uc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcblx0XHQvLyBVcGRhdGUgdGhlIHN0YXRlXHJcblx0XHR1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKGNoaWxkcmVuKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0cm91dGVyLnB1c2goJy9zZWNvbmRhcnlFZHVjYXRpb24nKVxyXG5cdH1cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVDbGljaygpe1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoaWxkLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKVxyXG5cdFx0YXdhaXQgdXBkYXRlSGFzQ2hpbGRyZW4odHJ1ZSk7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiSEFTX0NISUxEUkVOXCIsIGhhc0NoaWxkcmVuOiB0cnVlIH0pO1xyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8Q3NzQmFzZWxpbmUgLz5cclxuXHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luOicxMHB4IGF1dG8nfX0+XHJcblx0XHRcdFx0PFByb2dyZXNzQmFyIHN0eWxlPXt7aGVpZ2h0OiAnMC41cmVtJ319IGFuaW1hdGVkIHN0cmlwZWQgdmFyaWFudD1cImluZm9cIiBsYWJlbD17YCR7bm93fSUgRG9uZWB9IG5vdz17bm93fSAvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN0eWxlPXt7bWFyZ2luVG9wOic0MHB4J319PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdoZWFkZXInPkRvIHlvdSBoYXZlIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuXHRcdFx0XHRcdFx0XHRzaXplPXsyMH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dUaXRsZSh0cnVlKX19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiY2hpbGQteWVzXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXthc3luYyAoKSA9PiB7aGFuZGxlQ2xpY2soKX19XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFllc1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cGRhdGVIYXNDaGlsZHJlbihmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL2RvYicpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdHtoYXNDaGlsZHJlbiA9PT0gdHJ1ZSAmJiA8PlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSA+XHJcblx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJoZWFkZXJcIj5Ib3cgb2xkIGFyZSB5b3VyIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT17MTV9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0hvd09sZCh0cnVlKX19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17OH0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdHtudW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4ubWFwKChjaGlsZCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7aW5kZXggPT09IDAgPyA8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj57YENoaWxkICR7aW5kZXgrMX0gQWdlYH08L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleCArIDYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NoaWxkLmFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGF0YShlLCBpbmRleCsxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+e2BDaGlsZCAke2luZGV4KzF9IEFnZWB9PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXggKyA2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC0xMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjaGlsZC5hZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZURhdGEoZSwgaW5kZXgrMSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVuZEFkb3JubWVudD17PFRyYXNoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT17MzB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtLTIgY29sLTIgbXQtMyBjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHsgZGVsZXRlQ2hpbGQoaW5kZXgrMSk7fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2UgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm51bWJlck9mQ2hpbGRyZW4sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBpZDogbnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCArIDEsIGFnZTogJycgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRdKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZCBBZGRpdGlvbmFsIENoaWxkXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvPn1cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHdlIGFzayBhYm91dCB5b3VyIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93QXNrQWJvdXRDaGlsZHJlbih0cnVlKX19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPVwibXQtMVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaGF0IGlmIEknbSBwbGFubmluZyBvbiBoYXZpbmcga2lkcz8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1BsYW5uaW5nT25LaWRzKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIChcclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpPT57aGFuZGxlU3VibWl0KGUpfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc05leHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdHsvKnRpdGxlIG1vZGFsKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VGl0bGV9IG9uSGlkZT17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+U2VsZWN0IOKAnFllc+KAnSBpZiB5b3UgaGF2ZSBjaGlsZHJlbiBvciBhcmUgY3VycmVudGx5IGV4cGVjdGluZy4gU2VsZWN0IOKAnE5v4oCdIGlmIHlvdSBkb27igJl0IGhhdmUgY2hpbGRyZW4gb3IgYWxsIG9mIHlvdXIgY2hpbGRyZW4gYXJlIG91dCBvZiB5b3VyIGhvdXNlaG9sZCBhbmQgbW9yZSBvciBsZXNzIGZpbmFuY2lhbGx5IGluZGVwZW5kZW50LjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qaG93IG9kbGEgcmUgdXIgY2hpbGRyZW4gbW9kYWwqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dIb3dPbGR9IG9uSGlkZT17aGFuZGxlQ2xvc2VIb3dPbGR9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5Pk9ubHkgaW5jbHVkZSBjaGlsZHJlbiB3aG8geW91IGFyZSBmaW5hbmNpYWxseSBzdXBwb3J0aW5nICh1c3VhbGx5IDI1IGFuZCB5b3VuZ2VyKS4gTWFrZSBzdXJlIHRvIGluY29ycG9yYXRlIHlvdXIgY2hpbGRyZW4gd2hlbiB3ZSBhc2sgYWJvdXQgeW91ciBmaW5hbmNlcyBhbmQgZXhwZW5zZXMuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qYXNrIGFib3V0IGNoaWxkcmVuKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93QXNrQWJvdXRDaGlsZHJlbn0gb25IaWRlPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+TGlmZSBpbnN1cmFuY2UgaXMgYWxsIGFib3V0IHByb3RlY3RpbmcgdGhlIHBlb3BsZSB5b3UgbG92ZS4gSWYgdGhlcmUgYXJlIHBlb3BsZSB3aG8gcmVseSBvbiB5b3UgZm9yIGZpbmFuY2lhbCBzdXBwb3J0LCBhIGxpZmUgaW5zdXJhbmNlIHBvbGljeSB3aWxsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgZW5vdWdoIG1vbmV5IGlmIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMgdG8geW91IGFuZCB5b3VyIGluY29tZSBpcyBubyBsb25nZXIgdGhlcmUuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW59PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdHsvKmFzayBhYm91dCBjaGlsZHJlbiovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd1BsYW5uaW5nT25LaWRzfSBvbkhpZGU9e2hhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHN9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PklmIHlvdeKAmXJlIGV4cGVjdGluZywgZmlyc3Qgb2ZmLCBjb25ncmF0dWxhdGlvbnMhIFlvdSBzaG91bGQgaW5jbHVkZSB5b3VyIGV4cGVjdGVkIGNoaWxkIChvciBjaGlsZHJlbiBpZiB5b3XigJlyZSBoYXZpbmcgdHdpbnMgb3IgdHJpcGxldHMpIGFuZCBzcGVjaWZ5IOKAnDDigJ0gd2hlbiB3ZSBhc2sgZm9yIHlvdXIgY2hpbGRyZW7igJlzIGFnZXMuXHJcblxyXG5cdFx0XHRcdFx0SG93ZXZlciwgaWYgeW914oCZcmUgbWVyZWx5IHBsYW5uaW5nIG9uIGhhdmluZyBjaGlsZHJlbiBpbiB0aGUgZnV0dXJlLCBkb27igJl0IGluY2x1ZGUgdGhlbS4gVW50aWwgeW91IGFyZSBjZXJ0YWluIGFib3V0IGlmIGFuZCB3aGVuIHlvdeKAmWxsIGJlIGhhdmluZyBjaGlsZHJlbiwgaXTigJlzIGJlc3QgdG8gbm90IGluY2x1ZGUgdGhlbSBpbiB5b3VyIG5lZWRzIGFzc2Vzc21lbnQgdG8gZW5zdXJlIHlvdSBhcmUgbm90IHBheWluZyBmb3IgY292ZXJhZ2UgdGhhdCB5b3UgbWlnaHQgbm90IHVsdGltYXRlbHkgbmVlZC5cclxuXHJcblx0XHRcdFx0XHRXaGVuIHlvdXIgZmFtaWx5IGRvZXMgZ3Jvdywgd2UgcmVjb21tZW5kIHJldmlzaXRpbmcgdGhlIFBvbGljeU1lIGxpZmUgaW5zdXJhbmNlIGNoZWNrdXAgdG8gZ2V0IHVwZGF0ZWQgYWR2aWNlIGFuZCB1bmRlcnN0YW5kIGhvdyB5b3VyIGNvdmVyYWdlIG5lZWRzIG1heSBoYXZlIGNoYW5nZWQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9