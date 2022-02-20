import authCheckReducer from "./authCheckReducer";
import closeHeaderReducer from "./closeHeaderReducer"
import deliverReducers from "./deliverReducers"
import restaurantInfoReducer from "./restaurantInfoReducer"
import totalPriceReducer from "./totalPriceReducer"
import totalQuantityReducer from "./totalQuantityReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  closeHeaderReducer,
  authCheckReducer,
  deliverReducers,
  restaurantInfoReducer,
  totalPriceReducer,
  totalQuantityReducer
});

export default allReducers;
