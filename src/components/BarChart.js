import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    
    const data = [40, 120, 60, 180, 90];

   
    const width = 400;
    const height = 200;

   
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

  
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 80)
      .attr('y', d => height - d)
      .attr('width', 70)
      .attr('height', d => d)
      .attr('fill', 'blue');
  }, []);

  return <div ref={chartRef}></div>;
};

export default BarChart;
