import React, { useEffect } from 'react'; // 
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LogoIMG from '../../assets/images/img_logo.png';
import LogoFONT from '../../assets/images/font_logo.png';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../ThemeConfig';
import useStyles from './useStyles';
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Hidden } from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import { getAllProducts, postUser } from '../../actions';
import { useDispatch } from 'react-redux'
import DrawerBox from '../Drawer/Drawer';


const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const data = useSelector((state) => state.productsCopy);

  const { user, isAuthenticated } = useAuth0();

  console.log(user)

  //useEffect para evitaar doble post de creacion de usuario
  useEffect(() => {
    if(isAuthenticated){
      setTimeout(() => {
        dispatch(postUser(user))
      }, 1000);
    }
  }, [dispatch, isAuthenticated, user])

  const cart = useSelector((state) => state.cart);
  const mapped= cart?.map(item => item.quantity)
  const total = mapped?.map(c => parseFloat(c)).reduce((a, b) => a + b, 0) ;
  const userState = useSelector((state) => state.infoUser);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRefresh = () => {
    navigate('/home')
    dispatch(getAllProducts())
  }
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {
        isAuthenticated
          ? <div>
              <MenuItem>{userState.name?userState.name:"Cargando..."}</MenuItem>
              <MenuItem onClick={ () => navigate('/profile') } > Profile </MenuItem>
              { 
                userState.rol_id && userState.rol_id===2 
                ? <MenuItem onClick={ () => navigate('/dashboard')} > Dashboard </MenuItem>
                : null
              }
              <MenuItem onClick={Logout()}>Sing out</MenuItem>
            </div>
          : <MenuItem onClick={Login()}>Sing in</MenuItem>
      }
     
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grow}>
        <AppBar position="static" color="inherit">
          <Toolbar>

            {/* Hamburguesa */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer">
              <DrawerBox/>
              <IconButton color="primary" onClick={() => handleRefresh()} >
                <img
                      className={classes.logoImg}
                      src={LogoIMG}
                      alt="logo img" />
              </IconButton>
            </IconButton>
            {/* Logo */}
       
            {/* <DrawerBox /> */}
            <IconButton color="primary" onClick={() => handleRefresh()} >

                <Box className={classes.logoBox}>
                  <img
                    className={classes.logoImg}
                    src={LogoIMG}
                    alt="logo img" />
                  <img
                    className={classes.logoFont}
                    src={LogoFONT}
                    alt="logo font"
                  />
                </Box>
            </IconButton>
            {/* Searchbar */}
            <div className={classes.search}>
              <Hidden xsDown>
                <SearchBar placeholder="Search product..." data={data} />
              </Hidden>
            </div>
            {/* Iconos de lado derecho */}
            <div className={classes.sectionDesktop}>
              <IconButton color="primary" onClick={() => navigate('/wishlist')} >
                <Badge color="secondary" overlap="rectangular">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton color="primary" onClick={() => navigate('/cart')} >
                <Badge color="secondary" overlap="rectangular">
                  <StyledBadge badgeContent={total} color= 'error'>
                    <ShoppingCartIcon className={classes.iconColors}/>
                  </StyledBadge>
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color='primary'>
                {
                  isAuthenticated
                    ? <Avatar 
                        alt={userState.name?userState.name:"alt cargando..."} 
                        src={`${userState.picture?userState.picture:LogoIMG}`} />
                    : <AccountCircle className={classes.iconColors}/>
                }
              </IconButton>
            </div>
            {/* Icono de tres puntos para mobile */}
            {/* <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div> */}
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    </ThemeProvider>
  )
}

