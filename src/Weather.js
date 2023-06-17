import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
   //const apiKey = "6655e6104636a644c9bc754d824a695d";
  //const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    //const apiKey = "e82d170b1eef4883t30f30a2e29oab37";
    const apiKey = "17ad6e67aa629189f73b053634668b20";
   // const apiKey = "3499ef150985eccadd080ff408a018df";
    //const apiKey = "76184a71275816c9e0d0b09aa75a7bcf";


    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


       if (weatherData.ready) {
        return (
           
            <div className="Weather">
                 <div className="all">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city.." className="form-control"
                                autoFocus="on"
                            onChange={handleCityChange}/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={ weatherData} />
                    <WeatherForecast coordinates={weatherData.coordinates } />
                </div>
               
      <footer className="footer">
        This project was coded by <a href="https://www.shecodes.io/graduates/73819-ei-shwe-khine" target="_blank" rel="noopener noreferrer">Ei Shwe Khine </a>{''} and is {''}
        <a href='https://github.com/Ei-shwe-khine/weather-react-app' target="_blank" rel="noopener noreferrer">open-sourced on GitHub </a>
       and <a href="https://648497e5d4b405000867f08c--cerulean-syrniki-ad1994.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
     </footer>
                </div>
        );

    } else {
    
        search();
        return "Loading.....";
    }

    
    
}