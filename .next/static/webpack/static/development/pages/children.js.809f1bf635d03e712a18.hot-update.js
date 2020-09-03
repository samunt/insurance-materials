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

    if (form.numberOfChildren && numberOfChildren !== form.numberOfChildren) {
      updateNumberOfChildren(form.numberOfChildren);
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
      updateNumberOfChildren([{
        id: 1,
        age: ''
      }]);
      dispatch({
        type: "HAS_CHILDREN",
        hasChildren: false
      });
      dispatch({
        type: "NUMBER_OF_CHILDREN",
        numberOfChildren: [{
          id: 1,
          age: ''
        }]
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcyJdLCJuYW1lcyI6WyJDaGlsZHJlbkZvcm0iLCJ1c2VTdGF0ZSIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJpZCIsImFnZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dIb3dPbGQiLCJzZXRTaG93SG93T2xkIiwiaGFuZGxlQ2xvc2VIb3dPbGQiLCJmb3JtIiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0Iiwic2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJzZXRTaG93QXNrQWJvdXRDaGlsZHJlbiIsImhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiIsInNob3dQbGFubmluZ09uS2lkcyIsInNldFNob3dQbGFubmluZ09uS2lkcyIsImhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMiLCJub3ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJjaGlsZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwYXRjaCIsInR5cGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsIkRpc3BhdGNoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVwZGF0ZURhdGEiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJpdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiTnVtYmVyIiwiY2hpbGRyZW4iLCJzcGxpY2UiLCJkZWxldGVDaGlsZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVz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QXVFUmlELHFEOzs7S0F2RVFqRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGlsZHJlbi5qcy44MDlmMWJmNjM1ZDAzZTcxMmExOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IERpc3BhdGNoQ29udGV4dCwgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZSwgVHJhc2h9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucyc7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIG1ha2VTdHlsZXMsIElucHV0LCBJbnB1dExhYmVsLCBGb3JtQ29udHJvbH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWxkcmVuRm9ybSgpIHtcclxuXHRjb25zdCBbaGFzQ2hpbGRyZW4sIHVwZGF0ZUhhc0NoaWxkcmVuXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgW251bWJlck9mQ2hpbGRyZW4sIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW5dID0gdXNlU3RhdGUoW1xyXG5cdFx0eyBpZDogMSwgYWdlOiAnJyB9XHJcblx0XSk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblx0Ly8gbW9kYWwgc3R1ZmZcclxuXHRjb25zdCBbc2hvd1RpdGxlLCBzZXRTaG93VGl0bGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlVGl0bGUgPSAoKSA9PiBzZXRTaG93VGl0bGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzaG93SG93T2xkLCBzZXRTaG93SG93T2xkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZUhvd09sZCA9ICgpID0+IHNldFNob3dIb3dPbGQoZmFsc2UpO1xyXG5cdGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuXHRjb25zdCBbc2hvd0Fza0Fib3V0Q2hpbGRyZW4sIHNldFNob3dBc2tBYm91dENoaWxkcmVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW4gPSAoKSA9PiBzZXRTaG93QXNrQWJvdXRDaGlsZHJlbihmYWxzZSk7XHJcblx0Y29uc3QgW3Nob3dQbGFubmluZ09uS2lkcywgc2V0U2hvd1BsYW5uaW5nT25LaWRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzID0gKCkgPT4gc2V0U2hvd1BsYW5uaW5nT25LaWRzKGZhbHNlKTtcclxuXHJcblx0Y29uc3Qgbm93ID0gMTU7XHJcblxyXG5cdC8vZ2V0IGRhdGEgZnJvbSBsb2NhbHN0cm9hZ2UvcmVkdXggYW5kIHNldCBTdGF0ZSB3aGVuIGNvbXBvbmVudCBtb3VudGVkXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZm9ybS5oYXNDaGlsZHJlbil7XHJcblx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZvcm0uaGFzQ2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoZm9ybS5udW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IGZvcm0ubnVtYmVyT2ZDaGlsZHJlbil7XHJcbiAgICAgICAgICAgIHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oZm9ybS5udW1iZXJPZkNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcblx0fSwgW10pO1xyXG5cdFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdC8vZW5hYmxlIGRpc2FibGUgbmV4dCBidXR0b25cclxuICAgICAgICBpZihoYXNDaGlsZHJlbiAhPT0gZmFsc2Upe1xyXG5cdFx0XHRpZihudW1iZXJPZkNoaWxkcmVuICYmIG51bWJlck9mQ2hpbGRyZW4gIT09IHsgaWQ6IDEsIGFnZTogJycgfSl7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpXHJcblx0XHRcdFx0bnVtYmVyT2ZDaGlsZHJlbi5tYXAoKGNoaWxkKT0+e1xyXG5cdFx0XHRcdFx0aWYoY2hpbGQuYWdlICE9PSAnJyl7XHJcblx0XHRcdFx0XHRcdHNldElzTmV4dChmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0c2V0SXNOZXh0KHRydWUpO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKTtcclxuXHRcdH1cclxuXHRcdGlmKGhhc0NoaWxkcmVuID09PSB0cnVlKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoaWxkLXllcycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1lbHNlIGlmKGhhc0NoaWxkcmVuID09PSBmYWxzZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdH1cclxuXHRcdC8vZGlzcGF0Y2ggZGF0YSB0byBsb2NhbHN0cm9hZ2UvcmVkdXggb24gY2hhbmdlXHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTlVNQkVSX09GX0NISUxEUkVOXCIsIG51bWJlck9mQ2hpbGRyZW46IG51bWJlck9mQ2hpbGRyZW4gfSk7XHJcblx0fSwgW2hhc0NoaWxkcmVuLCBudW1iZXJPZkNoaWxkcmVuXSk7XHJcblxyXG5cdGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0ICBkaXNwbGF5OiAnZmxleCcsXHJcblx0XHQgIGZsZXhXcmFwOiAnd3JhcCcsXHJcblx0XHR9LFxyXG5cdFx0d2l0aG91dExhYmVsOiB7XHJcblx0XHQgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdH0sXHJcblx0XHR0ZXh0RmllbGQ6IHtcclxuXHRcdCAgd2lkdGg6ICcyNWNoJyxcclxuXHRcdH0sXHJcblx0fSkpO1xyXG5cdFxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Ly8gVXBkYXRlIG51bWJlck9mQ2hpbGRyZW4gc3RhdGVcclxuXHRmdW5jdGlvbiB1cGRhdGVEYXRhKGUsIGlkKSB7XHJcblx0XHQvLyBHcmFiIHRoZSBpZCBvZiB0aGUgaW5wdXQgZWxlbWVudCBhbmQgdGhlIHR5cGVkIHZhbHVlXHJcblx0XHRjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHRcdC8vIEZpbmQgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IHRoYXQgaGFzIHRoZSBzYW1lIGlkXHJcblx0XHQvLyBDb252ZXJ0IHRoZSBncmFiZWQgaWQgZnJvbSBzdHJpbmcgdG8gTnVtYmVyXHJcblx0XHRjb25zdCBpdGVtSW5kZXggPSBudW1iZXJPZkNoaWxkcmVuLmZpbmRJbmRleChcclxuXHRcdFx0aXRlbSA9PiBpdGVtLmlkID09PSBOdW1iZXIoaWQpXHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIElmIHRoZSBpdGVtSW5kZXggaXMgLTEgdGhhdCBtZWFucyBpdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBhcnJheVxyXG5cdFx0aWYgKGl0ZW1JbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0Ly8gTWFrZSBhIGNvcHkgb2YgdGhlIHN0YXRlXHJcblx0XHRcdGNvbnN0IGNoaWxkcmVuID0gWy4uLm51bWJlck9mQ2hpbGRyZW5dO1xyXG5cdFx0XHQvLyBUaGUgY2hpbGQgaXRlbVxyXG5cdFx0XHRjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2l0ZW1JbmRleF07XHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgY2hpbGQncyBhZ2VcclxuXHRcdFx0Y2hpbGRyZW4uc3BsaWNlKGl0ZW1JbmRleCwgMSwgeyAuLi5jaGlsZCwgYWdlOiB2YWx1ZSB9KTtcclxuXHRcdFx0Ly8gVXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0XHR1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKGNoaWxkcmVuKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gZGVsZXRlQ2hpbGQoaWQpIHtcclxuXHRcdC8vIEZpbmQgdGhlIGl0ZW0gaW4gdGhlIGFycmF5IHRoYXQgaGFzIHRoZSBzYW1lIGlkXHJcblx0XHQvLyBDb252ZXJ0IHRoZSBncmFiZWQgaWQgZnJvbSBzdHJpbmcgdG8gTnVtYmVyXHJcblx0XHRjb25zdCBpdGVtSW5kZXggPSBudW1iZXJPZkNoaWxkcmVuLmZpbmRJbmRleChcclxuXHRcdFx0aXRlbSA9PiBpdGVtLmlkID09PSBOdW1iZXIoaWQpXHJcblx0XHQpO1xyXG5cdFx0Ly8gTWFrZSBhIGNvcHkgb2YgdGhlIHN0YXRlXHJcblx0XHRjb25zdCBjaGlsZHJlbiA9IFsuLi5udW1iZXJPZkNoaWxkcmVuXTtcclxuXHRcdC8vIHJlbW92ZSB0aGUgY2hpbGQgZnJvbSB0aGUgYXJyYXlcclxuXHRcdGNoaWxkcmVuLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG5cdFx0Ly8gVXBkYXRlIHRoZSBzdGF0ZVxyXG5cdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihjaGlsZHJlbik7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHJvdXRlci5wdXNoKCcvc2Vjb25kYXJ5RWR1Y2F0aW9uJylcclxuXHR9XHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKXtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC1ubycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJylcclxuXHRcdGF3YWl0IHVwZGF0ZUhhc0NoaWxkcmVuKHRydWUpO1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkhBU19DSElMRFJFTlwiLCBoYXNDaGlsZHJlbjogdHJ1ZSB9KTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT0naGVhZGVyJz5EbyB5b3UgaGF2ZSBjaGlsZHJlbj8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT17MjB9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93VGl0bGUodHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cImNoaWxkLXllc1wiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17YXN5bmMgKCkgPT4ge2hhbmRsZUNsaWNrKCl9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRZZXNcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjaGlsZC1ub1wiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlSGFzQ2hpbGRyZW4oZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihbe2lkOiAxLCBhZ2U6ICcnfV0pXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiSEFTX0NISUxEUkVOXCIsIGhhc0NoaWxkcmVuOiBmYWxzZSB9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHsgdHlwZTogXCJOVU1CRVJfT0ZfQ0hJTERSRU5cIiwgbnVtYmVyT2ZDaGlsZHJlbjogW3tpZDogMSwgYWdlOiAnJ31dIH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoaWxkLXllcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC1ubycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9idXR0b24nKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKCcvZG9iJylcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHROb1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0ey8qIHRoaXMgc2VjdGlvbiBpcyBvbmx5IHNob3duIHdoZW4gaGFzQ2hpbGRyZW4gaXMgdHJ1ZSAqL31cclxuXHRcdFx0XHR7aGFzQ2hpbGRyZW4gPT09IHRydWUgJiYgPD5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gPlxyXG5cdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiaGVhZGVyXCI+SG93IG9sZCBhcmUgeW91ciBjaGlsZHJlbj8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9ezE1fVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dIb3dPbGQodHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvaDU+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezh9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdFx0XHR7bnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuLm1hcCgoY2hpbGQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2luZGV4ID09PSAwID8gPEZvcm1Db250cm9sIGZ1bGxXaWR0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+e2BDaGlsZCAke2luZGV4KzF9IEFnZWB9PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXggKyA2MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC0xMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtjaGlsZC5hZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZURhdGEoZSwgaW5kZXgrMSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDogXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPntgQ2hpbGQgJHtpbmRleCsxfSBBZ2VgfTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4ICsgNjB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2hpbGQuYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVEYXRhKGUsIGluZGV4KzEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbmRBZG9ybm1lbnQ9ezxUcmFzaFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9ezMwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbC0yIG10LTMgY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiB7IGRlbGV0ZUNoaWxkKGluZGV4KzEpO319XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfSBjbGFzc05hbWU9XCJtdC00XCI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5udW1iZXJPZkNoaWxkcmVuLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgaWQ6IG51bWJlck9mQ2hpbGRyZW4ubGVuZ3RoICsgMSwgYWdlOiAnJyB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdF0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9XCJsZ1wiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0QWRkIEFkZGl0aW9uYWwgQ2hpbGRcclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC8+fVxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaHkgZG8gd2UgYXNrIGFib3V0IHlvdXIgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge3NldFNob3dBc2tBYm91dENoaWxkcmVuKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBjbGFzc05hbWU9XCJtdC0xXCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoYXQgaWYgSSdtIHBsYW5uaW5nIG9uIGhhdmluZyBraWRzPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93UGxhbm5pbmdPbktpZHModHJ1ZSl9fVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHR7aGFzQ2hpbGRyZW4gPT09IHRydWUgJiYgKFxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSk9PntoYW5kbGVTdWJtaXQoZSl9fVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e2lzTmV4dH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0ey8qdGl0bGUgbW9kYWwqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dUaXRsZX0gb25IaWRlPXtoYW5kbGVDbG9zZVRpdGxlfT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5TZWxlY3Qg4oCcWWVz4oCdIGlmIHlvdSBoYXZlIGNoaWxkcmVuIG9yIGFyZSBjdXJyZW50bHkgZXhwZWN0aW5nLiBTZWxlY3Qg4oCcTm/igJ0gaWYgeW91IGRvbuKAmXQgaGF2ZSBjaGlsZHJlbiBvciBhbGwgb2YgeW91ciBjaGlsZHJlbiBhcmUgb3V0IG9mIHlvdXIgaG91c2Vob2xkIGFuZCBtb3JlIG9yIGxlc3MgZmluYW5jaWFsbHkgaW5kZXBlbmRlbnQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVRpdGxlfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHR7Lypob3cgb2RsYSByZSB1ciBjaGlsZHJlbiBtb2RhbCovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd0hvd09sZH0gb25IaWRlPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+T25seSBpbmNsdWRlIGNoaWxkcmVuIHdobyB5b3UgYXJlIGZpbmFuY2lhbGx5IHN1cHBvcnRpbmcgKHVzdWFsbHkgMjUgYW5kIHlvdW5nZXIpLiBNYWtlIHN1cmUgdG8gaW5jb3Jwb3JhdGUgeW91ciBjaGlsZHJlbiB3aGVuIHdlIGFzayBhYm91dCB5b3VyIGZpbmFuY2VzIGFuZCBleHBlbnNlcy48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSG93T2xkfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHR7Lyphc2sgYWJvdXQgY2hpbGRyZW4qL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dBc2tBYm91dENoaWxkcmVufSBvbkhpZGU9e2hhbmRsZUNsb3NlSG93T2xkfT5cclxuXHRcdFx0XHQ8TW9kYWwuQm9keT5MaWZlIGluc3VyYW5jZSBpcyBhbGwgYWJvdXQgcHJvdGVjdGluZyB0aGUgcGVvcGxlIHlvdSBsb3ZlLiBJZiB0aGVyZSBhcmUgcGVvcGxlIHdobyByZWx5IG9uIHlvdSBmb3IgZmluYW5jaWFsIHN1cHBvcnQsIGEgbGlmZSBpbnN1cmFuY2UgcG9saWN5IHdpbGwgbWFrZSBzdXJlIHRoZXkgaGF2ZSBlbm91Z2ggbW9uZXkgaWYgc29tZXRoaW5nIHVuZXhwZWN0ZWQgaGFwcGVucyB0byB5b3UgYW5kIHlvdXIgaW5jb21lIGlzIG5vIGxvbmdlciB0aGVyZS48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbn0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qYXNrIGFib3V0IGNoaWxkcmVuKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93UGxhbm5pbmdPbktpZHN9IG9uSGlkZT17aGFuZGxlQ2xvc2VQbGFubmluZ09uS2lkc30+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+SWYgeW914oCZcmUgZXhwZWN0aW5nLCBmaXJzdCBvZmYsIGNvbmdyYXR1bGF0aW9ucyEgWW91IHNob3VsZCBpbmNsdWRlIHlvdXIgZXhwZWN0ZWQgY2hpbGQgKG9yIGNoaWxkcmVuIGlmIHlvdeKAmXJlIGhhdmluZyB0d2lucyBvciB0cmlwbGV0cykgYW5kIHNwZWNpZnkg4oCcMOKAnSB3aGVuIHdlIGFzayBmb3IgeW91ciBjaGlsZHJlbuKAmXMgYWdlcy5cclxuXHJcblx0XHRcdFx0XHRIb3dldmVyLCBpZiB5b3XigJlyZSBtZXJlbHkgcGxhbm5pbmcgb24gaGF2aW5nIGNoaWxkcmVuIGluIHRoZSBmdXR1cmUsIGRvbuKAmXQgaW5jbHVkZSB0aGVtLiBVbnRpbCB5b3UgYXJlIGNlcnRhaW4gYWJvdXQgaWYgYW5kIHdoZW4geW914oCZbGwgYmUgaGF2aW5nIGNoaWxkcmVuLCBpdOKAmXMgYmVzdCB0byBub3QgaW5jbHVkZSB0aGVtIGluIHlvdXIgbmVlZHMgYXNzZXNzbWVudCB0byBlbnN1cmUgeW91IGFyZSBub3QgcGF5aW5nIGZvciBjb3ZlcmFnZSB0aGF0IHlvdSBtaWdodCBub3QgdWx0aW1hdGVseSBuZWVkLlxyXG5cclxuXHRcdFx0XHRcdFdoZW4geW91ciBmYW1pbHkgZG9lcyBncm93LCB3ZSByZWNvbW1lbmQgcmV2aXNpdGluZyB0aGUgUG9saWN5TWUgbGlmZSBpbnN1cmFuY2UgY2hlY2t1cCB0byBnZXQgdXBkYXRlZCBhZHZpY2UgYW5kIHVuZGVyc3RhbmQgaG93IHlvdXIgY292ZXJhZ2UgbmVlZHMgbWF5IGhhdmUgY2hhbmdlZC48L01vZGFsLkJvZHk+XHJcblx0XHRcdFx0PE1vZGFsLkZvb3Rlcj5cclxuXHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHN9PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=