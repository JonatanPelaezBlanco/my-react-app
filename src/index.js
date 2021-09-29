import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldApp from './HelloWorldApp';

import './index.css'


const divRoot = document.querySelector('#root');

ReactDOM.render(<HelloWorldApp />, divRoot);