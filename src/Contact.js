import React from 'react';
import './styles.css';
import './App.css';
import logo from './weel.svg';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us:</p>
            <ul>
                
                <p>KADAVAKOLLU NITIN SATYA</p>
                <p>Email: nitinsatya656@gmailcom</p>
                <p>Phone: +91 8919741565</p>
                <p>Do no:-3/48,Venkatadri Nagar,Gannavaram</p>
                
            </ul>
            <div className='nitin'>

            <img src={logo} className="App-logl" alt="logo" />
            </div>
        </div>
    );
};

export default Contact;
