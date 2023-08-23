import ApiAviasales from "../../service/ApiAviasales"
import { addSearchId, addTickets } from "../ReduxClassic/actions";

export const fetchSessionId = (dispatch) => {
  const api = new ApiAviasales;
  const searchId = api.getSearchId();

  searchId.then(data => {
    dispatch(addSearchId(data));
    //console.log(data);
    const tickets = api.getTicket(data.searchId);
    tickets.then(data => {
      dispatch(addTickets(data));
      //  console.log(data);
    })
  }
  );

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