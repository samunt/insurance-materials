import React, {useContext, useState, useEffect} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Col, Row, Button} from "react-bootstrap";
import {Grid, Container, TextField, CssBaseline} from '@material-ui/core';

export default function SecondaryEducationForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
	const form = useContext(FormContext);
    const [showSecondaryEducation, setShowSecondaryEducation] = useState(false);
    const handleCloseSecondaryEducation = () => setShowSecondaryEducation(false);

    // useEffect(() => {
    //     if(showSecondaryEducation !== form.payForCollege){
    //         setShowSecondaryEducation(form.payForCollege);
    //     }
    // }, []);
    
    useEffect(() => {
		if(form.payForCollege === true){
			document.getElementById('education-no').classList.remove('active_button');
			document.getElementById('education-yes').classList.add('active_button');
		}else if(form.payForCollege === false){
			document.getElementById('education-yes').classList.remove('active_button');
			document.getElementById('education-no').classList.add('active_button');
		}
		
    }, []);
    const now = 25;

    return (
        <React.Fragment>
			<CssBaseline />
			<Grid item xs={12} style={{margin:'10px auto'}}>
				<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
			</Grid>
			<Container maxWidth="sm" style={{marginTop:'40px'}}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<h4 className='header'>Do you plan on paying for your children's post secondary education?</h4>
				</Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<Grid item xs={12} sm={6} >
						<Button
                            className="align-button"
                            id="education-yes"
							onClick={ () => {
                                document.getElementById('education-no').classList.remove('active_button');
			                    document.getElementById('education-yes').classList.add('active_button');
                                dispatch({ type: "PAY_FOR_COLLEGE", payForCollege: true });
                                router.push('/dob');
                            }}
							style={{ width: "100%" }}
							variant="outline-info"
							size="lg"
						>
							Yes
						</Button>
					</Grid>
					<Grid item xs={12} sm={6} >
						<Button
                            className="align-button"
                            id="education-no"
                            onClick={ () => {
			                    document.getElementById('education-yes').classList.remove('active_button');
                                document.getElementById('education-no').classList.add('active_button');
                                dispatch({ type: "PAY_FOR_COLLEGE", payForCollege: false });
                                router.push('/dob');
                            }}
							style={{ width: "100%" }}
							variant="outline-info"
							size="lg"
						>
							No
						</Button>
					</Grid>
				</Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                    <p className="header font-weight-bold">Why do we ask about your children?&nbsp;&nbsp;
                        <QuestionCircle
                            size={15}
                            className="cursor-pointer"
                            onClick={() => {setShowSecondaryEducation(true)}}
                        />
                    </p>
				</Grid>
            {/*ask about children*/}
            <Modal show={showSecondaryEducation} onHide={handleCloseSecondaryEducation}>
                <Modal.Body>If your children’s post-secondary education is something you’re planning to pay for, we’ll want to make sure that your family will have enough money to cover the costs if you were no longer around.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-info" onClick={handleCloseSecondaryEducation}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </React.Fragment>
    )
}
