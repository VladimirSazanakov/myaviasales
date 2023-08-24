import { createSlice } from "@reduxjs/toolkit";
import { Action, TabsState, TabsValue } from "../../types/types";

const initialState: TabsState = {
  tabCurrentValue: TabsValue.cheapest,
}

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTabs(state: TabsState, action: Action) {
      state.tabCurrentValue = action.payload
    }
  }
})

// const tabsReducer = (state: TabsState, action: Action) => {
//   switch (action.type) {
//     case TabsValue.cheapest: return { tabSelect: TabsValue.cheapest };
//     case TabsValue.fastest: return { tabSelect: TabsValue.fastest };
//     case TabsValue.optimal: return { tabSelect: TabsValue.optimal };
//     default: return state;
//   };
// };

// export default tabsReducer;

export default tabsSlice.reducer;