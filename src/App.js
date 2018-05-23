import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './containers/Home';
import Details from './containers/Details';
import Results from './containers/Results';
import Footer from './components/Footer';
import CONSTANTS from './constants';
import './App.css';

const { PATH } = CONSTANTS.APP;

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={PATH.HOME} component={Home} />
        <Route path={PATH.RESULTS} component={Results} />
        <Route path={PATH.DETAILS} component={Details} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
