import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { tabsSlice } from '../../ReduxToolkit/reducers/tabsReducer';
import { TabsValue } from '../../types/types';

import classes from './Tabs.module.scss';
import './Tabs.scss';

export default function Tabs() {
  const value = useAppSelector(state => state.tabs.tabCurrentValue)
  const dispatch = useAppDispatch();
  const { setTabs } = tabsSlice.actions;

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    dispatch(setTabs(value));
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
      defaultValue={value}
      buttonStyle="solid"
      onChange={onChange4}
    >
      <Radio.Button value={TabsValue.cheapest} style={tabButtonStyle}>
        Самый дешевый
      </Radio.Button>
      <Radio.Button value={TabsValue.fastest} style={tabButtonStyle}>
        Самый быстрый
      </Radio.Button>
      <Radio.Button value={TabsValue.optimal} style={tabButtonStyle}>
        Оптимальный
      </Radio.Button>
    </Radio.Group>
  );
};
