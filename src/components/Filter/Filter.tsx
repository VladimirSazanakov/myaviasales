import React from 'react';
import { Checkbox, Space, Typography } from 'antd';
import { store } from '../store/store';

import classes from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={classes.Filter}>
      <Space direction="vertical" size={20}>
        <h4 className={classes['Filter__title']}>Количество пересадок</h4>
        <Checkbox className={classes['Filter__items']} value={store.getState().filter.all} onChange={() => store.dispatch({ type: "FILTER_TOGLE_ALL" })}>Все</Checkbox>
        <Checkbox className={classes['Filter__items']}>Без пересадок</Checkbox>
        <Checkbox className={classes['Filter__items']}>1 пересадка</Checkbox>
        <Checkbox className={classes['Filter__items']}>2 пересадки</Checkbox>
        <Checkbox className={classes['Filter__items']}>3 пересадки</Checkbox>
      </Space>
    </div>
  );
}
