import { expect } from 'chai';
/* globals describe, it */

import { Map } from 'immutable';

import { load, save, mapToRecord } from '../../js/actions/recentVT';
import { RecentItem } from '../../js/reducers/recentVT';

describe('recentVT actions', function () {
  const store = {
    setItem : (key, val) => {
      store[key] = val;
    },
    getItem : (key) => {
      return Promise.resolve(store[key]);
    },
  }

  const getState = () => {
    return {
      recentVT: Map.of("z1", new RecentItem().set('hits', 5)),
    }
  }

  it('save/load returns equivalent object', function (done) {
    const dispatch = (action) => {
      const record = action.recent.get("z1");
      expect(record.hits).to.be.equal(5);
      done();
    }

    save(store)(undefined, getState);
    load(store)(dispatch);
  });

  it('mapToRecord transform immutable Map to Record', function() {
    const record = mapToRecord(new RecentItem(), Map.of("hits", 5));
    expect(record.hits).to.be.equal(5);
  });
});
