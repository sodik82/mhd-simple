// contains generic application actions that does not deserve own action creators...
export const SET_GEO = 'appActions_SET_GEO';

export function getGeoLocation() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var geoPosition = JSON.stringify(position);
        dispatch(setGeoLocation(geoPosition));
      },
      (error) => console.log("problem getting location", error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

function setGeoLocation(position) {
  return {
    type: SET_GEO,
    position,
  }
}
