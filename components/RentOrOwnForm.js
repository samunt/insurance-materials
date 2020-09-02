import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline, InputAdornment, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';

export default function rentOrOwnForm() {
	const router = useRouter();
	const dispatch = useContext(DispatchContext);
	const form = useContext(FormContext);
	const [rentOrOwn, setRentOrOwn] = useState('');
	//renter
	const [monthlyRent, setMonthlyRent] = useState('');
	//owner
	const [currentBalance, setCurrentBalance] = useState('');
	const [monthlyPayment, setMonthlyPayment] = useState('');

    const [isNext, setIsNext] = useState(true);
	// modal
	const [showInTheMarket, setShowInTheMarket] = useState(false);
	const handleCloseInTheMarket = () => setShowInTheMarket(false);

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

	const now = 65;

	useEffect(() => {
        if(rentOrOwn !== form.rentOrOwn){
            setRentOrOwn(form.rentOrOwn ? form.rentOrOwn : '');
        }
        if(monthlyRent !== form.monthlyRent){
            setMonthlyRent(form.monthlyRent ? form.monthlyRent : 0);
        }
        if(currentBalance !== form.mortgageCurrentBalance){
            setCurrentBalance(form.mortgageCurrentBalance ? form.mortgageCurrentBalance : '');
        }
        if(monthlyPayment !== form.mortgageMonthlyPayment){
            setMonthlyPayment(form.mortgageMonthlyPayment ? form.mortgageMonthlyPayment : '');
        }
    }, []);
    
	useEffect(() => {
		if(rentOrOwn === "Rent"){
			dispatch({ type: "RENT_OR_OWN", rentOrOwn: "Rent" });
			document.getElementById(`Own-yes`).classList.remove('active_button')
			document.getElementById(`Rent-yes`).classList.add('active_button')
			setCurrentBalance();
			setMonthlyPayment();
			dispatch({ type: "MORTGAGE_CURRENT_BALANCE", mortgageCurrentBalance: 0 });
			dispatch({ type: "MORTGAGE_MONTHLY_PAYMENT", mortgageMonthlyPayment: 0 });
		}else if(rentOrOwn === "Own"){
			dispatch({ type: "RENT_OR_OWN", rentOrOwn: "Own" });
			document.getElementById(`Rent-yes`).classList.remove('active_button')
			document.getElementById(`Own-yes`).classList.add('active_button')
			setMonthlyRent('');
			dispatch({ type: "MONTHLY_RENT", monthlyRent: 0 });
		}
		if(rentOrOwn === "Rent" && (monthlyRent > 0 || monthlyRent === 0)){
			setIsNext(false);
		}
		else if(rentOrOwn === "Own" && (currentBalance > 0 || currentBalance === 0) && (monthlyPayment > 0 || monthlyPayment === 0)){
			setIsNext(false);
		}else{
			setIsNext(true)
		}

		dispatch({ type: "MONTHLY_RENT", monthlyRent: monthlyRent });

		dispatch({ type: "MORTGAGE_CURRENT_BALANCE", mortgageCurrentBalance: currentBalance });

		dispatch({ type: "MORTGAGE_MONTHLY_PAYMENT", mortgageMonthlyPayment: monthlyPayment });

	}, [rentOrOwn, monthlyRent, currentBalance, monthlyPayment]);

	function handleClick(e){
		setRentOrOwn(e)
	}
	return (
		<React.Fragment>
		<CssBaseline />
		<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
		</Grid>
		<Container maxWidth="sm" style={{marginTop:'40px'}}>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<h4 className='header'>Do you rent or own your primary resident?</h4>
			</Grid>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						id="Rent-yes"
						onClick={() =>
							handleClick('Rent')
						}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
					>
						Rent
					</Button>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						id="Own-yes"
						onClick={ () =>
							handleClick('Own')
						}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
					>
						Own
					</Button>
				</Grid>
			</Grid>
			{rentOrOwn === "Rent" && <Grid container item xs={12} sm={12} justify="center" spacing={2}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<h5 className="header">What is your monthly rent?</h5>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Rent</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={monthlyRent}
							type="number"
							onChange={(e) => {
								console.log('valudddd',e.target.value)
								setMonthlyRent(e.target.value!== '' ? parseInt(e.target.value) : '')
							}}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						onClick={() => router.push('/lifeInsurance')}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
						disabled={isNext}
					>
						Next
					</Button>
				</Grid>
			</Grid>
			}
			{rentOrOwn === "Own" && <Grid container item xs={12} sm={12} justify="center" spacing={2}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<h5 className="header">What is your mortgage amount?</h5>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Balance</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={currentBalance}
							type="number"
							onChange={(e) => setCurrentBalance(e.target.value !== '' ? parseInt(e.target.value) : '')}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Monthly Payment</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={monthlyPayment}
							type="number"
							onChange={(e) => setMonthlyPayment(e.target.value !== '' ? parseInt(e.target.value) : '')}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						onClick={()=>router.push('/lifeInsurance')}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
						disabled={isNext}
					>
						Next
					</Button>
				</Grid>
			</Grid>}
			<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                <p className="header font-weight-bold">What if I'm in the market to buy?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowInTheMarket(true)}}
                    />
                </p>
			</Grid>
			{/*ask about nicotine*/}
			<Modal show={showInTheMarket} onHide={handleCloseInTheMarket}>
				<Modal.Body>First off, fingers crossed that you find your dream home! However, you should select “own” only if you currently own or are in the process of purchasing your place of residence. If you plan to buy a home in the future, but are not currently looking, please don’t select “own.”

					The time of purchase, sale price and mortgage payments you make can significantly impact your coverage needs. Until you’re certain about these details, it’s best to not include them to ensure you aren’t paying for coverage that you might not ultimately need.

					When you do buy your home, we recommend revisiting the PolicyMe life insurance checkup to get updated advice and understand how your coverage needs may have changed.</Modal.Body>
				<Modal.Footer>
					<Button variant="contained" onClick={handleCloseInTheMarket}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	</React.Fragment>
	)
}
