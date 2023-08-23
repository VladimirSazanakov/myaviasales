import { Ticket, TicketState, Action, RawTicketValueActions } from "../../types/types";



const initialState: TicketState = {
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


export const rawTicketsReducer = (state: TicketState, action: Action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case RawTicketValueActions.fetchId: {
      const searchId = action.payload.searchId;
      return { ...state, searchId };
    }
    case RawTicketValueActions.fetchTickets: {
      const tickets = action.payload;
      return { ...state, tickets };
    }
    case RawTicketValueActions.setError: {
      const error = action.payload;
      return { ...state, error };
    }
    case RawTicketValueActions.setloading: {
      const isLoading = action.payload;
      return { ...state, isLoading };
    }

    default: return state;
  }
}

export default rawTicketsReducer;