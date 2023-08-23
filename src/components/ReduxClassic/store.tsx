import { applyMiddleware, createStore } from "redux";

//----------------------
//import { reducer } from "./reducer/reducer";
//export const store = createStore(reducer);

//---------------------------

import rootReducer from "./reducer";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
