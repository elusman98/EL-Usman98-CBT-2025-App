import React from "react";

function ResultPage({ score, totalQuestions, onRetakeTest }) {
  // Calculate the percentage score
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= 50;

  return (
    <div className="result-page-container">
      <div className={`result-icon ${isPassed ? "pass" : "fail"}`}>
        {isPassed ? "✔" : "✖"}
      </div>

      <h2 className="result-title">
        {isPassed ? "Congratulations!" : "Better Luck Next Time!"}
      </h2>

      <p className={`result-status ${isPassed ? "pass-text" : "fail-text"}`}>
        You have {isPassed ? "passed" : "failed"} the test.
      </p>

      <p className="result-score">
        Your Score: <span>{percentage}%</span>
      </p>

      <p className="result-summary">
        You answered {score} out of {totalQuestions} questions correctly.
      </p>

      <button className="retake-button" onClick={onRetakeTest}>
        Retake Test
      </button>
    </div>
  );
}

export default ResultPage;
