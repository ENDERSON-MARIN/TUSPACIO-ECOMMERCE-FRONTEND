import './App.css';
import React from 'react';
import { Box } from '@material-ui/core'  // ThemeProvider
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Detail from './Components/Detail/Detail';
import DetailService from './Components/DetailService/DetailService';
import ContainerCards from './Components/ContainerCards/ContainerCards.jsx'
import { Routes, Route } from 'react-router-dom';
import Wishlist from './Components/Wishlist/Wishlist'
import Cart from './Components/Cart/Cart'
import Profile from './Components/Profile/Profile';
import Checkout from './Components/Checkout/Checkout';
import OrderDetail from './Components/OrderDetail/OrderDetail.jsx';
import CreateUser from './Components/CreateUser/CreateUser.jsx';
import LandingPage from './Components/LandingPage/LandingPage';
import CheckoutSuccess from './Components/Checkout/CheckoutSuccess';
import PostReview from './Components/PostReview/PostReview';
import AboutUs from './Components/AboutUs/AboutUs';
import HowToBuy from './Components/HowToBuy/HowToBuyPopup.jsx';

import { useState } from 'react';

function MainRoutes() {

  const [filters, setFilters] = useState({
    "alpha": "",
    "category": "",
    "price": "",
    "brand": "",
    "rating": ""
  })

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>  
      {/*<ThemeProvider theme={theme}>*/}
      <Navbar />
      <HowToBuy handleClose={handleClose} open={open}/>
        <Routes >
          <Route path="/" element={ <LandingPage setFilters={setFilters}/> } />
          <Route path="/home" exact element={ <ContainerCards filters={filters} setFilters={setFilters}/> } /> 
          <Route path="/:id" exact element={ <Detail setFilters={setFilters}/> } />
          <Route path="/service" element={ <DetailService /> } />
          <Route path="/createUser" element={ <CreateUser /> } />
          <Route path="/wishlist" element={ <Wishlist /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/aboutUs" element={ <AboutUs /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/checkout/success" element={ <CheckoutSuccess /> } />
          <Route path="/checkout" element={ <Checkout /> } />
          <Route path="/orders/:id" element={ <OrderDetail /> } />
          <Route path="/reviews/:id" element={ <PostReview/> } />
        </Routes>  
      <Footer handleClickOpen={handleClickOpen}/>
      {/* </ThemeProvider> */} 
    </Box>    
  );
}

export default MainRoutes;