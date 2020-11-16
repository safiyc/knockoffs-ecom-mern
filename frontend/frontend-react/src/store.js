import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

// initialState is empty object
const initialState = {};
// reducer is a func that gets the state and action, and returns new state based on that action
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
});

// thunnk middleware for redux that allows async func inside action of redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;