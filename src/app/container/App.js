/**
 * Created by Shikha on 27/06/17.
 */

import React from "react";
import { User } from "../components/User";
import { Main } from "../components/Main";
import { connect } from "react-redux";
import { asyncSetName, setNameUsingPromise } from "../redux/actions/userActions"


class App extends React.Component {
    constructor() {
        super();

    }


    render() {
        return (
            <div className="container">
                   <Main changeUserName={ () => this.props.setNameUsingPromise("New name")} />
                <User username={this.props.user.name}/>
            </div>
    );
    }
}

const mapStateToProps = (state) => {
  return{
      user:state.userReducer,
      math:state.mathReducer
  }
};

const mapDispatchToProps = (dispatch) => {
    return{
       setName:(name) =>{
           dispatch(asyncSetName(name));
       },
        setNameUsingPromise:(name) =>{
            dispatch(setNameUsingPromise(name));
        }
    }
};

export default  connect(mapStateToProps,mapDispatchToProps)(App);