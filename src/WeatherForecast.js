import React, { useState,useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );   
     
  } else {
    
   // let apiKey = "6655e6104636a644c9bc754d824a695d";
    //let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    //let apiKey = "e82d170b1eef4883t30f30a2e29oab37";
    let apiKey = "17ad6e67aa629189f73b053634668b20";
   // let apiKey = "3499ef150985eccadd080ff408a018df";
   // let apiKey = "76184a71275816c9e0d0b09aa75a7bcf";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}