import { useState } from "react";
import "../Pages/Home.css";
const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className="main-home-container">
      {darkMode ? (
        <div className="Home-container">
          <div className="cloud one"></div>
          <div className="cloud two"></div>
          <div className="cloud three"></div>
          <div className="cloud1 four"></div>
          <div className="cloud1 five"></div>
          <div className="cloud1 six"></div>
          <div className="home-content">
            <h1>Ben Mostyn</h1>
            <h2> A Creative Front-End Developer</h2>
          </div>
        </div>
      ) : (
        <div className="home-container-dark">
          <h1>Home</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
