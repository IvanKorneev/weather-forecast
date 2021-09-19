import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <App/>
        </ErrorBoundry>
    </Provider>
   , document.getElementById('root')
);

