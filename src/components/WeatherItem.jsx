import React from "react";

const WeatherItem = ({ weatherData }) => {
  const convertTemp = function (temp) {
    return Math.round(temp - 273);
  };

  return (
    <div className="weather-item">
      <h2>Today's Weather</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <p>{weatherData.name}</p>
      <p>{weatherData.weather[0].description}</p>
      <p>Current Temp: {convertTemp(weatherData.main.temp)} C</p>
      <p>Feels Like: {convertTemp(weatherData.main.feels_like)} C</p>
    </div>
  );
};

export default WeatherItem;
