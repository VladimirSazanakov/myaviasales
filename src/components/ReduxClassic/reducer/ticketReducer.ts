import { RawTicketValueActions } from '../../../types/types';

const initialState = {
  searchId: '',
  tickets: {}
}


export const ticketReducer = (state: any, action: any) => {
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

    default: return state;
  }
}

export default ticketReducer;