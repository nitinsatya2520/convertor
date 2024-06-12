import React, { useState } from 'react';
import axios from 'axios';
import logo from './weel.svg';
import './App.css';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState(null);

    const calculate = async () => {
        const res = await axios.post('http://localhost:5000/api/age-calculator', { birthDate });
        setAge(res.data.age);
    };

    return (
        <div>
            <h2>Age Calculator</h2>
            <input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
            <button onClick={calculate}>Calculate Age</button>
            {age && <div>Age: {age}</div>}

            <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    
  </header>
        </div>
    );
};

export default AgeCalculator;
