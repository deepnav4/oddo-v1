import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderColor: 'rgb(229, 231, 235)',
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: function(context) {
            return context.raw + 'K';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgb(243, 244, 246)',
        },
        ticks: {
          callback: function(value) {
            return value + 'K';
          },
          font: {
            size: 11,
          },
          padding: 10,
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11,
          },
          padding: 10,
        },
        border: {
          display: false
        }
      }
    }
  };

  const data = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        data: [15, 25, 20, 30, 15, 25],
        backgroundColor: [
          '#94A3B8',
          '#94A3B8',
          '#94A3B8',
          '#22C55E',
          '#EF4444',
          '#94A3B8'
        ],
        borderRadius: 4,
        borderSkipped: false,
      }
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Bar options={options} data={data} />
    </div>
  );
}; 