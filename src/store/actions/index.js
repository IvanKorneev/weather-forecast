import {getWeatherByCityy, getWeatherByLocation} from "../../api/api";


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
const getWeatherByCityErorr = (error)=>{
    return{
        type: 'GET_WEATHER_BY_CITY_ERROR',
        payload: error
    }
}

export const fetchLocation = (_lat, _long) => {
    return (dispatch) => {
        getWeatherByLocation(_lat, _long).then((response) => dispatch(locationLoaded(response)))
            .catch((error) => dispatch(locationError(error)));
    }
}

export const fetchWeatherByCity = (data) => {
    return (dispatch) => {
        getWeatherByCityy(data).then((response) => dispatch(getWeatherByCity(response)))
            .catch((error) => dispatch(getWeatherByCityErorr(error)));
    }
}



