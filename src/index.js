// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {ThemeProvider} from 'styled-components'
import App from "./App";
import { worker } from "./mocks/browser";
import MyStyles from './components/MyStyles'
worker.start();

ReactDOM.render(
    <ThemeProvider theme={MyStyles}>
        <App />
    </ThemeProvider> ,
     document.getElementById("root"));
