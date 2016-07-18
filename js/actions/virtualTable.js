export const SET = 'virtualTable_SET';
export const ON_EDIT = 'virtualTable_ON_EDIT';
export const ON_FOCUS = 'virtualTable_ON_FOCUS';
export const ON_BLUR = 'virtualTable_ON_BLUR';
export const ON_SUGGESTION = 'virtualTable_ON_SUGGESTION';

export function inputSet(value) {
  return {
      type : SET,
      value,
  };
}

export function selectSuggestion(suggestion) {
  return {
      type : ON_SUGGESTION,
      suggestion,
  };
}

export function inputFocus() {
  return { type : ON_FOCUS };
}

export function inputBlur() {
  return { type : ON_BLUR };
}

export function inputEdit() {
  return { type : ON_EDIT };
}
