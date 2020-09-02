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
  }, __jsx(Text, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vbnRobHlFeHBlbnNlc0Zvcm0uanMiXSwibmFtZXMiOlsiTW9udGhseUV4cGVuc2VzRm9ybSIsInJlbnQiLCJtb3J0Z2FnZUN1cnIiLCJtb3J0Z2FnZU1vbnRobHkiLCJtb3J0Z2FnZUNvbWJpbmVkIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiRGlzcGF0Y2hDb250ZXh0IiwiZm9ybSIsIkZvcm1Db250ZXh0Iiwibm93IiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcmdpbiIsInNwYWNpbmciLCJ3aXRob3V0TGFiZWwiLCJtYXJnaW5Ub3AiLCJ0ZXh0RmllbGQiLCJ3aWR0aCIsImNsYXNzZXMiLCJtb3J0Z2FnZUN1cnJlbnRCYWxhbmNlIiwicGFyc2VJbnQiLCJtb3J0Z2FnZU1vbnRobHlQYXltZW50IiwibW9udGhseVJlbnQiLCJ1c2VTdGF0ZSIsInNob3dXaHlFeHBlbnNlc0xvb2tIaWdoIiwic2V0U2hvd1doeUV4cGVuc2VzTG9va0hpZ2giLCJoYW5kbGVDbG9zZVdoeUV4cGVuc2VzTG9va0hpZ2giLCJzaG93RXhwZW5zZU1vcnRnYWdlIiwic2V0U2hvd0V4cGVuc2VNb3J0Z2FnZSIsImhhbmRsZUNsb3NlU2hvd0V4cGVuc2VNb3J0Z2FnZSIsInNob3dFeHBlbnNlSG91c2luZyIsInNldFNob3dFeHBlbnNlSG91c2luZyIsImhhbmRsZUNsb3NlU2hvd0V4cGVuc2VIb3VzaW5nIiwic2hvd0V4cGVuc2VQaG9uZSIsInNldFNob3dFeHBlbnNlUGhvbmUiLCJoYW5kbGVDbG9zZVNob3dFeHBlbnNlUGhvbmUiLCJzaG93RXhwZW5zZUdyb2NlcmllcyIsInNldFNob3dFeHBlbnNlR3JvY2VyaWVzIiwiaGFuZGxlQ2xvc2VTaG93RXhwZW5zZUdyb2NlcmllcyIsInNob3dFeHBlbnNlU2hvcHBpbmciLCJzZXRTaG93RXhwZW5zZVNob3BwaW5nIiwiaGFuZGxlQ2xvc2VTaG93RXhwZW5zZVNob3BwaW5nIiwic2hvd0V4cGVuc2VDYXJzIiwic2V0U2hvd0V4cGVuc2VDYXJzIiwiaGFuZGxlQ2xvc2VTaG93RXhwZW5zZUNhcnMiLCJzaG93Q2hpbGRjYXJlIiwic2V0U2hvd0NoaWxkY2FyZSIsImhhbmRsZUNsb3NlU2hvd0NoaWxkY2FyZSIsInNob3dFeHBlbnNlRGlzY3JldGlvbmFyeSIsInNldFNob3dFeHBlbnNlRGlzY3JldGlvbmFyeSIsImhhbmRsZUNsb3NlU2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5Iiwic2hvd0V4cGVuc2VPdGhlciIsInNldFNob3dFeHBlbnNlT3RoZXIiLCJoYW5kbGVDbG9zZVNob3dFeHBlbnNlT3RoZXIiLCJleHBlbnNlTW9ydGdhZ2VBbmRSZW50Iiwic2V0RXhwZW5zZU1vcnRnYWdlQW5kUmVudCIsImV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMiLCJzZXRFeHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIiwiZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCIsInNldEV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wiLCJleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlIiwic2V0RXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSIsImV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsInNldEV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyIsImV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0Iiwic2V0RXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQiLCJleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uIiwic2V0RXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiIsImV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMiLCJzZXRFeHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIiwiZXhwZW5zZU90aGVyIiwic2V0RXhwZW5zZU90aGVyIiwiaXNOZXh0Iiwic2V0SXNOZXh0IiwidG90YWwiLCJleHBlbnNlVG90YWwiLCJzZXRFeHBlbnNlVG90YWwiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiaGVpZ2h0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiZm9ybUlkIiwiaWQiLCJ0aGVuIiwicmVzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFDMUM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxnQkFBSixDQUwwQyxDQU8xQzs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyxxRUFBRCxDQUEzQjtBQUNBLE1BQU1DLElBQUksR0FBR0Ysd0RBQVUsQ0FBQ0csaUVBQUQsQ0FBdkIsQ0FWMEMsQ0FZMUM7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFFQSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDM0NDLFVBQUksRUFBRTtBQUNKQyxlQUFPLEVBQUUsTUFETDtBQUVKQyxnQkFBUSxFQUFFO0FBRk4sT0FEcUM7QUFLM0NDLFlBQU0sRUFBRTtBQUNOQSxjQUFNLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFERixPQUxtQztBQVEzQ0Msa0JBQVksRUFBRTtBQUNaQyxpQkFBUyxFQUFFUCxLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREMsT0FSNkI7QUFXM0NHLGVBQVMsRUFBRTtBQUNUQyxhQUFLLEVBQUU7QUFERTtBQVhnQyxLQUFaO0FBQUEsR0FBRCxDQUE1QjtBQWdCQSxNQUFNQyxPQUFPLEdBQUdaLFNBQVMsRUFBekI7QUFFQVgsY0FBWSxHQUFHUSxJQUFJLENBQUNnQixzQkFBTCxLQUFnQyxFQUFoQyxHQUFxQ0MsUUFBUSxDQUFDakIsSUFBSSxDQUFDZ0Isc0JBQU4sQ0FBN0MsR0FBNkUsRUFBNUY7QUFDQXZCLGlCQUFlLEdBQUdPLElBQUksQ0FBQ2tCLHNCQUFMLEtBQWdDLEVBQWhDLEdBQXFDRCxRQUFRLENBQUNqQixJQUFJLENBQUNrQixzQkFBTixDQUE3QyxHQUE2RSxFQUEvRjtBQUNBM0IsTUFBSSxHQUFHUyxJQUFJLENBQUNtQixXQUFaO0FBQ0F6QixrQkFBZ0IsR0FBR0YsWUFBWSxHQUFHQyxlQUFsQyxDQXBDMEMsQ0FzQzFDOztBQXRDMEMsa0JBdUNvQjJCLHNEQUFRLENBQUMsS0FBRCxDQXZDNUI7QUFBQSxNQXVDbkNDLHVCQXZDbUM7QUFBQSxNQXVDVkMsMEJBdkNVOztBQXdDMUMsTUFBTUMsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQztBQUFBLFdBQU1ELDBCQUEwQixDQUFDLEtBQUQsQ0FBaEM7QUFBQSxHQUF2Qzs7QUF4QzBDLG1CQXlDWUYsc0RBQVEsQ0FBQyxLQUFELENBekNwQjtBQUFBLE1BeUNuQ0ksbUJBekNtQztBQUFBLE1BeUNkQyxzQkF6Q2M7O0FBMEMxQyxNQUFNQyw4QkFBOEIsR0FBRyxTQUFqQ0EsOEJBQWlDO0FBQUEsV0FBTUQsc0JBQXNCLENBQUMsS0FBRCxDQUE1QjtBQUFBLEdBQXZDOztBQTFDMEMsbUJBMkNVTCxzREFBUSxDQUFDLEtBQUQsQ0EzQ2xCO0FBQUEsTUEyQ25DTyxrQkEzQ21DO0FBQUEsTUEyQ2ZDLHFCQTNDZTs7QUE0QzFDLE1BQU1DLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0M7QUFBQSxXQUFNRCxxQkFBcUIsQ0FBQyxLQUFELENBQTNCO0FBQUEsR0FBdEM7O0FBNUMwQyxtQkE2Q01SLHNEQUFRLENBQUMsS0FBRCxDQTdDZDtBQUFBLE1BNkNuQ1UsZ0JBN0NtQztBQUFBLE1BNkNqQkMsbUJBN0NpQjs7QUE4QzFDLE1BQU1DLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEI7QUFBQSxXQUFNRCxtQkFBbUIsQ0FBQyxLQUFELENBQXpCO0FBQUEsR0FBcEM7O0FBOUMwQyxtQkErQ2NYLHNEQUFRLENBQUMsS0FBRCxDQS9DdEI7QUFBQSxNQStDbkNhLG9CQS9DbUM7QUFBQSxNQStDYkMsdUJBL0NhOztBQWdEMUMsTUFBTUMsK0JBQStCLEdBQUcsU0FBbENBLCtCQUFrQztBQUFBLFdBQU1ELHVCQUF1QixDQUFDLEtBQUQsQ0FBN0I7QUFBQSxHQUF4Qzs7QUFoRDBDLG1CQWlEWWQsc0RBQVEsQ0FBQyxLQUFELENBakRwQjtBQUFBLE1BaURuQ2dCLG1CQWpEbUM7QUFBQSxNQWlEZEMsc0JBakRjOztBQWtEMUMsTUFBTUMsOEJBQThCLEdBQUcsU0FBakNBLDhCQUFpQztBQUFBLFdBQU1ELHNCQUFzQixDQUFDLEtBQUQsQ0FBNUI7QUFBQSxHQUF2Qzs7QUFsRDBDLG1CQW1ESWpCLHNEQUFRLENBQUMsS0FBRCxDQW5EWjtBQUFBLE1BbURuQ21CLGVBbkRtQztBQUFBLE1BbURsQkMsa0JBbkRrQjs7QUFvRDFDLE1BQU1DLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkI7QUFBQSxXQUFNRCxrQkFBa0IsQ0FBQyxLQUFELENBQXhCO0FBQUEsR0FBbkM7O0FBcEQwQyxtQkFxREFwQixzREFBUSxDQUFDLEtBQUQsQ0FyRFI7QUFBQSxNQXFEbkNzQixhQXJEbUM7QUFBQSxNQXFEcEJDLGdCQXJEb0I7O0FBc0QxQyxNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCO0FBQUEsV0FBTUQsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLEdBQWpDOztBQXREMEMsbUJBdURzQnZCLHNEQUFRLENBQUMsS0FBRCxDQXZEOUI7QUFBQSxNQXVEbkN5Qix3QkF2RG1DO0FBQUEsTUF1RFRDLDJCQXZEUzs7QUF3RDFDLE1BQU1DLG1DQUFtQyxHQUFHLFNBQXRDQSxtQ0FBc0M7QUFBQSxXQUFNRCwyQkFBMkIsQ0FBQyxLQUFELENBQWpDO0FBQUEsR0FBNUM7O0FBeEQwQyxvQkF5RE0xQixzREFBUSxDQUFDLEtBQUQsQ0F6RGQ7QUFBQSxNQXlEbkM0QixnQkF6RG1DO0FBQUEsTUF5RGpCQyxtQkF6RGlCOztBQTBEMUMsTUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QjtBQUFBLFdBQU1ELG1CQUFtQixDQUFDLEtBQUQsQ0FBekI7QUFBQSxHQUFwQyxDQTFEMEMsQ0E0RDFDOzs7QUE1RDBDLG9CQTZEa0I3QixzREFBUSxDQUFDN0IsSUFBSSxHQUFHLENBQVAsR0FBV0EsSUFBWCxHQUFrQkcsZ0JBQW5CLENBN0QxQjtBQUFBLE1BNkRuQ3lELHNCQTdEbUM7QUFBQSxNQTZEWEMseUJBN0RXOztBQUFBLG9CQThEOEJoQyxzREFBUSxDQUFDLElBQUQsQ0E5RHRDO0FBQUEsTUE4RG5DaUMsNEJBOURtQztBQUFBLE1BOERMQywrQkE5REs7O0FBQUEsb0JBK0QwQ2xDLHNEQUFRLENBQUMsR0FBRCxDQS9EbEQ7QUFBQSxNQStEbkNtQyxrQ0EvRG1DO0FBQUEsTUErRENDLHFDQS9ERDs7QUFBQSxvQkFnRXdCcEMsc0RBQVEsQ0FBQyxHQUFELENBaEVoQztBQUFBLE1BZ0VuQ3FDLHlCQWhFbUM7QUFBQSxNQWdFUkMsNEJBaEVROztBQUFBLG9CQWlFa0N0QyxzREFBUSxDQUFDLEdBQUQsQ0FqRTFDO0FBQUEsTUFpRW5DdUMsOEJBakVtQztBQUFBLE1BaUVIQyxpQ0FqRUc7O0FBQUEsb0JBa0VnQ3hDLHNEQUFRLENBQUMsR0FBRCxDQWxFeEM7QUFBQSxNQWtFbkN5Qyw2QkFsRW1DO0FBQUEsTUFrRUpDLGdDQWxFSTs7QUFBQSxvQkFtRXdCMUMsc0RBQVEsQ0FBQyxDQUFELENBbkVoQztBQUFBLE1BbUVuQzJDLHlCQW5FbUM7QUFBQSxNQW1FUkMsNEJBbkVROztBQUFBLG9CQW9FMEM1QyxzREFBUSxDQUFDLEdBQUQsQ0FwRWxEO0FBQUEsTUFvRW5DNkMsa0NBcEVtQztBQUFBLE1Bb0VDQyxxQ0FwRUQ7O0FBQUEsb0JBcUVGOUMsc0RBQVEsQ0FBQyxDQUFELENBckVOO0FBQUEsTUFxRW5DK0MsWUFyRW1DO0FBQUEsTUFxRXJCQyxlQXJFcUI7O0FBQUEsb0JBc0VkaEQsc0RBQVEsQ0FBQyxJQUFELENBdEVNO0FBQUEsTUFzRW5DaUQsTUF0RW1DO0FBQUEsTUFzRTNCQyxTQXRFMkIsbUJBeUUxQzs7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHcEIsc0JBQXNCLEdBQUdFLDRCQUF6QixHQUF3REUsa0NBQXhELEdBQTZGRSx5QkFBN0YsR0FBeUhFLDhCQUF6SCxHQUEwSkUsNkJBQTFKLEdBQTBMRSx5QkFBMUwsR0FBc05FLGtDQUF0TixHQUEyUEUsWUFBdlEsQ0ExRTBDLENBMkUxQzs7QUEzRTBDLG9CQTRFRi9DLHNEQUFRLENBQUNtRCxLQUFELENBNUVOO0FBQUEsTUE0RW5DQyxZQTVFbUM7QUFBQSxNQTRFckJDLGVBNUVxQixtQkE4RTFDOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELG1CQUFlLENBQUN0QixzQkFBc0IsR0FBR0UsNEJBQXpCLEdBQXdERSxrQ0FBeEQsR0FBNkZFLHlCQUE3RixHQUF5SEUsOEJBQXpILEdBQTBKRSw2QkFBMUosR0FBMExFLHlCQUExTCxHQUFzTkUsa0NBQXROLEdBQTJQRSxZQUE1UCxDQUFmO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWkQsbUJBQWUsQ0FBQ3RCLHNCQUFzQixHQUFHRSw0QkFBekIsR0FBd0RFLGtDQUF4RCxHQUE2RkUseUJBQTdGLEdBQXlIRSw4QkFBekgsR0FBMEpFLDZCQUExSixHQUEwTEUseUJBQTFMLEdBQXNORSxrQ0FBdE4sR0FBMlBFLFlBQTVQLENBQWY7O0FBQ0EsUUFBR0ssWUFBWSxHQUFHLENBQWxCLEVBQW9CO0FBQ2hCRixlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0gsS0FGRCxNQUVLO0FBQ0RBLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSDtBQUNKLEdBUFEsRUFPUCxDQUFDSCxZQUFELEVBQWVLLFlBQWYsRUFDRVAsa0NBREYsRUFFRUYseUJBRkYsRUFHRUYsNkJBSEYsRUFJRUYsOEJBSkYsRUFLRUYseUJBTEYsRUFNRUYsa0NBTkYsRUFPRUYsNEJBUEYsRUFRRUYsc0JBUkYsQ0FQTyxDQUFUO0FBaUJBdUIseURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSx1QkFBUjtBQUFpQ3hCLDRCQUFzQixFQUFFQTtBQUF6RCxLQUFELENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0Esc0JBQUQsQ0FGTSxDQUFUO0FBSUF1Qix5REFBUyxDQUFDLFlBQU07QUFDWjdFLFlBQVEsQ0FBQztBQUFFOEUsVUFBSSxFQUFFLGlDQUFSO0FBQTJDdEIsa0NBQTRCLEVBQUVBO0FBQXpFLEtBQUQsQ0FBUjtBQUNILEdBRlEsRUFFTixDQUFDQSw0QkFBRCxDQUZNLENBQVQ7QUFJQXFCLHlEQUFTLENBQUMsWUFBTTtBQUNaN0UsWUFBUSxDQUFDO0FBQUU4RSxVQUFJLEVBQUUsdUNBQVI7QUFBaURwQix3Q0FBa0MsRUFBRUE7QUFBckYsS0FBRCxDQUFSO0FBQ0gsR0FGUSxFQUVOLENBQUNBLGtDQUFELENBRk0sQ0FBVDtBQUlBbUIseURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSw4QkFBUjtBQUF3Q2xCLCtCQUF5QixFQUFFQTtBQUFuRSxLQUFELENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EseUJBQUQsQ0FGTSxDQUFUO0FBSUFpQix5REFBUyxDQUFDLFlBQU07QUFDWjdFLFlBQVEsQ0FBQztBQUFFOEUsVUFBSSxFQUFFLG1DQUFSO0FBQTZDaEIsb0NBQThCLEVBQUVBO0FBQTdFLEtBQUQsQ0FBUjtBQUNILEdBRlEsRUFFTixDQUFDQSw4QkFBRCxDQUZNLENBQVQ7QUFJQWUseURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSw0QkFBUjtBQUFzQ2QsbUNBQTZCLEVBQUVBO0FBQXJFLEtBQUQsQ0FBUjtBQUNILEdBRlEsRUFFTixDQUFDQSw2QkFBRCxDQUZNLENBQVQ7QUFJQWEseURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSw2QkFBUjtBQUF1Q1osK0JBQXlCLEVBQUVBO0FBQWxFLEtBQUQsQ0FBUjtBQUNILEdBRlEsRUFFTixDQUFDQSx5QkFBRCxDQUZNLENBQVQ7QUFJQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSx3Q0FBUjtBQUFrRFYsd0NBQWtDLEVBQUVBO0FBQXRGLEtBQUQsQ0FBUjtBQUNILEdBRlEsRUFFTixDQUFDQSxrQ0FBRCxDQUZNLENBQVQ7QUFJQVMseURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSxlQUFSO0FBQXlCUixrQkFBWSxFQUFFQTtBQUF2QyxLQUFELENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsWUFBRCxDQUZNLENBQVQ7QUFJQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1o3RSxZQUFRLENBQUM7QUFBRThFLFVBQUksRUFBRSxlQUFSO0FBQXlCSCxrQkFBWSxFQUFFQTtBQUF2QyxLQUFELENBQVI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsWUFBRCxDQUZNLENBQVQ7QUFHQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ04sTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUssRUFBRTtBQUFDL0QsWUFBTSxFQUFDO0FBQVI7QUFBMUIsS0FDQyxNQUFDLDJEQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUNtRSxZQUFNLEVBQUU7QUFBVCxLQUFwQjtBQUF3QyxZQUFRLE1BQWhEO0FBQWlELFdBQU8sTUFBeEQ7QUFBeUQsV0FBTyxFQUFDLE1BQWpFO0FBQXdFLFNBQUssWUFBSzFFLEdBQUwsV0FBN0U7QUFBK0YsT0FBRyxFQUFFQTtBQUFwRyxJQURELENBRE0sRUFJTixNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBRTtBQUFDVSxlQUFTLEVBQUM7QUFBWDtBQUFoQyxLQUNDLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixXQUFPLEVBQUMsUUFBN0I7QUFBc0MsTUFBRSxFQUFFLEVBQTFDO0FBQThDLE1BQUUsRUFBRSxFQUFsRDtBQUFzRCxXQUFPLEVBQUU7QUFBL0QsS0FDQztBQUFJLGFBQVMsRUFBQztBQUFkLHVDQURELENBREQsRUFJQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFxQyxXQUFPLEVBQUU7QUFBOUMsS0FDUztBQUFHLGFBQVMsRUFBQztBQUFiLDhMQURULENBSkQsRUFPQyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxFQUFqQztBQUFxQyxXQUFPLEVBQUMsUUFBN0M7QUFBc0QsV0FBTyxFQUFFO0FBQS9ELEtBQ0MsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRUcsT0FBTyxDQUFDTjtBQUExQyxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIseUJBREQsRUFFQyxNQUFDLHVEQUFEO0FBQ0MsTUFBRSxFQUFDLDJCQURKO0FBRUMsU0FBSyxFQUFFMEMsc0JBRlI7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFlBQVEsRUFBRSxrQkFBQzBCLENBQUQsRUFBTztBQUNRekIsK0JBQXlCLENBQUN5QixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixFQUFuQixHQUF3QjlELFFBQVEsQ0FBQzRELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhDLEdBQW1ELEVBQXBELENBQXpCO0FBQ0gsS0FOdkI7QUFPc0Isa0JBQWMsRUFBRSxNQUFDLGdFQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QixXQVB0QztBQVFzQixnQkFBWSxFQUNSLE1BQUMsZ0VBQUQ7QUFBZ0IsY0FBUSxFQUFDO0FBQXpCLE9BQ0ksTUFBQyxvRUFBRDtBQUNJLGVBQVMsRUFBQyxnQkFEZDtBQUVJLFVBQUksRUFBRSxFQUZWO0FBR0ksYUFBTyxFQUFFLG1CQUFNO0FBQUN0RCw4QkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQTZCO0FBSGpELE1BREo7QUFUMUIsSUFGRCxDQURELENBREQsRUF3QkMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRVYsT0FBTyxDQUFDTjtBQUExQyxLQUNDLE1BQUMsSUFBRDtBQUFNLFdBQU8sRUFBQztBQUFkLGlDQURELEVBRUMsTUFBQyx1REFBRDtBQUNDLE1BQUUsRUFBQywyQkFESjtBQUVDLFNBQUssRUFBRTRDLDRCQUZSO0FBR0MsUUFBSSxFQUFDLFFBSE47QUFJQyxZQUFRLEVBQUUsa0JBQUN3QixDQUFELEVBQU87QUFDUXZCLHFDQUErQixDQUFDdUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkIsR0FBd0I5RCxRQUFRLENBQUM0RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQyxHQUFtRCxFQUFwRCxDQUEvQjtBQUNILEtBTnZCO0FBT3NCLGtCQUFjLEVBQUUsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekIsV0FQdEM7QUFRc0IsZ0JBQVksRUFDUixNQUFDLGdFQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QixPQUNJLE1BQUMsb0VBQUQ7QUFDSSxlQUFTLEVBQUMsZ0JBRGQ7QUFFSSxVQUFJLEVBQUUsRUFGVjtBQUdJLGFBQU8sRUFBRSxtQkFBTTtBQUFDbkQsNkJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUE0QjtBQUhoRCxNQURKO0FBVDFCLElBRkQsQ0FERCxDQXhCRCxFQStDQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0MsTUFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBdUIsYUFBUyxFQUFFYixPQUFPLENBQUNOO0FBQTFDLEtBQ0MsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQiw4QkFERCxFQUVDLE1BQUMsdURBQUQ7QUFDQyxNQUFFLEVBQUMsMkJBREo7QUFFQyxTQUFLLEVBQUVnRCx5QkFGUjtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMsWUFBUSxFQUFFLGtCQUFDb0IsQ0FBRCxFQUFPO0FBQ1FuQixrQ0FBNEIsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5CLEdBQXdCOUQsUUFBUSxDQUFDNEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEMsR0FBbUQsRUFBcEQsQ0FBNUI7QUFDSCxLQU52QjtBQU9zQixrQkFBYyxFQUFFLE1BQUMsZ0VBQUQ7QUFBZ0IsY0FBUSxFQUFDO0FBQXpCLFdBUHRDO0FBUXNCLGdCQUFZLEVBQ1IsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekIsT0FDSSxNQUFDLG9FQUFEO0FBQ0ksZUFBUyxFQUFDLGdCQURkO0FBRUksVUFBSSxFQUFFLEVBRlY7QUFHSSxhQUFPLEVBQUUsbUJBQU07QUFBQ2hELDJCQUFtQixDQUFDLElBQUQsQ0FBbkI7QUFBMEI7QUFIOUMsTUFESjtBQVQxQixJQUZELENBREQsQ0EvQ0QsRUFzRUMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRWhCLE9BQU8sQ0FBQ047QUFBMUMsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLHdDQURELEVBRUMsTUFBQyx1REFBRDtBQUNDLE1BQUUsRUFBQywyQkFESjtBQUVDLGdCQUFZLEVBQUU4QyxrQ0FGZjtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMsWUFBUSxFQUFFLGtCQUFDc0IsQ0FBRCxFQUFPO0FBQ1FyQiwyQ0FBcUMsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5CLEdBQXdCOUQsUUFBUSxDQUFDNEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEMsR0FBbUQsRUFBcEQsQ0FBckM7QUFDSCxLQU52QjtBQU9zQixrQkFBYyxFQUFFLE1BQUMsZ0VBQUQ7QUFBZ0IsY0FBUSxFQUFDO0FBQXpCLFdBUHRDO0FBUXNCLGdCQUFZLEVBQ1IsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekIsT0FDSSxNQUFDLG9FQUFEO0FBQ0ksZUFBUyxFQUFDLGdCQURkO0FBRUksVUFBSSxFQUFFLEVBRlY7QUFHSSxhQUFPLEVBQUUsbUJBQU07QUFBQzdDLCtCQUF1QixDQUFDLElBQUQsQ0FBdkI7QUFBOEI7QUFIbEQsTUFESjtBQVQxQixJQUZELENBREQsQ0F0RUQsRUE2RkMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRW5CLE9BQU8sQ0FBQ047QUFBMUMsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLG9DQURELEVBRUMsTUFBQyx1REFBRDtBQUNDLE1BQUUsRUFBQywyQkFESjtBQUVDLFNBQUssRUFBRWtELDhCQUZSO0FBR0MsUUFBSSxFQUFDLFFBSE47QUFJQyxZQUFRLEVBQUUsa0JBQUNrQixDQUFELEVBQU87QUFDUWpCLHVDQUFpQyxDQUFDaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkIsR0FBd0I5RCxRQUFRLENBQUM0RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQyxHQUFtRCxFQUFwRCxDQUFqQztBQUNILEtBTnZCO0FBT3NCLGtCQUFjLEVBQUUsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekIsV0FQdEM7QUFRc0IsZ0JBQVksRUFDUixNQUFDLGdFQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QixPQUNJLE1BQUMsb0VBQUQ7QUFDSSxlQUFTLEVBQUMsZ0JBRGQ7QUFFSSxVQUFJLEVBQUUsRUFGVjtBQUdJLGFBQU8sRUFBRSxtQkFBTTtBQUFDMUMsOEJBQXNCLENBQUMsSUFBRCxDQUF0QjtBQUE2QjtBQUhqRCxNQURKO0FBVDFCLElBRkQsQ0FERCxDQTdGRCxFQW9IQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0MsTUFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBdUIsYUFBUyxFQUFFdEIsT0FBTyxDQUFDTjtBQUExQyxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsbUNBREQsRUFFQyxNQUFDLHVEQUFEO0FBQ0MsTUFBRSxFQUFDLDJCQURKO0FBRUMsU0FBSyxFQUFFb0QsNkJBRlI7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFlBQVEsRUFBRSxrQkFBQ2dCLENBQUQsRUFBTztBQUNRZixzQ0FBZ0MsQ0FBQ2UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkIsR0FBd0I5RCxRQUFRLENBQUM0RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQyxHQUFtRCxFQUFwRCxDQUFoQztBQUNILEtBTnZCO0FBT3NCLGtCQUFjLEVBQUUsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekIsV0FQdEM7QUFRc0IsZ0JBQVksRUFDUixNQUFDLGdFQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QixPQUNJLE1BQUMsb0VBQUQ7QUFDSSxlQUFTLEVBQUMsZ0JBRGQ7QUFFSSxVQUFJLEVBQUUsRUFGVjtBQUdJLGFBQU8sRUFBRSxtQkFBTTtBQUFDdkMsMEJBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUF5QjtBQUg3QyxNQURKO0FBVDFCLElBRkQsQ0FERCxDQXBIRCxFQTJJQyxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFO0FBQXZCLEtBQ0MsTUFBQyw2REFBRDtBQUFhLGFBQVMsTUFBdEI7QUFBdUIsYUFBUyxFQUFFekIsT0FBTyxDQUFDTjtBQUExQyxLQUNDLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUM7QUFBcEIsNkJBREQsRUFFQyxNQUFDLHVEQUFEO0FBQ0MsTUFBRSxFQUFDLDJCQURKO0FBRUMsU0FBSyxFQUFFc0QseUJBRlI7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFlBQVEsRUFBRSxrQkFBQ2MsQ0FBRCxFQUFPO0FBQ1FiLGtDQUE0QixDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixFQUFuQixHQUF3QjlELFFBQVEsQ0FBQzRELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhDLEdBQW1ELEVBQXBELENBQTVCO0FBQ0gsS0FOdkI7QUFPc0Isa0JBQWMsRUFBRSxNQUFDLGdFQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QixXQVB0QztBQVFzQixnQkFBWSxFQUNSLE1BQUMsZ0VBQUQ7QUFBZ0IsY0FBUSxFQUFDO0FBQXpCLE9BQ0ksTUFBQyxvRUFBRDtBQUNJLGVBQVMsRUFBQyxnQkFEZDtBQUVJLFVBQUksRUFBRSxFQUZWO0FBR0ksYUFBTyxFQUFFLG1CQUFNO0FBQUNwQyx3QkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQXVCO0FBSDNDLE1BREo7QUFUMUIsSUFGRCxDQURELENBM0lELEVBa0tDLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsS0FDQyxNQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUF1QixhQUFTLEVBQUU1QixPQUFPLENBQUNOO0FBQTFDLEtBQ0MsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQiwwQ0FERCxFQUVDLE1BQUMsdURBQUQ7QUFDQyxNQUFFLEVBQUMsMkJBREo7QUFFQyxTQUFLLEVBQUV3RCxrQ0FGUjtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMsWUFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQU87QUFDUVgsMkNBQXFDLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CLEVBQW5CLEdBQXdCOUQsUUFBUSxDQUFDNEQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEMsR0FBbUQsRUFBcEQsQ0FBckM7QUFDSCxLQU52QjtBQU9zQixrQkFBYyxFQUFFLE1BQUMsZ0VBQUQ7QUFBZ0IsY0FBUSxFQUFDO0FBQXpCLFdBUHRDO0FBUXNCLGdCQUFZLEVBQ1IsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekIsT0FDSSxNQUFDLG9FQUFEO0FBQ0ksZUFBUyxFQUFDLGdCQURkO0FBRUksVUFBSSxFQUFFLEVBRlY7QUFHSSxhQUFPLEVBQUUsbUJBQU07QUFBQ2pDLG1DQUEyQixDQUFDLElBQUQsQ0FBM0I7QUFBa0M7QUFIdEQsTUFESjtBQVQxQixJQUZELENBREQsQ0FsS0QsRUF5TEMsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNDLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLE1BQXRCO0FBQXVCLGFBQVMsRUFBRS9CLE9BQU8sQ0FBQ047QUFBMUMsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDO0FBQXBCLGFBREQsRUFFQyxNQUFDLHVEQUFEO0FBQ0MsTUFBRSxFQUFDLDJCQURKO0FBRUMsU0FBSyxFQUFFMEQsWUFGUjtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSUMsWUFBUSxFQUFFLGtCQUFDVSxDQUFELEVBQU87QUFDUVQscUJBQWUsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsRUFBbkIsR0FBd0I5RCxRQUFRLENBQUM0RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQyxHQUFtRCxFQUFwRCxDQUFmO0FBQ0gsS0FOdkI7QUFPc0Isa0JBQWMsRUFBRSxNQUFDLGdFQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QixXQVB0QztBQVFzQixnQkFBWSxFQUNSLE1BQUMsZ0VBQUQ7QUFBZ0IsY0FBUSxFQUFDO0FBQXpCLE9BQ0ksTUFBQyxvRUFBRDtBQUNJLGVBQVMsRUFBQyxnQkFEZDtBQUVJLFVBQUksRUFBRSxFQUZWO0FBR0ksYUFBTyxFQUFFLG1CQUFNO0FBQUM5QiwyQkFBbUIsQ0FBQyxJQUFELENBQW5CO0FBQTBCO0FBSDlDLE1BREo7QUFUMUIsSUFGRCxDQURELENBekxELEVBZ05DLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFtQixNQUFFLEVBQUU7QUFBdkIsS0FDQyxNQUFDLDZEQUFEO0FBQWEsYUFBUyxNQUF0QjtBQUF1QixhQUFTLEVBQUVsQyxPQUFPLENBQUNOO0FBQTFDLEtBQ0MsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQztBQUFwQixhQURELEVBRUMsTUFBQyx1REFBRDtBQUNDLE1BQUUsRUFBQywyQkFESjtBQUVDLFNBQUssRUFBRVQsSUFBSSxDQUFDd0UsWUFGYjtBQUdDLFFBQUksRUFBQyxRQUhOO0FBSXNCLGtCQUFjLEVBQUUsTUFBQyxnRUFBRDtBQUFnQixjQUFRLEVBQUM7QUFBekI7QUFKdEMsSUFGRCxDQURELENBaE5ELENBUEQsRUFtT1UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLFdBQU8sRUFBQyxRQUE3QjtBQUFzQyxNQUFFLEVBQUUsRUFBMUM7QUFBOEMsTUFBRSxFQUFFLEVBQWxEO0FBQXNELFdBQU8sRUFBRTtBQUEvRCxLQUNJO0FBQUcsYUFBUyxFQUFDO0FBQWIsaURBQ0ksTUFBQyxvRUFBRDtBQUNJLFFBQUksRUFBRSxFQURWO0FBRUksYUFBUyxFQUFDLGdCQUZkO0FBR0ksV0FBTyxFQUFFLG1CQUFNO0FBQUNsRCxnQ0FBMEIsQ0FBQyxJQUFELENBQTFCO0FBQWlDO0FBSHJELElBREosQ0FESixDQW5PVixFQTRPVSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsV0FBTyxFQUFDLFFBQTdCO0FBQXNDLE1BQUUsRUFBRSxFQUExQztBQUE4QyxNQUFFLEVBQUUsRUFBbEQ7QUFBc0QsV0FBTyxFQUFFO0FBQS9ELEtBQ0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRTtBQUF2QixLQUNJLE1BQUMsc0RBQUQ7QUFDSSxhQUFTLEVBQUMsY0FEZDtBQUVJLFdBQU8sRUFBRSxtQkFBSztBQUNWMEQsa0RBQUssQ0FBQztBQUNGQyxjQUFNLEVBQUUsTUFETjtBQUVGQyxXQUFHLEVBQUUsV0FGSDtBQUdGQyxZQUFJLEVBQUU7QUFDRm5GLGNBQUksRUFBRUEsSUFESjtBQUVGb0YsZ0JBQU0sRUFBRXBGLElBQUksQ0FBQ3FGO0FBRlg7QUFISixPQUFELENBQUwsQ0FRS0MsSUFSTCxDQVFVLFVBQVVDLEdBQVYsRUFBZTtBQUNqQkMsb0JBQVksQ0FBQ0MsVUFBYixDQUF3QixNQUF4QjtBQUNBOUYsY0FBTSxDQUFDK0YsSUFBUCxDQUFZLFNBQVo7QUFDSCxPQVhMLFdBWVcsVUFBVUMsS0FBVixFQUFpQjtBQUNwQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxPQWRMO0FBZUgsS0FsQkw7QUFtQkksU0FBSyxFQUFFO0FBQUU3RSxXQUFLLEVBQUU7QUFBVCxLQW5CWDtBQW9CSSxXQUFPLEVBQUMsV0FwQlo7QUFxQkksUUFBSSxFQUFDLElBckJUO0FBc0JJLFlBQVEsRUFBRXVEO0FBdEJkLFlBREosQ0FESixDQTVPVixFQTJRTSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFaEQsdUJBQWI7QUFBc0MsVUFBTSxFQUFFRTtBQUE5QyxLQUNRLE1BQUMscURBQUQsQ0FBTyxJQUFQLDZ3QkFEUixFQUlRLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FKUixDQTNRTixFQXNSVSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyxtQkFBYjtBQUFrQyxVQUFNLEVBQUVFO0FBQTFDLEtBQ0ksTUFBQyxxREFBRCxDQUFPLElBQVAsd0ZBREosRUFFSSxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQTtBQUFyQyxhQURKLENBRkosQ0F0UlYsRUErUlUsTUFBQyxxREFBRDtBQUFPLFFBQUksRUFBRUMsa0JBQWI7QUFBaUMsVUFBTSxFQUFFRTtBQUF6QyxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLG1HQURKLEVBRUksTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFESixDQUZKLENBL1JWLEVBd1NVLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVDLGdCQUFiO0FBQStCLFVBQU0sRUFBRUU7QUFBdkMsS0FDSSxNQUFDLHFEQUFELENBQU8sSUFBUCxxRUFESixFQUVJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FGSixDQXhTVixFQWlUVSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyxvQkFBYjtBQUFtQyxVQUFNLEVBQUVFO0FBQTNDLEtBQ0ksTUFBQyxxREFBRCxDQUFPLElBQVAsd0RBREosRUFFSSxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQTtBQUFyQyxhQURKLENBRkosQ0FqVFYsRUEwVFUsTUFBQyxxREFBRDtBQUFPLFFBQUksRUFBRUMsbUJBQWI7QUFBa0MsVUFBTSxFQUFFRTtBQUExQyxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLDBJQURKLEVBRUksTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFESixDQUZKLENBMVRWLEVBbVVVLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVDLGVBQWI7QUFBOEIsVUFBTSxFQUFFRTtBQUF0QyxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLHdHQURKLEVBRUksTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFESixDQUZKLENBblVWLEVBNFVVLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVDLGFBQWI7QUFBNEIsVUFBTSxFQUFFRTtBQUFwQyxLQUNJLE1BQUMscURBQUQsQ0FBTyxJQUFQLHFEQURKLEVBRUksTUFBQyxxREFBRCxDQUFPLE1BQVAsUUFDSSxNQUFDLHNEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFdBQU8sRUFBRUE7QUFBckMsYUFESixDQUZKLENBNVVWLEVBcVZVLE1BQUMscURBQUQ7QUFBTyxRQUFJLEVBQUVDLHdCQUFiO0FBQXVDLFVBQU0sRUFBRUU7QUFBL0MsS0FDSSxNQUFDLHFEQUFELENBQU8sSUFBUCx5SEFESixFQUVJLE1BQUMscURBQUQsQ0FBTyxNQUFQLFFBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixXQUFPLEVBQUVBO0FBQXJDLGFBREosQ0FGSixDQXJWVixFQThWVSxNQUFDLHFEQUFEO0FBQU8sUUFBSSxFQUFFQyxnQkFBYjtBQUErQixVQUFNLEVBQUVFO0FBQXZDLEtBQ0ksTUFBQyxxREFBRCxDQUFPLElBQVAsOEZBREosRUFFSSxNQUFDLHFEQUFELENBQU8sTUFBUCxRQUNJLE1BQUMsc0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsV0FBTyxFQUFFQTtBQUFyQyxhQURKLENBRkosQ0E5VlYsQ0FKTSxDQURKO0FBOFdIOztHQXpmdUI1RCxtQjtVQVFMTSxxRDs7O0tBUktOLG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtb250aGx5RXhwZW5zZXMuanMuZWNiMjE5ZmNhYjAxMzE0N2UxMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGlzcGF0Y2hDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCB7IEZvcm1Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0Zvcm1Db250ZXh0XCI7XHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1F1ZXN0aW9uQ2lyY2xlfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCI7XHJcbmltcG9ydCB7TW9kYWwsIFByb2dyZXNzQmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIENzc0Jhc2VsaW5lLCBJbnB1dEFkb3JubWVudCwgbWFrZVN0eWxlcywgSW5wdXQsIElucHV0TGFiZWwsIEZvcm1Db250cm9sfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb250aGx5RXhwZW5zZXNGb3JtKCkge1xyXG4gICAgLy8gbG9jYWxzdG9yYWdlIGtleXNcclxuICAgIGxldCByZW50O1xyXG4gICAgbGV0IG1vcnRnYWdlQ3VycjtcclxuICAgIGxldCBtb3J0Z2FnZU1vbnRobHk7XHJcbiAgICBsZXQgbW9ydGdhZ2VDb21iaW5lZDtcclxuXHJcbiAgICAvLyBob29rcyBkZWZpbml0aW9uc1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoRGlzcGF0Y2hDb250ZXh0KTtcclxuICAgIGNvbnN0IGZvcm0gPSB1c2VDb250ZXh0KEZvcm1Db250ZXh0KTtcclxuXHJcbiAgICAvLyBwcm9ncmVzc1xyXG4gICAgY29uc3Qgbm93ID0gOTU7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0ICBkaXNwbGF5OiAnZmxleCcsXHJcblx0XHQgIGZsZXhXcmFwOiAnd3JhcCcsXHJcblx0XHR9LFxyXG5cdFx0bWFyZ2luOiB7XHJcblx0XHQgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdH0sXHJcblx0XHR3aXRob3V0TGFiZWw6IHtcclxuXHRcdCAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0fSxcclxuXHRcdHRleHRGaWVsZDoge1xyXG5cdFx0ICB3aWR0aDogJzI1Y2gnLFxyXG5cdFx0fSxcclxuXHR9KSk7XHJcblx0XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgbW9ydGdhZ2VDdXJyID0gZm9ybS5tb3J0Z2FnZUN1cnJlbnRCYWxhbmNlICE9PSAnJyA/IHBhcnNlSW50KGZvcm0ubW9ydGdhZ2VDdXJyZW50QmFsYW5jZSkgOiAnJztcclxuICAgIG1vcnRnYWdlTW9udGhseSA9IGZvcm0ubW9ydGdhZ2VNb250aGx5UGF5bWVudCAhPT0gJycgPyBwYXJzZUludChmb3JtLm1vcnRnYWdlTW9udGhseVBheW1lbnQpIDogJyc7XHJcbiAgICByZW50ID0gZm9ybS5tb250aGx5UmVudDtcclxuICAgIG1vcnRnYWdlQ29tYmluZWQgPSBtb3J0Z2FnZUN1cnIgKyBtb3J0Z2FnZU1vbnRobHk7XHJcblxyXG4gICAgLy8gbW9kYWxcclxuICAgIGNvbnN0IFtzaG93V2h5RXhwZW5zZXNMb29rSGlnaCwgc2V0U2hvd1doeUV4cGVuc2VzTG9va0hpZ2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VXaHlFeHBlbnNlc0xvb2tIaWdoID0gKCkgPT4gc2V0U2hvd1doeUV4cGVuc2VzTG9va0hpZ2goZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dFeHBlbnNlTW9ydGdhZ2UsIHNldFNob3dFeHBlbnNlTW9ydGdhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTaG93RXhwZW5zZU1vcnRnYWdlID0gKCkgPT4gc2V0U2hvd0V4cGVuc2VNb3J0Z2FnZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4cGVuc2VIb3VzaW5nLCBzZXRTaG93RXhwZW5zZUhvdXNpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTaG93RXhwZW5zZUhvdXNpbmcgPSAoKSA9PiBzZXRTaG93RXhwZW5zZUhvdXNpbmcoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dFeHBlbnNlUGhvbmUsIHNldFNob3dFeHBlbnNlUGhvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VTaG93RXhwZW5zZVBob25lID0gKCkgPT4gc2V0U2hvd0V4cGVuc2VQaG9uZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4cGVuc2VHcm9jZXJpZXMsIHNldFNob3dFeHBlbnNlR3JvY2VyaWVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlU2hvd0V4cGVuc2VHcm9jZXJpZXMgPSAoKSA9PiBzZXRTaG93RXhwZW5zZUdyb2NlcmllcyhmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4cGVuc2VTaG9wcGluZywgc2V0U2hvd0V4cGVuc2VTaG9wcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlU2hvcHBpbmcgPSAoKSA9PiBzZXRTaG93RXhwZW5zZVNob3BwaW5nKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhwZW5zZUNhcnMsIHNldFNob3dFeHBlbnNlQ2Fyc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlQ2FycyA9ICgpID0+IHNldFNob3dFeHBlbnNlQ2FycyhmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0NoaWxkY2FyZSwgc2V0U2hvd0NoaWxkY2FyZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dDaGlsZGNhcmUgPSAoKSA9PiBzZXRTaG93Q2hpbGRjYXJlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93RXhwZW5zZURpc2NyZXRpb25hcnksIHNldFNob3dFeHBlbnNlRGlzY3JldGlvbmFyeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlRGlzY3JldGlvbmFyeSA9ICgpID0+IHNldFNob3dFeHBlbnNlRGlzY3JldGlvbmFyeShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd0V4cGVuc2VPdGhlciwgc2V0U2hvd0V4cGVuc2VPdGhlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZVNob3dFeHBlbnNlT3RoZXIgPSAoKSA9PiBzZXRTaG93RXhwZW5zZU90aGVyKGZhbHNlKTtcclxuXHJcbiAgICAvLyBsb2NhbCBzdGF0ZSBzZXR1cFxyXG4gICAgY29uc3QgW2V4cGVuc2VNb3J0Z2FnZUFuZFJlbnQsIHNldEV4cGVuc2VNb3J0Z2FnZUFuZFJlbnRdID0gdXNlU3RhdGUocmVudCA+IDAgPyByZW50IDogbW9ydGdhZ2VDb21iaW5lZCk7XHJcbiAgICBjb25zdCBbZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcywgc2V0RXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllc10gPSB1c2VTdGF0ZSgxMDAwKTtcclxuICAgIGNvbnN0IFtleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sLCBzZXRFeHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sXSA9IHVzZVN0YXRlKDcwMCk7XHJcbiAgICBjb25zdCBbZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSwgc2V0RXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZV0gPSB1c2VTdGF0ZSgxMDApO1xyXG4gICAgY29uc3QgW2V4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZywgc2V0RXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nXSA9IHVzZVN0YXRlKDcwMCk7XHJcbiAgICBjb25zdCBbZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQsIHNldEV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0XSA9IHVzZVN0YXRlKDQ1MCk7XHJcbiAgICBjb25zdCBbZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiwgc2V0RXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzLCBzZXRFeHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzXSA9IHVzZVN0YXRlKDQ1MCk7XHJcbiAgICBjb25zdCBbZXhwZW5zZU90aGVyLCBzZXRFeHBlbnNlT3RoZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBleHBlbnNlc1xyXG4gICAgbGV0IHRvdGFsID0gZXhwZW5zZU1vcnRnYWdlQW5kUmVudCArIGV4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXMgKyBleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sICsgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSArIGV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyArIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0ICsgZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbiArIGV4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHMgKyBleHBlbnNlT3RoZXI7XHJcbiAgICAvLyB1c2UgdG90YWwgYXMgZGVmYXVsdCBzdGF0ZVxyXG4gICAgY29uc3QgW2V4cGVuc2VUb3RhbCwgc2V0RXhwZW5zZVRvdGFsXSA9IHVzZVN0YXRlKHRvdGFsKTtcclxuXHJcbiAgICAvL2VmZmVjdHMgZm9yIGNvbnRleHQgYXBpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGVuc2VUb3RhbChleHBlbnNlTW9ydGdhZ2VBbmRSZW50ICsgZXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcyArIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wgKyBleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlICsgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nICsgZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQgKyBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uICsgZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0cyArIGV4cGVuc2VPdGhlcik7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0RXhwZW5zZVRvdGFsKGV4cGVuc2VNb3J0Z2FnZUFuZFJlbnQgKyBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzICsgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCArIGV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUgKyBleHBlbnNlU2hvcHBpbmdGaXRuZXNzR3Jvb21pbmcgKyBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCArIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24gKyBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzICsgZXhwZW5zZU90aGVyKTtcclxuICAgICAgICBpZihleHBlbnNlVG90YWwgPiAwKXtcclxuICAgICAgICAgICAgc2V0SXNOZXh0KGZhbHNlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRJc05leHQodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LFtleHBlbnNlT3RoZXIsIGV4cGVuc2VUb3RhbCxcclxuICAgICAgICBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzLFxyXG4gICAgICAgIGV4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb24sXHJcbiAgICAgICAgZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQsXHJcbiAgICAgICAgZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nLFxyXG4gICAgICAgIGV4cGVuc2VQaG9uZUludGVybmV0Q2FibGUsXHJcbiAgICAgICAgZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbCxcclxuICAgICAgICBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzLFxyXG4gICAgICAgIGV4cGVuc2VNb3J0Z2FnZUFuZFJlbnRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFWFBFTlNFX01PUlRHQUdFX1JFTlRcIiwgZXhwZW5zZU1vcnRnYWdlQW5kUmVudDogZXhwZW5zZU1vcnRnYWdlQW5kUmVudCB9KTtcclxuICAgIH0sIFtleHBlbnNlTW9ydGdhZ2VBbmRSZW50XSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVhQRU5TRV9IT1VTSU5HX0JJTExTX1VUSUxJVElFU1wiLCBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzOiBleHBlbnNlSG91c2luZ0JpbGxzVXRpbGl0aWVzIH0pO1xyXG4gICAgfSwgW2V4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFWFBFTlNFX0dST0NFUklFU19SRVNUQVVSQU5UU19BTENPSE9MXCIsIGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2w6IGV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2wgfSk7XHJcbiAgICB9LCBbZXhwZW5zZUdyb2Nlcmllc1Jlc3RhdXJhbnRzQWxjb2hvbF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfUEhPTkVfSU5URVJORVRfQ0FCTEVcIiwgZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZTogZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZSB9KTtcclxuICAgIH0sIFtleHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRVhQRU5TRV9TSE9QUElOR19GSVRORVNTX0dST09NSU5HXCIsIGV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZzogZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nIH0pO1xyXG4gICAgfSwgW2V4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZ10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfQ0FSU19UQVhJU19UUkFOU0lUXCIsIGV4cGVuc2VDYXJzVGF4aXNQdWJsaWNUcmFuc2l0OiBleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdCB9KTtcclxuICAgIH0sIFtleHBlbnNlQ2Fyc1RheGlzUHVibGljVHJhbnNpdF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfQ0hJTERDQVJFX0VEVUNBVElPTlwiLCBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uOiBleHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uIH0pO1xyXG4gICAgfSwgW2V4cGVuc2VDaGlsZGNhcmVFZHVjYXRpb25dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFWFBFTlNFX0RJU0NSRVRJT05BUllfVFJBVkVMX1JFQ19HSUZUU1wiLCBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzOiBleHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzIH0pO1xyXG4gICAgfSwgW2V4cGVuc2VEaXNjcmV0aW9uYXJ5VHJhdmVsUmVjR2lmdHNdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJFWFBFTlNFX09USEVSXCIsIGV4cGVuc2VPdGhlcjogZXhwZW5zZU90aGVyIH0pO1xyXG4gICAgfSwgW2V4cGVuc2VPdGhlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkVYUEVOU0VfVE9UQUxcIiwgZXhwZW5zZVRvdGFsOiBleHBlbnNlVG90YWwgfSk7XHJcbiAgICB9LCBbZXhwZW5zZVRvdGFsXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17e21hcmdpbjonMTBweCBhdXRvJ319PlxyXG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgc3R5bGU9e3toZWlnaHQ6ICcwLjVyZW0nfX0gYW5pbWF0ZWQgc3RyaXBlZCB2YXJpYW50PVwiaW5mb1wiIGxhYmVsPXtgJHtub3d9JSBEb25lYH0gbm93PXtub3d9IC8+XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fT5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8aDQgY2xhc3NOYW1lPSdoZWFkZXInPldoYXQgYXJlIHlvdXIgbW9udGhseSBleHBlbnNlcz88L2g0PlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+QmVsb3csIHdl4oCZdmUgZXN0aW1hdGVkIHlvdXIgZmFtaWx54oCZcyBleHBlbnNlcyBiYXNlZCBvbiB0aGUgc3BlbmRpbmcgcGF0dGVybnMgb2YgbWlsbGlvbnMgb2YgQ2FuYWRpYW5zLiBJZiBhbnkgb2YgdGhlc2UgZXN0aW1hdGVzIHNlZW0gdG9vIGhpZ2ggb3IgdG9vIGxvdywgcGxlYXNlIGVkaXQgdGhlbS48L3A+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5Nb3J0Z2FnZSBhbmQgcmVudDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZU1vcnRnYWdlQW5kUmVudH1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBlbnNlTW9ydGdhZ2VBbmRSZW50KGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeHBlbnNlTW9ydGdhZ2UodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPkhvdXNpbmcgYmlsbHMgJiB1dGlsaXRpZXM8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2V4cGVuc2VIb3VzaW5nQmlsbHNVdGlsaXRpZXN9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwZW5zZUhvdXNpbmdCaWxsc1V0aWxpdGllcyhlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeHBlbnNlSG91c2luZyh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+UGhvbmUsIEludGVybmV0LCBDYWJsZTwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZVBob25lSW50ZXJuZXRDYWJsZX1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBlbnNlUGhvbmVJbnRlcm5ldENhYmxlKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4cGVuc2VQaG9uZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+R3JvY2VyaWVzLCByZXN0YXVyYW50cyAmIGFsY29ob2w8L0lucHV0TGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtleHBlbnNlR3JvY2VyaWVzUmVzdGF1cmFudHNBbGNvaG9sfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VHcm9jZXJpZXNSZXN0YXVyYW50c0FsY29ob2woZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RXhwZW5zZUdyb2Nlcmllcyh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+U2hvcHBpbmcsIGZpdG5lc3MgJiBncm9vbWluZzwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZVNob3BwaW5nRml0bmVzc0dyb29taW5nfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VTaG9wcGluZ0ZpdG5lc3NHcm9vbWluZyhlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeHBlbnNlU2hvcHBpbmcodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPkNhcnMsIHRheGlzLCBwdWJsaWMgdHJhbnNpdDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXR9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwZW5zZUNhcnNUYXhpc1B1YmxpY1RyYW5zaXQoZS50YXJnZXQudmFsdWUgIT09ICcnID8gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQWRvcm5tZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRTaG93RXhwZW5zZUNhcnModHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgZnVsbFdpZHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBodG1sRm9yPVwic3RhbmRhcmQtYWRvcm5tZW50LWFtb3VudFwiPkNoaWxkY2FyZSAmIGVkdWNhdGlvbjwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZUNoaWxkY2FyZUVkdWNhdGlvbn1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBlbnNlQ2hpbGRjYXJlRWR1Y2F0aW9uKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0NoaWxkY2FyZSh0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBmdWxsV2lkdGggY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XHJcblx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCI+RGlzY3JldGlvbmFyeSwgdHJhdmVsLCByZWMgJiBnaWZ0czwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZURpc2NyZXRpb25hcnlUcmF2ZWxSZWNHaWZ0c31cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFeHBlbnNlRGlzY3JldGlvbmFyeVRyYXZlbFJlY0dpZnRzKGUudGFyZ2V0LnZhbHVlICE9PSAnJyA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5KHRydWUpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5PdGhlcjwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17ZXhwZW5zZU90aGVyfVxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cGVuc2VPdGhlcihlLnRhcmdldC52YWx1ZSAhPT0gJycgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSkgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dFeHBlbnNlT3RoZXIodHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTB9PlxyXG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGZ1bGxXaWR0aCBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cclxuXHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1hbW91bnRcIj5Ub3RhbDwvSW5wdXRMYWJlbD5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtYW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Zm9ybS5leHBlbnNlVG90YWx9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSBqdXN0aWZ5PVwiY2VudGVyXCIgeHM9ezEyfSBzbT17MTJ9IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5XaHkgZG8gdGhlc2UgZXhwZW5zZXMgbG9vayBoaWdoPyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsxNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0U2hvd1doeUV4cGVuc2VzTG9va0hpZ2godHJ1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblx0XHRcdDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0ganVzdGlmeT1cImNlbnRlclwiIHhzPXsxMn0gc209ezEyfSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9mb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IGZvcm0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1JZDogZm9ybS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3F1b3RlcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblx0XHR7Lyphc2sgYWJvdXQgb3RoZXIgaW5jb21lKi99XHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dXaHlFeHBlbnNlc0xvb2tIaWdofSBvbkhpZGU9e2hhbmRsZUNsb3NlV2h5RXhwZW5zZXNMb29rSGlnaH0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5UaGUgdHJ1dGggaXMsIG1vc3QgcGVvcGxlIHRlbmQgdG8gdW5kZXJlc3RpbWF0ZSB0aGVpciBtb250aGx5IGV4cGVuc2VzLiBXaGVuIGVzdGltYXRpbmcgbW9udGhseSBleHBlbnNlcywgaXTigJlzIGNvbW1vbiBmb3IgcGVvcGxlIHRvIHJlbWVtYmVyIGxhcmdlIHJlY3VycmluZyBpdGVtcywgbGlrZSBtb3J0Z2FnZSBvciByZW50IHBheW1lbnRzLCBoeWRybyBiaWxscywgYXV0byBwYXltZW50cywgY2VsbCBwaG9uZSBiaWxscywgYW5kIGNoaWxkY2FyZSBjb3N0cy4gSG93ZXZlciwgaXTigJlzIHF1aXRlIGNvbW1vbiBmb3IgcGVvcGxlIHRvIGxlYXZlIG91dCB0aGUgbm9uLXJlY3VycmluZyDigJxvbmUtdGltZeKAnSBjb3N0cywgbGlrZSBnaWZ0cyAod2VkZGluZ3MsIGJpcnRoZGF5cywgYW5uaXZlcnNhcmllcyksIHZhY2F0aW9ucywgcmVjcmVhdGlvbmFsIGFjdGl2aXRpZXMsIHRpY2tldHMgdG8gY29uY2VydHMgYW5kIHNwb3J0cyBnYW1lcywgdGF4aXMvVWJlcnMgYW5kIG5pZ2h0cyBvdXQgd2l0aCB5b3VyIGZyaWVuZHMgb3IgZmFtaWx5LlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBJZiB5b3VyIGV4cGVuc2VzIGxvb2tzIG9mZiwgY2xpY2sgb24gdGhlIGluZm8gYnV0dG9ucyBiZXNpZGUgZWFjaCBjYXRlZ29yeSB0byBzZWUgYSBkZXNjcmlwdGlvbiBvZiB0aGUgaXRlbXMgaW5jbHVkZWQgaW4gdGhhdCBjYXRlZ29yeS4gVGhlbiwgZmVlbCBmcmVlIHRvIGFkanVzdCB0aGUgbnVtYmVycyBhcyB5b3Ugc2VlIGZpdCB0byB1cGRhdGUgeW91ciBtb250aGx5IGV4cGVuc2VzLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VXaHlFeHBlbnNlc0xvb2tIaWdofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7Lyptb3J0Z2FnZSBhbmQgcmVudCovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0V4cGVuc2VNb3J0Z2FnZX0gb25IaWRlPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlTW9ydGdhZ2V9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+V2UgaGF2ZSBwcmUtY2FsY3VsYXRlZCB5b3VyIHJlbnQgb3IgbW9ydGdhZ2UgZXhwZW5zZXMgZnJvbSB0aGUgcHJldmlvdXMgZm9ybS48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VNb3J0Z2FnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qaG91c2luZyBleHBlbnNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhwZW5zZUhvdXNpbmd9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZUhvdXNpbmd9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+UHJvcGVydHkgdGF4LCBjb25kbyBmZWVzLCByZXBhaXJzIGFuZCBtYWludGVuYW5jZSwgaG9tZSBpbnN1cmFuY2UsIGdhcy9lbGVjdHJpY2l0eS9oeWRybzwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZUhvdXNpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKnBob25lIGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeHBlbnNlUGhvbmV9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZVBob25lfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkNlbGwgcGhvbmVzLCBjYWJsZSwgaW50ZXJuZXQsIE5ldGZsaXgsIG90aGVyIHN1YnNjcmlwdGlvbnM8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VQaG9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qZ3JvY2llcmVzIGV4cGVuc2UqL31cclxuICAgICAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dFeHBlbnNlR3JvY2VyaWVzfSBvbkhpZGU9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VHcm9jZXJpZXN9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+R3JvY2VyaWVzLCByZXN0YXVyYW50cywgY29mZmVlIHNob3BzLCBhbGNvaG9sPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlR3JvY2VyaWVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7LypzaG9wcGluZyBleHBlbnNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhwZW5zZVNob3BwaW5nfSBvbkhpZGU9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VTaG9wcGluZ30+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5DbG90aGVzLCBzaG9lcywgc2Fsb25zICYgaGFpciBjYXJlLCBwZXJzb25hbCBoeWdpZW5lLCBneW0gbWVtYmVyc2hpcHMvY2xhc3NlcywgZHJ5Y2xlYW5pbmcsIGhlYWx0aCwgZXllZ2xhc3Nlcy9jb250YWN0cywgZGVudGFsPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZVNob3dFeHBlbnNlU2hvcHBpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKmNhcnMgZXhwZW5zZSovfVxyXG4gICAgICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0V4cGVuc2VDYXJzfSBvbkhpZGU9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VDYXJzfT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PkNhciBwYXltZW50cywgYXV0byBpbnN1cmFuY2UsIGdhcywgcGFya2luZywgbWFpbnRlbmFuY2UvcmVwYWlycywgdGF4aXMvVWJlcnMsIHB1YmxpYyB0cmFuc2l0LjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZUNhcnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIHsvKmNoaWxkY2FyZSBleHBlbnNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93Q2hpbGRjYXJlfSBvbkhpZGU9e2hhbmRsZUNsb3NlU2hvd0NoaWxkY2FyZX0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5EYXljYXJlLCBuYW5uaWVzLCBwcml2YXRlIHNjaG9vbHMsIHR1dG9ycy48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hvd0NoaWxkY2FyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgey8qZGlzY3JldGlvbmFyeSBleHBlbnNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhwZW5zZURpc2NyZXRpb25hcnl9IG9uSGlkZT17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZURpc2NyZXRpb25hcnl9PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+VmFjYXRpb25zLCBlbnRlcnRhaW5tZW50LCByZWNyZWF0aW9uYWwgYWN0aXZpdGllcywgc3BvcnRzLCBlbGVjdHJvbmljcywgZ2lmdHMgKGJpcnRoZGF5cywgaG9saWRheXMsIHdlZGRpbmdzKS48L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VEaXNjcmV0aW9uYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB7LypvdGhlciBleHBlbnNlKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93RXhwZW5zZU90aGVyfSBvbkhpZGU9e2hhbmRsZUNsb3NlU2hvd0V4cGVuc2VPdGhlcn0+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT5BbnkgbW9udGhseSBleHBlbnNlcyB5b3UgaGF2ZSB0aGF0IGRvbuKAmXQgZml0IGludG8gb25lIG9mIHRoZSBhYm92ZSBjYXRlZ29yaWVzLjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VTaG93RXhwZW5zZU90aGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9