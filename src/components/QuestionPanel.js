import React from "react";

function QuestionPanel({
  question,
  selectedAnswer,
  isMarked,
  onAnswerSelect,
  onMarkForReview,
  onNext,
  onPrev,
}) {
  return (
    <main className="question-panel">
      <h2 className="question-title">
        {question.id}. {question.question}
      </h2>

      {question.code && (
        <pre className="code-block">
          <code>{question.code}</code>
        </pre>
      )}

      <div className="options-grid">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            className={`option-button ${
              selectedAnswer === key ? "selected" : ""
            }`}
            onClick={() => onAnswerSelect(question.id, key)}
          >
            <span className="option-letter">{key}</span>
            {value}
          </button>
        ))}
      </div>

      <div className="question-footer">
        <label className="mark-review">
          <input
            type="checkbox"
            checked={isMarked}
            onChange={() => onMarkForReview(question.id)}
          />
          Mark for review
        </label>
        <div className="navigation-buttons">
          <button onClick={onPrev}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </main>
  );
}

export default QuestionPanel;
