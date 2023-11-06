import React from 'react';
import './LoadingScreen.css'; // Import the CSS file for styling

const LoadingScreen = () => {
    return (
        <div className="loading-spinner">
            <div className="spinner">
                <img src="https://i.imgur.com/S5rjJZr.png"></img>
            </div>
        </div>
    );
};

export default LoadingScreen;
