import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/SplashScreen';
import DrawerNav from '../DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='splash' component={Splash} />
            <Stack.Screen name='MainDrawer' component={DrawerNav} />
        </Stack.Navigator>
    )
}