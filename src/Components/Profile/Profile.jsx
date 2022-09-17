// import { Box, Container, Grid, ThemeProvider } from '@material-ui/core';
// import React from 'react';
// //import { useNavigate } from 'react-router-dom';
// import theme from '../../ThemeConfig';
// import AdminTabs from '../AdminTabs/AdminTabs';
// import {useSelector } from 'react-redux';
// import UsersGrid from '../../Components/UsersGrid/UsersGrid';
// import OrdersGrid from '../../Components/OrdersGrid/OrdersGrid';
// import ProductsGrid from '../../Components/ProductsGrid/ProductsGrid';
// export default function Profile() {
//   //const navigate = useNavigate()
//   //const dispatch = useDispatch()
//   const adminOption = useSelector(state => state.adminOption)

//   return (
//     <ThemeProvider theme={theme}>
//       <Box py={2} >
//         <Grid 
//           container
//           direction="column"
//           justifyContent="center"
//           alignItems="center">
//             <Grid>
//               <AdminTabs />
//             </Grid>
//             <Container>
//               {
//                 adminOption === 0 ?
//                 <UsersGrid />  :
//                 adminOption === 1 ?
//                 <OrdersGrid /> :
//                 adminOption === 2 ?
//                 <ProductsGrid /> :
//                 adminOption === 3 ?
//                 <h1>Here you'll see the Notifications options</h1> :
//                 adminOption === 4 ?
//                 <h1>Here you'll see the settings</h1> :
//                 null
//               }
//             </Container>
//         </Grid>
//       </Box>
//     </ThemeProvider>
//   )
// }

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Paper, Box, Avatar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import DataGridDemo from './FormProfile'
import CustomizedTables from './Tabs'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {IconButton} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:25,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box:{
    border:1,
    borderColor: 'red',
    backgroundColor: 'gray',
    marginLeft: 100,
    marginRight: 100,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding:10,
    height: 45,
    textPrimary:'#ffffff',
    paddingLeft: theme.spacing(5),
    backgroundColor: 'transparent',
  },
  avatar: {
    // overflow: 'hidden',
    display: 'flex',
    // width: '100%',
    margin:20,
    // marginBottom:22,
    // paddingTop:25,
},
  h1: {
    textAlign: 'left',
    paddingLeft:100,
  },
}));

// -- Adri: se divide en tres partes: (fijate, están dividis por Grids)

// la primera: renderiza el Avatar y el "name" de la persona logueada en Auth0, 
// por eso usa el obj user de Auth0

// la segunda: renderiza el mail y la dirección del user, lo busca de la bd
// /* UPDATE ONE USER IN THE DATABASE */
// const updateUser = async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const {
//         nickname,
//         name,
//         email,**
//         email_verified,
//         sid,
//         picture,
//         address,**
//         status,
//         rol_id } = req.body;
// porque el user tiene que poder cambiar la dirección a la que necesita que 
// que le llegue, y el mail.

// tercera: renderiza el historial de pedidos que hizo este user: con el model "order":
//const { DataTypes } = require('sequelize');
// module.exports = (sequelize) => {
//     sequelize.define('order', {
//       id:{
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true,
//       },
//       number: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       userId:{
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       orderProducts:{
//         type: DataTypes.JSON,
//         allowNull: false,
//       },
//       subtotal: {
//         type: DataTypes.INTEGER,
//         allowNull: true,
//       },
//       total:{
//         type: DataTypes.INTEGER,
//         allowNull: true,
//       },
//       shipping:{
//         type: DataTypes.JSON,
//         allowNull: true,
//       },
//       status: {
//         type: DataTypes.ENUM('created', 'processing', 'cancelled', 'completed'),
//         allowNull: false,
//         defaultValue: 'created',
//       },
//     });
//   };
// porq necesita: (lo vincula con el userId.order)
// - Items comprados con sus cantidades --> order.id, order.number
// - link a la pag del prod (?)
// - fecha y hora (creo que falta este)
// - status --> order.status


// ---- Hardcodeo del objeto de Auth0 -- > User & isAthenticate, para la renderización de la primer parte---- //
const user = {
    name:'Carolina Castillo Andrada',
    email:'carolinacastilloandrad@gmail.com',
    nickname: 'Carolina',
    password: '***',
    address: 'Avellaneda 679',
}


export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Box className={classes.header}>
                    <h2>Welcome</h2>
                </Box>
                    <Box className={classes.box}>
                      <TableContainer componet={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                          <TableHead>
                            <StyledTableCell>
                              <Avatar 
                              alt={user.name} 
                              src={`${user.picture}`} 
                              />
                              </StyledTableCell>
                            <StyledTableCell align='left'>{user.name}</StyledTableCell>
                          </TableHead>
                        </Table>
                      </TableContainer>
                    </Box>
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                    <Box className={classes.box}>
                      <TableContainer componet={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                          <TableHead>
                            <StyledTableCell>
                              E-mail: {user.email}
                            </StyledTableCell>
                              <IconButton
                              edge="end"
                              >
                                  <CreateIcon />
                              </IconButton>
                          </TableHead>
                        </Table>
                      </TableContainer>
                    </Box>
            </Paper>
            <Paper className={classes.paper}>
                    <Box className={classes.box}>
                      <TableContainer componet={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                          <TableHead>
                            <StyledTableCell>Address: {user.address}</StyledTableCell>
                            <IconButton
                              edge="end"
                              >
                                  <CreateIcon />
                              </IconButton>
                          </TableHead>
                        </Table>
                      </TableContainer>
                    </Box>
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <CustomizedTables />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}