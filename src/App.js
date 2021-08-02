import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolios";
//import Profile from "./components/Profile";






function App() {
  return (
   <Router>
     <>
     <Router basename="/Resume"></Router>
     <Navbar />
      <Route exact path ="/Home" component={Home} />
     
      <Switch>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/education" component={Education}></Route>
        <Route path="/experience" component={Experience}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
      </Switch>
     </>
   </Router>
  );
}

export default App;