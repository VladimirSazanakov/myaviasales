import { createSlice } from "@reduxjs/toolkit";
import { Ticket, rawTicketsState, Action, RawTicketValueActions } from "../../types/types";



const initialState: rawTicketsState = {
  isLoading: false,
  error: false,
  rawTickets: {
    searchId: '',
    tickets: {
      stop: false,
      tickets: []
    }
  }
}

export const rawTicketSlice = createSlice({
  name: 'rawTicket',
  initialState,
  reducers: {
    [RawTicketValueActions.setError](state: rawTicketsState, action: Action) {
      state.error = action.payload;
    },
    [RawTicketValueActions.setloading](state: rawTicketsState, action: Action) {
      state.isLoading = action.payload;
    },
    [RawTicketValueActions.fetchTickets](state: rawTicketsState, action: Action) {
      state.rawTickets.tickets = action.payload;
    },
    [RawTicketValueActions.fetchId](state: rawTicketsState, action: Action) {
      state.rawTickets.searchId = action.payload;
    }
  }
})

export default rawTicketSlice.reducer;


// export const rawTicketsReducer = (state: TicketState, action: Action) => {
//   if (state === undefined) {
//     return initialState;
//   }

//   switch (action.type) {
//     case RawTicketValueActions.fetchId: {
//       const searchId = action.payload.searchId;
//       return { ...state, searchId };
//     }
//     case RawTicketValueActions.fetchTickets: {
//       const tickets = action.payload;
//       return { ...state, tickets };
//     }
//     case RawTicketValueActions.setError: {
//       const error = action.payload;
//       return { ...state, error };
//     }
//     case RawTicketValueActions.setloading: {
//       const isLoading = action.payload;
//       return { ...state, isLoading };
//     }

//     default: return state;
//   }
// }

// export default rawTicketsReducer;