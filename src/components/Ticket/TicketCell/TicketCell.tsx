import React from 'react';

import classes from './TicketCell.module.scss';

interface TCprops {
  name: string;
  value: string;
}

export default function TicketCell(props: TCprops) {
  const name = props.name;
  const value = props.value;

  return (
    <div className={classes.TicketCell}>
      <span className={classes['ticketCell__name']}>{name}</span>
      <span className={classes['ticketCell__value']}>{value}</span>
    </div>
  );
}
