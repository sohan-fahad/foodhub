import authCheckReducer from "./authCheckReducer";
import logOutReducer from "./logOutReducer";
import loginReducer from "./loginReducer";
import closeHeaderReducer from "./closeHeaderReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authCheckReducer,
  logOutReducer,
  loginReducer,
  closeHeaderReducer
});

export default allReducers;
