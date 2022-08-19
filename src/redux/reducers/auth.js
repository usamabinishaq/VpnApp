import {LOADING} from '../actions/types';
const initial_state = {
  loading: false,
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
