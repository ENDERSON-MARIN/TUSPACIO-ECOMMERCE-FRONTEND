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
  },
  btnOn: {
    marginRight: theme.spacing(1),
    backgroundColor: "#37af84",
    color: "#ffffff",
  },
  btnOff: {
    marginLeft: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  off: {
    color: 'crimson'
  },button3: {
    backgroundColor: '#257558',
    color: '#fff',
    },
}));

export default useStyles;

