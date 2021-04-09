import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import WeatherItem from "./components/WeatherItem";
import LocationForm from "./components/LocationForm";

function App() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    setErrorMsg("");
    if (city) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        )
        .then((res) => {
          setWeatherData(res.data);
          console.log("success!", res.data);
        })
        .catch((err) => {
          console.error(err);
          setErrorMsg(
            "Opps, that city doesn't exist or might have been typed wrong!"
          );
        });
    }
  }, [city]);

  const getCityInfo = (formInfo) => {
    setCity(formInfo);
  };

  return (
    <div className="App">
      {weatherData && <WeatherItem weatherData={weatherData} />}
      {!weatherData && (
        <div>Add a city to the form to search for today's weather!</div>
      )}
      {errorMsg && <div>{errorMsg}</div>}
      <LocationForm getCityInfo={getCityInfo} />
    </div>
  );
}

export default App;
