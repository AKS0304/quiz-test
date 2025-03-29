import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Designed by Amit, all rights reserved 2024.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    textAlign: "center",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
