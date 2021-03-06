import React from "react";
import arrow from "./images/arrow-right.svg";
import "./App.scss";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Telling Our Story
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    About Being In America
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">In 2020.</div>
                </div>
              </h1>
              <p>
                Throughout history, African-Americans have been discriminated
                against. However, what hasn't happened yet is the history our
                current generation being told. This is our story.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images"></div>
          <div className="hero-images-inner">
            <div className="hero-image girl">
              <img src={imgGirl} alt="girl" />
            </div>
            <div className="hero-image boy">
              <img src={imgBoy} alt="boy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
