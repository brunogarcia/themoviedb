import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import logo from '../../assets/logo.svg';
import './styles.css';

const Header = () => (
  <nav className="Header-main navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/">
          <img src={logo} className="Header-logo" alt="logo" />
        </Link>
      </div>
      <p className="Header-nav navbar-text navbar-right">
        <Link to="/" className="btn btn-success navbar-btn">
          <Icon name="star" /> Popular movies
        </Link>
      </p>
    </div>
  </nav>
);

export default Header;
