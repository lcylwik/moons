import React, { Component } from 'react';
import Circle from './circle';
import Description from './description';

class Element extends Component {

  render() {
    const infoElement = this.props.info;

    return (
      <div className="element">
          {infoElement.name}
          <Circle dataCircle={infoElement}></Circle>
          <Description dataCircle={infoElement}></Description>
      </div>
    );
  }
}

export default Element;