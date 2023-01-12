import * as dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import 'semantic-ui-css/semantic.min.css';
import { App } from './components/App';
import { store } from './store';
dotenv.config();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),
);
