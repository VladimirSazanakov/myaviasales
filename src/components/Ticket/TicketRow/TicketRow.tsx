import React from "react";
import TicketCell from "../TicketCell";

import './TicketRow.css';


export default function TicketRow(props: any) {

  return (
    <div className="TicketRow">
      <TicketCell name={"mow-hkt"} value={"10:45-08:00"} />
      <TicketCell name={"в пути"} value={"21ч 15 м"} />
      <TicketCell name={"2 пересадки"} value={"hkg, jnb"} />
    </div>
  )
}