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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcyJdLCJuYW1lcyI6WyJDaGlsZHJlbkZvcm0iLCJ1c2VTdGF0ZSIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJpZCIsImFnZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dIb3dPbGQiLCJzZXRTaG93SG93T2xkIiwiaGFuZGxlQ2xvc2VIb3dPbGQiLCJmb3JtIiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0Iiwic2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJzZXRTaG93QXNrQWJvdXRDaGlsZHJlbiIsImhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiIsInNob3dQbGFubmluZ09uS2lkcyIsInNldFNob3dQbGFubmluZ09uS2lkcyIsImhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMiLCJub3ciLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hpbGRyZW5BZ2VBcnJheSIsIm1hcCIsImNoaWxkIiwiZGlzcGF0Y2giLCJ0eXBlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIndpdGhvdXRMYWJlbCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJEaXNwYXRjaENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVEYXRhIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaXRlbUluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIk51bWJlciIsImNoaWxkcmVuIiwic3BsaWNlIiwiZGVsZXRlQ2hpbGQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJoYW5kbGVDbGljayIsIm1hcmdpbiIsImhlaWdodCIsImluZGV4IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsRUFEWDtBQUFBLE1BQy9CQyxXQUQrQjtBQUFBLE1BQ2xCQyxpQkFEa0I7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsQ0FDM0Q7QUFBRUcsTUFBRSxFQUFFLENBQU47QUFBU0MsT0FBRyxFQUFFO0FBQWQsR0FEMkQsQ0FBRCxDQUZyQjtBQUFBLE1BRS9CQyxnQkFGK0I7QUFBQSxNQUViQyxzQkFGYTs7QUFBQSxtQkFLUE4sc0RBQVEsQ0FBQyxJQUFELENBTEQ7QUFBQSxNQUs1Qk8sTUFMNEI7QUFBQSxNQUtwQkMsU0FMb0Isa0JBTXRDOzs7QUFOc0MsbUJBT0pSLHNEQUFRLENBQUMsS0FBRCxDQVBKO0FBQUEsTUFPL0JTLFNBUCtCO0FBQUEsTUFPcEJDLFlBUG9COztBQVF0QyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsV0FBTUQsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxHQUF6Qjs7QUFSc0MsbUJBU0ZWLHNEQUFRLENBQUMsS0FBRCxDQVROO0FBQUEsTUFTL0JZLFVBVCtCO0FBQUEsTUFTbkJDLGFBVG1COztBQVV0QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsV0FBTUQsYUFBYSxDQUFDLEtBQUQsQ0FBbkI7QUFBQSxHQUExQjs7QUFDQSxNQUFNRSxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCOztBQVhzQyxtQkFZa0JqQixzREFBUSxDQUFDLEtBQUQsQ0FaMUI7QUFBQSxNQVkvQmtCLG9CQVorQjtBQUFBLE1BWVRDLHVCQVpTOztBQWF0QyxNQUFNQywyQkFBMkIsR0FBRyxTQUE5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QUFQLFFBQ0MsTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVNO0FBQXJDLGFBREQsQ0FGRCxDQWxLQSxFQTJLQSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyxrQkFBYjtBQUFpQyxVQUFNLEVBQUVFO0FBQXpDLEtBQ0MsTUFBQyxxREFBRCxDQUFPLElBQVAsOHJCQURELEVBTUMsTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDQyxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFERCxDQU5ELENBM0tBLENBTEQsQ0FERDtBQWdNQTs7R0FwVHVCeEIsWTtVQXFFUmtELHFEOzs7S0FyRVFsRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGlsZHJlbi5qcy5kNTU2MzcxOGE3YWM3YjA4ZGQyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZSwgVHJhc2h9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucyc7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWxkcmVuRm9ybSgpIHtcclxuXHRjb25zdCBbaGFzQ2hpbGRyZW4sIHVwZGF0ZUhhc0NoaWxkcmVuXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW251bWJlck9mQ2hpbGRyZW4sIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW5dID0gdXNlU3RhdGUoW1xyXG5cdFx0eyBpZDogMSwgYWdlOiAnJyB9XHJcblx0XSk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Ly8gbW9kYWwgc3R1ZmZcclxuXHRjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlVGl0bGUgPSAoKSA9PiBzZXRTaG93VGl0bGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzaG93SG93T2xkLCBzZXRTaG93SG93T2xkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZUhvd09sZCA9ICgpID0+IHNldFNob3dIb3dPbGQoZmFsc2UpO1xyXG5cdGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuXHRjb25zdCBbc2hvd0Fza0Fib3V0Q2hpbGRyZW4sIHNldFNob3dBc2tBYm91dENoaWxkcmVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW4gPSAoKSA9PiBzZXRTaG93QXNrQWJvdXRDaGlsZHJlbihmYWxzZSk7XHJcblx0Y29uc3QgW3Nob3dQbGFubmluZ09uS2lkcywgc2V0U2hvd1BsYW5uaW5nT25LaWRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzID0gKCkgPT4gc2V0U2hvd1BsYW5uaW5nT25LaWRzKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgbm93ID0gMTU7XHJcblxyXG5cdC8vZ2V0IGRhdGEgZnJvbSBsb2NhbHN0cm9hZ2UvcmVkdXggYW5kIHNldCBTdGF0ZSB3aGVuIGNvbXBvbmVudCBtb3VudGVkXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZm9ybS5oYXNDaGlsZHJlbil7XHJcblx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZvcm0uaGFzQ2hpbGRyZW4pO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZm9ybS5jaGlsZHJlbkFnZUFycmF5ICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IGZvcm0uY2hpbGRyZW5BZ2VBcnJheSl7XHJcbiAgICAgICAgICAgIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oZm9ybS5jaGlsZHJlbkFnZUFycmF5KTtcclxuICAgICAgICB9XHJcblxyXG5cdH0sIFtdKTtcclxuXHRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL2VuYWJsZSBkaXNhYmxlIG5leHQgYnV0dG9uXHJcbiAgICAgICAgaWYoaGFzQ2hpbGRyZW4gIT09IGZhbHNlKXtcclxuXHRcdFx0aWYobnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuICE9PSB7IGlkOiAxLCBhZ2U6ICcnIH0pe1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKVxyXG5cdFx0XHRcdG51bWJlck9mQ2hpbGRyZW4ubWFwKChjaGlsZCk9PntcclxuXHRcdFx0XHRcdGlmKGNoaWxkLmFnZSAhPT0gJycpe1xyXG5cdFx0XHRcdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRJc05leHQodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHQvL2Rpc3BhdGNoIGRhdGEgdG8gbG9jYWxzdHJvYWdlL3JlZHV4IG9uIGNoYW5nZVxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk5VTUJFUl9PRl9DSElMRFJFTlwiLCBudW1iZXJPZkNoaWxkcmVuOiBudW1iZXJPZkNoaWxkcmVuIH0pO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkNISUxEUkVOX0FHRV9BUlJBWVwiLCBjaGlsZHJlbkFnZUFycmF5OiBudW1iZXJPZkNoaWxkcmVuIH0pO1xyXG5cdH0sIFtoYXNDaGlsZHJlbiwgbnVtYmVyT2ZDaGlsZHJlbl0pO1xyXG5cclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdCAgZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0ICBmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdC8vIFVwZGF0ZSBudW1iZXJPZkNoaWxkcmVuIHN0YXRlXHJcblx0ZnVuY3Rpb24gdXBkYXRlRGF0YShlLCBpZCkge1xyXG5cdFx0Ly8gR3JhYiB0aGUgaWQgb2YgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHRoZSB0eXBlZCB2YWx1ZVxyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblx0XHQvLyBGaW5kIHRoZSBpdGVtIGluIHRoZSBhcnJheSB0aGF0IGhhcyB0aGUgc2FtZSBpZFxyXG5cdFx0Ly8gQ29udmVydCB0aGUgZ3JhYmVkIGlkIGZyb20gc3RyaW5nIHRvIE51bWJlclxyXG5cdFx0Y29uc3QgaXRlbUluZGV4ID0gbnVtYmVyT2ZDaGlsZHJlbi5maW5kSW5kZXgoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKVxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBJZiB0aGUgaXRlbUluZGV4IGlzIC0xIHRoYXQgbWVhbnMgaXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYXJyYXlcclxuXHRcdGlmIChpdGVtSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBzdGF0ZVxyXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IFsuLi5udW1iZXJPZkNoaWxkcmVuXTtcclxuXHRcdFx0Ly8gVGhlIGNoaWxkIGl0ZW1cclxuXHRcdFx0Y29uc3QgY2hpbGQgPSBjaGlsZHJlbltpdGVtSW5kZXhdO1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGNoaWxkJ3MgYWdlXHJcblx0XHRcdGNoaWxkcmVuLnNwbGljZShpdGVtSW5kZXgsIDEsIHsgLi4uY2hpbGQsIGFnZTogdmFsdWUgfSk7XHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihjaGlsZHJlbik7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkKSB7XHJcblx0XHQvLyBGaW5kIHRoZSBpdGVtIGluIHRoZSBhcnJheSB0aGF0IGhhcyB0aGUgc2FtZSBpZFxyXG5cdFx0Ly8gQ29udmVydCB0aGUgZ3JhYmVkIGlkIGZyb20gc3RyaW5nIHRvIE51bWJlclxyXG5cdFx0Y29uc3QgaXRlbUluZGV4ID0gbnVtYmVyT2ZDaGlsZHJlbi5maW5kSW5kZXgoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKVxyXG5cdFx0KTtcclxuXHRcdC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBzdGF0ZVxyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBbLi4ubnVtYmVyT2ZDaGlsZHJlbl07XHJcblx0XHQvLyByZW1vdmUgdGhlIGNoaWxkIGZyb20gdGhlIGFycmF5XHJcblx0XHRjaGlsZHJlbi5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuXHRcdC8vIFVwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRyb3V0ZXIucHVzaCgnL3NlY29uZGFyeUVkdWNhdGlvbicpXHJcblx0fVxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRhd2FpdCB1cGRhdGVIYXNDaGlsZHJlbih0cnVlKTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfQ0hJTERSRU5cIiwgaGFzQ2hpbGRyZW46IHRydWUgfSk7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdHNpemU9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1RpdGxlKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjaGlsZC15ZXNcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FzeW5jICgpID0+IHtoYW5kbGVDbGljaygpfX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WWVzXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKCcvZG9iJylcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHROb1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0ey8qIHRoaXMgc2VjdGlvbiBpcyBvbmx5IHNob3duIHdoZW4gaGFzQ2hpbGRyZW4gaXMgdHJ1ZSAqL31cclxuXHRcdFx0XHR7aGFzQ2hpbGRyZW4gPT09IHRydWUgJiYgPD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gPlxyXG5cdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiaGVhZGVyXCI+SG93IG9sZCBhcmUgeW91ciBjaGlsZHJlbj8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9ezE1fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dIb3dPbGQodHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezh9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdFx0XHR7bnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuLm1hcCgoY2hpbGQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2luZGV4ID09PSAwID8gPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+e2BDaGlsZCAke2luZGV4KzF9IEFnZWB9PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXggKyA2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC0xMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjaGlsZC5hZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZURhdGEoZSwgaW5kZXgrMSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDogXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPntgQ2hpbGQgJHtpbmRleCsxfSBBZ2VgfTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4ICsgNjB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2hpbGQuYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVEYXRhKGUsIGluZGV4KzEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRBZG9ybm1lbnQ9ezxUcmFzaFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9ezMwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC0yIG10LTMgY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7IGRlbGV0ZUNoaWxkKGluZGV4KzEpO319XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5udW1iZXJPZkNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgaWQ6IG51bWJlck9mQ2hpbGRyZW4ubGVuZ3RoICsgMSwgYWdlOiAnJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdF0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0QWRkIEFkZGl0aW9uYWwgQ2hpbGRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC8+fVxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaHkgZG8gd2UgYXNrIGFib3V0IHlvdXIgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dBc2tBYm91dENoaWxkcmVuKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBjbGFzc05hbWU9XCJtdC0xXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoYXQgaWYgSSdtIHBsYW5uaW5nIG9uIGhhdmluZyBraWRzPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93UGxhbm5pbmdPbktpZHModHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHR7aGFzQ2hpbGRyZW4gPT09IHRydWUgJiYgKFxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSl9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzTmV4dH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0ey8qdGl0bGUgbW9kYWwqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dUaXRsZX0gb25IaWRlPXtoYW5kbGVDbG9zZVRpdGxlfT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5TZWxlY3Qg4oCcWWVz4oCdIGlmIHlvdSBoYXZlIGNoaWxkcmVuIG9yIGFyZSBjdXJyZW50bHkgZXhwZWN0aW5nLiBTZWxlY3Qg4oCcTm/igJ0gaWYgeW91IGRvbuKAmXQgaGF2ZSBjaGlsZHJlbiBvciBhbGwgb2YgeW91ciBjaGlsZHJlbiBhcmUgb3V0IG9mIHlvdXIgaG91c2Vob2xkIGFuZCBtb3JlIG9yIGxlc3MgZmluYW5jaWFsbHkgaW5kZXBlbmRlbnQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVRpdGxlfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHR7Lypob3cgb2RsYSByZSB1ciBjaGlsZHJlbiBtb2RhbCovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd0hvd09sZH0gb25IaWRlPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+T25seSBpbmNsdWRlIGNoaWxkcmVuIHdobyB5b3UgYXJlIGZpbmFuY2lhbGx5IHN1cHBvcnRpbmcgKHVzdWFsbHkgMjUgYW5kIHlvdW5nZXIpLiBNYWtlIHN1cmUgdG8gaW5jb3Jwb3JhdGUgeW91ciBjaGlsZHJlbiB3aGVuIHdlIGFzayBhYm91dCB5b3VyIGZpbmFuY2VzIGFuZCBleHBlbnNlcy48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSG93T2xkfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHR7Lyphc2sgYWJvdXQgY2hpbGRyZW4qL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dBc2tBYm91dENoaWxkcmVufSBvbkhpZGU9e2hhbmRsZUNsb3NlSG93T2xkfT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5MaWZlIGluc3VyYW5jZSBpcyBhbGwgYWJvdXQgcHJvdGVjdGluZyB0aGUgcGVvcGxlIHlvdSBsb3ZlLiBJZiB0aGVyZSBhcmUgcGVvcGxlIHdobyByZWx5IG9uIHlvdSBmb3IgZmluYW5jaWFsIHN1cHBvcnQsIGEgbGlmZSBpbnN1cmFuY2UgcG9saWN5IHdpbGwgbWFrZSBzdXJlIHRoZXkgaGF2ZSBlbm91Z2ggbW9uZXkgaWYgc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyB0byB5b3UgYW5kIHlvdXIgaW5jb21lIGlzIG5vIGxvbmdlciB0aGVyZS48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbn0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qYXNrIGFib3V0IGNoaWxkcmVuKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93UGxhbm5pbmdPbktpZHN9IG9uSGlkZT17aGFuZGxlQ2xvc2VQbGFubmluZ09uS2lkc30+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+SWYgeW914oCZcmUgZXhwZWN0aW5nLCBmaXJzdCBvZmYsIGNvbmdyYXR1bGF0aW9ucyEgWW91IHNob3VsZCBpbmNsdWRlIHlvdXIgZXhwZWN0ZWQgY2hpbGQgKG9yIGNoaWxkcmVuIGlmIHlvdeKAmXJlIGhhdmluZyB0d2lucyBvciB0cmlwbGV0cykgYW5kIHNwZWNpZnkg4oCcMOKAnSB3aGVuIHdlIGFzayBmb3IgeW91ciBjaGlsZHJlbuKAmXMgYWdlcy5cclxuXHJcblx0XHRcdFx0XHRIb3dldmVyLCBpZiB5b3XigJlyZSBtZXJlbHkgcGxhbm5pbmcgb24gaGF2aW5nIGNoaWxkcmVuIGluIHRoZSBmdXR1cmUsIGRvbuKAmXQgaW5jbHVkZSB0aGVtLiBVbnRpbCB5b3UgYXJlIGNlcnRhaW4gYWJvdXQgaWYgYW5kIHdoZW4geW914oCZbGwgYmUgaGF2aW5nIGNoaWxkcmVuLCBpdOKAmXMgYmVzdCB0byBub3QgaW5jbHVkZSB0aGVtIGluIHlvdXIgbmVlZHMgYXNzZXNzbWVudCB0byBlbnN1cmUgeW91IGFyZSBub3QgcGF5aW5nIGZvciBjb3ZlcmFnZSB0aGF0IHlvdSBtaWdodCBub3QgdWx0aW1hdGVseSBuZWVkLlxyXG5cclxuXHRcdFx0XHRcdFdoZW4geW91ciBmYW1pbHkgZG9lcyBncm93LCB3ZSByZWNvbW1lbmQgcmV2aXNpdGluZyB0aGUgUG9saWN5TWUgbGlmZSBpbnN1cmFuY2UgY2hlY2t1cCB0byBnZXQgdXBkYXRlZCBhZHZpY2UgYW5kIHVuZGVyc3RhbmQgaG93IHlvdXIgY292ZXJhZ2UgbmVlZHMgbWF5IGhhdmUgY2hhbmdlZC48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHN9PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=