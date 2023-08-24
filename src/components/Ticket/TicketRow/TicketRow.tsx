import React from 'react';

import TicketCell from '../TicketCell';

import classes from './TicketRow.module.scss';
import { TicketSegment } from '../../../types/types';

export default function TicketRow(props: any) {
  const data: TicketSegment = props.data;
  const {origin, destination, stops, date, duration} = data;

  function durationToString(duration: number){
    const hour = Math.floor(duration/60);
    const min = duration-hour*60;
    return `${hour}ч ${min}мин`;
  }

  return (
    <div className={classes.TicketRow}>
      <TicketCell name={`${origin}-${destination}`} value={date} />
      <TicketCell name={'в пути'} value={durationToString(duration)} />
      <TicketCell name={`${stops.length} пересадок` } value={stops.join(' ')} />
    </div>
  );
}
