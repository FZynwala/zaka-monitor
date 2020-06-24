import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import SensorsList from './SensorsList';
import { fetchToday } from '../actions';
import ShowChart from './ShowChart';
import Settings from './Settings';
import ColorPicker from './ColorPicker';
import chartsMenu from './chartsMenu';
import Notifications from './Notifications';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchToday();
    };

    render() {
        return (
            <div>
                <HashRouter>
                    <Header />
                    <Route path="/" exact component={SensorsList} />
                    <Route path="/chart/temp/:id" exact component={ShowChart} />
                    <Route path="/chart/hum/:id" exact component={ShowChart} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/colors" exact component={ColorPicker} />
                    <Route path="/charts" exact component={chartsMenu} />
                    <Route path="/notifications" exact component={Notifications} />
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
