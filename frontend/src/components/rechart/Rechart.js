import moment from 'moment';
import React from 'react';
// import './index.css';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Rechart = (props) => {
    const chartData = [
        // { value: 17, time: moment().subtract(47, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(46, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(45, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(44, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(43, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(42, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(41, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(40, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(39, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(38, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(37, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(36, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(35, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(34, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(33, 'hours').toDate().getTime() },
        { value: 21, time: moment().subtract(32, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(31, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(30, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(29, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(28, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(27, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(26, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(25, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(24, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(23, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(22, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(21, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(20, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(19, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(18, 'hours').toDate().getTime() },
        { value: 17, time: moment().subtract(17, 'hours').toDate().getTime() },
        { value: 14, time: moment().subtract(16, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(15, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(14, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(13, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(12, 'hours').toDate().getTime() },
        { value: 21, time: moment().subtract(11, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(10, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(9, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(8, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(7, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(6, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(5, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(4, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(3, 'hours').toDate().getTime() },
        { value: 15, time: moment().subtract(2, 'hours').toDate().getTime() },
        { value: 20, time: moment().subtract(1, 'hours').toDate().getTime() },
        { value: 15, time: moment().toDate().getTime() },
    ];

    const xBegin = moment().subtract(1, 'days').toDate().getTime();
    console.log('##', xBegin, moment(xBegin).format('HH:mm'));
    console.log('###', new Date(), moment(new Date()).format());
    console.log('####', moment().subtract(1, 'days'));
    return (
        <div className="ct-chart">
            <ResponsiveContainer width="100%" height={200}>
                <LineChart margin={{ top: 20, right: 30, left: 0, bottom: 11 }} data={props.data}>
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
                    {/* <YAxis /> */}
                    <Line type="natural" dataKey="hum" stroke="#8884d8" dot={false} />
                    <YAxis dataKey="hum" name="hum" domain={['dataMin', 'dataMax']} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
