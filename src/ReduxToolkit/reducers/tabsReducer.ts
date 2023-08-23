import { Action, TabsState, TabsValue } from "../../types/types";

const initialState = {
  tabsSelect: TabsValue.cheapest,
}

const tabsReducer = (state: TabsState, action: Action) => {
  switch (action.type) {
    case TabsValue.cheapest: return { tabSelect: TabsValue.cheapest };
    case TabsValue.fastest: return { tabSelect: TabsValue.fastest };
    case TabsValue.optimal: return { tabSelect: TabsValue.optimal };
    default: return state;
  };
};

export default tabsReducer;