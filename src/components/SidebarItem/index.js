import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SidebarItem extends Component {
  render() {
    return (
        <Col className="sidebarItemWrap" xl={12} lg={6} md={12} sm={12} xs={12}>
          <div className="colInner">
            <Row className="imgWrap" noGutters={true}>
              <p className="category">{this.props.category}</p>
              <img src={this.props.image} alt={this.props.title} />
            </Row>
            <Row className="itemText" noGutters={true}>
              <h3>{this.props.title}</h3>
              <p>{this.props.body}</p>
            </Row>
          </div>
        </Col>
    );
  }
}

export default SidebarItem;
