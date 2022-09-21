import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, TextField } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import useStyles from './useStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { getAllProducts, setDashboardItem, 
  addNewCategory, updateStock } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryIcon from '@material-ui/icons/Category';
import { ToastContainer, toast } from 'react-toastify';

export default function ProductsGrid() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector(state => state.products);
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(getAllProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = [
  { field: 'id', headerName: 'ID', width: 70,},
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
    headerName: 'Action',
    width: 200,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${params.id}`}>
            <Button
              variant="contained"
              color=""
              className={classes.btnDelete}
              startIcon={<DeleteIcon />}
              /*onClick={() => }*/>
                Delete
            </Button>
            </Link>

          </div>
        );
    }
  },

  ];

  const rows = products?.map(product => {
    return {
      id: product.id,
      stock: product.stock,
      name: product.name,
      description: product.description || 'No description',
      price: product.price
    }
  });

  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/${id}`);
  };

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

  return (
    <div>
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
    </div>
  );
}