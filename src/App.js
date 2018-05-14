import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Results from './components/Results';
import CONSTANTS from './constants';
import logo from './logo.svg';
import './App.css';

const { PATH } = CONSTANTS.APP;

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={PATH.HOME} component={Home}/>
        <Route path={PATH.RESULTS} component={Results}/>
        <Route path={PATH.DETAILS} component={Details}/>
      </Switch>
    </div>
  );
}

export default App;
