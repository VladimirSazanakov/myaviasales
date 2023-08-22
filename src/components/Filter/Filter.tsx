import React from 'react';
import { Checkbox, Space, Typography } from 'antd';
import { store } from '../store/store';

import classes from './Filter.module.scss';
//import { togle1transfer, togle2transfer, togle3transfer, togleAll, togleNotransfer } from '../store/actions';
import { bindActionCreators } from 'redux';

import * as filterActions from '../store/actions';
import { connect } from 'react-redux';


function Filter(props: any) {
  //const{filterState, togle1transfer, togle2transfer, togle3transfer, togleAll, togleNotransfer }
  const { dispatch } = store;
  const { togle1transfer, togle2transfer, togle3transfer, togleAll, togleNotransfer } = bindActionCreators(filterActions, dispatch);
  console.log(togleAll);

  return (
    <div className={classes.Filter}>
      <Space direction="vertical" size={20}>
        <h4 className={classes['Filter__title']}>Количество пересадок</h4>
        <Checkbox className={classes['Filter__items']} value={store.getState().filter.all} onChange={() => togleAll()}>Все</Checkbox>
        <Checkbox className={classes['Filter__items']} onChange={() => togleNotransfer()}>Без пересадок</Checkbox>
        <Checkbox className={classes['Filter__items']} onChange={() => togle1transfer()}>1 пересадка</Checkbox>
        <Checkbox className={classes['Filter__items']} onChange={() => togle2transfer()}>2 пересадки</Checkbox>
        <Checkbox className={classes['Filter__items']} onChange={() => togle3transfer()}>3 пересадки</Checkbox>
      </Space>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    state.filter,
  }
}

export default connect
