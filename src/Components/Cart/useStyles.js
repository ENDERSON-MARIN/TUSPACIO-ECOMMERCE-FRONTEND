import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
      borderColor: '#257558',
      color: '#257558',
      width: '100%'
    },
    button2: {
        margin: theme.spacing(0),
        backgroundColor: '#257558',
        color: '#fff',
        width: '100%',
    }
  }));

  export default useStyles