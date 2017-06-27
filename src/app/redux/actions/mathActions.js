/**
 * Created by Shikha on 27/06/17.
 */

export function addNumber(number){
    return{
        type:"INCREMENT",
        payload:number
    };
}

export function subtractNumber(number){
    return{
        type:"DECREMENT",
        payload:number
    };
}