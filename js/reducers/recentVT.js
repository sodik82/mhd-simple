import { Map, Record } from 'immutable';

import { ON_SUGGESTION } from '../actions/virtualTable';
import { LOADED } from '../actions/recentVT';

export const RecentItem = Record ({
      hits: 0,
  });
const initialState = new Map();


export default function (state = initialState, action) {
  switch (action.type) {
    // evesdropping on selection
    case ON_SUGGESTION: {
      const { suggestion } = action;
      let item = state.get(suggestion.id, new RecentItem());
      return state.set(suggestion.id, item.set('hits', 1 + item.hits));
    }
    case LOADED:
      return action.recent;
  }
  // default
  return state;
}
