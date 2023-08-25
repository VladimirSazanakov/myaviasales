import React, { useEffect } from 'react';
import { createStoreHook } from 'react-redux';
import { Layout } from 'antd';

import logo from '../../img/Logo.svg';
import Filter from '../Filter';
import Tabs from '../Tabs';
import Ticked from '../Ticket';

import classes from './App.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchSessionId } from '../asyncActions/asyncActions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { rawTicketSlice } from '../../ReduxToolkit/reducers/rawTickets';
import { TicketFilter, sortPrice } from '../../service/ticketFunctions';
import { ticketsSlice } from '../../ReduxToolkit/reducers/tickets';
import { AppDispatch } from '../../ReduxToolkit/store';
import { TabsValue, Ticket } from '../../types/types';
import TicketsList from '../TicketsList/insex';
import ErrorIndicator from '../ErrorIndicator';

// import ApiAviasales from '../../service/ApiAviasales';

// import { store } from '../ReduxClassic/store';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
</style>;



function App() {
  const bigState = useAppSelector(state => state);
  const state = bigState.rawTickets;
  const filterState = bigState.filterReducer;
  const dispatch = useAppDispatch();
  const rawTickeds = bigState.rawTickets.rawTickets.tickets.tickets;
  const tabState = bigState.tabs;

  const rawTicketActions = rawTicketSlice.actions;
  const ticketsActions = ticketsSlice.actions;

  console.log('RawTicketState', state);

  useEffect(() => {
    dispatch(fetchSessionId());
  }, []);


  useEffect(() => {
    if (!state.isLoading && !state.error) {
      console.log(!state.isLoading && !state.error);
      filterArr();


    }
  }, [filterState])

  useEffect(() => {
    ticketPageArr = bigState.rawTickets.rawTickets.tickets.tickets.slice(0, 5);
    console.log("tickedPageArr", ticketPageArr);

  }, [rawTickeds]);

  useEffect(() => {
    // if(tabState.tabCurrentValue===TabsValue.cheapest){
    sortArr();
    // const NewArr = [...bigState.tickets.Tickets];
    // NewArr.sort(sortPrice);
    // dispatch(ticketsActions.SET_TIKETS(NewArr));
    // dispatch(ticketsActions.SORT_BY_PRICE({sortPrice})); notwork;
    // console.log('sorted Arr', NewArr);


  }, [tabState]);


  let ticketPageArr: Ticket[] = [];

  const filterArr = () => {
    //const bigState = useAppSelector(state => state);
    const rawTickets = bigState.rawTickets.rawTickets.tickets.tickets;
    const ticketsActions = ticketsSlice.actions;
    let NewArr: Ticket[] = [];

    bigState.filterReducer.peresadki.forEach((on, peresadki) => {
      if (on) {
        NewArr = NewArr.concat(TicketFilter(rawTickets, peresadki))
      }
    })
    console.log('NewFiltered Array', NewArr);
    dispatch(ticketsActions.SET_TIKETS(NewArr));
    sortArr();


  }

  const sortArr = () => {
    dispatch(ticketsActions.SORT_BY_PRICE(tabState.tabCurrentValue));
  }


  //-------------------------------------------------------
  // const dispatch = useDispatch()
  // const ticketState = useSelector(state => state.ticket);
  // console.log(ticketState);

  // useEffect(() => {
  //   fetchSessionId(dispatch);
  // }, [])

  // const aviasalesApi = new ApiAviasales;

  //  useEffect(() => {
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

  // store.subscribe(() => {
  //   console.log(store.getState());
  // })
  // console.log(store.getState());


  //store.dispatch({ type: 'FILTER_TOGLE_ALL' });
  //store.dispatch({ type: 'FILTER_TOGLE_NO_TRANSFER' });
  // store.dispatch({ type: 'FILTER_TOGLE_NO_TRANSFER' });

  // console.log(store.getState());

  // ticketPageArr =  [{
  //     "price": 105720,
  //     "carrier": "S7",
  //     "segments": [
  //         {
  //             "origin": "MOW",
  //             "destination": "HKT",
  //             "date": "2024-04-12T16:01:31.349Z",
  //             "duration": 614,
  //             "stops": []
  //         },
  //         {
  //             "origin": "HKT",
  //             "destination": "MOW",
  //             "date": "2024-07-19T20:00:09.901Z",
  //             "duration": 834,
  //             "stops": []
  //         }
  //     ]
  // }, {   "price": 105720,
  // "carrier": "S7",
  // "segments": [
  //     {
  //         "origin": "MOW",
  //         "destination": "HKT",
  //         "date": "2024-04-12T16:01:31.349Z",
  //         "duration": 614,
  //         "stops": []
  //     },
  //     {
  //         "origin": "HKT",
  //         "destination": "MOW",
  //         "date": "2024-07-19T20:00:09.901Z",
  //         "duration": 834,
  //         "stops": []
  //     }
  // ]
  // },{   "price": 105720,
  // "carrier": "S7",
  // "segments": [
  //     {
  //         "origin": "MOW",
  //         "destination": "HKT",
  //         "date": "2024-04-12T16:01:31.349Z",
  //         "duration": 614,
  //         "stops": []
  //     },
  //     {
  //         "origin": "HKT",
  //         "destination": "MOW",
  //         "date": "2024-07-19T20:00:09.901Z",
  //         "duration": 834,
  //         "stops": []
  //     }
  // ]
  // }]

  const content = (bigState.rawTickets.error) ? <ErrorIndicator /> :  ;

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

          {(bigState.ti.length === 0 && searchValue !== '' && loading === false) ? <Alert message="no movies on request" description="Please type more information" type="info" /> : null}
          {error ? <ErrorIndicator /> :
            loading ? <Spin tip="Loading" size='large'><div className='content' /></Spin> : <MovieList movies={movies} windowSize={props.windowSize} onChangeRate={props.onChangeRate} />}

          <TicketsList listArr={bigState.tickets.Tickets.slice(0, 5)} />
        </section>
      </main>
    </div>
  );
}

export default App;
