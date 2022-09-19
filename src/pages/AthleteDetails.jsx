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
    
  //   <div className="AthleteDetails" key={AthleteDetails?._id}>
  //       <h1>{AthleteDetails?.name}</h1>
  //  <div>
  //   <h1>Athlete Details</h1>

  //   <h2>{AthleteDetails?.sport}</h2>
  //   <h2>{AthleteDetails?.position}</h2>
  //   <h2>{AthleteDetails?.height}</h2>
  //   <h2>{AthleteDetails?.weight}</h2>
  //   </div>
  
      
  //   {/* <img src={AthleteDetails?.image} alt={AthleteDetails?.name}/> */}
  //   </div>
  <p> Hello </p>

  )
  };

export default AthleteDetails