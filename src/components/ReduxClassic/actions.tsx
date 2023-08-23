import { filterValue } from "../../types/types"
import { ticketValueActions } from "../../types/types"

// actions for filter
export const togleAll = () => {
  return { type: filterValue.filter_togle_all }
}
export const togleNotransfer = () => {
  return { type: filterValue.filter_togle_no_transfer }
}
export const togle1transfer = () => {
  return { type: filterValue.filter_togle_1_transef }
}
export const togle2transfer = () => {
  return { type: filterValue.filter_togle_2_transef }
}
export const togle3transfer = () => {
  return { type: filterValue.filter_togle_3_transer }
}

export const addSearchId = (payload: any) => {
  return { type: ticketValueActions.fetchId, payload }
}

export const addTickets = (payload: any) => {
  return { type: ticketValueActions.fetchTickets, payload }
}