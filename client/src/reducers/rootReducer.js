import { combineReducers } from "redux";
import pickupPointReducer from "./pickupPointReducer";

export const rootReducer = combineReducers({
  pickupPoint: pickupPointReducer
});
