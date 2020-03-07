import React, { Component } from 'react';
import Circle from './circle';
import Description from './description';

class Element extends Component {

  render() {
    const infoElement = this.props.info;

    const propsGeneric = {
      ...infoElement,
      colorTable: `color-${infoElement.id}-1`,
      colorSmartphone: `color-${infoElement.id}-2`
    }

    return (
      <div className="grafica col-md-4">
        <Circle dataCircle={propsGeneric}></Circle>
        <Description dataCircle={propsGeneric}></Description>
        <div className="col-md-12">
          <hr />
        </div>
      </div>
    );
  }
}

export default Element;