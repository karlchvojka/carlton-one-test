import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './profile/';
import Newsfeed from './newsfeed/'

function Home() {
  return (
    <Container as='section' className="home" fluid={true}>
      <Row>
        <Col xl={3}>
          <Profile />
        </Col>
        <Col xl={6}>
          <Newsfeed />
        </Col>
        <Col xl={3}>
          <div className="colInner">
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
