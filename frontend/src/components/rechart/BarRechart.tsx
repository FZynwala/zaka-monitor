import React from 'react';
import { RainGaugeItem } from '../../types';
// import './index.css';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { formatTime } from 'utils';

type BarRechartProps = {
    data: RainGaugeItem[];
};

const tickColor = '#aeb1ba';

export const BarRechart: React.FC<BarRechartProps> = ({ data }) => {
    // const xBegin = isHistory ? 'dataMin' : moment().subtract(1, 'days').toDate().getTime();
    console.log(data);
    const preparedData = data.map((item) => {
        return { time: formatTime(item.time), rainGauge: Number(item.rainGauge) };
    });
    console.log(preparedData);

    return (
        <>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={preparedData} margin={{ right: 30, left: -10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" tick={{ fill: tickColor }} />
                    <YAxis tick={{ fill: tickColor }} />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} formatter={() => <span>{'rain gauge [ml]'}</span>} />
                    <Bar dataKey="rainGauge" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};
