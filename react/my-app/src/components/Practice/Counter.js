import { useReducer } from 'react';
import '../../styles/Practice/Counter.css';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <div className="Counter">
      <div>{state.value}</div>
      <div>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>
          +
        </button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;