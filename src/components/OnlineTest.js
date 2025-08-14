import React, { useState, useMemo, useEffect, useCallback } from "react";
import TestHeader from "./TestHeader";
import QuestionNavigator from "./QuestionNavigator";
import QuestionPanel from "./QuestionPanel";
import ProgressBar from "./ProgressBar";
import ResultPage from "./ResultPage";
import { questionBank } from "../data";
import { useAuth } from "../context/AuthContext";
import { saveResult } from "../api/authService";
import Timer from "./Timer";

const INITIAL_TIME_MINUTES = 5;
const INITIAL_TIME_SECONDS = 45;

function OnlineTest() {
  // --- STATE MANAGEMENT ---
  const { currentUser } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [minutesLeft, setMinutesLeft] = useState(INITIAL_TIME_MINUTES);
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_TIME_SECONDS);
  const [isFinished, setIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // --- DERIVED STATE ---
  const stats = useMemo(
    () => ({
      total: questionBank.length,
      answered: Object.keys(userAnswers).length,
      marked: markedForReview.size,
      skipped: questionBank.length - Object.keys(userAnswers).length,
    }),
    [userAnswers, markedForReview]
  );

  // --- EVENT HANDLERS ---
  const handleFinishTest = useCallback(async () => {
    if (isFinished) return;

    let correctAnswersCount = 0;
    questionBank.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctAnswersCount++;
      }
    });

    const resultData = {
      score: correctAnswersCount,
      totalQuestions: questionBank.length,
      percentage: Math.round((correctAnswersCount / questionBank.length) * 100),
      date: new Date().toISOString(),
    };

    if (currentUser) {
      await saveResult(currentUser.username, resultData);
    }

    setFinalScore(correctAnswersCount);
    setIsFinished(true);
  }, [userAnswers, isFinished, currentUser]);

  // NOTE: The duplicated block from here has been removed.

  const handleRetakeTest = useCallback(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMarkedForReview(new Set());
    setMinutesLeft(INITIAL_TIME_MINUTES);
    setSecondsLeft(INITIAL_TIME_SECONDS);
    setIsFinished(false);
    setFinalScore(0);
  }, []);

  const handleAnswerSelect = useCallback((questionId, optionKey) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  }, []);

  const handleMarkForReview = useCallback((questionId) => {
    setMarkedForReview((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  }, []);

  const handleNextQuestion = useCallback(() => {
    setCurrentQuestionIndex((i) => Math.min(i + 1, questionBank.length - 1));
  }, []);

  const handlePrevQuestion = useCallback(() => {
    setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
  }, []);

  // --- SIDE EFFECTS (useEffect for Timer) ---
  useEffect(() => {
    if (isFinished) return;

    const timerInterval = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((s) => s - 1);
      } else if (minutesLeft > 0) {
        setMinutesLeft((m) => m - 1);
        setSecondsLeft(59);
      } else {
        handleFinishTest();
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [minutesLeft, secondsLeft, isFinished, handleFinishTest]);

  // --- CONDITIONAL RENDER ---
  if (isFinished) {
    return (
      <ResultPage
        score={finalScore}
        totalQuestions={questionBank.length}
        onRetakeTest={handleRetakeTest}
      />
    );
  }

  return (
    <>
      <TestHeader stats={stats} onFinish={handleFinishTest} />
      <div className="main-content">
        <QuestionNavigator
          questions={questionBank}
          userAnswers={userAnswers}
          markedForReview={markedForReview}
          currentQuestionIndex={currentQuestionIndex}
          onQuestionSelect={setCurrentQuestionIndex}
        />
        <QuestionPanel
          question={questionBank[currentQuestionIndex]}
          selectedAnswer={userAnswers[questionBank[currentQuestionIndex].id]}
          isMarked={markedForReview.has(questionBank[currentQuestionIndex].id)}
          onAnswerSelect={handleAnswerSelect}
          onMarkForReview={handleMarkForReview}
          onNext={handleNextQuestion}
          onPrev={handlePrevQuestion}
        />
        <Timer minutes={minutesLeft} seconds={secondsLeft} />
      </div>
      <ProgressBar current={stats.answered} total={stats.total} />
    </>
  );
}

export default OnlineTest;
