import React, { useEffect } from 'react';
import { createStoreHook } from 'react-redux';
import { Layout } from 'antd';

import logo from '../../img/Logo.svg';
import Filter from '../Filter';
import Tabs from '../Tabs';
import Ticked from '../Ticket';

import classes from './App.module.scss';
import ApiAviasales from '../../service/ApiAviasales';

import { store } from '../ReduxClassic/store';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
</style>;


function App() {
  const aviasalesApi = new ApiAviasales;

  // useEffect(() => {
  //   const searchId = aviasalesApi.getSearchId();
  //   searchId.then(data => {
  //     console.log(data);
  //     const tickets = aviasalesApi.getTicket(data.searchId);
  //     tickets.then(data => {
  //       console.log(data);
  //     })
  //   }
  //   );
  // }, []);

  store.subscribe(() => {
    console.log(store.getState());
  })
  // console.log(store.getState());


  //store.dispatch({ type: 'FILTER_TOGLE_ALL' });
  //store.dispatch({ type: 'FILTER_TOGLE_NO_TRANSFER' });
  // store.dispatch({ type: 'FILTER_TOGLE_NO_TRANSFER' });

  // console.log(store.getState());

  return (
    <div className={classes.App}>
      <header className={classes['app-header']}>
        <img src={logo} className={classes['app-logo']} alt="logo" />
      </header>
      <main className={classes['app-main']}>
        <section className={classes['app-filter-section']}>
          <Filter />
        </section>
        <section className={classes['app-result-section']}>
          <Tabs />
          <Ticked />
          <Ticked />
          <Ticked />
          <Ticked />
          <Ticked />
        </section>
      </main>
    </div>
  );
}

export default App;
