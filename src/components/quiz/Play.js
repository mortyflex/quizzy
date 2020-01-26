import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import { mdiSetCenter, mdiLightbulbOnOutline, mdiClockOutline } from "@mdi/js";

const Play = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Helmet>
        <title>Quiz page</title>
      </Helmet>
      <div className="questions">
        <div className="lifeline-container">
          <p>
            <Icon
              style={{ position: "relative", top: "3px" }}
              className="lifeline-icon"
              path={mdiSetCenter}
              size={1}
              spin={5}
              color="#57b846"
            />
            2
          </p>
          <p>
            <Icon
              style={{ position: "relative", top: "3px" }}
              className="lifeline-icon"
              path={mdiLightbulbOnOutline}
              size={1}
              spin={5}
              color="#57b846"
            />
            2
          </p>
        </div>
        <div>
          <p>
            <span>1 of 15</span>
            <Icon
              style={{ position: "relative", top: "3px" }}
              path={mdiClockOutline}
              size={1}
            />
            2:15
          </p>
        </div>
        <h4>Google was founded in what year ?</h4>
        <div className="options-container">
          <p className="option">1997</p>
          <p className="option">1998</p>
        </div>
        <div className="options-container">
          <p className="option">1999</p>
          <p className="option">2000</p>
        </div>
        <div className="bottom-container">
          <button>Previous</button>
          <button>Next</button>
          <button>Quit</button>
        </div>
      </div>
    </>
  );
};

export default Play;
