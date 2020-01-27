import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import M from "materialize-css";
import { mdiSetCenter, mdiLightbulbOnOutline, mdiClockOutline } from "@mdi/js";

import isEmpty from "../../utils/is-empty";

import peuples from "../../Peuples";

const Play = () => {
  const [questionsState, setQuestionsState] = useState(peuples.débutant);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [propositions, setPropositions] = useState([]);
  const [nextQuestion, setNextQuestion] = useState({});
  const [prevQuestion, setPrevQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [hints, setHints] = useState(5);
  const [fiftyFifty, setFiftyFifty] = useState(2);
  const [usedFifty, setUsedFiftyFifty] = useState(false);
  const [time, setTime] = useState({});

  useEffect(
    (quest, currQuestion, nextQuest, prevQuest) => {
      if (!isEmpty(questionsState)) {
        quest = questionsState;
        currQuestion = quest[currentQuestionIndex];
        nextQuest = quest[currentQuestionIndex + 1];
        prevQuest = quest[currentQuestionIndex - 1];
        const answ = currQuestion.réponse;
        const propos = currQuestion.propositions;
        setCurrentQuestion(currQuestion);
        setNextQuestion(nextQuest);
        setPrevQuestion(prevQuest);
        setAnswer(answ);
        setPropositions(propos);
      }
    },
    [currentQuestionIndex, nextQuestion, prevQuestion, questionsState]
  );

  const handleOptionClick = e => {
    if (e.target.innerText === answer) {
      correctAnswer();
    } else {
      wrongAnswer();
    }
  };

  const correctAnswer = () => {
    M.toast({
      html: "Correct answer!",
      classes: "toast-valid",
      displayLength: 1500
    });
    setScore(score + 1);
    setCorrectAnswers(correctAnswers + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong answer!",
      classes: "toast-invalid",
      displayLength: 1500
    });
    setWrongAnswers(wrongAnswers + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1);
  };

  return (
    <>
      <Helmet>
        <title>Quiz page</title>
      </Helmet>
      <div className="questions">
        <h2>Quiz Mode</h2>
        <div className="lifeline-container">
          <p>
            <Icon
              className="lifeline-icon"
              path={mdiSetCenter}
              size={1}
              spin={5}
              color="#57b846"
            />
            <span className="lifeline">2</span>
          </p>
          <p>
            <Icon
              className="lifeline-icon"
              path={mdiLightbulbOnOutline}
              size={1}
              spin={5}
              color="#57b846"
            />
            <span className="lifeline">5</span>
          </p>
        </div>
        <div>
          <p>
            <span className="left">{answeredQuestions} of 15</span>
            <span style={{ float: "right" }}>
              <Icon path={mdiClockOutline} size={1} />
              2:15
            </span>
          </p>
        </div>
        <h4 onClick={() => console.log(propositions)}>
          {currentQuestion.question}
        </h4>
        <div className="options-container">
          <p onClick={handleOptionClick} className="option">
            {propositions[0]}
          </p>
          <p onClick={handleOptionClick} className="option">
            {propositions[1]}
          </p>
        </div>
        <div className="options-container">
          <p onClick={handleOptionClick} className="option">
            {propositions[2]}
          </p>
          <p onClick={handleOptionClick} className="option">
            {propositions[3]}
          </p>
        </div>

        <div className="button-container">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    </>
  );
};

export default Play;
