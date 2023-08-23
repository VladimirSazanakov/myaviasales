import { ticketValueActions } from '../../types/types';

const initialState = {
  searchId: '',
  tickets: {}
}


export const ticketReducer = (state: any, action: any) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case ticketValueActions.fetchId: {
      const searchId = action.payload.searchId;
      return { ...state, searchId };
    }
    case ticketValueActions.fetchTickets: {
      const tickets = action.payload;
      return { ...state, tickets };
    }

    default: return state;
  }
}

export default ticketReducer;