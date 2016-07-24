import { AsyncStorage } from 'react-native';
import { fromJS } from 'immutable';

import { RecentItem } from '../../js/reducers/recentVT';

export const LOADED = 'recentVT_LOAD';

const STORE_KEY = '@recentVT';

export function save(store = AsyncStorage) {
  return (dispatch, getState) => {
    const map = getState().recentVT;
    const recent = JSON.stringify(map.toJS());
    store.setItem(STORE_KEY, recent);
  };
}

export function load(store = AsyncStorage) {
  return (dispatch) => {
    store.getItem(STORE_KEY)
    .then((value) => {
      if (value) {
        const recent = JSON.parse(value);
        let map = fromJS(recent);
        // we need to transform records
        map = map.map((v) => mapToRecord(new RecentItem(), v));
        dispatch(loaded(map));
      }
    });
  };
}

function loaded(recent) {
  return {
    type: LOADED,
    recent,
  }
}

// TODO move to immutable util
export function mapToRecord(destinationRecord, sourceMap) {
  return destinationRecord.merge(sourceMap);
}
