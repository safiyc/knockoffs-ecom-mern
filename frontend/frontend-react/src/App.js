import React from 'react';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}>&#9776;</button>
          <a href='index.html'>Knockoffs</a>
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
        <ul className='products'>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 Reviews)</div>
            </div>
          </li>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 reviews)</div>
            </div>
          </li>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 reviews)</div>
            </div>
          </li>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 reviews)</div>
            </div>
          </li>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 reviews)</div>
            </div>
          </li>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 reviews)</div>
            </div>
          </li>
          <li>
            <div className='product'>
              <img className='product-image' src='/images/iTap.webp' alt='product' />
              <div className='product-name'>iTap</div>
              <div className='product-brand'>Apricot</div>
              <div className='product-price'>$549</div>
              <div className='product-rating'>3.5 Stars (15 reviews)</div>
            </div>
          </li>
        </ul>
      </main>
      <footer className='footer'>
        All right reserved.
      </footer>
    </div>
  );
}

export default App;
