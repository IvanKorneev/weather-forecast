import {getLocation} from "../../api/api";

const locationLoaded = (newLocation) => {
    return {
        type: 'LOCATION_LOADED',
        payload: newLocation
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
        getLocation(_lat, _long).then((response) => dispatch(locationLoaded(response)))
            .catch((error) => dispatch(locationError(error)));
    }
}


