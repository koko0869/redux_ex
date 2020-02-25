import { combineReducers } from "redux";
import infos from "./infos";
import counter from "./counter.js";
const rootReducer = combineReducers({
  infos,
  counter
});

export default rootReducer;
