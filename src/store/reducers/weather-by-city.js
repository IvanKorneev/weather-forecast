const initialState = {
    weatherByCity: [],
    error: null
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER_BY_CITY':
            return {
                ...state,
                weatherByCity: action.payload
            };

        default:
            return state;
    }
};