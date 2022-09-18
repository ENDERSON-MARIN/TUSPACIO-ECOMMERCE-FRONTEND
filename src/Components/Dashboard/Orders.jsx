import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {useDispatch, useSelector} from 'react-redux';
import {getLatestOrders} from '../../actions';

function createData(id, date, name, shipTo, email, amount) {
  return { id, date, name, shipTo, email, amount };
}

export default function Orders() {
  const latestOrders = useSelector(state => state.latestOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestOrders())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rows = latestOrders.map((order) => {
    let id = 0;
  return createData(
    id++, 
    new Date(order.date).toLocaleString('es-MX', {timeZone: 'UTC'}),
    order.shipping.name, 
    order.shipping.address.postal_code + ' ' + order.shipping.address.city + ', ' + order.shipping.address.country,
    order.shipping.email, 
    order.total/100);
});

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">$ Sale Amount (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}