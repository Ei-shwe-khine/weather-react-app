import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });

    }

    function serach() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        serach();
        //search for a city
    }

    function handleCityChange(event) {
        setCity(event.target.value);

    }    if (weatherData.ready) {
        return (
            <div className="Weather">
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
               
            </div>
        );

    } else {
    //const apiKey = "6655e6104636a644c9bc754d824a695d";
    
        serach();
        return "Loading.....";
    }

    
    
}