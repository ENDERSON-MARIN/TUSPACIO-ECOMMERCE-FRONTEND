import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FormProfile from './FormProfile';
import ButtonSubmit from "./ButtonSubmit";


const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },

}))


export default function PopUp(props) {
    const classes = useStyles();
    const { title, openPopup, setOpenPopup, user } = props;
    // console.log(props)
    return (
        <Dialog
            open={openPopup}
            maxWidth='md'
            className={classes.dialogWrapper}
        >
            <DialogTitle >
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ButtonSubmit
                        text='X'
                        color='secondary'
                        variant='contained'
                        onClick={() => { setOpenPopup(false) }}
                    >
                    </ButtonSubmit>
                </div>
            </DialogTitle>
            <DialogContent
                dividers
            >
                <FormProfile user={user} setOpenPopup={setOpenPopup}/>
            </DialogContent>
        </Dialog>
    )
}