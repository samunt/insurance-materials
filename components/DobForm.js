import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import 'date-fns';
  import DateFnsUtils from '@date-io/date-fns';


export default function DobForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [showDob, setShowDob] = useState(false);
    const handleCloseDob = () => setShowDob(false);

    const now = 35;
    const [startDate, setStartDate] = useState(new Date());
    const [isNext, setIsNext] = useState(true);
    const [dateAlert, setDateAlert] = useState('');
	const form = useContext(FormContext);

    useEffect(() => {
        if(startDate !== form.dob && form.dob !== null){
			setStartDate(form.dob);
        }

	}, []);
	
    useEffect(() => {
        let today = new Date();
        let start = new Date(startDate);
        if(startDate !== null){
            var difference = (Date.parse(today) - Date.parse(startDate)) / (86400000 * 365);
            if (difference >= 18 && difference < 100) {
                setIsNext(false);
                setDateAlert('')
            }
            else if(difference < 18){
                setDateAlert('Date must be greater than 18')
                setIsNext(true);
            }
            else if(difference >= 100){
                setDateAlert('Date must be less than 100')
                setIsNext(true);
            }
        }else{
            setIsNext(true);
        }
        dispatch({ type: "DOB", dob: startDate });
    }, [startDate]);
    
    function handleSubmit(e){
        e.preventDefault();
        router.push('/gender');
    }
    return (
        <React.Fragment>
			<CssBaseline />
			<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
			</Grid>
			<Container maxWidth="sm" style={{marginTop:'40px'}}>
				<Grid container item justify="center" xs={12} sm={12} spacing={2}>
					<h4 className='header'>What is your date of birth?</h4>
				</Grid>
                <Grid container item xs={12} sm={12} justify="center" >
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="center">
                            <KeyboardDatePicker
                                // disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={startDate}
                                onChange={date => setStartDate(date)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    {dateAlert && <p className="text-danger font-weight-bold">{dateAlert}</p>}
                </Grid>
                <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
                    <Grid item xs={12} sm={6} >
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
                <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
					<p className="header font-weight-bold">Why do we ask about your date of birth?&nbsp;&nbsp;
						<QuestionCircle
                            size={15}
                            className="cursor-pointer"
							onClick={() => {setShowDob(true)}}
						/>
					</p>
				</Grid>
            {/*ask about children*/}
            <Modal show={showDob} onHide={handleCloseDob}>
                <Modal.Body>Life insurance companies use a method called “age nearest” to determine the age the policy premiums are based upon. The age nearest method calculates the issue age based on the nearest age to your policy date. For example, if your date of birth is February 20th, 1984 and today’s date is January 20th, 2019, the issue age would be 35, even though your actual age is 34 and you won’t be 35 for another month.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseDob}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </Container>
        </React.Fragment>
    )
}
