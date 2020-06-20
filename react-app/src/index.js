import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
  <Badge firstName="Sant" lastName="Cárdenas" jobTittle="System engineering" twitter="Don´t have :)"></Badge>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
