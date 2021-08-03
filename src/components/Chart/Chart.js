import React from 'react';

import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
    return (
        <div className="chart">
            { dataPoints.map(dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;