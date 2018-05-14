import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

function Alert (props) {
  const query = props.data;

  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <div className="alert alert-info" role="alert">
            <p>You are looking for <em>"{query}"</em></p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}

Image.propTypes = {
  query: PropTypes.string.isRequired,
}

export default Alert;
