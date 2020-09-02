import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline, InputAdornment, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';

export default function SavingsForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
	const form = useContext(FormContext);
    const [hasSavings, setHasSavings] = useState(false);
    //has life insurance
    const [hasRetirementSavings, setHasRetirementSavings] = useState('');
    const [hasNonRetirementSavings, setHasNonRetirementSavings] = useState('');
    const [isNext, setIsNext] = useState(true);
    // modal
    const [showTitle, setShowTitle] = useState(false);
    const handleCloseTitle = () => setShowTitle(false);
    const [showOwnABusiness, setShowOwnABusiness] = useState(false);
    const handleCloseOwnABusiness = () => setShowOwnABusiness(false);
    const [showBenefitPension, setShowBenefitPension] = useState(false);
    const handleCloseBenefitPension = () => setShowBenefitPension(false);
    const [showHasRetirementSavings, setShowHasRetirementSavings] = useState(false);
    const handleCloseHasRetirementSavings = () => setShowHasRetirementSavings(false);
    const [showHasNonRetirementSavings, setShowHasNonRetirementSavings] = useState(false);
    const handleCloseHasNonRetirementSavings = () => setShowHasNonRetirementSavings(false);

    // progress bar
    const now = 85;

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
        if(hasSavings !== form.hasSavings){
            setHasSavings(form.hasSavings ? form.hasSavings : false);
        }
        if(hasRetirementSavings !== form.hasRetirementSavings){
            setHasRetirementSavings(form.hasRetirementSavings ? form.hasRetirementSavings : '');
        }
        if(hasNonRetirementSavings !== form.hasNonRetirementSavings){
            setHasNonRetirementSavings(form.hasNonRetirementSavings ? form.hasNonRetirementSavings : '');
        }
    }, []);
    
	useEffect(() => {
		if(hasSavings === true){
			document.getElementById('saving-no').classList.remove('active_button');
			document.getElementById('saving-yes').classList.add('active_button');
		}else if(hasSavings === false){
			document.getElementById('saving-yes').classList.remove('active_button');
			document.getElementById('saving-no').classList.add('active_button');
		}
		
		if(hasSavings === true && (hasRetirementSavings > 0 || hasRetirementSavings === 0) && (hasNonRetirementSavings > 0 || hasNonRetirementSavings === 0)){
			setIsNext(false);
		}else{
			setIsNext(true)
		}

        dispatch({ type: "HAS_SAVINGS", hasSavings: hasSavings });

		dispatch({ type: "HAS_RETIREMENT_SAVINGS", hasRetirementSavings: hasRetirementSavings });

		dispatch({ type: "HAS_NON_RETIREMENT_SAVINGS", hasNonRetirementSavings: hasNonRetirementSavings });

    }, [hasSavings, hasRetirementSavings, hasNonRetirementSavings]);

    return (
        <React.Fragment>
		<CssBaseline />
		<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
		</Grid>
		<Container maxWidth="sm" style={{marginTop:'40px'}}>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<h4 className='header'>Do you have any savings?&nbsp;&nbsp;
                    <QuestionCircle
                        size={30}
                        className="cursor-pointer"
                        onClick={() => {setShowTitle(true)}}
                    />
                </h4>
			</Grid>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6} >
					<Button
                        className="align-button"
                        id="saving-yes"
						onClick={() => {
                            setHasSavings(true);
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
                        id="saving-no"
						onClick={() => {
                            setHasSavings(false);
                            setHasRetirementSavings();
                            setHasNonRetirementSavings();
                            dispatch({ type: "HAS_RETIREMENT_SAVINGS", hasRetirementSavings: 0 });
                            dispatch({ type: "HAS_NON_RETIREMENT_SAVINGS", hasNonRetirementSavings: 0 });
                            router.push('/debt');
                        }}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
					>
						No
					</Button>
				</Grid>
			</Grid>
			{hasSavings && <Grid container item xs={12} sm={12} justify="center" spacing={2}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                    <p className="header font-weight-bold">Retirement savings&nbsp;&nbsp;
                        <QuestionCircle
                            size={15}
                            className="cursor-pointer"
                            onClick={() => {setShowHasRetirementSavings(true)}}
                        />
                    </p>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Retirement savings</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={hasRetirementSavings}
							type="number"
							onChange={(e) => {
                                setHasRetirementSavings(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                    <p className="header font-weight-bold">Non retirement savings&nbsp;&nbsp;
                        <QuestionCircle
                            size={15}
                            className="cursor-pointer"
                            onClick={() => {setShowHasNonRetirementSavings(true)}}
                        />
                    </p>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Non retirement savings</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={hasNonRetirementSavings}
							type="number"
							onChange={(e) => {setHasNonRetirementSavings(e.target.value !== '' ? parseInt(e.target.value) : '')}}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						onClick={()=>router.push('/debt')}
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
			<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                <p className="header font-weight-bold">What if I own a business?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowOwnABusiness(true)}}
                    />
                </p>
            </Grid>
			<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                <p className="header font-weight-bold">What if I have a defined benefits pension?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowBenefitPension(true)}}
                    />
                </p>
            </Grid>
			<Modal show={showTitle} onHide={handleCloseTitle}>
                <Modal.Body>Say “Yes” if you have money in any of the following: bank accounts, investment accounts, pensions, TFSAs, RRSPs or equity in a corporation.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseTitle}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*own a business*/}
            <Modal show={showOwnABusiness} onHide={handleCloseOwnABusiness}>
                <Modal.Body>When a person dies, it’s likely that any businesses he/she owns will be sold to provide money for his/her family. Sometimes, it’s required if, for example, the person has business partners and there’s a contract in place that mandates the deceased person must be “bought out.” It can also be optional if, for example, the person’s family wants the money to cover expenses. Either way, it’s important to include the value of the business (including any assets or savings owned by the corporation) in your “non-retirement savings.”

                    Savings within a corporation often have large tax implications upon withdrawal so it would be wise not to assume that the full amount will be available to pay for personal or family expenses. Although the exact amount is dependent on your personal income tax rate at the time of withdrawal, for purposes of this assessment, please approximate the available amount by multiplying the savings by 80%.

                    For example, if you have $100,000 of savings in an account owned by a corporation, add $80,000 to your “non-retirement savings” ($100,000 × 80% = $80,000).

                    Don’t forget to add this to all other “non-retirement savings” that are in personal accounts. For example, if you have $100,000 of savings in an account owned by a corporation and $200,000 of “non-retirement savings” in a personal bank and/or investment account, then your total “non-retirement savings” would be $280,000 ($100,000 × 80% + $200,000 = $280,000).”</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseOwnABusiness}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Benefit pension*/}
            <Modal show={showBenefitPension} onHide={handleCloseBenefitPension}>
                <Modal.Body>Defined benefit pension plans are tricky as the monthly payment you’ll receive (or the death benefit your family would receive) is linked to a number of unknown factors, including: your future income, future years of service, and future economic conditions, like interest rates and stock market returns.

                    However, most employers will send an annual statement indicating the estimated current value of all your future monthly payments. This will often be labelled as the “termination value” or “commuted value” of your pension statement.

                    If you have this number handy, please include it in your “retirement savings.” Don’t worry if you don’t; you can proceed without including your defined benefit pension plan.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseBenefitPension}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*has retirement savings*/}
            <Modal show={showHasRetirementSavings} onHide={handleCloseHasRetirementSavings}>
                <Modal.Body>Add up the money you have in both your personal retirement accounts (RRSPs, LIRAs, etc.) and your employer pension accounts. Do not include TFSA accounts as they belong in the 'non-retirement savings' category below.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseHasRetirementSavings}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*has non retirement savings*/}
            <Modal show={showHasNonRetirementSavings} onHide={handleCloseHasNonRetirementSavings}>
                <Modal.Body>Add up the money you have in all other accounts not included in your retirement savings estimate above. This could include bank accounts, TFSAs, other investment accounts, and if applicable, the value at which you can sell a business you own.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseHasNonRetirementSavings}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
		</Container>
	</React.Fragment>
    )
}