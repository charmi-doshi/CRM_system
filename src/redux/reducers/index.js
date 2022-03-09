import { combineReducers } from "redux";
import { getClientReducer } from "./clientReducer";

const reducers=combineReducers({
    allClients:getClientReducer,
    
})

export default reducers; 