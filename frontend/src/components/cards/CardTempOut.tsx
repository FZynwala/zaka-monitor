import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MaxTempItem, MinTempItem, SensorItem } from 'types';
import { formatTime } from '../../utils';
import './Card.css';

type CardTempOutProps = {
    data?: SensorItem;
    maxTemp?: MaxTempItem;
    minTemp?: MinTempItem;
    id: string;
    name?: string;
};

export const CardTempOut: React.FC<CardTempOutProps> = ({ data, maxTemp, minTemp, id }) => {
    const history = useHistory();

    const dotColor = (): string => {
        if (id === '1') {
            return 'yellow';
        } else if (id === '2') {
            return 'blue';
        } else if (id === '3' || id === '4') {
            return 'black';
        } else {
            return '';
        }
    };

    const onSettingClick = (): void => {
        history.push('/settings');
    };

    return (
        <div className="card background-color">
            <div className="content">
                <div className="right floated mini ui header">
                    <span className="temp-header">{`${data?.tempOut} \u2103`}</span>
                </div>
                <div className="header">Na zewnątrz:</div>
                <div className="meta">ID czujnika: {id}</div>
                <div className="description">
                    <span className="max-data">
                        Max: {maxTemp?.maxTemp ? `${maxTemp?.maxTemp} \u2103` : '--'}
                        <span className="time">
                            o godz: {maxTemp?.time ? `${formatTime(maxTemp?.time || '')}` : '--:--'}{' '}
                        </span>
                        <br />
                    </span>
                    <span className="min-data">
                        Min: {minTemp?.minTemp ? `${minTemp?.minTemp} \u2103` : '--'}
                        <span className="time">
                            o godz: {minTemp?.time ? `${formatTime(minTemp?.time)}` : '--:--'}{' '}
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
    );
};
