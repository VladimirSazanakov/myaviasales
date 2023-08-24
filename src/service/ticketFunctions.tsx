import { AppConfig } from "antd/es/app/context";
import { ticketsSlice } from "../ReduxToolkit/reducers/tickets";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Ticket } from "../types/types"
import { AppDispatch } from "../ReduxToolkit/store";

export const TicketFilter = (ticketsArr: Ticket[], peresadki: number) => {
  function match(ticket: Ticket, peresadki: number): boolean{
    return (ticket.segments[0].stops.length === peresadki && ticket.segments[1].stops.length === peresadki);
  }
  const filteredArr = ticketsArr.filter(ticket=>match(ticket, peresadki));
  return filteredArr;
}

// const ticketsActions = ticketsSlice.actions;
// const bigState = useAppSelector(state => state);
// //const dispatch = useAppDispatch(); 

// export const filterArr = (dispatch: AppDispatch) =>{
//   const rawTickets = bigState.rawTickets.rawTickets.tickets.tickets; 
//   let NewArr: Ticket[] = [];

//   bigState.filterReducer.peresadki.forEach((on, peresadki) =>{
//     if(on){
//       NewArr = NewArr.concat(TicketFilter(rawTickets, peresadki))
//     }
//   })
//   dispatch(ticketsActions.SET_TIKETS(NewArr));
// }