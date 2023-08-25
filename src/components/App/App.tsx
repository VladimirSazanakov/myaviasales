import React, { useEffect } from 'react';
import { createStoreHook } from 'react-redux';
import { Alert } from 'antd';

import logo from '../../img/Logo.svg';
import Filter from '../Filter';
import Tabs from '../Tabs';
import Ticked from '../Ticket';

import classes from './App.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSessionId, fetchTickets } from '../asyncActions/asyncActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { rawTicketSlice } from '../../ReduxToolkit/reducers/rawTickets';
import { TicketFilter, sortPrice } from '../../service/ticketFunctions';
import { ticketsSlice } from '../../ReduxToolkit/reducers/tickets';
import { AppDispatch } from '../../ReduxToolkit/store';
import { TabsValue, Ticket } from '../../types/types';
import TicketsList from '../TicketsList/insex';
import ErrorIndicator from '../ErrorIndicator';
import LoadIndicator from '../LoadIndicator';

// import ApiAviasales from '../../service/ApiAviasales';

// import { store } from '../ReduxClassic/store';

{/* <style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
</style>; */}



function App() {

  const bigState = useAppSelector(state => state);
  const state = bigState.rawTickets;
  const filterState = bigState.filterReducer;
  const dispatch = useAppDispatch();
  const rawTickets = bigState.rawTickets.rawTickets;
  const tabState = bigState.tabs;
  const TicketsArr = bigState.tickets.Tickets;

  const isLoading = bigState.rawTickets.isLoading;
  const error = bigState.rawTickets.error;

  const searchId = bigState.rawTickets.searchId;

  const rawTicketActions = rawTicketSlice.actions;

  const ticketsActions = ticketsSlice.actions;

  console.log('RawTicketState', state);

  let ticketPageArr: Ticket[] = [];

  useEffect(() => {
    // dispatch(fetchSessionId());
    loadAllData();
  }, [searchId]);




  useEffect(() => {
    if (rawTickets.length > 0) {
      // console.log(!state.isLoading && !state.error);
      filterArr();
    }
  }, [filterState])

  useEffect(() => {
    console.log('TicketsArr is change');
    ticketPageArr = TicketsArr.slice(0, 5);
    console.log("tickedPageArr", ticketPageArr);

  }, [TicketsArr]);

  useEffect(() => {
    // if(tabState.tabCurrentValue===TabsValue.cheapest){
    sortArr();
    // const NewArr = [...bigState.tickets.Tickets];
    // NewArr.sort(sortPrice);
    // dispatch(ticketsActions.SET_TIKETS(NewArr));
    // dispatch(ticketsActions.SORT_BY_PRICE({sortPrice})); notwork;
    // console.log('sorted Arr', NewArr);


  }, [tabState]);


  const loadAllData = () => {
    console.log('start loading data');
    if (!isLoading) {
      console.log('no loading check');
      if (!searchId) {
        console.log('no search ID start dispach searchId');
        dispatch(fetchSessionId());
      } else {
        console.log('Search ID is', searchId, ' Start fetch Tickets');
        dispatch(fetchTickets(searchId));
      };
    };
  };






  const filterArr = () => {
    //const bigState = useAppSelector(state => state);
    // const rawTickets = bigState.rawTickets.rawTickets.tickets.tickets;

    const ticketsActions = ticketsSlice.actions;
    let NewArr: Ticket[] = [];

    bigState.filterReducer.peresadki.forEach((on, peresadki) => {
      if (on) {
        NewArr = NewArr.concat(TicketFilter(rawTickets, peresadki))
      }
    })
    // console.log('NewFiltered Array', NewArr);
    dispatch(ticketsActions.SET_TIKETS(NewArr));
    sortArr();


  }

  const sortArr = () => {
    dispatch(ticketsActions.SORT_BY_PRICE(tabState.tabCurrentValue));
  }

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
          {(isLoading) ? <LoadIndicator /> : null}
          {(error) ? <ErrorIndicator /> : null}

          {(TicketsArr.length > 0) ? <TicketsList listArr={TicketsArr} /> : <Alert message="Рейсов подходящих под заданные фильтры не найдено" type='info' />}
        </section>
      </main>
    </div>
  );
}

export default App;
