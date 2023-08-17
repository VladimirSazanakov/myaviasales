import React from "react";

import './Price.css';

export default function Price(props: any) {
  //const value: number = props.price;
  const value = 12500;
  const valueFormat = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", currencyDisplay: "symbol" }).format(value);
  return (
    <span className="Price">
      {valueFormat}
    </span>
  )
}