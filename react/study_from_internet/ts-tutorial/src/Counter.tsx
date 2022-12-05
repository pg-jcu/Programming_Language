import { useReducer } from "react";
import "./styles/Counter.css";

interface State {
  count: number;
}

type Action = { type: 'RESET' } | { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error('Unhandled action');
  }
}

interface CounterProps {
  initialCount: number;
}

function Counter({ initialCount }: CounterProps) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  const onReset = () => dispatch({ type: 'RESET' });

  return (
    <div className="Counter">
      <h2>{state.count}</h2>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
