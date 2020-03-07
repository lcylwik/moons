import React, { useEffect, useRef } from 'react';
import { dataChartDonut } from '../utils/transformDonutChart';
import * as d3 from 'd3';

const Circle = ({ dataCircle }) => {

  const ref = useRef(null);

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
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", createArc)
      .attr("class", (d, i) => {
        return d.data.color;
      });

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr('y', 10)
      .text(dataCircle.name);

  }, [])

  return (
    <div className="centered">
      <svg width={200} height={200}>
        <g
          ref={ref}
          transform={`translate(${200 / 2} ${200 / 2})`}
        />
      </svg>
    </div>
  );
}

export default Circle;