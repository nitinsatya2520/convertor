import React, { useState } from 'react';
import logo from './weel.svg';
import './App.css';
const TimeConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('seconds');
    const [outputUnit, setOutputUnit] = useState('minutes');
    const [result, setResult] = useState('');

    const unitFactors = {
        seconds: 1,
        minutes: 1 / 60,
        hours: 1 / 3600,
        days: 1 / 86400,
        weeks: 1 / 604800,
        months: 1 / 2.628e+6,
        years: 1 / 3.154e+7,
    };

    const handleConvert = () => {
        const inputFactor = unitFactors[inputUnit];
        const outputFactor = unitFactors[outputUnit];
        const convertedValue = (inputValue * inputFactor) / outputFactor;
        setResult(convertedValue);
    };

    return (
        <div>
            <h2>Time Converter</h2>
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

export default TimeConverter;
