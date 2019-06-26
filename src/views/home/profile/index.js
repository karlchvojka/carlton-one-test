import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileImg from '../assets/amandaProfile.png';
import ShoppingBagIcon from '../assets/shoppingBagIcon.png';
import HandIcon from '../assets/handIcon.png';
import CrownIcon from '../assets/crownIcon.png';


class Profile extends Component {
  render() {

    return (
      <Container as='section' className="colInner profileWrap">
        <Row className="imageWrap">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <img className="profileImg" src={ProfileImg} alt="Profile" />
          </Col>
        </Row>
        <Row className="profileDetails">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
            <h4>{new Intl.NumberFormat().format(this.props.user.points)}</h4>
            <p>Points Available</p>
          </Col>
        </Row>
        <Row className="profileOptions">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <ul>
              <li><p><img src={ShoppingBagIcon} alt="Shopping Bag" />Shop The Gallery</p></li>
              <li><p><img src={HandIcon} alt="Hand with a leaf behind it" />Communications</p></li>
              <li><p><img src={CrownIcon} alt="Crown" />Recognize Peers</p></li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
