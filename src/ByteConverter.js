import React, { useState } from 'react';
import logo from './weel.svg';
import axios from 'axios';
import './App.css';


const units = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Terabytes'];

const ByteConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('Bytes');
  const [outputUnit, setOutputUnit] = useState('Kilobytes');
  const [convertedValue, setConvertedValue] = useState(null);

  const conversionRates = {
    Bytes: 1,
    Kilobytes: 1024,
    Megabytes: 1024 * 1024,
    Gigabytes: 1024 * 1024 * 1024,
    Terabytes: 1024 * 1024 * 1024 * 1024,
  };

  const handleConversion = (e) => {
    e.preventDefault();
    if (inputValue === '' || isNaN(inputValue)) {
      setConvertedValue('Invalid input');
      return;
    }

    const inputInBytes = parseFloat(inputValue) * conversionRates[inputUnit];
    const outputValue = inputInBytes / conversionRates[outputUnit];
    setConvertedValue(outputValue);
  };

  return (
    <div>
      <h2>Byte Converter</h2>
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
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            To:
            <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
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

export default ByteConverter;



