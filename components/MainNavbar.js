import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#33b5e5'}}>
        <Toolbar>
            <ArrowBackIosIcon onClick={() => {router.back()}} style={{cursor:'pointer'}}/>
            <Typography variant="h4" className="navbar-heading navbar-custom">
                Insurdinary Insurance Advice
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
