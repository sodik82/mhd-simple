import db from './iStops';

/*
Stop type: { name, id }
*/

/**
Get all stops matching query string.
*/
export function getStops(query) {
  const names = Object.keys(db).filter(name => name.indexOf(query) !== -1);
  return names.map(name => ({name, id: db[name]}));
}
