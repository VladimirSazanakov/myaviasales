import { createSlice } from '@reduxjs/toolkit';

import {
  rawTicketsState,
  Action,
  RawTicketValueActions,
} from '../../types/types';

const initialState: rawTicketsState = {
  isLoading: false,
  error: false,
  searchId: '',
  rawTickets: [],
};

export const rawTicketSlice = createSlice({
  name: 'rawTickets',
  initialState,
  reducers: {
    // [RawTicketValueActions.setError](state: rawTicketsState, action: Action) {
    SET_ERROR(state: rawTicketsState, action: Action) {
      state.error = action.payload;
    },
    [RawTicketValueActions.setloading](state: rawTicketsState, action: Action) {
      state.isLoading = action.payload;
    },
    [RawTicketValueActions.fetchTickets](
      state: rawTicketsState,
      action: Action
    ) {
      state.rawTickets.push(...action.payload);
    },
    [RawTicketValueActions.fetchId](state: rawTicketsState, action: Action) {
      if (!state.searchId) {
        state.searchId = action.payload;
      }
    },
  },
});

export default rawTicketSlice.reducer;
