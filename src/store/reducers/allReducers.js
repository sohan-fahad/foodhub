import authCheckReducer from "./authCheckReducer";
import closeHeaderReducer from "./closeHeaderReducer"
import deliverReducers from "./deliverReducers"
import restaurantInfoReducer from "./restaurantInfoReducer"
import totalPriceReducer from "./totalPriceReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  closeHeaderReducer,
  authCheckReducer,
  deliverReducers,
  restaurantInfoReducer,
  totalPriceReducer
});

export default allReducers;
