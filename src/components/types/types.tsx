export enum filterValue {
  filter_togle_all = 'FILTER_TOGLE_ALL',
  filter_togle_no_transfer = 'FILTER_TOGLE_NO_TRANSFER',
  filter_togle_1_transef = 'FILTER_TOGLE_1_TRANSFER',
  filter_togle_2_transef = 'FILTER_TOGLE_2_TRANSFER',
  filter_togle_3_transer = 'FILTER_TOGLE_3_TRANSFER',
}

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