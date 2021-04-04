import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './components/app/App';
import ErrorBoundary from "./components/error/error-boundary";
import store from "./store";
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <ErrorBoundary>
                <Router>
                    <App/>
                </Router>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);