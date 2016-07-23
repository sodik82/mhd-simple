import { getStops } from '../data/';
import { List } from 'immutable';

const MAX_SUGGESTIONS = 7;

export function getSuggestions(cfg) {
  const { query, near } = cfg;
  let suggestions = getStops(query);
  if (near) {
    suggestions = scoreByGeo(suggestions, near);
  }
  suggestions = sortByScore(suggestions);
  if (suggestions.length > MAX_SUGGESTIONS) {
    suggestions.length = MAX_SUGGESTIONS;
  }
  return List(suggestions);
}

function scoreByGeo(suggestions, near) {
  const { longitude, latitude } = near.coords;
  const score = (s) => {
    if (s.x && s.y) {
      s.distance = distance(s.x, s.y, latitude, longitude );
      s.score += 10 - Math.log(s.distance);
    }
    return s;
  };
  return suggestions.map(score);
}

/** approximate (faster) geo distance : http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula */
export function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function sortByScore(suggestions) {
  suggestions.sort((a,b) => b.score - a.score);
  return suggestions;
}
