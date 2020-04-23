import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../containers/Search';
import logo from '../../assets/logo.svg';
import './styles.css';

/**
 * Component for display the header of the app
 *
 * @returns {Header} - The react component
 */
export default function Header() {
  return (
    <nav className="Header-main navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/">
            <img src={logo} className="Header-logo" alt="The Movie DB" />
          </Link>
        </div>
        <Search />
      </div>
    </nav>
  );
}
