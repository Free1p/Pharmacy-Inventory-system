import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type,
        data,
        options,
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
