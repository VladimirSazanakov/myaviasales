import { UserActionTypes, UserAction, userState } from "../../types/user";


const initialState: userState = {
  state: [],
  loading: false,
  error: false
};

export const userReducer = (state = initialState, action: UserAction): userState => {
  switch (action.type) {
    case UserActionTypes.Fetch_users: return { loading: true, error: null, state: [] }
    case UserActionTypes.FETCH_USERS_SUCCESS: return { loading: true, error: null, state: action.payload }
    case UserActionTypes.FETCH_USER_ERROR: return { loading: true, error: 'ERROR', state: [] }
    default: return state;
  }

}