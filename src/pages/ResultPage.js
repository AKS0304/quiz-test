import React from "react";

const ResultPage = () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};

  return (
    <div>
      <h2>Result</h2>
      <p>Name: {userData.name}</p>
      <p>Country: {userData.country}</p>
      <p>Age: {userData.age}</p>

      <h3>Aptitude Test Score: 20/30</h3>
      <h3>Coding Test Score: 11/20</h3>

      <button onClick={() => window.location.href = "/"}>Reattempt</button>
    </div>
  );
};

export default ResultPage;




  
