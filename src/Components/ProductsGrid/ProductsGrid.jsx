import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, TextField } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from './useStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { getAllProducts, setDashboardItem, 
  addNewCategory, updateStock, disableProduct } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import CategoryIcon from '@material-ui/icons/Category';
import { ToastContainer, toast } from 'react-toastify';
import EditIcon from '@material-ui/icons/Edit';
import DetailProduct from './Detail.jsx'
import { EventRepeat } from '@mui/icons-material';
import Offer from './Offer.jsx'
import ChangeProduct from '../ChangeProduct/LoadProduct.jsx'

export default function ProductsGrid() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector(state => state.products);
  const [category, setCategory] = useState('');
  const [oneProduct, setOneProduct] = useState({
    id: null,
    vista: ""
  })

  const [state, setState] = React.useState({
    checkedA: 'on',
    checkedB: 'off',
  });

  const handleChange = (event) => {
    event.preventDefault()
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  useEffect(() => {
    dispatch(getAllProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const columns = [
  { field: 'id', headerName: 'ID', width: 70,},
  { field: 'enabled', headerName: 'Enabled?', width: 80 },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 80,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 350,
    editable: false,
  },
  {
    field: 'price',
    headerName: '$ Price',
    type: 'number',
    style: {  weight: 'bold'},
    width: 90,
    editable: false,
  },
  {
    field: 'detail',
    headerName: 'Detail Page',
    width: 120,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              color="primary"
              endIcon={<PageviewIcon>send</PageviewIcon>}
              onClick={() => handleView(params.row.id)}>
                View
            </Button>
          </div>
        );
    }
  },
  {
    field: 'action',
    headerName: 'Product',
    width: 90,
    sortable: false,
    renderCell: (params) => {
      console.log(params.row)
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              className={params.row.enabled ? classes.btnOn : classes.btnOff}
              onClick={() => handleDelete(params.row.id, params.row.enabled)}>
                {params.row.enabled ? 'On' : 'Off'}
            </Button>
            {/*<Button
              variant="contained"
              className={classes.btnOff}
              onClick={() => handleDelete(params.row.id, "off")}>
                Off
            </Button>*/}
          </div>
        );
    }
  },
  {
    field: 'modify',
    headerName: 'Modify',
    width: 70,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <IconButton color="inherit" onClick={() => handleChangeProduct(params.row.id)}>
                <EditIcon /> 
            </IconButton>
          </div>
        );
    }
  },
  {
    field: 'Offer',
    headerName: 'Offer',
    width: 70,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <IconButton color="inherit" onClick={() => handleOffer(params.row.id)}>
                <LocalOfferIcon /> 
            </IconButton>
          </div>
        );
    }
  },
  ];

  const rows = products?.map(product => {
    return {
      id: product.id,
      enabled: product.status,
      stock: product.stock,
      name: product.name,
      description: product.description || 'No description',
      price: product.price
    }
  });

  const handleView = (id) => {
    setOneProduct({
      id: id,
      vista: "detail"
    })
  };

  const handleDelete = (id, status) => {
    status === true ?
    dispatch(disableProduct(id, 'off')) :
    dispatch(disableProduct(id, 'on'));
    notifyDisabled()
  }

  function handleChangeProduct(id) {
    setOneProduct({
      id: id,
      vista: "change"
    })
  }
  function handleOffer(id) {
    setOneProduct({
      id: id,
      vista: "offer"
    })
  }

  const handleCreateCategory = (e) => {
    e.preventDefault();
    if(!category){
      notifyEmptyCategory()
    } else{
      dispatch(addNewCategory({name: category}));
      setCategory('');
      e.target.value = '';
      notifyCategoryCreated()
    }
  } 

  const notifyEmptyCategory= () => 
  toast.error('Please enter a category name.', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const notifyCategoryCreated= () => 
  toast.success('Category was created!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const notifyStock= () => 
  toast.success('Product stock was updated!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const notifyDisabled= () =>
  toast.info('Product status changed!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
    
  return (
    <div>
      {
        oneProduct.vista === "detail" ?
        <DetailProduct id={oneProduct.id} setOneProduct={setOneProduct}/> :
        oneProduct.vista === "change" ?
        <ChangeProduct id={oneProduct.id}/> :
        oneProduct.vista === "offer" ?
        <Offer id={oneProduct.id}/> :
        <>
          <h4> Products</h4>
          <div className={classes.controls}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btnAdd}
            startIcon={<AddShoppingCartIcon />}
            onClick={() => dispatch(setDashboardItem("CreateProducts"))}>
              Add New Product
            </Button>
            <form>
              <TextField 
                id="category" 
                value={category}
                type="text" 
                placeholder="Add new category" 
                onChange={(e) => setCategory(e.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.btnCategory}
                startIcon={<CategoryIcon />}
                onClick={(e) => handleCreateCategory(e)}
                >
                  Create Category
              </Button>
              <ToastContainer />
            </form>
          </div>
          <div style={{ height: 631, width: '100%', backgroundColor: '#fff'}}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              onCellEditCommit={(params) => {
                dispatch(updateStock(params.id, params.value))
                notifyStock()
              }}/>
          </div>
        </>
      }
    </div>
  );
}