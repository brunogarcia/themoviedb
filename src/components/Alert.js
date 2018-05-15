import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

const Alert = (props) => {
  const { data } = props;

  return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
          <div className="alert alert-info" role="alert">
            <p>You are looking for <em>{data}</em></p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

Alert.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Alert;
