import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger/src';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/main.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import { contentReducer, votesReducer } from './store/reducers';
import HowItWorks from './containers/HowItWorks/HowItWorks';
import PastTrials from './containers/PastTrials/PastTrials';
import LogIn from './containers/LogIn/LogIn';

const logger = createLogger();
const store = createStore(
    combineReducers({
        content: contentReducer,
        votes: votesReducer
    }),
    applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route path="/hot-it-works">
                        <HowItWorks/>
                    </Route>
                    <Route path="/past-trials">
                        <PastTrials/>
                    </Route>
                    <Route path="/log-in">
                        <LogIn/>
                    </Route>
                    <Route path="/">
                        <App/>
                    </Route>
                </Switch>
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
