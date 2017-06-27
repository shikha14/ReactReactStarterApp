/**
 * Created by Shikha on 27/06/17.
 */
export function setName(name){
    return{
        type:"SET_NAME",
        payload:name
    };
}

export function setId(Id){
    return{
        type:"SET_ID",
        payload:Id
    };
}