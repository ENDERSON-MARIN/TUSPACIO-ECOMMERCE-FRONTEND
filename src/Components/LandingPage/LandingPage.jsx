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
    url: "https://i.im.ge/2022/09/10/OJ6erM.makeup.jpg",
    title: 'MakeUp',
    width: '40%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJNlEq.lab.jpg',
    title: 'Lipstick',
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJNyd9.smal.jpg',
    title: 'Nail polish',
    width: '30%',
  },
  {
    url: "https://i.im.ge/2022/09/12/1MLbYC.pexels-suzy-hazelwood-1327689.jpg",
    title: 'Palette',
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJcHI1.001-42.jpg',
    title: 'Contourn',
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJgInh.pencil.jpg',
    title: 'Pencil',
    width: '40%',
  },

];


  export default function Containe() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = itemData.length;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const RENDERED_PRODUCTS = products.slice(155, 163);
  const [checked, setChecked] = useState(false)

  const handleStepChange = (step) => {
      setActiveStep(step);
    };
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setChecked(true)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          >
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
