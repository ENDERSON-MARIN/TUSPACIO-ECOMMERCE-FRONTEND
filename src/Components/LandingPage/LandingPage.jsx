import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';
import brands from '../../assets/images/brands.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LandingCards from './LandingCards';
import { getAllProducts } from "../../actions";
import ButtonBase from '@material-ui/core/ButtonBase';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useStyles from './useStyles';
import { useNavigate, useParams } from "react-router-dom"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const itemData = [
  {
    img: "https://i.im.ge/2022/09/12/OGJBI1.envios2.jpg",
    title: "Envios a todo el mundo"
  },
  {
    img: "https://i.im.ge/2022/09/12/1MIaNh.10.jpg",
    title: "porciento de descuento al inciar sesion"
  },
  {
    img: "https://i.im.ge/2022/09/12/OGnQdr.hogar.jpg",
    title: "descuentos de temporada"
  },
  {
    img: "https://i.im.ge/2022/09/12/1MI0Iq.SALE.jpg",
    title: "confort de clientes"
  },


]

const images = [
  {
    url: "https://i.im.ge/2022/09/19/1sp3Pm.BRONZER.png",
    title: 'Bronzer',
    category: "bronzer",
    width: '40%',
  },
  {
    url: 'https://i.im.ge/2022/09/19/1spWQc.LIPS.png',
    title: 'Lipstick',
    category: "lipstick",
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/19/1spyIp.LIQUID.png',
    title: 'Liquid',
    category: "liquid",
    width: '30%',
  },
  {
    url: "https://i.im.ge/2022/09/19/1spzPJ.PALLE.png",
    title: 'Palette',
    category: "palette",
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/19/1spJ9z.CONTOR.png',
    title: 'Contour',
    category: "contour",
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/19/1svTq8.PEN.png',
    title: 'Pencil',
    category: "pencil",
    width: '40%',
  },

];


  export default function Containe({setFilters}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = itemData.length;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const RENDERED_PRODUCTS = products.slice(155,163);
  const [checked,setChecked] = useState(false)
  const navigate = useNavigate();

  const handleStepChange = (step) => {
      setActiveStep(step);
    };
  useEffect(() => {
    dispatch(getAllProducts());
    setFilters({
      "alpha": "",
      "category": "",
      "price": "",
      "brand": "",
      "rating": ""
    })
  }, [dispatch]);

  useEffect(() => {
    setChecked(true)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  function handleCatgory(category) {
    setFilters({
      "alpha": "",
      "category": category,
      "price": "",
      "brand": "",
      "rating": ""
    })
    navigate('/home')
  }


  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        animateHeight={true}
      // containerStyle={}
      >

        {
          itemData.map((step, index) => (
            <div key={step.title}>
              {Math.abs(activeStep - index) <= 2
                ? <img className={classes.img} src={step.img} alt={step.title} />
                : null
              }
            </div>
          ))
        }

      </AutoPlaySwipeableViews>

      <MobileStepper
        className={classes.colors}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
      />

      <div className={classes.descripContainer}>
        <h2 >
          Featured Products
        </h2>
      </div>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Box mb={4}>
            <Grid container justifyContent="center" >
              {RENDERED_PRODUCTS.length === 0 ? <div className="loading loading--full-height"></div>

                : RENDERED_PRODUCTS?.map((product, index) => (
                  <Grid key={index} item>
                    <LandingCards
                      className={classes.paper}
                      products={product}
                    />
                  </Grid>
                ))}


            </Grid>
          </Box>
        </Grid>
      </Grid>

      <div className={classes.all}>
        <Link to='/home'>
          <Button
            variant="contained"
            className={classes.button3}
            startIcon={<VisibilityIcon />}
            size='large'
          >
            see more
          </Button>
        </Link>
      </div>


      <div className={classes.descripContain}>
        <h2 >
          Achieve your best you in TuSpacio.<br />
          Because looking and feeling good belong together.
        </h2>
        </div>
            <div className={classes.rootImg}>
          {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          onClick={() => handleCatgory(image.category)}
        
        >
          <span
            className={classes.imageSrc}
            style={{
              width: image.width,
            }}
          />
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="h5"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>

      <div>
        <img src={brands} alt="" className={classes.brands} />
      </div>

    </div>


  );
}
