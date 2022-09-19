import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom"
import {getDetail, addToCart, addToWishlist, removeFromWishlist, setGlobalEstate} from '../../actions/index'
import defaultImage from "../../assets/images/not_found.png"
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ReactImageMagnify from 'react-image-magnify';
import useStyles from './useStyles'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useNavigate } from 'react-router-dom';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';




export default function RecipeReviewCard() {
 const { id } = useParams()
 const classes = useStyles();
//  const [expanded, setExpanded] = React.useState(false);

//  const handleExpandClick = () => {
//    setExpanded(!expanded);
//  };
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

 const dispatch = useDispatch()
 const item = useSelector((state) => state.productDetail?.dbInfo)
 const reviews = useSelector((state) => state.productDetail?.reviews)
 const cart = useSelector((state) => state.cart)
 const fav = useSelector((state) => state.favorites)
 const orders = useSelector((state) => state.orders)
 const [count, setCount] = useState(1)
 const navigate = useNavigate();




 const [color,setColor] = useState('')
 const reviewsTotal = reviews?.length + 100

 

 useEffect(() => {
   dispatch(setGlobalEstate())
   dispatch(getDetail(id))   
 }, [dispatch])

 function handleCart(e) {
     if(!cart.includes(e)) {
       dispatch(addToCart(e))
     }
     else {
       alert('The product is already added to the cart')
     }
 }

 function handleFavorite(e) {
   !fav.includes(e)?
   dispatch(addToWishlist(e)) :
   dispatch(removeFromWishlist(e.id))
 }

  const handleColor = (e) => {
   setColor(e)
  }

  const handleReview = (id) => {
    navigate(`/reviews/${id}`);
  };

 

 return (
            <div>

              {item ?

              <div className='detail' key={item.id}>
               <div className='breadcrums'>
               <Breadcrumbs aria-label="breadcrumb">
                 <Link to="/home" >
                  Products
                 </Link>
                
                   
                   <Typography color="textPrimary">{item.categories?.map(e => e.name)}</Typography>
                 <Typography color="textPrimary">{item.name}</Typography>
               </Breadcrumbs>
               </div>
               <div className='image-list'>

               <img src={item.image_link  || defaultImage} className={`${item.stock} ${item.stock === 0 ? 'byn-small' : 'detail-img-small'}`}/> 

               </div>  
               
               
               {/* <ReactImageMagnify {...{
                   smallImage: {
                       isFluidWidth: true,
                       src: image,
                   },
                   largeImage: {
                       src: image,
                       width: 800,
                       height: 800,
                   }
               }} /> */}

               
               <img src={item.image_link || defaultImage} className={`${item.stock} ${item.stock === 0 ? 'byn' : 'image-cont'}`}/>  
         

               <div className='box'>
                   <div className='row'>
                       <h1>{item.name}</h1>
                       <h3>By {item.brand}</h3>
                       <ul className='tag'>
                       {item.tag_list?.map((ele, index) => (
                       <p key={index} >{ele}</p>
                       ))}
                       </ul>
                       <h3>${Math.ceil(item.price)}</h3>
                       
                       <Box component="fieldset" borderColor="transparent" m={0} p={0} >
                       <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="large" zIndex={-1}/>
                       </Box>
                       {item.stock < 4 && item.stock > 0 ? (<p className="errors">Buy now! last {item.stock} available</p>) : null}
                       <p>{item.description}</p>
                       <div className='colors'>
                        {item.stock > 0 ? <h3>Colors : </h3> : null}
          
                       {item.stock > 0 ?
                       item.product_colors?.slice(0, 6).map((color, index) => (
                       <button key={index} style={{background: color.hex_value}} onClick={() => handleColor(color.hex_value)}></button> 
                       )) : null }
                       </div>
                        {item.stock > 0 ? 
                       <Button
                         variant="contained"
                         className={classes.button2}
                         startIcon={<ShoppingCartIcon />}
                         onClick={() => handleCart(item.id)}
                         >
                         ADD TO CART
                         </Button>
                        :
                         <Button
                         variant="contained"
                         className={classes.button2}
                         startIcon={<ShoppingCartIcon />}
                         disabled='true'
                         >
                         out of stock
                         </Button>
                        }
                       

                       <Button
                               variant="outlined"
                               className={classes.button}
                               startIcon={<FavoriteIcon />}
                               onClick={(e) => handleFavorite(item)}
                           >
                           ADD TO FAVORITES
                           </Button>
                       
                   </div>
                   
               </div> 
                      
              </div>

           : <div className="loading loading--full-height"></div> 
           }
                    <div className={classes.ratingBtn}>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<TrendingUpIcon/>}
                      onClick={() => handleReview(item.id)}>
                        Rate this item
                    </Button>
                    </div>
                    <Divider variant="middle"  component="h1" />
                    {item?
                    <div className={classes.ratingCont}>
                       <h3>Product Reviews</h3>
                       <h1>{item.rating}</h1>
                       <Box component="fieldset" borderColor="transparent" m={0} p={0} >
                       <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="large" zIndex={-1}/>
                       </Box>
                        

                       <p>{reviewsTotal}</p>
                      
                      <List className={classes.reviewsList}>

                      {reviews?.map(review => 

                      <ListItem>
                      <Button 
                      size="small" 
                      >
                      {review.score < 3 ? 
                        <ThumbDownIcon className={classes.iconRed}/> : 
                        <ThumbUpIcon className={classes.iconGreen}/>} 
                       </Button>
                        <ListItemText primary={review.title} secondary={review.text} />
                        <Rating name="read-only" value={review.score} readOnly precision={0.1} size="medium" zIndex={-1}/>
                        <Divider variant="middle"  component="li" />
                      </ListItem>

                        )}
                     
                    </List>
                    </div> : null  }
           </div>
 );
}