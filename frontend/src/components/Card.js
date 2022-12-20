import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchName } from '../actions';
import './Card.css';

const Card = (props) => {
    const renderMaxTemp = () => {
        if (props.maxTemp) {
            var maxTemp = props.maxTemp.maxTemp;
            var time = props.maxTemp.time;
            return { maxTemp, time };
        }

        return 'Loading...';
    };

    const renderMinTemp = () => {
        if (props.minTemp) {
            var minTemp = props.minTemp.minTemp;
            var time = props.minTemp.time;
            return { minTemp, time };
        }

        return 'Loding...';
    };

    const dotColor = () => {
        if (props.id === '1') {
            return 'yellow';
        } else if (props.id === '2') {
            return 'blue';
        }
    };

    const onSettingClick = () => {
        props.history.push('/settings');
    };

    if (props.data) {
        var { temp, time, hum } = props.data;
    }

    return (
        <>
            <div className="card background-color">
                <div className="content">
                    <div className="right floated mini ui header">
                        <span className="temp-header">{temp ? `${temp} \u2103` : '----'}</span>
                    </div>
                    <div className="header">{props.name}</div>
                    <div className="meta">ID czujnika: {props.id}</div>
                    <div className="description">
                        Wilgotność: {hum ? `${hum}%` : '-'} <br />
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
                        Czas: {`${time}`} <br />
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
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        names: state.names,
    };
};

export default connect(mapStateToProps, { fetchName })(Card);
