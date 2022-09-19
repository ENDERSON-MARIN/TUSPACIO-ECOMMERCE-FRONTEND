import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "auto",
      flexGrow: 1,
      margin: 'auto',
      height: 'auto',
      
    },
    button2: {
      backgroundColor: '#257558',
      color: '#fff',
      width: 150,
    },
    button3: {
    backgroundColor: '#257558',
    color: '#fff',
    width: 250,
    scrollSnapAlign: 'start'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 45,
      textPrimary:'#ffffff',
      paddingLeft: theme.spacing(5),
      backgroundColor: 'transparent',
    }, 
    colors:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      textPrimary:'#ffffff',
    },
    img: {
  
      overflow: 'hidden',
      // display: 'block',
      width: '100%',
    },
    buttons: {
      colorText: '#57a485', 
    },
    title: {
      width: '80%',
      marginLeft: 20,
      
    },
    title1: {
      display:'flex',
      alignItems: 'center'
    },
    h1: {
      marginLeft: 15,
      marginRight: 5
      
    },
    h2: {
      marginBottom: 30,
      marginTop: 0
      
    },
    iso: {
      color: "#363636"
      
    },
    welcome: {
      fontSize:50
      
    },
    brands: {
      width: '100%',
      marginTop: 50,
      marginBottom: 50
    },
    paper: {
      height: 140,
      width: 100,
      margin: theme.spacing(1),
    },
  
    descripContain: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'start',
     marginTop: 100,
     marginLeft: 20,
     marginRight:20
    },
    descripContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
     },
    h3: {
      marginLeft: 20,
      marginTop: 100
    },
    rootImg: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      
    },
    image: {
      position: 'relative',
      height: 300,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 2,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
    all: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    rootImg2: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      marginTop: 100
    },
    image2: {
      position: 'relative',
      height: 1000,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked2': {
          opacity: 0,
        },
      },
    },
    focusVisible2: {},
    imageButton2: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc2: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 2,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop2: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle2: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked2: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
    tit: {
      color: '#fff',
      fontSize: '4rem',
      paddingTop: 200
    },
    colortext: {
      color:  "#257558",
    },
    down: {
      color: "#257558",
      fontSize: '4rem',
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));

  export default useStyles;