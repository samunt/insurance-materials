import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import {DispatchContext, FormContext} from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button} from "react-bootstrap";
import {Grid, Container, CssBaseline, InputAdornment, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';

export default function FamilyIncomeForm() {
    const now = 60;
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const router = useRouter();
    const [yourIncome, setYourIncome] = useState('');
    const [isNext, setIsNext] = useState(true);
    const [spouseIncome, setSpouseIncome] = useState('');
    const [showFamilyIncome, setShowFamilyIncome] = useState(false);
    const handleCloseFamilyIncome = () => setShowFamilyIncome(false);
    const [showWhatAboutYourOtherIncome, setShowWhatAboutYourOtherIncome] = useState(false);
    const handleCloseWhatAboutYourOtherIncome = () => setShowWhatAboutYourOtherIncome(false);
    const [showWhyDoWeAsk, setShowWhyDoWeAsk] = useState(false);
    const handleCloseWhyDoWeAsk = () => setShowWhyDoWeAsk(false);

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

        if(yourIncome !== form.yourIncome){
            setYourIncome(form.yourIncome ? form.yourIncome : 0);
        }

        if(spouseIncome !== form.spouseIncome){
            setSpouseIncome(form.spouseIncome);
        }

    }, []);
    
    useEffect(() => {
        if(form.spouse === true && spouseIncome >= 0 && yourIncome >= 0){
            setIsNext(false);
        }else if(form.spouse === false && yourIncome >=0){
            setIsNext(false);
        }else{
            setIsNext(true);
        }
        dispatch({ type: "YOUR_INCOME", yourIncome: yourIncome });
        dispatch({ type: "SPOUSE_INCOME", spouseIncome: spouseIncome });
    }, [yourIncome, spouseIncome]);

    return (
        <React.Fragment>
        <CssBaseline />
        <Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
        </Grid>
        <Container maxWidth="sm" style={{marginTop:'40px'}}>
        <Grid container item justify="center" xs={12} sm={12} spacing={2}>
                <h4 className='header'>What is your family's annual income (before taxes)?&nbsp;&nbsp;
                    <QuestionCircle
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {setShowFamilyIncome(true)}}
                    />
                </h4>
            </Grid>
            <Grid container item xs={12} sm={12} justify="center" spacing={2}>
                <Grid item xs={12} sm={8}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Your Income</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={yourIncome}
                            type="number"
                            onChange={(e) => {setYourIncome(e.target.value != '' ? parseInt(e.target.value) : '')}}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Grid>
			</Grid>
            {form.spouse && <Grid container item xs={12} sm={12} justify="center" spacing={2}>
                <Grid item xs={12} sm={8}>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="standard-adornment-amount">Spouse Income</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={spouseIncome}
                            type="number"
                            onChange={(e) => {setSpouseIncome(e.target.value != '' ? parseInt(e.target.value) : '')}}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </Grid>
			</Grid>}
            <Grid container item justify="center" xs={12} sm={12} spacing={2}>
                <Grid item xs={12} sm={6} >
                    <Button
                        className="align-button"
                        onClick={(e) => {
                            e.preventDefault;
                            router.push("/rentOrOwn")
                        }}
                        style={{ width: "100%" }}
                        variant="contained"
                        size="lg"
                        disabled={isNext}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
            <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
				<p className="header font-weight-bold">What about investments and other income?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowWhatAboutYourOtherIncome(true)}}
                    />
                </p>
            </Grid>
            <Grid container item justify="center" xs={12} sm={12} spacing={2} className="mt-4">
				<p className="header font-weight-bold">Why do we ask about your income?&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowWhyDoWeAsk(true)}}
                    />
                </p>
            </Grid>
             {/*ask about family income*/}
             <Modal show={showFamilyIncome} onHide={handleCloseFamilyIncome}>
                <Modal.Body>Give us a ballpark estimate of your annual pre-tax income. Don’t include investments — we’ll get to that soon</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseFamilyIncome}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about other income*/}
            <Modal show={showWhatAboutYourOtherIncome} onHide={handleCloseWhatAboutYourOtherIncome}>
                <Modal.Body>Please don’t include income that you generate from investments. We will cover your investments in the “savings” section. Some examples of income generated from investments are dividends, interest payments and capital gains collected from the sale of an asset.

                    Similarly, don’t include any income that isn’t tied to your work and would still be generated if you passed away. Some examples of non-employment income are rental income on a property you own or even income you make off a business that isn’t tied to your time.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseWhatAboutYourOtherIncome}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*ask about other income*/}
            <Modal show={showWhyDoWeAsk} onHide={handleCloseWhyDoWeAsk}>
                <Modal.Body>It’s important for us to have an accurate understanding of your finances, and your income is a key aspect of your financial situation. Our calculations will use your income (along with many other factors) to evaluate how much life insurance protection your family needs. The same goes for your partner’s income.

                    We never recommend more coverage than you need. This prevents you from becoming “overprotected,” keeping your costs low and freeing up money for you and your family. There are many features in our calculation that help us do this. We include your partner’s future income as money that will be available to pay for some of your family’s future expenses.</Modal.Body>
                <Modal.Footer>
                    <Button variant="contained" onClick={handleCloseWhyDoWeAsk}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    </React.Fragment>
    )
}
