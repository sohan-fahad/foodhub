import authCheckReducer from "./authCheckReducer";
import closeHeaderReducer from "./closeHeaderReducer"
import deliverReducers from "./deliverReducers"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  closeHeaderReducer,
  authCheckReducer,
  deliverReducers
});

export default allReducers;
