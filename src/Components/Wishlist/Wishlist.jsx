import React from 'react'
import WishlistCards from '../../Components/WishlistCards/WishlistCards';
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles'
import img from '../../assets/images/wish.png'


function Wishlist() {
  const classes = useStyles();
  const favorites = useSelector(state => state.favorites)
  const cart = useSelector((state) => state.cart);

  function productInCart(productID) {
    return cart?.some((product) => product.id === productID);
  }

  return (

    <div className='gral-container'>
      {favorites.length === 0 ? 
        <div className={classes.alert}>
        <img src={img} alt="Empty Cart" />
        
       <h4>Your WishList is Empty -- <strong> <a href="/home" id='a'>Go Shop Now!</a> </strong></h4> 
      </div>
        : 
        (
        <div>
          <Box 
              textAlign="left" 
              marginLeft="60px" 
              marginBottom="20px" 
              marginTop="20px"
              fontWeight="fontWeightBold" 
              fontSize={30}>
                Wishlist 
            </Box>
            <Grid 
            container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid 
                  container justifyContent="center" 
                  spacing={2}>
                    {favorites?.map((product, index) => {
                      return(
                        <WishlistCards 
                          key={index} 
                          product={product}
                          cart={productInCart(product.id)} />
                      )
                    })}
                </Grid>
              </Grid>
            </Grid>
        </div>
        )
      }
   </div>
              
  )
}

export default Wishlist