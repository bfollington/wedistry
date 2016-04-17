import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

try {
    window.global = global;
} catch (err) {
    window.global = {};
}

ReactDOM.render(
    <App />,
    document.querySelector("#app")
);
