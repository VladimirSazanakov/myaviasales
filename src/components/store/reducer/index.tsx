import { combineReducers } from "redux";
import { userReducer } from "./reducer";



export const rootReduser = combineReducers({
  user: userReducer
})