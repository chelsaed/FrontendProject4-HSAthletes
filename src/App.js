import React from 'react';
//import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import AthleteGallery from './pages/AthleteGallery';
import Athletedetails from './pages/AthleteDetails';
import LoginPage from './pages/LoginPage';
import userService from './utils/userService';
import { useState, useEffect } from 'react'
import SignupForm from './pages/SignupPage';
import AthleteProfilePage from './pages/AthletesPg';  
import EditAthleteProfilePage from './pages/EditAthlete';
import axios from 'axios';



// let user =  axios.get(`http://localhost:8000/routes/athleteRoutes/6327d0c3327a564e97e5c280`)
// .then((res) => {
//   console.log (res)})




async function App() {
  let user = await userService.getUser1();
  console.log(user)
  let userId = user._id;
  console.log(user);
  const  [state, setState] = useState({});
  
  let handleLogout = () => {
    userService.logout();
    setState({ user: null });
  }

  let handleSignupOrLogin = () => {
    setState(userService.getUser());
  }

  return (
    <div className="App">
      
        <h1>
          Welcome to High School Athletes
          
      </h1>

      <p>This is a website used for High School recuiters to get infomation about current high school players seeking college recruitment. These high school athletes show passion and skill in their sport. Please browser through the athlete profiles to learn more about what these high school athletes have to offer.  </p>
   
      
      <Link to={'/athletegallery'}>Athlete Gallery</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'/signup'}>Athlete Sign Up</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'/login'}>Athlete Login</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'/editprofile/:id'}>EditAthleteProfilePage</Link>
      &nbsp;&nbsp;&nbsp;
        <Routes>
          
          <Route path='/athletegallery' element={<AthleteGallery/>} />
          <Route path="/athletedetails/:id" element={ <Athletedetails/>}/>
          <Route path='/login' element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} setState={setState}/>} />
          <Route path='/:id' element={<AthleteProfilePage/>}/>
          <Route path='/editprofile/:id' element={<EditAthleteProfilePage userId={userId}/>}/>
          <Route path='/signup' element={<SignupForm handleSignupOrLogin={handleSignupOrLogin}/>}/>    
          <Route path= '/logout' element={<LoginPage handleLogout={handleLogout}/>}/>


         
        </Routes>

    </div>
  );
}
export default App;