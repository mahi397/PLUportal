import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./App.js";
// import "./index.css";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
