import { combineReducers } from "redux";
import authReducer from "./authReducer";
import drawerReducer from "./drawerReducer";
import matchesReducer from "./matchesReducer";
import errorReducer from "./errorReducer";
import popupReducer from "./popupReducer";
import betsReducer from "./betsReducer";

const rootReducer = combineReducers({
  user: authReducer,
  match: matchesReducer,
  bet: betsReducer,
  drawer: drawerReducer,
  error: errorReducer,
  popup: popupReducer
});

export default rootReducer;
