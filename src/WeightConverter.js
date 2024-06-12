import React, { useState } from 'react';
import './App.css';
import logo from './weel.svg';


const WeightConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputUnit, setInputUnit] = useState('grams');
    const [outputUnit, setOutputUnit] = useState('kilograms');
    const [result, setResult] = useState('');

    const unitFactors = {
        grams: 1,
        kilograms: 0.001,
        pounds: 0.00220462,
        ounces: 0.035274,
        tons: 1e-6,
    };

    const handleConvert = () => {
        const inputFactor = unitFactors[inputUnit];
        const outputFactor = unitFactors[outputUnit];
        const convertedValue = (inputValue * inputFactor) / outputFactor;
        setResult(convertedValue);
    };

    return (
        <div>
            <h2>Weight Converter</h2>
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

export default WeightConverter;
