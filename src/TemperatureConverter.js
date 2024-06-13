import React, { useState } from 'react';
import axios from 'axios';
import logo from './weel.svg';
import './App.css';
import './App.css';
const TemperatureConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('Celsius');
    const [outputUnit, setOutputUnit] = useState('Fahrenheit');
    const [convertedValue, setConvertedValue] = useState(null);
  
    const handleConversion = (e) => {
      e.preventDefault();
      if (inputValue === '' || isNaN(inputValue)) {
        setConvertedValue('Invalid input');
        return;
      }
  
      const value = parseFloat(inputValue);
      let result;
  
      if (inputUnit === 'Celsius') {
        if (outputUnit === 'Fahrenheit') {
          result = (value * 9/5) + 32;
        } else if (outputUnit === 'Kelvin') {
          result = value + 273.15;
        } else {
          result = value;
        }
      } else if (inputUnit === 'Fahrenheit') {
        if (outputUnit === 'Celsius') {
          result = (value - 32) * 5/9;
        } else if (outputUnit === 'Kelvin') {
          result = ((value - 32) * 5/9) + 273.15;
        } else {
          result = value;
        }
      } else if (inputUnit === 'Kelvin') {
        if (outputUnit === 'Celsius') {
          result = value - 273.15;
        } else if (outputUnit === 'Fahrenheit') {
          result = ((value - 273.15) * 9/5) + 32;
        } else {
          result = value;
        }
      }
  
      setConvertedValue(result);
    };
  
    return (
      <div>
        <h2>Temperature Converter</h2>
        <form onSubmit={handleConversion}>
          <div>
            <label>
              Value:
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              From:
              <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              To:
              <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
                <option value="Kelvin">Kelvin</option>
              </select>
            </label>
          </div>
          <button type="submit">Convert</button>
        </form>
        {convertedValue !== null && (
          <div>
            <h3>Converted Value:</h3>
            <p>
              {inputValue} {inputUnit} = {convertedValue} {outputUnit}
            </p>
          </div>
        )}

<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
  </header> 
      </div>
    );
  };
  
  export default TemperatureConverter;
           
       
