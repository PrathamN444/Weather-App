import React from 'react';
import '../App.css';
import image from "../perfectday.png";

const WeatherForm = ({onFormSubmit , setCity}) => {

  return (
    <div className='form'>
        <h2>Weather App</h2> 
        <img src={image} alt="" width="140px" height="140px"/>
        <h3>Find weather of your city</h3>
        <form onSubmit={onFormSubmit} className='form'>
        <input 
            type="text"
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter city name" 
            required 
        />
        <button type="submit">Get Weather</button>
        </form>
    </div>
  );
};

export default WeatherForm;
