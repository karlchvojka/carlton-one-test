import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SidebarItem extends Component {
  render() {
    return (
      <Row className="colInner sidebarItemWrap" noGutters={true}>
        <Col>
          <Row className="imgWrap" noGutters={true}>
            <p className="category">{this.props.category}</p>
            <img src={this.props.image} />
          </Row>
          <Row className="itemText" noGutters={true}>
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SidebarItem;
