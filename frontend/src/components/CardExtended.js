import './Card.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Card extends React.Component {

	renderMaxTemp = () => {
		if(this.props.maxTemp) {
			var maxTemp = this.props.maxTemp.maxTemp;
			var time = this.props.maxTemp.time;
			return { maxTemp, time }
		}

		return 'Loading...'
	};

	renderMinTemp = () => {
		if(this.props.minTemp) {
			var minTemp = this.props.minTemp.minTemp;
			var time = this.props.minTemp.time;
			return { minTemp, time }
		}

		return 'Loding...'
    };
    
    renderDoor = () => {
        if(this.props.data)
            return this.props.data.isOpen ? "otwarte" : "zamknięte";
    };

    renderIsLightOn = () => {
        if(this.props.data) {
            return  this.props.data.isLight ? "ON" : "OFF";
        };
	};
	
	renderTempOutdoor = () => {
		if(this.props.data) {
			return this.props.data.tempOut;
		};
	};

	dotColor = () => {
		if(this.props.id === '1') {
			return "yellow";
		} else if(this.props.id === '2') {
			return "blue"
		} else if(this.props.id === '3') {
			return "black"
		}
	};

	onSettingClick = () => {
		this.props.history.push('/settings');
	};
	 
	render() {
		if(this.props.data) {
			var { temp, time, hum } = this.props.data;	
        }
		
		return (
				<div className="card">
					<div className="content">
						<div className="right floated mini ui header">
							<span className="temp-header">{`${temp} \u2103`}</span>	
						</div>
						<div className="header">Garaż</div>
						<div className="meta">ID czujnika: {this.props.id}</div>
						<div className="description">
							Wilgotność: {`${hum}%`} <br/>
							<span className="max-data">
								Max: {`${this.renderMaxTemp().maxTemp} \u2103`} 
								<span className="time">o godz: {`${this.renderMaxTemp().time}`} </span><br/>
							</span>
							<span className="min-data">
								Min: {`${this.renderMinTemp().minTemp} \u2103`} 
								<span className="time">o godz: {`${this.renderMinTemp().time}`} </span><br/>
							</span>
                            Drzwi: {this.renderDoor()} <br/>
                            Światło: {this.renderIsLightOn()} <br/>
							Czas: {`${time}`} <br/>
						</div>
						<div className="extra content">
							<div className="right floated top-margin">
								<Link to={`/chart/temp/${this.props.id}`} className="ui purple button">Wykres</Link>
							</div>
							<div onClick={this.onSettingClick} className="left floated">
								<div className={`dot-${this.dotColor()}`}></div>
							</div>
						</div>
					</div>
				</div>
		);
	};
}

const mapStateToProps = (state) =>{
	return {
		names: state.names
	};
};

export default connect(mapStateToProps)(Card);
