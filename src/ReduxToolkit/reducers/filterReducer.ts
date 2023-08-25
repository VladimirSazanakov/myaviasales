import { createSlice } from '@reduxjs/toolkit';

import { filterValue, FilterState, Action } from '../../types/types';

const initialState: FilterState = {
  all: false,
  peresadki: [false, false, false, false],
};

const tooglePeresadki = (state: FilterState, el: number) => {
  state.peresadki[el] = !state.peresadki[el];
  state.all = state.peresadki.reduce((summ, el) => summ && el, true);
};

export const filterSlice = createSlice({
  name: 'filterReducer',
  initialState,
  reducers: {
    [filterValue.filter_togle_all](state: FilterState, action: Action) {
      state.all = !state.all;
      state.peresadki.forEach(
        (el, index) => (state.peresadki[index] = state.all)
      );
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
  },
});

export default filterSlice.reducer;
