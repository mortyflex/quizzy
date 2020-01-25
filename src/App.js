import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import QuizInstructions from "./components/quiz/QuizInstructions";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/play/instructions" component={QuizInstructions} />
    </Router>
  );
}

export default App;
