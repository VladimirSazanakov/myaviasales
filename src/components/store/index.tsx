import { applyMiddleware, createStore } from "redux";
import { rootReduser } from "./reducer";

export const store = createStore(rootReduser, applyMiddleware());