
'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import virtualTable from './virtualTable';
import recentVT from './recentVT';
import app from './app';

export default combineReducers({

  drawer,
  recentVT,
  route,
  virtualTable,
  app,

})
