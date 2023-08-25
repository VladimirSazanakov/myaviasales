import React from 'react';

import Price from '../Price';
import CompanyLogo from '../CompanyLogo';
import { TicketSegment } from '../../types/types';

import classes from './Ticked.module.scss';
import TicketRow from './TicketRow';

export default function Ticked(props: any) {
  const { price, segments } = props.ticket;
  const companyName = props.ticket.carrier;

  const TicketInfo = segments.map((segment: TicketSegment, index: number) => {
    return <TicketRow key={index} data={segment}></TicketRow>;
  });

  return (
    <div className={classes.Ticked}>
      <div className={classes['Ticked__content']}>
        <div className={classes['Ticked__header-container']}>
          <Price value={price} />
          <CompanyLogo companyCode={companyName} />
        </div>
        {TicketInfo}
      </div>
    </div>
  );
}
