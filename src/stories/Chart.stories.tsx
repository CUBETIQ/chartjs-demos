import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { LineChartDemo, ChartProps } from "./LineChartDemo";

export default {
  title: "Example/Chart",
  component: LineChartDemo,
  argTypes: {},
} as Meta;

const Template: Story<ChartProps> = (args) => <LineChartDemo />;

export const LineChart = Template.bind({});
LineChart.args = {};