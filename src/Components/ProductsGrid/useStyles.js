import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btnAdd: {

  },
   btnDelete:{
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ff4d4d'
    },
  },
  controls:{
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnCategory: {
    marginLeft: theme.spacing(3),
  }
}));

export default useStyles;