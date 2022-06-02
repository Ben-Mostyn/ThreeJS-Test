import { useState } from "react";
import "../Pages/Home.css";
const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className="main-home-container">
      {darkMode ? (
        <section className="Home-container">
          {/* <div className="cloud one"></div>
          <div className="cloud two"></div>
          <div className="cloud three"></div>
          <div className="cloud1 four"></div>
          <div className="cloud1 five"></div>
          <div className="cloud1 six"></div>
          <div className="cloud2 seven"></div>
          <div className="cloud2 eight"></div>
          <div className="cloud2 nine"></div>
          <div className="cloud3 ten"></div>
          <div className="cloud4 eleven"></div>
          <div className="cloud5 twelve"></div>
          <div className="cloud6 thirteen"></div> */}
          {/* <div className="container">
            <div className="cloud"></div>
          </div> */}
          <div className="cloud1"></div>
          <div className="cloud2"></div>
          <div className="cloud3"></div>
          <div className="cloud4 one"></div>
          <div className="cloud4 two"></div>
          <div className="cloud5 three"></div>
          <div className="cloud5 four"></div>
          <div className="cloud6 five"></div>
          <div className="cloud6 six"></div>

          <div className="home-content">
            <h1>Ben Mostyn</h1>
            <h2> A Creative Front-End Developer</h2>
          </div>
        </section>
      ) : (
        <div className="home-container-dark">
          <h1>Home</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
