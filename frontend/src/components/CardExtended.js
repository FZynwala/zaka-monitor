import React from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../utils';
import './card/Card.css';

export const CardExtended = (props) => {
    const renderMaxTemp = () => {
        if (props.maxTemp) {
            var maxTemp = props.maxTemp.maxTemp;
            var time = formatTime(props.maxTemp.time);
            return { maxTemp, time };
        }

        return 'Loading...';
    };

    const renderMinTemp = () => {
        if (props.minTemp) {
            var minTemp = props.minTemp.minTemp;
            var time = formatTime(props.minTemp.time);
            return { minTemp, time };
        }

        return 'Loding...';
    };

    const renderDoor = () => {
        if (props.data) return props.data.isOpen ? 'otwarte' : 'zamknięte';
    };

    const renderIsLightOn = () => {
        if (props.data) {
            return props.data.isLight ? 'ON' : 'OFF';
        }
    };

    const dotColor = () => {
        if (props.id === '1') {
            return 'yellow';
        } else if (props.id === '2') {
            return 'blue';
        } else if (props.id === '3') {
            return 'black';
        }
    };

    const onSettingClick = () => {
        props.history.push('/settings');
    };

    if (props.data) {
        var { temp, time, hum } = props.data;
    }

    return (
        <div className="card background-color">
            <div className="content">
                <div className="right floated mini ui header">
                    <span className="temp-header">{`${temp} \u2103`}</span>
                </div>
                <div className="header">Garaż</div>
                <div className="meta">ID czujnika: {props.id}</div>
                <div className="description">
                    Wilgotność: {`${hum}%`} <br />
                    <span className="max-data">
                        Max: {`${renderMaxTemp().maxTemp} \u2103`}
                        <span className="time">o godz: {`${renderMaxTemp().time}`} </span>
                        <br />
                    </span>
                    <span className="min-data">
                        Min: {`${renderMinTemp().minTemp} \u2103`}
                        <span className="time">o godz: {`${renderMinTemp().time}`} </span>
                        <br />
                    </span>
                    Drzwi: {renderDoor()} <br />
                    Światło: {renderIsLightOn()} <br />
                    Czas: {`${formatTime(time)}`} <br />
                </div>
                <div className="extra content">
                    <div className="right floated top-margin">
                        <Link to={`/chart/temp/${props.id}`} className="ui green button">
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
