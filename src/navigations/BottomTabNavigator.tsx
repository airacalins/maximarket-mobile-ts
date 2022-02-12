import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="MenuNavigator"
                component={MenuNavigator}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
