import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState({ name: "", country: "", age: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/aptitude-test");
  };

  return (
    <div className="home">
      <h2>Enter Your Details</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
      <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} required/>
      <button onClick={handleSubmit}>Start Quiz</button>
    </div>
  );
};

export default Home;
