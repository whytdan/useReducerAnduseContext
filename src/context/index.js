import React, { useState } from 'react';

export const modeContext = React.createContext();

export default function ModeContextProvider(props) {
  const [mode, setMode] = useState('LIGHT');

  const toggleMode = () => {
    // if (mode === 'LIGHT') {
    //   setMode('DARK');
    // } else {
    //   setMode('LIGHT');
    // }
    setMode(mode === 'LIGHT' ? 'DARK' : 'LIGHT');
  };

  return (
    <modeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {props.children}
    </modeContext.Provider>
  );
}
