import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';

import classes from './Tabs.module.scss';
import './Tabs.scss';

export default function Tabs(props: any) {
  const [value, setValue] = useState('');

  // const optionsWithDisabled = [
  //   { label: 'Самый дешевый', value: 'Apple' },
  //   { label: 'Самый Быстрый', value: 'Pear' },
  //   { label: 'Оптимальный', value: 'Orange' },
  // ];

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue(value);
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
  };

  return (
    <Radio.Group
      className={classes.tabs}
      defaultValue="cheapest"
      buttonStyle="solid"
      onChange={onChange4}
    >
      <Radio.Button value="cheapest" style={tabButtonStyle}>
        Самый дешевый
      </Radio.Button>
      <Radio.Button value="fastest" style={tabButtonStyle}>
        Самый быстрый
      </Radio.Button>
      <Radio.Button value="optimal" style={tabButtonStyle}>
        Оптимальный
      </Radio.Button>
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
  );
}
