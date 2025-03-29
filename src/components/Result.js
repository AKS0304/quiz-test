import React from "react";

const Result = ({ score, total }) => {
  return (
    <div style={styles.container}>
      <h2>Quiz Completed</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={() => window.location.href = "/"} style={styles.button}>Reattempt</button>
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
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Result;
