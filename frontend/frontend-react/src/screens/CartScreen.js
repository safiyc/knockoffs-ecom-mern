import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
// import { cartReducer } from '../reducers/cartReducer';
import { Link } from 'react-router-dom';

function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  // when user adds to cart, can choose qty
  // access query's str 'http... qty=?' and convert str after '=' symbol to int
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    // if productId exists
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  }

  return (
    <div className='cart'>
      <div className='cart-list'>
        <ul className='cart-list-container'>
          <li>
            <h3>Shopping Cart</h3>
            <div>
              Price
            </div>
          </li>
          {
            cartItems.length === 0 ?
              <div>
                Cart is empty
              </div> :
              cartItems.map(item =>
                <li>
                  <div className='cart-image'>
                    <img src={item.image} alt='product' />
                  </div>
                  <div className='cart-name'>
                    <div>
                      <Link to={'/product/' + item.product}>
                        {item.name}
                      </Link>
                    </div>
                    <div>
                      Qty:
                      {/* qty change in cartscreen is reflected in subtotal section */}
                      <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                      </select>
                      <button type='button' className='button' onClick={() => removeFromCartHandler(item.product)}>
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className='cart-price'>
                    ${item.price}
                  </div>
                </li>
              )
          }
        </ul>
      </div>
      <div className='cart-action'>
        <h3>
          {/* show num of items; default val of accumulator is '0' */}
          Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items):&nbsp;
          {/* price of items */}
          ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button onClick={checkoutHandler} className='button primary full-width' disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartScreen;