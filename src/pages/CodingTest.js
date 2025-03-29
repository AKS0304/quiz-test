import React, { useState, useEffect } from "react";
import codingQuestions from "../data/codingQuestions"; // Import coding questions
import CodeEditor from "../components/CodeEditor";
import { useNavigate } from "react-router-dom";

const CodingTest = () => {
  const navigate = useNavigate();
  const [questions] = useState(() => {
    // Select 2 random questions
    return codingQuestions.sort(() => Math.random() - 0.5).slice(0, 2);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(900); // 15 min for first question

  useEffect(() => {
    if (timer === 0) {
      handleNext(); // Auto-submit on timeout
    }
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleNext = () => {
    if (currentIndex === 0) {
      setCurrentIndex(1);
      setTimer(1200); // 20 min for second question
    } else {
      navigate("/result", { state: { codingCompleted: true } });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Coding Test</h1>
      <p>Time Remaining: {Math.floor(timer / 60)}m {timer % 60}s</p>
      <CodeEditor question={questions[currentIndex]} onSubmit={handleNext} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default CodingTest;
