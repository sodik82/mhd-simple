import { getStops } from '../data/';
import { List } from 'immutable';

const MAX_SUGGESTIONS = 7;

export function getSuggestions(state) {
  const query = state.virtualTable.inputText;
  let suggestions = getStops(query);
  if (suggestions.length > MAX_SUGGESTIONS) {
    suggestions.length = MAX_SUGGESTIONS;
  }
  return List(suggestions);
}
