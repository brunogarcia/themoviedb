import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchForm from '../SearchForm';
import SearchClear from '../SearchClear';
import SearchResults from '../SearchResults';
import './styles.css';

/**
 * Component for display the search of the app
 *
 * @returns {Search} - The react component
 */
export default function Search() {
  return (
    <div className="Search-main navbar-text navbar-right">
      <Row>
        <Col xs={12}>
          <form className="Search-form form-inline">
            <div className="input-group input-group-lg">
              <SearchForm />
              <SearchClear />
              <SearchResults />
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
