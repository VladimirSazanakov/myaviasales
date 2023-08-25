import { rawTicketSlice } from "../../ReduxToolkit/reducers/rawTickets";
import { useAppSelector } from "../../hooks/redux";
import ApiAviasales from "../../service/ApiAviasales"

export const fetchSessionId = () => async (dispatch: any) => {
  const api = new ApiAviasales;
  const rawTicketAction = rawTicketSlice.actions;
  //const state = useAppSelector(state => state.rawTickets);

  //let searchId = state.rawTickets.searchId;

  try {
    //if (!state.isLoading) {
    dispatch(rawTicketAction.SET_LOADING(true));

    //if (!searchId) {
    const { NewsearchId } = await api.getSearchId();

    let searchId = NewsearchId;

    console.log(searchId);

    dispatch(rawTicketAction.FETCH_SEARCH_ID(searchId));
    // } else {

    //searchId = state.rawTickets.searchId;

    // }

    const rawTickets = await api.getTicket(searchId)

    console.log(rawTickets);

    dispatch(rawTicketAction.FETCH_TICKETS(rawTickets));

    dispatch(rawTicketAction.SET_LOADING(false));
    // }


    // searchId.then((data: any) => {
    // dispatch(addSearchId(data));
    // //console.log(data);
    // const tickets = api.getTicket(data.searchId);
    // tickets.then(data => {
    //   dispatch(addTickets(data));
    //   //  console.log(data);

    // })

    // })
  } catch (err) {
    dispatch(rawTicketAction.SET_LOADING(false));
    dispatch(rawTicketAction.SET_ERROR(true));

  }

  // return () => {
  //   fetch()
  //     .then(response => response.json())
  //     .then(json => dispatch(addManyCustomersAction(json)))
  // }
}

// const fetchTickets = () => {
//   const api = new ApiAviasales;
//   const tickets = api.getTicket(searchId);

//   return () => {
//     fetch()
//       .then(response => response.json())
//       .then(json => dispatch(addManyCustomersAction(json)))
//   }
// }