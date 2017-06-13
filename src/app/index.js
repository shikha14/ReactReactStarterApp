/**
 * Created by Shikha on 13/06/17.
 */

import React from "react";
import {render} from "react-dom";


class App extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        return (
            <div className="container">
                    <h1> Hello </h1>
            </div>
    );
    }
}

render(<App />, window.document.getElementById('app'));

