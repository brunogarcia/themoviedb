import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';
import Details from '../Details';
import Footer from '../../components/Footer';
import CONSTANTS from '../../utils/constants';
import './styles.css';

const { PATH } = CONSTANTS.APP;

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={PATH.HOME} component={Home} />
        <Route path={PATH.DETAILS} component={Details} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
