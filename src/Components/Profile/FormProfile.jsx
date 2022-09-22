import React, { useState } from "react";
import { Grid, Paper, Button } from '@material-ui/core'; // Typography, Box, FormLabel, RadioGroup, FormControlLabel
import { TextField } from '@material-ui/core' // FormControl, Radio
import { makeStyles } from "@material-ui/core";
// import ButtonSubmit from "./ButtonSubmit";
// import { padding } from "@mui/system";
import { putUserChanges } from "../../actions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';


// import {Formik, Form, Field, ErrorMessage} from 'formik';
// import * as Yup from 'yup';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
            // paddingTop: "200px",
        }
    },
    buttonPop:{
        margin: theme.spacing(0.5),
        textTransform: 'none'
    }
}))



export default function FormProfile({user, setOpenPopup}) {

    const dispatch = useDispatch()
    const initialValues = {
        name: user.name, 
        nickname: user.nickname, 
        email: user.email, 
        email_verified: user.email_verified,
        picture: user.picture, 
        sid: user.sub,
        id: user.id,
        address: user.address?user.address:"----",
        status: true,
        rol_id: 2,
        // hireDate: new Date(),
        // inPermanent: false,
    }

    // console.log(initialFValeus)

    const [values, setValues] = useState(initialValues)
    
    const classes = useStyle();

    // const validate=() => {
    //   let temp = {}
    //   temp.email = (/$|.+@+..+/).test(values.email)?'':'Email is not valid'
    //   temp.address = values.address.length !=0 ?'':'This field is requerid'

    //   setErrors({
    //     ...temp,
    //   })

    //   return Object.values(temp).every(x =>  x == "")
    // }

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function resetValues() {
        setValues(initialValues)
    }

    function changeValues() {
        // console.log('entre a la funcion del boton')
        dispatch(putUserChanges(values))
        setOpenPopup(false)
        notifyChangeUser()
    }

    const notifyChangeUser= () => 
    toast.success("Updated data! Thanks you", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
    // const handleSubmit = e => {
    //   e.preventDefault()
    //   if(validate())
    //   window.alert('testing...')
    // }

    return (
        <Paper>
            <form className={classes.root}>
                <Grid 
                    container
                    direction='row'
                >
                    <Grid item>
                        <TextField
                            variant="filled"
                            label='New Email'
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="filled"
                            label='New Address'
                            value={values.address}
                            name='address'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item >
                        {/* <FormControl>
                            <FormLabel>
                                <RadioGroup>
                                    <FormControlLabel
                                        value='email'
                                        control={<Radio />}
                                        label='My Email is ok'
                                        onChange={handleInputChange}
                                    >
                                    </FormControlLabel>
                                </RadioGroup>
                            </FormLabel>
                        </FormControl>
                        <Box>
                            <FormControl>
                                <FormLabel>
                                    <RadioGroup>
                                        <FormControlLabel
                                            value='address'
                                            control={<Radio />}
                                            label='My Address is ok'
                                            onChange={handleInputChange}
                                        >
                                        </FormControlLabel>
                                    </RadioGroup>
                                </FormLabel>
                            </FormControl>
                        </Box> */}

                        <div>
                            <Button
                                variant='outlined'
                                color='primary'
                                size='medium'
                                className={classes.buttonPop}
                                onClick={() => changeValues()} 
                            >Update</Button>
                            <Button
                                variant='outlined'
                                color='default'
                                size='medium'
                                className={classes.buttonPop}
                                onClick={() => resetValues()} 
                            >Reset</Button>
                            <ToastContainer />
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}