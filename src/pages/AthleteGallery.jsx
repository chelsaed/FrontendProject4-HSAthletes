import React from 'react'
import AthletesPg from './AthletesPg';




  function AthleteGalley ({athletes}) {
    return (
      <div className="AthleteGallery">
        
          <h1>High School Athletes</h1>
          <AthletesPg athletes={athletes}/>
          
       
          {/* <AthletesPg athletes={athletes}/> */}
        
    

        
      </div>
    );
  } 
      
      
      


export default AthleteGalley