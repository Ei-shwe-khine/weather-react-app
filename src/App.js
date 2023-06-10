import React from "react";
import Weather from "./Weather";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
      
        <Weather defaultCity="Thailand"/>
      
      </div>
      </div>
  );
}

export default App;
