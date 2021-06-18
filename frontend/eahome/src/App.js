import React from 'react';
import './App.css'
import Showcase from './components/showcase';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Yoga from './components/yoga';
import Workout from './components/workout';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Showcase />
      </Route>
      <Route path="/yoga">
        <Yoga />
      </Route>
      <Route path="/workout">
        <Workout />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Router>
  );
}

export default App;
