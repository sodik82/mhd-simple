
'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import virtualTable from './virtualTable';
import app from './app';

export default combineReducers({

  drawer,
  route,
  virtualTable,
  app,

})
