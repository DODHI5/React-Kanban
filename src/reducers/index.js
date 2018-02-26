import { combineReducers } from "redux";
import cardsReducer from "./planetsReducers";

export default combineReducers({
  cards: planetReducer
});
