import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Avatar, Button, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CustomizedTables from './Tabs'
import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Login from '../Login/Login';
// import TableRow from '@material-ui/core/TableRow';
import PopUp from './PopUp'
import { IconButton } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { postUser } from '../../actions';
import logo from '../../assets/images/img_logo.png'
import font from '../../assets/images/font_logo.png'
import { useNavigate } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.gray,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 65,
        paddingBottom: 40
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    box: {
        border: 1,
        borderColor: 'red',
        backgroundColor: 'gray',
        marginLeft: 100,
        marginRight: 100,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        height: 45,
        textPrimary: '#ffffff',
        paddingLeft: theme.spacing(5),
        backgroundColor: 'transparent',
    },
    avatar: {
        // overflow: 'hidden',
        display: 'flex',
        // width: '100%',
        margin: 20,
        // marginBottom:22,
        // paddingTop:25,
    },
    h1: {
        textAlign: 'left',
        paddingLeft: 100,
    },
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


// ---- Hardcodeo del objeto de Auth0 -- > User & isAthenticate, para la renderización de la primer parte---- //



export default function Profile() {
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles();
    const [openPopup, setOpenPopup] = useState(false);
    const user = useSelector(state => state.infoUser);
    
    // para probar
    // const userS = [{
    //     name: "Adrian Quintana",
    //     email: "radrianquintana@gmail.com",
    //     nickname: "rquintana", 
    //     email_verified: true,
    //     picture: "", 
    //     sid: "google-oauth2|113743980042929626345",
    //     id: 14,
    //     address: "----",
    //     status: true,
    //     rol_id: 2,
    // }]
    
    return (
        <div className={classes.root}>
            {
                user.id 
                ?   <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Box className={classes.header}>
                                    <h2>Welcome</h2>
                                </Box>
                                <Box className={classes.box}>
                                    <TableContainer componet={Paper}>
                                        <Table className={classes.table} aria-label="customized table">
                                            <TableHead>
                                                <StyledTableCell>
                                                    <Avatar
                                                        alt={user.name}
                                                        src={`${user.picture}`}
                                                    />
                                                </StyledTableCell>
                                                <StyledTableCell align='left'>{user.name}</StyledTableCell>
                                            </TableHead>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={11}>
                            <Box className={classes.box}>
                                {/* <Paper className={classes.paper}> */}
                                <TableContainer componet={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <StyledTableCell>
                                                E-mail: {user.email}
                                            </StyledTableCell>
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                                <TableContainer componet={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <StyledTableCell>Address: {user.address?user.address:"----"}</StyledTableCell>
                                        </TableHead>
                                    </Table>
                                </TableContainer>
                                {/* </Paper> */}
                            </Box>
                        </Grid>
                        <Grid item xs={1}>

                            <IconButton
                                edge="false"
                                size='small'
                                onClick={() => setOpenPopup(true)}
                            >
                                <CreateIcon />
                            </IconButton>

                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.box}>
                                <CustomizedTables id={"google-oauth2|107435403474491105660"}/>  
                                {/* user.sid es el valor que va en id -- solo se esta probando*/}
                            </Box>
                        </Grid>
                        <PopUp
                            title='New Data Form'
                            openPopup={openPopup}
                            setOpenPopup={setOpenPopup}
                            user={user}
                        />
                    </Grid>
                :   <Box className={classes.login}>
                        <Grid 
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid xs={3}>
                                <Typography variant="h3" gutterBottom>Welcome</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Box className={classes.logo}>
                                    <img src={logo} alt="logo" width="100px"/>
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Box className={classes.font}>
                                    <img src={font} alt="font" width="200px" height="50px"/>  
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Box className={classes.msj}>
                                    <Typography variant="h4" gutterBottom>
                                        Please login first, to see your profile
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Button variant="outlined" color="primary" onClick={Login()}>
                                    LOGIN
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
            }
        </div>
    );
}
