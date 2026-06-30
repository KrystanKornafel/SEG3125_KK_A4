import './ApplyNow.css'
// import React from 'react';
import { useNavigate } from 'react-router-dom';
 //import FinalPgApply from './FinalPgApply';

//======================== Apply Now Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 2
// Description: This React UI will be used to generate a form for the user to apply for a job at the hair salon. Once the form 
//is complete, the user is then redirected to another page (FinalPgApply.jsx) that tells the user that their application has
//been successfully received.



function ApplyNow() {
  // Reference used for the navigation function: https://www.geeksforgeeks.org/reactjs/reactjs-usenavigate-hook/
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#c473ca' }}>
      {/* First section of the ApplyNow page */}
      <div className="container mt-5">
        <div className="mb-5">
          {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#c473ca', border: '10px solid #215689' }}> */}
            <div>
              {/* Image created by Copilot */}
              <img src="/Logo.png" className="float-start me-3 rounded" style={{ width: "175px" }} alt="logo" />
              <div style={{ backgroundColor: '#4FE5F5'}}><br/><h1>Chique Hairstylez</h1><br/></div>
            </div>  
            {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#f2cdda' }}>
              <p>We will have content coming soon!</p>
            </div> */}
          </div>
        {/* </div> */}
      </div> 

      {/* Process: Create textboxes with their corresponding box to RECEIVE text from user. */}
      {/*Then create a submit button that redirects to the FinalPgApply Page */}

      {/* Modify to create the form */}
      <div className="container mt-5">
        <div className="mb-5">
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {/* Reference for center alignment: https://mdbootstrap.com/docs/react/layout/vertical-alignment/ */}
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#5BE5CE', width: "950px", height: "900px"}}>
              <div style={{ backgroundColor: '#EFEFEF', width: "800px", height: "700px", padding: "50px" }}>
      
                {/* ==========================      FORM!      ================================================================================================ */}

                {/* Reference for taking in form inputs: https://www.w3schools.com/bootstrap/bootstrap_forms_inputs2.asp */}
                <form>
                  {/* Reference for styling: https://www.pluralsight.com/resources/blog/guides/react-inline-styling */}
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>What is your name?</p><br/>
                  <div class="input-group">
                    {/* IF you have time, adjust colour of boxes to: #D9D9D9 */}
                    <br/><input id="name" type="text" class="form-control" name="name" placeholder="First Last"/>
                  </div>
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Phone Number:</p><br/>
                  <div class="input-group">
                    <br/><input id="phone" type="text" class="form-control" name="phone" placeholder="(613)-123-4567"/>
                  </div>
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Email:</p><br/>
                  <div class="input-group">
                    <br/><input id="email" type="email" class="form-control" name="email" placeholder="someone@example.com"/>
                  </div>
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Tell us about yourself:</p><br/>
                  <div class="input-group">
                    <br/><input id="aboutYourself" type="text" class="form-control" name="aboutYourself" placeholder="Tell us about yourself"/>
                  </div>
                </form>

                {/* Reference used to redirect to another page: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Add the submit button here, that will redirect to the FinalPgApply page, (using React Link to route to the page). */}
                {/* Reference used when redirecting to another page using the submit button: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Additional reference for re-routing to another page: https://reactrouter.com/en/main/hooks/use-navigate */}
                <br/><button className="btn btn-primary" onClick={() => navigate('/FinalPgApply', { replace: true })}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Third section of the ApplyNow page, the footer */}
      <div className="container mt-5">
        <div className="mb-5">
            <div>
              <div style={{ backgroundColor: '#F46FF0'}}><br/>
                <p style={{ color: '#000000', fontSize: "20px", fontWeight: 700 }}><br/>Designed by: Krystan Kornafel, a third year Software Engineering student.<br/></p>
                <p style={{ color: '#690AE4', fontSize: "20px", fontWeight: 700 }}><br/>(613)-890-1234, ChiqueHairstylez@gmail.com<br/></p><br/><br/>
              </div>
            </div>  
          </div>
      </div>

    </div>
  );
}

export default ApplyNow;

//export { ApplyNow, FinalPgApply };