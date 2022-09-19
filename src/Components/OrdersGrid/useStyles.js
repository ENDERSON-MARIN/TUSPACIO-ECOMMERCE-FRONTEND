import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  button:{
    backgroundColor: '#ff0000',
    color: '#ffffff',
    width: '20px',
    '&:hover': {
      backgroundColor: '#ff3b3b'
    },
  },
  processing:{
    color: '#FFAC1C',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#c8e6c9',
      cursor: 'pointer',
      border: '1px dotted #000',
    },

  },
  completed:{
    color: '#0F8C02',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#c8e6c9',
      cursor: 'pointer',
      border: '1px dotted #000',
    },
  },
  cancelled:{
    color: '#DF0C0C',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#c8e6c9',
      cursor: 'pointer',
      border: '1px dotted #000',
    },
  },
  created:{
    '&:hover': {
      backgroundColor: '#c8e6c9',
      cursor: 'pointer',
      border: '1px dotted #000',
    },
  },
  statusColumn:{
    '&:hover': {
      backgroundColor: '#ff0000',
      color: '#fff',
      cursor: 'pointer'},
  }
}));

export default useStyles;