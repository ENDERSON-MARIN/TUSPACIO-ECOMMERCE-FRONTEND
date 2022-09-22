import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    width: '70%',
    height: 350,
    // border: '1px solid #eceeed',
    borderRadius:'15%',
    margin: "auto",
    // marginLeft:20,
    backgroundColor: '#257558',
    marginBottom: "5%"
    
  },
  root2: {
    width: '50%',
    height: 320,
    // border: '1px solid #eceeed',
    borderRadius:'15%',
    margin: 20,
    backgroundColor: '#257558',
    
  },
  media: {
    height: '70%',
    width: '100%',
    // margin: "auto",
    
  },
  content: {
    minHeight: 100,
    height: 'auto',
    backgroundColor: '#f4f4f4'
  },
  iconColors: {
    color: '#257558',
  },
  tipo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button2: {

    backgroundColor: '#257558',
    color: '#fff',
    width: 180,
    marginTop: 10,
  },

  btnCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardBox:{
    alignContent:'center',
    justifyContent: "center",
    // backgroundColor: "#257558",
    // border: "solid 2px #ffffff" 
  }


});

const us = {
    Adrian:{
        name:'Adrian Quintana',
        pic: 'https://media-exp1.licdn.com/dms/image/C5603AQEyrmKp2px32A/profile-displayphoto-shrink_800_800/0/1517484866026?e=1669248000&v=beta&t=LvQw4lehjNasX0GkCXPKxDsC0W4X5DXTpk-sbd_d-wk',
        linkedIn: 'https://www.linkedin.com/in/radrianquintana/'
    },
    Edinson:{
        name:'Edinson Marin',
        pic:'https://media-exp1.licdn.com/dms/image/C5603AQGxhyxl6D9bNw/profile-displayphoto-shrink_800_800/0/1629320247409?e=1669248000&v=beta&t=qywMvVizXUF5TD6dsVHwxBQnR9tl9VksseQ_glqFmKo',
        linkedIn:'https://www.linkedin.com/in/radrianquintana/',
    },
    Carolina:{
        name:'Carolina Castillo',
        pic:'https://media-exp1.licdn.com/dms/image/C4D03AQGB-i9_BQ5ngQ/profile-displayphoto-shrink_800_800/0/1650381870262?e=1669248000&v=beta&t=UFkl9KGDR2QyPuG6HtDxTi7wmTmxfBqKkMZjrj3St1c',
        linkedIn:'https://www.linkedin.com/in/carolina-castillo-andrada-088244238/',
    },
    Santiago:{
        name:'Santiago Pereyra',
        pic:'https://media-exp1.licdn.com/dms/image/C4E03AQGBEPMREeAB8w/profile-displayphoto-shrink_200_200/0/1638533828557?e=1669248000&v=beta&t=FS_Rx1DoC0hR-eDUW34d3-7XBm6eAWQYA7ePAnvtkns',
        linkedIn:'https://www.linkedin.com/in/santiagompereyra/',
    },
    Enderson:{
        name:'Enderson Marin',
        pic:'https://media-exp1.licdn.com/dms/image/C5635AQEI4xDnMaL3Xw/profile-framedphoto-shrink_200_200/0/1597844138726?e=1664319600&v=beta&t=utzFxFiJJozKKBg1Fzsurj5WgAZHwRqsjcn-yrzErWE',
        linkedIn:'https://www.linkedin.com/in/enderson-marin/',
    },
    Gerardo:{
        name:'Gerardo Medellin',
        pic:'https://media-exp1.licdn.com/dms/image/D5635AQG_i-fbnBf7eg/profile-framedphoto-shrink_200_200/0/1657843701499?e=1664316000&v=beta&t=nrNX9qRewJ5iRDd7rYiaH6orZsT1ruerIs8XD_zF1Lc',
        linkedIn:'https://www.linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/',
    },
    Diego:{
        name:'Diego Maceda',
        pic:'https://media-exp1.licdn.com/dms/image/C5603AQFJ7mytNfIK1g/profile-displayphoto-shrink_200_200/0/1647706616888?e=1669248000&v=beta&t=qyTj3qRZTdAHFEuZ4UwIV9p2fVOR4lCrKfUnev1ziQw',
        linkedIn:'https://www.linkedin.com/in/dmaceda/',
    }
}

export default function AboutCard() {
  const classes = useStyles();


  return (
    <Box paddingY={4}>
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Adrian.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Adrian.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Adrian.linkedIn}
                                size='small'
                                >
                                LinkedIn's Adrian
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Edinson.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Edinson.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Edinson.linkedIn}
                                size='small'
                                >
                                LinkedIn's Edinson
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Carolina.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Carolina.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Carolina.linkedIn}
                                size='small'
                                >
                                LinkedIn's Carolina
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Santiago.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Santiago.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Santiago.linkedIn}
                                size='small'
                                >
                                LinkedIn's Santiago
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Enderson.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Enderson.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Enderson.linkedIn}
                                size='small'
                                >
                                LinkedIn's Enderson
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Diego.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Diego.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Edinson.linkedIn}
                                size='small'
                                >
                                LinkedIn's Diego
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3} className={classes.cardBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={us.Gerardo.pic}
                    />
                    <CardContent className={classes.content}>
                
                        <Typography component="div">
                            <Box
                                textAlign="center"
                                fontWeight="fontWeightBold"
                                fontSize={23} >
                                {us.Gerardo.name}
                            </Box>
                        </Typography>
                    
                        <Typography component="div">
                            <Box
                            textAlign="left"
                            fontWeight="fontWeightBold"
                            fontSize={13} >
                            
                            </Box>
                        </Typography>
                        <div className={classes.btnCont}>
                            <Button
                                variant="contained"
                                className={classes.button2}
                                
                                href={us.Gerardo.linkedIn}
                                size='small'
                                >
                                LinkedIn's Gerardo
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
};
