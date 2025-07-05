import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
          padding: 20,
          font: {
            size: 12,
          }
        }
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
    labels,
    datasets: [
      {
        label: 'This year',
        data: [10, 8, 12, 15, 25, 20, 22],
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Last year',
        data: [8, 15, 16, 12, 8, 10, 18],
        borderColor: '#EF4444',
        borderDash: [5, 5],
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ height: '300px' }}>
      <Line options={options} data={data} />
    </div>
  );
}; 