import { GET_CATEGORIES, GET_ALL_PRODUCTS, SET_CURRENT_HOME_PAGE, GET_DETAIL, ORDERS_FILTERS, 
  GET_ALL_BRANDS, POST_PRODUCT, GET_NAME, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART,
  REMOVE_FROM_CART, SET_ADMIN_OPTION, ADD_NOTIFICATION, DELETE_NOTIFICATION} from "../actions";


const initialState = {
  products: [],
  currentPageHome: 1,
  productDetail: {},
  categories: [],
  brands: [],
  search: [],
  favorites: [],
  cart: [],
  adminOption: 0,
  notification: 0,
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case GET_ALL_BRANDS:
      // const allBrands = state.products.map((p) => p.brand);  // mapea todos las brands
      // const brands = [...new Set(allBrands)]; // elimina las repetidas
      const brands = ['dior', 'moov', 'anna sui', "l'oreal", 'misa', 'salon perfect', 'orly', 'wet n wild',
        'maybelline', 'pacifica', 'china glaze', 'essie', 'revlon', 'sante', 'pure anada', 'butter london',
        'suncoat', 'sinful colours', 'mineral fusion', 'covergirl', 'piggy paint', 'nyx', 'benefit', 'smashbox',
        'zorah', 'physicians formula', 'almay', 'marcelle', 'e.l.f.', 'dr. hauschka', 'fenty', 'clinique',
        'cargo cosmetics', 'dalish', "burt's bees", 'milani', 'colourpop', 'annabelle', 'deciem', 'stila',
        'mistura'];
      return {
        ...state,
        brands: brands
      }
    case ORDERS_FILTERS:
      return {
        ...state,
        products: action.payload
      }
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case SET_CURRENT_HOME_PAGE:
      return {
        ...state,
        currentPageHome: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload
      };
      case GET_NAME:
        return {
          ...state,
          products: action.payload
        }
    case POST_PRODUCT:
      return {
          ...state,
      }
    case ADD_TO_WISHLIST:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        favorites: state.favorites.filter(
          (el) => el.id !== action.payload)
      }
      case ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.payload]
        }
        case REMOVE_FROM_CART:
          return {
            ...state,
            cart: state.cart.filter(
              (el) => el.id !== action.payload)
          }

          case SET_ADMIN_OPTION:
            return {
              ...state,
              adminOption: action.payload
          }
          case ADD_NOTIFICATION:
            return {
            ...state,
            notification: state.notification + 1
            }
            case DELETE_NOTIFICATION:
              return {
              ...state,
              notification: state.notification > 0 ? state.notification - 1 : null
              }
      default:
      return state;
  }
}

export default rootReducer;