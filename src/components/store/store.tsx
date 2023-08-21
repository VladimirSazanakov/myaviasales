import { createStore } from "redux";
import { reducer } from "./reducer/reducer";

export const store = createStore(reducer);

// import {configureStore} from 'reduxjs/toolkit';

// const store = configureStore();