/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "User Growth",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Analytics</h2>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Analytics;
