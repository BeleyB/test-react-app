import { combineReducers } from "redux";
import { alertReducer } from './alert';
import authReducer from "./auth";
import { userReducer } from "./user";


export default combineReducers({
    alert: alertReducer,
    user: userReducer,
    auth: authReducer
});




