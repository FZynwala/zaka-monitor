import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatTime } from '../utils';
import './card/Card.css';

class Card extends React.Component {
    renderMaxTemp = () => {
        if (this.props.maxTemp) {
            var maxTemp = this.props.maxTemp.maxTemp;
            var time = formatTime(this.props.maxTemp.time);
            return { maxTemp, time };
        }

        return 'Loading...';
    };

    renderMinTemp = () => {
        if (this.props.minTemp) {
            var minTemp = this.props.minTemp.minTemp;
            var time = formatTime(this.props.minTemp.time);
            return { minTemp, time };
        }

        return 'Loding...';
    };

    dotColor = () => {
        if (this.props.id === '1') {
            return 'yellow';
        } else if (this.props.id === '2') {
            return 'blue';
        } else if (this.props.id === '3' || this.props.id === '4') {
            return 'black';
        }
    };

    onSettingClick = () => {
        this.props.history.push('/settings');
    };

    render() {
        if (this.props.data) {
            var { tempOut, time } = this.props.data;
        }

        return (
            <div className="card background-color">
                <div className="content">
                    <div className="right floated mini ui header">
                        <span className="temp-header">{`${tempOut} \u2103`}</span>
                    </div>
                    <div className="header">Na zewnątrz:</div>
                    <div className="meta">ID czujnika: {this.props.id}</div>
                    <div className="description">
                        <span className="max-data">
                            Max: {this.renderMaxTemp().maxTemp ? `${this.renderMaxTemp().maxTemp} \u2103` : '--'}
                            <span className="time">o godz: {`${this.renderMaxTemp().time}`} </span>
                            <br />
                        </span>
                        <span className="min-data">
                            Min: {this.renderMinTemp().minTemp ? `${this.renderMinTemp().minTemp} \u2103` : '--'}
                            <span className="time">
                                o godz: {this.renderMinTemp().time ? `${this.renderMinTemp().time}` : '--:--'}{' '}
                            </span>
                            <br />
                        </span>
                        Czas: {`${formatTime(time)}`} <br />
                    </div>
                    <div className="extra content">
                        <div className="right floated top-margin">
                            <Link to={`/chart/temp/${this.props.id}`} className="ui green button">
                                Wykres
                            </Link>
                        </div>
                        <div onClick={this.onSettingClick} className="left floated">
                            <div className={`dot-${this.dotColor()}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        names: state.names,
    };
};

export default connect(mapStateToProps)(Card);
