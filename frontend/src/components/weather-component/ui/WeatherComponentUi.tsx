import { Statistic } from 'antd';
import { BarRechart } from 'components/rechart/BarRechart';
import { StatisticContainer } from 'components/statistic-container/StatisticContainer';
import React from 'react';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Weather } from 'types';
import '../WeatherComponent.css';

type WeatherComponentUiProps = {
    weather?: Weather;
};

export const WeatherComponentUi: React.FC<WeatherComponentUiProps> = ({ weather }) => {
    console.log(weather);

    if (!weather) return null;

    return (
        <div className={'container'}>
            <StatisticContainer>
                <Statistic
                    valueStyle={{ color: '#aeb1ba' }}
                    title={<span style={{ color: '#aeb1ba' }}>wind speed</span>}
                    value={`${weather.windSpeed[weather.windSpeed.length - 1].windSpeed} km/h`}
                />
                <Statistic
                    valueStyle={{ color: '#aeb1ba', display: 'flex', justifyContent: 'center' }}
                    title={<span style={{ color: '#aeb1ba' }}>wind vane</span>}
                    value={`${weather.windVane[weather.windVane.length - 1].windVane}`}
                />
                <Statistic
                    valueStyle={{ color: '#aeb1ba' }}
                    title={<span style={{ color: '#aeb1ba' }}>rain gauge</span>}
                    value={`${weather.rainGauge[weather.rainGauge.length - 1].rainGauge} ml`}
                />
            </StatisticContainer>
            <BarRechart data={weather.rainGauge} />
        </div>
    );
};
