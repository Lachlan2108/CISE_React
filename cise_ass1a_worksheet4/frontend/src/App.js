<<<<<<< Updated upstream
import React from "react";
=======
import React, {components} from 'react';
>>>>>>> Stashed changes
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";

class App extends components {
  render() {
    return (
      <Router>
      <div>
          <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
            <ul className="header">
                <li><NavLink exact to = "/">Home</NavLink></li>
                <li><NavLink to = "/SE-Practice">Select the Practice</NavLink></li>
                <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
            </ul>
          <div className="content">
<<<<<<< Updated upstream
            <Route exact path="/" component={Home}/>
            <Route  path="/SEPractice" component={SEPractice}/>
            <Route  path="/SubmitArticle" component={SubmitArticle}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/404" />
=======
            <Route exact path="/" components={Home}/>
            <Route  path="/SEPractice" components={SEPractice}/>
            <Route  path="/SubmitArticle" components={SubmitArticle}/>
            <Route exact path="/404" components={NotFoundPage}/>
            <BrowserRouter to="/404" />
>>>>>>> Stashed changes
            </div>
        </div>
        </Router>
    );
  }
}

export default App;