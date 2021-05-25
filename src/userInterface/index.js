import React, { useContext } from 'react';
import { modeContext } from '../context';

export default function UserInterFace() {
  const { mode, toggleMode } = useContext(modeContext);

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: 500,
          marginTop: 100,
          border: '2px solid red',
          backgroundColor: mode === 'LIGHT' ? '#eee' : '#000',
        }}
      ></div>
      <input
        style={{ width: 30, height: 30 }}
        onChange={toggleMode}
        type="checkbox"
      />
    </div>
  );
}
