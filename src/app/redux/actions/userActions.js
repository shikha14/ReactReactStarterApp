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

export function asyncSetName(name) {
    return dispatch =>{
        setTimeout(()=>{
            dispatch({
                type:"SET_NAME",
                payload:name
            })
        },2000)
    }
}

export function setNameUsingPromise(name) {
    return {
        type:"SET_NAME",
        payload:new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(name);
            },2000)

        })
    };
}