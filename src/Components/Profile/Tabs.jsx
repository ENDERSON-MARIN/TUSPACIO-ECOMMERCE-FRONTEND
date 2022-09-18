import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersUser } from '../../actions';

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

function createData(name, price, quantity, date) {
    return { name, price, quantity, date };
}

const rows = [
    createData('imgProduct', 'nameProduct', 6.0, 24, 4.0),
    createData('imgProduct', 'nameProduct', 9.0, 37, 4.3),
    createData('imgProduct', 'nameProduct', 16.0, 24, 6.0),
    createData('imgProduct', 'nameProduct', 3.7, 67, 4.3),
    createData('imgProduct', 'nameProduct', 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables({ id }) {
    const dispatch = useDispatch()
    const classes = useStyles();
    const ordersUser = useSelector(state => state.ordersUser);
    console.log(id)
    
    // useEffect(() => {
    //     dispatch(getOrdersUser(id))
    // }, [dispatch])


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Product</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.img}
                        >
                            {/* <img src={row.image_link} /> */}
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
