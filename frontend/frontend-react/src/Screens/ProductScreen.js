import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productionActions';
// import data from '../dummyData';

function ProductScreen(props) {
  // console.log(props.match.params.id);

  // const product = data.products.find(x => x._id === props.match.params.id);

  // hook for cart
  const [qty, setQty] = useState(1);
  // useSelector to grab productDetails from state
  const productDetails = useSelector(state => state.productDetails);
  // obj deconstructing from productDetails, grab product, loading, error
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    // will run after stuff renders on the screen
    dispatch(detailsProduct(props.match.params.id));
    return () => {

    };
  }, []);

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + "?qty=" + qty);
  };
  return (
    <div>
      <div className='back-to-home'>
        <Link to='/'>Back to Home</Link>
      </div>

      {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
          <div className='details'>
            <div className='details-image'>
              <img src={product.image} alt='product' />
            </div>
            <div className='details-info'>
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  {product.rating} Stars ({product.numReviews} Reviews)
              </li>
                <li>
                  Price: ${product.price}
                </li>
                <li>
                  Description:
                <div>{product.description}</div>
                </li>
              </ul>
            </div>
            <div className='details-action'>
              <ul>
                <li>
                  Price: {product.price}
                </li>
                <li>
                  Status: {product.countInStock > 0 ? 'In Stock' : 'Product Unavailable'}
                </li>
                <li>
                  Qty:
                  <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {/* <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option> */}
                    {/* el+1 bc index starts at 0 */}
                    {[...Array(product.countInStock).keys()].map(el =>
                      <option key={el + 1} value={el + 1}>{el + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  {/* if stock greater than 0, show button, else dont show btn */}
                  {product.countInStock > 0 && <button onClick={handleAddToCart} className='button primary'>Add to Cart</button>
                  }
                </li>
              </ul>
            </div>
          </div>
      }
    </div>
  )
}

export default ProductScreen;