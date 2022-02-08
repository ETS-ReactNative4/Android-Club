import React from 'react';
import Loading from './src/screens/LoadingScreen';
import Home from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Loading /> */}
      <Home />

    </NavigationContainer>
  )
}