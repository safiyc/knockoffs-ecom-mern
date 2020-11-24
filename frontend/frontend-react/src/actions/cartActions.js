import axios from 'axios';
import Cookie from 'js-cookie'; // save data at browser refresh
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

//  addToCart returns another func with dispatch arg
// getState from redux-thunk
const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('/api/products/' + productId);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
      }
    });

    // to save qty to cookies
    const { cart: { cartItems } } = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));

  } catch (error) {

  }
}

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  // to save qty to cookies
  const { cart: { cartItems } } = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems))
}

export { addToCart, removeFromCart };