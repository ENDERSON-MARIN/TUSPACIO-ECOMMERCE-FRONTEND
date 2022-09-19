import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    scrollSnapAlign: 'start',

  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
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
  container: {
    marginTop: 100
  }
}));

export default useStyles