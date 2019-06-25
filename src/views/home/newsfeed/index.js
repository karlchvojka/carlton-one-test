import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewsfeedArrow from '../assets/newsfeedarrow.png';

class Newsfeed extends Component {
  render() {
    return (
      <Container as='section' className="colInner newsfeedWrap">
        <Row className="titleRow">
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <h2>Company Newsfeed</h2>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <p>All Newsfeed Items <img src={NewsfeedArrow} alt="Arrow" /></p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Newsfeed;
