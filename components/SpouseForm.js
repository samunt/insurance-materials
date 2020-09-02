import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import {DispatchContext, FormContext} from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import { QuestionCircle } from 'react-bootstrap-icons'
import Modal from "react-bootstrap/Modal"
import {Grid, TextField, CssBaseline, Container} from '@material-ui/core';

function SpouseForm() {
	let [hasSpouse, updateHasSpouse] = useState('');
	let [spouseAge, updateSpouseAge] = useState("");
    const [isNext, setIsNext] = useState(true);
	const router = useRouter();
	const dispatch = useContext(DispatchContext);
	const form = useContext(FormContext);
	const now = 10;
	
	useEffect(() => {
        if(hasSpouse !== form.spouse){
			updateHasSpouse(form.spouse);
        }
        if(spouseAge !== form.spouseAge){
            updateSpouseAge(form.spouseAge);
        }

	}, []);
	
    useEffect(() => {
        if(hasSpouse !== false){
			if(spouseAge && spouseAge !== ''){
            	setIsNext(false);
			}else{
				setIsNext(true);
			}
        }else{
            setIsNext(true);
		}
		if(hasSpouse === true){
			document.getElementById('spouse-no').classList.remove('active_button');
			document.getElementById('spouse-yes').classList.add('active_button');
		}else if(hasSpouse === false){
			document.getElementById('spouse-yes').classList.remove('active_button');
			document.getElementById('spouse-no').classList.add('active_button');
		}
	}, [hasSpouse, spouseAge]);
	
	// modal stuff
	const [showTitle, setShowTitle] = useState(false);
	const handleCloseTitle = () => setShowTitle(false);
	const [showWhyWeAsk, setShowWhyWeAsk] = useState(false);
	const handleCloseWhyWeAsk = () => setShowWhyWeAsk(false);


	// useEffect(() => {
	// 	dispatch({ type: "ADD_SPOUSE", spouse: hasSpouse });
	// 	}, [hasSpouse]);
	
	const handleSubmit = (e) =>{
		e.preventDefault();
		router.push("/children");
	}
	function handleClick(){
		updateHasSpouse(true);
		dispatch({ type: "ADD_SPOUSE", spouse: true });
		document.getElementById('spouse-yes').classList.add('active_button');
	}
	return (
		<React.Fragment>
			<CssBaseline />
			<Grid item xs={12} style={{margin:'10px auto'}}>
				<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
			</Grid>
			<Container maxWidth="sm" style={{marginTop:'40px'}}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<h4 className="header">Do you have a spouse or partner?&nbsp;&nbsp;
						<QuestionCircle
							size={20}
							className="cursor-pointer"
							onClick={() => {setShowTitle(true)}}
						/>
					</h4>
				</Grid>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<Grid item xs={12} sm={5} >
						<Button
							className="align-button"
							id="spouse-yes"
							onClick={ () => {handleClick()}}
							style={{ width: "100%" }}
							variant="contained"
							size="lg"
						>
							Yes
						</Button>
					</Grid>
					<Grid item xs={12} sm={5} >
						<Button
							className="align-button"
							id="spouse-no"
							onClick={ (e) => {
								e.preventDefault();
								updateHasSpouse(false);
								dispatch({ type: "ADD_SPOUSE", spouse: false });
								dispatch({ type: "SPOUSE_AGE", spouseAge: '' });
								router.push("/children");
							}}
							style={{ width: "100%" }}
							variant="contained"
							size="lg"
						>
							No
						</Button>
					</Grid>
					{hasSpouse !== true ? <Grid container item justify="center" xs={12} sm={12} spacing={2}>
						<p className="header font-weight-bold">Why do we ask about your spouse?&nbsp;&nbsp;
							<QuestionCircle
								size={15}
								className="cursor-pointer"
								onClick={() => {setShowWhyWeAsk(true)}}
							/>
						</p>
					</Grid>
					:
					<Grid container item justify="center" xs={12} sm={12} spacing={2}>
						<Grid item xs={12} sm={12} >
							<h4 className="header">
								How old is your spouse or partner?
							</h4>
						</Grid>
						<Grid container item justify="center" xs={12} sm={12} spacing={2}>
							<Grid container item xs={12} sm={10} justify="center" spacing={2}>
								<Grid item xs={12} sm={10} >
									<TextField
										fullWidth
										id="age"
										label="Age"
										type="number"
										value={spouseAge}
										onChange={(e) => {
											updateSpouseAge(e.target.value);
										}}
										onBlur={()=>{
											dispatch({ type: "SPOUSE_AGE", spouseAge: spouseAge });
										}}
									/>
								</Grid>
								<Grid container item justify="center" xs={12} sm={12} spacing={2}>
									<p className="header font-weight-bold">Why do we ask about your spouse?&nbsp;&nbsp;
										<QuestionCircle
											size={15}
											className="cursor-pointer"
											onClick={() => {setShowWhyWeAsk(true)}}
										/>
									</p>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={5} className="mt-2">
							<Button
								style={{ width: "100%" }}
								onClick={(e)=>{handleSubmit(e)}}
								variant="contained"
								size="lg"
								disabled={isNext}
							>
								Next
							</Button>
						</Grid>
					</Grid>
					}
				</Grid>
				{/*title modal*/}
				<Modal show={showTitle} onHide={handleCloseTitle}>
					<Modal.Body>Select “Yes” if you are currently married, engaged, in a common-law relationship or have a partner that you share finances with. If so, make sure to incorporate both you and your partner when we ask about your finances and expenses.</Modal.Body>
					<Modal.Footer>
						<Button variant="contained" onClick={handleCloseTitle}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				{/*  ask about partner  */}
				<Modal show={showWhyWeAsk} onHide={handleCloseWhyWeAsk}>
					<Modal.Header>Why do we ask about your partner</Modal.Header>
					<Modal.Body>Life insurance is all about protecting the people you love. If there are people who rely on you for financial support, a life insurance policy will make sure they have enough money if something unexpected happens to you and your income is no longer there.</Modal.Body>
					<Modal.Footer>
						<Button variant="contained" onClick={handleCloseWhyWeAsk}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>    
			</Container>
	</React.Fragment>
	);
}

export default SpouseForm;
