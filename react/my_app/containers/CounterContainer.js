import ReduxCounter from "../components/ReduxCounter";
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from "../modules/counter";
import React, { useCallback } from "react";

function CounterContainer() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <ReduxCounter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default React.memo(CounterContainer);