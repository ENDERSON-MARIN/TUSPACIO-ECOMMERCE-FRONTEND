import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btnAdd:{
    position: 'absolute',
    marginTop: theme.spacing(61),
    marginBottom: theme.spacing(1),
    marginLeft: '5%',
    backgroundColor: '#257558',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#37af84'
    },
  },
}));

export default useStyles;