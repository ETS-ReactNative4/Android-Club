import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNav from '../TabNavigation';
import Settings from '../../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='home' component={MainTabNav} />
            <Drawer.Screen name='settings' component={Settings} />
        </Drawer.Navigator>
    )
}