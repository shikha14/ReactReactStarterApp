/**
 * Created by Shikha on 13/06/17.
 */

import { createStore  } from 'redux';

const initialStates = {
    result:1,
    lastValues: []
}

//Passing default value for states
const reducer = (state= initialStates,action) => {
    switch (action.type){
        case "INCREMENT":
            //Avoid chaning prev state
            //Always create a new one and then change it
            //state.result += action.payload

            //Returing new state by creating a new state
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues,action.payload]
            };
            break;
        case "DECREMENT":
            //Avoid chaning prev state
            //Always create a new one and then change it
            //state.result -= action.payload
            //Returing new state by creating a new state
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues,action.payload]
            };
            break;
    }
    return state;
}

//params reducer and state
//If reducer has a default value for state then we dont have to pass it in create store
const store = createStore(reducer)


// Use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => {
    console.log(store.getState());
});

//Dispatch action

store.dispatch({
    type: "INCREMENT",
    payload: 100
});

store.dispatch({
    type: "INCREMENT",
    payload: 200
});


store.dispatch({
    type: "DECREMENT",
    payload: 1
});