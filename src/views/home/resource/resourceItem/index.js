import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ResourceItem extends Component {
  render() {
    return (
      <Col xs={3} >
        <Row noGutters={true} >
          <Col className="sidebarItemWrap colInner">
            <Row className="imgWrap" noGutters={true}>
              <p className="category">{this.props.category}</p>
              <img src={this.props.image} alt={this.props.title} />
            </Row>
            <Row className="itemText" noGutters={true}>
              <h3>{this.props.title}</h3>
              <p>{this.props.body}</p>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default ResourceItem;
