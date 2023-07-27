import React, { useState } from "react";
import { Content } from "../Test/Content";

const Answer = ({ userAnswers, filteredQuestions }) => {
  const [explanationVisibility, setExplanationVisibility] = useState(
    new Array(filteredQuestions.length).fill(false)
  );

  const toggleExplanation = (index) => {
    setExplanationVisibility((prevVisibility) => {
      const newVisibility = prevVisibility.map((visible, i) =>
        i === index ? !visible : false
      );
      return newVisibility;
    });
  };

  return (
    <>
      <div className="container_A">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <h1>Answers</h1>
          <button type="button" className="btn">
            Personalized Resources
          </button>
        </div>
        <div className="body_A">
          {filteredQuestions.map((item, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === item.Answer;

            return (
              <div key={item.id} style={{ marginBottom: "25px", backgroundColor:'var(--boxColor)', padding: "20px", borderRadius:"24px", }}>
                <h3>
                  {index + 1}. {item.Question}
                </h3>
                <div>
                  {Object.entries(item.option).map(([option, value]) => (
                    <div key={option}>
                      <span
                        style={{
                          fontWeight: userAnswer === option ? "bold" : "normal",
                        }}
                      >
                        {option}) {value}
                      </span>
                      {userAnswer === option && (
                        <span
                          style={{
                            marginLeft: "10px",
                            color: isCorrect ? "green" : "red",
                          }}
                        >
                          {isCorrect ? "✔" : "❌"}
                        </span>
                      )}
                    </div>
                  ))}
                  {userAnswer === undefined && (
                    <span style={{ color: "orange", fontWeight: "bold" }}>
                      Not answered
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => toggleExplanation(index)}
                >
                  {explanationVisibility[index]
                    ? "Hide Answer"
                    : "Show Answer"}
                </button>
                {explanationVisibility[index] && (
                  <div style={{ marginTop: "10px" }}>
                    <h4>
                      Correct Answer: {item.Answer}
                    </h4>

                    <h4>Explanation:</h4>
                    <p>{item.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Answer;
