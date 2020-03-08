import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { dataChartDonut, transformNumber } from '../../utils/transformData';
import Line from './line';
import Area from './area';

const Circle = ({ dataCircle }) => {

  const ref = useRef(null);
  const { dataLine, wH, wInt, hInt, id,
    total, name, currency } = dataCircle;

  const createPie = d3
    .pie()
    .value(d => d.count)
    .sort(null);

  const createArc = d3
    .arc()
    .outerRadius(90)
    .innerRadius(100);

  useEffect(() => {
    const dataChart = dataChartDonut(dataCircle);
    const data = createPie(dataChart);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);
    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData.enter()
      .append("g")

    const path = groupWithUpdate.append("path")
      .merge(groupWithData.select("path.arc"));

    path.attr("d", createArc)
      .attr("class", (d, i) => {
        return d.data.color;
      });

    const text = groupWithUpdate.append("text")
      .merge(groupWithData.select("text"));

    text.attr('y', -30).text(name).attr('class','total');

    const textTotal = groupWithUpdate.append("text")
      .merge(groupWithData.select("text"));

    textTotal.attr("text-anchor", "middle")
      .attr('y', -7).text(transformNumber(total, currency))

  }, [])

  return (
    <div className="centered">
      <svg width={wH} height={wH} >
        <Area id={id} data={dataLine} width={wInt} height={hInt} />
        <Line id={id} data={dataLine} width={wInt} height={hInt} />
        <g
          ref={ref}
          transform={`translate(${wH / 2} ${wH / 2})`}
        />
      </svg>
    </div>
  );
}

export default Circle;