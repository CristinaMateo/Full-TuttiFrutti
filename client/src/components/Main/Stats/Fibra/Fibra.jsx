import React from "react";
import { Bar } from "react-chartjs-2";

const Fibra = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cantidad de fibra en frutas"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default Fibra;
