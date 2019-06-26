import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

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
      <Row as='section' className="sidebarWrap">
        {this.state.sidebarItems.map((item) => {
          return(
            <SidebarItem key={item.id} category={item.category} image={item.image} title={item.title} body={item.body} />
          )
        })}
      </Row>
    );
  }
}

export default Sidebar;
