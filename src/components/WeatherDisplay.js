import React from 'react';
import "../App.css";

const WeatherDisplay = ({ weatherData, city }) => {

  if (!weatherData) {
    return <div>Find weather of your city</div>;
  }

  const temp = Math.round(weatherData?.main?.temp - 273.12);
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <>
      <h2>{ `Weather in ${weatherData?.name}, ${weatherData?.sys?.country}` }</h2>

      <p className='temperature' > <span>{temp}°C</span> | {weatherData?.weather?.[0].description} </p>

      <h3>{date.getHours()}:{date.getMinutes()} | {days[date.getDay()]}</h3>

      <div className='info'>
        <p>Humidity: {weatherData?.main?.humidity} %</p>
        <p>Pressure: {weatherData?.main?.pressure} hPa</p>
        <p>Wind: {weatherData?.wind?.speed} m/s</p>
      </div>

      
    </>
  );
};

export default WeatherDisplay;
