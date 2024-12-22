import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import CustomCard from '../Utilities/CustomCard';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const BalanceHistory = ({ balances }) => {
  
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (balances && Object.keys(balances).length > 0) {
        setChartData({
            labels: balances.months || [],
            datasets: [
              {
                label: 'Balance',
                data: balances.balance || [],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#fff',
                tension: 0.4, // Smoothing effect
              },
            ],
          });
      }
  }, [balances])

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false, // Hide the legend
          },
    },
    scales: {
      x: {
        grid: {
          display: true, // Show grid lines for the X-axis
          color: '#e0e0e0',
        },
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        grid: {
          display: true, // Show grid lines for the Y-axis
          color: '#e0e0e0',
        },
        title: {
          display: true,
          text: 'Balance ($)',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <CustomCard 
      children={chartData ? <Line data={chartData} options={options} /> : null}
      className="h-80 flex justify-center items-center"
    />
  );
};

export default BalanceHistory;
