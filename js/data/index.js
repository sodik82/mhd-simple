import db from './iStops';
import { normalizeName } from './dataUtils';

/*
Stop type: { name, id }
*/

/**
Get all stops matching query string.
*/
export function getStops(query) {
  query = normalizeName(query);
  // TODO perf - precompute normalized names for `db`
  const names = Object.keys(db).filter(name => normalizeName(name).indexOf(query) !== -1);
  return names.map(name => {
    const stop = db[name];
    return {
      name,
      id: stop.zid,
      vtid: stop.vtid,
      x: stop.x && parseFloat(stop.x),
      y: stop.y && parseFloat(stop.y),
    };
  });
}
