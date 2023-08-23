import { filterValue, FilterState, Action } from '../../types/types';



const initialState = {
  all: false,
  peresadki: [false, false, false, false],
}


const filterReducer = (state: FilterState, action: Action) => {
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
      const all = !state.all;
      const filter = { all: all, peresadki: [all, all, all, all] };
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_no_transfer: {
      const filter = tooglePeresadki(state.peresadki, 0);
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_1_transef: {
      const filter = tooglePeresadki(state.peresadki, 1);
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_2_transef: {
      const filter = tooglePeresadki(state.peresadki, 2);
      console.log('old state', state);
      return { ...state, filter };
    }
    case filterValue.filter_togle_3_transer: {
      const filter = tooglePeresadki(state.peresadki, 3);
      console.log('old state', state);
      return { ...state, filter };
    }

    default: return state;
  }
}

export default filterReducer;