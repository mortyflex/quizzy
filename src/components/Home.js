import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import { mdiCubeOutline } from "@mdi/js";

const Home = () => (
  <>
    <Helmet>
      <title>Quizzy-Home</title>
    </Helmet>
    <div id="home">
      <section>
        <div>
          <Icon path={mdiCubeOutline} size={3} color="#000" />
          <h1>Quizzy App</h1>
          <div className="play-button-container">
            <ul>
              <li>
                <Link to="/play/instructions">Play</Link>
              </li>
            </ul>
          </div>
          <div className="auth-container">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Home;
