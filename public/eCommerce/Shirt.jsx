import './Shirt.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import shirtImage from './eComImages/Shirt.png';
import retroShirtImage from './eComImages/RetroShirt.png';
import discoBlazerImage from './eComImages/DiscoBlazer.png';


//======================== ECommerStore Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 4
// Description: This will be used to display shirts.
// Create a button at the top to go to the cart page


function Shirts({ addToCart, cartItems = [] }) {
  const [localCount, setLocalCount] = useState(0);
  
    const addSelectedItem = (product) => {
      if (typeof addToCart === 'function') {
        addToCart(product);
      } else {
        setLocalCount((prev) => prev + 1);
      }
    };
  
    const handleAddToCart = (product) => {
      const item = {
        id: product.id,
        name: product.name,
        category: 'Shirts',
        image: product.image,
        imageUrl: product.imageUrl
      };
  
      addSelectedItem(item);
    };

  return (
    <div className="container mt-5">
      <div className="d-flex gap-2 mt-3">
        <Link to="/eCommerceStore/merchPage" className="btn btn-secondary">
          Return to Merch Page
        </Link>

        <Link to="/eCommerceStore/cartPg" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
            View Cart
        </Link>
      </div>

      <p className="mt-3 mb-0 fw-bold">Number of items in cart: {cartItems.length || localCount}</p>

      <div className="mb-5">
        <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e6ce44', border: '10px solid #215689' }}>
          <h1>Shirts</h1>

          <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e2e888' }}>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={shirtImage}
                    className="card-img-top"
                    alt="t-shirt"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Classic Graphic T-shirt</h5>
                    <p>Classic graphic T-shirt.</p>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$63.50</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 1, name: 'Classic Graphic T-shirt', image: '/eCommerce/eComImages/Shirt.png', imageUrl: shirtImage })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <h1 style={{textAlign: 'center', color: '#2719e6'}}>50% Off!</h1>
                  <img
                    src={retroShirtImage}
                    className="card-img-top"
                    alt="retro shirt"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Retro Shirt</h5>
                    <p>Channel your inner 70's with this retro-style shirt.</p>
                    <h4 style={{ textAlign: 'center', color: '#e50f0f', textDecoration: 'line-through' }}>$60.00</h4>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$30.00</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 2, name: 'Retro Shirt', image: '/eCommerce/eComImages/RetroShirt.png', imageUrl: retroShirtImage })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={discoBlazerImage}
                    className="card-img-top"
                    alt="disco blazer"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Disco Blazer</h5>
                    <p>Shiny disco blazer to make you shine on the dance floor.</p>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$84.00</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 3, name: 'Disco Blazer', image: '/eCommerce/eComImages/DiscoBlazer.png', imageUrl: discoBlazerImage })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third section of the Home page, the footer */}
      <div className="mt-5" style={{ width: '100vw', height: '100px', marginLeft: 'calc(50% - 50vw)', backgroundColor: '#F46FF0' }}>
        <br/><p style={{ color: '#000000', fontSize: '20px', fontWeight: 700, margin: 0, padding: '1rem 1.5rem' }}>
          Designed by: Krystan Kornafel, a third year Software Engineering student.
        </p>
      </div>
    </div>
  );
}


export default Shirts; 


