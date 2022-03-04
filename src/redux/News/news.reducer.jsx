import { ADDNEWS, DELNEWS } from './news.types';

const INITIAL_STATE = {
  isLoading: false,
  count: 0,
};

// eslint-disable-next-line default-param-last
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDNEWS:

      return {

        ...state, isLoading: true,

      };

    case DELNEWS:

      return {
        ...state, count: state.count - 1, isLoading: false,

      };

    default: return state;
  }
};

export default reducer;
