/**
 * Created by Shikha on 27/06/17.
 */

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
export default mathReducer;
