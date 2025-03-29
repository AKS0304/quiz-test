import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Quiz App</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    textAlign: "center",
  },
};

export default Header;
