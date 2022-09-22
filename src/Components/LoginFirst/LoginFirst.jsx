import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Login from '../Login/Login';
import logo from '../../assets/images/img_logo.png'
import font from '../../assets/images/font_logo.png'

const useStyles = makeStyles((theme) => ({
    login: {
        paddingTop: 45,
        paddingBottom: 40 
    },
    logo: {
        paddingTop: 20, 
    },
    font: {
        paddingBottom: 20, 
    },
    msj: {
        paddingTop: 10,
        paddingBottom: 20 
    },
}));

export default function LoginFirst() {
    const classes = useStyles();
    
    return (
        <Box className={classes.login}>
            <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={3}>
                    <Typography variant="h3" gutterBottom>Welcome</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.logo}>
                        <img src={logo} alt="logo" width="100px"/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.font}>
                        <img src={font} alt="font" width="200px" height="50px"/>  
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.msj}>
                        <Typography variant="h4" gutterBottom>
                            Please login first, to see your profile
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" color="primary" onClick={Login()}>
                        LOGIN
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}