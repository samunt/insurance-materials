import React, {useContext, useEffect, useState} from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { DispatchContext, FormContext } from "../contexts/FormContext";
import ProgressBar from "react-bootstrap/ProgressBar";
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, TextField, CssBaseline} from '@material-ui/core';

export default function PersonalInformationForm() {
    const router = useRouter();
    const dispatch = useContext(DispatchContext);
    const form = useContext(FormContext);
    const [nameFirst, setNameFirst] = useState('');
    const [nameLast, setNameLast] = useState('');
    const [nameEmail, setNameEmail] = useState('');
    const [namePhone, setNamePhone] = useState('');
    const [isNext, setIsNext] = useState(true);

    dispatch({ type: "ID", id: uuid() });

    useEffect(() => {

        if(nameFirst !== form.nameFirst){
            setNameFirst(form.nameFirst ? form.nameFirst : '');
        }

        if(nameLast !== form.nameLast){
            setNameLast(form.nameLast ? form.nameLast : '');
        }

        if(nameEmail !== form.nameEmail){
            setNameEmail(form.nameEmail ? form.nameEmail : '');
        }

        if(namePhone !== form.namePhone){
            setNamePhone(form.namePhone ? form.namePhone : '');
        }

    }, []);
    
    useEffect(() => {
        if(nameFirst !== '' && nameLast !== '' && nameEmail !== '' && namePhone !== ''){
            setIsNext(false);
        }else{
            setIsNext(true);
        }
    }, [nameFirst, nameLast, nameEmail, namePhone]);

    const useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
        },
        dense: {
          marginTop: theme.spacing(2),
        },
        menu: {
          width: 200,
        },
          button: {
            marginTop: theme.spacing(5),
            textAlign:'center'
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },
      }));

    const classes = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/spouseForm')
    }

    // progress bar
    const now = 0;

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid item xs={12} style={{margin:'10px auto'}}>
			    <ProgressBar style={{height: '0.5rem'}} animated striped variant="info" label={`${now}% Done`} now={now} />
            </Grid>
            <Container maxWidth="sm">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h4 className="header">Please enter some information in case we get disconnected</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <form className={classes.container} autoComplete="off" onSubmit={(e)=>{handleSubmit(e)}}>
                            <Grid item xs={12} sm={6} className={classes.paper}>
                                <TextField
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    className={classes.textField}
                                    value={nameFirst}
                                    onChange={(e) => {
                                        setNameFirst(e.target.value);
                                    }}
                                    onBlur={()=>{
                                        dispatch({ type: "NAME_FIRST", nameFirst: nameFirst});
                                    }}
                                />
                            </Grid>
                                <br />
                                <Grid item xs={12} sm={6} className={classes.paper}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    className={classes.textField}
                                    value={nameLast}
                                    onChange={(e) => {
                                        setNameLast(e.target.value);
                                    }}
                                    onBlur={()=>{
                                        dispatch({ type: "NAME_LAST", nameLast: nameLast });
                                    }}
                                />

                                </Grid>
                                <br />
                                <Grid item xs={12} sm={6} className={classes.paper}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    type="email"
                                    className={classes.textField}
                                    value={nameEmail}
                                    onChange={(e) => {
                                        setNameEmail(e.target.value);
                                    }}
                                    onBlur={(e)=>{
                                        dispatch({type: "NAME_EMAIL", nameEmail: nameEmail});
                                    }}
                                />
                                </Grid>
                                <br />
                                <Grid item xs={12} sm={6} className={classes.paper}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    type="number"
                                    className={classes.textField}
                                    value={namePhone}
                                    onChange={(e) => {
                                        setNamePhone(e.target.value);
                                    }}
                                    onBlur={(e)=>{
                                        dispatch({type: "NAME_PHONE", namePhone: namePhone});
                                    }}
                                /></Grid>
                                <br />
                                <br />
                                <Grid container justify="center" alignItems="center" className={classes.button}>
                                    <Grid item xs={12} sm={4} >
                                        <Button as="input" type="submit" value="Next" variant="contained" style={{ width: "100%" }} disabled={isNext}/>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>   
            </Container>
        </React.Fragment>
    )
}
