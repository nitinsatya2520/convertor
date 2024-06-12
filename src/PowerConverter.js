import React, { useState } from 'react';
import logo from './weel.svg';
import './App.css';
const PowerConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('watts');
    const [outputUnit, setOutputUnit] = useState('kilowatts');
    const [result, setResult] = useState('');

    const unitFactors = {
        watts: 1,
        kilowatts: 0.001,
        megawatts: 1e-6,
        horsepower: 0.00134102,
    };

    const handleConvert = () => {
        const inputFactor = unitFactors[inputUnit];
        const outputFactor = unitFactors[outputUnit];
        const convertedValue = (inputValue * inputFactor) / outputFactor;
        setResult(convertedValue);
    };

    return (
        <div>
            <h2>Power Converter</h2>
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

export default PowerConverter;
