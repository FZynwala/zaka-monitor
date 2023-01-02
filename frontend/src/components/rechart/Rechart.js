import moment from 'moment';
import React from 'react';
// import './index.css';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Rechart = ({ data, type, isHistory = false, isTempOut = false }) => {
    const xBegin = isHistory ? 'dataMin' : moment().subtract(1, 'days').toDate().getTime();
    const tickColor = '#aeb1ba';

    return (
        <div>
            <ResponsiveContainer width="100%" height={200} viewBox={'10 0 320 200'}>
                <LineChart
                    margin={{ top: 20, right: 1, left: -10, bottom: 11 }}
                    data={data}
                    viewBox={'10 0 320 200'}
                    className={'u-color-chart'}
                >
                    <CartesianGrid strokeDasharray="3 3" strokeFill={tickColor} />
                    <XAxis
                        dataKey="time"
                        domain={[xBegin, 'dataMax']}
                        name="Time"
                        tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                        type="number"
                        angle={-50}
                        textAnchor={'end'}
                        allowDataOverflow={true}
                        minTickGap={2}
                        tickCount={6}
                        tick={{ fill: tickColor, tickLine: tickColor }}
                    />
                    <Tooltip
                        labelFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
                        labelStyle={{ 'font-weight': 'bold' }}
                    />
                    <Line
                        type="natural"
                        dataKey={type}
                        stroke="#8884d8"
                        dot={false}
                        strokeWidth={2}
                        animationEasing={'ease-in-out'}
                        name={type}
                        yAxisId={'yTemp'}
                    />
                    {isHistory && !isTempOut && (
                        <>
                            <Line
                                type="natural"
                                dataKey={'hum'}
                                stroke="#54a0ff"
                                dot={false}
                                strokeWidth={2}
                                animationEasing={'ease-in-out'}
                                name={'hum'}
                                yAxisId={'yHum'}
                            />
                            <YAxis
                                yAxisId={'yHum'}
                                orientation={'right'}
                                domain={['dataMin', 'dataMax']}
                                type={'number'}
                                tick={{ fill: tickColor, tickLine: tickColor }}
                            />
                            <Legend verticalAlign="top" height={36} />
                        </>
                    )}
                    <YAxis
                        yAxisId={'yTemp'}
                        orientation={'left'}
                        domain={['dataMin', 'dataMax']}
                        type={'number'}
                        tick={{ fill: tickColor, tickLine: tickColor }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
