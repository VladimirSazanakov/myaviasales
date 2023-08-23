import React from 'react';
import { Checkbox, Space, Typography } from 'antd';
// import { store } from '../ReduxClassic/store';

import classes from './Filter.module.scss';
//import { togle1transfer, togle2transfer, togle3transfer, togleAll, togleNotransfer } from '../store/actions';
import { bindActionCreators } from 'redux';

import * as filterActions from '../ReduxClassic/actions';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import { fileURLToPath } from 'url';
import { filterValue } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../ReduxToolkit/reducers/filterReducer';


function Filter(props: any) {
  //const{filterState, togle1transfer, togle2transfer, togle3transfer, togleAll, togleNotransfer } = props;
  // const { dispatch } = store;

  const dispatch = useAppDispatch();
  console.log(dispatch);
  //const { togle1transfer, togle2transfer, togle3transfer, togleAll, togleNotransfer } = bindActionCreators(filterActions, dispatch);
  // console.log(togleAll);

  const filterState = useAppSelector(state => state.filterReducer);
  const filterActions = filterSlice.actions;
  //const { FILTER_TOGLE_ALL } = filterSlice.actions
  //const togle1transfer

  //console.log(filterActions);
  // console.log(useSelector(state => state));

  const togleAll = () => { dispatch(filterActions.FILTER_TOGLE_ALL()) };
  const togleNotransfer = () => { dispatch(filterActions.FILTER_TOGLE_NO_TRANSFER()) };
  const togle1transfer = () => { dispatch(filterActions.FILTER_TOGLE_1_TRANSFER()) };
  const togle2transfer = () => { dispatch(filterActions.FILTER_TOGLE_2_TRANSFER()) };
  const togle3transfer = () => { dispatch(filterActions.FILTER_TOGLE_3_TRANSFER()) };


  return (
    <div className={classes.Filter}>
      <Space direction="vertical" size={20}>
        <h4 className={classes['Filter__title']}>Количество пересадок</h4>
        <Checkbox className={classes['Filter__items']} checked={filterState.all} onChange={() => togleAll()}>Все</Checkbox>
        <Checkbox className={classes['Filter__items']} checked={filterState.peresadki[0]} onChange={() => togleNotransfer()}>Без пересадок</Checkbox>
        <Checkbox className={classes['Filter__items']} checked={filterState.peresadki[1]} onChange={() => togle1transfer()}>1 пересадка</Checkbox>
        <Checkbox className={classes['Filter__items']} checked={filterState.peresadki[2]} onChange={() => togle2transfer()}>2 пересадки</Checkbox>
        <Checkbox className={classes['Filter__items']} checked={filterState.peresadki[3]} onChange={() => togle3transfer()}>3 пересадки</Checkbox>
      </Space>
    </div>
  );
}

// const mapStateToProps = (state: any) => {
//   return {
//     state.filter.
//   }
// }


export default Filter;
