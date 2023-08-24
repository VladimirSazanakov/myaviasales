import React from "react";
import { Ticket } from "../../types/types";
import TicketCard from '../Ticket';

export default function TicketsLis(props: any){
  
  const listArr: Ticket[] = props.listArr;
  let count = 0;

  const list = listArr.map((Ticket: Ticket)=>{
    count ++;
    return <TicketCard key={count} ticket={Ticket} />
  })

  return (
    <>
    {list}
    </>
  );
}