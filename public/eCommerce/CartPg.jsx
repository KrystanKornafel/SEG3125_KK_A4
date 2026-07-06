// This is the page where all the items in the cart should be displayed here.
// A potential idea for this would be to use an array to store the list of items that the 
// user selected.
import { Link, useNavigate } from 'react-router-dom';


function ItemsInCart({ cartItems = [], removeFromCart }) {
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((entry) => entry.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }

    return acc;
  }, []);

  return (
    <div>
      <h3>Cart</h3>
      <div className="d-flex flex-column gap-3">
        {groupedItems.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-3 border rounded p-3 bg-white">
            {item.image && (
              <img
                src={item.imageUrl || item.image || '/eCommerce/eComImages/Pants.png'}
                alt={item.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            )}
            <div className="flex-grow-1">
              <h5 className="mb-1">{item.name}</h5>
              <p className="mb-0">Quantity: {item.quantity}</p>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cart({ cartItems = [], removeFromCart }) {
  const navigate = useNavigate();

  const handleContinueToPayment = () => {
    navigate('/eCommerceStore/payment');
  };

  return (

    <div className="container mt-5">
      <div className="d-flex gap-2 mt-3">
        <Link to="/eCommerceStore/merchPage" className="btn btn-secondary">
          Return to Merch Page
        </Link>

        <button
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: 'auto' }}
          onClick={handleContinueToPayment}
        >
          Continue to Payment Page
        </button>
      </div>

      <div className="mb-5">
        <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e6ce44', border: '10px solid #215689' }}>
          <h1>ECommerce Store</h1>
          <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e2e888' }}>
            {/* Display tiles for shirts, 10? Put a plus below to add to cart, or quantity section */}
            <h1>Here are the items in your cart</h1>
            {/* list of items in the cart by displaying the image on that page */}
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ItemsInCart cartItems={cartItems} removeFromCart={removeFromCart} />
            )}
            {/* Create a button to go to the payment page */}
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

export default Cart;
