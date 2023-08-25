import { Ticket } from "../types/types"

export const TicketFilter = (ticketsArr: Ticket[], peresadki: number) => {
  function match(ticket: Ticket, peresadki: number): boolean {
    return (ticket.segments[0].stops.length === peresadki && ticket.segments[1].stops.length === peresadki);
  }
  const filteredArr = ticketsArr.filter(ticket => match(ticket, peresadki));
  return filteredArr;
}

export function sortPrice(a: Ticket, b: Ticket): number {
  return a.price - b.price;
};

export function sortDuration(a: Ticket, b: Ticket): number {
  return (a.segments[0].duration - b.segments[0].duration)
}

export function sortOptimal(a: Ticket, b: Ticket): number {
  const paramA = a.price / 10000 + a.segments[0].duration / 1000;
  const paramB = b.price / 10000 + b.segments[0].duration / 1000;
  return (paramA - paramB);
}

export function sliceArr(CurrentPage: number, TicketPerPage: number, Arr: Ticket[]) {
  const startPosition = (CurrentPage - 1) * TicketPerPage;
  const endPosition = startPosition + TicketPerPage;
  return Arr.slice(startPosition, endPosition);
}