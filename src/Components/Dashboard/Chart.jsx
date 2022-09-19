import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, 
Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import {useSelector} from 'react-redux';

function createData(time, amount) {
  return { time, amount };
}

export default function Chart() {
  const theme = useTheme();
  const latestOrders = useSelector(state => state.latestOrders);
  const totals = latestOrders.map(order => order.total);

  const dates = latestOrders.map(order => 
    new Date(order.date)
    .toLocaleString('es-MX', {timeZone: 'UTC'})
    .split('/2022')[0]);

  const data = totals.map((total, index) => {
      return createData(dates[index], total/100)
  })

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}>
          <XAxis 
            dataKey="time" 
            stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ 
                textAnchor: 'middle', 
                fill: theme.palette.text.primary 
              }}>
              Sales USD($)
            </Label>
          </YAxis>
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke={theme.palette.primary.main} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}