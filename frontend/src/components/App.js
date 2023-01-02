import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { fetchName, fetchToday } from '../actions';
import './App.css';
import FooterMenu from './footer-menu/FooterMenu';
import Header from './Header';
import HistoryComponent from './history-component/HistoryComponent';
import SensorsList from './sensors-list/SensorsList';
import Settings from './Settings';
import ShowChart from './ShowChart';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchToday();
        this.props.fetchName();
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <Header />
                    <Route path="/" exact component={SensorsList} />
                    <Route path="/chart/temp/:id" exact component={ShowChart} />
                    <Route path="/chart/hum/:id" exact component={ShowChart} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/history" exact component={HistoryComponent} />
                    <FooterMenu />
                </HashRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sensor01: state.data.sensor01,
    };
};

export default connect(mapStateToProps, { fetchToday, fetchName })(App);
