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
                            <Avatar alt="Adrian Quintana" src="https://media-exp1.licdn.com/dms/image/C5603AQEyrmKp2px32A/profile-displayphoto-shrink_800_800/0/1517484866026?e=1669248000&v=beta&t=LvQw4lehjNasX0GkCXPKxDsC0W4X5DXTpk-sbd_d-wk" />
                            <Avatar alt="Edinson Madrid" src='https://media-exp1.licdn.com/dms/image/C5603AQGxhyxl6D9bNw/profile-displayphoto-shrink_800_800/0/1629320247409?e=1669248000&v=beta&t=qywMvVizXUF5TD6dsVHwxBQnR9tl9VksseQ_glqFmKo' />
                            <Avatar alt="Carolina Castillo" src="https://media-exp1.licdn.com/dms/image/C4D03AQGB-i9_BQ5ngQ/profile-displayphoto-shrink_200_200/0/1650381870262?e=1669248000&v=beta&t=yCpqaThVc7o2AEUruEuLKgygIdkNmh7wOeCaX-BDVnk" />
                            <Avatar alt="Santiago Pereyra" src="https://media-exp1.licdn.com/dms/image/C4E03AQGBEPMREeAB8w/profile-displayphoto-shrink_800_800/0/1638533828557?e=1669248000&v=beta&t=-NXb8JCaEnhFNtTybrp96HyFxeHKRWa-ipg7uFw_-Xs" />
                            <Avatar alt="Enderson Marin" src="https://media-exp1.licdn.com/dms/image/C5635AQEI4xDnMaL3Xw/profile-framedphoto-shrink_800_800/0/1597844138726?e=1664312400&v=beta&t=LGc7cnqVNQKeKRJ1sMHe1Va6nvze_ljGtJAuC6qS10A" />
                            <Avatar alt="Diego Maceda" src="https://i.im.ge/2022/09/22/1hCGwc.IMG-8804-3.jpg" />
                            <Avatar alt="Juan Gearardo" src="https://media-exp1.licdn.com/dms/image/D5635AQG_i-fbnBf7eg/profile-framedphoto-shrink_800_800/0/1657843701499?e=1664316000&v=beta&t=tLQ5JXL9ErSV1gttb9VDwIdlwNEVXTw6U5nQa5QMJSU" />
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