import React from "react";
import { LineChart } from "../demos/LineChart";
import "./chart.css";

export interface ChartProps {
  chartConfig?: any;
}

/**
 * Primary UI component for user interaction
 */
export const LineChartDemo: React.FC<ChartProps> = ({
  chartConfig = {
    type: "line",
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
    },
    data: {
      datasets: [
        {
          label: "Part-time",
          data: [5, 10, 30],
          fill: false,
          borderColor: "#ff6384",
        },
        {
          label: "Full-time",
          data: [10, 15, 45],
          fill: false,
          borderColor: "#36a2eb",
        },
      ],
      labels: ["Jan", "Feb", "Mar"],
    },
  },
  ...props
}) => {
  return <LineChart chartConfig={chartConfig} />;
};
