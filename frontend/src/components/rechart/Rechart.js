import moment from 'moment';
import React from 'react';
// import './index.css';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Rechart = ({ data, type }) => {
    const xBegin = moment().subtract(1, 'days').toDate().getTime();
    return (
        <div>
            <ResponsiveContainer width="100%" height={200} viewBox={'10 0 320 200'}>
                <LineChart margin={{ top: 20, right: 1, left: -10, bottom: 11 }} data={data} viewBox={'10 0 320 200'}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="time"
                        domain={[xBegin, 'dataMax']}
                        name="Time"
                        tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                        type="number"
                        angle={-50}
                        textAnchor={'end'}
                        allowDataOverflow={true}
                    />
                    <Tooltip />
                    <Line
                        type="natural"
                        dataKey={type}
                        stroke="#8884d8"
                        dot={false}
                        strokeWidth={2}
                        animationEasing={'ease-in-out'}
                    />
                    <YAxis dataKey={type} name={type} domain={['auto', 'dataMax']} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
