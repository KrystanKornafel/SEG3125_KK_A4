// Display the merchandise to the user and allow a user to select the item
// Create a search bar as well, with options to look up their preferred items
// This will act like the second view of the website.
// From the E-commerce website, they can click on a type of merchandise and this class
// will print out the correct display given the type of merchandise selected.
// The merchandise will be in the form of tiles that can be clicked on to add to cart.
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{color: '#111111'}}>
      <div className="container-fluid">
        <Link className="navbar-brand" style={{color: '#05ff3f'}} to="/eCommerceStore/onSale">On Sale</Link>
        <Link className="navbar-brand" style={{color: '#cfe810'}} to="/eCommerceStore/shirts">Shirts</Link>
        <Link className="navbar-brand" style={{color: 'rgb(225, 168, 24)'}} to="/eCommerceStore/skirts">Skirts</Link>
        <Link className="navbar-brand" style={{color: '#ea9e2d'}} to="/eCommerceStore/pants">Pants</Link>
      </div>
    </nav>
  );
}

function MerchPage() {
  return (
    <>
    <div className="container mt-5">
      <div className="d-flex gap-2 mt-3">
        <Link to="/eCommerceStore/cartPg" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
            View Cart
        </Link>
      </div>
      {/* <div style={{ backgroundColor: '#d6cd94', left: 0, width: '30%' }}><NavBar /></div> */}
      <h1>Merchandise</h1>
      <p>Browse the available items.</p><br/>
      {/* Implementing the tiles here for all the different types of merchandise */}
      {/* #e2e888 vs #E5E8BF */}
      <div className="d-flex align-items-start gap-4 flex-wrap">
      <div style={{ backgroundColor: '#2f9255', width: '400px', flexShrink: 0 }}><NavBar /></div>
      <div className="row g-4 flex-grow-1" style={{ backgroundColor: '#E5E8BF', width: '500px' }}>

       {/* Display tile for on sale items */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <Link className="text-decoration-none text-dark" to="/eCommerceStore/onSale">
              <img
                src="/eCommerce/eComImages/OnSale.png"
                className="card-img-top"
                alt="on sale items"
                style={{ height: '220px', objectFit: 'contain'}}
              />
              <div className="card-body">
                <h1 className="card-title" style={{color: '#ff0000'}}>On Sale Items!</h1>
                <p className="card-text">Check out the items on sale!</p>
              </div>
            </Link>
          </div>
        </div>
       
       
        {/* Display tile for shirts */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <Link className="text-decoration-none text-dark" to="/eCommerceStore/shirts">
              <img
                src="/eCommerce/eComImages/Shirt.png"
                className="card-img-top"
                alt="shirts"
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Shirts</h5>
                <p className="card-text">Check out our latest collection of stylish shirts!</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Display tile for pants */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <Link className="text-decoration-none text-dark" to="/eCommerceStore/pants">
              <img
                src="/eCommerce/eComImages/Pants.png"
                className="card-img-top"
                alt="pants"
                style={{ height: '220px', objectFit: 'contain'}}
              />
              <div className="card-body">
                <h5 className="card-title">Pants</h5>
                <p className="card-text">Check out our latest collection of professional pants!</p>
              </div>
            </Link>
          </div>
        </div>
  
        {/* Display tile for skirts */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 shadow-sm">
            <Link className="text-decoration-none text-dark" to="/eCommerceStore/skirts">
              <img
                src="/eCommerce/eComImages/Skirts.png"
                className="card-img-top"
                alt="skirts"
                style={{ height: '220px', objectFit: 'contain', backgroundColor: '#f8f9fa' }}
              />
              <div className="card-body">
                <h5 className="card-title">Skirts</h5>
                <p className="card-text">Check out our latest collection of stylish 70's skirts!</p>
              </div>
            </Link>
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
    </>
  );
}

export default MerchPage;

