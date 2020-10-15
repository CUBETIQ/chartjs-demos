import React from "react";
import { ChartProps } from "../demos/ChartProps";
import { LineChart } from "../demos/LineChart";
import "./chart.css";

/**
 * Primary UI component for user interaction
 */
export const BarChartDemo: React.FC<ChartProps> = ({
  chartConfig = {
    type: "bar",
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Monthly Payments",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
    data: {
      datasets: [
        {
          label: "Part-time",
          data: [5, 10, 30],
          fill: false,
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderWidth: 1,
        },
        {
          label: "Full-time",
          data: [10, 15, 45],
          fill: false,
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderWidth: 1,
        },
      ],
      labels: ["Jan", "Feb", "Mar"],
    },
  },
  ...props
}) => {
  return <LineChart chartConfig={chartConfig} />;
};
