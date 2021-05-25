import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
};

export default function ReducerIntro() {
  // order is important!
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
    </div>
  );
}
