import { createSlice } from '@reduxjs/toolkit';
import {TicketsState, TicketsValueAction, Action } from '../../types/types';

const initialState: TicketsState = {
  Tickets: [],
}


export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers:{
    [TicketsValueAction.setTikets](state: TicketsState, action: Action){
      state.Tickets = action.payload;
    }
  }
})

export default ticketsSlice.reducer;