import React, {useContext, useState, useEffect} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline} from '@material-ui/core';

export default function TobaccoForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const [showNicotine, setShowNicotine] = useState(false);
    const [tobacco, setTobacco] = useState();
    const handleCloseNicotine = () => setShowNicotine(false);
    const [showUsedToSmoke, setShowUsedToSmoke] = useState(false);
    const handleCloseUsedToSmoke = () => setShowUsedToSmoke(false);

	//get data form localstorage/redux and set to state
	useEffect(() => {
        if(form && tobacco !== form.tobacco){
			setTobacco(form.tobacco);
		}
	}, []);

	useEffect(() => {
		//hightlight yes/ no button and dispatch data to localstorage/redux
		if(tobacco === true){
			dispatch({ type: "TOBACCO", tobacco: true });
			document.getElementById('tobacco-no').classList.remove('active_button');
			document.getElementById('tobacco-yes').classList.add('active_button');
		}
		else if(tobacco === false){
			dispatch({ type: "TOBACCO", tobacco: false });
			document.getElementById('tobacco-yes').classList.remove('active_button');
			document.getElementById('tobacco-no').classList.add('active_button');
		}
	}, [tobacco]);

    const now = 50;

    return (
        <React.Fragment>
			<CssBaseline />
			<Grid item xs={12} style={{margin:'10px auto'}}>
				<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
			</Grid>
			<Container maxWidth="sm" style={{marginTop:'40px'}}>
            	<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<h4 className='header'>Do you smoke or use nicotine products?&nbsp;&nbsp;
						<QuestionCircle
							size={30}
							className="cursor-pointer"
							onClick={() => {setShowNicotine(true)}}
						/>
					</h4>
				</Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<Grid item xs={12} sm={6} >
						<Button
							className="align-button"
							id="tobacco-yes"
							onClick={ () => {
								setTobacco(true)
                                router.push('/healthCondition');
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
							id="tobacco-no"
							onClick={ () => {
                                setTobacco(false)
                                router.push('/healthCondition');
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
					<p className="header font-weight-bold">What if I used to smoke?&nbsp;&nbsp;
						<QuestionCircle
							size={15}
							className="cursor-pointer"
							onClick={() => {setShowUsedToSmoke(true)}}
						/>
					</p>
				</Grid>
                {/*ask about nicotine*/}
            <Modal show={showNicotine} onHide={handleCloseNicotine}>
                <Modal.Body>Select “Yes” if you’ve used any nicotine products in the past year. Nicotine products include cigarettes, e-cigarettes, cigars, pipes, chewing tobacco, nicotine gum or patches, etc.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseNicotine}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about used to smoke*/}
            <Modal show={showUsedToSmoke} onHide={handleCloseUsedToSmoke}>
                <Modal.Body>An insurance company will consider you a smoker only if you have engaged in smoking over the last 12 months. So if you quit smoking over a year ago, we have good news for you: No matter how long you were smoking for or how often you were smoking, you can specify “No” for this question. Your life insurance premiums will be the same as those for a non-smoker! Wasn’t that an unexpected surprise?</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseUsedToSmoke}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </React.Fragment>
    )
}
