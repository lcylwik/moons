import React, { Component } from 'react';
import Circle from './circle';
import Description from './description';

class Element extends Component {

  render() {
    const infoElement = this.props.info;

    return (
      <div className="grafica col-md-4">
        <Circle dataCircle={infoElement}></Circle>
        <Description dataCircle={infoElement}></Description>
        <div className="col-md-12">
          <hr />
        </div>
      </div>
    );
  }
}

export default Element;