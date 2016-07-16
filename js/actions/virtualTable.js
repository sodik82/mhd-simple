export const SET = 'virtualTable_SET';
export const ON_EDIT = 'virtualTable_ON_EDIT';
export const ON_FOCUS = 'virtualTable_ON_FOCUS';
export const ON_BLUR = 'virtualTable_ON_BLUR';

export function inputSet(value) {
  return {
      type : SET,
      value,
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
