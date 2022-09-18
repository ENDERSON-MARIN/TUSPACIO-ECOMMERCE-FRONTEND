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
import { Chip, Link } from '@material-ui/core';
// import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Navigate, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles();
    const ordersUser = useSelector(state => state.ordersUser);
        
    useEffect(() => {
        dispatch(getOrdersUser(id))
    }, [])

    let rows2 = ordersUser.map(o => o.orderProducts.map(p => { return {
        date: o.updatedAt, id: p.id, img: p.image_link, name: p.name, price: p.price, quantity: p.quantity
    }})).flat()
    console.log(rows2)
    console.log(ordersUser)
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
                                {rows2.map((row) => (
                                    <StyledTableRow key={row.id}
                                    >
                                        <StyledTableCell align="center">{row.date}</StyledTableCell>
                                        <StyledTableCell align="center" component="th" scope="row">
                                            <Link onClick={() => navigate(`/${row.id}`)}>
                                               <img src={row.img} alt={`img-${row.id}`} width="50px"/>
                                            </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">{`$ ${row.price}`}</StyledTableCell>
                                        <StyledTableCell align="center">{row.quantity}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Chip
                                                variant="outlined"
                                                size="small"
                                                icon={<FaceIcon />}
                                                label="Ranked!!"
                                                clickable
                                                color="primary"
                                                // onDelete={handleDelete}
                                                // deleteIcon={<DoneIcon />}
                                            />
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
