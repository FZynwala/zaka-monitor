import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import FooterMenu from './footer-menu/FooterMenu';
import { Header } from './header/Header';
import { HistoryComponent } from './history-component/HistoryComponent';
import { SensorsList } from './sensors-list/SensorList.js';
import { Settings } from './settings/Settings';
import { ShowChart } from './show-chart/ShowChart';

export const App = () => {
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
};
