import { createSlice } from '@reduxjs/toolkit';

import {
  TicketsState,
  TicketsValueAction,
  Action,
  TabsValue,
} from '../../types/types';
import {
  sliceArr,
  sortDuration,
  sortOptimal,
  sortPrice,
} from '../../service/ticketFunctions';

const initialState: TicketsState = {
  Tickets: [],
  PageTikets: [],
  CurentPage: 1,
  TotalPages: 1,
  TicketPerPage: 5,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    [TicketsValueAction.setTikets](state: TicketsState, action: Action) {
      state.Tickets = action.payload;
      state.CurentPage = 1;
      state.TotalPages = Math.ceil(state.Tickets.length / state.TicketPerPage);
      state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [
        ...state.Tickets,
      ]);
    },
    [TicketsValueAction.sortPrice](state: TicketsState, action: Action) {
      if (action.payload === TabsValue.cheapest) {
        state.Tickets.sort(sortPrice);
        state.CurentPage = 1;
        state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [
          ...state.Tickets,
        ]);
      } else if (action.payload === TabsValue.fastest) {
        state.Tickets.sort(sortDuration);
        state.CurentPage = 1;
        state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [
          ...state.Tickets,
        ]);
      } else if (action.payload === TabsValue.optimal) {
        state.Tickets.sort(sortOptimal);
        state.CurentPage = 1;
        state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [
          ...state.Tickets,
        ]);
      }
    },
    [TicketsValueAction.setCurrentPage](state: TicketsState, action: Action) {
      state.CurentPage = action.payload;
      state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [
        ...state.Tickets,
      ]);
    },
  },
});

export default ticketsSlice.reducer;
