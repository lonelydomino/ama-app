import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <h1>Take action today!</h1>
      <p>Discover how you can help save our environment!</p>
      <button className="cta-button" onClick={() => alert("Button Clicked!")}>
        Get Started
      </button>
    </div>
  );
};

export default CTA;
