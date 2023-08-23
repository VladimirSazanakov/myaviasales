import { createSlice } from '@reduxjs/toolkit';
import { filterValue, FilterState, Action } from '../../types/types';

const initialState: FilterState = {
  all: false,
  peresadki: [false, false, false, false],
}

const tooglePeresadki = (state: FilterState, el: number) => {
  state.peresadki[el] = !state.peresadki[el];
  state.all = state.peresadki.reduce((summ, el) => summ && el, true);
}

export const filterSlice = createSlice({
  name: 'filterReducer',
  initialState,
  reducers: {

    [filterValue.filter_togle_all](state: FilterState, action: Action) {
      state.all = !state.all;
      state.peresadki.forEach((el, index) => state.peresadki[index] = state.all);
    },

    [filterValue.filter_togle_no_transfer](state: FilterState, action: Action) {
      tooglePeresadki(state, 0);
    },

    [filterValue.filter_togle_1_transef](state: FilterState, action: Action) {
      tooglePeresadki(state, 1);
    },

    [filterValue.filter_togle_2_transef](state: FilterState, action: Action) {
      tooglePeresadki(state, 2);
    },

    [filterValue.filter_togle_3_transer](state: FilterState, action: Action) {
      tooglePeresadki(state, 3);
    },
  }
});

const filterReducer = filterSlice.reducer;


// const initialState = {
//   all: false,
//   peresadki: [false, false, false, false],
// }

// const filterReducer = (state: FilterState, action: Action) => {
//   if (state === undefined) {
//     return initialState;
//   }

//   function tooglePeresadki(peresadki: boolean[], el: number) {
//     const newPeresadki = [...peresadki];
//     newPeresadki[el] = !peresadki[el];
//     const all = newPeresadki.reduce((summ, el) => summ && el, true);
//     const filter = { all: all, peresadki: [...newPeresadki] };
//     return filter;
//   }

//   switch (action.type) {
//     case filterValue.filter_togle_all: {
//       const all = !state.all;
//       const filter = { all: all, peresadki: [all, all, all, all] };
//       console.log('old state', state);
//       return { ...state, filter };
//     }
//     case filterValue.filter_togle_no_transfer: {
//       const filter = tooglePeresadki(state.peresadki, 0);
//       console.log('old state', state);
//       return { ...state, filter };
//     }
//     case filterValue.filter_togle_1_transef: {
//       const filter = tooglePeresadki(state.peresadki, 1);
//       console.log('old state', state);
//       return { ...state, filter };
//     }
//     case filterValue.filter_togle_2_transef: {
//       const filter = tooglePeresadki(state.peresadki, 2);
//       console.log('old state', state);
//       return { ...state, filter };
//     }
//     case filterValue.filter_togle_3_transer: {
//       const filter = tooglePeresadki(state.peresadki, 3);
//       console.log('old state', state);
//       return { ...state, filter };
//     }

//     default: return state;
//   }
// }

//export default filterReducer;

export default filterSlice.reducer