import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Paper, Box, Avatar} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CustomizedTables from './Tabs'
import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import PopUp from './PopUp'

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


// ---- Hardcodeo del objeto de Auth0 -- > User & isAthenticate, para la renderización de la primer parte---- //
const user = {
    name:'Carolina Castillo Andrada',
    email:'carolinacastilloandrad@gmail.com',
    nickname: 'Carolina',
    password: '*********',
    address: 'Avellaneda 679',
}


export default function Profile() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false)
  
  

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
      <Grid item xs={11}>
        <Box className={classes.box}>
          {/* <Paper className={classes.paper}> */}
              <TableContainer componet={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <StyledTableCell>
                      E-mail: {user.email}
                    </StyledTableCell>
                  </TableHead>
                </Table>
              </TableContainer>
              <TableContainer componet={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <StyledTableCell>Address: {user.address}</StyledTableCell>
                  </TableHead>
                </Table>
              </TableContainer>
              {/* </Paper> */}
                </Box>
            </Grid>
              <Grid item xs={1}>
               
                  <IconButton
                    edge="false"  
                    size='small'
                    onClick={() => setOpenPopup(true)}
                    >
                        <CreateIcon />
                    </IconButton>
              
              </Grid>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <CustomizedTables />
          </Box>
        </Grid>
        <PopUp 
          title='New Data Form'
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
        
      </Grid>
    </div>
  );
}
