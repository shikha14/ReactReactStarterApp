/**
 * Created by Shikha on 27/06/17.
 */


import React from "react";

export const Main = (props) => {
    return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={props.changeUserName}>
                            Change the Username
                        </button>
                    </div>
                </div>
            </div>
        );

}