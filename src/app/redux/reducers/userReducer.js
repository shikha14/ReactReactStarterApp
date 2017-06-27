/**
 * Created by Shikha on 27/06/17.
 */

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
export default userReducer;