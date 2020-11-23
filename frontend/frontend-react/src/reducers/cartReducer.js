import CART_ADD_ITEM from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      // item has new val for qty
      const item = action.payload;
      const product = state.cartItems.find(x => x.product === item.product);
      // if product exists
      // 'x' is prev qty val
      if (product) {
        return { cartItems: state.cartItems.map(x => x.product === product.product ? item : x) };
      }
      // else return
      return { cartItems: [...state.cartItems, item] };
    default:
      return state
  }
}

// export default cartReducer;
export { cartReducer };