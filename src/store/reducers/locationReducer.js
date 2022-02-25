const initialState = {}
const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOCATION":
            return { ...state, latitude: action.latitude, longitude: action.longitude }
        default:
            return state
    }
};

export default locationReducer;