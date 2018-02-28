import { FETCH_ALCOHOL_CHOICES, FETCH_BOTTLE, CLEAR_CHOICES } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case CLEAR_CHOICES:
      return [];
    case FETCH_ALCOHOL_CHOICES:
      return action.payload.data.result;
    case FETCH_BOTTLE:
      return [action.payload.data.result];
    default:
      return state;
  }
}