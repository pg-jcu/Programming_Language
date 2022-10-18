import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSage() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSage() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSage() {
  yield takeEvery(INCREASE_ASYNC, increaseSage);
  yield takeLatest(DECREASE_ASYNC, decreaseSage);
}

const initialState = {
  number: 0
};

const counter = handleActions({
  [INCREASE]: (state, action) => ({ number: state.number + 1 }),
  [DECREASE]: (state, action) => ({ number: state.number - 1 })
}, initialState);

export default counter;