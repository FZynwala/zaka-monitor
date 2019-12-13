import './Card.css';
import React from 'react';
import { Link } from 'react-router-dom';
//import { max } from 'moment';


export default class Card extends React.Component {

	renderMaxTemp = () => {
		if(this.props.maxTemp) {
			var maxTemp = this.props.maxTemp.maxTemp;
			var time = this.props.maxTemp.time;
			console.log(this.props.maxTemp.maxTemp);
			return { maxTemp, time }
		}

		return 'Loding...'
	};

	renderMinTemp = () => {
		if(this.props.minTemp) {
			var minTemp = this.props.minTemp.minTemp;
			var time = this.props.minTemp.time;
			console.log(this.props.minTemp.minTemp);
			return { minTemp, time }
		}

		return 'Loding...'
	};
	 
	render() {
		if(this.props.data) {
			var { temp, time, hum } = this.props.data;
			
		}
		
		

		return (
				<div className="card">
					<div className="content">
						<div className="right floated mini ui header">
							{`${temp} \u2103`}
						</div>
						<div className="header">{this.props.title}</div>
						<div className="meta">Salon na górze</div>
						<div className="description">
							Humidity: {`${hum}%`} <br/>
							<span className="max-data">
								Max: {`${this.renderMaxTemp().maxTemp} \u2103`} 
								<span className="time">Time: {`${this.renderMaxTemp().time}`} </span><br/>
							</span>
							<span className="min-data">
								Min: {`${this.renderMinTemp().minTemp} \u2103`} 
								<span className="time">Time: {`${this.renderMinTemp().time}`} </span><br/>
							</span>
							Time: {`${time}`} <br/>
						</div>
						<div className="extra content">
							<div className="right floated top-margin">
								<Link to={`/chart/temp/${this.props.id}`} className="ui purple button">Wykres</Link>
							</div>
						</div>
					</div>
				</div>
		);
	};
}
