import React, { useEffect} from "react";
import { makeStyles, Box, Grid, Typography, Avatar, Card, CardActionArea, CardMedia, 
    CardContent, CardActions, Button} from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import './AboutUs.css';
import AboutCard from './AboutCard'


// const imageOne = new URL('./images/AboutUs1.gif', import.meta.url)

const useStyles = makeStyles((theme) =>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        disableGutters: true,
        justifyContent: 'center',
        // opacity: .8
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
   img:{
    display: 'flex',
    flexDirection:'flexFlow',
    
   },
   avatar:{
    margin:theme.spacing(3), 
    padding: theme.spacing(2),
    
   },
   cards: {
    maxWidth: 200,
    paddingLeft: theme.spacing(7),
    backgroundColor: '#006064',
  },
//   cardBox:{
//     margin:50,
//   }
}))

export default function AboutUs(){
const classes = useStyles()
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return(
        <Grid container
        direction='column'>
        <Box className={classes.root} >
            <Grid className='background'
            item xs={12}>
                <Typography
                variant='h4'
                display='block'
                align='center'
                >
                    <h2>About</h2>
                </Typography>
                <Typography
                color='black'
                variant='subtitle2'
                display='block'
                align='center'
                >
                    <h2 className={classes.avatar}>
                    We are TuSpacio, we work to achieve an increase the quality of life through body care: <br />
                    We are a group of spatialists focused on progress <br />
                    discovering how self-esteem towards our bodies contributes <br />
                    to the reduction of physical and psychological illnesses, <br />
                    originated from stress, self-carelessness and daily rutine.<br />
                    <br />
                    Let us show us how much you can improve both inside and outside .<br />
                    <br />
                    Thank you for being part of this beautiful experience with us.
                    </h2>
                </Typography>
                </Grid>
            <Box className="background2">
                <Typography
                variant='h4'
                display='block'
                align='center'
                
                >
                    <h2>Our Team</h2>
                </Typography>
                </Box>   
                   <Box className="background">
                    <Box className={classes.paper}>
                        <AvatarGroup max={7}>
                            <Avatar alt="Adrian Quintana" src="https://i.im.ge/2022/09/30/1crDh8.Adri.png" />
                            <Avatar alt="Edinson Madrid" src='https://i.im.ge/2022/09/30/1co8ih.Edi.png' />
                            <Avatar alt="Carolina Castillo" src="https://i.im.ge/2022/09/30/1cOjw6.caro.jpg" />
                            <Avatar alt="Santiago Pereyra" src="https://i.im.ge/2022/09/30/1clRsD.Santi.png" />
                            <Avatar alt="Enderson Marin" src="https://i.im.ge/2022/09/30/1clkWP.Ender2.png" />
                            <Avatar alt="Diego Maceda" src="https://i.im.ge/2022/09/22/1hCGwc.IMG-8804-3.jpg" />
                            <Avatar alt="Juan Gearardo" src="https://i.im.ge/2022/09/30/1cXLrX.Juan.png" />
                        </AvatarGroup>
                    </Box>
                </Box>
            <div className='background3'>
               <AboutCard />
            </div>
        </Box>
    </Grid>
    )
}