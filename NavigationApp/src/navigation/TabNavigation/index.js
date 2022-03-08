import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../../screens/SearchScreen';
import Home from '../../screens/HomeScreen';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function MainTabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name == 'home') {
                    iconName = 'home';
                    size = focused ? 22 : 20;
                }
                if (route.name == 'search') {
                    iconName = 'search1';
                    size = focused ? 22 : 20;
                }
                return (
                    <Icon name={iconName} size={size} color={color} />
                )
            },
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#000000',
            }

        })}

        >
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='search' component={Search} />
        </Tab.Navigator >
    )
}