import React from 'react';

import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            { dataPoints.map(dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;