import authCheckReducer from "./authCheckReducer";
import closeHeaderReducer from "./closeHeaderReducer"
import deliverReducers from "./deliverReducers"
import restaurantInfoReducer from "./restaurantInfoReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  closeHeaderReducer,
  authCheckReducer,
  deliverReducers,
  restaurantInfoReducer
});

export default allReducers;
