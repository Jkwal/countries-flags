import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import {persistor, store} from "./store";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename='/countries-flags'>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
