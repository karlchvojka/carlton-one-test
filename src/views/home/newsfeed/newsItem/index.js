import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TrophyIcon from '../../assets/trophyPng.png';
import thumbsIcon from '../../assets/thumbsUpIcon.jpg';
import speechIcon from '../../assets/speechBubble.jpg';

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theDate: ''
    }
  }
  render() {
    let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let newDate = new Date(this.props.item.created_at);
    let month = newDate.getMonth();
    let day = newDate.getDate();
    let year = newDate.getFullYear();

    let formattedDate = '' + shortMonths[month] + ' ' + day + ', ' + year;

    return (
      <Row className="newsItemWrap">
        <Col xl={2} lg={2} md={2} sm={2} xs={2}>
          <img className="trophyIcon" src={TrophyIcon} alt="Trophy" />
        </Col>
        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
          <h3>{this.props.item.title}</h3>
          <h4>From {this.props.item.from} - {formattedDate}</h4>
          <p className="commentText">{this.props.item.details}</p>
          <div className="likesComments">
            <p><img src={thumbsIcon} alt="Thumbs up" /><span>{this.props.item.likes}</span><img className="speechBubble" src={speechIcon} alt="speech bubble" /><span>{this.props.item.comments}</span></p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default NewsItem;
