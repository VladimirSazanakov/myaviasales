import { createStore } from "redux";

//----------------------
//import { reducer } from "./reducer/reducer";
//export const store = createStore(reducer);

//---------------------------

import rootReducer from "./reducer";

export const store = createStore(rootReducer);
