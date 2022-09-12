import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Breadcrumbs, Link, Button, Paper, Divider, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useAuth0 } from "@auth0/auth0-react";
import {Avatar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "auto",
      flexGrow: 1,
      margin: 'auto',
      height: 'auto'
    },
    button2: {
      marginLeft: 20,
      backgroundColor: '#257558',
      color: '#fff',
      width: 250,
  },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding:10,
      height: 45,
      textPrimary:'#ffffff',
      paddingLeft: theme.spacing(5),
      backgroundColor: 'transparent',
    }, 
    paper:{
      display: 'flex',
      marginLeft:80,
      paddingLeft:30,
      marginRight:80,
      padding:10,
      alignItems: 'center',
      justifyContent: 'left',
      backgroundColor: 'gray',
      color:'#ffffff',
    },
    // Avatar: {
  
    //   overflow: 'hidden',
    //   // display: 'block',
    //   width: '100%',
    //   margin:20,
    // },
    buttons: {
      colorText: '#57a485', 
    },
    title: {
      width: '80%',
      marginLeft: 20,
      
    },
    title1: {
      display:'flex',
      alignItems: 'center'
    },
    h1: {
      marginLeft: 15,
      marginRight: 5
      
    },
    h2: {
      marginBottom: 30,
      marginTop: 0
      
    },
    edit: {
      color: "#363636",
      alignItems:"right",
      
    },
    welcome: {
      fontSize:50
      
    },
    brands: {
      marginTop: 100
    }
  }));




export default function MyAccount(){
const classes = useStyles()
const { user, isAuthenticated } = useAuth0();
const infoUser = useSelector((state) => state.infoUser)
const userId = useSelector((state) => state.userId)

const dispatch = useDispatch()

// useEffect ( () => {
//     dispatch(infoUser(userId))
// }, [dispatch] )

function UserPerfil(){
    const name =  infoUser.name;
    const email = infoUser.email;
    const id = infoUser.rol_id;

   
}

// const user = useSelector((state) => state.infoUser)


    return(
        <div>
            <Grid container spacing={3}
            direction="column"
            justifyContent="flex-start"
            alignItems="left"
            >
                <Grid item xs={12}>
                    
                    <Box className={classes.header}>
                         <h2>Bienvenido</h2>
                    </Box>
                        <Paper className={classes.paper}>
                        {
                        isAuthenticated
                            ? <Avatar alt={user.name} src={`${user.picture}`} />
                            : <AccountCircle className={classes.iconColors}/>
                        }
                        <div className={classes.h1}>
                            <h3>{user.name}</h3>
                        </div>
                        </Paper>
                </Grid>
            
                        <Paper className={classes.paper}>
                                <Grid item xs={12}
                                
                                >
                                    
                                        <div className={classes.h1}>
                                            <h3>Mis Datos</h3>
                                            <h4>NickName: {user.nickname}</h4>
                                            <h4>E-mail: {user.email}</h4>
                                            <h4>Dirección de entrega: </h4>
                                        </div>
                            
                            
                                </Grid>
                                <Box paddingRight={5}>
                                            <IconButton
                                            edge="end"
                                            >
                                                <CreateIcon />
                                            </IconButton>
                                </Box>
                            </Paper>
                          <Divider />
                            <Paper className={classes.paper}>
                                <Grid item xs={12}
                                
                                >
                                    
                                        <div className={classes.h1}>
                                            <h3>Mis Direcciones</h3>
                                            
                                            <h4>Dirección de entrega: </h4>
                                        </div>
                            
                            
                                </Grid>
                                <Box paddingRight={5}>
                                            <IconButton
                                            edge="end"
                                            >
                                                <CreateIcon />
                                            </IconButton>
                                </Box>
                            </Paper>

                                
                        
                        
               
            </Grid>
        </div>
        
    )
}