import React, { useState } from "react";

const CodeEditor = ({ question, onSubmit }) => {
  const [code, setCode] = useState("");

  return (
    <div style={styles.container}>
      <h2>{question.question}</h2>
      <p>{question.example}</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={styles.textarea}
        placeholder="Write your code here..."
      />
      <button onClick={() => onSubmit(code)} style={styles.button}>Submit Code</button>
    </div>
  );
};

const styles = {
  container: {
    background: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "2px 2px 10px gray",
    width: "80%",
    margin: "auto",
  },
  textarea: {
    width: "100%",
    height: "200px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CodeEditor;
