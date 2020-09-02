import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, TextField, CssBaseline} from '@material-ui/core';


export default function GenderForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [sex, setSex] = useState();
    const [showSex, setShowSex] = useState(false);
    const handleCloseSex = () => setShowSex(false);
    const form = useContext(FormContext);

    const now = 40;
	useEffect(() => {
        if(form && sex !== form.sex){
			setSex(form.sex);
		}
	}, []);

	useEffect(() => {
		dispatch({ type: "SEX", sex: sex });
		if(sex==="Female"){
			document.getElementById('male-yes').classList.remove('active_button');
			document.getElementById('female-yes').classList.add('active_button');
		}
		else if(sex==='Male'){
			document.getElementById('female-yes').classList.remove('active_button');
			document.getElementById('male-yes').classList.add('active_button');
		}
	}, [sex]);

    return (
        <React.Fragment>
			<CssBaseline />
			<Grid item xs={12} style={{margin:'10px auto'}}>
				<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
			</Grid>
			<Container maxWidth="sm" style={{marginTop:'40px'}}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<h4 className='header'>What is your sex?</h4>
				</Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<Grid item xs={12} sm={6} >
						<Button
							className="align-button"
							id="male-yes"
							onClick={() => {
								setSex('Male');
                                router.push('/tobacco');
                            }}
							style={{ width: "100%" }}
							variant="contained"
							size="lg"
						>
							Male
						</Button>
					</Grid>
					<Grid item xs={12} sm={6} >
						<Button
							className="align-button"
							id="female-yes"
							onClick={ () => {
                                setSex('Female')
                                router.push('/tobacco');
                            }}
							style={{ width: "100%" }}
							variant="contained"
							size="lg"
						>
							Female
						</Button>
					</Grid>
				</Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<p className="header font-weight-bold">Why do we ask about your sex?&nbsp;&nbsp;
						<QuestionCircle
							size={15}
							className="cursor-pointer"
							onClick={() => {setShowSex(true)}}
						/>
					</p>
				</Grid>
                {/*ask about sex*/}
            <Modal show={showSex} onHide={handleCloseSex}>
                <Modal.Body>Men and women have different life expectancies, and therefore, insurers take gender into account when pricing life insurance policies.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseSex}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </React.Fragment>
)
}
