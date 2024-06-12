import React, { useState } from 'react';
import logo from './weel.svg';
import axios from 'axios';
import './App.css';


const ByteConverter = () => {
    const [value, setValue] = useState('');
    const [fromUnit, setFromUnit] = useState('bytes');
    const [toUnit, setToUnit] = useState('KB');
    const [result, setResult] = useState(null);

    const convert = async () => {
        const res = await axios.post('http://localhost:5000/api/byte-converter', {
            value,
            fromUnit,
            toUnit
        });
        setResult(res.data.convertedValue);
    };

    return (
        <div>
            <h2>Byte Converter</h2>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} />
            <select value={fromUnit} onChange={e => setFromUnit(e.target.value)}>
                <option value="bytes">Bytes</option>
                <option value="KB">KB</option>
                <option value="MB">MB</option>
                <option value="GB">GB</option>
                <option value="TB">TB</option>
            </select>
            <select value={toUnit} onChange={e => setToUnit(e.target.value)}>
                <option value="bytes">Bytes</option>
                <option value="KB">KB</option>
                <option value="MB">MB</option>
                <option value="GB">GB</option>
                <option value="TB">TB</option>
            </select>
            <button onClick={convert}>Convert</button>
            {result && <div>Result: {result}</div>}

            <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
  </header>
            
        </div>

        
    );
};

export default ByteConverter;
