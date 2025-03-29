import React from "react";

const Question = ({ questionData, handleAnswer }) => {
  return (
    <div style={styles.container}>
      <h2>{questionData.question}</h2>
      {questionData.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)} style={styles.button}>
          {option}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    background: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "2px 2px 10px gray",
    width: "60%",
    margin: "auto",
  },
  button: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    fontSize: "16px",
    width: "80%",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Question;
