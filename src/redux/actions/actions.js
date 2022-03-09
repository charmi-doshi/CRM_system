import React from "react";
import { ActionTypes } from "../constants/action-types";

export const getClients=(clients)=>{

    return{
        type:ActionTypes.GET_CLIENTS,
        payload:clients
    }
}
export const getWorklist=(worklist)=>{

    return{
        type:ActionTypes.GET_WORKLIST,
        payload:worklist
    }
}
