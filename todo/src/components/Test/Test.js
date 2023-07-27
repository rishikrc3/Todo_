import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Test.css";
import { Content } from "./Content";
import { Link, useNavigate } from "react-router-dom";
import Answer from "../Answer/Answer";

const Test = ({ selectedType }) => {
  const filteredQuestions = Content.filter(
    (item) => item.Type === selectedType
  );

  const totalSlides = filteredQuestions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(5);
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? prevIndex : prevIndex + 1
    );
    setRemainingTime(5); // Reset the remaining time for the next question
  };

  useEffect(() => {
    // Automatically move to the next slide every 5 seconds except on the last slide
    if (!submitted && currentIndex !== totalSlides - 1) {
      const interval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(interval);
          nextSlide();
        }
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    } else if (!submitted && currentIndex === totalSlides - 1) {
      // Show the popup after time completion on the last slide
      const interval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(interval);
          setShowPopup(true);
        }
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [remainingTime, currentIndex, submitted, totalSlides]);

  // Function to handle the Next button click
  const handleNextClick = () => {
    if (currentIndex === totalSlides - 1) {
      setSubmitted(true); // Mark the test as submitted
      setShowPopup(true); // Show the popup for manual submission (last slide)
    } else {
      nextSlide();
    }
  };

  // Function to handle the popup close
  const handleClosePopup = () => {
    setShowPopup(false);

  };

  // Function to handle user answer selection
  const handleAnswerSelect = (answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentIndex]: answer,
    }));
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    filteredQuestions.forEach((item, index) => {
      if (userAnswers[index] === item.Answer) {
        score++;
      }
    });
    score = Math.round((score / totalSlides) * 100);
    return score;
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{
          transform: `translateX(-${100 * currentIndex}%)`,
          transition: "transform  0.5s ease-in-out", // Add transition for smooth sliding
        }}
      >
        {filteredQuestions.map((item, index) => (
          <div key={item.id} className="slide_T">
            <div className="heading">
              <h2>Question {currentIndex + 1}</h2>
            </div>
            <div className="tags">
              <div className="q_remain">
                {currentIndex + 1} out of {filteredQuestions.length}
              </div>
              <div className="countdown">
                {/* <img
                  src="./../../loading-animation_sand-timer.gif"
                  alt="image"
                /> */}
                <h4>Time: {remainingTime}s</h4>
              </div>
            </div>
            <div className="form_T">
              <h3> {item.Question}?</h3>
              <div className="option">
                <div className="option1">
                  <div
                    className={`box_T 
                    ${userAnswers[currentIndex] === "A" ? "selected" : ""}`}
                    onClick={() => handleAnswerSelect("A")}
                  >
                    A) {item.option.A}
                  </div>
                  <div
                    className={`box_T ${
                      userAnswers[currentIndex] === "B" ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect("B")}
                  >
                    B) {item.option.B}
                  </div>
                </div>
                <div className="option1">
                  <div
                    className={`box_T ${
                      userAnswers[currentIndex] === "C" ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect("C")}
                  >
                    C) {item.option.C}
                  </div>
                  <div
                    className={`box_T ${
                      userAnswers[currentIndex] === "D" ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect("D")}
                  >
                    D) {item.option.D}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn"
                onClick={handleNextClick}
                disabled={submitted}
              >
                {index === totalSlides - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={true} // Prevent confetti from recycling
            numberOfPieces={200} // Adjust the number of confetti pieces
          />
          <div className="popup-content">
            <h2>Submission Successful!</h2>
            <p>Your score: {calculateScore()}%</p>
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={handleClosePopup}>Answer</button>
              <button onClick={handleClosePopup}>Find Buddy</button>
            </div>
          </div>
        </div>
      )}
      <Answer userAnswers={userAnswers} filteredQuestions={filteredQuestions}/>
    </div>
  );
};

export default Test;
