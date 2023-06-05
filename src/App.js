import React from "react";
import Weather from "./Weather";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather App</h1>
        <Weather />
        
      <footer>
        This project was coded by <a href="https://www.shecodes.io/graduates/73819-ei-shwe-khine" target='_blank'>Ei Shwe Khine </a>{''} and is {''}
        <a href='https://github.com/Ei-shwe-khine/weather-react-app' target='_blank'>open-sourced on GitHub</a>
      
     </footer>
      </div>
      </div>
  );
}

export default App;
