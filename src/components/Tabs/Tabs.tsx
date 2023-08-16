import React, { useState } from "react";
import { Radio, Button, RadioChangeEvent } from "antd";

import './Tabs.css'

export default function Tabs(props: any) {
  const [value4, setValue4] = useState('Apple');

  const optionsWithDisabled = [
    { label: 'Самый дешевый', value: 'Apple' },
    { label: 'Самый Быстрый', value: 'Pear' },
    { label: 'Оптимальный', value: 'Orange' },
  ];
  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };

  return (
    <Radio.Group
      className="Tabs"
      style={{ width: 504, height: 50, fontSize: 14 }}
      size="large"
      options={optionsWithDisabled}
      onChange={onChange4}
      value={value4}
      optionType="button"
      buttonStyle="solid"
    />

  )
}