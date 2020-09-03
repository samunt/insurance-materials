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
    } //highlight yes/no button


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoaWxkcmVuRm9ybS5qcyJdLCJuYW1lcyI6WyJDaGlsZHJlbkZvcm0iLCJ1c2VTdGF0ZSIsImhhc0NoaWxkcmVuIiwidXBkYXRlSGFzQ2hpbGRyZW4iLCJpZCIsImFnZSIsIm51bWJlck9mQ2hpbGRyZW4iLCJ1cGRhdGVOdW1iZXJPZkNoaWxkcmVuIiwiaXNOZXh0Iiwic2V0SXNOZXh0Iiwic2hvd1RpdGxlIiwic2V0U2hvd1RpdGxlIiwiaGFuZGxlQ2xvc2VUaXRsZSIsInNob3dIb3dPbGQiLCJzZXRTaG93SG93T2xkIiwiaGFuZGxlQ2xvc2VIb3dPbGQiLCJmb3JtIiwidXNlQ29udGV4dCIsIkZvcm1Db250ZXh0Iiwic2hvd0Fza0Fib3V0Q2hpbGRyZW4iLCJzZXRTaG93QXNrQWJvdXRDaGlsZHJlbiIsImhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiIsInNob3dQbGFubmluZ09uS2lkcyIsInNldFNob3dQbGFubmluZ09uS2lkcyIsImhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMiLCJub3ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJjaGlsZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwYXRjaCIsInR5cGUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2l0aG91dExhYmVsIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInRleHRGaWVsZCIsIndpZHRoIiwiY2xhc3NlcyIsIkRpc3BhdGNoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInVwZGF0ZURhdGEiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJpdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiTnVtYmVyIiwiY2hpbGRyZW4iLCJzcGxpY2UiLCJkZWxldGVDaGlsZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVz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OztHQTdUdUJ4QixZO1VBdUVSaUQscUQ7OztLQXZFUWpELFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoaWxkcmVuLmpzLjNlZTVmMzg4MjAyYTg3Y2U3NGI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0LCBGb3JtQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Gb3JtQ29udGV4dFwiO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ2lyY2xlLCBUcmFzaH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLWljb25zJztcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIFRleHRGaWVsZCwgbWFrZVN0eWxlcywgSW5wdXQsIElucHV0TGFiZWwsIEZvcm1Db250cm9sfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hpbGRyZW5Gb3JtKCkge1xyXG5cdGNvbnN0IFtoYXNDaGlsZHJlbiwgdXBkYXRlSGFzQ2hpbGRyZW5dID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbbnVtYmVyT2ZDaGlsZHJlbiwgdXBkYXRlTnVtYmVyT2ZDaGlsZHJlbl0gPSB1c2VTdGF0ZShbXHJcblx0XHR7IGlkOiAxLCBhZ2U6ICcnIH1cclxuXHRdKTtcclxuICAgIGNvbnN0IFtpc05leHQsIHNldElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHQvLyBtb2RhbCBzdHVmZlxyXG5cdGNvbnN0IFtzaG93VGl0bGUsIHNldFNob3dUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VUaXRsZSA9ICgpID0+IHNldFNob3dUaXRsZShmYWxzZSk7XHJcblx0Y29uc3QgW3Nob3dIb3dPbGQsIHNldFNob3dIb3dPbGRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlSG93T2xkID0gKCkgPT4gc2V0U2hvd0hvd09sZChmYWxzZSk7XHJcblx0Y29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG5cdGNvbnN0IFtzaG93QXNrQWJvdXRDaGlsZHJlbiwgc2V0U2hvd0Fza0Fib3V0Q2hpbGRyZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlQXNrQWJvdXRDaGlsZHJlbiA9ICgpID0+IHNldFNob3dBc2tBYm91dENoaWxkcmVuKGZhbHNlKTtcclxuXHRjb25zdCBbc2hvd1BsYW5uaW5nT25LaWRzLCBzZXRTaG93UGxhbm5pbmdPbktpZHNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IGhhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHMgPSAoKSA9PiBzZXRTaG93UGxhbm5pbmdPbktpZHMoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBub3cgPSAxNTtcclxuXHJcblx0Ly9nZXQgZGF0YSBmcm9tIGxvY2Fsc3Ryb2FnZS9yZWR1eCBhbmQgc2V0IFN0YXRlIHdoZW4gY29tcG9uZW50IG1vdW50ZWRcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGhhc0NoaWxkcmVuICE9PSBmb3JtLmhhc0NoaWxkcmVuKXtcclxuXHRcdFx0dXBkYXRlSGFzQ2hpbGRyZW4oZm9ybS5oYXNDaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZvcm0ubnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuICE9PSBmb3JtLm51bWJlck9mQ2hpbGRyZW4pe1xyXG4gICAgICAgICAgICB1cGRhdGVOdW1iZXJPZkNoaWxkcmVuKGZvcm0ubnVtYmVyT2ZDaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG5cdH0sIFtdKTtcclxuXHRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHQvL2VuYWJsZSBkaXNhYmxlIG5leHQgYnV0dG9uXHJcbiAgICAgICAgaWYoaGFzQ2hpbGRyZW4gIT09IGZhbHNlKXtcclxuXHRcdFx0aWYobnVtYmVyT2ZDaGlsZHJlbiAmJiBudW1iZXJPZkNoaWxkcmVuICE9PSB7IGlkOiAxLCBhZ2U6ICcnIH0pe1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKVxyXG5cdFx0XHRcdG51bWJlck9mQ2hpbGRyZW4ubWFwKChjaGlsZCk9PntcclxuXHRcdFx0XHRcdGlmKGNoaWxkLmFnZSAhPT0gJycpe1xyXG5cdFx0XHRcdFx0XHRzZXRJc05leHQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHNldElzTmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRJc05leHQodHJ1ZSk7XHJcblx0XHR9XHJcblx0XHQvL2hpZ2hsaWdodCB5ZXMvbm8gYnV0dG9uXHJcblx0XHRpZihoYXNDaGlsZHJlbiA9PT0gdHJ1ZSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9ZWxzZSBpZihoYXNDaGlsZHJlbiA9PT0gZmFsc2Upe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHR9XHJcblx0XHQvL2Rpc3BhdGNoIGRhdGEgdG8gbG9jYWxzdHJvYWdlL3JlZHV4IG9uIGNoYW5nZVxyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIk5VTUJFUl9PRl9DSElMRFJFTlwiLCBudW1iZXJPZkNoaWxkcmVuOiBudW1iZXJPZkNoaWxkcmVuIH0pO1xyXG5cdH0sIFtoYXNDaGlsZHJlbiwgbnVtYmVyT2ZDaGlsZHJlbl0pO1xyXG5cclxuXHRjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdCAgZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0ICBmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdC8vIFVwZGF0ZSBudW1iZXJPZkNoaWxkcmVuIHN0YXRlXHJcblx0ZnVuY3Rpb24gdXBkYXRlRGF0YShlLCBpZCkge1xyXG5cdFx0Ly8gR3JhYiB0aGUgaWQgb2YgdGhlIGlucHV0IGVsZW1lbnQgYW5kIHRoZSB0eXBlZCB2YWx1ZVxyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblx0XHQvLyBGaW5kIHRoZSBpdGVtIGluIHRoZSBhcnJheSB0aGF0IGhhcyB0aGUgc2FtZSBpZFxyXG5cdFx0Ly8gQ29udmVydCB0aGUgZ3JhYmVkIGlkIGZyb20gc3RyaW5nIHRvIE51bWJlclxyXG5cdFx0Y29uc3QgaXRlbUluZGV4ID0gbnVtYmVyT2ZDaGlsZHJlbi5maW5kSW5kZXgoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKVxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBJZiB0aGUgaXRlbUluZGV4IGlzIC0xIHRoYXQgbWVhbnMgaXQgZG9lc24ndCBleGlzdCBpbiB0aGUgYXJyYXlcclxuXHRcdGlmIChpdGVtSW5kZXggIT09IC0xKSB7XHJcblx0XHRcdC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBzdGF0ZVxyXG5cdFx0XHRjb25zdCBjaGlsZHJlbiA9IFsuLi5udW1iZXJPZkNoaWxkcmVuXTtcclxuXHRcdFx0Ly8gVGhlIGNoaWxkIGl0ZW1cclxuXHRcdFx0Y29uc3QgY2hpbGQgPSBjaGlsZHJlbltpdGVtSW5kZXhdO1xyXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGNoaWxkJ3MgYWdlXHJcblx0XHRcdGNoaWxkcmVuLnNwbGljZShpdGVtSW5kZXgsIDEsIHsgLi4uY2hpbGQsIGFnZTogdmFsdWUgfSk7XHJcblx0XHRcdC8vIFVwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihjaGlsZHJlbik7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkKSB7XHJcblx0XHQvLyBGaW5kIHRoZSBpdGVtIGluIHRoZSBhcnJheSB0aGF0IGhhcyB0aGUgc2FtZSBpZFxyXG5cdFx0Ly8gQ29udmVydCB0aGUgZ3JhYmVkIGlkIGZyb20gc3RyaW5nIHRvIE51bWJlclxyXG5cdFx0Y29uc3QgaXRlbUluZGV4ID0gbnVtYmVyT2ZDaGlsZHJlbi5maW5kSW5kZXgoXHJcblx0XHRcdGl0ZW0gPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGlkKVxyXG5cdFx0KTtcclxuXHRcdC8vIE1ha2UgYSBjb3B5IG9mIHRoZSBzdGF0ZVxyXG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBbLi4ubnVtYmVyT2ZDaGlsZHJlbl07XHJcblx0XHQvLyByZW1vdmUgdGhlIGNoaWxkIGZyb20gdGhlIGFycmF5XHJcblx0XHRjaGlsZHJlbi5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuXHRcdC8vIFVwZGF0ZSB0aGUgc3RhdGVcclxuXHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oY2hpbGRyZW4pO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRyb3V0ZXIucHVzaCgnL3NlY29uZGFyeUVkdWNhdGlvbicpXHJcblx0fVxyXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQteWVzJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX2J1dHRvbicpXHJcblx0XHRhd2FpdCB1cGRhdGVIYXNDaGlsZHJlbih0cnVlKTtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogXCJIQVNfQ0hJTERSRU5cIiwgaGFzQ2hpbGRyZW46IHRydWUgfSk7XHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3ttYXJnaW46JzEwcHggYXV0byd9fT5cclxuXHRcdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3R5bGU9e3ttYXJnaW5Ub3A6JzQwcHgnfX0+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+RG8geW91IGhhdmUgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdDxRdWVzdGlvbkNpcmNsZVxyXG5cdFx0XHRcdFx0XHRcdHNpemU9ezIwfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1RpdGxlKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJjaGlsZC15ZXNcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2FzeW5jICgpID0+IHtoYW5kbGVDbGljaygpfX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0WWVzXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiY2hpbGQtbm9cIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUhhc0NoaWxkcmVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVwZGF0ZU51bWJlck9mQ2hpbGRyZW4oW3tpZDogMSwgYWdlOiAnJ31dKVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiBcIkhBU19DSElMRFJFTlwiLCBoYXNDaGlsZHJlbjogZmFsc2UgfSk7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaCh7IHR5cGU6IFwiTlVNQkVSX09GX0NISUxEUkVOXCIsIG51bWJlck9mQ2hpbGRyZW46IFt7aWQ6IDEsIGFnZTogJyd9XSB9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGlsZC15ZXMnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hpbGQtbm8nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfYnV0dG9uJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRyb3V0ZXIucHVzaCgnL2RvYicpXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiY29udGFpbmVkXCJcclxuXHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Tm9cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdHsvKiB0aGlzIHNlY3Rpb24gaXMgb25seSBzaG93biB3aGVuIGhhc0NoaWxkcmVuIGlzIHRydWUgKi99XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIDw+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9ID5cclxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImhlYWRlclwiPkhvdyBvbGQgYXJlIHlvdXIgY2hpbGRyZW4/Jm5ic3A7Jm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPXsxNX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93SG93T2xkKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2g1PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdFx0e251bWJlck9mQ2hpbGRyZW4gJiYgbnVtYmVyT2ZDaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0ga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpbmRleCA9PT0gMCA/IDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPntgQ2hpbGQgJHtpbmRleCsxfSBBZ2VgfTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4ICsgNjB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtMTJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2hpbGQuYWdlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVEYXRhKGUsIGluZGV4KzEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj57YENoaWxkICR7aW5kZXgrMX0gQWdlYH08L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleCArIDYwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLTEyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2NoaWxkLmFnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRGF0YShlLCBpbmRleCsxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW5kQWRvcm5tZW50PXs8VHJhc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPXszMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtc20tMiBjb2wtMiBtdC0zIGN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4geyBkZWxldGVDaGlsZChpbmRleCsxKTt9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0gY2xhc3NOYW1lPVwibXQtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9ID5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlTnVtYmVyT2ZDaGlsZHJlbihbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ubnVtYmVyT2ZDaGlsZHJlbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGlkOiBudW1iZXJPZkNoaWxkcmVuLmxlbmd0aCArIDEsIGFnZTogJycgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRdKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPVwibGdcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdEFkZCBBZGRpdGlvbmFsIENoaWxkXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvPn1cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+V2h5IGRvIHdlIGFzayBhYm91dCB5b3VyIGNoaWxkcmVuPyZuYnNwOyZuYnNwO1xyXG5cdFx0XHRcdFx0XHQ8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtzZXRTaG93QXNrQWJvdXRDaGlsZHJlbih0cnVlKX19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gY2xhc3NOYW1lPVwibXQtMVwiPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaGF0IGlmIEknbSBwbGFubmluZyBvbiBoYXZpbmcga2lkcz8mbmJzcDsmbmJzcDtcclxuXHRcdFx0XHRcdFx0PFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1BsYW5uaW5nT25LaWRzKHRydWUpfX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0e2hhc0NoaWxkcmVuID09PSB0cnVlICYmIChcclxuXHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpPT57aGFuZGxlU3VibWl0KGUpfX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cImxnXCJcclxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtpc05leHR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdHsvKnRpdGxlIG1vZGFsKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93VGl0bGV9IG9uSGlkZT17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+U2VsZWN0IOKAnFllc+KAnSBpZiB5b3UgaGF2ZSBjaGlsZHJlbiBvciBhcmUgY3VycmVudGx5IGV4cGVjdGluZy4gU2VsZWN0IOKAnE5v4oCdIGlmIHlvdSBkb27igJl0IGhhdmUgY2hpbGRyZW4gb3IgYWxsIG9mIHlvdXIgY2hpbGRyZW4gYXJlIG91dCBvZiB5b3VyIGhvdXNlaG9sZCBhbmQgbW9yZSBvciBsZXNzIGZpbmFuY2lhbGx5IGluZGVwZW5kZW50LjwvTW9kYWwuQm9keT5cclxuXHRcdFx0XHQ8TW9kYWwuRm9vdGVyPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VUaXRsZX0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qaG93IG9kbGEgcmUgdXIgY2hpbGRyZW4gbW9kYWwqL31cclxuXHRcdFx0PE1vZGFsIHNob3c9e3Nob3dIb3dPbGR9IG9uSGlkZT17aGFuZGxlQ2xvc2VIb3dPbGR9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5Pk9ubHkgaW5jbHVkZSBjaGlsZHJlbiB3aG8geW91IGFyZSBmaW5hbmNpYWxseSBzdXBwb3J0aW5nICh1c3VhbGx5IDI1IGFuZCB5b3VuZ2VyKS4gTWFrZSBzdXJlIHRvIGluY29ycG9yYXRlIHlvdXIgY2hpbGRyZW4gd2hlbiB3ZSBhc2sgYWJvdXQgeW91ciBmaW5hbmNlcyBhbmQgZXhwZW5zZXMuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0XHRcdENsb3NlXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L01vZGFsLkZvb3Rlcj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdFx0ey8qYXNrIGFib3V0IGNoaWxkcmVuKi99XHJcblx0XHRcdDxNb2RhbCBzaG93PXtzaG93QXNrQWJvdXRDaGlsZHJlbn0gb25IaWRlPXtoYW5kbGVDbG9zZUhvd09sZH0+XHJcblx0XHRcdFx0PE1vZGFsLkJvZHk+TGlmZSBpbnN1cmFuY2UgaXMgYWxsIGFib3V0IHByb3RlY3RpbmcgdGhlIHBlb3BsZSB5b3UgbG92ZS4gSWYgdGhlcmUgYXJlIHBlb3BsZSB3aG8gcmVseSBvbiB5b3UgZm9yIGZpbmFuY2lhbCBzdXBwb3J0LCBhIGxpZmUgaW5zdXJhbmNlIHBvbGljeSB3aWxsIG1ha2Ugc3VyZSB0aGV5IGhhdmUgZW5vdWdoIG1vbmV5IGlmIHNvbWV0aGluZyB1bmV4cGVjdGVkIGhhcHBlbnMgdG8geW91IGFuZCB5b3VyIGluY29tZSBpcyBubyBsb25nZXIgdGhlcmUuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZUFza0Fib3V0Q2hpbGRyZW59PlxyXG5cdFx0XHRcdFx0XHRDbG9zZVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Nb2RhbC5Gb290ZXI+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHRcdHsvKmFzayBhYm91dCBjaGlsZHJlbiovfVxyXG5cdFx0XHQ8TW9kYWwgc2hvdz17c2hvd1BsYW5uaW5nT25LaWRzfSBvbkhpZGU9e2hhbmRsZUNsb3NlUGxhbm5pbmdPbktpZHN9PlxyXG5cdFx0XHRcdDxNb2RhbC5Cb2R5PklmIHlvdeKAmXJlIGV4cGVjdGluZywgZmlyc3Qgb2ZmLCBjb25ncmF0dWxhdGlvbnMhIFlvdSBzaG91bGQgaW5jbHVkZSB5b3VyIGV4cGVjdGVkIGNoaWxkIChvciBjaGlsZHJlbiBpZiB5b3XigJlyZSBoYXZpbmcgdHdpbnMgb3IgdHJpcGxldHMpIGFuZCBzcGVjaWZ5IOKAnDDigJ0gd2hlbiB3ZSBhc2sgZm9yIHlvdXIgY2hpbGRyZW7igJlzIGFnZXMuXHJcblxyXG5cdFx0XHRcdFx0SG93ZXZlciwgaWYgeW914oCZcmUgbWVyZWx5IHBsYW5uaW5nIG9uIGhhdmluZyBjaGlsZHJlbiBpbiB0aGUgZnV0dXJlLCBkb27igJl0IGluY2x1ZGUgdGhlbS4gVW50aWwgeW91IGFyZSBjZXJ0YWluIGFib3V0IGlmIGFuZCB3aGVuIHlvdeKAmWxsIGJlIGhhdmluZyBjaGlsZHJlbiwgaXTigJlzIGJlc3QgdG8gbm90IGluY2x1ZGUgdGhlbSBpbiB5b3VyIG5lZWRzIGFzc2Vzc21lbnQgdG8gZW5zdXJlIHlvdSBhcmUgbm90IHBheWluZyBmb3IgY292ZXJhZ2UgdGhhdCB5b3UgbWlnaHQgbm90IHVsdGltYXRlbHkgbmVlZC5cclxuXHJcblx0XHRcdFx0XHRXaGVuIHlvdXIgZmFtaWx5IGRvZXMgZ3Jvdywgd2UgcmVjb21tZW5kIHJldmlzaXRpbmcgdGhlIFBvbGljeU1lIGxpZmUgaW5zdXJhbmNlIGNoZWNrdXAgdG8gZ2V0IHVwZGF0ZWQgYWR2aWNlIGFuZCB1bmRlcnN0YW5kIGhvdyB5b3VyIGNvdmVyYWdlIG5lZWRzIG1heSBoYXZlIGNoYW5nZWQuPC9Nb2RhbC5Cb2R5PlxyXG5cdFx0XHRcdDxNb2RhbC5Gb290ZXI+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVBsYW5uaW5nT25LaWRzfT5cclxuXHRcdFx0XHRcdFx0Q2xvc2VcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTW9kYWwuRm9vdGVyPlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9