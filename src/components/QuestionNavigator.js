import React from "react";

function QuestionNavigator({
  questions,
  userAnswers,
  markedForReview,
  currentQuestionIndex,
  onQuestionSelect,
}) {
  const getStatus = (question, index) => {
    if (index === currentQuestionIndex) return "current";
    if (markedForReview.has(question.id)) return "marked";
    if (userAnswers[question.id]) return "answered";
    return "unanswered";
  };

  return (
    <aside className="question-navigator">
      <h3 className="navigator-title">Questions</h3>
      <div className="question-grid">
        {questions.map((q, index) => (
          <button
            key={q.id}
            className={`question-number-button ${getStatus(q, index)}`}
            onClick={() => onQuestionSelect(index)}
          >
            {q.id}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default QuestionNavigator;
