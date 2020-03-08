import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Area = ({ id, data, width, height }) => {

    const ref = useRef(null);
    const margin = 5;
    const h = height - 2 * margin, w = width - 2 * margin

    const x = d3.scaleLinear()
        .domain(d3.extent(data, d => d.a))
        .range([margin, w])

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.b)])
        .range([h, margin]);

    const area = d3.area()
        .x(d => x(d.a))
        .y0(height)
        .y1(d => y(d.b))
        .curve(d3.curveBasis);

    useEffect(() => {
        const group = d3.select(ref.current);
        const groupWithData = group.selectAll("g").data(data);
        groupWithData.exit().remove();

        const groupWithUpdate = groupWithData.enter().append("g")

        groupWithUpdate.append("clipPath")
            .attr("id", `MiClip_${id}`)
            .append("path").attr("d", area(data))

        groupWithUpdate.append("circle")
            .attr("id", "circulo_1")
            .attr("cx", "75")
            .attr("cy", "0")
            .attr("r", "85")

        groupWithUpdate.append("circle")
            .attr("id", "circulo_2")
            .attr("cx", "75")
            .attr("cy", "0")
            .attr("r", "90")

        groupWithUpdate.append("use")
            .attr("clip-path", `url(#MiClip_${id})`)
            .attr("xlink:href", "#circulo_1")
            .attr("class", (d, i) => {
                return `curve_${id}`;
            })
    }, [data, area, id]);


    return (
        <svg width={200} height={200}>
            <g ref={ref} transform={`translate(${100 / 4} ${200 / 2})`} />
        </svg>

    )
}

export default Area;