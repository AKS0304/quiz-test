import React, { useState, useEffect } from "react";
import aptitudeQuestions from "../data/aptitudeQuestions"; // Import question data
import Question from "../components/Question";
import { useNavigate } from "react-router-dom";

const AptitudeTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20); // 20-second timer
  const navigate = useNavigate();

  const totalQuestions = aptitudeQuestions.length;

  // Auto-forward every 20 seconds
  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Handle user answer selection
  const handleAnswer = (selectedOption) => {
    if (selectedOption === aptitudeQuestions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
    handleNext();
  };

  // Move to next question
  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimer(20); // Reset timer for next question
    } else {
      // Check if user qualifies for Part 2
      if (score >= 15) {
        navigate("/coding-test", { state: { aptitudeScore: score } });
      } else {
        navigate("/result", { state: { aptitudeScore: score } });
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1>Aptitude Test</h1>
      <p>Time Remaining: {timer}s</p>
      <Question
        questionData={aptitudeQuestions[currentIndex]}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default AptitudeTest;
