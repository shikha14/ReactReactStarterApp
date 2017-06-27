/**
 * Created by Shikha on 13/06/17.
 */

import React from "react";
import {render} from "react-dom";
import App from "./container/App";
import { Provider } from "react-redux";

import store from './redux/store';





render(<Provider store={store} >
        <App />
    </Provider>,
    window.document.getElementById('app')
);




