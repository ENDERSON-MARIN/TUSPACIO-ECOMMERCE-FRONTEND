import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, setGlobalEstate, setOffer} from '../../actions/index'
import { useEffect } from 'react'
import defaultImage from "../../assets/images/not_found.png"
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function RecipeReviewCard({ id }) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const item = useSelector((state) => state.productDetail?.dbInfo)
  const reviews = useSelector((state) => state.productDetail?.reviews)
  const [color, setColor] = useState('')
  const [discount, setDiscount] = useState(0);

   const handleChangeDiscount = (event) => {
     event?.preventDefault();
     
     
   };



  const reviewsTotal = reviews?.length + 100

  useEffect(() => {
    dispatch(setGlobalEstate())
    dispatch(getDetail(id))
  }, [dispatch])


  useEffect(() => {
    
  }, [dispatch])

  const handleColor = (e) => {
    setColor(e)
  }




  
  return (
    <div>
      {item ?
        <div className='detail' key={item.id}>
          <div className='image-list'>
            <img src={item.image_link || defaultImage} className={`${item.stock} ${item.stock === 0 ? 'byn-small' : 'detail-img-small'}`} />
          </div>
          <img src={item.image_link || defaultImage} className={`${item.stock} ${item.stock === 0 ? 'byn' : 'image-cont'}`} />
          <div className='box'>
            <div className='row'>
              <h1>{item.name}</h1>
              <h3>By {item.brand}</h3>
              <ul className='tag'>
                {item.tag_list?.map((ele, index) => (
                  <p key={index} >{ele}</p>
                ))}
              </ul>
              <h3>${item.price}</h3>

              <Box component="fieldset" borderColor="transparent" m={0} p={0} >
                <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="large" zIndex={-1} />
              </Box>
              <p>{item.description}</p>
              <div className={classes.discount}>
              <h3>Apply Discount</h3>
              <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Discount</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={discount}
                onChange={(e)=> {
                    setDiscount(e.target.value) 
                }}
                >
                   

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                <MenuItem value={40}>Forthy</MenuItem>
                <MenuItem value={50}>Fifthy</MenuItem>
                </Select>
            </FormControl>

             
 
            </div>
              </div>
            </div>
            <Button
            variant="contained"
            className={classes.button3}
            size='large'
            onClick={() => 
                discount === 0 ? alert("discount 0") : 
                dispatch(setOffer(item.id, discount))
                }

           >Apply Discount
           </Button>
          </div>
        </div>
        : <div className="loading loading--full-height"></div>
      }
      
        
       
    </div>
  );
}