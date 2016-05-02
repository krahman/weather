import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './components/main';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

ReactDOM.render(
	<MainApp />, document.querySelector('.container')
);