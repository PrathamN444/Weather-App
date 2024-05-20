import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching weather data, Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App"> 
      {city && weatherData ? <WeatherDisplay weatherData={weatherData} city={city} /> : <WeatherForm onFormSubmit={fetchWeatherData} setCity={setCity}/>}
      
      {error && <p>{error}</p>}
      
    </div>
  );
}

export default App;
