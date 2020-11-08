import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";


const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // get data from server, then there is a payload
    const { data } = await axios.get('/api/products');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  }
  catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}

export { listProducts };