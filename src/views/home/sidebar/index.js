import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SidebarItem from '../../../components/SidebarItem/'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarItems: [
        {
          id: 0,
          category: 'Resources',
          image: './assets/myHrCloud.jpg',
          title: 'My HR Cloud',
          body: 'Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium'
        }
      ]
    }
  }

  render() {
    return (
      <Container as='section' className="sidebarWrap">
        {this.state.sidebarItems.map((item) => {
          return(
            <SidebarItem key={item.id} category={item.category} image={item.image} title={item.title} body={item.body} />
          )
        })}
      </Container>
    );
  }
}

export default Sidebar;
