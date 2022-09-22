import React, { useEffect } from 'react';
import { getDetail } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Box ,makeStyles } from '@material-ui/core';
import ChangeProduct from './ChangeProduct';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
}));

export default function LoadProduct({id, setOneProduct}) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const product = useSelector((state) => state.productDetail)
    
    useEffect ( () => {
        dispatch(getDetail(id))
    }, [dispatch] )
    
    return (
        <Box className={classes.root}>
            {
                product.hasOwnProperty("dbInfo") 
                ? <ChangeProduct product={product.dbInfo} setOneProduct={setOneProduct}/>
                : <div className="loading loading--full-height"></div>
            }
        </Box>
    )
}

                        