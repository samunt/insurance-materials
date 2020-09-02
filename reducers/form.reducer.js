const reducer = (state, action) => {
    switch(action.type){
        case "ID":
            if (state.id) {
                return state
            } else {
                return {...state, id: action.id}
            }
        case "ADD_SPOUSE":
            return {...state, spouse: action.spouse};
        case "SPOUSE_AGE":
            return {...state, spouseAge: action.spouseAge};
        case "HAS_CHILDREN":
            return {...state, hasChildren: action.hasChildren};
        case "NUMBER_OF_CHILDREN":
            return {...state, numberOfChildren: action.numberOfChildren};
        case "CHILDREN_AGE_ARRAY":
            return {...state, childrenAgeArray: action.childrenAgeArray};
        case "PAY_FOR_COLLEGE":
            return {...state, payForCollege: action.payForCollege};
        case "DOB":
            return {...state, dob: action.dob};
        case "SEX":
            return {...state, sex: action.sex};
        case "TOBACCO":
            return {...state, tobacco: action.tobacco};
        case "HEALTH_CONDITION":
            return {...state, healthCondition: action.healthCondition};
        case "YOUR_INCOME":
            return {...state, yourIncome: action.yourIncome};
        case "SPOUSE_INCOME":
            return {...state, spouseIncome: action.spouseIncome};
        case "RENT_OR_OWN":
            return {...state, rentOrOwn: action.rentOrOwn};
        case "MONTHLY_RENT":
            return {...state, monthlyRent: action.monthlyRent};
        case "MORTGAGE_CURRENT_BALANCE":
            return {...state, mortgageCurrentBalance: action.mortgageCurrentBalance};
        case "MORTGAGE_MONTHLY_PAYMENT":
            return {...state, mortgageMonthlyPayment: action.mortgageMonthlyPayment};
        case "LIFE_INSURANCE":
            return {...state, lifeInsurance: action.lifeInsurance};
        case "LIFE_INSURANCE_EMPLOYER":
            return {...state, lifeInsuranceEmployer: action.lifeInsuranceEmployer};
        case "LIFE_INSURANCE_PERSONAL":
            return {...state, lifeInsurancePersonal: action.lifeInsurancePersonal};
        case "HAS_SAVINGS":
            return {...state, hasSavings: action.hasSavings};
        case "HAS_RETIREMENT_SAVINGS":
            return {...state, hasRetirementSavings: action.hasRetirementSavings};
        case "HAS_NON_RETIREMENT_SAVINGS":
            return {...state, hasNonRetirementSavings: action.hasNonRetirementSavings};
        case "HAS_DEBT":
            return {...state, debt: action.debt};
        case "DEBT_CREDIT_CARD":
            return {...state, debtCreditCard: action.debtCreditCard};
        case "DEBT_STUDENT_LOAN":
            return {...state, debtStudentLoan: action.debtStudentLoan};
        case "DEBT_HOME_EQUITY":
            return {...state, debtHomeEquity: action.debtHomeEquity};
        case "DEBT_LINE_OF_CREDIT":
            return {...state, debtLineOfCredit: action.debtLineOfCredit};
        case "DEBT_OTHER":
            return {...state, debtOther: action.debtOther};
        case "NAME_FIRST":
            return {...state, nameFirst: action.nameFirst};
        case "NAME_LAST":
            return {...state, nameLast: action.nameLast};
        case "NAME_EMAIL":
            return {...state, nameEmail: action.nameEmail};
        case "NAME_PHONE":
            return {...state, namePhone: action.namePhone};
        case "EXPENSE_MORTGAGE_RENT":
            return {...state, expenseMortgageAndRent: action.expenseMortgageAndRent};
        case "EXPENSE_HOUSING_BILLS_UTILITIES":
            return {...state, expenseHousingBillsUtilities: action.expenseHousingBillsUtilities};
        case "EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL":
            return {...state, expenseGroceriesRestaurantsAlcohol: action.expenseGroceriesRestaurantsAlcohol};
        case "EXPENSE_PHONE_INTERNET_CABLE":
            return {...state, expensePhoneInternetCable: action.expensePhoneInternetCable};
        case "EXPENSE_SHOPPING_FITNESS_GROOMING":
            return {...state, expenseShoppingFitnessGrooming: action.expenseShoppingFitnessGrooming};
        case "EXPENSE_CARS_TAXIS_TRANSIT":
            return {...state, expenseCarsTaxisPublicTransit: action.expenseCarsTaxisPublicTransit};
        case "EXPENSE_CHILDCARE_EDUCATION":
            return {...state, expenseChildcareEducation: action.expenseChildcareEducation};
        case "EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS":
            return {...state, expenseDiscretionaryTravelRecGifts: action.expenseDiscretionaryTravelRecGifts};
        case "EXPENSE_TOTAL":
            return {...state, expenseTotal: action.expenseTotal};
        default:
            return state
    }
};
export default reducer
