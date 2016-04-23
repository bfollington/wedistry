import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

try {
    window.global = global;
} catch (err) {
    window.global = {};
}

var appMount = document.querySelector("#app");

if (appMount) {
    ReactDOM.render(
        <App />,
        appMount
    );
}
