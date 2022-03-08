// import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNav from '../TabNavigation';
import Settings from '../../screens/SettingsScreen';
import { useEffect } from 'react/cjs/react.production.min';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: '#404040',
                // maxWidth: '75%',
            },
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'gray',
            drawerType: 'front',
        }}>
            <Drawer.Screen name='MainTab' component={MainTabNav} />
            <Drawer.Screen name='settings' component={Settings} />
        </Drawer.Navigator>
    )
}