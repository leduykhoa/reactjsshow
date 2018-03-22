import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
