import { Record } from 'immutable';

import { SET, ON_EDIT, ON_FOCUS, ON_BLUR, ON_SUGGESTION } from '../actions/virtualTable';

const StateRecord = Record ({
      inputText: '',
      keyboardOpen : false,
      selectedStop: undefined,
  });
const initialState = new StateRecord();


export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET:
      return state.set('inputText', action.value);
    case ON_FOCUS:
      return state.set('keyboardOpen', true);
    case ON_EDIT:
    case ON_BLUR:
      return state.set('keyboardOpen', false);
    case ON_SUGGESTION: {
      const { suggestion } = action;
      return state.set('keyboardOpen', false)
        .set('selectedStop', suggestion)
        .set('inputText', suggestion.name);
    }
  }
  // default
  return state;
}
