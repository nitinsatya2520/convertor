import React from 'react';
import SearchBox from './SearchBox';

const MyComponent = () => {
    // List of available converter options
    const converters = [
        'Byte Converter',
        'Temperature Converter',
        'Age Calculator',
        'Area Converter',
        'Speed Converter',
        'Weight Converter',
        'Time Converter',
        'Power Converter',
        'Volume Converter',
    ];

    // Define a function to handle the selection of a converter
    const handleSelectConverter = (converter) => {
        // Perform logic based on the selected converter
        console.log('Selected converter:', converter);
    };

    return (
        <div>
            <h1>My Component</h1>
            {/* Render the SearchBox component and pass the list of converters */}
            <SearchBox converters={converters} onSelect={handleSelectConverter} />
        </div>
    );
};

export default MyComponent;
