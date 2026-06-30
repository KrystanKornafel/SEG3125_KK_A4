import './BookAppointment.css'
import { useNavigate } from 'react-router-dom';
//import Form from 'react-bootstrap/Form';
//For the calendar
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

//======================== Book Appointment Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 2
// Description: This React UI will be used to generate a form that will allow users to book an appointment at the hair salon.
//They are to select a time and date, a service, and enter in their contact details so that a specialist can contact them to 
//confirm the appointment. Once the form is submitted (indicated by the user click in the submit button), the user will then 
//be redirected to another page (FinalPgAppointment.jsx) which will indicate to the user that their appointment request has
//been received successfully, and that someone will contact them soon to confirm the appointment. 


// Reference for the following function "DatePicker": https://stackoverflow.com/questions/37560863/react-datepicker-bootstrap-up-to-date
function DatePicker() {
  return (
    <div className="mb-3">
      <label htmlFor="dateInput" className="form-label">Choose Date</label>
      <input type="date" className="form-control" id="dateInput" />
    </div>
  );
}




function BookAppointment() {
  // Reference used for the navigation function: https://www.geeksforgeeks.org/reactjs/reactjs-usenavigate-hook/
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#c473ca' }}>
      {/* First section of the ApplyNow page */}
      <div className="container mt-5">
        <div className="mb-5">
          {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#c473ca', border: '10px solid #215689' }}> */}
            <div>
              <img src="/Logo.png" className="float-start me-3 rounded" style={{ width: "175px" }} alt="logo" />
              <div style={{ backgroundColor: '#4FE5F5'}}><br/><h1>Chique Hairstylez</h1><br/></div>
            </div>  
            {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#f2cdda' }}>
              <p>We will have content coming soon!</p>
            </div> */}
          </div>
        {/* </div> */}
      </div> 

      {/* Process: Create textboxes with their corresponding box to RECEIVE text from user.*/} 
      {/* Create an input for the selection of the service type */}
      {/* Create an input for the selection of the date and time */}
      {/* Then create a submit button that redirects to the FinalPgAppointment Page */}

      {/* Modify to create the form */}
      <div className="container mt-5">
        <div className="mb-5">
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            <div style={{ backgroundColor: '#5BE5CE', width: "1200px", height: "800px"}}><br/>
              {/* Reference for styling: https://www.pluralsight.com/resources/blog/guides/react-inline-styling */}
              <p style={{ color: '#8F0CB0', fontSize: "20px", fontWeight: 700 }}><br/>Book Appointment!</p><br/>

              {/* ================= FORM HERE ============================================================================ */}

              {/* Reference for taking in form inputs: https://www.w3schools.com/bootstrap/bootstrap_forms_inputs2.asp */}
              <form>
                  {/* Reference for styling: https://www.pluralsight.com/resources/blog/guides/react-inline-styling */}
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Enter your name</p><br/>
                  <div class="input-group" style={{width: '400px' }}>
                    {/* IF you have time, adjust colour of boxes to: #D9D9D9 */}
                    <br/><input id="name" type="text" class="form-control" name="name" placeholder="First Last"/>
                  </div>
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Enter your phone number</p><br/>
                  <div class="input-group" style={{width: '400px' }}>
                    {/* IF you have time, adjust colour of boxes to: #D9D9D9 */}
                    <br/><input id="phone" type="text" class="form-control" name="phone" placeholder="(613)-123-4567"/>
                  </div>
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Enter the service type</p><br/>
                  {/* For the dropdown menu, here is the reference I used: https://www.geeksforgeeks.org/reactjs/react-bootstrap-dropdowns-menu-dividers/ */}
                  {/* Dropdown, additional reference: https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp */}
                  {/* Reference for select: https://react.dev/reference/react-dom/components/select */}
                  {/* These "options" can be used as a parameter later to pass to the system to actually add the correct type of service to the database, under that user's name. */}
                  <div style={{ display: "flex", alignItems: "left", gap: "20px" }}>
                    <select style={{ textAlign: 'left', width: '300px' }}>
                      <option value="doNothing">Select</option>
                      <option value="retroHairStyle">Retro Hairstyle</option>
                      <option value="hairColouring">Hair Colouring</option>
                      <option value="haircut">Haircut</option>
                      <option value="perm">Perm</option>
                    </select>
                  </div>
                  <br/><p style={{ color: '#000000', fontSize: "20px", fontWeight: 700, textAlign: "left" }}>Enter the preferred appointment date</p><br/>
                  {/* For the calendar component, I used this as a reference: https://demo.mobiscroll.com/react/calendar/week-select */}
                     {/* <DatePicker
                          controls={['calendar', 'timegrid']}
                          touchUi={true}
                      /> */}
                      {/* Reference used to make this calendar: https://coreui.io/bootstrap/docs/forms/date-picker/ */}
                  {/* <div class="row">
                    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
                      <div data-coreui-locale="en-US" data-coreui-toggle="date-picker"></div>
                    </div>
                    <div class="col-sm-6 col-lg-5">
                      <div data-coreui-date="2023/03/15" data-coreui-locale="en-US" data-coreui-toggle="date-picker"></div>
                    </div>
                  </div> */}
                  <DatePicker />
                                              
              </form>


              {/* Reference used to redirect to another page: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Add the submit button here, that will redirect to the FinalPgAppointment page, (using React Link to route to the page). */}
                {/* Reference used when redirecting to another page using the submit button: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Additional reference for re-routing to another page: https://reactrouter.com/en/main/hooks/use-navigate */}
                <br/><button className="btn btn-primary" onClick={() => navigate('/FinalPgAppointment', { replace: true })}>Submit</button>
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

export default BookAppointment;
