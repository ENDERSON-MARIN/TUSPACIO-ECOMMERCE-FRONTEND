import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import HomeCards from "../../Components/HomeCards/HomeCards";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getAllProducts } from "../../actions";
import BasicPagination from "../BasicPagination/Pagination";
// import LandingPage from "../Landing/Landing";
import { Box } from "@material-ui/core";
import useStyles from "./useStyles";
import img from '../../assets/images/noProduct.png'


import Contenido from "../Chatbot/Chatbot";
import "./Home.css";

export default function SpacingGrid(order) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productsCopy = useSelector((state) => state.productsCopy);
  const favorites = useSelector((state) => state.favorites);
  // const cart = useSelector((state) => state.cart);

  const currentPage = useSelector((state) => state.currentPageHome);
  const [productsPerPage] = useState(9);
  const LAST_PRODUCT = currentPage * productsPerPage;
  const FIRST_PRODUCT = LAST_PRODUCT - productsPerPage;
  const STOCKFILTERED = products.filter(product => product.stock > 0)
  const RENDERED_PRODUCTS = STOCKFILTERED.slice(FIRST_PRODUCT, LAST_PRODUCT);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllOrders())
  }, [dispatch]);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  function productIsFavorite(productID) {
    return favorites?.some((favorite) => favorite.id === productID);
  }
  // function productInCart(productID) {
  //   return cart?.some((product) => product.id === productID);
  // }

  return (
    <>
      {/* <Grid container direction='row' >
        <Grid item xs={12}>
          {order && <LandingPage />}
        </Grid>
      </Grid> */}
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Box mt={9}>
            <Grid container justifyContent="center" spacing={spacing}>
            {RENDERED_PRODUCTS.length === 0 && productsCopy.length === 0 ? <div className="loading loading--full-height"></div>  :
              RENDERED_PRODUCTS?.map((product, index) => (
                <Grid key={index} item>
                  <HomeCards
                    className={classes.paper}
                    products={product}
                    favorite={productIsFavorite(product.id)}
                  />
                </Grid>
              ))}
              {products.length === 0 && productsCopy.length > 0 ?
              <div className={classes.alert}>
              <img src={img} alt="Empty Cart" />
              
             <h4>Sorry, No Product Found-- <strong> <a href="/home" id='a'>Go Home!</a> </strong></h4> 
              </div>
              
              : null
              }
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <BasicPagination
        className={classes.centering}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        onChange={handleChange}
      />

      <div className="divwsp">
        <a href="https://wa.me/+573027729480" target="_blank" rel="noreferrer">
          <img
            src="https://i.ibb.co/Th1XCXz/Dise-o-sin-t-tulo-1.png"
            alt="..."
          />
        </a>
      </div>
      <div>
        <Contenido />
      </div>
      
    </>
  );
}
