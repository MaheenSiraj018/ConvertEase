import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Converter from './components/Converter';

// Conversion functions with boundary checks
const metersToFeet = (meters) => {
  if (meters < 0 || meters > 10000) {
    return "Error: Value must be between 0 and 10,000 meters";
  }
  return meters * 3.28084;
};

const kilogramsToPounds = (kilograms) => {
  if (kilograms < 0 || kilograms > 10000) {
    return "Error: Value must be between 0 and 10,000 kilograms";
  }
  return kilograms * 2.20462;
};

const litersToGallons = (liters) => {
  if (liters < 0 || liters > 10000) {
    return "Error: Value must be between 0 and 10,000 liters";
  }
  return liters * 0.264172;
};

const kmhToMph = (kmh) => {
  if (kmh < 0 || kmh > 300) {
    return "Error: Value must be between 0 and 300 km/h";
  }
  return kmh * 0.621371;
};

const celsiusToFahrenheit = (celsius) => {
  if (celsius < -273.15 || celsius > 1000) {
    return "Error: Value must be between -273.15 and 1,000°C";
  }
  return (celsius * 9 / 5) + 32;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>ConvertEase</h1>
        <nav>
          <Link to="/length">Length Conversion</Link>
          <Link to="/weight">Weight Conversion</Link>
          <Link to="/volume">Volume Conversion</Link>
          <Link to="/speed">Speed Conversion</Link>
          <Link to="/temperature">Temperature Conversion</Link>
        </nav>
        <Routes>
          <Route
            path="/length"
            element={
              <Converter
                title="Length Conversion"
                inputLabel="Meters"
                resultLabel="Feet"
                convertFunction={metersToFeet}
              />
            }
          />
          <Route
            path="/weight"
            element={
              <Converter
                title="Weight Conversion"
                inputLabel="Kilograms"
                resultLabel="Pounds"
                convertFunction={kilogramsToPounds}
              />
            }
          />
          <Route
            path="/volume"
            element={
              <Converter
                title="Volume Conversion"
                inputLabel="Liters"
                resultLabel="Gallons"
                convertFunction={litersToGallons}
              />
            }
          />
          <Route
            path="/speed"
            element={
              <Converter
                title="Speed Conversion"
                inputLabel="Km/h"
                resultLabel="Mph"
                convertFunction={kmhToMph}
              />
            }
          />
          <Route
            path="/temperature"
            element={
              <Converter
                title="Temperature Conversion"
                inputLabel="Celsius"
                resultLabel="Fahrenheit"
                convertFunction={celsiusToFahrenheit}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
