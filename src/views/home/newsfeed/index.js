import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewsfeedArrow from '../assets/newsfeedarrow.png';

import NewsItem from './newsItem/';

class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItems: []
    }
  }
  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://s3-us-west-1.amazonaws.com/gcodes-ext-logos/dev+test/news-feed.json')
    .then(res => {
      const newsItems = res.data;
      this.setState({ newsItems });
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    return (
      <Container as='section' className="colInner newsfeedWrap">
        <Row className="titleRow">
          <Col xl={6} lg={6} md={6} sm={6} xs={12}>
            <h2>Company Newsfeed</h2>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
            <p>All Newsfeed Items <img src={NewsfeedArrow} alt="Arrow" /></p>
          </Col>
        </Row>
        {this.state.newsItems.map((item, index) => {
          return(
            <NewsItem key={index}  item={item} />
          )
        })}

      </Container>
    );
  }
}

export default Newsfeed;
