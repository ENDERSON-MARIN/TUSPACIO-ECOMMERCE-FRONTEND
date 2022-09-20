import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersUser, getReviewsUser } from '../../actions';
import { Badge, Chip, Fade, IconButton, Link, Popper, Typography } from '@material-ui/core';
// import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelect } from '@mui/base';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// function createData(name, price, quantity, date) {
//     return { name, price, quantity, date };
// }

// const rows = [
//     createData('imgProduct', 'nameProduct', 6.0, 24, 4.0),
//     createData('imgProduct', 'nameProduct', 9.0, 37, 4.3),
//     createData('imgProduct', 'nameProduct', 16.0, 24, 6.0),
//     createData('imgProduct', 'nameProduct', 3.7, 67, 4.3),
//     createData('imgProduct', 'nameProduct', 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    root: {
        width: 500,
      },
    // typography: {
    // padding: theme.spacing(2),
    // },
});

export default function CustomizedTables() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles();
    const ordersUser = useSelector(state => state.ordersUser);
    const reviewsUser = useSelector(state => state.reviewsUser);
    const {id, sid} = useSelector(state => state.infoUser);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();
    
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    
    console.log({
        sid: sid,
        id: id
    })

    useEffect(() => {
        dispatch(getOrdersUser("google-oauth2|107204405880773625539")) // va sid 
        dispatch(getReviewsUser(42)) // va id
    }, [])

    let i = 0;
    let rows = ordersUser.map(o => o.orderProducts.map(p => { 
        i = i+1
        return {
        key: `${i}-${p.id}`,
        date: o.updatedAt, 
        id: p.id, 
        img: p.image_link, 
        name: p.name, 
        price: p.price, 
        quantity: p.quantity
    }})).flat()

    console.log(reviewsUser)

    // console.log(ordersUser)

    return (
        <>
            {
                ordersUser.length 
                ?   <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Date</StyledTableCell>
                                    <StyledTableCell align="center">Product</StyledTableCell>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">Unit Price</StyledTableCell>
                                    <StyledTableCell align="center">Purchased amount</StyledTableCell>
                                    <StyledTableCell align="center">Ranked</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.key}
                                    >
                                        <StyledTableCell align="center">{row.date.slice(0,10)}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">
                                            <IconButton color="primary" onClick={() => navigate(`/${row.id}`)}>
                                                <img src={row.img} alt={`img-${row.id}`} width="50px"/>
                                            </IconButton>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{`$ ${row.price}`}</StyledTableCell>
                                        <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            {
                                                reviewsUser.includes(r => r.product_id === row.id)
                                                ? <Chip
                                                    variant="outlined"
                                                    size="small"
                                                    icon={<FaceIcon />}
                                                    label="See your review"
                                                    clickable
                                                    color="secondary"
                                                    onClick={handleClick('left')}
                                                    />
                                                : <Chip
                                                    variant="outlined"
                                                    size="small"
                                                    icon={<FaceIcon />}
                                                    label="Ranked!!"
                                                    clickable
                                                    color="primary"
                                                    onClick={() => navigate(`/reviews/${row.id}`)}
                                                    />
                                            }
                                            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                                                {({ TransitionProps }) => (
                                                    <Fade {...TransitionProps} timeout={350}>
                                                        <Paper>
                                                            <Typography className={classes.typography}>
                                                                {ordersUser?.filter(o => o.id === row.id).title}
                                                            </Typography>
                                                        </Paper>
                                                    </Fade>
                                                )}
                                            </Popper>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                :   <StyledTableCell align='left'>Section where you can see your future purchases</StyledTableCell>
            }
        </>
    );
}
