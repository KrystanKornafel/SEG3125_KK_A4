import './Pants.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import pantsImage from './eComImages/Pants.png';
import bellBottomsImage from './eComImages/BellBottoms.png';
import discoPantsImage from './eComImages/DiscoPants.png';

//======================== ECommerStore Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 4
// Description: This will be used to display pants and allow the user to add an item to the cart.

function Pants({ addToCart, cartItems = [] }) {
    // Keeps track of the number of items in the cart 
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
      category: 'Pants',
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
          <h1>Pants</h1>

          <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e2e888' }}>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <h1 style={{textAlign: 'center', color: '#2719e6'}}>50% Off!</h1>  
                  <img
                    src={pantsImage}
                    className="card-img-top"
                    alt="black suit pants"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Black Suit Pants</h5>
                    <p>Classic black suit pants.</p>
                    <h4 style={{ textAlign: 'center', color: '#e50f0f', textDecoration: 'line-through' }}>$100.00</h4>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$50.00</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 1, name: 'Black Suit Pants', image: '/eCommerce/eComImages/Pants.png', imageUrl: pantsImage })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={bellBottomsImage}
                    className="card-img-top"
                    alt="70's bell bottoms"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">70's Bell Bottoms</h5>
                    <p>Take yourself back in time to the 70's with these funky bell bottoms.</p>
                    <h4 style={{ textAlign: 'center' }}>$65.00</h4>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 2, name: '70\'s Bell Bottoms', image: '/eCommerce/eComImages/BellBottoms.png', imageUrl: bellBottomsImage })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={discoPantsImage}
                    className="card-img-top"
                    alt="disco pants"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Disco pants</h5>
                    <p>Shiny disco pants to make you shine on the dance floor.</p>
                    <h4 style={{ textAlign: 'center', color: '#060606'}}>$70.00</h4>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 3, name: 'Disco pants', image: '/eCommerce/eComImages/DiscoPants.png', imageUrl: discoPantsImage })}
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

export default Pants;

