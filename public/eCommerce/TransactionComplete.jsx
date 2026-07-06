// Diplay the message to let the user know that their payment has been processed and their order has been completed. This will be the last view of the website.
//import React from 'react';
//import { Link, Outlet } from 'react-router-dom';
//Put a route to the services page
import './TransactionComplete.css'
import { Link } from 'react-router-dom';


//======================== Transaction Complete Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 4
// Description: This page tells the user that their purchase is complete. 
//Layout -> Message: "Transaction complete!", show a green checkmark and have a button to go back to the home page.


function TransactionComplete() {
  return (
    <>
    <Link to="/eCommerceStore" className="btn btn-primary" style={{ marginLeft: 'auto' }}>
      Return to Home Page
    </Link>
    {/* //Reference used for background colour: https://www.w3schools.com/cssref/pr_background-color.php */}
    <div style={{ backgroundColor: '#e6ce44' }}>
      {/* First section of the About page */}
      <div className="container mt-5">
        <div className="mb-5 d-flex flex-column align-items-center text-center">
          <img src="/eCommerce/eComImages/transactionComplete.png" className="rounded" style={{ width: '300px' }} alt="transaction complete" />
          <div className="border rounded p-3 mb-4 mt-4" style={{ backgroundColor: '#e2e888', border: '10px solid #215689', width: '100%', maxWidth: '600px' }}>
            <h1>Transaction Complete!</h1>
          </div>
          <h2>Please fill out a quick survey before you go! <br/>We would love to hear from you! :)</h2>
          <Link to="/eCommerceStore/Survey" className="btn btn-primary">
            Continue to Survey
          </Link>
        </div>
      </div>

    {/* Third section of the Home page, the footer */}
    <div className="mt-5" style={{ width: '100vw', height: '100px', marginLeft: 'calc(50% - 50vw)', backgroundColor: '#F46FF0' }}>
      <br/><p style={{ color: '#000000', fontSize: '20px', fontWeight: 700, margin: 0, padding: '1rem 1.5rem' }}>
        Designed by: Krystan Kornafel, a third year Software Engineering student.
      </p>
    </div>
    </div>
    </>
  );
}

export default TransactionComplete;
