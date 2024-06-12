import React, { useState } from 'react';
import logo from './weel.svg';
import './App.css';
const VolumeConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('liters');
    const [outputUnit, setOutputUnit] = useState('milliliters');
    const [result, setResult] = useState('');

    const unitFactors = {
        liters: 1,
        milliliters: 1000,
        cubicMeters: 0.001,
        cubicFeet: 0.0353147,
        gallons: 0.264172,
    };

    const handleConvert = () => {
        const inputFactor = unitFactors[inputUnit];
        const outputFactor = unitFactors[outputUnit];
        const convertedValue = (inputValue * inputFactor) / outputFactor;
        setResult(convertedValue);
    };

    return (
        <div>
            <h2>Volume Converter</h2>
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

export default VolumeConverter;