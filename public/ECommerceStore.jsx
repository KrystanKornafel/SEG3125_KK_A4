import './ECommerceStore.css'
// import { NavLink, Outlet } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import PaymentPage from './eCommerce/PaymentPg';
import ContactInfoPage from './eCommerce/ContactInfoPg';
import MerchPage from './eCommerce/EComMerchPg';
import TransactionCompletePage from './eCommerce/TransactionComplete';

//======================== ECommerStore Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 4
// Description: This will be used to create the home page for the ECommerceStore.

// function ECommerceNavbar() {
//   const links = [
//     { to: '/eCommerceStore', label: 'Home' },
//     { to: '/eCommerceStore/merchPage', label: 'Merchandise' },
//     { to: '/eCommerceStore/contactInfo', label: 'Contact Info' },
//     { to: '/eCommerceStore/payment', label: 'Payment' },
//     { to: '/eCommerceStore/transactionComplete', label: 'Complete' }
//   ];

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded px-3 mb-4">
//       <div className="container-fluid">
//         <span className="navbar-brand me-3">E-Commerce</span>
//         <ul className="navbar-nav flex-wrap gap-2">
//           {links.map((link) => (
//             <li className="nav-item" key={link.to}>
//               <NavLink
//                 className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
//                 to={link.to}
//               >
//                 {link.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

function ECommerceHome() {
  return (
    <>
      <div className="container mt-5">
        <div className="mb-5">
          <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e6ce44', border: '10px solid #215689' }}>
            <h1>ECommerce Store</h1>
            <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#e2e888' }}>
              <p>Check out our merch page!</p>
              {/* Provide options via tiles */}
              <Link className="text-decoration-none text-dark" to="/eCommerceStore/merchPage">
                <img src="/eCommerce/eComImages/ClickHere.png" className="card-img-top" style={{ width: "200px", height:"200px" }} alt="merch page" />
              </Link>
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

function ECommerceStore() {
  return (
    <div className="container mt-4">
      {/* <ECommerceNavbar /> */}
      <Outlet />
    </div>
  );
}
export default ECommerceStore;

export { ECommerceHome, PaymentPage, ContactInfoPage, MerchPage, TransactionCompletePage };

