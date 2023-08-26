import React, { useEffect } from 'react';
import { Alert, Pagination } from 'antd';

import { fetchSessionId, fetchTickets } from '../asyncActions/asyncActions';
import { TicketFilter } from '../../service/ticketFunctions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ticketsSlice } from '../../ReduxToolkit/reducers/tickets';
import TicketsList from '../TicketsList/insex';
import ErrorIndicator from '../ErrorIndicator';
import LoadIndicator from '../LoadIndicator';
import { Ticket } from '../../types/types';
import Filter from '../Filter';
import Tabs from '../Tabs';
import logo from '../../img/Logo.svg';

import classes from './App.module.scss';

function App() {
  const bigState = useAppSelector((state) => state);
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
  }, [filterState]);

  useEffect(() => {
    sortArr();
  }, [tabState]);

  const loadAllData = () => {
    if (!isLoading) {
      if (!searchId) {
        dispatch(fetchSessionId());
      } else {
        dispatch(fetchTickets(searchId));
      }
    }
  };

  const onChangePagination = (page: number) => {
    let tempPage: any;
    tempPage = page;

    dispatch(ticketsActions.SET_CURRENT_PAGE(tempPage));
    tempPage = null;
  };

  const filterArr = () => {
    const ticketsActions = ticketsSlice.actions;
    let NewArr: Ticket[] = [];

    filterState.peresadki.forEach((on: boolean, peresadki: number) => {
      if (on) {
        NewArr = NewArr.concat(TicketFilter(rawTickets, peresadki));
      }
    });

    let tempNewArr: any;
    tempNewArr = NewArr;
    dispatch(ticketsActions.SET_TIKETS(tempNewArr));
    tempNewArr = [];
    sortArr();
  };

  const sortArr = () => {
    let TtabCurrenValue: any;
    TtabCurrenValue = tabState.tabCurrentValue;
    dispatch(ticketsActions.SORT_BY_PRICE(TtabCurrenValue));
    TtabCurrenValue = 0;
  };

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
          {isLoading ? <LoadIndicator /> : null}
          {error ? <ErrorIndicator /> : null}

          {PageTikets.length > 0 ? (
            <TicketsList listArr={PageTikets} />
          ) : (
            <Alert
              message="Рейсов подходящих под заданные фильтры не найдено"
              type="info"
            />
          )}
        </section>
      </main>
      <footer className={classes['app-footer']}>
        <Pagination
          current={CurentPage}
          onChange={onChangePagination}
          total={TotalPages * 10}
          showSizeChanger={false}
          hideOnSinglePage={true}
        />
      </footer>
    </div>
  );
}

export default App;
