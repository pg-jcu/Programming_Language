import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSage } from "./counter";
import todos from "./todos";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  counter,
  todos,
  sample,
  loading
});

export function* rootSaga() {
  yield all([counterSage()]);
}

export default rootReducer;