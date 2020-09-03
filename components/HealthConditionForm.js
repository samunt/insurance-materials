import React, {useContext, useState, useEffect} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline} from '@material-ui/core';

export default function HealthForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const [showHealthCondition, setShowHealthCondition] = useState(false);
    const [healthCondition, setHealthCondition] = useState();
    const handleCloseHealthCondition = () => setShowHealthCondition(false);
    const [showHealthPrice, setShowHealthPrice] = useState(false);
    const handleCloseHealthPrice = () => setShowHealthPrice(false);

    //get data from localstroage/redux and set State when component mounted
    useEffect(() => {
        if(form && healthCondition !== form.healthCondition){
			setHealthCondition(form.healthCondition);
		}
	}, []);

	useEffect(() => {
        //highlight Yes/No button accourding to selected state and dispatch data on localstorage/redux
		if(healthCondition === true){
			dispatch({ type: "HEALTH_CONDITION", healthCondition: true });
			document.getElementById('healthCondition-no').classList.remove('active_button');
			document.getElementById('healthCondition-yes').classList.add('active_button');
		}
		else if(healthCondition === false){
			dispatch({ type: "HEALTH_CONDITION", healthCondition: false });
			document.getElementById('healthCondition-yes').classList.remove('active_button');
			document.getElementById('healthCondition-no').classList.add('active_button');
		}
    }, [healthCondition]);
    
    const now = 55;

    return (
        <React.Fragment>
        <CssBaseline />
        <Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
        </Grid>
        <Container maxWidth="sm" style={{marginTop:'40px'}}>
        <Grid container item justify="center" xs={12} sm={12} spacing={2}>
                <h4 className='header'>Have you been diagnosed with a serious health condition?&nbsp;&nbsp;
                    <QuestionCircle
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {setShowHealthCondition(true)}}
                    />
                </h4>
            </Grid>
            <Grid container item justify="center" xs={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={6} >
                    <Button
                        className="align-button"
                        id="healthCondition-yes"
                        onClick={ () => {
                            setHealthCondition(true)
                            router.push('/familyIncome');
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
                        id="healthCondition-no"
                        onClick={ () => {
                            setHealthCondition(false)
                            router.push('/familyIncome');
                        }}
                        style={{ width: "100%" }}
                        variant="contained"
                        size="lg"
                    >
                        No
                    </Button>
                </Grid>
            </Grid>
            <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                <p className="header font-weight-bold">How does my health affect my price?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowHealthPrice(true)}}
                    />
                </p>
            </Grid>
            {/*ask about if they have health condition*/}
            <Modal show={showHealthCondition} onHide={handleCloseHealthCondition}>
                <Modal.Body>Select “Yes” if you’ve been diagnosed with any of the following: heart attack, stroke, cancer, lung disease, diabetes, psychiatric illness, AIDS or any other major illness.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseHealthCondition}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about how health condition affects price*/}
            <Modal show={showHealthPrice} onHide={handleCloseHealthPrice}>
                <Modal.Body>Your health tends to be an important factor in your insurance rate. For example, if you’ve suffered from a recent heart attack, you will probably pay higher premiums than someone who hasn’t. Most people aren’t too surprised by this.

                    Insurers are pretty comprehensive when it comes to assessing your health. They’ll ask you about everything from asthma to Alzheimer’s. (You can count on them being very thorough here.) Each of these illnesses has different implications for your life expectancy, and each one gets factored into your life insurance rate.

                    Luckily, getting insurance with a pre-existing health condition isn’t impossible. We’re here to help you through the application process as your questions arise.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseHealthPrice}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    </React.Fragment>
    )
}
