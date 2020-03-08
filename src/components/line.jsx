import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ id, data, width, height }) => {

    const ref = useRef(null);
    const margin = 5;
    const h = height - 2 * margin, w = width - 2 * margin

    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.a)) 
        .range([margin, w])

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.b)]) 
        .range([h, margin])

   
    const line = d3.line()
        .x(d => x(d.a))
        .y(d => y(d.b))
        .curve(d3.curveBasis)

    useEffect(() => {

        const group = d3.select(ref.current);
        const groupWithData = group.selectAll("g").data(data);

        groupWithData.exit().remove();

        const groupWithUpdate = groupWithData
            .enter()
            .append("g")

        const path = groupWithUpdate
            .append("path")
            .merge(groupWithData.select("path"));

        path
            .attr("d", line(data))
            .attr("class", (d,i) => {
                return `line_${id}`;
            })
    }, [])

    return (
        <svg width={200} height={200}>
            <g ref={ref} transform={`translate(${100 / 4} ${200 / 2})`} />
        </svg>
    )
}

export default LineChart;