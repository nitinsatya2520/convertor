import React, { useState } from 'react';
import axios from 'axios';
import logo from './weel.svg';
import './App.css';
import './App.css';
const TemperatureConverter = () => {
    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('Celsius');
    const [toUnit, setToUnit] = useState('Fahrenheit');
    const [result, setResult] = useState(null);

    const convert = async () => {
        const res = await axios.post('http://localhost:5000/api/temp-converter', {
            value,
            fromUnit,
            toUnit
        });
        setResult(res.data.convertedValue);
    };

    return (
        <div>
            <h2>Temperature Converter</h2>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} />
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
            </select>
            <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
                <option value="Celsius">Celsius</option>
                <option value="Fahrenheit">Fahrenheit</option>
            </select>
            <button onClick={convert}>Convert</button>
            {result && <div>Result: {result}</div>}

            <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
  </header>
        </div>
    );
};

export default TemperatureConverter;
