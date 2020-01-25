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
        <div style={{ marginTop: "2rem" }}>
          <Icon path={mdiCubeOutline} size={6} color="#FFa500" spin={25} />
          <h1>Quizzy App</h1>
          <div className="play-button-container">
            <ul>
              <li>
                <Link to="/play/instructions">Play</Link>
              </li>
            </ul>
          </div>
          <div className="auth-container">
            <Link id="login-button" to="/login">
              Login
            </Link>
            <Link id="register-button" to="/register">
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Home;
