import React from "react";

function TestHeader({ stats, onFinish }) {
  return (
    <div className="test-header">
      <div className="header-info">
        <h3>CBT Test - 2025.</h3>
      </div>
      <div className="stats-container">
        <div className="stat-item">
          Questions:<span>{stats.total}</span>
        </div>
        <div className="stat-item">
          Answered:<span>{stats.answered}</span>
        </div>
        <div className="stat-item">
          Mark for Review:<span>{String(stats.marked).padStart(2, "0")}</span>
        </div>
        <div className="stat-item">
          Skipped:<span>{String(stats.skipped).padStart(2, "0")}</span>
        </div>
        <div className="stat-item">
          Scored:<span>{String(stats.skipped).padStart(2, "0")}</span>
        </div>
        <button className="finish-button" onClick={onFinish}>
          Finish
        </button>
      </div>
    </div>
  );
}

export default TestHeader;
