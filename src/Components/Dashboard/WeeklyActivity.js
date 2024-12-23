import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import CustomCard from '../Utilities/CustomCard';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const WeeklyActivity = ({ activity }) => {
  // Chart data state
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (activity && Object.keys(activity).length > 0) {
      setChartData({
        labels: activity.days || [], // X-axis labels
        datasets: [
          {
            type: 'bar',
            label: 'Deposits',
            data: activity.deposits || [],
            backgroundColor: '#232323', 
            barThickness: 20,
          },
          {
            type: 'bar',
            label: 'Withdrawals',
            data: activity.withdrawals || [],
            backgroundColor: '#396AFF', 
            barThickness: 20,
          },
        ],
      });
    }
  }, [activity]);

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, // Show legend
        position: 'top', // Place legend at the top
      },
      tooltip: {
        mode: 'index',
        intersect: false, // Allow hovering between bars
      },
      title: {
        display: true, // Show title
        text: 'Deposits vs Withdrawals', // Title text
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        beginAtZero: true, // Y-axis starts at zero
      },
    },
    elements: {
        bar: {
          borderWidth: 1,
          borderRadius: 10, // Optional: Round the corners of bars
        },
      },
  };

  return (
    <CustomCard 
    children={chartData ? <Bar data={chartData} options={options} /> : null}
    className="h-80 flex justify-center items-center"
    />
  );
};

export default WeeklyActivity;
