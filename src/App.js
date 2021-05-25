import React from 'react';
import ModeContextProvider from './context';
import ReducerIntro from './reducerIntro';
import Todos from './todos';
import UserInterFace from './userInterface';

function App() {
  return (
    // HOC - HIGHER ORDER COMPONENT
    <ModeContextProvider>
      <ReducerIntro />
      <Todos />
      <UserInterFace />
    </ModeContextProvider>
  );
}

export default App;
