// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import About from "./App/About/About";
// import Contact from "./App/Contact/Contact";
// import Home from "./App/Home/Home";
// import Jobs from "./App/Jobs/Jobs";

// const App = () => {
//   return (
//     <Routes>
//       <Route exact path="/" element={<Home />} />
//       <Route exact path="/about" element={<About />} />
//       <Route exact path="/contact" element={<Contact />} />
//       <Route exact path="/jobs" element={<Jobs />} />
//     </Routes>
//   );
// };

// export default App;


// import { Route, HashRouter, NavLink, Routes } from "react-router-dom";
// import './App.css';
// import { Home } from './components/Home';
// import { AboutUs } from './components/AboutUs';
// import { ContactUs } from './components/ContactUs';
// import { Job } from './components/Job';

// function App() {
//   return (
//     <div className="App">
      
//       <HashRouter>
//         <div>
//           <div>
//             <ul className="header">
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="./AboutUs">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/Jobs">Jobs</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/ContactUs">Contact</NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="content">
//             <Routes>
//               <Route exact path="/" element={<Home />}></Route>
//               <Route exact path="/AboutUs" element={<AboutUs />}></Route>
//               <Route exact path="/Jobs" element={<Job />}></Route>
//               <Route exact path="/ContactUs" element={<ContactUs />}></Route>
//             </Routes>
//           </div>
//         </div>
//       </HashRouter>

//       {/* <Home/> */}
      
//     </div>
//   );
// }

// export default App;


// import { Route, HashRouter, NavLink, Routes } from "react-router-dom";
// import './App.css';
// import { Home } from './Components/Home';
// import { AboutUs } from './Components/AboutUs';
// import { ContactUs } from './Components/ContactUs';
// import { Job } from './Components/Job';

// function App() {
//   return (
//     <div className="App">
      
//       <HashRouter>
//         <div>
//           <div>
//             <ul className="header">
//               <li>
//                 <NavLink to="/">Home</NavLink>
//               </li>
//               <li>
//                 <NavLink to="./AboutUs">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/Jobs">Jobs</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/ContactUs">Contact</NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="content">
//             <Routes>
//               <Route exact path="/" element={<Home />}></Route>
//               <Route exact path="/AboutUs" element={<AboutUs />}></Route>
//               <Route exact path="/Jobs" element={<Job />}></Route>
//               <Route exact path="/ContactUs" element={<ContactUs />}></Route>
//             </Routes>
//           </div>
//         </div>
//       </HashRouter>

//       {/* <Home/> */}
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
// import  AboutUs  from './pages/About';
import  AboutUs  from './Components/AboutUs';
// import {ContactUs} from './pages/ContactUs';



import  {Home}  from './Components/Home';
// import  {AboutUs}  from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import { Job } from './Components/Job';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
       <>
       <LoginPage handle={handleLogin} />
       </>
    // console.log("please work")
  );
}

export default App;
