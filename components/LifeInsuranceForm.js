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
    const [lifeInsurance, setLifeInsurance] = useState('');
    //has life insurance
    const [lifeInsuranceEmployer, setLifeInsuranceEmployer] = useState('');
    const [lifeInsurancePersonal, setLifeInsurancePersonal] = useState('');
    const [showHasLifeInsurance, setShowHasLifeInsurance] = useState(false);
    const [isNext, setIsNext] = useState(true);
    const handleCloseHasLifeInsurance = () => setShowHasLifeInsurance(false);
    const [showExistingLifeInsurance, setShowExistingLifeInsurance] = useState(false);
    const handleCloseExistingLifeInsurance = () => setShowExistingLifeInsurance(false);

    // progress bar
    const now = 75;

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
        if(lifeInsurance !== form.lifeInsurance){
            setLifeInsurance(form.lifeInsurance ? form.lifeInsurance : '');
        }
        if(lifeInsuranceEmployer !== form.lifeInsuranceEmployer){
            setLifeInsuranceEmployer(form.lifeInsuranceEmployer ? form.lifeInsuranceEmployer : '');
        }
        if(lifeInsurancePersonal !== form.lifeInsurancePersonal){
            setLifeInsurancePersonal(form.lifeInsurancePersonal ? form.lifeInsurancePersonal : '');
        }
    }, []);
    
	useEffect(() => {
		if(lifeInsurance === true){
			document.getElementById('insurance-no').classList.remove('active_button');
			document.getElementById('insurance-yes').classList.add('active_button');
		}else if(lifeInsurance === false){
			document.getElementById('insurance-yes').classList.remove('active_button');
			document.getElementById('insurance-no').classList.add('active_button');
		}
		
		if(lifeInsurance === true && (lifeInsuranceEmployer > 0 || lifeInsuranceEmployer === 0) && (lifeInsurancePersonal > 0 || lifeInsurancePersonal === 0)){
			setIsNext(false);
		}else{
			setIsNext(true)
		}

		dispatch({ type: "LIFE_INSURANCE", lifeInsurance: lifeInsurance });

		dispatch({ type: "LIFE_INSURANCE_EMPLOYER", lifeInsuranceEmployer: lifeInsuranceEmployer });

		dispatch({ type: "LIFE_INSURANCE_PERSONAL", lifeInsurancePersonal: lifeInsurancePersonal });

	}, [lifeInsurance, lifeInsuranceEmployer, lifeInsurancePersonal]);

    return (
        <React.Fragment>
		<CssBaseline />
		<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
		</Grid>
		<Container maxWidth="sm" style={{marginTop:'40px'}}>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<h4 className='header'>Do you have life insurance?&nbsp;&nbsp;
                    <QuestionCircle
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {setShowHasLifeInsurance(true)}}
                    />
                </h4>
			</Grid>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						onClick={() => {
                            setLifeInsurance(true);
						}}
						id="insurance-yes"
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
						id="insurance-no"
						onClick={() => {
							setLifeInsurance(false);
							setLifeInsuranceEmployer();
							setLifeInsurancePersonal();
							dispatch({ type: "LIFE_INSURANCE_EMPLOYER", lifeInsuranceEmployer: 0 });
							dispatch({ type: "LIFE_INSURANCE_PERSONAL", lifeInsurancePersonal: 0 });
                            router.push('/savings');
                        }}
						style={{ width: "100%" }}
						variant="contained"
						size="lg"
					>
						No
					</Button>
				</Grid>
			</Grid>
			{lifeInsurance && <Grid container item xs={12} sm={12} justify="center" spacing={2}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<p className="header font-weight-bold">Employer Life Insurance</p>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Employer Life Insurance</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={lifeInsuranceEmployer}
							type="number"
							onChange={(e) => {
                                setLifeInsuranceEmployer(e.target.value !== '' ? parseInt(e.target.value) : '')
                            }}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<p className="header font-weight-bold">Personal Life Insurance</p>
				</Grid>
				<Grid item xs={12} sm={8}>
					<FormControl fullWidth className={classes.margin}>
						<InputLabel htmlFor="standard-adornment-amount">Personal Life Insurance</InputLabel>
						<Input
							id="standard-adornment-amount"
							value={lifeInsurancePersonal}
							type="number"
							onChange={(e) => {setLifeInsurancePersonal(e.target.value !== '' ? parseInt(e.target.value) : '')}}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6} >
					<Button
						className="align-button"
						onClick={()=> {router.push('/savings')}}
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
                <p className="header font-weight-bold">Why do you ask about my existing life insurance?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowExistingLifeInsurance(true)}}
                    />
                </p>
			</Grid>
			{/*title*/}
            <Modal show={showHasLifeInsurance} onHide={handleCloseHasLifeInsurance}>
                <Modal.Body>Select “Yes” if you already have life insurance coverage in place, but select “No” if you don’t have existing life insurance or if your policies are expiring soon. This would include both policies you have through work or policies that you’ve purchased individually through a broker.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseHasLifeInsurance}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about existing insurance*/}
            <Modal show={showExistingLifeInsurance} onHide={handleCloseExistingLifeInsurance}>
                <Modal.Body>If you already have life insurance, we will reduce the coverage amount of your new policy by the amount of coverage already in place. This will make sure that the total amount of coverage between all your policies is in line with your needs.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseExistingLifeInsurance}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
		</Container>
	</React.Fragment>
    )
}
