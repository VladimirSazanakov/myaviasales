import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import { tabsReducer } from "./tabsReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  tabs: tabsReducer,
});


export default rootReducer;

//import { userReducer } from "./reducer";



// export const rootReduser = combineReducers({
//   user: userReducer
// })