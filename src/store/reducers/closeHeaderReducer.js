
const initialState = true

const closeHeaderReducer = (state = initialState, action) => {
    if (action.type === "CLOSE_HEADER_POPUP") {
        return state = false
    }
    else {
        return state = true
    }
};

export default closeHeaderReducer;