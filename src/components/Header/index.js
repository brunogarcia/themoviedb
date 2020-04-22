import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search';
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
      <Search />
    </div>
  </nav>
);

export default Header;
