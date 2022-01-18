import authCheckReducer from "./authCheckReducer";
import logOutReducer from "./logOutReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authCheckReducer,
  logOutReducer,
  loginReducer,
});

export default allReducers;
