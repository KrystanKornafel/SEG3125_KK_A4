import './Skirts.css'
// import { NavLink, Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

//======================== ECommerStore Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 4
// Description: This will be used to display skirts.
// Create a button at the top to go to the cart page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import corduroySkirtImage from './eComImages/corduroySkirt.png';
import bohoSkirtImage from './eComImages/bohoSkirt.png';
import workSkirtImage from './eComImages/workSkirt.png';


function Skirts({ addToCart, cartItems = [] }) {
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
      category: 'Skirts',
      image: product.imageUrl || product.image,
      imageUrl: product.imageUrl || product.image
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
          <h1>Skirts</h1>

          <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e2e888' }}>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={corduroySkirtImage}
                    className="card-img-top"
                    alt="corduroy skirt"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Corduroy Skirt</h5>
                    <p>Corduroy skirt for a classic look.</p>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$62.50</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 1, name: 'Corduroy Skirt', image: '/eCommerce/eComImages/CorduroySkirt.png', imageUrl: corduroySkirtImage })}
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
                    src={bohoSkirtImage}
                    className="card-img-top"
                    alt="boho skirt"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Boho Skirt</h5>
                    <p>Boho-style skirt for a 70's free-spirited look.</p>
                    <h4 style={{ textAlign: 'center', color: '#e50f0f', textDecoration: 'line-through' }}>$70.00</h4>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$35.00</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 2, name: 'Boho Skirt', image: '/eCommerce/eComImages/BohoSkirt.png', imageUrl: bohoSkirtImage })}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={workSkirtImage}
                    className="card-img-top"
                    alt="work skirt"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Work Skirt</h5>
                    <p>Classy skirts for a professional look.</p>
                    <h1 style={{ textAlign: 'center', color: '#000000' }}>$85.95</h1>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart({ id: 3, name: 'Work Skirt', image: '/eCommerce/eComImages/WorkSkirt.png', imageUrl: workSkirtImage })}
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


export default Skirts; 


