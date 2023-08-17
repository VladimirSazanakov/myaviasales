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

  const tabButtonStyle = {
    height: 50,
    width: 168,
    fontSize: '12px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '0.5px',
    verticalAlign: 'baseline',

  }

  return (

    <Radio.Group className="tabs" defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a" style={tabButtonStyle}>Hangzhou</Radio.Button>
      <Radio.Button value="b" style={tabButtonStyle}>Shanghai</Radio.Button>
      <Radio.Button value="c" style={tabButtonStyle}>Beijing</Radio.Button>
    </Radio.Group>


    // <Radio.Group
    //   className="Tabs"
    //   style={{ width: 504, height: 50, fontSize: 14 }}
    //   size="middle"
    //   options={optionsWithDisabled}
    //   onChange={onChange4}
    //   value={value4}
    //   optionType="button"
    //   buttonStyle="solid"
    // />

  )
}