//  import { useState, useEffect} from 'react';
import './GameStartPage.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect} from 'react';
// import { Link} from 'react-router-dom';
//import the sub-pages


//======================== Memory Game Page ====================================================================================
// Name: Krystan Kornafel
// Assignment: SEG3125 Assignment 3
// Description: This will be used as the main UI for the memory game site. It will call on subpages such as the GamePage.jsx, DecisionPage.jsx,
// and the ResultsPage.jsx, which display all the required components of each step in the game. Steps include: Select your level, category and 
// contrast type (done from the home page here), then go to the GameStartPage where the actualy images will be displayed and the timer will start.
// Next, once the user makes their selection(s) and hits submit to finalize the page, the user will then be redirected to the DecisionPage where 
// they can decided to continue or not. Once they are done playing the game, they will be directed to the final page UI, which will tell them if 
// if they passed the level or not. It will only look at the current results for the last session of the game to determine if the user passed.
// That means that if the user failed the level the first time, when they redo it the second time, it should only keep their latest score. 
//==============================================================================================================================


// //This is a global array to be used when storing and access all the images that the user clicked.
// let isClickedImgs = [];
// // This will be used to generate a random number for the user. Ex: if the system generates the number "4", it will ask the user
// // to find all the images that have 4 items in it. 
// // let systemNum = 2;

// This function is used to setup the view, based off the parameters that were sent from the MemoryGame.jsx 
function GameSetup (){
      const [timeLeft, setTimeLeft] = useState(30); //Give the user 30s before the images disappear
      // const [hideCards, setHideCards] = useState(false);

      const navigate = useNavigate();
      // {/* To receive the values from the user selections that were sent from MemoryGame.jsx, the reference was: https://reactrouter.com/6.30.4/start/tutorial */}
      // I also used: https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m
      const location = useLocation();
      // const data = location.state;
      //Initialize level, contrast and category if undefined by the location object
      const { level = "easy", contrast = "highContrast", category = "animals" } = location.state || {};

      const [isClickedImages, setIsClickedImages] = useState([]);
      // const [systemNum, setSystemNum] = useState(null);
      // const [numOfImgs, setNumOfImgs] = useState(0);
     
      //Reference for useState to set the value for global variable "systemNum": https://react.dev/reference/react/useState
      // const [randomSysNum, setRandomNum] = useState(null);
      // const [isImgClick = false, setIsClickedImgs] = useState();


      // This is used to keep track of which round the user is on. They can do a max of 2 rounds, since I only got Gemini and Copilot
      // to generate enough images for 2 rounds.
      //const roundNumber = 1;
      
      // Copilot helped me figure out how to reference the parameters for the path
      // const imageSetPath = `/GameImages/${category}/${contrast}/${level}/${contrVal}${}`;
      // for loop while length fill an array of images

      // Copilot helped me figure out how to reference the parameters for the path
      // const imageSetPath = `/GameImages/${category}/${contrast}/${level}`;
      let images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];


      // Reference useed to display images from an array: https://www.geeksforgeeks.org/html/how-to-display-images-from-an-array-in-javascript/
      // if (roundNumber == 1){
      // Print the first set of images
      //  Reference for lists in React: https://www.w3schools.com/react/react_lists.asp
      // Another reference for mapping images using keys and variables: https://medium.com/@dimterion/dynamic-image-import-for-a-react-gallery-component-4104707eda1d
      //Define a variable that will be used to determine how many images to print
      // let imgQuantity;  
      // let sysNum = 2;
      const [systemNum] = useState(() => {
      //  useEffect(() => {  
        let sysNum;
        if (level == "easy"){
          //  imgQuantity = 2;
          // Reference: https://www.w3schools.com/js/js_random.asp
          // Since Math.floor(Math.random() * 4) would give us the range from 0 to 4, we just add a 1 to ensure our range is between 1 and 4
          sysNum = Math.floor(Math.random() * 4) + 1; //Random num between 1-4
        } else if (level == "medium"){
          //  imgQuantity = 4;
          sysNum = Math.floor(Math.random() * 4) + 3; //Random num between 3-6
        } else {
          //  imgQuantity = 6;
          sysNum = Math.floor(Math.random() * 6) + 5; //Random num between 5-10
        }

        // systemNum = sysNum;
        // setSystemNum(sysNum);
        // setNumOfImgs(imgQuantity);
        // }, [level]); 
        return sysNum;
      });
    
      const [numOfImgs] = useState(() => {
        let imgQuantity;
        if (level == "easy"){
          imgQuantity = 2;
          // Reference: https://www.w3schools.com/js/js_random.asp
          // Since Math.floor(Math.random() * 4) would give us the range from 0 to 4, we just add a 1 to ensure our range is between 1 and 4
          // sysNum = Math.floor(Math.random() * 4) + 1; //Random num between 1-4
        } else if (level == "medium"){
          imgQuantity = 4;
          // sysNum = Math.floor(Math.random() * 6) + 3; //Random num between 3-6
        } else {
          imgQuantity = 6;
          // sysNum = Math.floor(Math.random() * 10) + 5; //Random num between 5-10
        }

        // systemNum = sysNum;
        // setSystemNum(sysNum);
        // setNumOfImgs(imgQuantity);
        // }, [level]); 
        return imgQuantity;
      });


      // RetrieveSysNumVal (systemNum);
      
      //Go through all the elements in the array called "images" and set the paths correctly for them
      //Each one should have the path src <img src= '${imageSetPath}/${images[i]}.png'
      //Create an array to store all the images:
      // Copy the paths for each image within the range set by the variable "numOfImgs"
      // This array holds the path to each image and generates each image to be displayed. 
      // Basically stores all the generated images 
      const imageElements = [];
      // Store all the clicked images in the array, and each clicked image has an Id and number of items associated with it
      // The ID is "i", and the number of items for the specific image is "itemNum"
      //reset "clickedImagesRef" array, in case the game had multiple rounds
      // const isClickedImgs = [];

      // Process => Step 1: Generate and store all the images based off their path inside the array "imageElements".
      // Step 2: If the image is clicked, store the id and itemNum for that image for processing later
      for (let i = 0; i < numOfImgs; i++){
          //Add to the array the number of items for the image.
          // Call this function to update the value associated with the image. The image is identified by the ID, which is "i" for the index
          let itemNum = SetItemNumber(`${contrast}`, `${category}`, `${level}`, i);

          let imagesSource;
          // Assign the path of each image to the "imagesSource" array
          if (timeLeft == 0){ // means the timer ran out and the images need to be hidden
            imagesSource = `/game/GameImages/HiddenImage.png`;
          } else {
            //means that the timer is still going, so leave the proper images there
            imagesSource = `/game/GameImages/${category}/${contrast}/${level}/${images[i]}.png`;
          }
          
          // Reference for push: https://www.w3schools.com/jsref/jsref_push.asp 
          // Copilot suggested to add the one line (line 155) below to make it easier to access the elements of the imagesSource array
          // I made some changes to this line (line 155) to meet my requirements.
          // If the image is clicked, "onClick" will be called to push the Id number "i" and the number of items per that image, called "itemNum" to the array called "isClickedImg".
          // imageElements.push(<img key={i} src={imagesSource[i]} className="float-start me-3 rounded d-flex justify-content-center align-items-center" onClick={() => StoreImageRef(`img${i}`, itemNum)} style={{ width: "250px", cursor: 'pointer' }} alt={`img${i}`}/>);
          // imageElements.push(<img key={i} src={imagesSource} className="float-start me-3 rounded d-flex justify-content-center align-items-center" onClick={() => isClickedImgs.push({ id: i, count: itemNum })} style={{ width: "250px", cursor: 'pointer' }} alt={`img${i}`}/>);
          imageElements.push(<img key={i} src={imagesSource} className="float-start rounded d-flex justify-content-center align-items-center" onClick={() =>  setIsClickedImages(prev => [...prev, { id: i, count: itemNum }])} style={{ width: "200px",  maxHeight: "200px", cursor: 'pointer', border: isClickedImages.some(img => img.id === i) ? '5px solid #e326c4' : '3px solid transparent' }} alt={`img${i}`}/>);
      }

      //Check that all the images that the user selected had the same number of items as the system wanted.
      //There are 2 parameters, the array of selected images, and the number of items that the system asked for
      //This function will compare the amount of items for each image in the array to the number the system generate (systemNum, shown in the "GameSetup() function")
      //These 2 values will be compared for each image in the array. If even 1 does not match, the level failed.
      function CheckAllImgsGood (){
        //Retrieve the array of images that were clicked by the user
        //Reference: https://kevin-peery.medium.com/javascript-array-functions-94c59ba21f1e
        console.log(isClickedImages);

        // let sysNum = RetrieveSysNumVal();

        //Logic to process the array of clicked images to ensure all of them have the same number of items as the systemNum 
        //let gamePassed = F; for loop through array, if (img[1].count == systemNum) {set gamePassed = T} else {set gamePassed = F}
        // As the program iterates through the loop, if one of the images matches the sytem number, but the next one doesn't, the value gets reset back to "F"
        let gamePassed = true;
        for (let i = 0; i < isClickedImages.length; i++){
            if (isClickedImages[i].count !== systemNum){
              gamePassed = false;
            } 
        }

        // //After all that, we can now navigate to the Decision page! We need to pass the parameter to it, which says if the user passed or failed the game.
        // //Send to DecisionPage.jsx the value of "gamePassed"
        // const navigate = useNavigate();
        navigate('/memory-game/decision', { replace: true,  state: { gamePassed }}); //MAKE SURE YOU PASS THE T/F parameter SO THAT DecisionPage knows which image to display
      }


      //Timer: Reference: https://stackoverflow.com/questions/61470404/simple-time-counter-in-react
      // function SetTimer(){
      //   const Timer = ({ callQueuedTime }) => {
      //     const [time, setTime] = useState(() => new Date().getTime());
      //     useEffect(() => {
      //       const queuedTime = new Date(callQueuedTime).getTime();
      //       const intervalId = setInterval(function () {
      //         setTime(new Date().getTime() - queuedTime);
      //       }, 1000);
      //       return ()=>{
      //         clearInterval(intervalId);
      //       }
      //     }, [callQueuedTime]);
      //     return <p>Time: {time}</p>;
      //   };

      // // }

      // if (Timer > 2 minutes){
      //   hide images and stop time. Tell user time is up!
      // }

      //This timer was generated by ChatGPT. I did not make this timer!
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
      }, []);


      // function hideImages(){
      //   for (let i = 0; i < numOfImgs; i++){
      //     //Add to the array the number of items for the image.
      //     // Call this function to update the value associated with the image. The image is identified by the ID, which is "i" for the index
      //     let itemNum = SetItemNumber(`${contrast}`, `${category}`, `${level}`, i);

      //     // Assign the path of each image to the "imagesSource" array
      //     let imagesSource = `/game/GameImages/HiddenImage.png`;
          
      //     // Reference for push: https://www.w3schools.com/jsref/jsref_push.asp 
      //     // Copilot suggested to add the one line (line 84) below to make it easier to access the elements of the imagesSource array
      //     // I made some changes to this line (line 84) to meet my requirements.
      //     // If the image is clicked, "onClick" will be called to push the Id number "i" and the number of items per that image, called "itemNum" to the array called "isClickedImg".
      //     // imageElements.push(<img key={i} src={imagesSource[i]} className="float-start me-3 rounded d-flex justify-content-center align-items-center" onClick={() => StoreImageRef(`img${i}`, itemNum)} style={{ width: "250px", cursor: 'pointer' }} alt={`img${i}`}/>);
      //     // imageElements.push(<img key={i} src={imagesSource} className="float-start me-3 rounded d-flex justify-content-center align-items-center" onClick={() => isClickedImgs.push({ id: i, count: itemNum })} style={{ width: "250px", cursor: 'pointer' }} alt={`img${i}`}/>);
      //     <img key={i} src={imagesSource} className="float-start me-3 rounded d-flex justify-content-center align-items-center" onClick={() =>  setIsClickedImages(prev => [...prev, { id: i, count: itemNum }])} style={{ width: "250px", cursor: 'pointer' }} alt={`img${i}`}/>
      //   }
      // }

      // Once timer runs out, hide all the images
      // useEffect(() => {
      //   if (timeLeft === 0) {
      //     // hideImages();
      //     setHideCards(true);
      //   }
      // }, [timeLeft]);

      //next step is passing the array of clicked images to another function for processing. 
      // Give it the value the system chose, and give it the array of clicked images.
      //Then determine if ALL the images that were clicked have the right number of items. 
      //item nums MUST equal systemNum (systemNum is the random number the system generated).
      
      // Return the images to be displayed in the UI to the user.
      return (
         <div className = "d-flex flex-column justify-content-center align-items-center text-center">
          <h2 style={{color: '#3d0454', textShadow: '2px 3px 10px #c36ed6', align: 'center'}}>Select all the images that have {systemNum} items</h2>
          <h6>Note! If none of the images have {systemNum} items, just hit submit!</h6>
          {/* This is where the image grid should go */}
          {/* // The next 3 lines (lines 187-190) were suggested by Copilot. Basically everything in the <section> tag */}
          <section className="m-9 grid grid-cols-2 justify-items-center align-items-center gap-3">
            {imageElements}
          </section>
          {/* The timer needs to be called, and all the images need to become hidden */}
          <br/><p>The time used is: {timeLeft}</p>
          {/* Use the CheckAllItems function to verify the user selected the correct images. Return true or false, depending on whether they passed or failed */}
          {/* This is the last step for this UI before going to the DecisionPage.jsx */}
          <br/><button className="btn btn-primary d-flex justify-content-center align-items-center" onClick={() => CheckAllImgsGood()}>Submit</button>              
                  
          {/* // //After all that, we can now navigate to the Decision page! We need to pass the parameter to it, which says if the user passed or failed the game.
          // //Send to DecisionPage.jsx the value of "gamePassed"
          // const navigate = useNavigate();
          // Once everything is done, go to the next page: DecisionPage.jsx
          //  navigate('/memory-game/decision', { replace: true,  state: { gamePassed }} //MAKE SURE YOU PASS THE T/F parameter SO THAT DecisionPage knows which image to display */}
      </div>
      );
      
    
}


// function RetrieveSysNumVal (value){
//   return (value);
// }


//This function sets the number of items per image, depending on what I counted. So for each image, I just set the value to be whatever I counted.
// Reference for passing parameters: https://www.w3schools.com/js/js_function_parameters.asp
function SetItemNumber(contrast, category, level, idVal){
  // `/game/GameImages/${category}/${contrast}/${level}/${images[i]}.png`
  // Create a lookup table to make it easy to find the number of images for the specified image
  // Reference for the lookup table: https://github.com/Chalarangelo/30-seconds-of-code/blob/master/content/snippets/js/s/get-nested-object-value.md
  // Note that we have 2 types of contrast for each image. 
  const ImgItemNumVals = {
    highContrast: {
      animals: {
        easy: [3, 4],
        medium: [5, 5, 5, 6],
        hard: [5, 6, 6, 11, 5, 5]
      },
      boats:{
        easy: [2, 2],
        medium: [3, 6, 3, 16],
        hard: [6, 8, 7, 8, 8, 9]
      }
    },
    lowContrast: {
      animals: {
        easy: [3, 3],
        medium: [6, 7, 4, 3],
        hard: [7, 6, 9, 7, 8, 8]
      },
      boats:{
        easy: [2, 4],
        medium: [3, 6, 3, 5],
        hard: [5, 6, 5, 10, 5, 10]
      }
    } 
  }

  //To access the elements in the ImgItemNumVals lookup table, I used reference: https://medium.com/@hrony7801/the-difference-between-dot-notation-vs-bracket-notation-e17fec97f6f1
  let countedItems = ImgItemNumVals[contrast][category][level][idVal];
  // Return the value of the image, aka number of items for that specific image using a lookup table
  return (countedItems);
}



// I got Copilot and Gemini to create all the images. I only got them to create 2 sets of images, which will allow the user to play
// 2 games before they will have to return to the main menu.
// function firstGame (){
//   //use the first set of images for the UI (Ex: level: Easy would use src = /img1 and src = /img2)
//     <div>
//       <img src="/game/GameImages/GameLogo.png" className="float-start me-3 rounded" style={{ width: "140px" }} alt="logo" />
//     </div>
// }


// function secondGame (){
//   //use the second set of images for the UI (Ex: level: Easy would use src = /img3 and src = /img4)

// }



function GameStartPage() {
  //  const navigate = useNavigate();
    return (
    //Reference used for background colour: https://www.w3schools.com/cssref/pr_background-color.php
    <div style={{ backgroundColor: '#B1E0EE' }}>
      {/* First section of the Home page */}
      <div className="container mt-5">
        <div className="mb-5">
          {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#c473ca', border: '10px solid #215689' }}> */}
            <div>
              {/* Image generated by Copilot */}
              <img src="/game/GameImages/GameLogo.png" className="float-start me-3 rounded" style={{ width: "140px" }} alt="logo" />
              {/* Reference for textShadow: https://www.w3schools.com/cssref/css3_pr_text-shadow.php */}
              <div style={{ backgroundColor: '#4FE5F5'}}><br/><h1 style={{ color: '#1B0C7A', textShadow: '2px 5px 8px #c36ed6', align: 'center'}}>NumImajez</h1><br/></div>
            </div>  
            {/* <div className="border rounded p-3 mb-4" style={{ backgroundColor: '#f2cdda' }}>
              <p>We will have content coming soon!</p>
            </div> */}
          </div>
        {/* </div> */}
      </div> 

      {/* Third section of the Home page */}
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div style={{ display: "flex", gap: "2px"}}>
          <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#BEC7EE', width: "700px", height: "800px"}}><br/>
              <div style={{ backgroundColor: '#DBEDED', width: "550px", height: "700px"}}><br/>
                {/* This is where the image grid should go */}
                {/* call the gameSetup() function to set the game up for whatever settings were configured by the user on the previous page (MemoryGame.jsx)*/}
                <GameSetup />
                {/* Reference used to redirect to another page: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Add the submit button here, that will redirect to the FinalPgAppointment page, (using React Link to route to the page). */}
                {/* Reference used when redirecting to another page using the submit button: https://www.geeksforgeeks.org/reactjs/how-to-redirect-to-another-page-in-reactjs/ */}
                {/* Additional reference for re-routing to another page: https://reactrouter.com/en/main/hooks/use-navigate */}
                {/* <button className="btn btn-primary d-flex justify-content-center align-items-center" onClick={() => navigate('/memory-game/decision', { replace: true })}>Submit</button>               */}
                {/* button should first call on the function CheckAllImgsGood() before redirecting to other page. */}
                {/* <button className="btn btn-primary d-flex justify-content-center align-items-center" onClick={() => CheckAllImgsGood()}>Submit</button>               */}
              </div>
          </div>
        </div>
      </div> 

      {/* Third section of the Home page, the footer */}
      <div className="container mt-5">
        <div className="mb-5">
            <div>
              {/* See if you can adjust the width to fit the screen */}
              <div style={{ backgroundColor: '#6FD5F4', width: "950px"}}><br/>
                <p style={{ color: '#000000', fontSize: "20px", fontWeight: 700 }}>Designed by: Krystan Kornafel, a third year Software Engineering student.<br/><br /></p>
              </div>
            </div>  
          </div>
      </div>

    </div>

  );
}

export default GameStartPage;

// export { HomePage, GamePage, DecisionPage, ResultsPage};

