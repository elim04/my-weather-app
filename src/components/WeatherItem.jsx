import React from "react";

const WeatherItem = ({ weatherData }) => {
  const convertTemp = function (temp) {
    return Math.round(temp - 273);
  };

  return (
    <div>
      <p>City: {weatherData.name}</p>
      <p>{weatherData.weather[0].description}</p>
      <p>Current Temp:{convertTemp(weatherData.main.temp)} C</p>
      <p>Feels Like:{convertTemp(weatherData.main.feels_like)} C</p>
    </div>
  );
};

export default WeatherItem;
