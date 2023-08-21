const initialState = {
  filter: {
    all: false,
    peresadki: [false, false, false, false],
  }
}
enum filterValue {
  filter_togle_all = 'FILTER_TOGLE_ALL',
  filter_togle_no_transfer = 'FILTER_TOGLE_NO_TRANSFER',
  filter_togle_1_transef = 'FILTER_TOGLE_1_TRANSFER',
  filter_togle_2_transef = 'FILTER_TOGLE_2_TRANSFER',
  filter_togle_3_transer = 'FILTER_TOGLE_3_TRANSFER',
}

export const reducer = (state: any, action: any) => {
  if (state === undefined) {
    return initialState;
  }

  function tooglePeresadki(peresadki: boolean[], el: number) {
    const newPeresadki = [...peresadki];
    newPeresadki[el] = !peresadki[el];
    const all = newPeresadki.reduce((summ, el) => summ && el, true);
    const filter = { all: all, peresadki: [...newPeresadki] };
    return filter;
  }


  switch (action.type) {
    case filterValue.filter_togle_all: {
      const all = !state.filter.all;
      const filter = { all: all, peresadki: [all, all, all, all] };
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_no_transfer: {
      const filter = tooglePeresadki(state.filter.peresadki, 0);
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_1_transef: {
      const filter = tooglePeresadki(state.filter.peresadki, 1);
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_2_transef: {
      const filter = tooglePeresadki(state.filter.peresadki, 2);
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_3_transer: {
      const filter = tooglePeresadki(state.filter.peresadki, 3);
      console.log('old state', state);
      return { ...state, filter };
    }

    default: return state;
  }
}

// let state = reducer(undefined, { type: 'setbesperedadoc' });

// export { state };

// import { UserActionTypes, UserAction, userState } from "../../types/user";


// const initialState: userState = {
//   state: [],
//   loading: false,
//   error: false
// };

// export const userReducer = (state = initialState, action: UserAction): userState => {
//   switch (action.type) {
//     case UserActionTypes.Fetch_users: return { loading: true, error: null, state: [] }
//     case UserActionTypes.FETCH_USERS_SUCCESS: return { loading: true, error: null, state: action.payload }
//     case UserActionTypes.FETCH_USER_ERROR: return { loading: true, error: 'ERROR', state: [] }
//     default: return state;
//   }

// }