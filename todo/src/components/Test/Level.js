import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Level.css";

const Level = ({ onSelectType }) => {
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate(); 
  const [showError, setShowError] = useState(false); // State to control the error message

  // Function to handle the start test button click
  const handleStartTest = () => {
    if (selectedType) {
      onSelectType(selectedType);
      navigate("/test"); // Use navigate function for programmatic navigation
    } else {
      setShowError(true); // Show error message when no input is selected
    }
  };

  return (
    <div className="level-container">
      <h1 className="level-heading">Select Question Type</h1>
      <div className="level-options">
        <label className="level-option">
          <input
            type="radio"
            value="Beginner"
            checked={selectedType === "Beginner"}
            onChange={() => {
              setSelectedType("Beginner");
              setShowError(false); // Reset error state when an input is selected
            }}
          />
          Beginner
        </label>
        <label className="level-option">
          <input
            type="radio"
            value="Intermediate"
            checked={selectedType === "Intermediate"}
            onChange={() => {
              setSelectedType("Intermediate");
              setShowError(false); // Reset error state when an input is selected
            }}
          />
          Intermediate
        </label>
        <label className="level-option">
          <input
            type="radio"
            value="Advanced"
            checked={selectedType === "Advanced"}
            onChange={() => {
              setSelectedType("Advanced");
              setShowError(false); // Reset error state when an input is selected
            }}
          />
          Advanced
        </label>
      </div>
      {showError && (
        <p className="error-message">Please select a question type.</p>
      )}
      <button className="btn" onClick={handleStartTest}>
        Start Test
      </button>
    </div>
  );
};

export default Level;
