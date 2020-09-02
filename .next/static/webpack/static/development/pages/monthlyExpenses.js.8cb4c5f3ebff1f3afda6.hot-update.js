webpackHotUpdate("static\\development\\pages\\monthlyExpenses.js",{

/***/ "./components/MonthlyExpensesForm.js":
/*!*******************************************!*\
  !*** ./components/MonthlyExpensesForm.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonthlyExpensesForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/FormContext */ "./contexts/FormContext.js");
/* harmony import */ var react_bootstrap_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/InputGroup */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap-icons */ "./node_modules/react-bootstrap-icons/dist/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function MonthlyExpensesForm() {
  _s();

  // localstorage keys
  var rent;
  var mortgageCurr;
  var mortgageMonthly;
  var mortgageCombined; // hooks definitions

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["DispatchContext"]);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_FormContext__WEBPACK_IMPORTED_MODULE_2__["FormContext"]); // progress

  var now = 95;
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
    return {
      root: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      margin: {
        margin: theme.spacing(1)
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
  mortgageCurr = form.mortgageCurrentBalance !== '' ? parseInt(form.mortgageCurrentBalance) : '';
  mortgageMonthly = form.mortgageMonthlyPayment !== '' ? parseInt(form.mortgageMonthlyPayment) : '';
  rent = form.monthlyRent;
  mortgageCombined = mortgageCurr + mortgageMonthly; // modal

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showWhyExpensesLookHigh = _useState[0],
      setShowWhyExpensesLookHigh = _useState[1];

  var handleCloseWhyExpensesLookHigh = function handleCloseWhyExpensesLookHigh() {
    return setShowWhyExpensesLookHigh(false);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseMortgage = _useState2[0],
      setShowExpenseMortgage = _useState2[1];

  var handleCloseShowExpenseMortgage = function handleCloseShowExpenseMortgage() {
    return setShowExpenseMortgage(false);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseHousing = _useState3[0],
      setShowExpenseHousing = _useState3[1];

  var handleCloseShowExpenseHousing = function handleCloseShowExpenseHousing() {
    return setShowExpenseHousing(false);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpensePhone = _useState4[0],
      setShowExpensePhone = _useState4[1];

  var handleCloseShowExpensePhone = function handleCloseShowExpensePhone() {
    return setShowExpensePhone(false);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseGroceries = _useState5[0],
      setShowExpenseGroceries = _useState5[1];

  var handleCloseShowExpenseGroceries = function handleCloseShowExpenseGroceries() {
    return setShowExpenseGroceries(false);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseShopping = _useState6[0],
      setShowExpenseShopping = _useState6[1];

  var handleCloseShowExpenseShopping = function handleCloseShowExpenseShopping() {
    return setShowExpenseShopping(false);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseCars = _useState7[0],
      setShowExpenseCars = _useState7[1];

  var handleCloseShowExpenseCars = function handleCloseShowExpenseCars() {
    return setShowExpenseCars(false);
  };

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showChildcare = _useState8[0],
      setShowChildcare = _useState8[1];

  var handleCloseShowChildcare = function handleCloseShowChildcare() {
    return setShowChildcare(false);
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseDiscretionary = _useState9[0],
      setShowExpenseDiscretionary = _useState9[1];

  var handleCloseShowExpenseDiscretionary = function handleCloseShowExpenseDiscretionary() {
    return setShowExpenseDiscretionary(false);
  };

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showExpenseOther = _useState10[0],
      setShowExpenseOther = _useState10[1];

  var handleCloseShowExpenseOther = function handleCloseShowExpenseOther() {
    return setShowExpenseOther(false);
  }; // local state setup


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(rent > 0 ? rent : mortgageCombined),
      expenseMortgageAndRent = _useState11[0],
      setExpenseMortgageAndRent = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1000),
      expenseHousingBillsUtilities = _useState12[0],
      setExpenseHousingBillsUtilities = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(700),
      expenseGroceriesRestaurantsAlcohol = _useState13[0],
      setExpenseGroceriesRestaurantsAlcohol = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100),
      expensePhoneInternetCable = _useState14[0],
      setExpensePhoneInternetCable = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(700),
      expenseShoppingFitnessGrooming = _useState15[0],
      setExpenseShoppingFitnessGrooming = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(450),
      expenseCarsTaxisPublicTransit = _useState16[0],
      setExpenseCarsTaxisPublicTransit = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      expenseChildcareEducation = _useState17[0],
      setExpenseChildcareEducation = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(450),
      expenseDiscretionaryTravelRecGifts = _useState18[0],
      setExpenseDiscretionaryTravelRecGifts = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      expenseOther = _useState19[0],
      setExpenseOther = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isNext = _useState20[0],
      setIsNext = _useState20[1]; // calculate total expenses


  var total = expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther; // use total as default state

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(total),
      expenseTotal = _useState21[0],
      setExpenseTotal = _useState21[1]; //effects for context api


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setExpenseTotal(expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setExpenseTotal(expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther);

    if (expenseTotal > 0) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
  }, [expenseOther, expenseTotal, expenseDiscretionaryTravelRecGifts, expenseChildcareEducation, expenseCarsTaxisPublicTransit, expenseShoppingFitnessGrooming, expensePhoneInternetCable, expenseGroceriesRestaurantsAlcohol, expenseHousingBillsUtilities, expenseMortgageAndRent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_MORTGAGE_RENT",
      expenseMortgageAndRent: expenseMortgageAndRent
    });
  }, [expenseMortgageAndRent]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_HOUSING_BILLS_UTILITIES",
      expenseHousingBillsUtilities: expenseHousingBillsUtilities
    });
  }, [expenseHousingBillsUtilities]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL",
      expenseGroceriesRestaurantsAlcohol: expenseGroceriesRestaurantsAlcohol
    });
  }, [expenseGroceriesRestaurantsAlcohol]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_PHONE_INTERNET_CABLE",
      expensePhoneInternetCable: expensePhoneInternetCable
    });
  }, [expensePhoneInternetCable]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_SHOPPING_FITNESS_GROOMING",
      expenseShoppingFitnessGrooming: expenseShoppingFitnessGrooming
    });
  }, [expenseShoppingFitnessGrooming]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_CARS_TAXIS_TRANSIT",
      expenseCarsTaxisPublicTransit: expenseCarsTaxisPublicTransit
    });
  }, [expenseCarsTaxisPublicTransit]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_CHILDCARE_EDUCATION",
      expenseChildcareEducation: expenseChildcareEducation
    });
  }, [expenseChildcareEducation]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS",
      expenseDiscretionaryTravelRecGifts: expenseDiscretionaryTravelRecGifts
    });
  }, [expenseDiscretionaryTravelRecGifts]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_OTHER",
      expenseOther: expenseOther
    });
  }, [expenseOther]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: "EXPENSE_TOTAL",
      expenseTotal: expenseTotal
    });
  }, [expenseTotal]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    style: {
      margin: '10px auto'
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ProgressBar"], {
    style: {
      height: '0.5rem'
    },
    animated: true,
    striped: true,
    variant: "info",
    label: "".concat(now, "% Done"),
    now: now
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    maxWidth: "sm",
    style: {
      marginTop: '40px'
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("h4", {
    className: "header"
  }, "What are your monthly expenses?")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("p", {
    className: "text-justify"
  }, "Below, we\u2019ve estimated your family\u2019s expenses based on the spending patterns of millions of Canadians. If any of these estimates seem too high or too low, please edit them.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    xs: 12,
    sm: 12,
    justify: "center",
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Mortgage and rent"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseMortgageAndRent,
    type: "number",
    onChange: function onChange(e) {
      setExpenseMortgageAndRent(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseMortgage(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx("p", {
    htmlFor: "standard-adornment-amount"
  }, "Housing bills & utilities"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseHousingBillsUtilities,
    type: "number",
    onChange: function onChange(e) {
      setExpenseHousingBillsUtilities(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseHousing(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Phone, Internet, Cable"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expensePhoneInternetCable,
    type: "number",
    onChange: function onChange(e) {
      setExpensePhoneInternetCable(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpensePhone(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Groceries, restaurants & alcohol"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    defaultValue: expenseGroceriesRestaurantsAlcohol,
    type: "number",
    onChange: function onChange(e) {
      setExpenseGroceriesRestaurantsAlcohol(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseGroceries(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Shopping, fitness & grooming"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseShoppingFitnessGrooming,
    type: "number",
    onChange: function onChange(e) {
      setExpenseShoppingFitnessGrooming(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseShopping(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Cars, taxis, public transit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseCarsTaxisPublicTransit,
    type: "number",
    onChange: function onChange(e) {
      setExpenseCarsTaxisPublicTransit(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseCars(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Childcare & education"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseChildcareEducation,
    type: "number",
    onChange: function onChange(e) {
      setExpenseChildcareEducation(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowChildcare(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Discretionary, travel, rec & gifts"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseDiscretionaryTravelRecGifts,
    type: "number",
    onChange: function onChange(e) {
      setExpenseDiscretionaryTravelRecGifts(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseDiscretionary(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Other"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: expenseOther,
    type: "number",
    onChange: function onChange(e) {
      setExpenseOther(e.target.value !== '' ? parseInt(e.target.value) : '');
    },
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$"),
    endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "end"
    }, __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
      className: "cursor-pointer",
      size: 20,
      onClick: function onClick() {
        setShowExpenseOther(true);
      }
    }))
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 10
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["FormControl"], {
    fullWidth: true,
    className: classes.margin
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLabel"], {
    htmlFor: "standard-adornment-amount"
  }, "Total"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    id: "standard-adornment-amount",
    value: form.expenseTotal,
    type: "number",
    startAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
      position: "start"
    }, "$")
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx("p", {
    className: "header font-weight-bold"
  }, "Why do these expenses look high?\xA0\xA0", __jsx(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_5__["QuestionCircle"], {
    size: 15,
    className: "cursor-pointer",
    onClick: function onClick() {
      setShowWhyExpensesLookHigh(true);
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    item: true,
    justify: "center",
    xs: 12,
    sm: 12,
    spacing: 2
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    item: true,
    xs: 12,
    sm: 6
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "align-button",
    onClick: function onClick() {
      axios__WEBPACK_IMPORTED_MODULE_4___default()({
        method: 'post',
        url: '/api/form',
        data: {
          form: form,
          formId: form.id
        }
      }).then(function (res) {
        localStorage.removeItem('form');
        router.push('/quotes');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    style: {
      width: "100%"
    },
    variant: "contained",
    size: "lg",
    disabled: isNext
  }, "Next"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showWhyExpensesLookHigh,
    onHide: handleCloseWhyExpensesLookHigh
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "The truth is, most people tend to underestimate their monthly expenses. When estimating monthly expenses, it\u2019s common for people to remember large recurring items, like mortgage or rent payments, hydro bills, auto payments, cell phone bills, and childcare costs. However, it\u2019s quite common for people to leave out the non-recurring \u201Cone-time\u201D costs, like gifts (weddings, birthdays, anniversaries), vacations, recreational activities, tickets to concerts and sports games, taxis/Ubers and nights out with your friends or family. If your expenses looks off, click on the info buttons beside each category to see a description of the items included in that category. Then, feel free to adjust the numbers as you see fit to update your monthly expenses."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseWhyExpensesLookHigh
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseMortgage,
    onHide: handleCloseShowExpenseMortgage
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "We have pre-calculated your rent or mortgage expenses from the previous form."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseMortgage
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseHousing,
    onHide: handleCloseShowExpenseHousing
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Property tax, condo fees, repairs and maintenance, home insurance, gas/electricity/hydro"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseHousing
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpensePhone,
    onHide: handleCloseShowExpensePhone
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Cell phones, cable, internet, Netflix, other subscriptions"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpensePhone
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseGroceries,
    onHide: handleCloseShowExpenseGroceries
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Groceries, restaurants, coffee shops, alcohol"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseGroceries
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseShopping,
    onHide: handleCloseShowExpenseShopping
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Clothes, shoes, salons & hair care, personal hygiene, gym memberships/classes, drycleaning, health, eyeglasses/contacts, dental"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseShopping
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseCars,
    onHide: handleCloseShowExpenseCars
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Car payments, auto insurance, gas, parking, maintenance/repairs, taxis/Ubers, public transit."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseCars
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showChildcare,
    onHide: handleCloseShowChildcare
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Daycare, nannies, private schools, tutors."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowChildcare
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseDiscretionary,
    onHide: handleCloseShowExpenseDiscretionary
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Vacations, entertainment, recreational activities, sports, electronics, gifts (birthdays, holidays, weddings)."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseDiscretionary
  }, "Close"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showExpenseOther,
    onHide: handleCloseShowExpenseOther
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, null, "Any monthly expenses you have that don\u2019t fit into one of the above categories."), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "contained",
    onClick: handleCloseShowExpenseOther
  }, "Close")))));
}

_s(MonthlyExpensesForm, "WKxwcTNHPLg6DUI62Z3cpeD1g/k=", true, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MonthlyExpensesForm;

var _c;

$RefreshReg$(_c, "MonthlyExpensesForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vbnRobHlFeHBlbnNlc0Zvcm0uanMiXSwibmFtZXMiOlsiTW9udGhseUV4cGVuc2VzRm9ybSIsInJlbnQiLCJtb3J0Z2FnZUN1cnIiLCJtb3J0Z2FnZU1vbnRobHkiLCJtb3J0Z2FnZUNvbWJpbmVkIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0Iiwibm93IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aXRob3V0TGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlIiwicGFyc2VJbnQiLCJtb3J0Z2FnZU1vbnRobHlQYXltZW50IiwibW9udGhseVJlbnQiLCJ1c2VTdGF0ZSIsInNob3dXaHlFeHBlbnNlc0xvb2tIaWdoIiwic2V0U2hvd1doeUV4cGVuc2VzTG9va0hpZ2giLCJoYW5kbGVDbG9zZVdoeUV4cGVuc2VzTG9va0hpZ2giLCJzaG93RXhwZW5zZU1vcnRnYWdlIiwic2V0U2hvd0V4cGVuc2VNb3J0Z2FnZSIsImhhbmRsZUNsb3NlU2hvd0V4cGVuc2VNb3J0Z2FnZSIsInNob3dFeHBlbnNlSG91c2luZyIsInNldFNob3dFeHBlbnNlSG91c2luZyIsImhhbmRsZUNsb3NlU2hvd0V4cGVuc2VIb3VzaW5nIiwic2hvd0V4cGVuc2VQaG9uZSIsInNldFNob3dFeHBlbnNlUGhvbmUiLCJoYW5kbGVDbG9zZVNob3dFeHBlbnNlUGhvbmUiLCJzaG93RXhwZW5zZUdyb2NlcmllcyIsInNldFNob3dFeHBlbnNlR3JvY2VyaWVzIiwiaGFuZGxlQ2xvc2VTaG93RXhwZW5zZUdyb2NlcmllcyIsInNob3dFeHBlbnNlU2hvcHBpbmciLCJzZXRTaG93RXhwZW5zZVNob3BwaW5nIiwiaGFuZGxlQ2xvc2VTaG93RXhwZW5zZVNob3BwaW5nIiwic2hvd0V4cGVuc2VDYXJzIiwic2V0U2hvd0V4cGVuc2VDYXJzIiwiaGFuZGxlQ2xvc2VTaG93RXhwZW5zZUNhcnMiLCJzaG93Q2hpbGRjYXJlIiwic2V0U2hvd0NoaWxkY2FyZSIsImhhbmRsZUNsb3NlU2hvd0NoaWxkY2FyZSIsInNob3dFeHBlbnNlRGlzY3JldGlvbmFyeSIsInNldFNob3dFeHBlbnNlRGlzY3JldGlvbmFyeSIsImhhbmRsZUNsb3NlU2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5Iiwic2hvd0V4cGVuc2VPdGhlciIsInNldFNob3dFeHBlbnNlT3RoZXIiLCJoYW5kbGVDbG9zZVNob3dFeHBlbnNlT3RoZXIiLCJleHBlbnNlTW9ydGdhZ2VBbmRSZW50Iiwic2V0RXhwZW5zZU1vcnRnYWdlQW5kUmVudCIsImV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMiLCJzZXRFeHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIiwiZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCIsInNldEV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wiLCJleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlIiwic2V0RXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSIsImV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsInNldEV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsImV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0Iiwic2V0RXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQiLCJleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uIiwic2V0RXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiIsImV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMiLCJzZXRFeHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIiwiZXhwZW5zZU90aGVyIiwic2V0RXhwZW5zZU90aGVyIiwiaXNOZXh0Iiwic2V0SXNOZXh0IiwidG90YWwiLCJleHBlbnNlVG90YWwiLCJzZXRFeHBlbnNlVG90YWwiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiZm9ybUlkIiwiaWQiLCJ0aGVuIiwicmVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFDMUM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxnQkFBSixDQUwwQyxDQU8xQzs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNBLE1BQU1DLElBQUksR0FBR0Ysd0RBQVUsQ0FBQ0csaUVBQUQsQ0FBdkIsQ0FWMEMsQ0FZMUM7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDM0NDLFVBQUksRUFBRTtBQUNKQyxlQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBUSxFQUFFO0FBRk4sT0FEcUM7QUFLM0NDLFlBQU0sRUFBRTtBQUNOQSxjQUFNLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFERixPQUxtQztBQVEzQ0Msa0JBQVksRUFBRTtBQUNaQyxpQkFBUyxFQUFFUCxLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREMsT0FSNkI7QUFXM0NHLGVBQVMsRUFBRTtBQUNUQyxhQUFLLEVBQUU7QUFE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LFVBQU0sRUFBRUU7QUFBdkMsS0FDSSxNQUFDLHFEQUFELENBQU8sSUFBUCw4RkFESixFQUVJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FGSixDQTlWVixDQUpNLENBREo7QUE4V0g7O0dBemZ1QjVELG1CO1VBUUxNLHFEOzs7S0FSS04sbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1vbnRobHlFeHBlbnNlcy5qcy44Y2I0YzVmM2ViZmYxZjNhZmRhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvRm9ybUNvbnRleHRcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGV9IGZyb20gXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIjtcclxuaW1wb3J0IHtNb2RhbCwgUHJvZ3Jlc3NCYXIsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQge0dyaWQsIENvbnRhaW5lciwgQ3NzQmFzZWxpbmUsIElucHV0QWRvcm5tZW50LCBtYWtlU3R5bGVzLCBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2x9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vbnRobHlFeHBlbnNlc0Zvcm0oKSB7XHJcbiAgICAvLyBsb2NhbHN0b3JhZ2Uga2V5c1xyXG4gICAgbGV0IHJlbnQ7XHJcbiAgICBsZXQgbW9ydGdhZ2VDdXJyO1xyXG4gICAgbGV0IG1vcnRnYWdlTW9udGhseTtcclxuICAgIGxldCBtb3J0Z2FnZUNvbWJpbmVkO1xyXG5cclxuICAgIC8vIGhvb2tzIGRlZmluaXRpb25zXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChEaXNwYXRjaENvbnRleHQpO1xyXG4gICAgY29uc3QgZm9ybSA9IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG5cclxuICAgIC8vIHByb2dyZXNzXHJcbiAgICBjb25zdCBub3cgPSA5NTtcclxuICAgIFxyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHQgIGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdCAgZmxleFdyYXA6ICd3cmFwJyxcclxuXHRcdH0sXHJcblx0XHRtYXJnaW46IHtcclxuXHRcdCAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0fSxcclxuXHRcdHdpdGhvdXRMYWJlbDoge1xyXG5cdFx0ICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHR9LFxyXG5cdFx0dGV4dEZpZWxkOiB7XHJcblx0XHQgIHdpZHRoOiAnMjVjaCcsXHJcblx0XHR9LFxyXG5cdH0pKTtcclxuXHRcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBtb3J0Z2FnZUN1cnIgPSBmb3JtLm1vcnRnYWdlQ3VycmVudEJhbGFuY2UgIT09ICcnID8gcGFyc2VJbnQoZm9ybS5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlKSA6ICcnO1xyXG4gICAgbW9ydGdhZ2VNb250aGx5ID0gZm9ybS5tb3J0Z2FnZU1vbnRobHlQYXltZW50ICE9PSAnJyA/IHBhcnNlSW50KGZvcm0ubW9ydGdhZ2VNb250aGx5UGF5bWVudCkgOiAnJztcclxuICAgIHJlbnQgPSBmb3JtLm1vbnRobHlSZW50O1xyXG4gICAgbW9ydGdhZ2VDb21iaW5lZCA9IG1vcnRnYWdlQ3VyciArIG1vcnRnYWdlTW9udGhseTtcclxuXHJcbiAgICAvLyBtb2RhbFxyXG4gICAgY29uc3QgW3Nob3dXaHlFeHBlbnNlc0xvb2tIaWdoLCBzZXRTaG93V2h5RXhwZW5zZXNMb29rSGlnaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVdoeUV4cGVuc2VzTG9va0hpZ2ggPSAoKSA9PiBzZXRTaG93V2h5RXhwZW5zZXNMb29rSGlnaChmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4cGVuc2VNb3J0Z2FnZSwgc2V0U2hvd0V4cGVuc2VNb3J0Z2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlTW9ydGdhZ2UgPSAoKSA9PiBzZXRTaG93RXhwZW5zZU1vcnRnYWdlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhwZW5zZUhvdXNpbmcsIHNldFNob3dFeHBlbnNlSG91c2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlSG91c2luZyA9ICgpID0+IHNldFNob3dFeHBlbnNlSG91c2luZyhmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4cGVuc2VQaG9uZSwgc2V0U2hvd0V4cGVuc2VQaG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlUGhvbmUgPSAoKSA9PiBzZXRTaG93RXhwZW5zZVBob25lKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhwZW5zZUdyb2Nlcmllcywgc2V0U2hvd0V4cGVuc2VHcm9jZXJpZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTaG93RXhwZW5zZUdyb2NlcmllcyA9ICgpID0+IHNldFNob3dFeHBlbnNlR3JvY2VyaWVzKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhwZW5zZVNob3BwaW5nLCBzZXRTaG93RXhwZW5zZVNob3BwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU2hvd0V4cGVuc2VTaG9wcGluZyA9ICgpID0+IHNldFNob3dFeHBlbnNlU2hvcHBpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dFeHBlbnNlQ2Fycywgc2V0U2hvd0V4cGVuc2VDYXJzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU2hvd0V4cGVuc2VDYXJzID0gKCkgPT4gc2V0U2hvd0V4cGVuc2VDYXJzKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93Q2hpbGRjYXJlLCBzZXRTaG93Q2hpbGRjYXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU2hvd0NoaWxkY2FyZSA9ICgpID0+IHNldFNob3dDaGlsZGNhcmUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dFeHBlbnNlRGlzY3JldGlvbmFyeSwgc2V0U2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5ID0gKCkgPT4gc2V0U2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhwZW5zZU90aGVyLCBzZXRTaG93RXhwZW5zZU90aGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU2hvd0V4cGVuc2VPdGhlciA9ICgpID0+IHNldFNob3dFeHBlbnNlT3RoZXIoZmFsc2UpO1xyXG5cclxuICAgIC8vIGxvY2FsIHN0YXRlIHNldHVwXHJcbiAgICBjb25zdCBbZXhwZW5zZU1vcnRnYWdlQW5kUmVudCwgc2V0RXhwZW5zZU1vcnRnYWdlQW5kUmVudF0gPSB1c2VTdGF0ZShyZW50ID4gMCA/IHJlbnQgOiBtb3J0Z2FnZUNvbWJpbmVkKTtcclxuICAgIGNvbnN0IFtleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzLCBzZXRFeHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzXSA9IHVzZVN0YXRlKDEwMDApO1xyXG4gICAgY29uc3QgW2V4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wsIHNldEV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2xdID0gdXNlU3RhdGUoNzAwKTtcclxuICAgIGNvbnN0IFtleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlLCBzZXRFeHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlXSA9IHVzZVN0YXRlKDEwMCk7XHJcbiAgICBjb25zdCBbZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nLCBzZXRFeHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmddID0gdXNlU3RhdGUoNzAwKTtcclxuICAgIGNvbnN0IFtleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCwgc2V0RXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXRdID0gdXNlU3RhdGUoNDUwKTtcclxuICAgIGNvbnN0IFtleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uLCBzZXRFeHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2V4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMsIHNldEV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHNdID0gdXNlU3RhdGUoNDUwKTtcclxuICAgIGNvbnN0IFtleHBlbnNlT3RoZXIsIHNldEV4cGVuc2VPdGhlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc05leHQsIHNldElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIGV4cGVuc2VzXHJcbiAgICBsZXQgdG90YWwgPSBleHBlbnNlTW9ydGdhZ2VBbmRSZW50ICsgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcyArIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wgKyBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlICsgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nICsgZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQgKyBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uICsgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0cyArIGV4cGVuc2VPdGhlcjtcclxuICAgIC8vIHVzZSB0b3RhbCBhcyBkZWZhdWx0IHN0YXRlXHJcbiAgICBjb25zdCBbZXhwZW5zZVRvdGFsLCBzZXRFeHBlbnNlVG90YWxdID0gdXNlU3RhdGUodG90YWwpO1xyXG5cclxuICAgIC8vZWZmZWN0cyBmb3IgY29udGV4dCBhcGlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RXhwZW5zZVRvdGFsKGV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQgKyBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzICsgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCArIGV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUgKyBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmcgKyBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCArIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24gKyBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzICsgZXhwZW5zZU90aGVyKTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRFeHBlbnNlVG90YWwoZXhwZW5zZU1vcnRnYWdlQW5kUmVudCArIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMgKyBleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sICsgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSArIGV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyArIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0ICsgZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiArIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMgKyBleHBlbnNlT3RoZXIpO1xyXG4gICAgICAgIGlmKGV4cGVuc2VUb3RhbCA+IDApe1xyXG4gICAgICAgICAgICBzZXRJc05leHQoZmFsc2UpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldElzTmV4dCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sW2V4cGVuc2VPdGhlciwgZXhwZW5zZVRvdGFsLFxyXG4gICAgICAgIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMsXHJcbiAgICAgICAgZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbixcclxuICAgICAgICBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCxcclxuICAgICAgICBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmcsXHJcbiAgICAgICAgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSxcclxuICAgICAgICBleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sLFxyXG4gICAgICAgIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMsXHJcbiAgICAgICAgZXhwZW5zZU1vcnRnYWdlQW5kUmVudF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfTU9SVEdBR0VfUkVOVFwiLCBleHBlbnNlTW9ydGdhZ2VBbmRSZW50OiBleHBlbnNlTW9ydGdhZ2VBbmRSZW50IH0pO1xyXG4gICAgfSwgW2V4cGVuc2VNb3J0Z2FnZUFuZFJlbnRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFWFBFTlNFX0hPVVNJTkdfQklMTFNfVVRJTElUSUVTXCIsIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXM6IGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMgfSk7XHJcbiAgICB9LCBbZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfR1JPQ0VSSUVTX1JFU1RBVVJBTlRTX0FMQ09IT0xcIiwgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbDogZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCB9KTtcclxuICAgIH0sIFtleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVhQRU5TRV9QSE9ORV9JTlRFUk5FVF9DQUJMRVwiLCBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlOiBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlIH0pO1xyXG4gICAgfSwgW2V4cGVuc2VQaG9uZUludGVybmV0Q2FibGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFWFBFTlNFX1NIT1BQSU5HX0ZJVE5FU1NfR1JPT01JTkdcIiwgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nOiBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmcgfSk7XHJcbiAgICB9LCBbZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVhQRU5TRV9DQVJTX1RBWElTX1RSQU5TSVRcIiwgZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQ6IGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0IH0pO1xyXG4gICAgfSwgW2V4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVhQRU5TRV9DSElMRENBUkVfRURVQ0FUSU9OXCIsIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb246IGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24gfSk7XHJcbiAgICB9LCBbZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfRElTQ1JFVElPTkFSWV9UUkFWRUxfUkVDX0dJRlRTXCIsIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHM6IGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMgfSk7XHJcbiAgICB9LCBbZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0c10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfT1RIRVJcIiwgZXhwZW5zZU90aGVyOiBleHBlbnNlT3RoZXIgfSk7XHJcbiAgICB9LCBbZXhwZW5zZU90aGVyXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVhQRU5TRV9UT1RBTFwiLCBleHBlbnNlVG90YWw6IGV4cGVuc2VUb3RhbCB9KTtcclxuICAgIH0sIFtleHBlbnNlVG90YWxdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHN0eWxlPXt7bWFyZ2luOicxMHB4IGF1dG8nfX0+XHJcblx0XHRcdDxQcm9ncmVzc0JhciBzdHlsZT17e2hlaWdodDogJzAuNXJlbSd9fSBhbmltYXRlZCBzdHJpcGVkIHZhcmlhbnQ9XCJpbmZvXCIgbGFiZWw9e2Ake25vd30lIERvbmVgfSBub3c9e25vd30gLz5cclxuXHRcdDwvR3JpZD5cclxuXHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN0eWxlPXt7bWFyZ2luVG9wOic0MHB4J319PlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxoNCBjbGFzc05hbWU9J2hlYWRlcic+V2hhdCBhcmUgeW91ciBtb250aGx5IGV4cGVuc2VzPzwvaDQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnlcIj5CZWxvdywgd2XigJl2ZSBlc3RpbWF0ZWQgeW91ciBmYW1pbHnigJlzIGV4cGVuc2VzIGJhc2VkIG9uIHRoZSBzcGVuZGluZyBwYXR0ZXJucyBvZiBtaWxsaW9ucyBvZiBDYW5hZGlhbnMuIElmIGFueSBvZiB0aGVzZSBlc3RpbWF0ZXMgc2VlbSB0b28gaGlnaCBvciB0b28gbG93LCBwbGVhc2UgZWRpdCB0aGVtLjwvcD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXsxMn0ganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPk1vcnRnYWdlIGFuZCByZW50PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlTW9ydGdhZ2VBbmRSZW50fVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4cGVuc2VNb3J0Z2FnZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxwIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+SG91c2luZyBiaWxscyAmIHV0aWxpdGllczwvcD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllc31cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4cGVuc2VIb3VzaW5nKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5QaG9uZSwgSW50ZXJuZXQsIENhYmxlPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RXhwZW5zZVBob25lKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5Hcm9jZXJpZXMsIHJlc3RhdXJhbnRzICYgYWxjb2hvbDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2V4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2x9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbChlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeHBlbnNlR3JvY2VyaWVzKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5TaG9wcGluZywgZml0bmVzcyAmIGdyb29taW5nPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmd9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4cGVuc2VTaG9wcGluZyh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+Q2FycywgdGF4aXMsIHB1YmxpYyB0cmFuc2l0PC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdH1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdChlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeHBlbnNlQ2Fycyh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+Q2hpbGRjYXJlICYgZWR1Y2F0aW9uPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24oZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93Q2hpbGRjYXJlKHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5EaXNjcmV0aW9uYXJ5LCB0cmF2ZWwsIHJlYyAmIGdpZnRzPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RXhwZW5zZURpc2NyZXRpb25hcnkodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPk90aGVyPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtleHBlbnNlT3RoZXJ9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwZW5zZU90aGVyKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4cGVuc2VPdGhlcih0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMH0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPlRvdGFsPC9JbnB1dExhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRpZD1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtmb3JtLmV4cGVuc2VUb3RhbH1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIGp1c3RpZnk9XCJjZW50ZXJcIiB4cz17MTJ9IHNtPXsxMn0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPldoeSBkbyB0aGVzZSBleHBlbnNlcyBsb29rIGhpZ2g/Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93V2h5RXhwZW5zZXNMb29rSGlnaCh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogZm9ybSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUlkOiBmb3JtLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcXVvdGVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc05leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHRcdHsvKmFzayBhYm91dCBvdGhlciBpbmNvbWUqL31cclxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd1doeUV4cGVuc2VzTG9va0hpZ2h9IG9uSGlkZT17aGFuZGxlQ2xvc2VXaHlFeHBlbnNlc0xvb2tIaWdofT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlRoZSB0cnV0aCBpcywgbW9zdCBwZW9wbGUgdGVuZCB0byB1bmRlcmVzdGltYXRlIHRoZWlyIG1vbnRobHkgZXhwZW5zZXMuIFdoZW4gZXN0aW1hdGluZyBtb250aGx5IGV4cGVuc2VzLCBpdOKAmXMgY29tbW9uIGZvciBwZW9wbGUgdG8gcmVtZW1iZXIgbGFyZ2UgcmVjdXJyaW5nIGl0ZW1zLCBsaWtlIG1vcnRnYWdlIG9yIHJlbnQgcGF5bWVudHMsIGh5ZHJvIGJpbGxzLCBhdXRvIHBheW1lbnRzLCBjZWxsIHBob25lIGJpbGxzLCBhbmQgY2hpbGRjYXJlIGNvc3RzLiBIb3dldmVyLCBpdOKAmXMgcXVpdGUgY29tbW9uIGZvciBwZW9wbGUgdG8gbGVhdmUgb3V0IHRoZSBub24tcmVjdXJyaW5nIOKAnG9uZS10aW1l4oCdIGNvc3RzLCBsaWtlIGdpZnRzICh3ZWRkaW5ncywgYmlydGhkYXlzLCBhbm5pdmVyc2FyaWVzKSwgdmFjYXRpb25zLCByZWNyZWF0aW9uYWwgYWN0aXZpdGllcywgdGlja2V0cyB0byBjb25jZXJ0cyBhbmQgc3BvcnRzIGdhbWVzLCB0YXhpcy9VYmVycyBhbmQgbmlnaHRzIG91dCB3aXRoIHlvdXIgZnJpZW5kcyBvciBmYW1pbHkuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIElmIHlvdXIgZXhwZW5zZXMgbG9va3Mgb2ZmLCBjbGljayBvbiB0aGUgaW5mbyBidXR0b25zIGJlc2lkZSBlYWNoIGNhdGVnb3J5IHRvIHNlZSBhIGRlc2NyaXB0aW9uIG9mIHRoZSBpdGVtcyBpbmNsdWRlZCBpbiB0aGF0IGNhdGVnb3J5LiBUaGVuLCBmZWVsIGZyZWUgdG8gYWRqdXN0IHRoZSBudW1iZXJzIGFzIHlvdSBzZWUgZml0IHRvIHVwZGF0ZSB5b3VyIG1vbnRobHkgZXhwZW5zZXMuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVdoeUV4cGVuc2VzTG9va0hpZ2h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKm1vcnRnYWdlIGFuZCByZW50Ki99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhwZW5zZU1vcnRnYWdlfSBvbkhpZGU9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VNb3J0Z2FnZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5XZSBoYXZlIHByZS1jYWxjdWxhdGVkIHlvdXIgcmVudCBvciBtb3J0Z2FnZSBleHBlbnNlcyBmcm9tIHRoZSBwcmV2aW91cyBmb3JtLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZU1vcnRnYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lypob3VzaW5nIGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeHBlbnNlSG91c2luZ30gb25IaWRlPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlSG91c2luZ30+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5Qcm9wZXJ0eSB0YXgsIGNvbmRvIGZlZXMsIHJlcGFpcnMgYW5kIG1haW50ZW5hbmNlLCBob21lIGluc3VyYW5jZSwgZ2FzL2VsZWN0cmljaXR5L2h5ZHJvPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlSG91c2luZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qcGhvbmUgZXhwZW5zZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0V4cGVuc2VQaG9uZX0gb25IaWRlPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlUGhvbmV9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+Q2VsbCBwaG9uZXMsIGNhYmxlLCBpbnRlcm5ldCwgTmV0ZmxpeCwgb3RoZXIgc3Vic2NyaXB0aW9uczwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZVBob25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lypncm9jaWVyZXMgZXhwZW5zZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0V4cGVuc2VHcm9jZXJpZXN9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZUdyb2Nlcmllc30+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5Hcm9jZXJpZXMsIHJlc3RhdXJhbnRzLCBjb2ZmZWUgc2hvcHMsIGFsY29ob2w8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VHcm9jZXJpZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKnNob3BwaW5nIGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeHBlbnNlU2hvcHBpbmd9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZVNob3BwaW5nfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkNsb3RoZXMsIHNob2VzLCBzYWxvbnMgJiBoYWlyIGNhcmUsIHBlcnNvbmFsIGh5Z2llbmUsIGd5bSBtZW1iZXJzaGlwcy9jbGFzc2VzLCBkcnljbGVhbmluZywgaGVhbHRoLCBleWVnbGFzc2VzL2NvbnRhY3RzLCBkZW50YWw8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VTaG9wcGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qY2FycyBleHBlbnNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhwZW5zZUNhcnN9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZUNhcnN9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+Q2FyIHBheW1lbnRzLCBhdXRvIGluc3VyYW5jZSwgZ2FzLCBwYXJraW5nLCBtYWludGVuYW5jZS9yZXBhaXJzLCB0YXhpcy9VYmVycywgcHVibGljIHRyYW5zaXQuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlQ2Fyc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qY2hpbGRjYXJlIGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dDaGlsZGNhcmV9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93Q2hpbGRjYXJlfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkRheWNhcmUsIG5hbm5pZXMsIHByaXZhdGUgc2Nob29scywgdHV0b3JzLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93Q2hpbGRjYXJlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7LypkaXNjcmV0aW9uYXJ5IGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeHBlbnNlRGlzY3JldGlvbmFyeX0gb25IaWRlPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlRGlzY3JldGlvbmFyeX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5WYWNhdGlvbnMsIGVudGVydGFpbm1lbnQsIHJlY3JlYXRpb25hbCBhY3Rpdml0aWVzLCBzcG9ydHMsIGVsZWN0cm9uaWNzLCBnaWZ0cyAoYmlydGhkYXlzLCBob2xpZGF5cywgd2VkZGluZ3MpLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZURpc2NyZXRpb25hcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKm90aGVyIGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeHBlbnNlT3RoZXJ9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZU90aGVyfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkFueSBtb250aGx5IGV4cGVuc2VzIHlvdSBoYXZlIHRoYXQgZG9u4oCZdCBmaXQgaW50byBvbmUgb2YgdGhlIGFib3ZlIGNhdGVnb3JpZXMuPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlT3RoZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcblx0XHQ8L0NvbnRhaW5lcj5cclxuXHQ8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=