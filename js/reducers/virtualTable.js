import { Record, List } from 'immutable';

import { SET, ON_EDIT, ON_FOCUS, ON_BLUR } from '../actions/virtualTable';
import { getNames } from '../data/';

const StateRecord = Record ({
      inputText: '',
      suggestionsOpen : false,
      suggestions : undefined,
  });
const initialState = new StateRecord();


export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET:
      return state.set('inputText', action.value).set('suggestions', getSuggestions(action.value));
    case ON_FOCUS:
      return state.set('suggestionsOpen', true);
    case ON_EDIT:
    case ON_BLUR:
      return state.set('suggestionsOpen', false);
  }
  // default
  return state;
}

const MAX_SUGGESTIONS = 10;

function getSuggestions(value) {
  if (!value) {
    return undefined;
  }
  let suggestions = getNames(value);
  if (suggestions.length > MAX_SUGGESTIONS) {
    suggestions.length = MAX_SUGGESTIONS;
  }
  return List(suggestions);
}
