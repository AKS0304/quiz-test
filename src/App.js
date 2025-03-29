// App.js (Fix: Remove <Router>)
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AptitudeTest from "./pages/AptitudeTest";
import CodingTest from "./pages/CodingTest";
import ResultPage from "./pages/ResultPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
//import "./styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header />
      <ThemeToggle toggleTheme={() => setDarkMode(!darkMode)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />
        <Route path="/coding-test" element={<CodingTest />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
