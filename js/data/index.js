import db from './iStops';

/**
Get all names matching query string.
*/
export function getNames(query) {
  return Object.keys(db).filter(name => name.indexOf(query) !== -1);
}
