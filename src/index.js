import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import App from './App.js'
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <StateProvider initialSate={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </Router>
    )