import React, { useEffect } from 'react';
import { Alert, Pagination } from 'antd';

import classes from './App.module.scss';

import { fetchSessionId, fetchTickets } from '../asyncActions/asyncActions';
import { TicketFilter, sortPrice } from '../../service/ticketFunctions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ticketsSlice } from '../../ReduxToolkit/reducers/tickets';
import TicketsList from '../TicketsList/insex';
import ErrorIndicator from '../ErrorIndicator';
import LoadIndicator from '../LoadIndicator';
import { Ticket } from '../../types/types';
import Filter from '../Filter';
import Tabs from '../Tabs';

import logo from '../../img/Logo.svg';

function App() {
  const bigState = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const { rawTickets, isLoading, error, searchId } = bigState.rawTickets;
  const { PageTikets, CurentPage, TotalPages } = bigState.tickets;

  const filterState = bigState.filterReducer;
  const tabState = bigState.tabs;

  const ticketsActions = ticketsSlice.actions;

  useEffect(() => {
    loadAllData();
  }, [searchId]);

  useEffect(() => {
    if (rawTickets.length > 0) {
      filterArr();
    }
  }, [filterState])

  useEffect(() => {
    sortArr();
  }, [tabState]);

  const loadAllData = () => {
    if (!isLoading) {
      if (!searchId) {
        dispatch(fetchSessionId());
      } else {
        dispatch(fetchTickets(searchId));
      };
    };
  };

  const onChangePagination = (page: number) => {
    dispatch(ticketsActions.SET_CURRENT_PAGE(page));
  }

  const filterArr = () => {
    const ticketsActions = ticketsSlice.actions;
    let NewArr: Ticket[] = [];

    filterState.peresadki.forEach((on, peresadki) => {
      if (on) {
        NewArr = NewArr.concat(TicketFilter(rawTickets, peresadki))
      }
    })
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

          {(PageTikets.length > 0) ? <TicketsList listArr={PageTikets} /> : <Alert message="Рейсов подходящих под заданные фильтры не найдено" type='info' />}
        </section>
      </main>
      <footer className={classes['app-footer']}>
        <Pagination current={CurentPage} onChange={onChangePagination} total={TotalPages}
          showSizeChanger={false} hideOnSinglePage={true} />

      </footer>
    </div>
  );
}

export default App;
