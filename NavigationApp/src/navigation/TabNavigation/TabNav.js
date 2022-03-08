import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/HomeScreen';
import Search from '../../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='search' component={Search} />
        </Tab.Navigator>
    )
}