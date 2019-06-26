import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import SidebarItem from '../../../components/SidebarItem/'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarItems: this.props.items
    }
  }

  render() {

    return (
      <Container as='section' className="sidebarWrap" fluid={true}>
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
