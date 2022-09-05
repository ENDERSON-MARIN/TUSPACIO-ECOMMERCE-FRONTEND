import React, {useState, useEffect} from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNotification, removeFromCart} from '../../actions'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useStyles from './useStyles'
import CheckoutForm from '../../Components/Checkout/Checkout'
import { setTotalAmount } from '../../actions';

const Cart = () => {
  const [count, setCount] = useState(1)
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart)
  const classes = useStyles();
  let totalAmount = useSelector((state) => state.totalAmount)
  const stripePromise = loadStripe("pk_test_51LeNbcEQvh36s53L1n9Go3RnlmG1PzpxSSx4kCuXoGbBhZJopoFOqBSOJ71bkufZ0kunDuexU5ltZytby2HAe6Wd00aX61CqvS")

  useEffect(() => {
    dispatch(setTotalAmount(totalAmount))
  }, [dispatch, totalAmount])

  function handleDelete(e){
    dispatch(removeFromCart(e))
    dispatch(deleteNotification())
    alert('Do you want to delete the product?')
  }
  
  function handleIncrement(){
    setCount(count + 1)
  }

  function handleDecrement(){
    if(count>1){
      setCount(count - 1)
    }else {
      return
    }
  }

  const mapped = cartProducts.map(item => item.price)
  totalAmount = mapped.map(c => parseFloat(c)).reduce((a, b) => a + b, 0) * count;

  return (
    <section>
    {cartProducts.length === 0 ? 
      <Box
          textAlign="center"
          marginBottom="20px" 
          marginTop="20px"
          fontWeight="fontWeightBold"
          fontSize={30}>
            Your Cart is Empty
      </Box> : 
      <Box 
          textAlign="left" 
          marginLeft="60px" 
              marginBottom="20px" 
              marginTop="20px"
              fontWeight="fontWeightBold" 
              fontSize={30}>
                Your order :
      </Box>
      }
      {cartProducts?.map(item => (
        <div className='detail cart' key={item.id}>
          <div className ='cart-img-cont'>
            <img src={item.image_link} className='cart-img' alt='product'/>
          </div>
          <div className='box'>
              <div className='row'>
                <div className='price'>
                  <h4 id='title'>{item.name}</h4>
                  <h4>${item.price * count}</h4>
                </div>
                <Box 
                component="fieldset" borderColor="transparent" m={0} p={0}>
                  <Rating 
                  name="read-only" 
                  value={item.rating} readOnly precision={0.1} 
                  size="medium"/>
                </Box>
                <div className='colors'>
                  <h4>Colors : </h4>
                  {item.product_colors?.slice(0, 4).map((color, index) => (
                    <button key={index} style={{background: color.hex_value}}></button>
                  ))}
                </div>
                <div className='amount'>
                  <h4>Quantity : </h4>
                  <button className='count' 
                  onClick={() => handleDecrement(item.price)}>-</button>
                  <span>{count}</span>
                  <button className='count' 
                  onClick={() => handleIncrement()}>+</button>
                </div>
                <Button
                  variant="outlined"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(item.id)}
                  size="small">
                    Delete
                </Button>
                        
              </div>
                    
            </div>
          </div>
      ))}
      <div className='total'>
        <h3>Total: ${totalAmount}</h3>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm className={classes.CheckoutForm}/>
      </Elements>
    </section>
  )
}

export default Cart