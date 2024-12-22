import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import CustomCard from '../Utilities/CustomCard';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ExpenseStats = ({ expenseStatistics }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (expenseStatistics && expenseStatistics.categories) {
      const categories = expenseStatistics.categories.map((item) => item.category);
      const amounts = expenseStatistics.categories.map((item) => item.amount);

      setChartData({
        labels: categories, // Pie chart labels
        datasets: [
          {
            data: amounts, // Pie chart data
            backgroundColor: [
              '#343C6A', // Color for Entertainment
              '#FC7900', // Color for Bill Expenses
              '#396AFF', // Color for Investments
              '#232323', // Color for Others
            ],
            borderWidth: 1,
            spacing: 8,
            offset: 8,
          },
        ],
      });
    }
  }, [expenseStatistics]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      datalabels: {
        color: '#fff', // Label color
        formatter: (value, context) => `${value}`, // Display the value
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
  };

  return (
    <CustomCard 
    children={chartData ? <Pie data={chartData} options={options} /> : <p>Loading...</p>}
    className="h-80 flex justify-center items-center"
    />
  );
};

export default ExpenseStats;
