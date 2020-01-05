import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CompanyStore from './stores/CompanyStore';
import UsersStore from './stores/UsersStore';

const stores = {
    CompanyStore,
    UsersStore,
}

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
