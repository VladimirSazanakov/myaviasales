export enum filterValue {
  filter_togle_all = 'FILTER_TOGLE_ALL',
  filter_togle_no_transfer = 'FILTER_TOGLE_NO_TRANSFER',
  filter_togle_1_transef = 'FILTER_TOGLE_1_TRANSFER',
  filter_togle_2_transef = 'FILTER_TOGLE_2_TRANSFER',
  filter_togle_3_transer = 'FILTER_TOGLE_3_TRANSFER',
}

export interface FilterState {
  all: boolean,
  peresadki: boolean[],
}

export interface Action {
  type: string,
  payload?: any;
}

//------------RawTicketTypes-------------------

export interface rawTicketsState {
  isLoading: boolean;
  error: boolean;
  rawTickets: {
    searchId: string;
    tickets: {
      stop: boolean,
      tickets: Ticket[]
    }
  }
}

export enum RawTicketValueActions {
  fetchId = 'FETCH_SEARCH_ID',
  fetchTickets = 'FETCH_TICKETS',
  setloading = 'SET_LOADING',
  setError = 'SET_ERROR'
}

export interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}

export interface TicketSegment {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
}

//-----------------Tabs Types-----------------

export enum TabsValue {
  cheapest = 'CHEAPEST',
  fastest = 'FASTEST',
  optimal = 'OPTIMAL'
}

export interface TabsState {
  tabCurrentValue: TabsValue;
}
//--------------------------------------------

///--------------Ticket reducer---------------------

export interface TicketsState {
  Tickets: Ticket[];
}

export enum TicketsValueAction {
  setTikets= 'SET_TIKETS',
}

//------------------------------------

export interface userState {
  state: any[];
  loading: boolean;
  error: boolean | null | string;
};

export enum UserActionTypes {
  Fetch_users = 'Fetch_users',
  FETCH_USERS_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

interface FetchUsersAction {
  type: UserActionTypes.Fetch_users;

}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];

}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;

}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;