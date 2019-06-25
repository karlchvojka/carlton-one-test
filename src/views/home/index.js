import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './profile/';

function Home() {
  return (
    <Container as='section' className="home" fluid={true}>
      <Row>
        <Col xl={3}>
          <Profile />
        </Col>
        <Col xl={6}>
          <div className="colInner">
          </div>
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
