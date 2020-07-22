import React from "react";
import "./App.scss";

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
            </div>
          </div>
          <div className="hero-images"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
