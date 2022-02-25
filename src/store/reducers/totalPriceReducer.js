const initialState = {}

const totalPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOTAL":
            let subtotalObj = action.payload
            console.log(subtotalObj);
            let deliveryFee = action.deliveryFee
            let subtotal = Object.values(subtotalObj).reduce((a, b) => a + b, 0)
            let totalWithVat = Math.round((subtotal / 100) * 2 + subtotal + deliveryFee)
            return { ...state, total: totalWithVat, subtotal }
        default:
            return state
    }
};

export default totalPriceReducer;