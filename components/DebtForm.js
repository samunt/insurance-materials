import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline, InputAdornment, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';

export default function DebtForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
	const form = useContext(FormContext);

    const [debt, setDebt] = useState('');
    const [debtCreditCard, setDebtCreditCard] = useState('');
    const [debtStudentLoan, setDebtStudentLoan] = useState('');
    const [debtHomeEquity, setDebtHomeEquity] = useState('');
    const [debtLineOfCredit, setDebtLineOfCredit] = useState('');
    const [debtOther, setDebtOther] = useState('');
    const [isNext, setIsNext] = useState(true);

    // modal
    const [showTitle, setShowTitle] = useState(false);
    const handleCloseTitle = () => setShowTitle(false);

    const now = 90;

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
	
	useEffect(() => {
        if(debt !== form.debt){
            setDebt(form.debt);
        }
        if(debtCreditCard !== form.debtCreditCard){
            setDebtCreditCard(form.debtCreditCard ? form.debtCreditCard : '');
        }
        if(debtStudentLoan !== form.debtStudentLoan){
            setDebtStudentLoan(form.debtStudentLoan ? form.debtStudentLoan : '');
        }
        if(debtHomeEquity !== form.debtHomeEquity){
            setDebtHomeEquity(form.debtHomeEquity ? form.debtHomeEquity : '');
        }
        if(debtLineOfCredit !== form.debtLineOfCredit){
            setDebtLineOfCredit(form.debtLineOfCredit ? form.debtLineOfCredit : '');
        }
        if(debtOther !== form.debtOther){
            setDebtOther(form.debtOther ? form.debtOther : '');
        }
        
    }, []);
    
	useEffect(() => {
		if(debt === true){
			document.getElementById('debt-no').classList.remove('active_button');
			document.getElementById('debt-yes').classList.add('active_button');
		}else if(debt === false){
			document.getElementById('debt-yes').classList.remove('active_button');
			document.getElementById('debt-no').classList.add('active_button');
		}
		
		if(debt === true && (debtCreditCard > 0 || debtCreditCard === 0) && (debtStudentLoan > 0 || debtStudentLoan === 0)
			&& (debtHomeEquity > 0 || debtHomeEquity === 0) && (debtLineOfCredit > 0 || debtLineOfCredit === 0) && (debtOther > 0 || debtOther === 0)){
			setIsNext(false);
		}else{
			setIsNext(true)
		}

        dispatch({ type: "HAS_DEBT", debt: debt });

		dispatch({ type: "DEBT_CREDIT_CARD", debtCreditCard: debtCreditCard });

		dispatch({ type: "DEBT_STUDENT_LOAN", debtStudentLoan: debtStudentLoan });

		dispatch({ type: "DEBT_HOME_EQUITY", debtHomeEquity: debtHomeEquity });

		dispatch({ type: "DEBT_LINE_OF_CREDIT", debtLineOfCredit: debtLineOfCredit });

		dispatch({ type: "DEBT_OTHER", debtOther: debtOther });

	}, [debt, debtCreditCard, debtStudentLoan, debtHomeEquity, debtLineOfCredit, debtOther]);

    return (
        <React.Fragment>
		<CssBaseline />
		<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
		</Grid>
		<Container maxWidth="sm" style={{marginTop:'40px'}}>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<h4 className='header'>Do you have any debt?&nbsp;&nbsp;
                    <QuestionCircle
						size={20}
						className="cursor-pointer"
                        onClick={() => {setShowTitle(true)}}
                    />
                </h4>
			</Grid>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						id="debt-yes"
						onClick={() =>{
							document.getElementById('debt-yes').classList.add('active_button');
                            setDebt(true)
                        }}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
					>
						Yes
					</Button>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						id="debt-no"
						onClick={ () => {
							setDebt(false);
							setDebtCreditCard();
							setDebtStudentLoan();
							setDebtHomeEquity();
							setDebtLineOfCredit();
							setDebtOther();
							dispatch({ type: "DEBT_CREDIT_CARD", debtCreditCard: 0 });
							dispatch({ type: "DEBT_STUDENT_LOAN", debtStudentLoan: 0 });
							dispatch({ type: "DEBT_HOME_EQUITY", debtHomeEquity: 0 });
							dispatch({ type: "DEBT_LINE_OF_CREDIT", debtLineOfCredit: 0 });
							dispatch({ type: "DEBT_OTHER", debtOther: 0 });
                            router.push('/monthlyExpenses');
                        }}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
					>
						No
					</Button>
				</Grid>
			</Grid>
			{debt && <Grid container item xs={12} sm={12} justify="center" spacing={2}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<p className="header font-weight-bold">Estimate your debts for each category</p>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Credit cards</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={debtCreditCard}
							type="number"
							onChange={(e) => {
                                setDebtCreditCard(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Student loans</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={debtStudentLoan}
							type="number"
							onChange={(e) => {
                                setDebtStudentLoan(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Home equity loans</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={debtHomeEquity}
							type="number"
							onChange={(e) => {
                                setDebtHomeEquity(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Lines of credit</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={debtLineOfCredit}
							type="number"
							onChange={(e) => {
                                setDebtLineOfCredit(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Other debt</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={debtOther}
							type="number"
							onChange={(e) => {
                                setDebtOther(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						onClick={()=> {router.push('/monthlyExpenses')}}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
						disabled={isNext}
					>
						Next
					</Button>
				</Grid>
			</Grid>}
		{/*title*/}
        <Modal show={showTitle} onHide={handleCloseTitle}>
            <Modal.Body>Not including a mortgage on your primary residence</Modal.Body>
            <Modal.Footer>
                <Button variant="contained" onClick={handleCloseTitle}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
		</Container>
	</React.Fragment>
    )
}
