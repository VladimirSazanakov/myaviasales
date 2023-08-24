import { rawTicketSlice } from "../../ReduxToolkit/reducers/rawTickets";
import { AppDispatch } from "../../ReduxToolkit/store";
import ApiAviasales from "../../service/ApiAviasales"
import { addSearchId, addTickets } from "../ReduxClassic/actions";

export const fetchSessionId = () => async (dispatch: any) => {
  const api = new ApiAviasales;
  const rawTicketAction = rawTicketSlice.actions;
  try {
    dispatch(rawTicketAction.SET_LOADING(true));

    const { searchId } = await api.getSearchId();
    console.log(searchId);
    dispatch(rawTicketAction.FETCH_SEARCH_ID(searchId));

    const rawTickets = await api.getTicket(searchId)

    console.log(rawTickets);

    dispatch(rawTicketAction.SET_LOADING(false));


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