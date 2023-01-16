import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MaxTempItem, MinTempItem, SensorItem } from 'types';
import { formatTime } from '../../utils';
import './Card.css';

type CardProps = {
    data?: SensorItem;
    maxTemp?: MaxTempItem;
    minTemp?: MinTempItem;
    id: string;
    name?: string;
};

export const Card: React.FC<CardProps> = ({ data, maxTemp, minTemp, id, name }) => {
    const history = useHistory();

    const dotColor = () => {
        if (id === '1') {
            return 'yellow';
        } else if (id === '2') {
            return 'blue';
        } else if (id === '5') {
            return 'purple';
        } else {
            return '';
        }
    };

    const onSettingClick = () => {
        history.push('/settings');
    };

    return (
        <>
            <div className="card background-color">
                <div className="content">
                    <div className="right floated mini ui header">
                        <span className="temp-header">{data?.temp ? `${data.temp} \u2103` : '----'}</span>
                    </div>
                    <div className="header">{name}</div>
                    <div className="meta">ID czujnika: {id}</div>
                    <div className="description">
                        Wilgotność: {data?.hum ? `${data.hum}%` : '--'} <br />
                        <span className="max-data">
                            Max: {maxTemp?.maxTemp ? `${maxTemp?.maxTemp} \u2103` : '--'}
                            <span className="time">
                                o godz:{' '}
                                {formatTime(maxTemp?.time || '') ? `${formatTime(maxTemp?.time || '')}` : '--:--'}{' '}
                            </span>
                            <br />
                        </span>
                        <span className="min-data">
                            Min: {minTemp?.minTemp ? `${minTemp?.minTemp} \u2103` : '--'}
                            <span className="time">
                                o godz:{' '}
                                {formatTime(minTemp?.time || '') ? `${formatTime(minTemp?.time || '')}` : '--:--'}{' '}
                            </span>
                            <br />
                        </span>
                        Czas: {`${formatTime(data?.time || '')}`} <br />
                    </div>
                    <div className="extra content">
                        <div className="right floated top-margin">
                            <Link to={`/chart/temp/${id}`} className="ui green button">
                                Wykres
                            </Link>
                        </div>
                        <div onClick={onSettingClick} className="left floated">
                            <div className={`dot-${dotColor()}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
