import React from 'react';

function ProgressBar({ current, total }) {
    const progressPercentage = total > 0 ? (current / total) * 100 : 0;

    return (
        <div className="progress-bar-container">
            <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;