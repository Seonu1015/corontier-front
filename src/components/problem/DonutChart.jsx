import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RadialChart } from 'react-vis';

const DonutChart = ({ clearcnt }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const formattedData = [
            { angle: clearcnt.lv0, label: 'Lv.0' },
            { angle: clearcnt.lv1, label: 'Lv.1' },
            { angle: clearcnt.lv2, label: 'Lv.2' },
            { angle: clearcnt.lv3, label: 'Lv.3' },
            { angle: clearcnt.lv4, label: 'Lv.4' },
            { angle: clearcnt.lv5, label: 'Lv.5' },
        ];

        setChartData(formattedData);
    }, [clearcnt]);

    return (
        <div>
            <RadialChart
                data={chartData}
                width={170}
                height={170}
                innerRadius={50}
                radius={80}
                colorType="category"
            />
        </div>
    );
};

export default DonutChart