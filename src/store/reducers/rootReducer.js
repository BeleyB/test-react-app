import { combineReducers } from "redux";
import { alertReducer } from './alert';
import { userReducer } from "./user";


export default combineReducers({
    alert: alertReducer,
    user: userReducer
});




