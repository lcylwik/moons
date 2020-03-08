import React, { Component } from 'react';
import Circle from './circle';
import Description from './description';

class Element extends Component {

  render() {
    const infoElement = this.props.info;
    const wH = 200;
    const [ wInt, hInt] = [170, 89];

    const propsGeneric = {
      ...infoElement,
      colorTable: `color-${infoElement.id}-1`,
      colorSmartphone: `color-${infoElement.id}-2`
    }

    const propsCircle = {
      ...propsGeneric, wH, wInt, hInt
    }

    return (
      <div className="grafica col-md-4">
        <Circle dataCircle={propsCircle} ></Circle>
        <Description dataCircle={propsGeneric}></Description>
        <div className="col-md-12">
          <hr />
        </div>
      </div>
    );
  }
}

export default Element;