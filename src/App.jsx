// import Navbar from "./Navbar"
// import './App.css'
// import { Footer1, Footer2 } from "./Footer"
// import Logo from './assets/react.svg'

// let App=()=>{

//   //js
//   let myname="sonu"
  
//   return(
//     <div>
      
//       <Navbar/>

//       <h1 id="text">Hello world</h1>
//      {/* <h1 className="text">hello world  */}
//      <img src={Logo} alt="" />
//       {myname}

//     {/*short me import karna(footer1,footer2)  */}
// <Footer1/>
// <Footer2/>

//     </div>
//   )
// }

// export default App

import React from "react";
import Card from "./Card";

function App() {
  return (
    <div className="min-h-screen flex gap-6 justify-center items-center bg-gray-100 p-6">

      <Card
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        title="Mountain View"
        description="Beautiful mountain view with nature vibes."
        buttonText="Explore"
      />

      <Card
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        title="Beach Side"
        description="Relaxing beach with blue water and sand."
        buttonText="Visit"
      />

    </div>
  );
}

export default App;
