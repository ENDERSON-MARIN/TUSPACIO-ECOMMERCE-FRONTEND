import React, { useState } from "react";
import { Grid, Paper, Button, Typography, Box, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import { TextField, FormControl, Radio } from '@material-ui/core'
import { makeStyles } from "@material-ui/core";
import ButtonSubmit from "./ButtonSubmit";
import { padding } from "@mui/system";


// import {Formik, Form, Field, ErrorMessage} from 'formik';
// import * as Yup from 'yup';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
            // paddingTop: "200px",
        }
    }
}))


const initialFValeus = {
    id: 0,
    fullName: '',
    nickName: '',
    email: '',
    address: '',
    hireDate: new Date(),
    inPermanent: false,
}

export default function FormProfile() {


    const [values, setValues] = useState(initialFValeus)
    const [errors, setErrors] = useState({});

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
                            variant='outlined'
                            label='New Email'
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant='outlined'
                            label='New Address'
                            value={values.address}
                            name='address'
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item >
                        <FormControl>
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
                        </Box>

                        <div>
                            <ButtonSubmit
                                type='submit'
                                variant='outlined'
                                color='primary'
                                size='medium'
                                text='Submit'
                            />
                            <ButtonSubmit
                                type='submit'
                                variant='outlined'
                                color='default'
                                size='medium'
                                text='Reset'
                            />
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}