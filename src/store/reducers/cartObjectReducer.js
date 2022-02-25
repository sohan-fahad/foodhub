const initialState = [];

const cartObjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CART_ITEMS":
            return { ...state, cartObjectItem: action?.cartObject };
        default: return state
    }
};

export default cartObjectReducer;
