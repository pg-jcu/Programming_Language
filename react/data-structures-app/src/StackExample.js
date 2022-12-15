import { useReducer } from "react";
import { rows } from "./rowsData";

const initialState = { rows, history: [] };

function removeRow(state, action) {
  return state.rows.filter(({ id }) => id !== action.id);
}

function addRowAtOriginalIndex(state) {
  const undo = state.history[state.history.length - 1];

  return [
    ...state.rows.slice(0, undo.index),
    undo.row,
    ...state.rows.slice(undo.index)
  ];
}

function reducer(state, action) {
  switch (action.type) {
    case "REMOVE":
      return {
        rows: removeRow(state, action),
        history: state.history.concat({
          index: action.index,
          row: state.rows[action.index]
        }),
      };
    case "UNDO":
      return {
        rows: addRowAtOriginalIndex(state),
        history: state.history.slice(0, -1),
      };
    default: 
      throw new Error();
  }
}

function StackExample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <button 
        onClick={() => dispatch({ type: "UNDO" })}
        disabled={state.history.length === 0}
      >
        Undo Last Action
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {state.rows.map(({ id, name }, index) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <button onClick={() => dispatch({ type: "REMOVE", id , index })}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default StackExample;
