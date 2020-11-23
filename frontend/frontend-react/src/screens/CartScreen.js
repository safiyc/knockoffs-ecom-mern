import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '../actions/cartActions';
import { cartReducer } from '../reducers/cartReducer';

function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  // when user adds to cart, can choose qty
  // access query's str 'http... qty=?' and convert str after '=' symbol to int
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    // if productId exists
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

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
                <div>
                  <img src={item.image} alt='product' />
                  <div className='cart-name'>
                    {item.name}
                  </div>
                  <div>
                    Qty:
                  <select>
                      <option value='1'></option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                    </select>
                  </div>
                  <div>
                    {item.price}
                  </div>
                </div>
              )
          }
        </ul>
      </div>
      <div className='cart-action'>
        <h3>
          {/* show num of items; default val of accumulator is '0' */}
          Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
          :&nbsp;
          {/* price of items */}
          $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h3>
        <button className='button primary' disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartScreen;