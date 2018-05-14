import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import Results from './components/Results';
import Footer from './components/Footer';
import CONSTANTS from './constants';
import './App.css';

const { PATH } = CONSTANTS.APP;

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path={PATH.HOME} component={Home}/>
        <Route path={PATH.RESULTS} component={Results}/>
        <Route path={PATH.DETAILS} component={Details}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
