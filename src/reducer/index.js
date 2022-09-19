import {
  GET_CATEGORIES,
  GET_ALL_PRODUCTS,
  SET_CURRENT_HOME_PAGE,
  GET_DETAIL,
  SEARCH_BY_CATEGORIE,
  GET_ALL_BRANDS,
  SEARCH_BY_BRAND,
  ORDER_BY_PRICE,
  ORDER_BY_NAME,
  POST_PRODUCT,
  GET_NAME,
  ORDER_BY_RATING,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_ADMIN_OPTION,
  //ADD_NOTIFICATION,
  //DELETE_NOTIFICATION,
  ORDERS_FILTERS,
  CLEAR_CART,
  REMOVE_ONE,
  POST_USER,
  POST_REVIEW,
  UPDATE_RATING,
  GET_ALL_ORDERS,
  GET_ORDER_BY_ID,
  UPDATE_ORDER_STATUS,
  CLEAN_ORDER_DETAIL,
  // CREATE_CART, no se usa por esto lo comento
  SET_DASHBOARD_ITEM,
  CREATE_USER,
  SET_GLOBAL_STATE,
  GET_ALL_USERS,
  DELETE_USER,
  GET_PRODUCTYPES,
  CREATE_CATEGORY,
  MAKE_ADMIN,
  GET_ORDERS_USER,
  CHANGES_USER
} from "../actions";

/* LOCALSTORAGE FAVORITES */
function getLocalFavorites() {
  let productsFav = window.localStorage.getItem("productsFav");
  if (productsFav) {
    productsFav = JSON.parse(productsFav);
    console.log(productsFav);
  } else {
    productsFav = [];
  }
  return productsFav;
}

function setLocalFavorites(productsFav) {
  window.localStorage.setItem("productsFav", JSON.stringify(productsFav));
}

function setLocalCart(itemsCart) {
  window.localStorage.setItem("itemsCart", JSON.stringify(itemsCart));
}

/* LOCALSTORAGE CART */
function getLocalCart() {
  var itemsCart = window.localStorage.getItem("itemsCart");
  if (itemsCart) {
    itemsCart = JSON.parse(itemsCart);
    console.log(itemsCart);
  } else {
    itemsCart = [];
  }

  return itemsCart;
}

const initialState = {
  products: [],
  orders: [],
  orderDetail: [],
  productsCopy: [],
  currentPageHome: 1,
  productDetail: {},
  categories: [],
  brands: [],
  search: [],
  favorites: getLocalFavorites(),
  cart: getLocalCart(),
  adminOption: 0,
  notification: 0,
  infoUser: {},
  dashboardItem: 'Dashboard',
  users: [],
  producTypes: [],
  ordersUser: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ALL_BRANDS:
      // const allBrands = state.products.map((p) => p.brand);  // mapea todos las brands
      // const brands = [...new Set(allBrands)]; // elimina las repetidas
      // const brands = [
      //   "dior",
      //   "moov",
      //   "anna sui",
      //   "l'oreal",
      //   "misa",
      //   "salon perfect",
      //   "orly",
      //   "wet n wild",
      //   "maybelline",
      //   "pacifica",
      //   "china glaze",
      //   "essie",
      //   "revlon",
      //   "sante",
      //   "pure anada",
      //   "butter london",
      //   "suncoat",
      //   "sinful colours",
      //   "mineral fusion",
      //   "covergirl",
      //   "piggy paint",
      //   "nyx",
      //   "benefit",
      //   "smashbox",
      //   "zorah",
      //   "physicians formula",
      //   "almay",
      //   "marcelle",
      //   "e.l.f.",
      //   "dr. hauschka",
      //   "fenty",
      //   "clinique",
      //   "cargo cosmetics",
      //   "dalish",
      //   "burt's bees",
      //   "milani",
      //   "colourpop",
      //   "annabelle",
      //   "deciem",
      //   "stila",
      //   "mistura",
      // ];
      return {
        ...state,
        brands: action.payload,
      };
    case ORDERS_FILTERS:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_BY_CATEGORIE:
      return {
        ...state,
        products: action.payload,
      };
    case SEARCH_BY_BRAND:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY_RATING:
      return {
        ...state,
        products: action.payload,
      };
    case ORDER_BY_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsCopy: action.payload,
      };
    case SET_CURRENT_HOME_PAGE:
      return {
        ...state,
        currentPageHome: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
      };
    case POST_REVIEW:
      return {
        ...state,
      };
    case UPDATE_RATING:
      return {
        ...state,
      };
    case ADD_TO_WISHLIST: {
      let newState;
      if (state.favorites) {
        if (state.favorites.find((p) => p.id === action.payload.id))
          newState = state;
        else {
          newState = {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        }
      } else {
        newState = {
          ...state,
          favorites: [action.payload],
        };
      }
      setLocalFavorites(newState.favorites);
      return newState;
    }
    case REMOVE_FROM_WISHLIST: {
      let newState;
      if (state.favorites) {
        newState = {
          ...state,
          favorites: state.favorites.filter((p) => p.id !== action.payload),
        };
      } else {
        newState = state;
      }
      setLocalFavorites(newState.favorites);
      return newState;
    }
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemsCart = state.cart?.find((item) => item.id === newItem.id); // busco si ya esta en el carrito y lo guardo

      if (itemsCart) {
        itemsCart = {
          ...state,
          cart: state.cart.map((i) =>
            i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        itemsCart = {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
      }

      setLocalCart(itemsCart.cart);
      // localStorage.setItem("itemsCart", JSON.stringify(itemsCart.cart));

      return itemsCart;
    }
    case REMOVE_FROM_CART: {
      let newState;
      if (state.cart) {
        newState = {
          ...state,
          cart: state.cart.filter((p) => p.id !== action.payload),
        };
      } else {
        newState = state;
      }
      localStorage.setItem("itemsCart", JSON.stringify(newState.cart));
      return newState;
    }
    case SET_ADMIN_OPTION:
      return {
        ...state,
        adminOption: action.payload,
      };
    case REMOVE_ONE:
      let itemToRemove = state.cart.find((ele) => ele.id === action.payload);
      return itemToRemove.quantity > 1
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }
        : {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case POST_USER:
      console.log(action.payload)
      return {
        ...state,
        infoUser: action.payload,
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDER_BY_ID:
      return {
        ...state,
        orderDetail: action.payload,
      };
    case UPDATE_ORDER_STATUS:
      return {
        ...state
      };
    case CLEAN_ORDER_DETAIL:
      return {
        ...state,
        orderDetail: [],
      };
    case SET_DASHBOARD_ITEM:
      return {
        ...state,
        dashboardItem: action.payload
      }
    case CREATE_USER:
      return {
        ...state,
      }

    case SET_GLOBAL_STATE:
      return {
        ...state,
        productDetail: '',
      }
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
      }
    case GET_PRODUCTYPES:
      return {
        ...state,
        producTypes: action.payload
      } 
    case CREATE_CATEGORY:
      return {
        ...state,
      }
    case MAKE_ADMIN:
      return {
        ...state,
      }
    case GET_ORDERS_USER:
    return {
      ...state,
      ordersUser: action.payload
    }
    case CHANGES_USER:
      console.log('entre en el reducer')
      return {
        ...state,
        infoUser: [{
          ...state.infoUser,
          email: action.payload.email,
          address: action.payload.address
        }]
      }
    default:
      return state;
  }
}

export default rootReducer;
