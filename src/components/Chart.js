
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {

    const data = [20, 40, 60, 80, 100];

  
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };

   
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

  
    const xScale = d3.scaleBand().domain(data.map((d, i) => i)).range([0, width]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

  
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', 'steelblue');

   
    const xAxis = d3.axisBottom(xScale);
    svg.append('g').attr('transform', `translate(0,${height})`).call(xAxis);


    const yAxis = d3.axisLeft(yScale);
    svg.append('g').call(yAxis);

    
    return () => {
      svg.selectAll('*').remove();
    };
  }, []); 

  return <div ref={chartRef}></div>;
};

export default Chart;
