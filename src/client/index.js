import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.hydrate(<App />, document.getElementById('root'));
