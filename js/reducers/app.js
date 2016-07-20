import { Record } from 'immutable';

import { SET_GEO } from '../actions/app';

const StateRecord = Record ({
      geoPosition: undefined,
  });
const initialState = new StateRecord();
/**
Sample geoPosition: '{"coords":{"speed":-1,"longitude":17.019,"latitude":48.093,"accuracy":5,"heading":-1,"altitude":0,"altitudeAccuracy":-1},"timestamp":1469042279140.239}' }
*/

export default function (state = initialState, action) {
  console.log("app reducer", action);
  switch (action.type) {
    case SET_GEO:
      return state.set('geoPosition', action.position);
  }
  // default
  return state;
}
