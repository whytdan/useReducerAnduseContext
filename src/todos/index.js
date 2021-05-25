import React, { useState, useReducer } from 'react';

const INIT_STATE = {
  todos: [],
  x: 0,
  y: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default function Todos() {
  const [title, setTitle] = useState('');
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, isDone: false };

    const action = {
      type: 'ADD_TODO',
      payload: todo,
    };

    dispatch(action);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />
      </form>

      <pre>{JSON.stringify(state, 0, 2)}</pre>
    </div>
  );
}
