import { createSlice } from '@reduxjs/toolkit';

import { Action, TabsState, TabsValue } from '../../types/types';

const initialState: TabsState = {
  tabCurrentValue: TabsValue.cheapest,
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTabs(state: TabsState, action: Action) {
      state.tabCurrentValue = action.payload;
    },
  },
});

export default tabsSlice.reducer;
