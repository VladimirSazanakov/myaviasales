import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import { tabsReducer } from "./tabsReducer";
import ticketReducer from "./ticketReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  tabs: tabsReducer,
  ticket: ticketReducer,
});


export default rootReducer;

//import { userReducer } from "./reducer";



// export const rootReduser = combineReducers({
//   user: userReducer
// })