import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/app/App';
import ErrorBoundary from "./components/error/error-boundary";
import ExchangeService from "./services/exchange-service";
import {ExchangeServiceContext} from "./components/exchange-service-context/exchange-service-context";
import store from "./store";
import './index.css';

const exchangeService = new ExchangeService();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <ErrorBoundary>
                <ExchangeServiceContext.Provider value={exchangeService}>
                    <Router>
                        <App/>
                    </Router>
                </ExchangeServiceContext.Provider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);