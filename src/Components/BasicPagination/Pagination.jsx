import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { setCurrentHomePage } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: 10,
      marginLeft: "auto",
      marginBottom: 10,

    },
  },
}));

export default function BasicPagination(
  {productsPerPage, totalProducts}) {

  const classes = useStyles();
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.currentPageHome)
  const pages = [];

  for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pages.push(i);
  }

  const handlePageClick = (page)=>{
    dispatch(setCurrentHomePage(page))
    window.scrollTo(0, 0)
  }

  return (
    <div className={classes.root}>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
      >
  
      <Pagination 
        count={pages.length}
        shape="rounded" 
        variant="outlined"
        size="large" 
        color="primary"
        onChange = {(event,page)=>handlePageClick(page)}
        hideNextButton={false}
        hidePrevButton={false} 
      />

      </Box>
    </div>

  );
}
