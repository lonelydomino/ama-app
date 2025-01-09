import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <h1>Join Our Community Today!</h1>
      <p>Discover the benefits of being a part of something great. Don’t miss out!</p>
      <button className="cta-button" onClick={() => alert("Button Clicked!")}>
        Get Started
      </button>
    </div>
  );
};

export default CTA;
