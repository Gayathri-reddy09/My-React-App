import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
 
    const data = [
      { date: '2022-01-01', value: 30 },
      { date: '2022-01-02', value: 40 },
      { date: '2022-01-03', value: 20 },
      { date: '2022-01-04', value: 45 },
      
    ];

  
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

  
    const parseDate = d3.timeParse('%Y-%m-%d');
    data.forEach(d => {
      d.date = parseDate(d.date);
    });

   
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    const line = d3
      .line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

   
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

   
    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);

  
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

   
    svg.append('g').call(d3.axisLeft(yScale));

  
    return () => {
      svg.selectAll('*').remove();
    };
  }, []); 

  return <div ref={chartRef}></div>;
};

export default LineChart;
