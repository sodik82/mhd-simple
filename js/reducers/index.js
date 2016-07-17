
'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import virtualTable from './virtualTable';

export default combineReducers({

  drawer,
  route,
  virtualTable,

})
