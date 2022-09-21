import axios from "axios";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const SET_CURRENT_HOME_PAGE = "SET_CURRENT_HOME_PAGE";
export const GET_DETAIL = "GET_DETAIL";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const SEARCH_BY_CATEGORIE = "SEARCH_BY_CATEGORIE";
export const GET_ALL_BRANDS = "GET_ALL_BRANDS";
export const SEARCH_BY_BRAND = "SEARCH_BY_BRAND";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const POST_PRODUCT = "POST_PRODUCT";
export const GET_NAME = "GET NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_ADMIN_OPTION = "SET_ADMIN_OPTION";
export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";
export const ORDERS_FILTERS = "ORDERS_FILTERS";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ONE = "REMOVE_ONE";
export const POST_USER = 'POST_USER';
export const POST_REVIEW = "POST_REVIEW";
export const UPDATE_RATING = "UPDATE_RATING";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const CLEAN_ORDER_DETAIL = "CLEAN_ORDER_DETAIL";
export const CREATE_CART = "CREATE_CART";
export const SET_DASHBOARD_ITEM = "SET_DASHBOARD_ITEM";
export const CREATE_USER = "CREATE_USER";
export const SET_GLOBAL_STATE = "SET_GLOBAL_STATE";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";
export const GET_PRODUCTYPES = "GET_PRODUCTYPES";
export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const MAKE_ADMIN = "MAKE_ADMIN";
export const GET_ORDERS_USER = "GET_ORDERS_USER";
export const CHANGES_USER = "CHANGES_USER";
export const GET_LATEST_ORDERS = "GET_LATEST_ORDERS";
export const UPDATE_STOCK = "UPDATE_STOCK";
export const GET_REVIEWS_USER = "GET_REVIEWS_USER";
export const DISABLE_PRODUCT = "DISABLE_PRODUCT";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/products`);
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getAllBrands(categorie) {
  if (categorie) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`/products/brand?categorie=${categorie}`);
        return dispatch({
          type: GET_ALL_BRANDS,
          payload: json.data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  } else {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/products/brand`);
      return dispatch({
        type: GET_ALL_BRANDS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
}

export function getCategories(brand) {
  if (brand) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`/categories?brand=${brand}`);
        return dispatch({
          type: GET_CATEGORIES,

          payload: json.data,

        });
      } catch (error) {
        console.error(error);
      }
    };
  } else {
    return async function (dispatch) {
      try {
        var json = await axios.get(`/categories`);
        return dispatch({
          type: GET_CATEGORIES,
          payload: json.data,

        });
      } catch (error) {
        console.error(error);
      }
    };
  }
}

export function setCurrentHomePage(page) {
  return {
    type: SET_CURRENT_HOME_PAGE,
    payload: page,
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/product/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/products/search/?name=${name}`);
      return dispatch({
        type: GET_NAME,
        payload: json.data,
      });
    } catch (error) {
      alert("No se encontro el producto");
    }
  };
}

export function postNewProduct(payload) {
  return function (dispatch) {
    const newProdResult = axios.post(`/products`, payload);
    dispatch({
      type: POST_PRODUCT,
      payload,
    });
    return newProdResult;
  };
}

// export function postReview(payload) {
//   return function (dispatch) {
//     console.log(payload)
//     const newReviewResult = axios.post(`/products/reviews`, payload);
//     console.log(newReviewResult)
//     dispatch({
//       type: POST_REVIEW,
//       payload,
//     });
//     return newReviewResult;
//   }
// }

export function postReview(payload) {
  return async function (dispatch) {
    try {
      axios.post(`/products/reviews`, payload);
      dispatch({
        type: POST_REVIEW,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateRating(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/products/reviews/productId/${id}`);
      return dispatch({
        type: UPDATE_RATING,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addToWishlist(product) {
  return { type: ADD_TO_WISHLIST, payload: product };
}

export function removeFromWishlist(product) {
  return { type: REMOVE_FROM_WISHLIST, payload: product };
}

export function addToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, payload: product };
}

export function setAdminOption(value) {
  return {
    type: SET_ADMIN_OPTION,
    payload: value,
  };
}

export function clearCart() {
  return { type: CLEAR_CART };
}

export function removeOne(product) {
  return { type: REMOVE_ONE, payload: product };
}

export function orderCombine(filters) {
  const { alpha, brand, category, rating, price } = filters;
  let filtersArray = [];
  if (alpha) filtersArray.push(`alpha=${alpha}`);
  if (brand) filtersArray.push(`brand=${brand}`);
  if (category) filtersArray.push(`category=${category}`);
  if (rating) filtersArray.push(`rating=${rating}`);
  if (price) filtersArray.push(`price=${price}`);
  let order = "?";
  for (let i = 0; i < filtersArray.length; i++) {
    if (i === 0) {
      order = order + filtersArray[i];
    } else {
      order = order + "&" + filtersArray[i];
    }
  }
  return async function (dispatch) {
    try {
      let jsonOC;
      if (alpha || brand || category || rating || price) {
        jsonOC = await axios.get(`/products/orderCombine${order}`);
      } else {
        jsonOC = await axios.get(`/products`);
      }
      // console.log(jsonOC);
      return dispatch({
        type: ORDERS_FILTERS,
        payload: jsonOC.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function postUser(user) {
  const infoUser = {
    name: user.name, 
    nickname: user.nickname, 
    email: user.email, 
    email_verified: user.email_verified,
    picture: user.picture, 
    sid: user.sub
  }
  return async function (dispatch) {
    try {
      const newUser = await axios.post(`/users`, infoUser);
      return dispatch({
        type: POST_USER,
        payload: newUser.data[0]
        });
    } catch (error) {
      console.error(error);
    }
 }
}

export const getAllOrders = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/orders`);
      return dispatch({
        type: GET_ALL_ORDERS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const getOrderById = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/orders/${id}`);
      console.log(json.data)
      return dispatch({
        type: GET_ORDER_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function updateOrderStatus(id, status){
  return async function (dispatch) {
    try {
      const json = await axios.patch(`/order/${id}`, {status});
      return dispatch({
        type: UPDATE_ORDER_STATUS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const cleanOrderDetail = () => {
  return {
    type: CLEAN_ORDER_DETAIL,
  };
}

export const createCart = (cart, user) => {
  return async function (dispatch) {
    try {
      const json = await axios.post(`/orders`, { cart, user });
      return dispatch({
        type: CREATE_CART,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const setDashboardItem = (item) => {
  return {
    type: SET_DASHBOARD_ITEM,
    payload: item,
  };
}

export const createUser = (payload) => {
  return async function (dispatch) {
    try {
      const json = await axios.post(`/users`, payload);
      return dispatch({
        type: CREATE_USER,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function setGlobalEstate () {
  return {
  type: SET_GLOBAL_STATE,
  }
}

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/users`);
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`/users/${id}`);
      return dispatch({
        type: DELETE_USER,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

}

export function updateStock(id, stock){
  return async function (dispatch) {
    try {
      const json = await axios.put(`/controlstock/${id}/?stock=${stock}`);
      return dispatch({
        type: UPDATE_STOCK,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const addNewCategory = (category) => {
  return async function (dispatch) {
    try {
      const json = await axios.post(`/categories`, category);
      return dispatch({
        type: CREATE_CATEGORY,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const makeAdmin = (id, role) => {
  return async function (dispatch) {
    try {
      const json = await axios.patch(`/user/${id}`, role);
      return dispatch({
        type: MAKE_ADMIN,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

};

export function getProductTypes() {
  return function (dispatch) {
    return axios
      .get(`/products/productType`) 
      .then((p) => {
        dispatch({
          type: GET_PRODUCTYPES,
          payload: p.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getOrdersUser(id) { 
  return function (dispatch) {
    return axios
      .get(`/orders/user/${id}`) 
      .then((o) => {
        dispatch({
          type: GET_ORDERS_USER,
          payload: o.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function putUserChanges(user) {
  const changeUser = {email: user.email, address: user.address}
  console.log('entre a la accion, sigue el response')
  return async function (dispatch) {
    try {
      let response = await axios.put(`/users/${user.id}`, changeUser);
      console.log(response)
      return dispatch({
        type: CHANGES_USER,
        payload: changeUser
        });
    } catch (error) {
      console.log(error);
    }
 }
}

export const getLatestOrders = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/orders/dashboard`);
      return dispatch({
        type: GET_LATEST_ORDERS,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const getReviewsUser = (id) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`/products/reviews/userId/${id}`);
      return dispatch({
        type: GET_REVIEWS_USER,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const disableProduct = (id, status) => {
  return async function (dispatch) {
    try {
      const json = await axios.delete(`/products/${id}`, status);
      return dispatch({
        type: DISABLE_PRODUCT,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
