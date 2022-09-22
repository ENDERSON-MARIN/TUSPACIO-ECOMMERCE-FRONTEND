import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanProductDetail, getDetail, setGlobalEstate } from '../../actions/index'
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
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function RecipeReviewCard({ id, setOneProduct}) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const item = useSelector((state) => state.productDetail?.dbInfo)
  const reviews = useSelector((state) => state.productDetail?.reviews)
  const [color, setColor] = useState('')

  const reviewsTotal = reviews?.length + 100

  useEffect(() => {
    dispatch(setGlobalEstate())
    dispatch(getDetail(id))
  }, [dispatch])

  const handleColor = (e) => {
    setColor(e)
  }

  function backToProducts() {
    dispatch(cleanProductDetail())
    setOneProduct({id: null, vista: ""})
  }

  return (
    <div>
      <IconButton 
          onClick={() => backToProducts()}
      >
          <ArrowBackIcon /> Go Back
      </IconButton>
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
              <div className='colors'>
                {item.stock > 0 ? <h3>Colors : </h3> : null}

                {item.stock > 0 ?
                  item.product_colors?.slice(0, 6).map((color, index) => (
                    <button key={index} style={{ background: color.hex_value }} onClick={() => handleColor(color.hex_value)}></button>
                  )) : null}
              </div>
            </div>
          </div>
        </div>
        : <div className="loading loading--full-height"></div>
      }
      <Divider variant="middle" component="h1" />
      {item ?
        <div className={classes.ratingCont}>
          <h3>Product Reviews</h3>
          <h1>{item.rating}</h1>
          <Box component="fieldset" borderColor="transparent" m={0} p={0} >
            <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="large" zIndex={-1} />
          </Box>


          <p>{reviewsTotal}</p>

          <List className={classes.reviewsList}>

            {reviews?.map(review =>

              <ListItem>
                <Button
                  size="small"
                >
                  {review.score < 3 ?
                    <ThumbDownIcon className={classes.iconRed} /> :
                    <ThumbUpIcon className={classes.iconGreen} />}
                </Button>
                <ListItemText primary={review.title} secondary={review.text} />
                <Rating name="read-only" value={review.score} readOnly precision={0.1} size="medium" zIndex={-1} />
                <Divider variant="middle" component="li" />
              </ListItem>

            )}

          </List>
        </div> : null}
    </div>
  );
}