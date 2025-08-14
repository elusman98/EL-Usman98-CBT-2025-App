import React from 'react';

function Timer({ minutes, seconds }) {
    // Pad numbers with a leading zero if they are less than 10
    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <div className="timer">
            {formatTime(minutes)}:{formatTime(seconds)}
        </div>
    );
}

export default Timer;