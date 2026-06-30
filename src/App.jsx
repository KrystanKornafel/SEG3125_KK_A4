import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//import { useParams } from 'react-router'; //I think this is for inputs from user
//import { Routes, Route, Link } from "react-router-dom";
import './App.css'
//import Hairdresser from '../public/Hairdresser';
import Hairdresser, { Home as HairdresserHome, About, ServicesPage, ApplyNow, FinalPgApply, BookAppointment, FinalPgAppointment, ContactUs } from '../public/Hairdresser'
//import Hairdresser, { Home as HairdresserHome, About as HairdresserAbout, ApplyNow as HairdresserApplyNow, BookAppointment as HairdresserBookAppointment, ContactUs as HairdresserContactUs } from '../public/Hairdresser';
import MemoryGame, {GameHome, GameStartPage, DecisionPage, ResultsPage} from '../public/MemoryGame';


//======================== Main UI -> Portfolio Page ===================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 3
// Description: This is the main React page that will be used to display all the required information. There are 4 cards that can be clicked on. Each one will redirect the user to the specified page.


//The next 5 functions are for the main React UI page
function Home()  {
  return (
     <div className="container mt-5">
            <div className="mb-5">
              {/* Colour codes can be found from here: https://www.w3schools.com/html/html_colors_hex.asp */}
              {/* Customization tutorial I used can be found here: https://stackoverflow.com/questions/62917079/react-bootstrap-rounded-corners-for-navbar */}
              <div className="border rounded p-3 mb-4"style={{ backgroundColor: "#C8B6FF", border: "1px solid #334155" }}>
                <h1>Welcome to my website!</h1>
              </div>
            <div className="border rounded p-3 mb-4"style={{ backgroundColor: "#C8B6FF", border: "1px solid #334155" }}>
              <h3>Krystan Kornafel</h3>
              <img src="/Me.jpeg"alt="me" className="float-start me-3 rounded" style={{ width: "150px" }}/>
              <p>I am a third year Software Engineering student. I like hiking, music, adventures and logic puzzles. I have a bit of programming experience in the area of web development, however, it has been a few years since my last project, so I need to refresh my skills. I am currently taking a design course to learn various design elements, and by the end of the semester, I hope to be proficient in React. My workflow consists of understanding the requirements, creating a list of to-dos, creating a general layout of the project as I am more visual, and then implementing what I designed.</p>   
              <h3><br />Please see a few links below for reference:</h3>
            {/*Put the links here*/}
              <a href="https://www.nngroup.com/" target="_blank">The NN/g website</a>
              <br />
              <a href="https://www.w3schools.com/REACT/react_router.asp" target="_blank">React Router Tutorial for Bootstrap Cards I used</a>
              <br />
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">Bootstrap+React Tutorial I used</a>
            </div>
          </div>
          <div className="row g-4">
            {/*put images here*/}
            {/*For reference, I used this link to learn more about cards: https://getbootstrap.com/docs/4.0/components/card/*/}
            {/*I also used the following link to learn how to use Routers: https://www.w3schools.com/REACT/react_router.asp*/}
            {/*This first image came from: https://www.magnific.com/premium-ai-image/hairdresser-beauty-salon-barber-shop-female-male-men-women-modern-vintage-retro-illustration-photo_341728630.htm*/}
              <div className="card" style={{ width: "18rem" }}>
                <Link className="text-decoration-none text-dark" to="/hairdresser">
                <img src="/Hairdresser.png" className="card-img-top" alt="hairdresser" />
                <div className="card-body">
                  <h5 className="card-title">Hairdresser</h5>
                  <p className="card-text">Here at our salon, we work hard to ensure all our customers get the best service!</p>
                </div>
                </Link>
              </div>

            {/*This second image came from: https://www.magnific.com/free-photos-vectors/memory-game-remembering*/}
            <div className="card" style={{ width: "18rem" }}>
              <Link className="text-decoration-none text-dark" to="/memory-game">
                <img src="/MemoryGame.png" className="card-img-top" alt="memory game" />
                <div className="card-body">
                  <h5 className="card-title">Memory Game</h5>
                  <p className="card-text">Test your memory with a little fun challenge! Click here to try for yourself!</p>
                </div>
              </Link>
            </div>

            {/* This third image reference: https://thevarsity.ca/2015/03/16/you-can-probably-find-it-here/ */}
            <div className="card" style={{ width: "18rem" }}>
              <Link className="text-decoration-none text-dark" to="/eCommerceStore">
                <img src="/ECommerceStore.png" className="card-img-top" alt="e-commerce store" />
                <div className="card-body">
                  <h5 className="card-title">E-commerce Store</h5>
                  <p className="card-text">We specialize in vintage clothing and accessories! Come check us out!</p>
                </div>
              </Link>
            </div>

            {/*This fourth image came from: https://medium.com/data-science/why-data-analytics-is-gaining-hype-in-the-21st-century-b7b1ca289f09*/}
            <div className="card" style={{ width: "18rem" }}>
              <Link className="text-decoration-none text-dark" to="/analytics">
                <img src="/Analytics.png" className="card-img-top" alt="analytics" />
                <div className="card-body">
                  <h5 className="card-title">Analytics</h5>
                  <p className="card-text">Check out our latest analytics!</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
  );
}


///======================= Other Main UI Pages ===================================================

function Analytics() { 
    return <div className="container mt-4"><h1>Analytics</h1></div>;
 }

function ECommerceStore() { 
  return <div className="container mt-4"><h1>E-Commerce Store</h1></div>;
 }

// function MemoryGame() { 
//    return <div className="container mt-4"><h1>Memory Game</h1></div>;
//  }

 //May need to comment out, as Navbar only needed for Hairdresser page
function Navbar() {
  return (
    //Reference used for this: https://www.sitepoint.com/creating-a-navbar-in-react/
    //<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    // <div className="navbar-center">
    <div className="container-fluid"style={{ backgroundColor: "#F46FF0", border: "1px solid #334155" }}> 
      <div className="navbar">
        {/* Reference used for spacing (aka "me-3, me-auto"): https://mdbootstrap.com/docs/react/utilities/spacing/ */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
        {/* <div className="container-fluid"> */}
          {/* <span className="navbar-brand">Assign2</span> */}
          {/* <div className="navbar-nav"> */}
            <li className="nav-item me-3"><Link className="nav-link" to="/">My Portfolio</Link></li>
            {/* <Link className="nav-link text-white" to="/about">About</Link> */}
            <li className="nav-item me-3"><Link className="nav-link" to="/hairdresser">Hairdresser</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/analytics">Analytics</Link></li>
            <li className="nav-item me-3"><Link className="nav-link" to="/e-commerce">E-Commerce</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/memory-game">Memory Game</Link></li>
          {/* </div> */}
        {/* </div> */}
        </ul>
      </div>
    </div>
  );
}


function App() {
  //const [count, setCount] = useState(0)
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />


            {/* References for the Hairdresser page and subpages */}
            <Route path="/hairdresser" element={<Hairdresser />}>
              <Route index element={<HairdresserHome />} />
              <Route path="about" element={<About />} />
              <Route path="applyNow" element={<ApplyNow />} /> 
              <Route path="bookAppointment" element={<BookAppointment />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="ServicesPage" element={<ServicesPage />} />
              {/* <Route path="FinalPgAppointment" element={<FinalPgAppointment />} />
              <Route path="FinalPgApply" element={<FinalPgApply />} /> */}
            </Route>
            {/* References added to the subpages connected to the ApplyNow and BookAppointment forms */}
            <Route path="/FinalPgAppointment" element={<FinalPgAppointment />} />
            <Route path="/FinalPgApply" element={<FinalPgApply />} />


            {/* The remainder of the card links are referenced here */}
            <Route path="/analytics" element={<Analytics />} />     
            <Route path="/e-commerce" element={<ECommerceStore />} />   


                {/* Below is all the routing for the memory game */}
            <Route path="/memory-game" element={<MemoryGame />} >
                {/* Put all the routes here for the menu bar of the memory game, if and as needed */}
                <Route index element={<GameHome />} />
                <Route path="start" element={<GameStartPage />} />
                <Route path="decision" element={<DecisionPage />} /> 
                <Route path="results" element={<ResultsPage/>} />
            </Route> 

          </Routes>
    </BrowserRouter>
  );
}

export default App;
