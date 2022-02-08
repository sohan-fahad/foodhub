const initialState = []

const restaurantInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RESTAURANT_INFO":
            return { ...state, restaurantInfo: action.payload }
        default:
            return state
    }

};

export default restaurantInfoReducer;