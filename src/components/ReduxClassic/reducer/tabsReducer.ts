interface tabs {
  faster: 'fasterTab';
  deshev: 'deshev';
  optimal: 'optimal';
}

const initTabs = {
  tabsSelect: 'fasterTab',
}

export const tabsReducer = (state = initTabs, action: any) => {
  switch (action.type) {
    case 'fasterTab': return { tabSelect: 'fasterTab' };
    case 'deshev': return { tabSelect: 'deshev' };
    case 'optimal': return { tabSelect: 'optimal' };
    default: return state;
  }
}