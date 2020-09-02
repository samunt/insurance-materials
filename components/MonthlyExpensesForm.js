import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { DispatchContext } from "../contexts/FormContext";
import { FormContext } from "../contexts/FormContext";
import InputGroup from "react-bootstrap/InputGroup";
import axios from 'axios';
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline, InputAdornment, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';

export default function MonthlyExpensesForm() {
    // localstorage keys
    let rent;
    let mortgageCurr;
    let mortgageMonthly;
    let mortgageCombined;

    // hooks definitions
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);

    // progress
    const now = 95;
    
    const useStyles = makeStyles((theme) => ({
		root: {
		  display: 'flex',
		  flexWrap: 'wrap',
		},
		margin: {
		  margin: theme.spacing(1),
		},
		withoutLabel: {
		  marginTop: theme.spacing(3),
		},
		textField: {
		  width: '25ch',
		},
	}));
	
    const classes = useStyles();

    mortgageCurr = form.mortgageCurrentBalance !== '' ? parseInt(form.mortgageCurrentBalance) : '';
    mortgageMonthly = form.mortgageMonthlyPayment !== '' ? parseInt(form.mortgageMonthlyPayment) : '';
    rent = form.monthlyRent;
    mortgageCombined = mortgageCurr + mortgageMonthly;

    // modal
    const [showWhyExpensesLookHigh, setShowWhyExpensesLookHigh] = useState(false);
    const handleCloseWhyExpensesLookHigh = () => setShowWhyExpensesLookHigh(false);
    const [showExpenseMortgage, setShowExpenseMortgage] = useState(false);
    const handleCloseShowExpenseMortgage = () => setShowExpenseMortgage(false);
    const [showExpenseHousing, setShowExpenseHousing] = useState(false);
    const handleCloseShowExpenseHousing = () => setShowExpenseHousing(false);
    const [showExpensePhone, setShowExpensePhone] = useState(false);
    const handleCloseShowExpensePhone = () => setShowExpensePhone(false);
    const [showExpenseGroceries, setShowExpenseGroceries] = useState(false);
    const handleCloseShowExpenseGroceries = () => setShowExpenseGroceries(false);
    const [showExpenseShopping, setShowExpenseShopping] = useState(false);
    const handleCloseShowExpenseShopping = () => setShowExpenseShopping(false);
    const [showExpenseCars, setShowExpenseCars] = useState(false);
    const handleCloseShowExpenseCars = () => setShowExpenseCars(false);
    const [showChildcare, setShowChildcare] = useState(false);
    const handleCloseShowChildcare = () => setShowChildcare(false);
    const [showExpenseDiscretionary, setShowExpenseDiscretionary] = useState(false);
    const handleCloseShowExpenseDiscretionary = () => setShowExpenseDiscretionary(false);
    const [showExpenseOther, setShowExpenseOther] = useState(false);
    const handleCloseShowExpenseOther = () => setShowExpenseOther(false);

    // local state setup
    const [expenseMortgageAndRent, setExpenseMortgageAndRent] = useState(rent > 0 ? rent : mortgageCombined);
    const [expenseHousingBillsUtilities, setExpenseHousingBillsUtilities] = useState(1000);
    const [expenseGroceriesRestaurantsAlcohol, setExpenseGroceriesRestaurantsAlcohol] = useState(700);
    const [expensePhoneInternetCable, setExpensePhoneInternetCable] = useState(100);
    const [expenseShoppingFitnessGrooming, setExpenseShoppingFitnessGrooming] = useState(700);
    const [expenseCarsTaxisPublicTransit, setExpenseCarsTaxisPublicTransit] = useState(450);
    const [expenseChildcareEducation, setExpenseChildcareEducation] = useState(0);
    const [expenseDiscretionaryTravelRecGifts, setExpenseDiscretionaryTravelRecGifts] = useState(450);
    const [expenseOther, setExpenseOther] = useState(0);
    const [isNext, setIsNext] = useState(true);


    // calculate total expenses
    let total = expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther;
    // use total as default state
    const [expenseTotal, setExpenseTotal] = useState(total);

    //effects for context api
    useEffect(() => {
        setExpenseTotal(expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther);
    }, []);
    
    useEffect(() => {
        setExpenseTotal(expenseMortgageAndRent + expenseHousingBillsUtilities + expenseGroceriesRestaurantsAlcohol + expensePhoneInternetCable + expenseShoppingFitnessGrooming + expenseCarsTaxisPublicTransit + expenseChildcareEducation + expenseDiscretionaryTravelRecGifts + expenseOther);
        if(expenseTotal > 0){
            setIsNext(false)
        }else{
            setIsNext(true)
        }
    },[expenseOther, expenseTotal,
        expenseDiscretionaryTravelRecGifts,
        expenseChildcareEducation,
        expenseCarsTaxisPublicTransit,
        expenseShoppingFitnessGrooming,
        expensePhoneInternetCable,
        expenseGroceriesRestaurantsAlcohol,
        expenseHousingBillsUtilities,
        expenseMortgageAndRent]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_MORTGAGE_RENT", expenseMortgageAndRent: expenseMortgageAndRent });
    }, [expenseMortgageAndRent]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_HOUSING_BILLS_UTILITIES", expenseHousingBillsUtilities: expenseHousingBillsUtilities });
    }, [expenseHousingBillsUtilities]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_GROCERIES_RESTAURANTS_ALCOHOL", expenseGroceriesRestaurantsAlcohol: expenseGroceriesRestaurantsAlcohol });
    }, [expenseGroceriesRestaurantsAlcohol]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_PHONE_INTERNET_CABLE", expensePhoneInternetCable: expensePhoneInternetCable });
    }, [expensePhoneInternetCable]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_SHOPPING_FITNESS_GROOMING", expenseShoppingFitnessGrooming: expenseShoppingFitnessGrooming });
    }, [expenseShoppingFitnessGrooming]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_CARS_TAXIS_TRANSIT", expenseCarsTaxisPublicTransit: expenseCarsTaxisPublicTransit });
    }, [expenseCarsTaxisPublicTransit]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_CHILDCARE_EDUCATION", expenseChildcareEducation: expenseChildcareEducation });
    }, [expenseChildcareEducation]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_DISCRETIONARY_TRAVEL_REC_GIFTS", expenseDiscretionaryTravelRecGifts: expenseDiscretionaryTravelRecGifts });
    }, [expenseDiscretionaryTravelRecGifts]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_OTHER", expenseOther: expenseOther });
    }, [expenseOther]);

    useEffect(() => {
        dispatch({ type: "EXPENSE_TOTAL", expenseTotal: expenseTotal });
    }, [expenseTotal]);
    return (
        <React.Fragment>
		<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
		</Grid>
		<Container maxWidth="sm" style={{marginTop:'40px'}}>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<h4 className='header'>What are your monthly expenses?</h4>
			</Grid>
			<Grid container item xs={12} sm={12} spacing={2}>
            <p className="text-justify">Below, we’ve estimated your family’s expenses based on the spending patterns of millions of Canadians. If any of these estimates seem too high or too low, please edit them.</p>
			</Grid>
			<Grid container item xs={12} sm={12} justify="center" spacing={2}>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Mortgage and rent
						<Input
							id="standard-adornment-amount"
							value={expenseMortgageAndRent}
							type="number"
							onChange={(e) => {
                                setExpenseMortgageAndRent(e.target.value !== '' ? parseInt(e.target.value) : '');
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseMortgage(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Housing bills & utilities
						<Input
							id="standard-adornment-amount"
							value={expenseHousingBillsUtilities}
							type="number"
							onChange={(e) => {
                                setExpenseHousingBillsUtilities(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseHousing(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Phone, Internet, Cable
						<Input
							id="standard-adornment-amount"
							value={expensePhoneInternetCable}
							type="number"
							onChange={(e) => {
                                setExpensePhoneInternetCable(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpensePhone(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Groceries, restaurants & alcohol
						<Input
							id="standard-adornment-amount"
							defaultValue={expenseGroceriesRestaurantsAlcohol}
							type="number"
							onChange={(e) => {
                                setExpenseGroceriesRestaurantsAlcohol(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseGroceries(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Shopping, fitness & grooming
						<Input
							id="standard-adornment-amount"
							value={expenseShoppingFitnessGrooming}
							type="number"
							onChange={(e) => {
                                setExpenseShoppingFitnessGrooming(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseShopping(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Cars, taxis, public transit
						<Input
							id="standard-adornment-amount"
							value={expenseCarsTaxisPublicTransit}
							type="number"
							onChange={(e) => {
                                setExpenseCarsTaxisPublicTransit(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseCars(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Childcare & education
						<Input
							id="standard-adornment-amount"
							value={expenseChildcareEducation}
							type="number"
							onChange={(e) => {
                                setExpenseChildcareEducation(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowChildcare(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Discretionary, travel, rec & gifts
						<Input
							id="standard-adornment-amount"
							value={expenseDiscretionaryTravelRecGifts}
							type="number"
							onChange={(e) => {
                                setExpenseDiscretionaryTravelRecGifts(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseDiscretionary(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth className={classes.margin}>
						Other
						<Input
							id="standard-adornment-amount"
							value={expenseOther}
							type="number"
							onChange={(e) => {
                                setExpenseOther(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            endAdornment={
                                <InputAdornment position="end">
                                    <QuestionCircle
                                        className="cursor-pointer"
                                        size={15}
                                        onClick={() => {setShowExpenseOther(true)}}
                                    />
                                </InputAdornment>
                              }
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={10}>
					<FormControl fullWidth className={classes.margin}>
						Total
						<Input
							id="standard-adornment-amount"
							value={form.expenseTotal}
							type="number"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
			</Grid>
            <Grid container item justify="center" xs={12} sm={12} spacing={2}>
                <p className="header font-weight-bold">Why do these expenses look high?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowWhyExpensesLookHigh(true)}}
                    />
                </p>
			</Grid>
            <Grid container item justify="center" xs={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={6} >
                    <Button
                        className="align-button"
                        onClick={()=> {
                            axios({
                                method: 'post',
                                url: '/api/form',
                                data: {
                                    form: form,
                                    formId: form.id
                                }
                            })
                                .then(function (res) {
                                    localStorage.removeItem('form');
                                    router.push('/quotes');
                                })
                                .catch(function (error) {
                                    console.log(error)
                                });
                        }}
                        style={{ width: "100%" }}
                        variant="contained"
                        size="lg"
                        disabled={isNext}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
		{/*ask about other income*/}
        <Modal show={showWhyExpensesLookHigh} onHide={handleCloseWhyExpensesLookHigh}>
                <Modal.Body>The truth is, most people tend to underestimate their monthly expenses. When estimating monthly expenses, it’s common for people to remember large recurring items, like mortgage or rent payments, hydro bills, auto payments, cell phone bills, and childcare costs. However, it’s quite common for people to leave out the non-recurring “one-time” costs, like gifts (weddings, birthdays, anniversaries), vacations, recreational activities, tickets to concerts and sports games, taxis/Ubers and nights out with your friends or family.

                    If your expenses looks off, click on the info buttons beside each category to see a description of the items included in that category. Then, feel free to adjust the numbers as you see fit to update your monthly expenses.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseWhyExpensesLookHigh}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*mortgage and rent*/}
            <Modal show={showExpenseMortgage} onHide={handleCloseShowExpenseMortgage}>
                <Modal.Body>We have pre-calculated your rent or mortgage expenses from the previous form.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseMortgage}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*housing expense*/}
            <Modal show={showExpenseHousing} onHide={handleCloseShowExpenseHousing}>
                <Modal.Body>Property tax, condo fees, repairs and maintenance, home insurance, gas/electricity/hydro</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseHousing}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*phone expense*/}
            <Modal show={showExpensePhone} onHide={handleCloseShowExpensePhone}>
                <Modal.Body>Cell phones, cable, internet, Netflix, other subscriptions</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpensePhone}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*grocieres expense*/}
            <Modal show={showExpenseGroceries} onHide={handleCloseShowExpenseGroceries}>
                <Modal.Body>Groceries, restaurants, coffee shops, alcohol</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseGroceries}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*shopping expense*/}
            <Modal show={showExpenseShopping} onHide={handleCloseShowExpenseShopping}>
                <Modal.Body>Clothes, shoes, salons & hair care, personal hygiene, gym memberships/classes, drycleaning, health, eyeglasses/contacts, dental</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseShopping}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*cars expense*/}
            <Modal show={showExpenseCars} onHide={handleCloseShowExpenseCars}>
                <Modal.Body>Car payments, auto insurance, gas, parking, maintenance/repairs, taxis/Ubers, public transit.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseCars}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*childcare expense*/}
            <Modal show={showChildcare} onHide={handleCloseShowChildcare}>
                <Modal.Body>Daycare, nannies, private schools, tutors.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowChildcare}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*discretionary expense*/}
            <Modal show={showExpenseDiscretionary} onHide={handleCloseShowExpenseDiscretionary}>
                <Modal.Body>Vacations, entertainment, recreational activities, sports, electronics, gifts (birthdays, holidays, weddings).</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseDiscretionary}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*other expense*/}
            <Modal show={showExpenseOther} onHide={handleCloseShowExpenseOther}>
                <Modal.Body>Any monthly expenses you have that don’t fit into one of the above categories.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseShowExpenseOther}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
		</Container>
	</React.Fragment>
    )
}
