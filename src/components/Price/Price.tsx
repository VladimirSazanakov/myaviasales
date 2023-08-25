import React from 'react';

import classes from './Price.module.scss';

interface priceProps {
  value: number;
}

export default function Price(props: priceProps) {
  const value = props.value;
  const valueFormat = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    currencyDisplay: 'symbol',
  }).format(value);
  return <span className={classes.Price}>{valueFormat}</span>;
}
