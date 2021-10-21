import { combineReducers } from "redux";
import UserReducer from './userReducer';
/* JUNTA TODOS OS REDUCERS EM 1 SÓ  */
export default combineReducers({
    user: UserReducer
})