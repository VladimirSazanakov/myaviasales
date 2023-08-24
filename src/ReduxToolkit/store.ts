import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/filterReducer';
import rawTicketsReducer from './reducers/rawTickets';
import tabsReducer from './reducers/tabsReducer';
import ticketsReducer from './reducers/tickets';

const rootReducer = combineReducers({
  filterReducer,
  rawTickets: rawTicketsReducer,
  tabs: tabsReducer,
  tickets: ticketsReducer,

})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
