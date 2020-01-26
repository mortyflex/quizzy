import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import answer from "../../assets/img/answer.png";
import fiftyFifty from "../../assets/img/fiftyFifty.png";
import hints from "../../assets/img/hints.png";
import options from "../../assets/img/options.png";
import Icon from "@mdi/react";
import { mdiSetCenter, mdiLightbulbOnOutline } from "@mdi/js";

const QuizInstructions = () => (
  <>
    <Helmet>
      <title>Quiz instructions - Quizzy</title>
    </Helmet>
    <div className="instructions container">
      <h1>How to play the game</h1>
      <p>Ensure you read this guide from start to finish</p>
      <ul className="browser-default" id="main-list">
        <li>
          The game has a duration of 15 minutes and ends as soon as your time
          elapses.
        </li>
        <li>Each game consists of 15 questions.</li>
        <li>
          Every question contains 4 options.
          <div style={{ textAlign: "center" }}>
            <img src={options} alt="options example" />
          </div>
        </li>
        <li>
          Select the option which best answers the question by clicking (or
          selecting) it.
          <div style={{ textAlign: "center" }}>
            <img src={answer} alt="answer example" />
          </div>
        </li>
        <li>
          Each game has 2 lifelines namely:
          <ul id="sublist">
            <li>2 50-50 chances</li>
            <li>5 Hints</li>
          </ul>
        </li>
        <li>
          Selecting a 50-50 lifeline by clicking the icon{" "}
          <Icon
            className="lifeline"
            path={mdiSetCenter}
            size={1}
            color="#57b846"
          />{" "}
          will remove 2 wrong answers, leaving the correct answer and one wrong
          answer.
          <div style={{ textAlign: "center" }}>
            <img src={fiftyFifty} alt="50/50 example" />
          </div>
        </li>
        <li>
          Using a hint by clicking the icon
          <Icon
            className="lifeline"
            path={mdiLightbulbOnOutline}
            size={1}
            color="#57b846"
          />
          will remove one wrong answer leaving two wrong answers and one correct
          answer. You can use as many hints as possible on a single question.
        </li>
        <div style={{ textAlign: "center" }}>
          <img src={hints} alt="hints example" />
        </div>
        <li>
          Feel free to quit (or retire from) the game at any time. In that case
          your score will be revealed afterwards.
        </li>
        <li>The timer starts as soon as the game loads.</li>
        <li>Let's do this if you think you've got what it takes?</li>
      </ul>
      <div className="links">
        <span className="left">
          <Link to="/">No take me back</Link>
        </span>
        <span className="right">
          <Link to="/play">Okay, Let's do this!</Link>
        </span>
      </div>
    </div>
  </>
);

export default QuizInstructions;
