import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import ResourceItem from './resourceItem/';

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceItems: this.props.items
    }
  }

  render() {
    return (
      <Row as='section' className="resourceWrap">
        {this.state.resourceItems.map((item) => {
          return(
            <ResourceItem key={item.id} category={item.category} image={item.image} title={item.title} body={item.body} />
          )
        })}
      </Row>
    );
  }
}

export default Resources;
