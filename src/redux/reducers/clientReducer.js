import { ActionTypes } from "../constants/action-types"

const initialState={
    clients:[],
    worklist:[]
}
export const getClientReducer=(state=initialState,{type,payload})=>{

    switch(type){

        case ActionTypes.GET_CLIENTS:
            return {...state,clients:payload};

        case ActionTypes.GET_WORKLIST:
            return {...state,worklist:payload};

        default:
                return state
    }

   
}