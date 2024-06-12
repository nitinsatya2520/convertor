import React, { useState } from 'react';
import logo from './weel.svg';
import './App.css';
const SpeedConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('meters per second');
    const [outputUnit, setOutputUnit] = useState('kilometers per hour');
    const [result, setResult] = useState('');

    const unitFactors = {
        'meters per second': 1,
        'kilometers per hour': 3.6,
        'miles per hour': 2.23694,
        'feet per second': 3.28084,
        'knots': 1.94384,
    };

    const handleConvert = () => {
        const inputFactor = unitFactors[inputUnit];
        const outputFactor = unitFactors[outputUnit];
        const convertedValue = (inputValue * inputFactor) / outputFactor;
        setResult(convertedValue);
    };

    return (
        <div>
            <h2>Speed Converter</h2>
            <div>
                <input 
                    type="number" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Enter value"
                />
                <select value={inputUnit} onChange={(e) => setInputUnit(e.target.value)}>
                    {Object.keys(unitFactors).map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>
            <div>
                <span>To</span>
                <select value={outputUnit} onChange={(e) => setOutputUnit(e.target.value)}>
                    {Object.keys(unitFactors).map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
            {result && <div>Result: {result} {outputUnit}</div>}

            <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
  </header>
        </div>
    );
};

export default SpeedConverter;
