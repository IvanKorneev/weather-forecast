const initialState = {
    weatherData: {},
    error: null
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'LOCATION_LOADED':
            return {
                ...state,
                weatherData: action.payload
            };

        default:
            return state;
    }
};