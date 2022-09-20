import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
//import PersonAddIcon from '@material-ui/icons/PersonAdd';
//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import axios from 'axios';
import { getAllUsers, deleteUser, makeAdmin } from '../../actions';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default function UsersGrid() {
  const classes = useStyles();
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [tempRole, setTempRole] = useState(1);
  const [tempDelete, setTempDelete] = useState(1);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, ]);
  
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, tempRole]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, tempDelete]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, tempRole]);

  function handleReset(params) {
    var options = {
      method: 'POST',
      url: 'https://dev-iyl61sxr.us.auth0.com/dbconnections/change_password',
      headers: {'content-type': 'application/json'},
      data: {
        client_id: 'iGWV7b28WTEv4RPPPK6IwXXvPnRkwPfP',
        email: '503689@uane.mx',
        connection: 'Username-Password-Authentication'
      }
    };
    axios.request(options)
      .then(function (response) {
        console.log(response.data);
        notifyUserChangePass();
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const columns = [
  { field: 'id', headerName: 'ID', width: 40,},
  { field: 'role', headerName: 'Role', width: 70,},
  {
    field: 'nickname',
    headerName: 'Nickname',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 170,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    type: 'email',
    width: 250,
    editable: false,
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 140,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              className={classes.deleteBtn}
              startIcon={<DeleteIcon />}
              onClick={() => {
                setTempDelete(tempDelete + 1);
                dispatch(deleteUser(params.row.id))
                notifyUserDeleted()}}>
                Delete
            </Button>
            <ToastContainer />
          </div>
        );
    }
  },
  {
    field: 'password',
    headerName: 'Password',
    width: 130,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              className={classes.resetBtn}
              startIcon={<RotateLeftIcon />}
              onClick={(params) => handleReset(params)}>
              Reset
            </Button>
            <ToastContainer />
          </div>
        );
    }
  },
  {
    field: 'admin',
    headerName: 'Admin',
    width: 130,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              className={classes.makeBtn}
              startIcon={<SupervisorAccountIcon />}
              onClick={() => { 
                setTempRole(tempRole + 1);
                dispatch(makeAdmin(params.row.id, params.row.role)) 
              }}>
                {params.row.role === 'User' ? 'Make' : 'Cancel'}
            </Button>
            <ToastContainer />
          </div>
        );
    }
  },
  ];

  const ActiveUsers = users.filter((user) => user.status === true);

  const rows = ActiveUsers.map((user) => {
      return {
        id: user.id,
        role: user.rol_id === 2 ? "Admin" : "User",
        nickname: user.nickname,
        name: user.name,
        age: user.age,
        email: user.email,
      };
  });

  const notifyUserDeleted = () => 
  toast.success('User was deleted!', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  const notifyUserChangePass = () => 
  toast.info('Password reset was sent!', {
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
      <h4>Users</h4>
      <div style={{ height: 631, width: '100%', backgroundColor: '#fff'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
