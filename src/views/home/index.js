import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from './profile/';
import Newsfeed from './newsfeed/';
import Sidebar from './sidebar/';
import Resources from './resource/';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItems: [
        {
          id: 0,
          category: 'Resources',
          image: 'https://github.com/karlchvojka/carlton-one-test/blob/master/src/views/home/assets/myHrCloud.jpg?raw=true',
          title: 'My HR Cloud',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        },
        {
          id: 1,
          category: 'Rewards',
          image: 'https://github.com/karlchvojka/carlton-one-test/blob/master/src/views/home/assets/travelRewards.jpg?raw=true',
          title: 'Travel Rewards',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        },
        {
          id: 2,
          category: 'Resources',
          image: 'https://github.com/karlchvojka/carlton-one-test/blob/master/src/views/home/assets/faq.jpg?raw=true',
          title: 'Frequently Asked Questions',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        },
        {
          id: 3,
          category: 'Rewards',
          image: 'https://github.com/karlchvojka/carlton-one-test/blob/master/src/views/home/assets/memeberBenefits.jpg?raw=true',
          title: 'Member Benefits',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        },
        {
          id: 4,
          category: 'Resources',
          image: 'https://github.com/karlchvojka/carlton-one-test/blob/master/src/views/home/assets/salesCommission.jpg?raw=true',
          title: 'Sales Commissions',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        },
        {
          id: 5,
          category: 'Events',
          image: 'https://github.com/karlchvojka/carlton-one-test/blob/master/src/views/home/assets/2018gala.jpg?raw=true',
          title: '2018 Galla Awards',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        }
      ],
      userProfile: []
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://s3-us-west-1.amazonaws.com/gcodes-ext-logos/dev+test/member.json')
    .then(res => {
      const userProfile = res.data;
      this.setState({ userProfile });
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {

      let newsCopy = [...this.state.newsItems];
      let sidebarItems = [];
      let resourceItems = [];

      for (let i = 0; i < newsCopy.length; i++) {
        if (i <= 1) {
          sidebarItems.push({
            'id': newsCopy[i].id,
            'category': newsCopy[i].category,
            'image': newsCopy[i].image,
            'title': newsCopy[i].title,
            'body': newsCopy[i].body
          })
        } else {
          resourceItems.push({
            'id': newsCopy[i].id,
            'category': newsCopy[i].category,
            'image': newsCopy[i].image,
            'title': newsCopy[i].title,
            'body': newsCopy[i].body
          })
        }
      }

    return (
      <Container as='section' className="home" fluid={true}>
        <Row>
          <Col xl={3}>
            <Profile user={this.state.userProfile} />
          </Col>
          <Col xl={6}>
            <Newsfeed />
            <Row className="viewAllWrap" noGutters={true}>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <a href="/">View All Newsfeed Messages</a>
              </Col>
            </Row>
          </Col>
          <Col xl={3}>
            <Sidebar items={sidebarItems} />
          </Col>
        </Row>
        <Resources items={resourceItems} />
      </Container>
    );
  }
}

export default Home;
