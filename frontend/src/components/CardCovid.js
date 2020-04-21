import './CardCovid.css';
import React from 'react';
import { connect } from 'react-redux';


class CardCovid extends React.Component {

    render() {
        console.log(this.props);
        if(this.props.covid.world) {
            var worldCases = this.props.covid.world.cases;
            var worldDeaths = this.props.covid.world.deaths;
        };
        
        if(this.props.covid.poland) {
            var polandCases = this.props.covid.poland.cases;
            var polandDeaths = this.props.covid.poland.deaths;	
            var polandRecovery = this.props.covid.poland.recovered;
            var polandTodayCases = this.props.covid.poland.todayCases;
            var polandTodayDeaths = this.props.covid.poland.todayDeaths;
        }
        return (
            <div className="card" id="card">
                <div className="content">
                    <div className="header">COVID Stats</div>
                    <div className="meta">
                        Świat:
                    </div>
                    <div className="description">
                        Potwierdzone przypadki: {`${worldCases}`} <br/>
                        Zgony: {`${worldDeaths}`}
                    </div>
                    <hr className="line"/>
                    <div className="meta">
                        Polska:
                    </div>
                    <div className="description">
                        <span id="bold">Potwierdzone przypadki: </span> {`${polandCases}`} <br/>
                        Zgony: {`${polandDeaths}`} <br/>
                        Wyzdrowienia: {`${polandRecovery}`} <br/>
                        <br/>
                        Dzisiaj potwierdzone przypadki: {`${polandTodayCases}`} <br/>
                        Dzisiaj zgony: {`${polandTodayDeaths}`}
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) =>{
	return {
		covid: state.covid
	};
};

export default connect(mapStateToProps, {})(CardCovid);