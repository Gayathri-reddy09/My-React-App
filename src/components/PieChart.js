import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
   
    const data = [10, 20, 30, 40, 50];

    
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

   
    const color = d3.scaleOrdinal(d3.schemeCategory10);

   
    const pie = d3.pie();

   
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

   
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    svg
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i))
      .attr('stroke', '#fff')
      .style('stroke-width', '2px');

    
    return () => {
      svg.selectAll('*').remove();
    };
  }, []); 

  return <div ref={chartRef}></div>;
};

export default PieChart;
