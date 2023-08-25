import { createSlice } from '@reduxjs/toolkit';
import { TicketsState, TicketsValueAction, Action, TabsValue } from '../../types/types';
import { sortDuration, sortOptimal, sortPrice } from '../../service/ticketFunctions';

const initialState: TicketsState = {
  Tickets: [],
}


export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    [TicketsValueAction.setTikets](state: TicketsState, action: Action) {
      state.Tickets = action.payload;
    },
    [TicketsValueAction.sortPrice](state: TicketsState, action: Action) {
      console.log('payload from ticketreducer', action.payload);
      if (action.payload == TabsValue.cheapest) {
        console.log('sorted');
        state.Tickets.sort(sortPrice)
      } else if (action.payload == TabsValue.fastest) {
        console.log('sort by faster');
        state.Tickets.sort(sortDuration)

      } else if (action.payload == TabsValue.optimal) {
        console.log('sort by optimal');
        state.Tickets.sort(sortOptimal);
      }
    }
  }
})

export default ticketsSlice.reducer;