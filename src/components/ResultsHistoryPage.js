import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getResultsForUser } from "../api/authService";

function ResultsHistoryPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchResults = async () => {
      if (currentUser) {
        const userResults = await getResultsForUser(currentUser.username);
        setResults(userResults);
        setLoading(false);
      }
    };
    fetchResults();
  }, [currentUser]);

  if (loading) return <p>Loading results...</p>;

  return (
    <div className="results-history-container">
      <h2>My Test History</h2>
      {results.length === 0 ? (
        <p>You have not completed any tests yet.</p>
      ) : (
        <ul className="results-list">
          {results.map((result, index) => (
            <li key={index} className="result-item">
              <span
                className={`score-badge ${
                  result.percentage >= 50 ? "pass" : "fail"
                }`}
              >
                {result.percentage}%
              </span>
              <div className="result-details">
                <span>
                  Score: {result.score} / {result.totalQuestions}
                </span>
                <span className="result-date">
                  {new Date(result.date).toLocaleDateString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsHistoryPage;
