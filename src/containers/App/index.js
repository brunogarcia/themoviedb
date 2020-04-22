import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Details from '../Details';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CONSTANTS from '../../utils/constants';
import './styles.css';

const { PATH } = CONSTANTS.APP;

/**
 * Container for display the app
 *
 * @returns {App} - The react component
 */
export default function App() {
  return (
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
}
