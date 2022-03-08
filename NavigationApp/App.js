import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNav from './src/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}