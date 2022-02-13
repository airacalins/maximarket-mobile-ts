import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import React from 'react';
import MenuNavigator from './MenuNavigator';
import HomeNavigator from './HomeNavigator';

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeNavigator"
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    title: "Home"
                }}
            />

            <Tab.Screen
                name="MenuNavigator"
                component={MenuNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="menu" color={color} size={size} />
                    ),
                    title: "Menu"
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
