import React from 'react';
import { ReactChartJs } from '@cubetiq/react-chart-js';

function BarChartExample(props: any) {
    const { chartConfig } = props

    return (
        <ReactChartJs
            chartConfig={chartConfig}
        />
    );
}

export default BarChartExample;
