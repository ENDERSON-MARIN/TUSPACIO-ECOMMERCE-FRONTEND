import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, updateOrderStatus } from '../../actions';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';

export default function OrdersGrid() {
  const dispatch = useDispatch();
  const originalOrders = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const classes = useStyles();
  const [orderDetail, setOrderDetail] = useState({status: false, id: null})

  const orders = originalOrders.filter((order) => order.number !== null)

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  
  const columns = [
  { field: 'id', headerName: 'Order No.', width: 100,},
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    type: 'datetime',
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['processing', 'completed', 'cancelled'],
    cellClassName: (params) =>{
      return (
        params.value === 'processing' ? classes.processing : 
        params.value === 'completed' ? classes.completed : 
        params.value === 'cancelled' ? classes.cancelled : classes.created
      )
    },
  },
  {
    field: 'customer',
    headerName: 'Customer',
    width: 190,
    editable: false,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 320,
    editable: false,
  },
  {
    field: 'items',
    headerName: 'Items',
    type: 'number',
    width: 55,
    editable: false,
  },
  {
    field: 'total',
    headerName: '$ Total',
    type: 'number',
    style: {  weight: 'bold'},
    width: 90,
    editable: false,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    sortable: false,
    renderCell: (params) => { 
      if(params.id === 'N/A'){
        return null
      } else {
        return (
          <div className="cellAction">
            <Button
              style={{transform: 'scale(.8)'}}
              variant="contained"
              color="primary"
              endIcon={<PageviewIcon>send</PageviewIcon>}
              onClick={() => handleView(params.row.id)}>
                View
            </Button>
          </div>
        );
      }
    }
  }
  ];

  const rows = orders.map((order) => {
    let orderTotal = (order.total / 100).toString().replace(',', '.');
    return {
      id: order.number ? order.number : 'N/A',
      date: new Date(order.updatedAt).toLocaleString('es-MX', {timeZone: 'UTC'}),
      status: order.status,
      customer: order.userId?.toString().slice(14),
      address:  order.shipping?.address === null || 
                order.shipping?.address === undefined ? 'N/A' : 
                order.shipping?.address.line1 + ' ' +
                order.shipping?.address.city + ' ' +
                order.shipping?.address.state + ' ' +
                order.shipping?.address.country,
      items: order.orderProducts?.map(
        (product) => product.quantity).reduce((a, b) => a + b, 0),
      total: orderTotal,
    };
  });

  const handleView = (id) => {
    setOrderDetail({status: true, id: id})
  };

   const notifyChange= () => 
    toast.info('Order status was updated', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return <>
    {
      !orderDetail.status 
        ? <Box>
            <h4>Orders</h4>
            <div style={{ display: 'flex', height: 650, width: '100%', marginLeft: '0', backgroundColor: '#fff'}}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                onCellEditCommit={(params) => {
                  dispatch(updateOrderStatus(params.id, params.value));
                  notifyChange();
              }}
            />
            </div>
            <ToastContainer />
          </Box>
        : <OrderDetail setOrderDetail={setOrderDetail} id={orderDetail.id}/>
    }
  </>
}
