/**
 * Created by Shikha on 13/06/17.
 */


import { createStore,combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

//Passing default value for states
const mathReducer = (state= {
    result:1,
    lastValues: []
},action) => {
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


//Passing default value for states
const userReducer = (state= {
    name:"Shikha",
    id: 1
},action) => {
    switch (action.type){
        case "SET_NAME":
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                name: action.payload
            };
            break;
        case "SET_ID":
            state ={
                //Take all property and add to this new object using spread operator
                ...state,
                age: action.payload

            };
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action)=>{
    console.log("Logged Action",action);
    next(action);

}

//params reducer and state
//If reducer has a default value for state then we dont have to pass it in create store
const store = createStore(combineReducers({ mathReducer,userReducer}),
    {},
    applyMiddleware(myLogger,logger)
);


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

store.dispatch({
    type: "SET_ID",
    payload: 205111011
});

store.dispatch({
    type: "SET_NAME",
    payload: "Shikha"
});
