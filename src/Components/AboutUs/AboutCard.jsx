import React from 'react'
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
 },
  cardBox2:{
    marginLeft:2,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 50
  }


});

const us = {
    Adrian:{
        name:'Adrian Quintana',
        pic: 'https://i.im.ge/2022/09/30/1crDh8.Adri.png',
        linkedIn: 'https://www.linkedin.com/in/radrianquintana/'
    },
    Edinson:{
        name:'Edinson Madrid',
        pic:'https://i.im.ge/2022/09/30/1co8ih.Edi.png',
        linkedIn:'https://www.linkedin.com/in/ingedinsonmadrid/',
    },
    Carolina:{
        name:'Carolina Castillo',
        pic:'https://i.im.ge/2022/09/30/1cOjw6.caro.jpg',
        linkedIn:'https://www.linkedin.com/in/carolina-castillo-andrada-088244238/',
    },
    Santiago:{
        name:'Santiago Pereyra',
        pic:'https://i.im.ge/2022/09/30/1clRsD.Santi.png',
        linkedIn:'https://www.linkedin.com/in/santiagompereyra/',
    },
    Enderson:{
        name:'Enderson Marin',
        pic:'https://i.im.ge/2022/09/30/1clkWP.Ender2.png',
        linkedIn:'https://www.linkedin.com/in/enderson-marin/',
    },
    Gerardo:{
        name:'Gerardo Medellin',
        pic:'https://i.im.ge/2022/09/30/1cXLrX.Juan.png',
        linkedIn:'https://www.linkedin.com/in/juan-gerardo-medellin-ibarra-8b207058/',
    },
    Diego:{
        name:'Diego Maceda',
        pic:'https://i.im.ge/2022/09/22/1hCGwc.IMG-8804-3.jpg',
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Adrian.linkedIn}
                                size='small'
                                >
                                Adrian
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Edinson.linkedIn}
                                size='small'
                                >
                              Edinson
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Carolina.linkedIn}
                                size='small'
                                >
                                Carolina
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Santiago.linkedIn}
                                size='small'
                                >
                                Santiago
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Enderson.linkedIn}
                                size='small'
                                >
                                Enderson
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Diego.linkedIn}
                                size='small'
                                >
                                Diego
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
                                startIcon={<LinkedInIcon/>}
                                href={us.Gerardo.linkedIn}
                                size='small'
                                >
                                Gerardo
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
};
