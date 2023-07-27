import React from "react";
import Answer from "./Answer";
import { Link } from "react-router-dom";

const Answers = ({ userAnswers, filteredQuestions }) => {
  return (
    <div>
      {filteredQuestions && filteredQuestions.length > 0 ? (
        <Answer userAnswers={userAnswers} filteredQuestions={filteredQuestions} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Answers;
