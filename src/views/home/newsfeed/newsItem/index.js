import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrophyIcon from '../../assets/trophyPng.png';
import thumbsIcon from '../../assets/thumbsUpIcon.jpg';
import speechIcon from '../../assets/speechBubble.jpg';

class NewsItem extends Component {
  render() {
    return (
      <Row className="newsItemWrap">
        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
          <img className="trophyIcon" src={TrophyIcon} />
        </Col>
        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
          <h3>Nicholas Walker recieved the Perserverance award</h3>
          <h4>From Elna Borodachi - Mar 19, 2018</h4>
          <p className="commentText">Keep up the great work! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
          <div className="likesComments">
            <p><img src={thumbsIcon} /><span>45</span><img className="speechBubble" src={speechIcon} /><span>12</span></p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default NewsItem;
