import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
// import data from './dummyData';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>Knockoffs</Link>
          </div>
          <div className='header-links'>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign In</a>
          </div>
        </header>
        <aside className='sidebar'>
          <h3>Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>X</button>
          <ul>
            <li>
              <a href='index.html'>Food</a>
            </li>
            <li>
              <a href='index.html'>Clothes</a>
            </li>
            <li>
              <a href='index.html'>Electronics</a>
            </li>
          </ul>
        </aside>
        <main className='main'>
          <div className='content'>
            <Route path='/product/:id' component={ProductScreen} />
            {/* :id? => '?' means id is optional to cart screen */}
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/' exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className='footer'>
          All right reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
