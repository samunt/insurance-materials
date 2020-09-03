import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { DispatchContext } from "../contexts/FormContext";
import {QuestionCircle} from "react-bootstrap-icons";
import {Modal, ProgressBar, Button, Card} from "react-bootstrap";
import {Grid, Container, CssBaseline, InputAdornment, makeStyles, Input, InputLabel, FormControl} from '@material-ui/core';


export default function QuotesPage() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const [showQuoteMessage, setShowQuoteMessage] = useState(false);
    const handleCloseQuoteMessage = () => setShowQuoteMessage(false);
    const policyPrice = ["$25.99", "18.99", "32.99", "54.99", "29.99"];

    // progress bar
    const now = 100;

    return (
        <React.Fragment>
		<CssBaseline />
		<Grid item xs={12} style={{margin:'10px auto'}}>
			<ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
		</Grid>
		<Container maxWidth="sm" style={{marginTop:'40px'}}>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
				<h4 className='header'>Here are your quotes!&nbsp;&nbsp;
                    <QuestionCircle
                        size={15}
                        className="cursor-pointer"
                        onClick={() => {setShowQuoteMessage(true)}}
                    />
                </h4>
			</Grid>
			<Grid container item justify="center" xs={12} sm={12} spacing={2}>
            {
            [
            'Canada Life',
            'Manulife',
            'TD Term Life',
            'Sunlife',
            'RBC Insurance',
            ].map((variant, index) => (
                        <Card
                            key={index}
                            bg={"white"}
                            text={'dark'}
                            className="mb-4"
                            style={{ width: '30rem' }}
                        >
                            <Card.Header>{variant}</Card.Header>
                            <Card.Body>
                                <Card.Title>{variant} Policy </Card.Title>
                                <Card.Text>
                                    {variant} is offering a policy of 35.99 per month for a term 20 policy
                                </Card.Text>
                            </Card.Body>
                        </Card>
            ))}
			</Grid>
		{/*quote message*/}
        <Modal show={showQuoteMessage} onHide={handleCloseQuoteMessage}>
                <Modal.Body>These are mock quotes and do not necessarily reflect your final quote.</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-info" onClick={handleCloseQuoteMessage}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
		</Container>
	</React.Fragment>
    )
}
