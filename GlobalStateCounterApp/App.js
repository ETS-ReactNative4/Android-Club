import React from 'react';
import MainScreen from './src/screens/MainScreen';

import ContextProvider from './src/context/contextProvider';

export default function App() {
  return (
    <>
      <ContextProvider>
        <MainScreen />
      </ContextProvider>
    </>
  )
}

