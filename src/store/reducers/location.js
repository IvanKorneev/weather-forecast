const initialState = {
    location: [],
    error: null
};
export default  (state = initialState, action) => {
    switch (action.type) {
        case 'LOCATION_LOADED':
            return {
                ...state,
                location: action.payload
            };

        default:
            return state;
    }
};