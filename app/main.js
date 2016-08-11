// var greeter = require('./Greeter');

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

// document.getElementById('root').appendChild(greeter());

render(<Greeter />, document.getElementById('root'));