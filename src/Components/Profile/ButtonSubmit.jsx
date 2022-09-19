import React from "react";
import {Button as MuiButton, makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    buttonPop:{
        margin: theme.spacing(0.5),
        textTransform: 'none'
    },
    label:{
        textTransform: 'none'
    },
    newButton: {
        position:'absolute',
        right: '10 px',
    }
}))

export default function ButtonSubmit(props){
    const {text, size, color, variant, onClick} = props;
    const classes = useStyles()

return(
    <MuiButton
    variant={variant}
    size={size}
    color={color}
    onClick={onClick}
    classes={{root: classes.root, label:classes.label}}
    >
        {text}
    </MuiButton>
)
}