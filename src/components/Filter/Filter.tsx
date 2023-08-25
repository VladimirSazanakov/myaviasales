import React from 'react';
import { Checkbox, Space } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../ReduxToolkit/reducers/filterReducer';

import classes from './Filter.module.scss';

function Filter() {
  const dispatch = useAppDispatch();
  const filterState = useAppSelector((state) => state.filterReducer);
  const filterActions = filterSlice.actions;

  const togleAll = () => {
    dispatch(filterActions.FILTER_TOGLE_ALL());
  };
  const togleNotransfer = () => {
    dispatch(filterActions.FILTER_TOGLE_NO_TRANSFER());
  };
  const togle1transfer = () => {
    dispatch(filterActions.FILTER_TOGLE_1_TRANSFER());
  };
  const togle2transfer = () => {
    dispatch(filterActions.FILTER_TOGLE_2_TRANSFER());
  };
  const togle3transfer = () => {
    dispatch(filterActions.FILTER_TOGLE_3_TRANSFER());
  };

  return (
    <div className={classes.Filter}>
      <Space direction="vertical" size={20}>
        <h4 className={classes['Filter__title']}>Количество пересадок</h4>
        <Checkbox
          className={classes['Filter__items']}
          checked={filterState.all}
          onChange={() => togleAll()}
        >
          Все
        </Checkbox>
        <Checkbox
          className={classes['Filter__items']}
          checked={filterState.peresadki[0]}
          onChange={() => togleNotransfer()}
        >
          Без пересадок
        </Checkbox>
        <Checkbox
          className={classes['Filter__items']}
          checked={filterState.peresadki[1]}
          onChange={() => togle1transfer()}
        >
          1 пересадка
        </Checkbox>
        <Checkbox
          className={classes['Filter__items']}
          checked={filterState.peresadki[2]}
          onChange={() => togle2transfer()}
        >
          2 пересадки
        </Checkbox>
        <Checkbox
          className={classes['Filter__items']}
          checked={filterState.peresadki[3]}
          onChange={() => togle3transfer()}
        >
          3 пересадки
        </Checkbox>
      </Space>
    </div>
  );
}

export default Filter;
