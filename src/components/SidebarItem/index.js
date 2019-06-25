import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SidebarItem extends Component {
  render() {
    return (
      <Row className="colInner">
        <p>{this.props.category}</p>
        <img src={this.props.image} />
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>
      </Row>
    );
  }
}

export default SidebarItem;
