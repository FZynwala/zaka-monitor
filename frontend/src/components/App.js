import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import SensorsList from './SensorsList';
import { fetchToday } from '../actions';
import Chart from './chart';
import history from '../history';
import ShowChart from './ShowChart';
import Settings from './Settings';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchToday();
    };

    prepareTempToChart = () => {
        if(this.props.sensor01) {
            let dataTemp = this.props.sensor01.map(obj => obj.temp);
            let dataTime = this.props.sensor01.map(obj => obj.time);
            console.log(dataTemp);
            return dataTemp;
        }
    }

    prepareTimeToChart = () => {
        if(this.props.sensor01) {
            let dataTime = this.props.sensor01.map(obj => obj.time);
            
            return dataTime;
        }
    }

    render() {
        return (
            <div>
                
                <Header />
                <HashRouter history={history}>
                    <Route path="/" exact component={SensorsList} />
                    <Route path="/chart/temp/:id" exact component={ShowChart} />
                    <Route path="/chart/hum/:id" exact component={ShowChart} />
                    <Route path="/settings" exact component={Settings} />
                </HashRouter>
                
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        sensor01: state.data.sensor01
    }
}


export default connect(mapStateToProps, { fetchToday })(App);
