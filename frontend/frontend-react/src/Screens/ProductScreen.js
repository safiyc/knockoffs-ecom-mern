import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productionActions';
// import data from '../dummyData';

function ProductScreen(props) {
  // console.log(props.match.params.id);

  // const product = data.products.find(x => x._id === props.match.params.id);

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
                  Status: {product.status}
                </li>
                <li>
                  Qty:
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </li>
                <li>
                  <button className='button primary'>Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
      }
    </div>
  )
}

export default ProductScreen;