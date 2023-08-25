import { rawTicketSlice } from "../../ReduxToolkit/reducers/rawTickets";
import ApiAviasales from "../../service/ApiAviasales"

const api = new ApiAviasales;
const rawTicketAction = rawTicketSlice.actions;

export const fetchSessionId = () => async (dispatch: any) => {

  try {
    dispatch(rawTicketAction.SET_LOADING(true));
    const { searchId } = await api.getSearchId();

    console.log(searchId);

    dispatch(rawTicketAction.FETCH_SEARCH_ID(searchId));
    dispatch(rawTicketAction.SET_LOADING(false));
  } catch (err) {
    dispatch(rawTicketAction.SET_LOADING(false));
    dispatch(rawTicketAction.SET_ERROR(true));

  }
}

export const fetchTickets = (searchId: string) => async (dispatch: any) => {
  const maxTryingCount = 30;

  let stop = false;
  let tryingCount = 1;

  while (!stop && tryingCount <= maxTryingCount) {
    dispatch(rawTicketAction.SET_LOADING(true));
    try {
      const result = await api.getTicket(searchId);
      dispatch(rawTicketAction.FETCH_TICKETS(result.tickets));
      stop = result.stop;
      dispatch(rawTicketAction.SET_ERROR(false));
      console.log('Tickets from server', tryingCount, 'stop = ', result.stop, ' table=', result.tickets);
    } catch (err) {
      dispatch(rawTicketAction.SET_ERROR(true));
    }
    tryingCount++;
  }

  dispatch(rawTicketAction.SET_LOADING(false))

}

  // return () => {
  //   fetch()
  //     .then(response => response.json())
  //     .then(json => dispatch(addManyCustomersAction(json)))
  // }


// const fetchTickets = () => {
//   const api = new ApiAviasales;
//   const tickets = api.getTicket(searchId);

//   return () => {
//     fetch()
//       .then(response => response.json())
//       .then(json => dispatch(addManyCustomersAction(json)))
//   }
// }