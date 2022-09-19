import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AthletePg.css'
import axios from 'axios';



function AthletesPg() {
    const [ athletes, setAthletes  ] = useState([])
  
      useEffect(() => {
        axios.get('http://localhost:8000/routes/userRoutes/')
        .then( res => res.data)
        .then( athletes => {
          console.log(athletes)
          setAthletes(athletes)})
      }, [])
  
      console.log(athletes)
  
   return (
 
     <section className="container">
         {athletes.map(user =>{
             return(
              <><div className="athlete-image">
                 <img 
                   src={user.athlete.image}
                   alt={user.name} />
               </div><Link to={`/athletedetails/${user._id}`} key={user._id}>
                   <div className="athletepic">

                     <div className="profiles">
                       <h3>{user.name}</h3>
                     </div>
                   </div>
                 </Link></>   
        

             )
         })}
    </section>
  );
}

export default AthletesPg