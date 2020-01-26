import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/play/instructions" component={QuizInstructions} />
      <Route exact path="/play" component={Play} />
    </Router>
  );
}

export default App;
