import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { LineChartDemo } from "./LineChartDemo";
import { BarChartDemo } from "./BarChartDemo";
import { ChartProps } from "../demos/ChartProps";

export default {
  title: "Example/Chart",
  component: LineChartDemo,
  argTypes: {},
} as Meta;

const LineChartDemoTemplate: Story<ChartProps> = (args) => <LineChartDemo />;

const BarChartDemoTemplate: Story<ChartProps> = (args) => <BarChartDemo />;

export const LineChart = LineChartDemoTemplate.bind({});
LineChart.args = { };

export const BarChart = BarChartDemoTemplate.bind({});
BarChart.args = { };