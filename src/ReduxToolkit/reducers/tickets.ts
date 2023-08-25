import { createSlice } from '@reduxjs/toolkit';
import { TicketsState, TicketsValueAction, Action, TabsValue } from '../../types/types';
import { sliceArr, sortDuration, sortOptimal, sortPrice } from '../../service/ticketFunctions';

const initialState: TicketsState = {
  Tickets: [],
  PageTikets: [],
  CurentPage: 1,
  TotalPages: 1,
  TicketPerPage: 5,
}


export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    [TicketsValueAction.setTikets](state: TicketsState, action: Action) {
      state.Tickets = action.payload;
      state.CurentPage = 1;
      state.TotalPages = Math.ceil(state.Tickets.length / state.TicketPerPage);
      // const startPosition = (state.CurentPage - 1) * state.TicketPerPage;
      // const endPosition = startPosition + state.TicketPerPage;
      // state.PageTikets = state.Tickets.slice(startPosition, endPosition);
      state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [...state.Tickets]);
    },
    [TicketsValueAction.sortPrice](state: TicketsState, action: Action) {
      console.log('payload from ticketreducer', action.payload);
      if (action.payload == TabsValue.cheapest) {
        console.log('sorted');
        state.Tickets.sort(sortPrice)
        state.CurentPage = 1;
        // const startPosition = (state.CurentPage - 1) * state.TicketPerPage;
        // const endPosition = startPosition + state.TicketPerPage;
        // state.PageTikets = state.Tickets.slice(startPosition, endPosition);
        state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [...state.Tickets]);
      } else if (action.payload == TabsValue.fastest) {
        console.log('sort by faster');
        state.Tickets.sort(sortDuration)
        state.CurentPage = 1;
        // const startPosition = (state.CurentPage - 1) * state.TicketPerPage;
        // const endPosition = startPosition + state.TicketPerPage;
        // state.PageTikets = state.Tickets.slice(startPosition, endPosition);
        state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [...state.Tickets]);
      } else if (action.payload == TabsValue.optimal) {
        console.log('sort by optimal');
        state.Tickets.sort(sortOptimal);
        state.CurentPage = 1;
        // const startPosition = (state.CurentPage - 1) * state.TicketPerPage;
        // const endPosition = startPosition + state.TicketPerPage;
        // state.PageTikets = state.Tickets.slice(startPosition, endPosition);
        state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [...state.Tickets]);
      }
    },
    [TicketsValueAction.setCurrentPage](state: TicketsState, action: Action) {
      state.CurentPage = action.payload;
      // const startPosition = (state.CurentPage - 1) * state.TicketPerPage;
      // const endPosition = startPosition + state.TicketPerPage;
      // state.PageTikets = state.Tickets.slice(startPosition, endPosition);
      state.PageTikets = sliceArr(state.CurentPage, state.TicketPerPage, [...state.Tickets]);
    }
  }
})

export default ticketsSlice.reducer;