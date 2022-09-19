import React from 'react';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import {useSelector} from 'react-redux';

export default function Deposits() {
  const classes = useStyles();
  const latestOrders = useSelector(state => state.latestOrders);
  const total = latestOrders.reduce((acc, order) => acc + order.total, 0);

  return (
    <React.Fragment>
      <Title>Earnings:</Title>
      <Typography component="p" variant="h4" className={classes.money}>
        {'$' + (total/100)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        from last 10 Orders
      </Typography>
    </React.Fragment>
  );
}
