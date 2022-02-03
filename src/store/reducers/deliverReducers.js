const initialState = ""
const deliverReducers = (state = initialState, action) => {
    switch (action.type) {
        case "DELIVERY":
            return { ...state, deliveryStatus: "delivery" }
        case "PICKUP":
            return { ...state, deliveryStatus: "pickup" }
        default:
            return { ...state, deliveryStatus: "delivery" }
    }
};

export default deliverReducers;