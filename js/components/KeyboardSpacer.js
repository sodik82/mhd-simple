
'use strict';

import React from 'react';
import { Platform } from 'react-native';

import OriginalKeyboardSpacer from 'react-native-keyboard-spacer';

export default function KeyboardSpacer() {
  if (Platform.OS === "android") {
    // disable keybaord spacer for android
    return null;
  }
  return <OriginalKeyboardSpacer topSpacing={-50}/>;
}
