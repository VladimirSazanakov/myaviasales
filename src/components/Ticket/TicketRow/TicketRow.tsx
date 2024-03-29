import React from 'react';
import { format } from 'date-fns';

import TicketCell from '../TicketCell';
import { TicketSegment } from '../../../types/types';

import classes from './TicketRow.module.scss';

export default function TicketRow(props: any) {
  const data: TicketSegment = props.data;
  const { origin, destination, stops, date, duration } = data;

  function durationToString(duration: number) {
    const hour = Math.floor(duration / 60);
    const min = duration - hour * 60;
    return `${hour}ч ${min}мин`;
  }

  function stopsToString(stops: number) {
    if (stops === 0) {
      return 'без пересадок';
    } else if (stops === 1) {
      return '1 пересадка';
    } else if (stops === 2) {
      return '2 пересадки';
    } else if (stops === 3) {
      return '3 пересадки';
    } else {
      return `${stops} пересадок`;
    }
  }
  function dateToString(date: string) {
    const newDate = new Date(date);
    return format(newDate, 'dd.MM.yyyy HH:mm');
  }

  return (
    <div className={classes.TicketRow}>
      <TicketCell
        name={`${origin}-${destination}`}
        value={dateToString(date)}
      />
      <TicketCell name={'в пути'} value={durationToString(duration)} />
      <TicketCell
        name={stopsToString(stops.length)}
        value={stops.length !== 0 ? stops.join(' ') : '__'}
      />
    </div>
  );
}
