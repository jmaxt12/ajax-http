import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

axios.interceptors.request.use(request => {
    return request
}, error => {
    Promise.reject(error)
})

axios.interceptors.request.use(response => {
    return response;
}, error => {
    Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
