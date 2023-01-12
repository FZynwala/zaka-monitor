import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utils';
import './Card.css';

export const Card = ({ data, maxTemp, minTemp, title, id, history, name }) => {
    const renderMaxTemp = (temp) => {
        if (temp) {
            const maxTemp = temp.maxTemp;
            const time = moment(temp.time).format('HH:mm');
            return { maxTemp, time };
        }

        return 'Loading...';
    };

    const renderMinTemp = (temp) => {
        if (temp) {
            const minTemp = temp.minTemp;
            const time = moment(temp.time).format('HH:mm');
            return { minTemp, time };
        }

        return 'Loding...';
    };

    const dotColor = () => {
        if (id === '1') {
            return 'yellow';
        } else if (id === '2') {
            return 'blue';
        } else if (id === '5') {
            return 'purple';
        }
    };

    const onSettingClick = () => {
        history.push('/settings');
    };

    if (data) {
        var { temp, time, hum } = data;
    }

    return (
        <>
            <div className="card background-color">
                <div className="content">
                    <div className="right floated mini ui header">
                        <span className="temp-header">{temp ? `${temp} \u2103` : '----'}</span>
                    </div>
                    <div className="header">{name}</div>
                    <div className="meta">ID czujnika: {id}</div>
                    <div className="description">
                        Wilgotność: {hum ? `${hum}%` : '--'} <br />
                        <span className="max-data">
                            Max: {renderMaxTemp(maxTemp).maxTemp ? `${renderMaxTemp(maxTemp).maxTemp} \u2103` : '--'}
                            <span className="time">
                                o godz: {renderMaxTemp(maxTemp).time ? `${renderMaxTemp(maxTemp).time}` : '--:--'}{' '}
                            </span>
                            <br />
                        </span>
                        <span className="min-data">
                            Min: {renderMinTemp(minTemp).minTemp ? `${renderMinTemp(minTemp).minTemp} \u2103` : '--'}
                            <span className="time">
                                o godz: {renderMinTemp(minTemp).time ? `${renderMinTemp(minTemp).time}` : '--:--'}{' '}
                            </span>
                            <br />
                        </span>
                        Czas: {`${formatTime(time)}`} <br />
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
