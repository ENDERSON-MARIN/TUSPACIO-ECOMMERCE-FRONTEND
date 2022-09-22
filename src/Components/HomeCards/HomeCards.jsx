import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './useStyles';
import { Link }from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import { addToWishlist, removeFromWishlist, addToCart} from '../../actions';
import CardMedia from '@material-ui/core/CardMedia';
import Placeholder from '../../assets/images/placeholder_home.png';
import Rating from '@material-ui/lab/Rating';

export default function HomeCards(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
 
  function handleFavorite(e) {
    e.preventDefault()
    !props.favorite ?
    dispatch(addToWishlist(props.products)) :
    dispatch(removeFromWishlist(props.products.id))
  }
  function handleCart(e) {
    e.preventDefault()
    !props.cart ?
    dispatch(addToCart(props.products.id)) : 
    alert('The product is already added')

}

  return (
    <>
    { !products? <div>Not product Found</div> :
      <Card className={classes.root}>
        
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          minHeight="3vh">
          <CardActions >
            {
              props.products.discountPrice && 
              <div className={classes.offcontainer}>
              <p className={classes.off}>{props.products.oferts[0].discountPercent} %OFF</p>
              </div>
            }


            <Button 
              size="small" 
              onClick={(e) => handleFavorite(e)}>
              {props.favorite ? 
                <Favorite className={classes.iconColors}/> : 
                <NotFavorite className={classes.iconColors}/>} 
            </Button>
            <Button 
              size="small" 
              onClick={(e) => handleCart(e)}>
              <ShoppingCartIcon className={classes.iconColors} />
            </Button>
          </CardActions>   
        </Box>
        <Link to={`/${props.products.id}`}>
        <CardMedia
          className={classes.media}
          image={props.products.image_link?
            props.products.image_link:
            Placeholder} />
          
        
        {/* <Link to={`/${props.products.id}`}>
          <img className='card-image' src={props.products.image_link} alt="" />
         </Link> */}
        </Link>
          <CardContent className={classes.content}>
          <div className={classes.tipo}>
            <Typography component="div">
              <Box 
                textAlign="left"  
                fontWeight="fontWeightBold" 
                fontSize={15} >
              {props.products.name}
              </Box>
            </Typography>
            {/* <Typography component="div" className={classes.price}   >
            <Box
            display="flex"
            alignItems="center"
            fontWeight="fontWeightBold" 
            fontSize={15}> 
                ${Math.ceil(props.products.price)}
            </Box>
                               
            </Typography>   */}
           {/* <h3 className={classes.off}>{props.products.oferts[0].discountPercent} %OFF</h3>    */}

            {
                    props.products.discountPrice ? 
                    
                    <p className={classes.red}>${props.products.discountPrice}</p>  : <p className={classes.red}> ${props.products.price}</p>  
                 
                    
              }
            </div>
            {/* <Typography component="div">
              <Box 
                textAlign="left"  
                fontWeight="fontWeightBold" 
                fontSize={13} >
              {props.products.brand?.toUpperCase()}
              </Box>
            </Typography> */}
            <Box component="fieldset" borderColor="transparent" m={0} p={0} >
            <Rating name="read-only" value={props.products.rating} readOnly precision={0.1} size="small" zIndex={-1}/>
            </Box>
        </CardContent>
      </Card>
    }
  </>
  )           
}