import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./AthleteDetails.css"


const AthleteDetails = ({props}) => {
    
    const [athletes, setAthletes] = useState([])
    const {id} = useParams()
  
      useEffect(()=> {
        fetch(`http://localhost:8000/routes/athleteRoutes/${id}`)
        .then((res) => res.json())
        .then((json) => AthleteDetails(json))
        .catch(console.error)
      }, [])
         console.log(AthleteDetails)
         
  return (

    <div className="athlete-details">
    
    <div className="AthleteDetails" key={athletes._id}>
        <h1>{athletes.name}</h1>
   <div>
    <h1>Athlete Details</h1>

    <h2>{athletes.sport}</h2>
    <h2>{athletes.position}</h2>
    <h2>{athletes.height}</h2>
    <h2>{athletes.weight}</h2>
    </div>
  
      
     <img src={athletes.image} alt={athletes.name}/> 
    </div>
 

    </div>
  );

}

export default AthleteDetails;