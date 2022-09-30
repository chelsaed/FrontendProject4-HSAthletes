import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'



const EditAthlete = ({ setAthlete, userId }) => {
    let { id } = useParams();
    let navigate = useNavigate();

    const initialState = {
  
        height: '',
        weight: '',
        image: '',
        gradDate: '',
        currentHS: '',
        sport: '',
        postionPlayed: '',
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit =  (e) => {
        console.log("submitting");
        e.preventDefault();
        try {
            let res =  axios.put(`http://localhost:8000/routes/athleteRoutes/${userId}`, formData);
            setFormData(initialState);
            setAthlete(res.data);
            navigate("/editprofile", { replace: true });


        } catch (err) {
            console.log(err.message);
        }
    };

 
    const handleFile = (e) => {
      
        setFormData({ ...formData, [e.target.id]: e.target.files[0] });
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1> Athlete Profile </h1>

            <div>
            <label htmlFor="image">Image URL</label>
               
                <input
                    id="image"
                    name="image"
                    type="text"
                    value={formData.image}
                    onChange={handleChange}
                />
            </div>
            
            <div>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    name="height"
                    type="text"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="weight">Weight</label>
                <input
                    id="weight"
                    name="weight"
                    type="text"
                    value={formData.weight}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="gradDate">Geaduation Date</label>
                <input
                    id="gradDate"
                    name="gradDate"
                    type="text"
                    value={formData.gradDate}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="sport">Sport</label>
                <input
                    id="sport"
                    name="sport"
                    type="text"
                    value={formData.sport}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="positionPlayed">Position Played</label>
                <input
                    id="positionPlayed"
                    name="positionPlayed"
                    type="text"
                    value={formData.postionPlayed}
                    onChange={handleChange}
                />
            </div>

            <div className="button">
                <Link to='/athletegallery'>Submit</Link>
            </div>
        </form>
    );
};

export default EditAthlete;