
const initialState = true

const closeHeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLOSE_HEADER_POPUP":
            return { ...state, headerPopUp: false }
        default:
            return state
    }
};

export default closeHeaderReducer;