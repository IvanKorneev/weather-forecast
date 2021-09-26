import {getWeatherByLocation} from "../../api/api";

const locationLoaded = (newLocation) => {
    return {
        type: 'LOCATION_LOADED',
        payload: newLocation
    }
};
const getWeatherByCity = (newWeatherByCity) => {
    return {
        type: 'GET_WEATHER_BY_CITY',
        payload: newWeatherByCity
    }
};

const locationError = (error) => {
    return {
        type: 'LOCATION_ERROR',
        payload: error
    }
};

export const fetchLocation = (_lat, _long) => {
    return (dispatch) => {
        getWeatherByLocation(_lat, _long).then((response) => dispatch(locationLoaded(response)))
            .catch((error) => dispatch(locationError(error)));
    }
}


