import React from "react";

import './TicketCell.css';

interface TCprops {
  name: string,
  value: string
}

export default function TicketCell(props: TCprops) {
  const name = props.name;
  const value = props.value;

  return (
    <div className="TicketCell">
      <span className="ticketCell__name">{name}</span>
      <span className="ticketCell__value">{value}</span>
    </div>
  )
}