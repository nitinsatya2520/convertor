import React from 'react';
import logo from './weel.svg';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {


    return (
        <div>
            <h1>Welcome to Converter App</h1>
            
            <p>Select a tool below:</p>
            <ul>
                <div className='App-header-form1'>
                <li><Link to="/byte-converter">Byte Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/temp-converter">Temperature Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/age-calculator">Age Calculator</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/area-converter">Area Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/speed-converter">Speed Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/weight-converter">Weight Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/time-converter">Time Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/power-converter">Power Converter</Link></li>
                </div>
                <div className='App-header-form1'>
                <li><Link to="/volume-converter">Volume Converter</Link></li>
                </div>
            </ul>
            <header className="App-header">
    <img src={logo} className="App-logl" alt="logo" />
    
</header>


        </div>
        
    );
};
export default Home;