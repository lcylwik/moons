import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { dataChartDonut } from '../utils/transformDonutChart';
import Line from './line';
import Area from './area';

const Circle = ({ dataCircle }) => {

  const ref = useRef(null);
  const { dataLine, wH, wInt, hInt } = dataCircle;

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

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    path
      .attr("d", createArc)
      .attr("class", (d, i) => {
        return d.data.color;
      });

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr('y', -5)
      .text(dataCircle.name);
  }, [])

  return (
    <div className="centered">
      <svg width={wH} height={wH} >
        <Line data={dataLine} width={wInt} height={hInt} />
        <Area data={dataLine} width={wInt} height={hInt}/>
        <circle cx="91%" cy="94%" r="30" fill="white"/>
        <circle cx="9.3%" cy="94%" r="30" fill="white"/>
        <g
          ref={ref}
          transform={`translate(${wH / 2} ${wH / 2})`}
        />
      </svg>
    </div>
  );
}      

export default Circle;