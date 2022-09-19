import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
      borderColor: '#257558',
      color: '#257558',
      width: 'auto',
      

    },
    button2: {
        margin: theme.spacing(5),
        backgroundColor: '#257558',
        color: '#fff',
        width: 'auto',
    },
    table: {
      width: '80%',
      marginTop: 50,
      marginLeft:'auto',
      marginRight:'auto'
      
    },
    formControl: {
      margin: theme.spacing(1),
      maxWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    alert: {
      width: '50%',
      marginTop: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft:'auto',
      marginRight: 'auto',

      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      
    },
    link: {
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none'
    }
  }));

  export default useStyles